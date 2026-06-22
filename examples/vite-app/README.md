# paalstack-react-ui — Vite Example

A minimal React + Vite example using `@paalstack/react-ui`, `@paalstack/react-hooks`, and `@paalstack/react-icons` with Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Setup summary

### 1. Install packages

```bash
npm install @paalstack/react-ui @paalstack/react-hooks @paalstack/react-icons
npm install -D tailwindcss @tailwindcss/vite
```

### 2. Configure Vite (`vite.config.ts`)

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
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

### 4. Wrap your app with `ThemeProvider` (`src/main.tsx`)

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

## Full docs

[https://paalamugan.github.io/paalstack-react-ui/](https://paalamugan.github.io/paalstack-react-ui/)
