import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', /@paalstack\/react-(.*)/],
    target: 'esnext',
    outDir: 'dist',
    minify: true,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    platform: 'browser',
    dts: true,
    banner: {
      js: "'use client';",
    },
    shims: true,
  };
});
