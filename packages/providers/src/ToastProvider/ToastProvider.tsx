import type { FC, ReactNode } from 'react';
import type { ToasterProps } from './Toast';

import { Toaster } from './Toast';

export interface ToastProviderProps extends ToasterProps {
  children: ReactNode;
}

/**
 * ToastProvider Component
 *
 * Provides toast notification functionality to the application.
 * Wraps the Toaster component with default configurations for rich colors and close buttons.
 * Use the `toast` function from anywhere in your app to show notifications.
 *
 * @example
 * // Basic usage (usually included in ThemeProvider or NextThemeProvider)
 * import { ToastProvider } from '@paalstack/react-ui';
 *
 * <ToastProvider>
 *   <App />
 * </ToastProvider>
 *
 * @example
 * // With custom position
 * <ToastProvider position="top-right">
 *   <App />
 * </ToastProvider>
 *
 * @example
 * // With custom theme
 * <ToastProvider theme="dark">
 *   <App />
 * </ToastProvider>
 *
 * @example
 * // With expanded toasts
 * <ToastProvider expand={true}>
 *   <App />
 * </ToastProvider>
 *
 * @example
 * // Using toast in components
 * import { toast } from '@paalstack/react-ui';
 *
 * function MyComponent() {
 *   const showToast = () => {
 *     toast.success('Operation successful!');
 *   };
 *
 *   return <button onClick={showToast}>Show Toast</button>;
 * }
 *
 * @example
 * // Different toast types
 * toast.success('Success message');
 * toast.error('Error message');
 * toast.warning('Warning message');
 * toast.info('Info message');
 * toast('Default message');
 *
 * @example
 * // With custom duration
 * toast.success('Saved!', { duration: 5000 });
 *
 * @example
 * // With action button
 * toast('Email sent', {
 *   action: {
 *     label: 'Undo',
 *     onClick: () => console.log('Undo clicked')
 *   }
 * });
 *
 * @example
 * // Promise toast
 * const promise = fetch('/api/data');
 *
 * toast.promise(promise, {
 *   loading: 'Loading...',
 *   success: 'Data loaded!',
 *   error: 'Failed to load data'
 * });
 *
 * @example
 * // Custom toast with JSX
 * toast.custom((t) => (
 *   <div className="bg-white p-4 rounded shadow">
 *     <h3>Custom Toast</h3>
 *     <p>Custom content here</p>
 *     <button onClick={() => toast.dismiss(t)}>Close</button>
 *   </div>
 * ));
 *
 * @tip Usually included automatically in ThemeProvider/NextThemeProvider
 * @tip Use `toast` function from anywhere after provider is mounted
 * @tip Rich colors enabled by default for better visual feedback
 * @tip Close button included by default
 * @tip Supports promise-based toasts for async operations
 */
export const ToastProvider: FC<ToastProviderProps> = ({ children, ...props }) => {
  return (
    <>
      <Toaster richColors closeButton position="top-right" {...props} />
      {children}
    </>
  );
};
