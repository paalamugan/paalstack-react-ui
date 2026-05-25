import { useEffect } from 'react';

import { RxArrowLeft as ArrowLeftIcon, RxReload as ReloadIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { Flex } from '@/layouts/Flex';
import { Text } from '@/layouts/Text';
import { TypographyStrong } from '@/layouts/Typography';
import { cn } from '@/shared/lib';

import { Button } from '../Button';
import { ErrorLayout } from './ErrorLayout';

export interface ErrorInternalServerProps<ErrorType extends Error = Error> {
  /**
   * Error object
   */
  error: ErrorType;
  /**
   * Status code of the error
   */
  statusCode?: number;
  /**
   * Status text of the error
   */
  statusText?: string;
  /**
   * Whether to show the error message
   */
  showErrorMessage?: boolean;
  /**
   *  @param onRefresh refresh the page
   * @returns void
   */
  onRefresh?: () => void;
  /**
   *  @param onGoBack go back to the previous page
   * @returns void
   */
  onGoBack?: () => void;
  /**
   * Text for the go back button
   */
  goBackText?: React.ReactNode;
  /**
   * Text for the refresh button
   */
  refreshText?: React.ReactNode;
  /**
   * Whether to show the error in the console
   */
  showErrorInConsole?: boolean;
}

/**
 * ErrorInternalServer Component
 *
 * Displays a detailed error page for internal server errors (typically 500 errors).
 * Shows status code, error message, and provides navigation/retry options.
 * Perfect for development and production error pages with full control over error display.
 *
 * @example
 * // Basic usage
 * import { ErrorInternalServer } from '@paalstack/react-ui';
 *
 * <ErrorInternalServer
 *   error={new Error('Database connection failed')}
 *   onRefresh={() => window.location.reload()}
 *   onGoBack={() => navigate('/dashboard')}
 * />
 *
 * @example
 * // 500 Internal Server Error
 * <ErrorInternalServer
 *   error={error}
 *   statusCode={500}
 *   statusText="Internal Server Error"
 *   onRefresh={() => window.location.reload()}
 *   onGoBack={() => navigate('/')}
 * />
 *
 * @example
 * // With error message visible (development mode)
 * <ErrorInternalServer
 *   error={new Error('Failed to connect to database')}
 *   statusCode={500}
 *   showErrorMessage={true}
 *   showErrorInConsole={true}
 *   onRefresh={() => retryConnection()}
 * />
 *
 * @example
 * // Custom button text
 * <ErrorInternalServer
 *   error={error}
 *   statusCode={503}
 *   statusText="Service Unavailable"
 *   goBackText="Return Home"
 *   refreshText="Try Again"
 *   onRefresh={() => retry()}
 *   onGoBack={() => navigate('/')}
 * />
 *
 * @example
 * // 503 Service Unavailable
 * <ErrorInternalServer
 *   error={new Error('Service temporarily unavailable')}
 *   statusCode={503}
 *   statusText="Service Unavailable"
 *   showErrorMessage={false}
 *   onRefresh={() => window.location.reload()}
 * />
 *
 * @example
 * // 502 Bad Gateway
 * <ErrorInternalServer
 *   error={new Error('Upstream server error')}
 *   statusCode={502}
 *   statusText="Bad Gateway"
 *   onRefresh={() => retryRequest()}
 *   onGoBack={() => navigate('/dashboard')}
 * />
 *
 * @example
 * // Database connection error
 * <ErrorInternalServer
 *   error={new Error('Unable to connect to database: Connection timeout')}
 *   statusCode={500}
 *   statusText="Database Connection Error"
 *   showErrorMessage={import.meta.env.DEV}
 *   onRefresh={() => reconnect()}
 *   onGoBack={() => navigate('/home')}
 * />
 *
 * @example
 * // API timeout error
 * <ErrorInternalServer
 *   error={new Error('Request timeout after 30 seconds')}
 *   statusCode={504}
 *   statusText="Gateway Timeout"
 *   showErrorMessage={false}
 *   onRefresh={() => retryApiCall()}
 * />
 *
 * @example
 * // With only refresh button (no back button)
 * <ErrorInternalServer
 *   error={error}
 *   statusCode={500}
 *   onRefresh={() => window.location.reload()}
 * />
 *
 * @example
 * // With only back button (no refresh)
 * <ErrorInternalServer
 *   error={error}
 *   statusCode={500}
 *   goBackText="Back to Safety"
 *   onGoBack={() => navigate('/')}
 * />
 *
 * @example
 * // In error boundary
 * class ErrorBoundary extends React.Component {
 *   state = { hasError: false, error: null };
 *
 *   static getDerivedStateFromError(error) {
 *     return { hasError: true, error };
 *   }
 *
 *   render() {
 *     if (this.state.hasError) {
 *       return (
 *         <ErrorInternalServer
 *           error={this.state.error}
 *           statusCode={500}
 *           showErrorMessage={import.meta.env.DEV}
 *           onRefresh={() => window.location.reload()}
 *           onGoBack={() => window.history.back()}
 *         />
 *       );
 *     }
 *     return this.props.children;
 *   }
 * }
 *
 * @example
 * // Conditional error display based on environment
 * <ErrorInternalServer
 *   error={error}
 *   statusCode={500}
 *   showErrorMessage={process.env.NODE_ENV === 'development'}
 *   showErrorInConsole={process.env.NODE_ENV === 'development'}
 *   onRefresh={() => window.location.reload()}
 *   onGoBack={() => navigate('/dashboard')}
 * />
 *
 * @tip Set showErrorMessage to true in development, false in production for security
 * @tip Always provide at least one action button (refresh or go back)
 * @tip Use showErrorInConsole to log errors even when not displaying to users
 * @tip Customize button text to match your app's terminology
 * @tip Consider different status codes (500, 502, 503, 504) for specific error types
 */
export const ErrorInternalServer = <ErrorType extends Error = Error>({
  error,
  statusCode = 500,
  statusText = 'Internal Server Error',
  showErrorMessage = false,
  showErrorInConsole = true,
  goBackText = 'Back to Dashboard',
  refreshText = 'Refresh',
  onRefresh,
  onGoBack,
}: ErrorInternalServerProps<ErrorType>) => {
  useEffect(() => {
    if (!showErrorInConsole) return;
    console.error(error);
  }, [error, showErrorInConsole]);

  const textColor = statusCode >= 400 && showErrorMessage ? 'text-danger' : '';
  return (
    <ErrorLayout data-qa="error-internal-server">
      <Box className="flex flex-col gap-3 text-center">
        <Text as="h1" className={cn('text-4xl font-semibold', textColor)}>
          {statusCode}
        </Text>
        <Text as="h1" className={cn('mt-3', textColor)}>
          {statusText}
        </Text>
        <Box className="mt-3 max-w-lg text-center text-lg">
          {showErrorMessage ? (
            <Text color="danger" className="mb-3">
              <TypographyStrong>Error Message:</TypographyStrong> {error.message}
            </Text>
          ) : (
            <Text>This page is currently unavailable. Please see the console for more information.</Text>
          )}
        </Box>
        {(onGoBack || onRefresh) && (
          <Flex className="justify-center gap-3">
            {onGoBack && (
              <Button onClick={onGoBack}>
                <ArrowLeftIcon />
                {goBackText}
              </Button>
            )}
            {onRefresh && (
              <Button variant="outline" onClick={onRefresh} className="text-foreground">
                <ReloadIcon />
                {refreshText}
              </Button>
            )}
          </Flex>
        )}
      </Box>
    </ErrorLayout>
  );
};
