import { useRouteError } from 'react-router';

import { HttpError } from '@/shared/lib/http';

import { ErrorInternalResponse, isInternalErrorResponse } from './ErrorInternalResponse';
import { ErrorInternalServerResponse } from './ErrorInternalServerResponse';
import { ErrorNotFoundResponse } from './ErrorNotFoundResponse';
import { ErrorRouterComponent } from './ErrorRouterComponent';

// Component that safely uses useRouteError
const RouterErrorHandler = () => {
  try {
    return useRouteError();
  } catch {
    return null;
  }
};
interface IProps<Response extends HttpError['response'] | Error = never> {
  error?: Response;
  errorInternalResponseProps?: React.ComponentProps<typeof ErrorInternalResponse>;
  errorRouterComponentProps?: React.ComponentProps<typeof ErrorRouterComponent>;
}

/**
 * ErrorRouterBoundary Component
 *
 * Intelligent error boundary for React Router applications.
 * Automatically handles different error types (HttpError, standard Error) and displays appropriate error pages.
 * Routes errors to correct error components based on HTTP status codes.
 *
 * @example
 * // Basic usage in React Router
 * import { ErrorRouterBoundary } from '@paalstack/react-ui';
 *
 * <Route
 *   path="/dashboard"
 *   element={<Dashboard />}
 *   errorElement={<ErrorRouterBoundary />}
 * />
 *
 * @example
 * // As root error boundary
 * const router = createBrowserRouter([
 *   {
 *     path: '/',
 *     element: <Root />,
 *     errorElement: <ErrorRouterBoundary />,
 *     children: [
 *       { path: 'dashboard', element: <Dashboard /> },
 *       { path: 'profile', element: <Profile /> },
 *     ]
 *   }
 * ]);
 *
 * @example
 * // With custom error props
 * <Route
 *   path="/api/*"
 *   element={<ApiRoutes />}
 *   errorElement={
 *     <ErrorRouterBoundary
 *       errorInternalResponseProps={{
 *         heading: "API Error",
 *         subHeading: "Failed to communicate with the API"
 *       }}
 *     />
 *   }
 * />
 *
 * @example
 * // Handling specific HTTP errors
 * // 404 → ErrorNotFoundResponse
 * // 403 → ErrorNotFoundResponse
 * // 500 → ErrorInternalServerResponse
 * // 401 → null (handled separately, e.g., redirect to login)
 * // Other → ErrorInternalResponse
 *
 * <Route
 *   path="*"
 *   errorElement={<ErrorRouterBoundary />}
 * />
 *
 * @example
 * // With custom error router component props
 * <Route
 *   errorElement={
 *     <ErrorRouterBoundary
 *       errorRouterComponentProps={{
 *         heading: <CustomErrorHeading />,
 *         className: "custom-error-styles"
 *       }}
 *     />
 *   }
 * />
 *
 * @example
 * // Throwing HttpError in loader
 * const loader = async ({ params }) => {
 *   const response = await fetch(`/api/users/${params.id}`);
 *   if (!response.ok) {
 *     throw new HttpError('User not found', { status: 404 });
 *   }
 *   return response.json();
 * };
 *
 * <Route
 *   path="/users/:id"
 *   loader={loader}
 *   element={<UserProfile />}
 *   errorElement={<ErrorRouterBoundary />}
 * />
 *
 * @example
 * // Handling authentication errors (401)
 * // Note: 401 returns null, allowing custom handling
 * const authLoader = async () => {
 *   const response = await checkAuth();
 *   if (response.status === 401) {
 *     throw new HttpError('Unauthorized', { status: 401 });
 *   }
 *   return response;
 * };
 *
 * <Route
 *   path="/protected"
 *   loader={authLoader}
 *   element={<ProtectedRoute />}
 *   errorElement={<ErrorRouterBoundary />} // Returns null for 401
 * />
 *
 * @example
 * // Multiple error boundaries at different levels
 * const router = createBrowserRouter([
 *   {
 *     path: '/',
 *     element: <Root />,
 *     errorElement: <ErrorRouterBoundary />, // Catches root-level errors
 *     children: [
 *       {
 *         path: 'dashboard',
 *         element: <Dashboard />,
 *         errorElement: <ErrorRouterBoundary // Dashboard-specific errors
 *           errorInternalResponseProps={{
 *             heading: "Dashboard Error"
 *           }}
 *         />
 *       }
 *     ]
 *   }
 * ]);
 *
 * @example
 * // With external error passed in
 * const [error, setError] = useState(null);
 *
 * {error && <ErrorRouterBoundary error={error} />}
 *
 * @example
 * // Handling different error response types
 * // Standard Error → ErrorInternalResponse + ErrorRouterComponent
 * // HttpError (403/404) → ErrorNotFoundResponse
 * // HttpError (500) → ErrorInternalServerResponse
 * // Internal error response → ErrorInternalResponse + ErrorRouterComponent
 *
 * <Route
 *   path="/api/*"
 *   errorElement={<ErrorRouterBoundary />}
 * />
 *
 * @example
 * // Complete app with error boundaries
 * const router = createBrowserRouter([
 *   {
 *     path: '/',
 *     element: <Layout />,
 *     errorElement: <ErrorRouterBoundary
 *       errorInternalResponseProps={{
 *         heading: "Application Error",
 *         subHeading: "Something went wrong. Please try again."
 *       }}
 *     />,
 *     children: [
 *       { index: true, element: <Home /> },
 *       { path: 'about', element: <About /> },
 *       { path: 'contact', element: <Contact /> },
 *       { path: '*', element: <ErrorNotFoundResponse /> }
 *     ]
 *   }
 * ]);
 *
 * @tip Place at route level to catch loader/action errors automatically
 * @tip Use at root level to catch all unhandled errors in your app
 * @tip 401 errors return null - handle authentication redirects separately
 * @tip Customize error messages per route using errorInternalResponseProps
 * @tip Works seamlessly with React Router's useRouteError() hook
 */
export const ErrorRouterBoundary = <Response extends HttpError['response'] | Error = never>(
  props: IProps<Response>,
) => {
  const routeError = RouterErrorHandler();

  const { errorInternalResponseProps, errorRouterComponentProps } = props;
  const error = props.error ?? routeError;

  if (error instanceof HttpError) {
    switch (error.status) {
      case 500:
        return <ErrorInternalServerResponse />;
      case 401:
        return null;
      case 403:
      case 404:
        return <ErrorNotFoundResponse />;
      default:
        return <ErrorInternalResponse {...errorInternalResponseProps} />;
    }
  }

  if (error instanceof Error) {
    return (
      <ErrorInternalResponse {...errorInternalResponseProps}>
        <ErrorRouterComponent error={error} {...errorRouterComponentProps} />
      </ErrorInternalResponse>
    );
  }

  if (isInternalErrorResponse(error)) {
    return (
      <ErrorInternalResponse {...errorInternalResponseProps}>
        <ErrorRouterComponent error={error.error} {...errorInternalResponseProps} />
      </ErrorInternalResponse>
    );
  }

  return <ErrorInternalResponse {...errorInternalResponseProps} />;
};
