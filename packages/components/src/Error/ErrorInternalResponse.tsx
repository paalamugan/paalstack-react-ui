import type { FC } from 'react';
import type { ErrorLayoutProps } from './ErrorLayout';

import { ErrorLayout } from './ErrorLayout';

export interface ErrorResponseImpl {
  data: string;
  error: Error;
  internal: boolean;
  status: number;
  statusText: string;
}

export const isInternalErrorResponse = (error: unknown): error is ErrorResponseImpl => {
  return !!error && 'internal' in (error as ErrorResponseImpl);
};

interface ErrorInternalResponseProps extends Partial<ErrorLayoutProps> {}

/**
 * ErrorInternalResponse Component
 *
 * Displays a user-friendly error message for internal/unexpected errors.
 * Used when something goes wrong but the error is recoverable or temporary.
 * Perfect for API failures, timeout errors, and transient issues.
 *
 * @example
 * // Basic usage
 * import { ErrorInternalResponse } from '@paalstack/react-ui';
 *
 * <ErrorInternalResponse>
 *   <Button onClick={() => retry()}>Try Again</Button>
 * </ErrorInternalResponse>
 *
 * @example
 * // With custom heading and message
 * <ErrorInternalResponse
 *   heading="Unable to load data"
 *   subHeading="We're having trouble connecting to our servers. Please try again in a moment."
 * >
 *   <Button onClick={() => window.location.reload()}>Reload Page</Button>
 * </ErrorInternalResponse>
 *
 * @example
 * // API request failure
 * const [error, setError] = useState(null);
 *
 * {error ? (
 *   <ErrorInternalResponse
 *     heading="Failed to load data"
 *     subHeading="There was a problem fetching the data. Please try again."
 *   >
 *     <Button onClick={() => { setError(null); refetch(); }}>
 *       Retry
 *     </Button>
 *   </ErrorInternalResponse>
 * ) : (
 *   <DataDisplay data={data} />
 * )}
 *
 * @example
 * // With error object displayed
 * <ErrorInternalResponse
 *   heading="Something went wrong"
 *   error={error}
 * >
 *   <div className="flex gap-2">
 *     <Button onClick={() => retry()}>Retry</Button>
 *     <Button variant="outline" onClick={() => goBack()}>
 *       Go Back
 *     </Button>
 *   </div>
 * </ErrorInternalResponse>
 *
 * @example
 * // Network timeout error
 * <ErrorInternalResponse
 *   heading="Request timed out"
 *   subHeading="The request took too long to complete. Please check your internet connection and try again."
 * >
 *   <Button onClick={() => retryRequest()}>Retry</Button>
 * </ErrorInternalResponse>
 *
 * @example
 * // Payment processing error
 * <ErrorInternalResponse
 *   heading="Payment processing failed"
 *   subHeading="We couldn't process your payment. Please try again or contact support if the issue persists."
 * >
 *   <div className="flex flex-col gap-2">
 *     <Button onClick={() => retryPayment()}>Try Again</Button>
 *     <Button variant="outline" onClick={() => contactSupport()}>
 *       Contact Support
 *     </Button>
 *   </div>
 * </ErrorInternalResponse>
 *
 * @example
 * // File upload failure
 * <ErrorInternalResponse
 *   heading="Upload failed"
 *   subHeading="There was a problem uploading your file. Please check the file size and format, then try again."
 *   showIcon
 * >
 *   <Button onClick={() => retryUpload()}>Retry Upload</Button>
 * </ErrorInternalResponse>
 *
 * @example
 * // With custom styling
 * <ErrorInternalResponse
 *   heading="Service temporarily unavailable"
 *   subHeading="We're experiencing high traffic. Please wait a moment and try again."
 *   className="min-h-[500px] bg-gray-50"
 *   headingClassName="text-orange-600"
 * >
 *   <Button onClick={() => retry()}>Retry</Button>
 * </ErrorInternalResponse>
 *
 * @example
 * // Conditional error display in component
 * const { data, error, isLoading, refetch } = useQuery('data', fetchData);
 *
 * if (isLoading) return <LoadingSpinner />;
 * if (error) {
 *   return (
 *     <ErrorInternalResponse>
 *       <Button onClick={() => refetch()}>Try Again</Button>
 *     </ErrorInternalResponse>
 *   );
 * }
 * return <DataView data={data} />;
 *
 * @example
 * // Integration check type with isInternalErrorResponse
 * if (isInternalErrorResponse(error)) {
 *   return (
 *     <ErrorInternalResponse error={error.error}>
 *       <Button onClick={() => handleRetry()}>Retry</Button>
 *     </ErrorInternalResponse>
 *   );
 * }
 *
 * @tip Use for recoverable errors where users can retry or take action
 * @tip Always provide a clear call-to-action (retry, go back, contact support)
 * @tip Avoid technical jargon - use friendly, non-technical language
 * @tip Consider adding contact support option for persistent errors
 */
export const ErrorInternalResponse: FC<ErrorInternalResponseProps> = ({
  children,
  heading = 'Something went wrong',
  subHeading = "It sounds like something unexpected happened right now. Please, give it a try later or, if it's urgent, contact our support team.",
  ...props
}) => {
  return (
    <ErrorLayout data-qa="error-internal-response" heading={heading} subHeading={subHeading} {...props}>
      {children}
    </ErrorLayout>
  );
};
