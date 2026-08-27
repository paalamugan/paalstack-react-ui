#!/usr/bin/env bash
# Batched build for @paalstack/react-components.
#
# Why: one tsup run over ~300 entries spikes memory (~2GB esbuild workers)
# and can hang the machine. This script splits entries into batches of 30,
# runs tsup once per batch (each process exits -> memory freed), then does
# a single DTS pass. Progress is resumable via a marker file.
#
# Usage:
#   bash build-batched.sh            # full run (clean dist first)
#   bash build-batched.sh --resume   # skip batches whose stamp file exists
set -euo pipefail
cd "$(dirname "$0")"

BATCH_SIZE="${BATCH_SIZE:-30}"
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

# 3. Run batches
i=0; batch=0; failed=0
while [ $i -lt $TOTAL ]; do
  chunk=("${ENTRIES[@]:$i:$BATCH_SIZE}")
  stamp="$STAMPS_ROOT/batch-$(printf '%03d' "$batch").done"
  if [ "$RESUME" -eq 1 ] && [ -f "$stamp" ]; then
    echo "[batch $batch] skipped (already done)"
    i=$((i + BATCH_SIZE)); batch=$((batch + 1))
    continue
  fi
  echo "[batch $batch] building ${#chunk[@]} entries (${chunk[0]} .. ${chunk[-1]})"
  # fresh process per batch = memory freed after each
  if NODE_OPTIONS="--max-old-space-size=2048" \
     BATCH_ENTRIES="$(printf '%s\n' "${chunk[@]}")" \
     npx tsup --config tsup.batch.config.ts --no-clean > /tmp/tsup-batch-$batch.log 2>&1; then
    touch "$stamp"
    echo "[batch $batch] OK"
  else
    echo "[batch $batch] FAILED — see /tmp/tsup-batch-$batch.log"
    tail -20 /tmp/tsup-batch-$batch.log
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
   DTS_ONLY=1 npx tsup --config tsup.batch.config.ts > /tmp/tsup-dts.log 2>&1; then
  echo "DTS OK"
else
  echo "DTS FAILED — see /tmp/tsup-dts.log"
  tail -30 /tmp/tsup-dts.log
  exit 1
fi

echo "Batched build complete."
ls dist | head -5