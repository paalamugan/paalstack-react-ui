#!/usr/bin/env node
/**
 * Sync the canonical monorepo skill (skills/paalstack-react-ui/) into every
 * per-package copy (packages/{ui,hooks,icons}/skills/paalstack-react-ui/).
 *
 * The monorepo skill is the single source of truth — it ships in every npm
 * tarball that lists "skills" in its `files` field. Editing it once in the
 * top-level copy and forgetting to sync the per-package copies means
 * consumers get stale docs.
 *
 * Per-package target list specifies which files each package ships. The ui
 * package ships all source files (SKILL.md + README.md + references + scripts).
 * The hooks and icons packages ship a smaller subset (SKILL.md + references/
 * component-inventory.md) — they don't need the README or the build script.
 *
 * Usage:
 *   node scripts/sync-skills.mjs              # sync (overwrites per-package)
 *   node scripts/sync-skills.mjs --check      # exit 1 if any per-package copy differs
 *   node scripts/sync-skills.mjs --check -v   # show every file inspected
 *
 * Wired into:
 *   - pnpm lint:skills (--check, runs in CI)
 *   - pnpm skills:sync (full sync, manual or prebuild)
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SOURCE = join(ROOT, 'skills', 'paalstack-react-ui');

// Per-package target list. Each entry is { targetDir, shipFiles } where
// shipFiles is an explicit allowlist of relative paths (relative to SOURCE)
// that the package ships. Paths NOT in the allowlist are skipped (not
// removed) so packages can keep their own subset without the script
// deleting their files.
const TARGETS = [
  {
    name: '@paalstack/react-ui',
    targetDir: join(ROOT, 'packages', 'ui', 'skills', 'paalstack-react-ui'),
    shipFiles: ['SKILL.md', 'README.md', 'scripts/build-batched.sh', 'references/component-inventory.md'],
  },
  {
    name: '@paalstack/react-hooks',
    targetDir: join(ROOT, 'packages', 'hooks', 'skills', 'paalstack-react-ui'),
    shipFiles: ['SKILL.md', 'references/component-inventory.md'],
  },
  {
    name: '@paalstack/react-icons',
    targetDir: join(ROOT, 'packages', 'icons', 'skills', 'paalstack-react-ui'),
    shipFiles: ['SKILL.md', 'references/component-inventory.md'],
  },
];

const args = new Set(process.argv.slice(2));
const CHECK_ONLY = args.has('--check') || args.has('--check-only');
const VERBOSE = args.has('--verbose') || args.has('-v');

function readSafe(p) {
  return existsSync(p) ? readFileSync(p) : null;
}

if (!existsSync(SOURCE)) {
  console.error(`Source not found: ${SOURCE}`);
  process.exit(2);
}

let driftCount = 0;
let copiedCount = 0;

for (const { name, targetDir, shipFiles } of TARGETS) {
  if (!existsSync(targetDir)) {
    console.warn(`Skipping ${name} target (does not exist): ${relative(ROOT, targetDir)}`);
    continue;
  }

  for (const relPath of shipFiles) {
    const srcPath = join(SOURCE, relPath);
    const dstPath = join(targetDir, relPath);

    if (!existsSync(srcPath)) {
      console.warn(`  ⚠ source file missing: ${relPath} (in ${name} allowlist)`);
      continue;
    }

    const srcBuf = readFileSync(srcPath);
    const dstBuf = readSafe(dstPath);

    if (dstBuf && srcBuf.equals(dstBuf)) {
      if (VERBOSE) console.log(`  ✓ ${relative(ROOT, dstPath)}`);
      continue;
    }

    if (CHECK_ONLY) {
      console.error(`  ✗ drift: ${relative(ROOT, dstPath)}`);
      driftCount++;
      continue;
    }

    mkdirSync(dirname(dstPath), { recursive: true });
    writeFileSync(dstPath, srcBuf);
    console.log(`  ↻ synced: ${relative(ROOT, dstPath)}`);
    copiedCount++;
  }
}

if (CHECK_ONLY) {
  if (driftCount > 0) {
    console.error(`\n${driftCount} file(s) out of sync. Run: pnpm skills:sync`);
    process.exit(1);
  }
  console.log('All per-package skill copies match the monorepo source.');
  process.exit(0);
}

console.log(`\nSynced ${copiedCount} file(s) across ${TARGETS.length} packages.`);