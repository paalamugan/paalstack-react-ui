import type { BoxPropsWithRef } from '@/layouts/Box';
import type React from 'react';

import { Flex } from '@/layouts/Flex';
import { cn } from '@/shared/lib';

import { Spinner } from '../Spinner';

export type LoadingProps = BoxPropsWithRef<
  'div',
  {
    /**
     * Optional content to display next to the Loading
     */
    content?: React.ReactNode;
    /**
     * Optional props to apply to the Spinner component
     */
    spinnerProps?: React.ComponentPropsWithoutRef<typeof Spinner>;
  }
>;

/**
 * Loading Component
 *
 * Displays a spinning indicator with optional text content.
 * Composed of a `Spinner` and an optional `Text` label inside a `Flex` wrapper.
 *
 * @example
 * // Basic usage — spinner only
 * import { Loading } from '@paalstack/react-ui';
 *
 * <Loading />
 *
 * @example
 * // With loading text
 * <Loading content="Loading..." />
 *
 * @example
 * // Larger spinner via spinnerProps
 * <Loading spinnerProps={{ size: 'xl' }} content="Please wait..." />
 *
 * @example
 * // Small spinner for inline / button use
 * <Button disabled={isLoading}>
 *   {isLoading ? <Loading spinnerProps={{ size: 'xs' }} content="Saving…" /> : 'Save'}
 * </Button>
 *
 * @example
 * // Custom wrapper color / layout via className (applied to the Flex container)
 * <Loading className="text-primary flex-col gap-3" content="Processing..." />
 *
 * @example
 * // Centered page loading
 * {isLoading && (
 *   <div className="flex items-center justify-center min-h-screen">
 *     <Loading spinnerProps={{ size: 'xl' }} content="Loading page..." />
 *   </div>
 * )}
 *
 * @example
 * // Card loading state
 * <Card>
 *   <CardContent className="flex items-center justify-center py-8">
 *     {isLoading ? <Loading content="Loading data..." /> : <div>{data}</div>}
 *   </CardContent>
 * </Card>
 *
 * @example
 * // DataTable loading state
 * <DataTable
 *   columns={columns}
 *   rows={rows}
 *   isLoading={isLoading}
 *   loadingContent={<Loading spinnerProps={{ size: 'lg' }} content="Fetching rows…" />}
 * />
 *
 * @example
 * // Search results loading
 * {isSearching ? (
 *   <div className="py-4">
 *     <Loading content="Searching..." />
 *   </div>
 * ) : (
 *   <SearchResults results={results} />
 * )}
 *
 * @example
 * // Overlay loading
 * <div className="relative">
 *   <div className={cn(isLoading && 'opacity-50 pointer-events-none')}>
 *     <ContentToLoad />
 *   </div>
 *   {isLoading && (
 *     <div className="absolute inset-0 flex items-center justify-center bg-background/50">
 *       <Loading content="Refreshing..." />
 *     </div>
 *   )}
 * </div>
 *
 * @example
 * // List item inline processing indicator
 * <ul className="space-y-2">
 *   {items.map(item => (
 *     <li key={item.id} className="flex items-center justify-between p-2 border rounded">
 *       <span>{item.name}</span>
 *       {item.isProcessing && <Loading spinnerProps={{ size: 'xs' }} />}
 *     </li>
 *   ))}
 * </ul>
 */
const Loading: React.FC<LoadingProps> = ({ className, content, spinnerProps, ...props }) => {
  return (
    <Flex className={cn('items-center justify-center gap-2 text-base text-muted-foreground', className)} {...props}>
      <Spinner size="lg" {...spinnerProps} />
      {content}
    </Flex>
  );
};

Loading.displayName = 'Loading';

export { Loading };
