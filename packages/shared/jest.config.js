import { createRequire } from 'module';

import { pathsToModuleNameMapper } from 'ts-jest';

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `tsConfig.compilerOptions.paths` option):
const tsConfig = createRequire(import.meta.url)('../../tsconfig.json');

/** import("ts-jest").JestConfigWithTsJest **/
const jestConfig = {
  // preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
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
    'node_modules/(@formatjs|intl-messageformat)/.+\\.js$': [
      'ts-jest',
      {
        tsconfig: {
          allowJs: true,
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  modulePaths: [tsConfig.compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  transformIgnorePatterns: ['node_modules/(?!(@formatjs|intl-messageformat))/'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths, { prefix: '<rootDir>/../../' }),
    '^lodash-es$': 'lodash',
  },
  testPathIgnorePatterns: ['dist'],
  setupFilesAfterEnv: ['../../setupTests.ts'],
  testMatch: [`**/__tests__/**/*.+(ts|tsx|js)`, `**/?(*.)+(spec|test).+(ts|tsx|js)`],
};

export default jestConfig;
