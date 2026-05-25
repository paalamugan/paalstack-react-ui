# @paalstack/react-config

Shared tooling configuration for the Paalstack React UI monorepo — includes ESLint, Prettier, and TypeScript presets used across all packages.

> **Note:** This is an internal package. It is not published to npm and is not intended for use outside of the monorepo.

## Docs

[Storybook → Getting Started](https://paalamugan.github.io/paalstack-react-ui/)

## What's included

| Export          | Description                                   |
| --------------- | --------------------------------------------- |
| `.` (default)   | Shared TypeScript/base configuration          |
| `./prettier`    | Prettier configuration preset                 |
| `./eslint`      | ESLint configuration preset                   |
| `./eslint-vite` | ESLint configuration preset for Vite projects |

## Usage

### Prettier

```js
// prettier.config.js
import config from '@paalstack/react-config/prettier';

export default config;
```

### ESLint

```js
// .eslintrc.cjs
const config = require('@paalstack/react-config/eslint');
module.exports = config;
```

### ESLint (Vite projects)

```js
// .eslintrc.cjs
const config = require('@paalstack/react-config/eslint-vite');
module.exports = config;
```

## License

MIT © [Paalamugan](https://github.com/paalamugan)
