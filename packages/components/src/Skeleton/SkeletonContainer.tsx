import type { HTMLTailwindStyledComponentProps } from '@/shared/types';
import type { FC } from 'react';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

import { Skeleton } from './Skeleton';

export interface SkeletonContainerProps extends Omit<HTMLTailwindStyledComponentProps<'div'>, 'as' | 'children'> {
  /**
   * If true, the skeleton will be a circle.
   */
  circle?: boolean;
  /**
   * The number of skeleton items to render.
   */
  count?: number;
  /**
   * The class name to apply to each skeleton item.
   */
  className?: string;
  /**
   * If true, the skeleton will be full width.
   */
  isFullWidth?: boolean;
  /**
   * The class name to apply to the wrapper container.
   */
  wrapperClassName?: string;
}

/**
 * SkeletonContainer Component
 *
 * A convenient wrapper component that generates multiple skeleton placeholders with consistent spacing.
 * Simplifies creating loading states by automatically handling multiple skeleton elements.
 *
 * @example
 * // Basic usage - multiple lines
 * import { SkeletonContainer } from '@paalstack/react-ui';
 *
 * <SkeletonContainer count={3} />
 *
 * @example
 * // Single skeleton
 * <SkeletonContainer />
 *
 * @example
 * // Circle skeletons (avatars)
 * <SkeletonContainer circle count={5} />
 *
 * @example
 * // Custom height for text lines
 * <SkeletonContainer
 *   count={4}
 *   className="h-6"
 * />
 *
 * @example
 * // Full width paragraphs
 * <SkeletonContainer
 *   count={5}
 *   isFullWidth
 *   wrapperClassName="space-y-3"
 * />
 *
 * @example
 * // User profile loading state
 * <div className="flex items-start space-x-4">
 *   <SkeletonContainer circle className="h-16 w-16" />
 *   <div className="flex-1">
 *     <SkeletonContainer count={2} className="h-5" />
 *   </div>
 * </div>
 *
 * @example
 * // List of items skeleton
 * <div>
 *   {Array.from({ length: 5 }).map((_, i) => (
 *     <div key={i} className="flex items-center space-x-3 p-4 border-b">
 *       <SkeletonContainer circle className="h-10 w-10" />
 *       <div className="flex-1">
 *         <SkeletonContainer count={2} className="h-4" />
 *       </div>
 *     </div>
 *   ))}
 * </div>
 *
 * @example
 * // Card content skeleton
 * <Card>
 *   <CardHeader>
 *     <SkeletonContainer count={2} className="h-5" />
 *   </CardHeader>
 *   <CardContent>
 *     <SkeletonContainer count={5} className="h-4" />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Blog post preview skeleton - Featured image, title, author, and content
 * <article className="space-y-4">
 *   <SkeletonContainer className="h-48 w-full" />
 *   <SkeletonContainer className="h-8 w-3/4" />
 *   <div className="flex items-center space-x-4">
 *     <SkeletonContainer circle className="h-8 w-8" />
 *     <SkeletonContainer count={2} className="h-3 w-24" />
 *   </div>
 *   <SkeletonContainer count={6} wrapperClassName="space-y-2" />
 * </article>
 *
 * @example
 * // Comment section skeleton
 * <div className="space-y-6">
 *   {Array.from({ length: 3 }).map((_, i) => (
 *     <div key={i} className="flex space-x-3">
 *       <SkeletonContainer circle className="h-10 w-10" />
 *       <div className="flex-1 space-y-2">
 *         <SkeletonContainer className="h-4 w-32" />
 *         <SkeletonContainer count={3} className="h-3" />
 *       </div>
 *     </div>
 *   ))}
 * </div>
 *
 * @example
 * // Sidebar navigation skeleton - Logo and menu items
 * <div className="space-y-4">
 *   <SkeletonContainer className="h-8 w-full" />
 *   <SkeletonContainer count={5} className="h-10" wrapperClassName="space-y-2" />
 * </div>
 *
 * @example
 * // Product grid skeleton
 * <div className="grid grid-cols-3 gap-4">
 *   {Array.from({ length: 6 }).map((_, i) => (
 *     <div key={i} className="space-y-3">
 *       <SkeletonContainer className="h-48 w-full rounded-lg" />
 *       <SkeletonContainer count={2} className="h-4" />
 *       <SkeletonContainer className="h-6 w-20" />
 *     </div>
 *   ))}
 * </div>
 *
 * @example
 * // Table rows skeleton
 * <table className="w-full">
 *   <thead>
 *     <tr>
 *       <th><SkeletonContainer className="h-4" /></th>
 *       <th><SkeletonContainer className="h-4" /></th>
 *       <th><SkeletonContainer className="h-4" /></th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     {Array.from({ length: 5 }).map((_, i) => (
 *       <tr key={i}>
 *         <td><SkeletonContainer className="h-4" /></td>
 *         <td><SkeletonContainer className="h-4" /></td>
 *         <td><SkeletonContainer className="h-4" /></td>
 *       </tr>
 *     ))}
 *   </tbody>
 * </table>
 *
 * @example
 * // Dashboard stats skeleton
 * <div className="grid grid-cols-4 gap-4">
 *   {Array.from({ length: 4 }).map((_, i) => (
 *     <Card key={i}>
 *       <CardContent className="pt-6">
 *         <SkeletonContainer className="h-8 w-20 mb-2" />
 *         <SkeletonContainer className="h-4 w-32" />
 *       </CardContent>
 *     </Card>
 *   ))}
 * </div>
 *
 * @example
 * // Chat message skeleton with alternating alignment
 * <div className="space-y-4">
 *   {Array.from({ length: 5 }).map((_, i) => (
 *     <div key={i} className={cn("flex space-x-3", i % 2 === 0 ? "flex-row-reverse" : "")}>
 *       <SkeletonContainer circle className="h-8 w-8" />
 *       <div className="flex-1">
 *         <SkeletonContainer count={2} className="h-4" wrapperClassName="space-y-1" />
 *       </div>
 *     </div>
 *   ))}
 * </div>
 *
 * @example
 * // Conditional loading with React Query
 * const UserList = () => {
 *   const { data, isLoading } = useQuery('posts', fetchPosts);
 *
 *   if (isLoading) {
 *     return (
 *       <div className="space-y-6">
 *         {Array.from({ length: 3 }).map((_, i) => (
 *           <Card key={i}>
 *             <CardContent className="pt-6">
 *               <SkeletonContainer count={4} />
 *             </CardContent>
 *           </Card>
 *         ))}
 *       </div>
 *     );
 *   }
 *
 *   return (
 *     <div>
 *       {data.map(post => <PostCard key={post.id} post={post} />)}
 *     </div>
 *   );
 * }
 *
 * @example
 * // Form skeleton with labels and inputs
 * <form className="space-y-4">
 *   {Array.from({ length: 4 }).map((_, i) => (
 *     <div key={i} className="space-y-2">
 *       <SkeletonContainer className="h-4 w-32" />
 *       <SkeletonContainer className="h-10 w-full" />
 *     </div>
 *   ))}
 *   <SkeletonContainer className="h-10 w-24" />
 * </form>
 *
 * @example
 * // Media gallery skeleton
 * <div className="grid grid-cols-4 gap-2">
 *   {Array.from({ length: 12 }).map((_, i) => (
 *     <SkeletonContainer key={i} className="aspect-square w-full rounded" />
 *   ))}
 * </div>
 *
 * @example
 * // Timeline skeleton
 * <div className="space-y-8">
 *   {Array.from({ length: 4 }).map((_, i) => (
 *     <div key={i} className="flex space-x-4">
 *       <SkeletonContainer circle className="h-3 w-3 mt-1" />
 *       <div className="flex-1 space-y-2">
 *         <SkeletonContainer className="h-4 w-48" />
 *         <SkeletonContainer count={3} className="h-3" />
 *       </div>
 *     </div>
 *   ))}
 * </div>
 *
 * @tip Use `count` prop to quickly generate multiple skeleton lines
 * @tip Set circle={true} for avatar placeholders
 * @tip Combine with custom className for different heights and widths
 * @tip Use wrapperClassName to adjust spacing between skeleton items
 * @tip The last item in a multi-item skeleton is automatically 10/12 width unless isFullWidth is true
 */
export const SkeletonContainer: FC<SkeletonContainerProps> = ({
  className,
  circle,
  count,
  wrapperClassName,
  isFullWidth,
  ...props
}) => {
  const countArray = Array.from({ length: count ?? 1 });

  return (
    <Box className={cn('space-y-2', wrapperClassName)} data-qa="skeleton-container" {...props}>
      {countArray.map((_, index) => (
        <Skeleton
          key={index}
          data-qa="skeleton"
          className={cn(
            circle ? 'h-12 w-12 rounded-full' : 'h-4 w-full',
            {
              'w-10/12': !circle && !isFullWidth && countArray.length > 1 && index === countArray.length - 1,
            },
            className,
          )}
        />
      ))}
    </Box>
  );
};
SkeletonContainer.displayName = 'SkeletonContainer';
