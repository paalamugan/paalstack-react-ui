import type { ComponentType, ErrorInfo, ReactNode } from 'react';
import type { ErrorBoundaryProps as BoundaryProps } from 'react-error-boundary';

import { ErrorBoundary as Boundary } from 'react-error-boundary';

export interface FallbackProps<ErrorType> {
  error: ErrorType;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export type ErrorFallback<ErrorType> = ComponentType<FallbackProps<ErrorType>>;

type ErrorBoundaryProps<ErrorType> = BoundaryProps & {
  onError?: (error: ErrorType, info: ErrorInfo) => void;
  FallbackComponent?: ErrorFallback<ErrorType>;
  resetKeys?: unknown[];
};

export type IErrorBoundaryProps<ErrorType> = ErrorBoundaryProps<ErrorType> & {
  children: ReactNode;
};

/**
 * ErrorBoundary Component
 *
 * A React error boundary that catches JavaScript errors anywhere in the child component tree.
 * Logs errors and displays a fallback UI when errors occur.
 * Built on top of react-error-boundary.
 *
 * @example
 * // Basic usage with default fallback
 * import { ErrorBoundary } from '@paalstack/react-ui';
 *
 * <ErrorBoundary>
 *   <YourApp />
 * </ErrorBoundary>
 *
 * @example
 * // With custom fallback component
 * const ErrorFallback = ({ error, resetErrorBoundary }) => (
 *   <div role="alert">
 *     <p>Something went wrong:</p>
 *     <pre>{error.message}</pre>
 *     <button onClick={resetErrorBoundary}>Try again</button>
 *   </div>
 * );
 *
 * <ErrorBoundary FallbackComponent={ErrorFallback}>
 *   <YourApp />
 * </ErrorBoundary>
 *
 * @example
 * // With error logging
 * <ErrorBoundary
 *   onError={(error, errorInfo) => {
 *     console.error('Caught error:', error, errorInfo);
 *     // Log to error tracking service (e.g., Sentry)
 *     logErrorToService(error, errorInfo);
 *   }}
 * >
 *   <YourApp />
 * </ErrorBoundary>
 *
 * @example
 * // With reset keys (resets when keys change)
 * const [userId, setUserId] = useState(null);
 *
 * <ErrorBoundary resetKeys={[userId]}>
 *   <UserProfile userId={userId} />
 * </ErrorBoundary>
 *
 * @example
 * // Wrapping specific components
 * <ErrorBoundary>
 *   <Dashboard>
 *     <ErrorBoundary>
 *       <Widget1 />
 *     </ErrorBoundary>
 *     <ErrorBoundary>
 *       <Widget2 />
 *     </ErrorBoundary>
 *   </Dashboard>
 * </ErrorBoundary>
 *
 * @example
 * // With custom error UI
 * const CustomError = ({ error, resetErrorBoundary }) => (
 *   <div className="flex min-h-screen items-center justify-center">
 *     <div className="max-w-md rounded-lg border p-6 text-center">
 *       <h2 className="text-xl font-bold text-red-600">Oops! Something went wrong</h2>
 *       <p className="mt-2 text-gray-600">{error.message}</p>
 *       <button
 *         onClick={resetErrorBoundary}
 *         className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
 *       >
 *         Reload Page
 *       </button>
 *     </div>
 *   </div>
 * );
 *
 * <ErrorBoundary FallbackComponent={CustomError}>
 *   <App />
 * </ErrorBoundary>
 *
 * @example
 * // Production error handling with Sentry
 * import * as Sentry from '@sentry/react';
 *
 * <ErrorBoundary
 *   onError={(error, errorInfo) => {
 *     Sentry.captureException(error, {
 *       contexts: { react: errorInfo }
 *     });
 *   }}
 *   FallbackComponent={ProductionErrorFallback}
 * >
 *   <App />
 * </ErrorBoundary>
 *
 * @example
 * // Different fallback for different error types
 * const TypedErrorFallback = ({ error, resetErrorBoundary }) => {
 *   if (error instanceof NetworkError) {
 *     return <NetworkErrorPage retry={resetErrorBoundary} />;
 *   }
 *   if (error instanceof AuthError) {
 *     return <AuthErrorPage />;
 *   }
 *   return <GenericErrorPage error={error} retry={resetErrorBoundary} />;
 * };
 *
 * <ErrorBoundary FallbackComponent={TypedErrorFallback}>
 *   <App />
 * </ErrorBoundary>
 *
 * @tip Use multiple ErrorBoundary components to isolate errors in different parts of your app
 * @tip Combine with error logging services (Sentry, LogRocket) for production monitoring
 * @tip Use resetKeys to automatically reset the boundary when certain values change
 * @tip Provide user-friendly error messages instead of technical stack traces in production
 */
export const ErrorBoundary = <ErrorType extends Error>({ children, ...props }: IErrorBoundaryProps<ErrorType>) => {
  return <Boundary {...props}>{children}</Boundary>;
};
