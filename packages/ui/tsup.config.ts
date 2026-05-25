import path from 'node:path';

import tailwindcss from '@tailwindcss/postcss';
import fse from 'fs-extra';
import postcss from 'postcss';
import { defineConfig } from 'tsup';

const name = {
  assets: 'assets',
};
async function buildScopedCss() {
  const inputPath = path.resolve('src/styles/index.app.css');
  const outputPath = path.resolve('dist/index.app.css');
  const css = await fse.readFile(inputPath, 'utf8');
  const result = await postcss([tailwindcss()]).process(css, {
    from: inputPath,
    to: outputPath,
  });
  await fse.writeFile(outputPath, result.css);
  console.log('Built scoped CSS: dist/index.app.css');
  await fse.copy('src/styles/fonts', 'dist/fonts');
  console.log('Copied fonts to dist/fonts');
}

export default defineConfig(() => {
  return {
    splitting: false,
    entry: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}', '!src/**/*.stories.{ts,tsx}', '!src/**/*.d.ts'],
    format: ['esm', 'cjs'],
    external: ['react', 'react-dom'],
    target: 'esnext',
    outDir: 'dist',
    minify: false,
    skipNodeModulesBundle: false,
    bundle: true,
    treeshake: false,
    sourcemap: false,
    clean: true,
    platform: 'browser',
    dts: true,
    async onSuccess() {
      console.log('Build succeeded!');
      await Promise.all([fse.copy('src/styles/theme.css', 'dist/theme.css'), buildScopedCss()]);
    },
    shims: true,
  };
});
