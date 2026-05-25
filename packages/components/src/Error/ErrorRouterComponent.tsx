import type { FC, ReactNode } from 'react';

import { useLocation, useNavigate } from 'react-router';

import { RxReload as ReloadIcon } from '@/icons/rx';
import { Box, Heading, Stack, Text, TypographyStrong } from '@/layouts/index';
import { cn } from '@/shared/lib';

import { Button } from '../Button';

interface ErrorRouterComponentProps {
  error: Error;
  heading?: ReactNode;
  className?: string;
}

/**
 * ErrorRouterComponent Component
 *
 * Displays error details with a refresh button for React Router errors.
 * Shows the error message and provides navigation controls.
 * Typically used inside ErrorRouterBoundary or ErrorInternalResponse.
 *
 * @example
 * // Basic usage
 * import { ErrorRouterComponent } from '@paalstack/react-ui';
 *
 * <ErrorRouterComponent error={error} />
 *
 * @example
 * // With custom heading
 * <ErrorRouterComponent
 *   error={new Error('Failed to load data')}
 *   heading={
 *     <div>
 *       <h3>Data Loading Error</h3>
 *       <p>Unable to fetch the requested data</p>
 *     </div>
 *   }
 * />
 *
 * @example
 * // Inside ErrorInternalResponse
 * <ErrorInternalResponse heading="Something went wrong">
 *   <ErrorRouterComponent error={error} />
 * </ErrorInternalResponse>
 *
 * @example
 * // With custom styling
 * <ErrorRouterComponent
 *   error={error}
 *   className="max-w-2xl"
 * />
 *
 * @example
 * // In a route error boundary
 * const ErrorPage = () => {
 *   const error = useRouteError();
 *
 *   return (
 *     <div className="container">
 *       <ErrorRouterComponent error={error} />
 *     </div>
 *   );
 * };
 *
 * @example
 * // Loader error handling
 * const loader = async () => {
 *   try {
 *     return await fetchData();
 *   } catch (error) {
 *     throw error; // Caught by ErrorRouterComponent
 *   }
 * };
 *
 * <Route
 *   loader={loader}
 *   element={<Page />}
 *   errorElement={<ErrorRouterComponent error={useRouteError()} />}
 * />
 *
 * @example
 * // Action error handling
 * const action = async ({ request }) => {
 *   try {
 *     return await submitForm(request);
 *   } catch (error) {
 *     throw new Error('Form submission failed');
 *   }
 * };
 *
 * <Route
 *   action={action}
 *   element={<Form />}
 *   errorElement={
 *     <ErrorInternalResponse>
 *       <ErrorRouterComponent error={useRouteError()} />
 *     </ErrorInternalResponse>
 *   }
 * />
 *
 * @example
 * // With custom heading component
 * <ErrorRouterComponent
 *   error={error}
 *   heading={
 *     <Alert variant="destructive">
 *       <AlertTitle>Error</AlertTitle>
 *       <AlertDescription>
 *         An error occurred while processing your request
 *       </AlertDescription>
 *     </Alert>
 *   }
 * />
 *
 * @example
 * // Retry with custom navigation
 * const CustomErrorComponent = ({ error }) => {
 *   const navigate = useNavigate();
 *   const location = useLocation();
 *
 *   return (
 *     <ErrorRouterComponent
 *       error={error}
 *       heading={<h2>Oops! Something went wrong</h2>}
 *     />
 *   );
 * };
 *
 * @example
 * // Multiple errors handling
 * const ErrorDisplay = () => {
 *   const error = useRouteError();
 *
 *   if (error instanceof NetworkError) {
 *     return (
 *       <ErrorRouterComponent
 *         error={error}
 *         heading={<h3>Network Error</h3>}
 *       />
 *     );
 *   }
 *
 *   return <ErrorRouterComponent error={error} />;
 * };
 *
 * @example
 * // In ErrorRouterBoundary usage
 * <ErrorInternalResponse>
 *   <ErrorRouterComponent
 *     error={routeError}
 *     className="custom-error-component"
 *   />
 * </ErrorInternalResponse>
 *
 * @tip The refresh button navigates to the current pathname, triggering a reload
 * @tip Use custom heading prop for more control over error message display
 * @tip Typically used as a child of ErrorInternalResponse for consistent styling
 * @tip Integrates with React Router's useNavigate and useLocation hooks
 * @tip Error message is displayed prominently with proper formatting
 */
export const ErrorRouterComponent: FC<ErrorRouterComponentProps> = ({ error, className, heading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Stack className={cn('mx-auto max-w-3xl items-center', className)} data-qa="error-router-component">
      <Box className="flex min-h-[40px] flex-col gap-2 bg-white p-6">
        {heading ? (
          heading
        ) : (
          <Heading as="h4" className="flex items-center text-red-500">
            <TypographyStrong>Error Message: </TypographyStrong> <Text className="pl-1">{error.message}</Text>
          </Heading>
        )}
      </Box>
      <Button
        id="refresh"
        className="text-foreground"
        variant="outline"
        onClick={() => navigate(location.pathname)}
        leftIcon={<ReloadIcon />}
      >
        Refresh
      </Button>
    </Stack>
  );
};
