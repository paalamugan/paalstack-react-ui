import type { FC } from 'react';
import type { ErrorLayoutProps } from './ErrorLayout';

import { ErrorLayout } from './ErrorLayout';

interface ErrorNotFoundResponseProps extends Partial<ErrorLayoutProps> {}

/**
 * ErrorNotFoundResponse Component
 *
 * Displays a 404 Not Found error page when a requested resource doesn't exist.
 * Perfect for missing pages, deleted content, broken links, and invalid URLs.
 *
 * @example
 * // Basic usage
 * import { ErrorNotFoundResponse } from '@paalstack/react-ui';
 *
 * <ErrorNotFoundResponse>
 *   <Button onClick={() => navigate('/')}>Go Home</Button>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // With custom message
 * <ErrorNotFoundResponse
 *   heading="Page Not Found"
 *   subHeading="The page you're looking for doesn't exist or has been moved."
 * >
 *   <Button onClick={() => navigate('/')}>
 *     Return Home
 *   </Button>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // 404 route handler
 * <Route path="*" element={
 *   <ErrorNotFoundResponse>
 *     <div className="flex gap-2">
 *       <Button onClick={() => navigate('/')}>Home</Button>
 *       <Button variant="outline" onClick={() => navigate(-1)}>
 *         Go Back
 *       </Button>
 *     </div>
 *   </ErrorNotFoundResponse>
 * } />
 *
 * @example
 * // User profile not found
 * {!user ? (
 *   <ErrorNotFoundResponse
 *     heading="User not found"
 *     subHeading="The user profile you're looking for doesn't exist or has been deleted."
 *   >
 *     <Button onClick={() => navigate('/users')}>
 *       Browse Users
 *     </Button>
 *   </ErrorNotFoundResponse>
 * ) : (
 *   <UserProfile user={user} />
 * )}
 *
 * @example
 * // Product not found
 * <ErrorNotFoundResponse
 *   heading="Product not found"
 *   subHeading="This product is no longer available or the link is incorrect."
 * >
 *   <div className="flex gap-2">
 *     <Button onClick={() => navigate('/products')}>
 *       Browse Products
 *     </Button>
 *     <Button variant="outline" onClick={() => navigate('/search')}>
 *       Search
 *     </Button>
 *   </div>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // Article not found
 * <ErrorNotFoundResponse
 *   heading="Article not found"
 *   subHeading="This article may have been moved or deleted. Try searching for similar content."
 * >
 *   <Button onClick={() => navigate('/blog')}>
 *     View All Articles
 *   </Button>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // With search functionality
 * <ErrorNotFoundResponse
 *   heading="Page not found"
 *   subHeading="Can't find what you're looking for? Try searching."
 * >
 *   <div className="flex flex-col gap-4 items-center w-full max-w-md">
 *     <Input
 *       placeholder="Search..."
 *       onKeyDown={(e) => e.key === 'Enter' && handleSearch(e.target.value)}
 *     />
 *     <Button onClick={() => navigate('/')}>
 *       Return Home
 *     </Button>
 *   </div>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // Deleted content
 * <ErrorNotFoundResponse
 *   heading="Content removed"
 *   subHeading="This content has been removed by the author or moderation team."
 *   showIcon
 * >
 *   <Button onClick={() => navigate('/community')}>
 *     Explore Community
 *   </Button>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // Private/restricted content
 * <ErrorNotFoundResponse
 *   heading="Access restricted"
 *   subHeading="This content is private or you don't have permission to view it."
 * >
 *   <div className="flex gap-2">
 *     <Button onClick={() => navigate('/login')}>
 *       Log In
 *     </Button>
 *     <Button variant="outline" onClick={() => navigate('/')}>
 *       Go Home
 *     </Button>
 *   </div>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // File not found
 * <ErrorNotFoundResponse
 *   heading="File not found"
 *   subHeading="The file you're trying to access doesn't exist or has been moved to another location."
 * >
 *   <Button onClick={() => navigate('/files')}>
 *     Browse Files
 *   </Button>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // With helpful suggestions
 * <ErrorNotFoundResponse
 *   heading="Page not found"
 *   subHeading="The page you're looking for doesn't exist. Here are some helpful links:"
 * >
 *   <div className="flex flex-col gap-2">
 *     <Button onClick={() => navigate('/')}>Home</Button>
 *     <Button variant="outline" onClick={() => navigate('/products')}>
 *       Products
 *     </Button>
 *     <Button variant="outline" onClick={() => navigate('/support')}>
 *       Support
 *     </Button>
 *   </div>
 * </ErrorNotFoundResponse>
 *
 * @example
 * // Custom 404 with branding
 * <ErrorNotFoundResponse
 *   heading="Oops! Lost in space 🚀"
 *   subHeading="Looks like this page took a wrong turn. Let's get you back on track!"
 *   className="bg-gradient-to-b from-blue-50 to-white"
 * >
 *   <Button onClick={() => navigate('/')}>
 *     Beam Me Home
 *   </Button>
 * </ErrorNotFoundResponse>
 *
 * @tip Use friendly, helpful language instead of technical error messages
 * @tip Provide clear navigation options to help users find what they need
 * @tip Consider adding search functionality for better user experience
 * @tip Log 404 errors to identify broken links and fix them
 * @tip Customize the message based on the type of missing content (user, product, page, etc.)
 */
export const ErrorNotFoundResponse: FC<ErrorNotFoundResponseProps> = ({
  children,
  heading = "Page doesn't exist",
  subHeading = 'Probably you got here by accident. If you think there is something wrong on our side, please contact us!',
  ...props
}) => {
  return (
    <ErrorLayout data-qa="error-not-found-response" heading={heading} subHeading={subHeading} {...props}>
      {children}
    </ErrorLayout>
  );
};
