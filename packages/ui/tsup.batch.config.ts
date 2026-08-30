import { defineConfig } from 'tsup';

/**
 * Batched build config for @paalstack/react-ui.
 *
 * The monolithic build (2 entries + full-graph DTS) can spike Node memory
 * past 2GB on the DTS pass because ui re-exports from components/layouts/
 * providers/hooks/icons/shared. This config splits JS into per-entry batches
 * (UI has 2 TS entries: index.ts + lib/index.ts) and isolates the heavy
 * DTS pass into a single dedicated run.
 *
 *   BATCH_ENTRIES="src/index.ts src/lib/index.ts" \
 *     npx tsup --config tsup.batch.config.ts --no-clean
 *
 * JS batches never clean dist (--no-clean via runner) and emit no DTS.
 * The final DTS pass runs separately: DTS_ONLY=1 with src/index.ts.
 *
 * CSS side-effects (theme.css, base.css, utilities.css, toast.css, fonts.css,
 * all.css copy + scoped index.app.css PostCSS build + fonts copy) are NOT
 * handled here — the runner script calls the same steps the main
 * tsup.config.ts onSuccess() hook does, after all batches succeed.
 */
export default defineConfig(() => {
  const batchEntries = (process.env.BATCH_ENTRIES ?? '').split(/[\s,]+/).filter(Boolean);
  const dtsOnly = process.env.DTS_ONLY === '1';

  const entry = batchEntries.length > 0 ? batchEntries : ['src/index.ts'];

  return {
    splitting: false,
    entry,
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom'],
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
  };
});
