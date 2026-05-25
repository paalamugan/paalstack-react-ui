import type { ThemeProviderProps } from 'next-themes';
import type { FC } from 'react';
import type { ToastProviderProps } from '../ToastProvider';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { ToastProvider } from '../ToastProvider';
import { useNextTheme } from './hooks';

export const THEME_STORAGE_KEY = 'theme';

export interface NextThemeProviderProps extends ThemeProviderProps {
  toastProps?: Omit<ToastProviderProps, 'children'>;
}

/**
 * ToastProviderWrapper Component
 *
 * Internal wrapper component that integrates ToastProvider with Next.js theme.
 * Automatically syncs toast theme with the current Next.js theme.
 */
const ToastProviderWrapper: FC<ToastProviderProps> = ({ children, ...props }) => {
  const theme = useNextTheme();
  const currentTheme = theme.resolvedTheme === 'dark' ? 'dark' : 'light';
  return (
    <ToastProvider theme={currentTheme} {...props}>
      {children}
    </ToastProvider>
  );
};

/**
 * NextThemeProvider Component
 *
 * Theme provider for Next.js applications using next-themes library.
 * Provides seamless theme switching with SSR support and automatic system theme detection.
 * Includes integrated ToastProvider that syncs with the current theme.
 *
 * @example
 * // Basic usage in Next.js app
 * import { NextThemeProvider } from '@paalstack/react-ui';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <body>
 *         <NextThemeProvider>
 *           {children}
 *         </NextThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 *
 * @example
 * // With custom default theme
 * <NextThemeProvider defaultTheme="dark">
 *   <App />
 * </NextThemeProvider>
 *
 * @example
 * // With custom storage key
 * <NextThemeProvider storageKey="my-next-theme">
 *   <App />
 * </NextThemeProvider>
 *
 * @example
 * // With toast configuration
 * <NextThemeProvider
 *   toastProps={{
 *     position: 'bottom-right',
 *     richColors: true,
 *     closeButton: true
 *   }}
 * >
 *   <App />
 * </NextThemeProvider>
 *
 * @example
 * // Using theme in Next.js components
 * import { useNextTheme } from '@paalstack/react-ui';
 *
 * function ThemeToggle() {
 *   const { theme, setTheme, resolvedTheme } = useNextTheme();
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *       Current: {resolvedTheme}
 *     </button>
 *   );
 * }
 *
 * @example
 * // Complete Next.js 13+ app setup
 * import { NextThemeProvider } from '@paalstack/react-ui';
 *
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode;
 * }) {
 *   return (
 *     <html lang="en" suppressHydrationWarning>
 *       <body>
 *         <NextThemeProvider
 *           attribute="class"
 *           defaultTheme="system"
 *           enableSystem
 *           disableTransitionOnChange
 *         >
 *           {children}
 *         </NextThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 *
 * @example
 * // Theme selector component
 * function ThemeSelector() {
 *   const { theme, setTheme } = useNextTheme();
 *
 *   return (
 *     <select value={theme} onChange={(e) => setTheme(e.target.value)}>
 *       <option value="light">Light</option>
 *       <option value="dark">Dark</option>
 *       <option value="system">System</option>
 *     </select>
 *   );
 * }
 *
 * @tip SSR-safe theme provider for Next.js
 * @tip Uses next-themes for optimal performance
 * @tip Automatically syncs toast theme
 * @tip Add suppressHydrationWarning to html tag
 * @tip Default theme is 'system' with auto-detection
 * @tip Transitions are disabled by default for smooth theme changes
 */
export const NextThemeProvider: FC<NextThemeProviderProps> = ({ children, toastProps, ...props }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
      {...props}
    >
      <ToastProviderWrapper {...toastProps}>{children}</ToastProviderWrapper>
    </NextThemesProvider>
  );
};
