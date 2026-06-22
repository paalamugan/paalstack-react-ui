# Repository Overview

PaalStack React UI is a pnpm monorepo publishing accessible React components, hooks, icons, layouts, and providers built on **Base UI**, **Tailwind CSS v4**, and **TypeScript**. Build tool: **tsup** (ESM + CJS + DTS).

## Package Matrix

| Package | NPM Name | Version | Purpose |
|---------|----------|---------|---------|
| components | `@paalstack/react-components` | 1.1.2 | 70+ accessible UI components |
| hooks | `@paalstack/react-hooks` | 1.1.1 | 72 React hooks |
| icons | `@paalstack/react-icons` | 1.1.0 | 31 react-icons sub-path re-exports |
| layouts | `@paalstack/react-layouts` | 1.1.1 | Polymorphic layout & typography |
| providers | `@paalstack/react-providers` | 1.1.1 | Theme, toast, i18n providers |
| shared | `@paalstack/react-shared` | 1.1.1 | Utilities, types, constants, HTTP/format libs |
| ui | `@paalstack/react-ui` | 1.1.2 | All-in-one bundle (components + layouts + providers + shared) |
| config | `@paalstack/react-config` | 1.1.0 | Shared ESLint/Prettier configs |
| test-utils | `@paalstack/react-test-utils` | 1.1.0 | Testing helpers and mocks |

---

## @paalstack/react-components

**Purpose:** Production UI components styled with Tailwind v4, built primarily on @base-ui/react primitives.

**Entry:** `dist/index.js` (ESM), `dist/index.cjs` (CJS), `dist/index.d.ts`

**Build:** `tsup` — bundles all `src/**/*.{ts,tsx}` excluding tests/stories.

**Dependencies:** @base-ui/react, class-variance-authority, @tanstack/react-table, cmdk, date-fns, embla-carousel-react, input-otp, react-day-picker, react-hook-form, @hookform/resolvers, zod, recharts, sonner, vaul, react-resizable-panels, react-error-boundary, react-router

**Peer Dependencies:** `react >=18`, `react-dom >=18`

**Public Exports:** 70 component modules — see [EXPORT_INVENTORY.md](./EXPORT_INVENTORY.md)

**Import:**
```tsx
import { Button, Dialog, Form } from '@paalstack/react-components';
// or via umbrella package:
import { Button } from '@paalstack/react-ui';
```

---

## @paalstack/react-hooks

**Purpose:** Standalone hooks for state, browser APIs, focus management, routing, and async patterns.

**Entry:** `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`

**Build:** `tsup` — `sideEffects: false` for tree-shaking.

**Dependencies:** @zag-js/element-size, react-router, zen-observable-ts

**Peer Dependencies:** `react >=18`, `react-dom >=18`

**Public Exports:** 72 hooks — see [HOOKS_CATALOG.md](./HOOKS_CATALOG.md)

**Import:**
```tsx
import { useDisclosure, useLocalStorage, useMediaQuery } from '@paalstack/react-hooks';
```

---

## @paalstack/react-icons

**Purpose:** Tree-shakeable re-exports of [react-icons](https://react-icons.github.io/react-icons/) via sub-path imports.

**Entry:** `dist/index.js` (full react-icons barrel) + 31 sub-path entries

**Build:** `tsup` with per-library entries

**Dependencies:** react-icons ^5.6.0

**Peer Dependencies:** `react >=18`, `react-dom >=18`

**Sub-path Exports:** ai, bi, bs, cg, ci, di, fa, fa6, fc, fi, gi, go, gr, hi, hi2, im, io, io5, lia, lu, md, pi, ri, rx, si, sl, tb, tfi, ti, vsc, wi

**Import:**
```tsx
import { LuSettings, LuUser } from '@paalstack/react-icons/lu';
import { FiPlus } from '@paalstack/react-icons/fi';
```

---

## @paalstack/react-layouts

**Purpose:** Polymorphic layout primitives (Box, Flex, Grid, Stack) and typography (Heading, Text).

**Entry:** `dist/index.js`, `dist/index.d.ts`

**Build:** `tsup`

**Dependencies:** None (uses shared via workspace path aliases at build time)

**Peer Dependencies:** `react >=18`, `react-dom >=18`

**Exports:** Box, Center, Container, Flex, Grid, HStack, Heading, Paper, Portal, Stack, Text, Typography, VStack, Wrap

---

## @paalstack/react-providers

**Purpose:** Application-level context providers.

**Entry:** `dist/index.js` + sub-paths for each provider + `./styles.css`

**Build:** `tsup`

**Dependencies:** next-themes, sonner, react-router

**Peer Dependencies:** `react >=18.2.x`, `react-dom >=18.2.x`

**Exports:** ThemeProvider, NextThemeProvider, ToastProvider, FormatIntlProvider, useTheme, useToast, useFormatIntl

**Import:**
```tsx
import { ThemeProvider } from '@paalstack/react-ui';
import '@paalstack/react-ui/styles.css';
```

---

## @paalstack/react-shared

**Purpose:** Shared utilities, design tokens (colors CVA), types, HTTP client, formatters, logger.

**Entry:** `dist/index.js` + `./constants`, `./types`, `./utils`, `./lib`

**Build:** `tsup`

**Dependencies:** axios, cheerio, clsx, tailwind-merge, date-fns, date-fns-tz, intl-messageformat

**Peer Dependencies:** `react >=18.2.x`, `react-dom >=18.2.x`, `tailwindcss >=4.x`

---

## @paalstack/react-ui

**Purpose:** Single install for components, layouts, providers, and shared utilities with CSS entry points.

**Entry:** `dist/index.js`, `./styles.css`, `./styles-scoped.css`, `./theme.css`, `./lib`

**Build:** `tsup` + PostCSS/Tailwind for CSS artifacts

**Dependencies:** Bundles components, layouts, providers, shared (hooks/icons are separate packages — install alongside)

**Peer Dependencies:** `react >=18`, `react-dom >=18`, `tailwindcss >=4`

**Recommended setup:**
```tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Button, Box } from '@paalstack/react-ui';
```

---

## @paalstack/react-config

**Purpose:** Monorepo ESLint and Prettier configuration.

**Exports:** `eslintConfig`, `eslintViteConfig`, `prettierConfig`

**No runtime peer dependencies.**

---

## @paalstack/react-test-utils

**Purpose:** Jest/Testing Library helpers, focus utilities, browser mocks, custom render.

**Exports:** Re-exports from @testing-library/react, accessibility helpers, mocks, render wrappers.

---

## Monorepo Scripts

| Script | Description |
|--------|-------------|
| `pnpm build` | Build all packages via tsup |
| `pnpm storybook` | Dev Storybook on :6006 |
| `pnpm test` | Run package tests |
| `pnpm lint` | ESLint all packages |
| `pnpm validate:package-exports` | Validate export maps |
| `pnpm docs:build` | Regenerate AI docs in `docs/` and `.cursor/rules/` |

## Internal Path Aliases (source)

Packages use `@/components`, `@/layouts`, `@/shared`, `@/providers`, `@/hooks` during development. Published `@paalstack/react-ui` bundles these into a single package.

Generated: 2026-06-22T21:03:07.218Z
