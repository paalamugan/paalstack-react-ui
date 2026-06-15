import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: true,
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', 'react-router'],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: true,
    sourcemap: false,
    shims: true,
    clean: true, // clean up the dist folder before building
    platform: 'browser',
    dts: {
      entry: 'src/index.ts',
    },
    banner: {
      js: "'use client';",
    },
  };
});
