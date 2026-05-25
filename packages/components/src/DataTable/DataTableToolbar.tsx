import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

import type { Table } from '@tanstack/react-table';
import type { DataTableFacetFilterColumn, DataTableSearchFilterColumn } from './types';

import { RxCross2 as Cross2Icon } from '@/icons/rx';
import { cn } from '@/shared/lib';

import { Button } from '../Button';
import { Input } from '../Input';
import { DataTableFacetedFilter } from './DataTableFacetedFilter';
import { DataTableViewOptions } from './DataTableViewOptions';

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  search?: DataTableSearchFilterColumn;
  facetFilterColumns?: DataTableFacetFilterColumn[];
  showTableConfigure?: boolean;
  toolbarRightSideContent?: React.ReactNode;
  toolbarLeftSideContent?: React.ReactNode;
  toolbarContainerClassName?: string;
  toolbarRightSideContainerClassName?: string;
}

export interface DataTableToolbarHandle {
  reset: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DataTableToolbar = forwardRef<DataTableToolbarHandle, DataTableToolbarProps<any>>((props, ref) => {
  const {
    table,
    search,
    facetFilterColumns,
    showTableConfigure,
    toolbarRightSideContent,
    toolbarLeftSideContent,
    toolbarContainerClassName,
    toolbarRightSideContainerClassName,
  } = props;

  const [searchInput, setSearchInput] = useState(search?.searchValue || '');

  useEffect(() => {
    setSearchInput(search?.searchValue || '');
  }, [search?.searchValue]);

  const handleSearchValueChange = useCallback(
    (value: string) => {
      setSearchInput(value);
      search?.onSearchValueChange?.(value);
    },
    [search],
  );

  const isFiltered =
    table.getState().columnFilters.length > 0 ||
    !!table.getState().globalFilter ||
    (table.getState().globalFilter && typeof table.getState().globalFilter === 'object');

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search) return;

      const accessorKeys = Array.isArray(search.accessorKey) ? search.accessorKey : [search.accessorKey];

      if (accessorKeys.length === 1) {
        // Single column search
        table.getColumn(accessorKeys[0])?.setFilterValue(searchInput);
      } else {
        // Multiple column search using custom global filter
        if (searchInput.trim()) {
          table.setGlobalFilter({
            searchValue: searchInput,
            searchColumns: accessorKeys,
          });
        } else {
          table.setGlobalFilter(undefined);
        }
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchInput, search, table]);

  /**
   * Reset all filters and search
   */
  const onReset = () => {
    table.resetColumnFilters();
    table.setGlobalFilter(undefined);
    handleSearchValueChange('');
  };

  /**
   * Expose reset method to parent components
   */
  useImperativeHandle(ref, () => ({
    reset: onReset,
  }));

  // Get current search value
  const getCurrentSearchValue = (): string => {
    return searchInput;
  };

  // Generate placeholder text
  const getPlaceholder = (): string => {
    if (!search) return '';
    if (search.placeholder) return search.placeholder;

    const accessorKeys = Array.isArray(search.accessorKey) ? search.accessorKey : [search.accessorKey];
    if (accessorKeys.length === 1) {
      return `Search by ${accessorKeys[0]}...`;
    }
    return `Search by ${accessorKeys.join(', ')}...`;
  };

  if (!search && !facetFilterColumns && !showTableConfigure && !toolbarRightSideContent && !toolbarLeftSideContent) {
    return null;
  }
  return (
    <div className={cn('flex items-center justify-between', toolbarContainerClassName)}>
      <div className="flex flex-1 items-center gap-2">
        {search && (
          <Input
            placeholder={search.placeholder || getPlaceholder()}
            value={getCurrentSearchValue()}
            onChange={(event) => handleSearchValueChange(event.target.value)}
            className={cn('w-[150px] lg:w-[250px]', search.className)}
            data-qa="data-table-search-input"
          />
        )}
        {facetFilterColumns?.map(
          ({ accessorKey, ...column }) =>
            table.getColumn(accessorKey) && (
              <DataTableFacetedFilter key={accessorKey} column={table.getColumn(accessorKey)} {...column} />
            ),
        )}
        {isFiltered && (
          <Button variant="ghost" onClick={onReset} className="px-2 lg:px-3" data-qa="data-table-reset-filters-button">
            Reset
            <Cross2Icon className="ml-2 size-4" data-qa="data-table-reset-filters-icon" />
          </Button>
        )}
      </div>
      {(showTableConfigure || toolbarRightSideContent || toolbarLeftSideContent) && (
        <div
          className={cn('flex items-center justify-end gap-2', toolbarRightSideContainerClassName)}
          data-qa="data-table-toolbar-right-side-content"
        >
          {toolbarLeftSideContent}
          {showTableConfigure && <DataTableViewOptions table={table} />}
          {toolbarRightSideContent}
        </div>
      )}
    </div>
  );
});
