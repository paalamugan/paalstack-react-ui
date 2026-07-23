import { useCallback, useEffect } from 'react';

import type { Table } from '@tanstack/react-table';
import type { PaginationProps } from '../Pagination';

import { cn } from '@/shared/lib';

import { Pagination } from '../Pagination';

export interface DataTablePaginationProps<TData> {
  /**
   * The TanStack Table instance.
   */
  table: Table<TData>;
  /**
   * When true, shows the number of selected rows instead of the total results.
   */
  enableSelectableTable?: boolean;
  /**
   * Props forwarded to the Pagination component.
   * All other PaginationProps are supported: pageSize, pageSizeOptions, showPageSizeOptions,
   * showTotalResults, showOnlyNextAndPrevious, pageSizeText, siblings, boundaries, className, etc.
   */
  paginationProps?: Omit<PaginationProps, 'total'> & { total?: number };
}

export function DataTablePagination<TData>({
  table,
  enableSelectableTable,
  paginationProps,
}: DataTablePaginationProps<TData>) {
  const {
    showPageSizeOptions = true,
    showOnlyIfTotalGreaterThanPageSize = false,
    showTotalResults,
    className,
    total: totalProp,
    currentPage: currentPageProp,
    pageSizeOptions,
    pageSize: pageSizeProp,
    onPageChange: onPageChangeProp,
    onPageSizeChange: onPageSizeChangeProp,
    ...restPaginationProps
  } = paginationProps ?? {};

  const totalRows = totalProp ?? table.getFilteredRowModel().rows.length;

  const resolvedShowTotalResults = showTotalResults ?? !enableSelectableTable;

  const enableLocalPagination = !totalProp || totalProp === table.getFilteredRowModel().rows.length;

  const tablePageIndex = enableLocalPagination ? table.getState().pagination.pageIndex + 1 : currentPageProp;
  const tablePageSize = enableLocalPagination ? table.getState().pagination.pageSize : pageSizeProp;

  /**
   * If the total prop is not provided or is equal to the rows count, use the local pagination.
   * Otherwise, use the global pagination.
   */
  useEffect(() => {
    // If the page size prop is provided, set the page size to the page size prop.
    if (pageSizeProp) {
      table.setPageSize(pageSizeProp);
    }

    // If the enableLocalPagination is true and the current page prop is provided, set the page index to the current page prop.
    if (enableLocalPagination && currentPageProp) {
      table.setPageIndex(currentPageProp - 1);
    }
  }, [enableLocalPagination, table, currentPageProp, pageSizeProp]);

  /**
   * If the total prop is not provided or is equal to the rows count, use the local pagination.
   * Otherwise, use the global pagination.
   * If the onPageChange prop is provided, use it.
   * Otherwise, set the page index to the page number.
   */
  const onPageChange = useCallback(
    (page: number) => {
      if (enableLocalPagination) {
        table.setPageIndex(page - 1);
        onPageChangeProp?.(page);
      } else if (onPageChangeProp) {
        onPageChangeProp(page);
      } else {
        table.setPageIndex(page - 1);
      }
    },
    [onPageChangeProp, table, enableLocalPagination],
  );

  /**
   * If the total prop is not provided or is equal to the rows count, use the local pagination.
   * Otherwise, use the global pagination.
   * If the onPageSizeChange prop is provided, use it.
   * Otherwise, set the page size to the size.
   */
  const onPageSizeChange = useCallback(
    (size: number) => {
      if (enableLocalPagination) {
        table.setPageSize(size);
        onPageSizeChangeProp?.(size);
      } else if (onPageSizeChangeProp) {
        onPageSizeChangeProp(size);
      } else {
        table.setPageSize(size);
      }
      onPageChange(1);
    },
    [enableLocalPagination, onPageSizeChangeProp, onPageChange, table],
  );

  return (
    <Pagination
      total={totalRows}
      selectedRowsCount={table.getFilteredSelectedRowModel().rows.length}
      showSelectedRowsCount={enableSelectableTable}
      currentPage={tablePageIndex}
      pageSize={tablePageSize}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      pageSizeOptions={pageSizeOptions}
      showPageSizeOptions={showPageSizeOptions}
      showOnlyIfTotalGreaterThanPageSize={showOnlyIfTotalGreaterThanPageSize}
      showTotalResults={resolvedShowTotalResults}
      className={cn(!enableSelectableTable && 'w-full', className)}
      {...restPaginationProps}
    />
  );
}
