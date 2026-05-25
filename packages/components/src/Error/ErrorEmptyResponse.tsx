import type { FC } from 'react';
import type { ErrorLayoutProps } from './ErrorLayout';

import { ErrorLayout } from './ErrorLayout';

interface ErrorEmptyResponseProps extends Partial<ErrorLayoutProps> {}

/**
 * ErrorEmptyResponse Component
 *
 * Displays a friendly empty state message when no results or data are found.
 * Perfect for search results, filtered lists, empty collections, and no-data scenarios.
 *
 * @example
 * // Basic usage
 * import { ErrorEmptyResponse } from '@paalstack/react-ui';
 *
 * <ErrorEmptyResponse>
 *   <Button onClick={() => navigate('/create')}>Create New Item</Button>
 * </ErrorEmptyResponse>
 *
 * @example
 * // With custom heading and subheading
 * <ErrorEmptyResponse
 *   heading="No tasks found"
 *   subHeading="You don't have any tasks yet. Create your first task to get started!"
 * >
 *   <Button onClick={() => openCreateDialog()}>Create Task</Button>
 * </ErrorEmptyResponse>
 *
 * @example
 * // Empty search results
 * <ErrorEmptyResponse
 *   heading="No results found"
 *   subHeading={`We couldn't find any results for "${searchQuery}". Try adjusting your search.`}
 * >
 *   <Button variant="outline" onClick={() => clearSearch()}>
 *     Clear Search
 *   </Button>
 * </ErrorEmptyResponse>
 *
 * @example
 * // Empty product list
 * <ErrorEmptyResponse
 *   heading="Your cart is empty"
 *   subHeading="Looks like you haven't added any items to your cart yet."
 * >
 *   <Button onClick={() => navigate('/products')}>
 *     Continue Shopping
 *   </Button>
 * </ErrorEmptyResponse>
 *
 * @example
 * // Empty inbox
 * <ErrorEmptyResponse
 *   heading="No messages"
 *   subHeading="You're all caught up! No new messages in your inbox."
 *   showIcon
 * />
 *
 * @example
 * // Filtered list with no results
 * {filteredItems.length === 0 ? (
 *   <ErrorEmptyResponse
 *     heading="No items match your filters"
 *     subHeading="Try adjusting or clearing your filters to see more results."
 *   >
 *     <Button variant="ghost" onClick={() => resetFilters()}>
 *       Clear All Filters
 *     </Button>
 *   </ErrorEmptyResponse>
 * ) : (
 *   <ItemsList items={filteredItems} />
 * )}
 *
 * @example
 * // Empty favorites list
 * <ErrorEmptyResponse
 *   heading="No favorites yet"
 *   subHeading="Items you mark as favorites will appear here for quick access."
 * >
 *   <Button onClick={() => navigate('/browse')}>
 *     Browse Items
 *   </Button>
 * </ErrorEmptyResponse>
 *
 * @example
 * // Empty notification list
 * <ErrorEmptyResponse
 *   heading="All clear!"
 *   subHeading="You don't have any notifications at the moment."
 *   className="min-h-[400px]"
 * />
 *
 * @example
 * // With custom icon
 * import { FiInbox } from 'react-icons/fi';
 *
 * <ErrorEmptyResponse
 *   heading="Inbox is empty"
 *   subHeading="No new emails to display"
 *   icon={<FiInbox className="size-16 text-gray-400" />}
 * >
 *   <Button onClick={() => composeEmail()}>Compose Email</Button>
 * </ErrorEmptyResponse>
 *
 * @example
 * // Empty data table
 * {data.length === 0 ? (
 *   <ErrorEmptyResponse
 *     heading="No data available"
 *     subHeading="Import or create new records to get started."
 *   >
 *     <div className="flex gap-2">
 *       <Button onClick={() => openImportDialog()}>Import Data</Button>
 *       <Button variant="outline" onClick={() => openCreateDialog()}>
 *         Create New
 *       </Button>
 *     </div>
 *   </ErrorEmptyResponse>
 * ) : (
 *   <DataTable data={data} columns={columns} />
 * )}
 *
 * @tip Use for empty states, not actual errors - this provides a positive user experience
 * @tip Always provide an action button to help users move forward
 * @tip Customize the message to match your specific use case and user context
 * @tip Consider showing helpful tips or onboarding content for first-time users
 */
export const ErrorEmptyResponse: FC<ErrorEmptyResponseProps> = ({
  children,
  heading = 'No results found',
  subHeading = 'Unfortunately, there is nothing for you here yet!',
  ...props
}) => {
  return (
    <ErrorLayout data-qa="error-empty-response" heading={heading} subHeading={subHeading} {...props}>
      {children}
    </ErrorLayout>
  );
};
