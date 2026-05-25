import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', 'react-router'],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    platform: 'browser',
    dts: {
      entry: 'src/index.ts',
    },
    define: {
      'import.meta.env.TEST': 'false',
      'import.meta.env.DEV': 'false',
    },
    banner: {
      js: "'use client';",
    },
  };
});
