import prettierConfig from './prettier.config';

export default {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: false,
      },
    ],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/prefer-as-const': 'warn',
    eqeqeq: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
    'import/default': 'off',
    'import/export': 'error',
    'import/named': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'error',
    // 'tailwindcss/no-custom-classname': [
    //   'warn',
    //   {
    //     whitelist: [
    //       'danger',
    //       'tertiary',
    //       'secondary',
    //       'primary',
    //       'success',
    //       'warning',
    //       'info',
    //       'muted',
    //       'accent',
    //       'popover',
    //       'card',
    //       'toast-*',
    //       'toast-headless',
    //       'toast-headless-title',
    //       'toast-headless-description',
    //       'toast-headless-close',
    //       'toast-spinner',
    //       'toast-loading-wrapper',
    //       'toast-loading-bar',
    //       'toast-loader',
    //     ],
    //   },
    // ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'],
      },
      typescript: {
        project: ['packages/*/tsconfig.json', 'tsconfig.json'],
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  overrides: [
    {
      files: ['*.mdx', '*.md'],
      extends: 'plugin:mdx/recommended',
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.stories.tsx', '*.stories.ts', '*.stories.jsx', '*.stories.js'],
      rules: {
        'import/no-unresolved': [
          'error',
          {
            ignore: ['^@paalstack/'],
          },
        ],
      },
    },
  ],
};
