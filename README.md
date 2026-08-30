# Paalstack React UI

An open-source collection of React components, icons, and hooks for building modern web applications — powered by Tailwind CSS v4, TypeScript, and Base UI.

## Packages

| Package                                                | Description                                      |
| ------------------------------------------------------ | ------------------------------------------------ |
| [`@paalstack/react-ui`](./packages/ui)                 | Umbrella package — re-exports all packages + CSS |
| [`@paalstack/react-hooks`](./packages/hooks)           | 60+ React hooks                                  |
| [`@paalstack/react-icons`](./packages/icons)           | react-icons re-exports by family                 |
| [`@paalstack/react-test-utils`](./packages/test-utils) | Testing helpers                                  |

---

## Getting Started

### Prerequisites

- **Node.js** `>= 22` — use [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to manage versions

```bash
nvm install 22 && nvm use 22
```

- **Package manager** — `npm`, `yarn`, or `pnpm` (examples below use `pnpm`)

---

## React (Vite) Setup

### 1. Create a new Vite project

```bash
pnpm create vite my-app --template react-ts
cd my-app
```

### 2. Install packages

```bash
pnpm add @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
pnpm add -D tailwindcss @tailwindcss/vite
```

### 3. Configure the Vite plugin

Update `vite.config.ts` to add the Tailwind CSS v4 Vite plugin:

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 4. Set up global styles

Replace the contents of `src/index.css`:

```css
/* 1. Library base styles (CSS variables, reset) */
@import '@paalstack/react-ui/styles.css';
@import '@paalstack/react-ui/theme.css';

/* 2. Tailwind CSS v4 */
@import 'tailwindcss';

/* 3. Tell Tailwind to scan the library's classes */
@source '../node_modules/@paalstack/react-ui';

@layer base {
  * {
    @apply border-border;
  }
}
```

> **Single-import shortcut:** Replace the two `@import '@paalstack/react-ui/styles.css'` and
> `theme.css` lines with `@import '@paalstack/react-ui/all.css';` — it bundles tokens, base,
> utilities, toast rules, fonts, and the light/dark theme into one import. Use the individual
> subpaths (`base.css`, `utilities.css`, `toast.css`, `fonts.css`, `theme.css`) when you want
> fine-grained control over cascade order.

> **Scoped styles (optional):** If you are embedding this UI inside an existing app and need
> Tailwind utilities to only apply inside a specific element, see [Scoped Styles](#scoped-styles)
> below.

### 5. Wrap your app with ThemeProvider

Update `src/main.tsx`:

```tsx
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

### 6. Use components

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

---

## Next.js Setup

### 1. Create a new Next.js project

```bash
pnpm create next-app my-app --typescript --tailwind --app
cd my-app
```

> **Note:** Select `Yes` for Tailwind CSS during setup. You will upgrade it to v4 in the next step.

### 2. Install packages

```bash
pnpm add @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
pnpm add -D tailwindcss @tailwindcss/postcss
```

### 3. Configure PostCSS

Replace `postcss.config.mjs` (or `postcss.config.js`):

```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
```

> **Remove `tailwind.config.ts`** if it was generated — Tailwind v4 uses CSS-only configuration, no config file needed.

### 4. Set up global styles

Replace the contents of `app/globals.css`:

```css
/* 1. Library base styles (CSS variables, reset) */
@import '@paalstack/react-ui/styles.css';
@import '@paalstack/react-ui/theme.css';

/* 2. Tailwind CSS v4 */
@import 'tailwindcss';

/* 3. Tell Tailwind to scan the library's classes */
@source '../../node_modules/@paalstack/react-ui';

@layer base {
  * {
    @apply border-border;
  }
}
```

> Adjust the `@source` path based on your `globals.css` location:
>
> - `app/globals.css` → `../../node_modules/@paalstack/react-ui`
> - `src/app/globals.css` → `../../../node_modules/@paalstack/react-ui`

> **Single-import shortcut:** Replace the two `@import '@paalstack/react-ui/styles.css'` and
> `theme.css` lines with `@import '@paalstack/react-ui/all.css';` — it bundles tokens, base,
> utilities, toast rules, fonts, and the light/dark theme into one import.

> **Scoped styles (optional):** If you are embedding this UI inside an existing app and need Tailwind utilities to only apply inside a specific element, see [Scoped Styles](#scoped-styles) below.

### 5. Wrap your app with NextThemeProvider

Update `app/layout.tsx`:

```tsx
import type { Metadata } from 'next';

import { NextThemeProvider } from '@paalstack/react-ui';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My App',
  description: 'Built with Paalstack React UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
```

> `suppressHydrationWarning` on `<html>` is required to avoid a React hydration warning caused by the theme class being applied on the client.

### 6. Use components in a Server Component

`app/page.tsx` — Server Components can use layout and display components directly:

```tsx
import { Box, Heading, Text } from '@paalstack/react-ui';

export default function Home() {
  return (
    <Box as="main" className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <Heading className="text-4xl font-bold">Welcome to Paalstack UI</Heading>
      <Text className="text-muted-foreground">Built with Next.js + Tailwind CSS v4</Text>
    </Box>
  );
}
```

### 7. Use interactive components in a Client Component

For anything with state or hooks, add `'use client'` at the top:

```tsx
'use client';

import { useCounter } from '@paalstack/react-hooks';
import { LuMoon, LuSun } from '@paalstack/react-icons/lu';
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Text,
  toast,
  Toaster,
  useNextTheme,
} from '@paalstack/react-ui';

export function DemoCard() {
  const [count, { increment, decrement, reset }] = useCounter(0);
  const { isDark, setTheme } = useNextTheme();

  return (
    <Box className="p-8">
      <Toaster richColors closeButton />
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Counter
            <Badge variant="secondary">{isDark ? 'dark' : 'light'} mode</Badge>
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
          <Button variant="outline" size="sm" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
            {isDark ? <LuSun className="mr-2 h-4 w-4" /> : <LuMoon className="mr-2 h-4 w-4" />}
            Toggle theme
          </Button>
          <Button size="sm" onClick={() => toast.success('Action completed!')}>
            Show toast
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
```

---

## Optional: Custom Theme

Add your own CSS variables inside `globals.css` (or `index.css`) after the imports:

```css
@import '@paalstack/react-ui/styles.css';
@import '@paalstack/react-ui/theme.css';
@import 'tailwindcss';
@source '../node_modules/@paalstack/react-ui';

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

---

## Scoped Styles

Use `styles-scoped.css` instead of `styles.css` when you need to **embed the UI library inside an existing application** without letting Tailwind utility classes affect the rest of the page.

With scoped styles, all generated Tailwind utilities are wrapped inside `.app` and `[data-base-ui-portal]` selectors. Theme variables and CSS resets remain global; only the utility layer is scoped.

### When to use scoped styles

- You are integrating Paalstack React UI into an existing app that already has its own CSS/styles
- You want to prevent Tailwind utilities from bleeding into unrelated parts of the page
- You are building a micro-frontend or embedded widget

### React (Vite) — scoped `src/index.css`

```css
/* Import library styles first so Tailwind can override them */
@import '@paalstack/react-ui/styles-scoped.css';
@import '@paalstack/react-ui/theme.css';

/* Explicit layer order */
@layer theme, base, components, utilities;

/* Tailwind CSS v4 — import theme and preflight globally */
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);

/* Scope utilities to .app and Base UI portals only */
@layer utilities {
  .app,
  [data-base-ui-portal] {
    @tailwind utilities;
  }
}

/* Tell Tailwind to scan the library's classes */
@source '../node_modules/@paalstack/react-ui';

@layer base {
  * {
    @apply border-border;
  }
}
```

Then add the `app` class to your root element in `src/main.tsx`:

```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="app">
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);
```

### Next.js — scoped `app/globals.css`

```css
/* Import library styles first so Tailwind can override them */
@import '@paalstack/react-ui/styles-scoped.css';
@import '@paalstack/react-ui/theme.css';

/* Explicit layer order */
@layer theme, base, components, utilities;

/* Tailwind CSS v4 — import theme and preflight globally */
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);

/* Scope utilities to .app and Base UI portals only */
@layer utilities {
  .app,
  [data-base-ui-portal] {
    @tailwind utilities;
  }
}

/* Tell Tailwind to scan the library's classes */
@source '../../node_modules/@paalstack/react-ui';

@layer base {
  * {
    @apply border-border;
  }
}
```

Then wrap your body content with the `app` class in `app/layout.tsx`:

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemeProvider>
          <div className="app">{children}</div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
```

> **`[data-base-ui-portal]`** is automatically applied to portals rendered by Base UI (dialogs, popovers, tooltips, dropdowns). Including it ensures those elements also receive scoped Tailwind utilities even though they are rendered outside the `.app` element in the DOM.

---

## How to use Hooks

Import any hook from `@paalstack/react-hooks`:

```tsx
import { useToggle, useDebounce, useLocalStorage } from '@paalstack/react-hooks';

function Example() {
  const [isOpen, toggle] = useToggle(false);
  const [search, setSearch] = useLocalStorage('search', '');
  const debouncedSearch = useDebounce(search, 300);

  return (/* ... */);
}
```

---

## How to use Icons

Import icons from any of the 31 supported icon libraries:

```tsx
// Lucide
import { LuHouse, LuSettings, LuUser } from '@paalstack/react-icons/lu';

// Heroicons
import { HiMoon, HiSun } from '@paalstack/react-icons/hi';

// Font Awesome 6
import { FaGithub, FaTwitter } from '@paalstack/react-icons/fa6';

// Tabler Icons
import { TbBrandReact } from '@paalstack/react-icons/tb';

// Usage — all icons accept className, size, color, and style props
<LuHouse className="size-6 text-primary" />
<LuSettings size={20} color="gray" />
```

### Global icon defaults via IconContext

```tsx
import { IconContext } from '@paalstack/react-icons';
import { LuHouse, LuSettings } from '@paalstack/react-icons/lu';

function App() {
  return (
    <IconContext.Provider value={{ size: '1.25em', color: 'currentColor' }}>
      <LuHouse /> {/* inherits size + color */}
      <LuSettings /> {/* inherits size + color */}
    </IconContext.Provider>
  );
}
```

### Available icon packs

| Import path                                                                                 | Library            |
| ------------------------------------------------------------------------------------------- | ------------------ |
| `/lu`                                                                                       | Lucide             |
| `/hi` / `/hi2`                                                                              | Heroicons v1 / v2  |
| `/fa` / `/fa6`                                                                              | Font Awesome 5 / 6 |
| `/md`                                                                                       | Material Design    |
| `/tb`                                                                                       | Tabler             |
| `/ri`                                                                                       | Remix Icons        |
| `/bi`                                                                                       | BoxIcons           |
| `/bs`                                                                                       | Bootstrap          |
| `/ai`                                                                                       | Ant Design         |
| `/fi`                                                                                       | Feather            |
| `/io5`                                                                                      | Ionicons 5         |
| `/rx`                                                                                       | Radix              |
| `/si`                                                                                       | Simple Icons       |
| `/pi`                                                                                       | Phosphor           |
| `/vsc`                                                                                      | VS Code            |
| `/go`                                                                                       | GitHub Octicons    |
| `/gi`, `/wi`, `/ci`, `/cg`, `/di`, `/fc`, `/gr`, `/im`, `/io`, `/lia`, `/sl`, `/tfi`, `/ti` | More...            |

---

## `@paalstack/react-ui/lib` — Utility Functions

The `lib` export provides a collection of utilities for styling, formatting, HTTP, logging, and currency conversion.

```ts
import { cn, currencyIntl, dateIntl, httpClient, logger, numberIntl, t } from '@paalstack/react-ui/lib';
```

### `cn` — Class Name Utility

Merges Tailwind CSS class names safely using `clsx` + `tailwind-merge`. Resolves conflicts (e.g. `p-2` vs `p-4`) and removes duplicates.

```ts
import { cn } from '@paalstack/react-ui/lib';

cn('px-2 py-1', 'bg-red-500', { 'font-bold': true });
// → 'px-2 py-1 bg-red-500 font-bold'

cn('p-2', 'p-4');
// → 'p-4'  (tailwind-merge resolves the conflict)
```

### `dateIntl` — Date Formatter

A timezone-aware date formatter built on `date-fns` and `date-fns-tz`. The `dateIntl` singleton uses the browser's local timezone and locale by default.

```ts
import { dateIntl, DateIntl } from '@paalstack/react-ui/lib';

dateIntl.format('2024-06-15T10:30:00Z'); // → '15/06/2024'
dateIntl.formatDateTime('2024-06-15T10:30:00Z'); // → '15/06/2024 10:30 AM'
dateIntl.formatRelativeTime('2024-06-14'); // → 'yesterday at 10:00 AM'
dateIntl.isValid('2024-06-15'); // → true
dateIntl.isSameDay('2024-06-15', '2024-06-15'); // → true
dateIntl.now(); // current datetime as ISO string
dateIntl.past(); // random date from the past year
dateIntl.future(); // random date in the next year
```

**Custom instance:**

```ts
import { DateIntl } from '@paalstack/react-ui/lib';

const myDate = new DateIntl({
  dateFormat: 'MMM d, yyyy',
  dateTimeFormat: 'MMM d, yyyy h:mm a',
  timeZone: 'America/New_York',
  fallback: 'N/A',
});

myDate.format('2024-06-15T10:30:00Z'); // → 'Jun 15, 2024'
myDate.format('2024-06-15', 'EEEE, MMMM d'); // → 'Saturday, June 15'
```

| Method                                 | Description                                 |
| -------------------------------------- | ------------------------------------------- |
| `format(value, options?)`              | Format as date string                       |
| `formatDate(value, options?)`          | Alias for `format`                          |
| `formatDateTime(value, options?)`      | Format as date + time string                |
| `formatRelativeTime(value, baseDate?)` | Format as relative string ("2 hours ago")   |
| `now()`                                | Current datetime as ISO string              |
| `past(minDate?)`                       | Random date in the past year                |
| `future(maxDate?)`                     | Random date in the next year                |
| `range(minDate, maxDate)`              | Random date within a range                  |
| `isValid(value)`                       | Check if a value is a valid date            |
| `isSameDay(date1, date2)`              | Check if two dates are the same day         |
| `given(date)`                          | Convert a date to its string representation |

### `numberIntl` — Number Formatter

Formats numbers using `Intl.NumberFormat`. The `numberIntl` singleton defaults to `en-US` locale.

```ts
import { numberIntl, NumberIntl } from '@paalstack/react-ui/lib';

numberIntl.format(1234567.89); // → '1,234,567.89'
numberIntl.format(0.456, { style: 'percent' }); // → '45.6%'
numberIntl.format(1234567, { notation: 'compact' }); // → '1.2M'
numberIntl.format('not-a-number'); // → 'N/A'

// Custom instance
const euroFormatter = new NumberIntl({ locale: 'de-DE', fallback: '—' });
euroFormatter.format(1234567.89); // → '1.234.567,89'
```

### `currencyIntl` — Currency Formatter

Formats monetary values as locale-aware currency strings. The `currencyIntl` singleton defaults to `USD` / `en-US`.

```ts
import { CurrencyConverter, currencyIntl, CurrencyIntl } from '@paalstack/react-ui/lib';

currencyIntl.format(1234.5); // → '$1,234.50'
currencyIntl.format(1234.5, 'EUR'); // → '€1,234.50'
currencyIntl.format(null); // → 'N/A'

// Custom instance
const inr = new CurrencyIntl({ currency: 'INR', locale: 'en-IN' });
inr.format(50000); // → '₹50,000.00'

// Live conversion (fetches live exchange rates)
const converter = new CurrencyConverter({ from: 'USD', to: 'EUR', amount: 100 });
const result = await converter.convert(); // → 92.45  (live rate)
converter.getCurrencyName('USD'); // → 'United States Dollar'
```

| Method                     | Description                                 |
| -------------------------- | ------------------------------------------- |
| `format(value, currency?)` | Format a value as a currency string         |
| `convert(amount?)`         | Convert an amount using live exchange rates |
| `from(code)`               | Set the source currency                     |
| `to(code)`                 | Set the target currency                     |
| `amount(value)`            | Set the conversion amount                   |
| `rates()`                  | Fetch the live exchange rate                |
| `getCurrencyName(code)`    | Get the full name for a currency code       |
| `setupRatesCache(opts)`    | Enable rate caching to reduce API calls     |

### `t` — Translation / Message Formatter

Formats ICU message format strings with variable interpolation and pluralization, powered by `intl-messageformat`.

```ts
import { t } from '@paalstack/react-ui/lib';

t('Hello, {name}!', { name: 'Paalstack' });
// → 'Hello, Paalstack!'

t('You have {count, plural, one {# item} other {# items}}.', { count: 3 });
// → 'You have 3 items.'

t('{gender, select, male {He} female {She} other {They}} logged in.', { gender: 'female' });
// → 'She logged in.'
```

| Argument  | Type                  | Description                        |
| --------- | --------------------- | ---------------------------------- |
| `message` | `string`              | ICU message format string          |
| `values`  | `Record<string, ...>` | Variables to interpolate           |
| `locale`  | `string` (optional)   | BCP 47 locale tag (e.g. `'fr-FR'`) |

### `httpClient` — HTTP Client

A pre-configured Axios-based HTTP client with full TypeScript generics.

```ts
import { AxiosClient, httpClient, HttpClient, HttpError } from '@paalstack/react-ui/lib';

// Standard usage
const users = await httpClient.get<User[]>('/api/users');
const user = await httpClient.post<User, CreateUserDto>('/api/users', { name: 'Alice' });
await httpClient.put<User, UpdateUserDto>('/api/users/1', { name: 'Alice Updated' });
await httpClient.patch<User, Partial<User>>('/api/users/1', { name: 'Alice' });
await httpClient.delete<void>('/api/users/1');

// Custom instance with base URL
const apiClient = new HttpClient(
  new AxiosClient({
    baseURL: 'https://api.example.com',
    headers: { Authorization: `Bearer ${token}` },
  }),
);

// Error handling
try {
  await httpClient.get('/api/protected');
} catch (err) {
  if (err instanceof HttpError) {
    console.error(err.status, err.message); // → 401, 'Unauthorized'
  }
}
```

| Method                             | Description |
| ---------------------------------- | ----------- |
| `get<T>(url, config?)`             | HTTP GET    |
| `post<T, B>(url, body, config?)`   | HTTP POST   |
| `put<T, B>(url, body?, config?)`   | HTTP PUT    |
| `patch<T, B>(url, body?, config?)` | HTTP PATCH  |
| `delete<T>(url, config?)`          | HTTP DELETE |

### `logger` — App Logger

Environment-aware logger that automatically uses `ConsoleLogger` in dev/prod and `MockLogger` in tests.

```ts
import { logger } from '@paalstack/react-ui/lib';

logger.log('Application started');
logger.debug('Debug value:', { userId: 42 });
logger.info('User logged in', { userId: 42 });
logger.warn('Deprecated API usage detected');
logger.error('Failed to fetch data', new Error('Network error'));
```

| Method           | Description           |
| ---------------- | --------------------- |
| `log(...args)`   | General log message   |
| `debug(...args)` | Debug-level message   |
| `info(...args)`  | Info-level message    |
| `warn(...args)`  | Warning-level message |
| `error(...args)` | Error-level message   |

---

## Monorepo Development

### Prerequisites

- Node.js `v22` or higher (`nvm use` if using nvm)
- pnpm `>=10`

### Installation

```bash
# Install dependencies and build all packages (required before running examples)
pnpm setup
```

Or step by step:

```bash
pnpm install
pnpm build
```

> **Note:** Running `pnpm build` after install is required so the `dist/` folders exist and TypeScript can resolve types in the example apps.

### Running Storybook

```bash
pnpm storybook
```

Open [http://localhost:6006/](http://localhost:6006/) to view the component library.

### Storybook Docs Mode

```bash
pnpm storybook:docs
```

Open [http://localhost:6007/](http://localhost:6007/) to view docs.

### Build All Packages

```bash
pnpm build
```

> **Warning (AI agents):** `pnpm build` in `packages/components` runs one tsup
> process over ~200 entries and can hang memory-constrained machines. Use the
> batched build instead — see
> [`skills/paalstack-react-ui/SKILL.md`](./skills/paalstack-react-ui/SKILL.md).

### Batched Build (memory-safe, recommended for CI and laptops)

`@paalstack/react-components` has ~200 entries; `packages/ui` is smaller (2 entries) but its
DTS pass traverses the full re-export graph (components, layouts, providers, hooks, icons,
shared) and can spike memory past 2GB. Both packages ship a batched build that splits JS into
per-batch tsup processes (memory freed between batches) and isolates the heavy DTS pass.

```bash
# @paalstack/react-components (largest — ~200 entries, ~25 min)
bash packages/components/build-batched.sh            # full batched build
bash packages/components/build-batched.sh --resume   # resume interrupted run
pnpm --filter @paalstack/react-components build:batched

# @paalstack/react-ui (umbrella — 2 TS entries, but full-graph DTS)
bash packages/ui/build-batched.sh                    # full batched build
bash packages/ui/build-batched.sh --resume           # resume interrupted run
pnpm --filter @paalstack/react-ui build:batched
```

Resumable via stamp files under `node_modules/.cache/tsup-batches/`. Never poll in a tight loop.

### AI Agent Skill

This repo ships an installable agent skill under
[`skills/paalstack-react-ui/`](./skills/paalstack-react-ui/) — package
knowledge, the two-API convention (props API vs composition API), the
batched build procedure, and an every-component inventory.

The skill **ships inside the npm packages**. In any project that installs
the library:

```bash
npx paalstack-skill
```

installs it into every detected agent (Hermes Agent, Claude Code, Cursor).
See [`skills/paalstack-react-ui/README.md`](./skills/paalstack-react-ui/README.md)
for flags and manual-install paths.

### Build Storybook

```bash
pnpm storybook:build
```

### Preview Storybook

```bash
pnpm preview
```

---

## Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## Linting & Formatting

```bash
# Lint
pnpm lint

# Fix lint issues
pnpm lint:fix

# Format
pnpm format

# Check formatting
pnpm format:check

# Type check
pnpm type-check
```

---

## Publishing with Changesets

This project uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing to npm.

### Workflow

1. **Create a changeset** after making changes:

   ```bash
   pnpm changeset
   ```

2. **Commit the changeset** along with your changes:

   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

3. The **Release GitHub Action** will automatically:
   - Create a "Version Packages" pull request that bumps versions and updates changelogs
   - When merged, publish the updated packages to npm

### Manual Release Commands

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `pnpm changeset`  | Create a new changeset              |
| `pnpm version`    | Bump versions and update changelogs |
| `pnpm release`    | Publish packages to npm             |
| `pnpm next:enter` | Enter pre-release mode (`next` tag) |
| `pnpm next:exit`  | Exit pre-release mode               |

---

## CI/CD

GitHub Actions workflows:

| Workflow        | Trigger                | Description                                |
| --------------- | ---------------------- | ------------------------------------------ |
| `ci.yml`        | PRs + pushes to `main` | Type check, lint, test                     |
| `release.yml`   | Pushes to `main`       | Changesets release flow                    |
| `storybook.yml` | PRs + pushes to `main` | Build and deploy Storybook to GitHub Pages |

---

## Project Structure

```
paalstack-react-ui/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── .changeset/             # Changesets config
├── .storybook/             # Storybook configuration
├── packages/
│   ├── components/         # @paalstack/react-components
│   ├── config/             # @paalstack/react-config
│   ├── hooks/              # @paalstack/react-hooks
│   ├── icons/              # @paalstack/react-icons
│   ├── layouts/            # @paalstack/react-layouts
│   ├── providers/          # @paalstack/react-providers
│   ├── shared/             # @paalstack/react-shared
│   ├── test-utils/         # @paalstack/react-test-utils
│   └── ui/                 # @paalstack/react-ui (umbrella)
├── stories/                # Storybook overview docs
└── examples/               # Example apps (CRA, Next.js, Vite)
```

---

## License

MIT
