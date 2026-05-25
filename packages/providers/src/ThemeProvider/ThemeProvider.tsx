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
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

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

  const setThemeHandler = (theme: Theme) => {
    localStorage.setItem(storageKey, theme);
    setTheme(theme);
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
