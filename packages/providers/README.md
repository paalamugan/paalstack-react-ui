# @paalstack/react-providers

React context providers for theming, toast notifications, and internationalisation — used as the foundation for all Paalstack React UI applications.

> **Note:** Most consumers should install [`@paalstack/react-ui`](https://www.npmjs.com/package/@paalstack/react-ui) instead — it re-exports everything from this package in one convenient bundle.

## Docs

[Storybook → Providers docs](https://paalamugan.github.io/paalstack-react-ui/?path=/docs/overview-providers--docs)

## Installation

```bash
pnpm add @paalstack/react-providers
# or
npm install @paalstack/react-providers
# or
yarn add @paalstack/react-providers
```

## Providers

### `ThemeProvider` — React / Vite apps

Wraps your app with light/dark theme support. Use the `useTheme` hook to read or toggle the current theme.

```tsx
import { ThemeProvider, useTheme } from '@paalstack/react-providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <MyApp />
    </ThemeProvider>
  );
}

function ToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>;
}
```

### `NextThemeProvider` — Next.js apps

Drop-in replacement for `ThemeProvider` that integrates with `next-themes` for SSR-safe theming.

```tsx
// app/layout.tsx
import { NextThemeProvider } from '@paalstack/react-providers/NextThemeProvider';

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

```tsx
// Client component
'use client';

import { useNextTheme } from '@paalstack/react-providers/NextThemeProvider';

function ThemeToggle() {
  const { isDark, setTheme } = useNextTheme();
  return <button onClick={() => setTheme(isDark ? 'light' : 'dark')}>Toggle</button>;
}
```

### `ToastProvider` — Toast notifications

Renders a `Toaster` powered by [Sonner](https://sonner.emilkowal.ski/). Call `toast.*` helpers from anywhere in your app.

```tsx
import { toast } from '@paalstack/react-providers';
import { ToastProvider } from '@paalstack/react-providers/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <button onClick={() => toast.success('Saved!')}>Save</button>
    </ToastProvider>
  );
}
```

### `FormatIntlProvider` — Internationalisation

Provides locale-aware formatting for dates, numbers, and currencies via React context.

```tsx
import { FormatIntlProvider } from '@paalstack/react-providers/FormatIntlProvider';

function App() {
  return (
    <FormatIntlProvider locale="en-US" timeZone="America/New_York">
      <MyApp />
    </FormatIntlProvider>
  );
}
```

## Exports

| Sub-path               | Exports                               |
| ---------------------- | ------------------------------------- |
| `.` (default)          | All providers and hooks               |
| `./ThemeProvider`      | `ThemeProvider`, `useTheme`           |
| `./NextThemeProvider`  | `NextThemeProvider`, `useNextTheme`   |
| `./ToastProvider`      | `ToastProvider`, `toast`              |
| `./FormatIntlProvider` | `FormatIntlProvider`, `useFormatIntl` |
| `./styles.css`         | Provider base styles                  |

## Requirements

| Peer dependency | Version   |
| --------------- | --------- |
| `react`         | `>= 18.2` |
| `react-dom`     | `>= 18.2` |

## License

MIT © [Paalamugan](https://github.com/paalamugan)
