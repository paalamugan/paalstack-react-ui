import fse from 'fs-extra';
import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom', 'axios', /@paalstack\/react-(.*)/, 'tailwind-merge', 'clsx', 'tailwindcss'],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    async onSuccess() {
      console.log('Build succeeded!');
      await fse.copy('src/assets', 'dist/assets');
      console.log('Assets copied!');
    },
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true, // clean up the dist folder before building
    dts: true,
    platform: 'browser',
    shims: true,
  };
});
