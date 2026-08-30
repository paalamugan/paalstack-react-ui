# @paalstack/react-providers

## 1.1.2

### Patch Changes

- [`0a73a94`](https://github.com/paalamugan/paalstack-react-ui/commit/0a73a94e0f94aa2df7ececc22233087cb5c705bb) Thanks [@paalamugan](https://github.com/paalamugan)! - Fix `ThemeProvider` to be SSR-safe.

  The previous implementation read `localStorage` inside a `useState` initializer, which runs during the server render pass. In Next 16 (and any other SSR setup), `localStorage` is undefined on the server and this crashed with `Cannot read properties of undefined (reading 'getItem')`. Consumers had to wrap the provider in a mount gate.

  The new implementation initializes `theme` to `defaultTheme` (consistent on server and first client render, no hydration mismatch) and reads the persisted value from `localStorage` inside a `useEffect` on client mount. localStorage access is also wrapped in try/catch so private-browsing / sandboxed iframes / strict cookie policies no longer break the provider — in those cases the in-memory theme still works, persistence is best-effort.

  This is the long-term fix tracked in shadhil-crm's `next.config.ts`. With this in place, web can opt back into per-page static rendering.

## 1.1.1

### Patch Changes

- [`9e6b2b2`](https://github.com/paalamugan/paalstack-react-ui/commit/9e6b2b2c347c4c131b025c96314203f152177d64) Thanks [@paalamugan](https://github.com/paalamugan)! - docs: update README notes to include direct npm links for @paalstack/react-ui

## 1.1.0

### Minor Changes

- [`6515217`](https://github.com/paalamugan/paalstack-react-ui/commit/651521767e96a7f7afccc109c92bb681dc48c5c6) Thanks [@paalamugan](https://github.com/paalamugan)! - chore: add keywords and publish configuration to package.json files across multiple packages

## 1.0.1

### Patch Changes

- [`d4245ee`](https://github.com/paalamugan/paalstack-react-ui/commit/d4245eeadd1e9ad3cda89686d1db63e83871caf3) Thanks [@paalamugan](https://github.com/paalamugan)! - chore: update author names in package.json files, enhance descriptions in several packages, and add README files for new packages
