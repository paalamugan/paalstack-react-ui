import path from 'path';

import fs from 'fs-extra';

/**
 * Scans packages/<dir>/src for sub-directories and ensures:
 *  1. Every sub-directory has an index.ts barrel file.
 *  2. The root src/index.ts re-exports all sub-directories.
 *
 * Packages intentionally excluded:
 *  - shared     (hand-maintained sub-path exports via package.json)
 *  - test-utils (single public entry, no sub-directories to barrel)
 *  - config     (eslint/prettier configs, not component barrels)
 *  - icons      (barrel generated separately via tsup entry glob)
 */
const validatePackageExport = async (dir, prefix = '') => {
  const srcPath = path.join('.', 'packages', dir, 'src');

  if (!(await fs.pathExists(srcPath))) {
    console.warn(`[validate-package-exports] Skipping "${dir}": src directory not found.`);
    return;
  }

  const entries = await fs.readdir(srcPath);

  const exportLines = (
    await Promise.allSettled(
      entries.map(async (entry) => {
        // Strip .ts extension so bare files like index.ts become "index"
        const name = entry.replace(/\.tsx?$/, '');

        // Always skip the root barrel file
        if (name === 'index') return null;

        const entryPath = path.join(srcPath, entry);
        const stat = await fs.stat(entryPath);

        // Only process directories — skip plain files (e.g. types.ts, utils.ts)
        if (!stat.isDirectory()) return null;

        const indexFile = path.join(entryPath, 'index.ts');
        const exportLine = `export * from './${name}';`;

        if (await fs.pathExists(indexFile)) {
          return exportLine;
        }

        // Sub-directory is missing its index.ts — create a minimal barrel
        await fs.writeFile(indexFile, `${exportLine}\n`);
        console.log(`[validate-package-exports] Created ${dir}/src/${name}/index.ts`);
        return exportLine;
      }),
    )
  )
    .filter((r) => r.status === 'fulfilled' && r.value !== null)
    .map((r) => r.value);

  if (!exportLines.length) {
    console.warn(`[validate-package-exports] No sub-directories found in "${dir}/src" — skipping barrel update.`);
    return;
  }

  const barrelContent = `${prefix}${exportLines.join('\n')}\n`;
  const barrelPath = path.join(srcPath, 'index.ts');

  // Only write if the content actually changed to avoid unnecessary dirty files
  const existing = (await fs.pathExists(barrelPath)) ? await fs.readFile(barrelPath, 'utf8') : '';
  if (existing === barrelContent) return;

  await fs.writeFile(barrelPath, barrelContent);
  console.log(`[validate-package-exports] Updated "${dir}/src/index.ts"`);
};

const run = async () => {
  await Promise.all([
    validatePackageExport('components', `'use client';\n\n`),
    validatePackageExport('hooks', `'use client';\n\n`),
    validatePackageExport('providers', `'use client';\n\n`),
    validatePackageExport('layouts'),
  ]);
};

run().catch((err) => {
  console.error('[validate-package-exports] Fatal error:', err);
  process.exit(1);
});
