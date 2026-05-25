import type { HTMLTailwindStyledComponentProps } from '@/shared/types';
import type { FC } from 'react';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

export interface SkeletonProps extends Omit<HTMLTailwindStyledComponentProps<'div'>, 'children'> {}

/**
 * Skeleton Component
 *
 * A placeholder component that displays a loading skeleton while content is being fetched.
 * Perfect for improving perceived performance and providing visual feedback during loading states.
 *
 * @example
 * // Basic usage
 * import { Skeleton } from '@paalstack/react-ui';
 *
 * <Skeleton className="h-4 w-full" />
 *
 * @example
 * // Different shapes and sizes
 * <Skeleton className="h-12 w-12 rounded-full" /> // Circle
 * <Skeleton className="h-4 w-[250px]" /> // Line
 * <Skeleton className="h-32 w-full rounded-lg" /> // Rectangle
 *
 * @example
 * // Loading card skeleton
 * <Card>
 *   <CardHeader>
 *     <Skeleton className="h-4 w-[250px]" />
 *     <Skeleton className="h-4 w-[200px]" />
 *   </CardHeader>
 *   <CardContent>
 *     <Skeleton className="h-[200px] w-full" />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // User profile skeleton
 * <div className="flex items-center space-x-4">
 *   <Skeleton className="h-12 w-12 rounded-full" />
 *   <div className="space-y-2">
 *     <Skeleton className="h-4 w-[250px]" />
 *     <Skeleton className="h-4 w-[200px]" />
 *   </div>
 * </div>
 *
 * @example
 * // List of items skeleton
 * <div className="space-y-2">
 *   {[...Array(5)].map((_, i) => (
 *     <Skeleton key={i} className="h-16 w-full" />
 *   ))}
 * </div>
 *
 * @example
 * // Table skeleton
 * <table className="w-full">
 *   <thead>
 *     <tr>
 *       {[...Array(4)].map((_, i) => (
 *         <th key={i}><Skeleton className="h-4 w-full" /></th>
 *       ))}
 *     </tr>
 *   </thead>
 *   <tbody>
 *     {[...Array(5)].map((_, i) => (
 *       <tr key={i}>
 *         {[...Array(4)].map((_, j) => (
 *           <td key={j}><Skeleton className="h-4 w-full" /></td>
 *         ))}
 *       </tr>
 *     ))}
 *   </tbody>
 * </table>
 *
 * @example
 * // Blog post skeleton
 * <article>
 *   <Skeleton className="h-[300px] w-full mb-4" /> // Featured image
 *   <Skeleton className="h-6 w-3/4 mb-2" /> // Title
 *   <Skeleton className="h-4 w-1/4 mb-4" /> // Date
 *   <Skeleton className="h-4 w-full mb-2" /> // Paragraph line 1
 *   <Skeleton className="h-4 w-full mb-2" /> // Paragraph line 2
 *   <Skeleton className="h-4 w-2/3" /> // Paragraph line 3
 * </article>
 *
 * @example
 * // Product card skeleton
 * <div className="border rounded-lg p-4 space-y-3">
 *   <Skeleton className="h-48 w-full" /> // Product image
 *   <Skeleton className="h-4 w-3/4" /> // Product name
 *   <Skeleton className="h-4 w-1/2" /> // Price
 *   <Skeleton className="h-10 w-full" /> // Add to cart button
 * </div>
 *
 * @example
 * // Conditional loading with data
 * const { data, isLoading } = useQuery('users', fetchUsers);
 *
 * {isLoading ? (
 *   <div className="space-y-4">
 *     {[...Array(3)].map((_, i) => (
 *       <div key={i} className="flex items-center space-x-4">
 *         <Skeleton className="h-12 w-12 rounded-full" />
 *         <div className="space-y-2">
 *           <Skeleton className="h-4 w-[250px]" />
 *           <Skeleton className="h-4 w-[200px]" />
 *         </div>
 *       </div>
 *     ))}
 *   </div>
 * ) : (
 *   <div>
 *     {data.map(user => <UserCard key={user.id} user={user} />)}
 *   </div>
 * )}
 *
 * @example
 * // Dashboard skeleton
 * <div className="grid grid-cols-3 gap-4">
 *   {[...Array(3)].map((_, i) => (
 *     <Card key={i}>
 *       <CardHeader>
 *         <Skeleton className="h-4 w-[100px]" />
 *       </CardHeader>
 *       <CardContent>
 *         <Skeleton className="h-8 w-[60px] mb-2" />
 *         <Skeleton className="h-4 w-full" />
 *       </CardContent>
 *     </Card>
 *   ))}
 * </div>
 *
 * @example
 * // Reusable skeleton component
 * const SkeletonCard = () => (
 *   <div className="flex flex-col space-y-3">
 *     <Skeleton className="h-[125px] w-[250px] rounded-xl" />
 *     <div className="space-y-2">
 *       <Skeleton className="h-4 w-[250px]" />
 *       <Skeleton className="h-4 w-[200px]" />
 *     </div>
 *   </div>
 * );
 *
 * // Usage
 * {isLoading ? <SkeletonCard /> : <ContentCard data={data} />}
 */
export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <Box
      className={cn('animate-pulse rounded-md bg-gray-200 dark:bg-gray-600', className)}
      data-slot="skeleton"
      data-qa="skeleton"
      {...props}
    />
  );
};
Skeleton.displayName = 'Skeleton';
