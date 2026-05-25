export default {
  'packages/**/*.{ts,tsx}': () => 'npm run type-check',
  'packages/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --config .eslintrc.cjs --fix --no-ignore --cache --max-warnings 0',
  ],
  '*.{json,md,mdx,yml}': 'prettier --write',
};
