# paalstack-react-ui — Next.js Example

A Next.js 14 App Router example using `@paalstack/react-ui`, `@paalstack/react-hooks`, and `@paalstack/react-icons` with Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setup summary

### 1. Install packages

```bash
npm install @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
npm install -D tailwindcss @tailwindcss/postcss
```

### 2. Configure PostCSS (`postcss.config.mjs`)

```js
const config = {
  plugins: { '@tailwindcss/postcss': {} },
};
export default config;
```

> Remove `tailwind.config.ts` if it was generated — Tailwind v4 uses CSS-only configuration.

### 3. Set up global styles (`app/globals.css`)

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

### 4. Wrap your layout with `NextThemeProvider` (`app/layout.tsx`)

```tsx
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

> `suppressHydrationWarning` on `<html>` prevents a React hydration warning from the theme class being applied on the client.

### 5. Server vs Client components

**Server Component** (`app/page.tsx`):

```tsx
import { Box, Heading, Text } from '@paalstack/react-ui';

import { DemoCard } from './_components/DemoCard';

export default function Home() {
  return (
    <Box as="main" className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <Heading className="text-4xl font-bold">Welcome to Paalstack UI</Heading>
      <Text className="text-muted-foreground">Built with Next.js + Tailwind CSS v4</Text>
      <DemoCard />
    </Box>
  );
}
```

**Client Component** (`app/_components/DemoCard.tsx`):

```tsx
'use client';

import { useCounter } from '@paalstack/react-hooks';
import { useNextTheme } from '@paalstack/react-ui';

export function DemoCard() {
  const [count, { increment }] = useCounter(0);
  const { isDark, setTheme } = useNextTheme();
  // ...
}
```

## Full docs

[https://paalamugan.github.io/paalstack-react-ui/](https://paalamugan.github.io/paalstack-react-ui/)
