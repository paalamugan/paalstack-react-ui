---
'@paalstack/react-providers': patch
'@paalstack/react-ui': patch
---

Fix `ThemeProvider` to be SSR-safe.

The previous implementation read `localStorage` inside a `useState` initializer, which runs during the server render pass. In Next 16 (and any other SSR setup), `localStorage` is undefined on the server and this crashed with `Cannot read properties of undefined (reading 'getItem')`. Consumers had to wrap the provider in a mount gate.

The new implementation initializes `theme` to `defaultTheme` (consistent on server and first client render, no hydration mismatch) and reads the persisted value from `localStorage` inside a `useEffect` on client mount. localStorage access is also wrapped in try/catch so private-browsing / sandboxed iframes / strict cookie policies no longer break the provider — in those cases the in-memory theme still works, persistence is best-effort.

This is the long-term fix tracked in shadhil-crm's `next.config.ts`. With this in place, web can opt back into per-page static rendering.
