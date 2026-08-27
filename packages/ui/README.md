# @paalstack/react-ui

The all-in-one Paalstack React UI package — accessible components, layout primitives, 60+ hooks, 31 icon packs, providers, and utility functions bundled together and styled with Tailwind CSS v4.

[![Storybook](https://img.shields.io/badge/Storybook-docs-FF4785?logo=storybook&logoColor=white)](https://paalamugan.github.io/paalstack-react-ui/)
[![npm](https://img.shields.io/npm/v/@paalstack/react-ui)](https://www.npmjs.com/package/@paalstack/react-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Docs

[https://paalamugan.github.io/paalstack-react-ui/](https://paalamugan.github.io/paalstack-react-ui/)

## Installation

```bash
pnpm add @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
# or
npm install @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
```

## Quick start

### React (Vite)

**1. Install dependencies**

```bash
pnpm add @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
pnpm add -D tailwindcss @tailwindcss/vite
```

**2. Configure Vite**

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

**3. Set up global styles (`src/index.css`)**

```css
@import '@paalstack/react-ui/styles.css';
@import '@paalstack/react-ui/theme.css';
@import 'tailwindcss';
@source '../node_modules/@paalstack/react-ui';

@layer base {
  * {
    @apply border-border;
  }
}
```

**4. Wrap your app**

```tsx
// src/main.tsx
import React from 'react';

import { ThemeProvider } from '@paalstack/react-ui';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

### Next.js

**1. Install dependencies**

```bash
pnpm add @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
pnpm add -D tailwindcss @tailwindcss/postcss
```

**2. Configure PostCSS (`postcss.config.mjs`)**

```js
export default { plugins: { '@tailwindcss/postcss': {} } };
```

**3. Set up global styles (`app/globals.css`)**

```css
@import '@paalstack/react-ui/styles.css';
@import '@paalstack/react-ui/theme.css';
@import 'tailwindcss';
@source '../../node_modules/@paalstack/react-ui';

@layer base {
  * {
    @apply border-border;
  }
}
```

**4. Wrap your layout**

```tsx
// app/layout.tsx
import { NextThemeProvider } from '@paalstack/react-ui';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
```

## Usage

```tsx
import { useCounter } from '@paalstack/react-hooks';
import { LuMoon, LuSun } from '@paalstack/react-icons/lu';
import { Badge, Box, Button, Card, CardContent, CardHeader, CardTitle, Text, useTheme } from '@paalstack/react-ui';

export default function App() {
  const [count, { increment, decrement, reset }] = useCounter(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <Box className="min-h-screen bg-background p-8 text-foreground">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Counter
            <Badge variant="secondary">{theme} mode</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Text className="text-center text-4xl font-bold tabular-nums">{count}</Text>
          <div className="flex justify-center gap-2">
            <Button variant="outline" onClick={() => decrement()}>
              −
            </Button>
            <Button variant="outline" onClick={() => increment()}>
              +
            </Button>
            <Button variant="ghost" onClick={() => reset()}>
              Reset
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={toggleTheme}>
            {theme === 'light' ? <LuMoon className="mr-2 h-4 w-4" /> : <LuSun className="mr-2 h-4 w-4" />}
            Toggle theme
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
```

## What's included

This package re-exports everything from all sub-packages:

| Sub-package                   | Contents                                                  |
| ----------------------------- | --------------------------------------------------------- |
| `@paalstack/react-components` | 50+ accessible UI components (Button, Dialog, Table, …)   |
| `@paalstack/react-layouts`    | Layout primitives (Box, Flex, Grid, VStack, Container, …) |
| `@paalstack/react-providers`  | ThemeProvider, NextThemeProvider, ToastProvider           |
| `@paalstack/react-shared`     | cn, dateIntl, numberIntl, currencyIntl, httpClient, …     |

Install these separately for standalone usage:

- [`@paalstack/react-hooks`](../hooks) — 60+ React hooks
- [`@paalstack/react-icons`](../icons) — 31 icon packs

## Exports

| Sub-path              | Description                                       |
| --------------------- | ------------------------------------------------- |
| `.`                   | All components, providers, layouts, and utilities |
| `./lib`               | Utility functions (cn, dateIntl, httpClient, …)   |
| `./styles.css`        | Base styles and CSS variable definitions          |
| `./styles-scoped.css` | Scoped styles for embedding inside existing apps  |
| `./theme.css`         | Default light/dark theme CSS variables            |
| `./agent-skill`       | AI agent skill (SKILL.md) for this library        |

### Scoped styles

Use `styles-scoped.css` instead of `styles.css` when embedding inside an existing app to prevent Tailwind utilities from leaking outside your component tree.

## AI agent skill

This package ships with an agent skill that teaches AI coding agents (Hermes, Claude Code, Cursor, …) the library's conventions: the props API, the full component inventory, setup requirements, and known pitfalls.

After installing, run:

```bash
npx paalstack-skill
```

It copies the skill into every detected agent. Flags: `--list`, `--hermes`, `--claude`, `--project`, `--force`. The skill is versioned with this package — after upgrading, re-run with `--force`.

## Custom theme

Override any CSS variable in your global stylesheet after the imports:

```css
@import '@paalstack/react-ui/styles.css';
@import '@paalstack/react-ui/theme.css';
@import 'tailwindcss';

@layer base {
  :root {
    --primary: oklch(55% 0.2 250);
    --primary-foreground: oklch(98% 0 0);
    --radius: 0.5rem;
  }
  .dark {
    --primary: oklch(65% 0.2 250);
    --primary-foreground: oklch(10% 0 0);
  }
}
```

## Requirements

| Peer dependency | Version  |
| --------------- | -------- |
| `react`         | `>= 18`  |
| `react-dom`     | `>= 18`  |
| `tailwindcss`   | `>= 4.x` |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
