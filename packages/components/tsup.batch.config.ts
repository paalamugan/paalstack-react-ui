import { defineConfig } from 'tsup';

/**
 * Batched build config.
 *
 * The monolithic build (all ~300 entries + DTS in one tsup run) spikes Node
 * memory past 2GB and can hang weaker machines. This config lets a runner
 * script invoke tsup once per batch of entry files:
 *
 *   BATCH_ENTRIES="src/A/index.ts src/B/index.ts" npx tsup --config tsup.batch.config.ts
 *
 * JS batches never clean dist (--no-clean via runner) and emit no DTS.
 * The final DTS pass runs separately: DTS_ONLY=1 with the single index entry.
 */
export default defineConfig(() => {
  const batchEntries = (process.env.BATCH_ENTRIES ?? '')
    .split(/[\s,]+/)
    .filter(Boolean);
  const dtsOnly = process.env.DTS_ONLY === '1';

  const entry =
    batchEntries.length > 0
      ? batchEntries
      : ['src/index.ts'];

  return {
    splitting: false,
    entry,
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', 'react-router', 'react-error-boundary', /@paalstack\/react-(.*)/],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: false, // runner controls cleaning: never clean inside batches
    platform: 'browser',
    shims: true,
    dts: dtsOnly ? { entry: 'src/index.ts', only: true } : false,
    banner: dtsOnly ? undefined : { js: "'use client';" },
  };
});