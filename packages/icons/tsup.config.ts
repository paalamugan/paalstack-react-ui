import fse from 'fs-extra';
import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    splitting: true,
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
    clean: true, // clean up the dist folder before building
    dts: true,
    platform: 'browser',
    shims: true,
    noExternal: ['react-icons'],
    async onSuccess() {
      console.log('Copying packages...');
      const packages = await fse.readdir('src');
      for (const pkg of packages) {
        if (fse.existsSync(`dist/${pkg}/index.js`)) {
          await fse.writeJSON(
            `dist/${pkg}/package.json`,
            {
              name: `@paalstack/react-icons/${pkg}`,
              description: `React icon for ${pkg}`,
              main: 'index.cjs',
              module: 'index.js',
              types: 'index.d.ts',
              sideEffects: false,
            },
            {
              spaces: 2,
            },
          );
        }
      }
      console.log('Packages copied!');
    },
  };
});
