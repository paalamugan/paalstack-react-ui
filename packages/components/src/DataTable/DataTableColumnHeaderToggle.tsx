import type { Column } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import { RxArrowDown as ArrowDownIcon, RxArrowUp as ArrowUpIcon, RxCaretSort as CaretSortIcon } from '@/icons/rx';
import { cn } from '@/shared/lib';

import { Button } from '../Button';

interface DataTableColumnHeaderToggleProps<TData, TValue> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  column: Column<TData, TValue>;
  title: ReactNode;
}

/**
 * One-click sortable column header (no dropdown).
 *
 * Clicking the header button directly toggles the sort direction and the
 * icon updates on every click:
 *   - unsorted  → CaretSortIcon (data-qa="data-table-column-header-sort-icon")
 *   - ascending → ArrowUpIcon   (data-qa="data-table-column-header-asc-icon")
 *   - descending→ ArrowDownIcon (data-qa="data-table-column-header-desc-icon")
 *
 * Unlike `DataTableColumnHeader` (which opens an Asc/Desc/Hide dropdown),
 * this is a single click-to-toggle control — ideal for server-side sorting
 * where the sort state is forwarded to the API via `onSortingChange`.
 */
export const DataTableColumnHeaderToggle = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderToggleProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('flex items-center space-x-2', className)} data-qa="data-table-column-header-toggle">
      <Button
        variant="ghost"
        size="sm"
        color="secondary"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        className="-ml-3 h-8 text-muted-foreground hover:text-secondary-foreground focus-visible:ring-0"
        data-qa="data-table-column-header-toggle-button"
      >
        <span data-qa="data-table-column-header-title">{title}</span>
        {column.getIsSorted() === 'desc' ? (
          <ArrowDownIcon className="ml-2 size-4" data-qa="data-table-column-header-desc-icon" />
        ) : column.getIsSorted() === 'asc' ? (
          <ArrowUpIcon className="ml-2 size-4" data-qa="data-table-column-header-asc-icon" />
        ) : (
          <CaretSortIcon className="ml-2 size-4" data-qa="data-table-column-header-sort-icon" />
        )}
      </Button>
    </div>
  );
};
