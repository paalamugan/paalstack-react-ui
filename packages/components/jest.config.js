import { createRequire } from 'module';

import { pathsToModuleNameMapper } from 'ts-jest';

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `tsConfig.compilerOptions.paths` option):
const tsConfig = createRequire(import.meta.url)('../../tsconfig.json');

/** import("ts-jest").JestConfigWithTsJest **/
const jestConfig = {
  // preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        // `allowJs` so the ESM-only packages below can be transformed too.
        tsconfig: {
          allowJs: true,
        },
        diagnostics: {
          ignoreCodes: [1343],
          // A dependency's own type errors are not this package's problem.
          exclude: ['**/node_modules/**'],
        },
        astTransformers: {
          before: [
            {
              path: 'ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  env: {
                    DEV: false,
                    TEST: true,
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  modulePaths: [tsConfig.compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/../../' }),
    '^lodash-es$': 'lodash',
  },
  testPathIgnorePatterns: ['dist'],
  // These ship as ESM only ("type": "module", no CJS entry), so jest's CommonJS
  // runtime cannot require them untransformed. They are pulled in by
  // `@/shared/lib` -> `format` -> `intl-messageformat`, which every component
  // that imports `cn` from `@/shared/lib` reaches - so without this, no
  // component test can even load the component under test.
  transformIgnorePatterns: ['/node_modules/(?!(intl-messageformat|@formatjs)/)'],
  setupFilesAfterEnv: ['../../setupTests.ts'],
  testMatch: [`**/__tests__/**/*.+(ts|tsx|js)`, `**/?(*.)+(spec|test).+(ts|tsx|js)`],
};

export default jestConfig;
