#!/usr/bin/env bash
# Batched build for @paalstack/react-ui.
#
# Why: the main tsup run's DTS pass traverses the full dependency graph
# (ui re-exports from components/layouts/providers/hooks/icons/shared) and
# can spike Node memory past 2GB. This script splits the 2 TS entries into
# one batch each, runs tsup once per batch (each process exits -> memory
# freed), then does a single DTS pass. CSS side-effects (theme.css,
# base.css, utilities.css, toast.css, fonts.css, all.css copy + scoped
# index.app.css PostCSS build + fonts copy) run after JS+DTS succeed so
# the dist is consistent with the main `npm run build` output.
#
# Prereq: packages/components must be built already (ui imports its
# compiled output). Run `bash ../components/build-batched.sh` first.
#
# Usage:
#   bash build-batched.sh            # full run (clean dist first)
#   bash build-batched.sh --resume   # skip batches whose stamp file exists
set -euo pipefail
cd "$(dirname "$0")"

BATCH_SIZE="${BATCH_SIZE:-10}"
STAMP_DIR="node_modules/.cache/tsup-batches"
STAMPS_ROOT="../../../node_modules/.cache/tsup-batches"
mkdir -p "$STAMPS_ROOT"

RESUME=0
[ "${1:-}" = "--resume" ] && RESUME=1

# 1. Collect entries (same glob as tsup.config.ts)
mapfile -t ENTRIES < <(find src -type f \( -name '*.ts' -o -name '*.tsx' \) \
  ! -name '*.test.ts' ! -name '*.test.tsx' \
  ! -name '*.stories.ts' ! -name '*.stories.tsx' \
  ! -name '*.d.ts' | sort)

TOTAL=${#ENTRIES[@]}
echo "Entries: $TOTAL"

# 2. Clean dist only on a fresh (non-resume) run
if [ "$RESUME" -eq 0 ]; then
  rm -rf dist
  rm -rf "$STAMPS_ROOT"
fi
mkdir -p "$STAMPS_ROOT" dist

# 3. Run JS batches
i=0; batch=0; failed=0
while [ $i -lt $TOTAL ]; do
  chunk=("${ENTRIES[@]:$i:$BATCH_SIZE}")
  stamp="$STAMPS_ROOT/ui-batch-$(printf '%03d' "$batch").done"
  if [ "$RESUME" -eq 1 ] && [ -f "$stamp" ]; then
    echo "[ui batch $batch] skipped (already done)"
    i=$((i + BATCH_SIZE)); batch=$((batch + 1))
    continue
  fi
  echo "[ui batch $batch] building ${#chunk[@]} entries (${chunk[0]} .. ${chunk[-1]})"
  # fresh process per batch = memory freed after each
  if NODE_OPTIONS="--max-old-space-size=2048" \
     BATCH_ENTRIES="$(printf '%s\n' "${chunk[@]}")" \
     npx tsup --config tsup.batch.config.ts --no-clean > /tmp/tsup-ui-batch-$batch.log 2>&1; then
    touch "$stamp"
    echo "[ui batch $batch] OK"
  else
    echo "[ui batch $batch] FAILED — see /tmp/tsup-ui-batch-$batch.log"
    tail -20 /tmp/tsup-ui-batch-$batch.log
    failed=1
    break
  fi
  i=$((i + BATCH_SIZE)); batch=$((batch + 1))
done

if [ "$failed" -eq 1 ]; then
  echo "Batched JS build failed. Fix and re-run with --resume."
  exit 1
fi

# 4. Final DTS pass (single entry, whole-graph type info)
echo "DTS pass..."
if NODE_OPTIONS="--max-old-space-size=3072" \
   DTS_ONLY=1 npx tsup --config tsup.batch.config.ts > /tmp/tsup-ui-dts.log 2>&1; then
  echo "DTS OK"
else
  echo "DTS FAILED — see /tmp/tsup-ui-dts.log"
  tail -30 /tmp/tsup-ui-dts.log
  exit 1
fi

# 5. CSS side-effects — mirror tsup.config.ts onSuccess() so dist matches
#    the main `npm run build` output: copy 6 CSS files + PostCSS-build the
#    scoped index.app.css + copy fonts/.
echo "CSS side-effects..."
node --input-type=module -e "
import path from 'node:path';
import fse from 'fs-extra';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const inputPath = path.resolve('src/styles/index.app.css');
const outputPath = path.resolve('dist/index.app.css');
const css = await fse.readFile(inputPath, 'utf8');
const result = await postcss([tailwindcss()]).process(css, {
  from: inputPath,
  to: outputPath,
});
await fse.writeFile(outputPath, result.css);
console.log('Built scoped CSS: dist/index.app.css');

await Promise.all([
  fse.copy('src/styles/theme.css', 'dist/theme.css'),
  fse.copy('src/styles/base.css', 'dist/base.css'),
  fse.copy('src/styles/utilities.css', 'dist/utilities.css'),
  fse.copy('src/styles/toast.css', 'dist/toast.css'),
  fse.copy('src/styles/fonts.css', 'dist/fonts.css'),
  fse.copy('src/styles/all.css', 'dist/all.css'),
  fse.copy('src/styles/fonts', 'dist/fonts'),
]);
console.log('Copied 6 CSS files + fonts/ to dist');
" || { echo "CSS side-effects failed"; exit 1; }

echo "Batched build complete."
ls dist | head -10