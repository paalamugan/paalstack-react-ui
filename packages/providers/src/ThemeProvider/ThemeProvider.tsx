import { useEffect, useState } from 'react';

import type { Theme, ThemeProviderProps } from './types';

import { ToastProvider } from '../ToastProvider';
import { ThemeContextProvider } from './context';

/**
 * ThemeProvider Component
 *
 * Provides theme functionality to the application with automatic persistence to localStorage.
 * Supports light, dark, and system theme modes with automatic class management.
 * Includes integrated ToastProvider for notifications.
 *
 * @example
 * // Basic usage
 * import { ThemeProvider } from '@paalstack/react-ui';
 *
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // With custom default theme
 * <ThemeProvider defaultTheme="dark">
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // With custom storage key
 * <ThemeProvider storageKey="my-app-theme">
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // With toast configuration
 * <ThemeProvider
 *   toasterProps={{
 *     position: 'top-right',
 *     expand: true,
 *     richColors: true
 *   }}
 * >
 *   <App />
 * </ThemeProvider>
 *
 * @example
 * // Using theme in components with useTheme hook
 * import { useTheme } from '@paalstack/react-ui';
 *
 * function ThemeToggle() {
 *   const { theme, setTheme, toggleTheme, isDark } = useTheme();
 *
 *   return (
 *     <div>
 *       <p>Current theme: {theme}</p>
 *       <button onClick={toggleTheme}>
 *         Switch to {isDark ? 'light' : 'dark'} mode
 *       </button>
 *       <button onClick={() => setTheme('system')}>
 *         Use system preference
 *       </button>
 *     </div>
 *   );
 * }
 *
 * @example
 * // Complete app setup
 * import { ThemeProvider } from '@paalstack/react-ui';
 *
 * function App() {
 *   return (
 *     <ThemeProvider defaultTheme="system" storageKey="app-theme">
 *       <Header />
 *       <MainContent />
 *       <Footer />
 *     </ThemeProvider>
 *   );
 * }
 *
 * @example
 * // Programmatically set theme
 * function SettingsPanel() {
 *   const { setTheme } = useTheme();
 *
 *   return (
 *     <div>
 *       <button onClick={() => setTheme('light')}>Light</button>
 *       <button onClick={() => setTheme('dark')}>Dark</button>
 *       <button onClick={() => setTheme('system')}>System</button>
 *     </div>
 *   );
 * }
 *
 * @tip Automatically persists theme to localStorage
 * @tip Supports 'light', 'dark', and 'system' themes
 * @tip System theme automatically detects OS preference
 * @tip Includes ToastProvider - no need to add separately
 * @tip Theme is applied to document root with data-theme attribute
 */
export const ThemeProvider = ({
  children,
  defaultTheme = 'light',
  storageKey = 'paalstack-ui-theme',
  toasterProps,
}: ThemeProviderProps) => {
  // SSR-safe theme resolution.
  //
  // Theme persistence is a browser-only concern: `localStorage` is undefined on
  // the server, and Next 16's server render pass calls function components to
  // extract the initial HTML. Reading `localStorage` inside a `useState`
  // initializer crashes the server pass with
  // `Cannot read properties of undefined (reading 'getItem')`.
  //
  // Strategy:
  //   - First render (server + first client render): use `defaultTheme` so the
  //     markup is consistent on both sides (no hydration mismatch).
  //   - On client mount, read the persisted value from `localStorage` and
  //     update state. The `useEffect` covers the case where the user picked a
  //     non-default theme in a previous session; the visual flash is at most
  //     one paint, and the `data-theme` attribute is applied on the next
  //     effect tick.
  //
  // This is also the long-term SSR fix documented in shadhil-crm's
  // `next.config.ts` — once this ships, web can opt back into static
  // rendering per page.
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey) as Theme | null;
      if (stored && stored !== theme) {
        setTheme(stored);
      }
    } catch {
      // localStorage may throw in private-browsing / sandboxed iframes /
      // strict cookie policies. Fall back to defaultTheme silently.
    }
  }, [storageKey, theme]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (root.getAttribute('data-theme')) {
      root.removeAttribute('data-theme');
    }

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);
      root.setAttribute('data-theme', systemTheme);
      return;
    }

    root.setAttribute('data-theme', theme);
    root.classList.add(theme);
  }, [theme]);

  const setThemeHandler = (next: Theme) => {
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // localStorage may throw in private-browsing / sandboxed iframes /
      // strict cookie policies. The in-memory theme still updates; persistence
      // is best-effort.
    }
    setTheme(next);
  };

  const value = {
    theme,
    setTheme: setThemeHandler,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isSystem: theme === 'system',
    toggleTheme: () => {
      setThemeHandler(theme === 'light' ? 'dark' : 'light');
    },
  };

  return (
    <ThemeContextProvider value={value}>
      <ToastProvider theme={theme} {...toasterProps}>
        {children}
      </ToastProvider>
    </ThemeContextProvider>
  );
};
