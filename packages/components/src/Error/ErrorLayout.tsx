import type { CenterProps } from '@/layouts/index';
import type React from 'react';
import type { FC, ReactNode } from 'react';

import { RxCross1 as Cross1Icon } from '@/icons/rx';
import { Box, Center, Heading, Text, TypographyStrong, VStack } from '@/layouts/index';
import { cn } from '@/shared/lib';

export type ErrorLayoutProps = Partial<CenterProps> & {
  /**
   * Heading of the error content
   */
  heading?: ReactNode;
  /**
   * Subheading of the error content
   */
  subHeading?: ReactNode;
  /**
   * Children of the error content
   */
  children: ReactNode;
  /**
   * Icon of the error content
   */
  icon?: React.ReactElement;
  /**
   * Show icon of the error content
   */
  showIcon?: boolean;
  /**
   * Classname of the error content
   */
  className?: string;
  /**
   * Classname of the heading of the error content
   */
  headingClassName?: string;
  /**
   * Classname of the subheading of the error content
   */
  subHeadingClassName?: string;
  /**
   * Error object
   */
  error?: Error;
};

/**
 * ErrorLayout Component
 *
 * Base layout component for error pages and empty states.
 * Provides a centered, consistent layout with heading, subheading, icon, and action area.
 * Used as the foundation for other error components (ErrorEmptyResponse, ErrorInternalResponse, etc.).
 *
 * @example
 * // Basic usage
 * import { ErrorLayout } from '@paalstack/react-ui';
 *
 * <ErrorLayout
 *   heading="Something went wrong"
 *   subHeading="Please try again later"
 * >
 *   <Button onClick={() => retry()}>Retry</Button>
 * </ErrorLayout>
 *
 * @example
 * // With default error icon
 * <ErrorLayout
 *   heading="Error occurred"
 *   subHeading="An unexpected error has occurred"
 *   showIcon
 * >
 *   <Button onClick={() => goBack()}>Go Back</Button>
 * </ErrorLayout>
 *
 * @example
 * // With custom icon
 * import { FiAlertTriangle } from 'react-icons/fi';
 *
 * <ErrorLayout
 *   heading="Access denied"
 *   subHeading="You don't have permission to view this page"
 *   icon={<FiAlertTriangle className="size-16 text-yellow-500" />}
 * >
 *   <Button onClick={() => navigate('/dashboard')}>
 *     Return to Dashboard
 *   </Button>
 * </ErrorLayout>
 *
 * @example
 * // With error object displayed
 * <ErrorLayout
 *   heading="Failed to load data"
 *   subHeading="An error occurred while fetching the data"
 *   error={error}
 * >
 *   <Button onClick={() => retry()}>Try Again</Button>
 * </ErrorLayout>
 *
 * @example
 * // Custom styling
 * <ErrorLayout
 *   heading="Page not found"
 *   subHeading="The page you're looking for doesn't exist"
 *   className="min-h-screen bg-gray-50"
 *   headingClassName="text-3xl text-blue-600"
 *   subHeadingClassName="text-gray-600"
 * >
 *   <Button onClick={() => navigate('/')}>Go Home</Button>
 * </ErrorLayout>
 *
 * @example
 * // Empty state layout
 * <ErrorLayout
 *   heading="No items found"
 *   subHeading="Get started by creating your first item"
 *   icon={<EmptyBoxIcon className="size-20 text-gray-400" />}
 * >
 *   <Button onClick={() => openCreateDialog()}>
 *     Create Item
 *   </Button>
 * </ErrorLayout>
 *
 * @example
 * // Maintenance mode
 * import { FiTool } from 'react-icons/fi';
 *
 * <ErrorLayout
 *   heading="Under Maintenance"
 *   subHeading="We're currently performing scheduled maintenance. We'll be back soon!"
 *   icon={<FiTool className="size-16 text-blue-500" />}
 *   className="min-h-screen"
 * />
 *
 * @example
 * // Multiple action buttons
 * <ErrorLayout
 *   heading="Session expired"
 *   subHeading="Your session has expired. Please log in again to continue."
 * >
 *   <div className="flex gap-2">
 *     <Button onClick={() => login()}>Log In</Button>
 *     <Button variant="outline" onClick={() => navigate('/')}>
 *       Go Home
 *     </Button>
 *   </div>
 * </ErrorLayout>
 *
 * @example
 * // Custom content layout
 * <ErrorLayout
 *   heading="Payment Required"
 *   subHeading="Upgrade your plan to access this feature"
 * >
 *   <div className="flex flex-col gap-4 items-center">
 *     <div className="text-center">
 *       <p className="text-sm text-gray-600">Starting at $9.99/month</p>
 *     </div>
 *     <div className="flex gap-2">
 *       <Button onClick={() => navigate('/pricing')}>
 *         View Plans
 *       </Button>
 *       <Button variant="ghost" onClick={() => goBack()}>
 *         Maybe Later
 *       </Button>
 *     </div>
 *   </div>
 * </ErrorLayout>
 *
 * @example
 * // Creating custom error component
 * export const CustomErrorPage = ({ title, message }) => (
 *   <ErrorLayout
 *     heading={title}
 *     subHeading={message}
 *     showIcon
 *     className="min-h-[80vh]"
 *   >
 *     <Button onClick={() => window.location.reload()}>
 *       Reload Page
 *     </Button>
 *   </ErrorLayout>
 * );
 *
 * @example
 * // With React Query error
 * const { error } = useQuery('data', fetchData);
 *
 * if (error) {
 *   return (
 *     <ErrorLayout
 *       heading="Failed to load data"
 *       error={error}
 *     >
 *       <Button onClick={() => refetch()}>Retry</Button>
 *     </ErrorLayout>
 *   );
 * }
 *
 * @tip Use as a base component to create consistent error pages across your app
 * @tip Customize className to control the minimum height and background
 * @tip Use showIcon for default error icon, or provide custom icon for specific scenarios
 * @tip Always provide actionable next steps in the children prop
 */
export const ErrorLayout: FC<ErrorLayoutProps> = ({
  children,
  heading,
  icon,
  showIcon,
  subHeading,
  className,
  headingClassName,
  subHeadingClassName,
  error,
  ...props
}) => {
  return (
    <Center className={cn('min-h-[75vh] flex-col gap-6 text-center text-red-500', className)} {...props}>
      {showIcon ? (
        <Box className="rounded-full bg-red-100 p-5">
          <Cross1Icon className="size-8 text-red-500" />
        </Box>
      ) : (
        icon
      )}
      {(heading || subHeading || error) && (
        <VStack className="max-w-2xl">
          {heading && (
            <Heading as="h2" className={cn('text-lg md:text-xl', headingClassName)}>
              {heading}
            </Heading>
          )}
          {subHeading && <Text className={cn('text-base md:text-lg', subHeadingClassName)}>{subHeading}</Text>}
          {error && (
            <Text className="italic">
              <TypographyStrong>Error Message: </TypographyStrong>
              {error.message}
            </Text>
          )}
        </VStack>
      )}
      {children}
    </Center>
  );
};
