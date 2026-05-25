# paalstack-react-ui — CRA Example

A Create React App example using `@paalstack/react-ui`, `@paalstack/react-hooks`, and `@paalstack/react-icons` with Tailwind CSS v4 via CRACO.

> **Note:** Create React App is no longer actively maintained. For new projects, prefer the [Vite example](../vite-app) instead.

## Getting started

```bash
pnpm install
pnpm start
```

Open [http://localhost:3000](http://localhost:3000).

## Setup summary

### 1. Install packages

```bash
pnpm add @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
pnpm add -D @craco/craco @craco/types @tailwindcss/postcss tailwindcss
```

### 2. Configure CRACO (`craco.config.ts`)

```ts
import { CracoConfig } from '@craco/types';

const cracoConfig: CracoConfig = {
  style: {
    postcss: {
      plugins: [require('@tailwindcss/postcss')],
    },
  },
};

export default cracoConfig;
```

### 3. Set up global styles (`src/index.css`)

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

### 4. Wrap your app with `ThemeProvider` (`src/index.tsx`)

```tsx
import React from 'react';

import { ThemeProvider } from '@paalstack/react-ui';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

## Full docs

[https://paalamugan.github.io/paalstack-react-ui/](https://paalamugan.github.io/paalstack-react-ui/)
