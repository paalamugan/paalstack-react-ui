import { useCallback, useEffect, useState } from 'react';

import type {
  Cell,
  ColumnFiltersState,
  FilterFnOption,
  Header,
  OnChangeFn,
  Row,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';
import type { ReactNode } from 'react';
import type { DataTablePaginationProps } from './DataTablePagination';
import type { DataTableToolbarHandle } from './DataTableToolbar';
import type {
  DataTableColumnDef,
  DataTableFacetFilterColumn,
  DataTableInstance,
  DataTableSearchFilterColumn,
} from './types';

import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { cn } from '@/shared/lib';

import { Loading } from '../Loading';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Table';
import { getSelectColumn } from './constants';
import { DataTablePagination } from './DataTablePagination';
import { DataTableToolbar } from './DataTableToolbar';

const removeDuplicate = <TRow,>(array: TRow[], key: keyof TRow): TRow[] => {
  const seen = new Set();
  return array.filter((item) => {
    const k = item[key];
    if (seen.has(k)) {
      return false;
    } else {
      seen.add(k);
      return true;
    }
  });
};

export interface DataTableProps<TRow, TValue = unknown> {
  /**
   * provide the columns to render in the table
   */
  columns: DataTableColumnDef<TRow, TValue>[];
  /**
   * provide the data to render in the table
   */
  rows: TRow[];

  /**
   * Make sure you pass the setTable function directly without wrapping in useCallback
   * @param table instance of the table
   * @returns
   */
  setTable?: (table: DataTableInstance<TRow>) => void;

  /**
   * enable the selectable checkbox input in the table header
   */
  enableSelectableTable?: boolean;
  /**
   * provide the column accessorKey value to search the table
   */
  search?: DataTableSearchFilterColumn;
  /**
   * provide the column accessorKey value to filter the table
   */
  facetFilterColumns?: DataTableFacetFilterColumn[];
  /**
   * show the table toolbar
   */
  showTableConfigure?: boolean;
  /**
   * show the pagination
   * @default false
   */
  showPagination?: boolean;
  /**
   * Props forwarded directly to the Pagination component rendered inside the table.
   * Accepts all PaginationProps: pageSize, pageSizeOptions, showPageSizeOptions,
   * showTotalResults, showOnlyNextAndPrevious, pageSizeText, siblings, boundaries, etc.
   * The table's row count and page index are controlled internally — total, currentPage,
   * onPageChange, and onPageSizeChange are managed by the DataTable.
   *
   * @example
   * // Basic page size configuration
   * <DataTable paginationProps={{ pageSize: 10 }} />
   *
   * @example
   * // With total results and custom page sizes
   * <DataTable paginationProps={{ showTotalResults: true, pageSizeOptions: [10, 25, 50] }} />
   *
   * @example
   * // Next/previous only
   * <DataTable paginationProps={{ showOnlyNextAndPrevious: true, showPageSizeOptions: false }} />
   *
   * @example
   * // Custom page size label
   * <DataTable paginationProps={{ pageSizeText: 'rows per page' }} />
   */
  paginationProps?: DataTablePaginationProps<TRow>['paginationProps'];

  /**
   * additional class name to apply to the component
   */
  className?: string;
  /**
   * additional class name to apply to the table container
   */
  tableContainerClassName?: string;
  /**
   * provide the message to display when no results are found in the table
   * @default 'No results.'
   * @type React.ReactNode
   * @example <DataTable emptyContent="No tasks found." />
   * @example <DataTable emptyContent={<span>No tasks found.</span>} />
   */
  emptyContent?: ReactNode;
  /**
   * additional props to apply to the no results row
   */
  emptyContentTableRowProps?: Omit<React.ComponentPropsWithRef<typeof TableRow>, 'onClick'> & {
    onClick?: (row: Row<TRow>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
  };
  /**
   * additional props to apply to the no results cell
   */
  emptyContentTableCellProps?: Omit<React.ComponentPropsWithRef<typeof TableCell>, 'onClick'> & {
    onClick?: (cell: Cell<TRow, TValue>, event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
  };
  /**
   * additional content to render on the right side of the table
   */
  toolbarRightSideContent?: ReactNode;
  /**
   * additional content to render on the left side of the table
   */
  toolbarLeftSideContent?: ReactNode;
  /**
   * additional class name to apply to the toolbar container
   **/
  toolbarContainerClassName?: string;
  /**
   * additional class name to apply to the right side of the toolbar container
   */
  toolbarRightSideContainerClassName?: string;

  /**
   * Default sorting state
   */
  sorting?: SortingState;
  /**
   *
   * @param sorting sorting state
   * @returns
   */
  onSortingChange?: (updatedSorting: SortingState) => void;
  /**
   * global filter value to filter the table
   * @type string
   * @example <DataTable globalFilter="search text" />
   * @example <DataTable globalFilter={searchText} />
   * @default ''
   */
  globalFilter?: string;
  /**
   *
   * @param cell single cell of the table
   * @returns classname
   */
  getCellClassName?: (cell: Cell<TRow, TValue>) => string | undefined;
  /**
   *
   * @param header single header of the table
   * @returns classname
   */
  getHeadClassName?: (header: Header<TRow, unknown>) => string | undefined;
  /**
   *
   * @param row single row of the table
   */
  getRowClassName?: (row: Row<TRow>) => string | undefined;

  /**
   *  custom global filter function
   * @param rows current rows being evaluated
   * @param columnId id of the column being filtered
   * @param filterValue value of the filter
   * @type (rows: TRow[], columnId: string, filterValue: string) => boolean
   * @example
   * const customGlobalFilter = (row, columnId, filterValue) => {
   *    // custom filter logic
   *    return true; // return true to include the row, false to exclude it
   * }
   * <DataTable globalFilterFn={customGlobalFilter} />
   * @default undefined
   * If not provided, the default global filter function from react-table will be used.
   **/
  globalFilterFn?: FilterFnOption<TRow>;

  tableProps?: React.ComponentPropsWithRef<typeof Table>;
  tableHeadProps?: React.ComponentPropsWithRef<typeof TableHeader>;
  tableHeadCellProps?: Omit<React.ComponentPropsWithRef<typeof TableHead>, 'onClick'> & {
    onClick?: (header: Header<TRow, unknown>, event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
  };
  tableHeadRowProps?: React.ComponentPropsWithRef<typeof TableRow>;
  tableBodyProps?: React.ComponentPropsWithRef<typeof TableBody>;
  tableRowProps?: Omit<React.ComponentPropsWithRef<typeof TableRow>, 'onClick'> & {
    onClick?: (row: Row<TRow>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
  };
  tableCellProps?: Omit<React.ComponentPropsWithRef<typeof TableCell>, 'onClick'> & {
    onClick?: (cell: Cell<TRow, TValue>, event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
  };
  /**
   *  Ref to access DataTableToolbar methods
   */
  dataTableToolbarRef?: React.Ref<DataTableToolbarHandle>;
  /**
   * show the loading state
   * @default false
   */
  isLoading?: boolean;
  /**
   * content to display when the table is loading
   * @default <Loading content="Loading..." />
   */

  loadingContent?: ReactNode;
  /**
   * additional props to apply to the loading component
   */
  loadingProps?: React.ComponentPropsWithoutRef<typeof Loading>;
  /**
   * additional props to apply to the loading row
   */
  loadingTableRowProps?: Omit<React.ComponentPropsWithRef<typeof TableRow>, 'onClick'> & {
    onClick?: (row: Row<TRow>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
  };
  /**
   * additional props to apply to the loading cell
   */
  loadingTableCellProps?: Omit<React.ComponentPropsWithRef<typeof TableCell>, 'onClick'> & {
    onClick?: (cell: Cell<TRow, TValue>, event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
  };
}

/**
 * DataTable Component
 *
 * A powerful and feature-rich data table built on TanStack Table (react-table).
 * Includes sorting, filtering, pagination, row selection, column visibility, and more.
 * Perfect for complex data displays, admin panels, and data management interfaces.
 *
 * @example
 * // Basic usage
 * import { DataTable } from '@paalstack/react-ui';
 *
 * const columns = [
 *   { accessorKey: 'name', header: 'Name' },
 *   { accessorKey: 'email', header: 'Email' },
 *   { accessorKey: 'role', header: 'Role' },
 * ];
 *
 * <DataTable columns={columns} rows={users} />
 *
 * @example
 * // With pagination
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   pagination={{ enabled: true, pageSize: 10 }}
 * />
 *
 * @example
 * // With search
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   search={{ column: 'name', placeholder: 'Search by name...' }}
 * />
 *
 * @example
 * // With row selection
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   enableSelectableTable
 *   pagination={{ enabled: true }}
 * />
 *
 * @example
 * // With sorting
 * const columns = [
 *   {
 *     accessorKey: 'name',
 *     header: ({ column }) => (
 *       <DataTableColumnHeader column={column} title="Name" />
 *     ),
 *     enableSorting: true,
 *   },
 *   {
 *     accessorKey: 'email',
 *     header: 'Email',
 *     enableSorting: true,
 *   },
 * ];
 *
 * <DataTable columns={columns} rows={data} />
 *
 * @example
 * // With faceted filters
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   facetFilterColumns={[
 *     {
 *       column: 'status',
 *       title: 'Status',
 *       options: [
 *         { label: 'Active', value: 'active' },
 *         { label: 'Inactive', value: 'inactive' },
 *       ]
 *     },
 *     {
 *       column: 'role',
 *       title: 'Role',
 *       options: [
 *         { label: 'Admin', value: 'admin' },
 *         { label: 'User', value: 'user' },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // With column visibility toggle
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   showTableConfigure
 * />
 *
 * @example
 * // Custom cell rendering
 * const columns = [
 *   { accessorKey: 'name', header: 'Name' },
 *   {
 *     accessorKey: 'status',
 *     header: 'Status',
 *     cell: ({ row }) => (
 *       <Badge variant={row.original.status === 'active' ? 'success' : 'secondary'}>
 *         {row.original.status}
 *       </Badge>
 *     )
 *   },
 *   {
 *     id: 'actions',
 *     cell: ({ row }) => (
 *       <DropdownMenu
 *         trigger={<IconButton icon={<MoreVerticalIcon />} />}
 *         items={[
 *           { label: 'Edit', onClick: () => editRow(row.original) },
 *           { label: 'Delete', onClick: () => deleteRow(row.original.id) },
 *         ]}
 *       />
 *     )
 *   }
 * ];
 *
 * <DataTable columns={columns} rows={data} />
 *
 * @example
 * // User management table
 * const userColumns = [
 *   {
 *     accessorKey: 'avatar',
 *     header: '',
 *     cell: ({ row }) => <Avatar src={row.original.avatar} fallback={row.original.initials} />
 *   },
 *   { accessorKey: 'name', header: 'Name', enableSorting: true },
 *   { accessorKey: 'email', header: 'Email' },
 *   {
 *     accessorKey: 'role',
 *     header: 'Role',
 *     cell: ({ row }) => <Badge>{row.original.role}</Badge>
 *   },
 *   {
 *     id: 'actions',
 *     cell: ({ row }) => <UserActions user={row.original} />
 *   }
 * ];
 *
 * <DataTable
 *   columns={userColumns}
 *   rows={users}
 *   enableSelectableTable
 *   search={{ column: 'name', placeholder: 'Search users...' }}
 *   facetFilterColumns={[
 *     { column: 'role', title: 'Role', options: roleOptions }
 *   ]}
 *   pagination={{ enabled: true, pageSize: 20 }}
 *   showTableConfigure
 * />
 *
 * @example
 * // With custom toolbar content
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   toolbarLeftSideContent={
 *     <Button onClick={handleExport}>
 *       <DownloadIcon className="mr-2" />
 *       Export
 *     </Button>
 *   }
 *   toolbarRightSideContent={
 *     <Button onClick={handleAdd}>
 *       <PlusIcon className="mr-2" />
 *       Add New
 *     </Button>
 *   }
 * />
 *
 * @example
 * // Custom empty state
 * <DataTable
 *   columns={columns}
 *   rows={[]}
 *   emptyContent={
 *     <div className="flex flex-col items-center gap-2 py-8">
 *       <InboxIcon className="size-12 text-muted-foreground" />
 *       <p className="text-lg">No data found</p>
 *       <Button onClick={handleRefresh}>Refresh</Button>
 *     </div>
 *   }
 * />
 *
 * @example
 * // Controlled sorting
 * const [sorting, setSorting] = useState([{ id: 'name', desc: false }]);
 *
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   sorting={sorting}
 *   onSortingChange={setSorting}
 * />
 *
 * @example
 * // Access table instance
 * const [table, setTable] = useState(null);
 *
 * <div>
 *   <Button onClick={() => table?.toggleAllRowsSelected()}>
 *     Select All
 *   </Button>
 *   <Button onClick={() => table?.resetRowSelection()}>
 *     Clear Selection
 *   </Button>
 *
 *   <DataTable
 *     columns={columns}
 *     rows={data}
 *     setTable={setTable}
 *     enableSelectableTable
 *   />
 * </div>
 *
 * @example
 * // Order management table
 * const orderColumns = [
 *   { accessorKey: 'id', header: 'Order ID', enableSorting: true },
 *   {
 *     accessorKey: 'date',
 *     header: 'Date',
 *     cell: ({ row }) => format(row.original.date, 'MMM dd, yyyy')
 *   },
 *   { accessorKey: 'customer', header: 'Customer' },
 *   {
 *     accessorKey: 'status',
 *     header: 'Status',
 *     cell: ({ row }) => <Badge variant={getStatusVariant(row.original.status)}>{row.original.status}</Badge>
 *   },
 *   {
 *     accessorKey: 'total',
 *     header: 'Total',
 *     cell: ({ row }) => `$${row.original.total.toFixed(2)}`
 *   },
 * ];
 *
 * <DataTable
 *   columns={orderColumns}
 *   rows={orders}
 *   enableSelectableTable
 *   search={{ column: 'customer', placeholder: 'Search orders...' }}
 *   facetFilterColumns={[
 *     { column: 'status', title: 'Status', options: statusOptions }
 *   ]}
 *   paginationProps={{ pageSize: 10, pageSizeOptions: [10, 25, 50] }}
 *   showTableConfigure
 * />
 *
 * @example
 * // Custom row and cell styling
 * <DataTable
 *   columns={columns}
 *   rows={data}
 *   getRowClassName={(row) => cn(
 *     row.original.priority === 'high' && 'bg-danger/10',
 *     row.original.completed && 'opacity-50'
 *   )}
 *   getCellClassName={(cell) => cn(
 *     cell.column.id === 'amount' && 'font-mono font-bold'
 *   )}
 * />
 *
 * @tip DataTable is highly customizable - see TanStack Table docs for advanced features
 * @tip Use DataTableColumnHeader component for sortable column headers
 * @tip For simple tables without advanced features, use SimpleTable component instead
 */
export const DataTable = <TRow, TValue>({
  columns,
  rows,
  enableSelectableTable,
  search,
  facetFilterColumns,
  showTableConfigure,
  showPagination = false,
  paginationProps,
  className,
  tableContainerClassName,
  emptyContent = 'No results.',
  toolbarRightSideContent,
  toolbarLeftSideContent,
  toolbarContainerClassName,
  toolbarRightSideContainerClassName,
  sorting: sortingProp = [],
  onSortingChange,
  globalFilter: globalFilterProp,
  getCellClassName,
  getHeadClassName,
  getRowClassName,
  globalFilterFn,
  setTable,
  tableProps,
  tableHeadProps,
  tableHeadRowProps,
  tableHeadCellProps,
  tableBodyProps,
  tableRowProps,
  tableCellProps,
  dataTableToolbarRef,
  emptyContentTableRowProps,
  emptyContentTableCellProps,
  isLoading = false,
  loadingContent,
  loadingTableRowProps,
  loadingTableCellProps,
  loadingProps,
}: DataTableProps<TRow, TValue>) => {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState(globalFilterProp || '');
  const [sorting, setSorting] = useState<SortingState>(sortingProp);
  const tableColumns = enableSelectableTable ? [getSelectColumn<TRow>(), ...columns] : columns;

  // Optimized global filter function for large datasets
  const optimizedGlobalFilterFn = useCallback((row: Row<TRow>, _columnId: string, filterValue: unknown) => {
    // If it's a simple string filter, use default behavior
    if (typeof filterValue === 'string') {
      if (!filterValue.trim()) return true;

      // Create a searchable string from all row values (cached per row)
      const rowValues = Object.values(row.original as Record<string, unknown>)
        .filter((val) => val !== null && val !== undefined)
        .map((val) => String(val).toLowerCase())
        .join(' ');

      const searchTerm = filterValue.toLowerCase();
      return rowValues.includes(searchTerm);
    }

    // Handle our custom filter object with searchColumns (optimized)
    if (filterValue && typeof filterValue === 'object' && 'searchValue' in filterValue) {
      const { searchValue, searchColumns } = filterValue as {
        searchValue: string;
        searchColumns: string[];
      };

      if (!searchValue?.trim() || !searchColumns || !Array.isArray(searchColumns)) {
        return true;
      }

      // Pre-compute searchable string only for specified columns
      const searchString = searchColumns
        .map((columnKey) => {
          const cellValue = row.getValue(columnKey);
          return cellValue !== null && cellValue !== undefined ? String(cellValue).toLowerCase() : '';
        })
        .filter(Boolean)
        .join(' ');

      const searchTerm = searchValue.toLowerCase();
      return searchString.includes(searchTerm);
    }

    return true;
  }, []);

  const onSortingChangeLocal: OnChangeFn<SortingState> = useCallback(
    (newSorting) => {
      if (typeof newSorting === 'function') {
        const updatedSortState = newSorting(sorting);
        const removedDuplicateState = removeDuplicate(updatedSortState, 'id');
        setSorting(removedDuplicateState);
        onSortingChange?.(removedDuplicateState);
      } else {
        const removedDuplicateState = removeDuplicate(newSorting, 'id');
        setSorting(removedDuplicateState);
        onSortingChange?.(removedDuplicateState);
      }
    },
    [onSortingChange, sorting],
  );

  const table = useReactTable({
    data: rows,
    columns: tableColumns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    enableHiding: showTableConfigure ?? false,
    onRowSelectionChange: setRowSelection,
    onSortingChange: onSortingChangeLocal,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: globalFilterFn || optimizedGlobalFilterFn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: showPagination ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  useEffect(() => {
    setTable?.(table);
  }, [setTable, table]);

  useEffect(() => {
    if (!globalFilterProp) return;
    setGlobalFilter(globalFilterProp || '');
  }, [globalFilterProp]);

  useEffect(() => {
    if (!sortingProp?.length) return;
    setSorting((prevSorting) => {
      if (JSON.stringify(prevSorting) === JSON.stringify(sortingProp)) {
        return prevSorting;
      }
      return sortingProp;
    });
  }, [sortingProp]);

  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      <DataTableToolbar
        ref={dataTableToolbarRef}
        table={table}
        search={search}
        facetFilterColumns={facetFilterColumns}
        showTableConfigure={showTableConfigure}
        toolbarRightSideContent={toolbarRightSideContent}
        toolbarLeftSideContent={toolbarLeftSideContent}
        toolbarContainerClassName={toolbarContainerClassName}
        toolbarRightSideContainerClassName={toolbarRightSideContainerClassName}
      />
      <div className={cn('rounded-md border', tableContainerClassName)}>
        <Table data-qa="data-table" {...tableProps}>
          <TableHeader data-qa="data-table-header" {...tableHeadProps}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} data-qa="data-table-header-row" {...tableHeadRowProps}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      data-qa="data-table-header-cell"
                      {...tableHeadCellProps}
                      className={cn(tableHeadCellProps?.className, getHeadClassName?.(header))}
                      onClick={(e) => {
                        tableHeadCellProps?.onClick?.(header, e);
                      }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody data-qa="data-table-body" {...tableBodyProps}>
            {isLoading ? (
              <TableRow data-qa="data-table-loading" {...loadingTableRowProps}>
                <TableCell
                  colSpan={columns.length}
                  data-qa="data-table-loading-cell"
                  {...loadingTableCellProps}
                  className={cn('h-24 text-center', loadingTableCellProps?.className)}
                >
                  {loadingContent ?? <Loading content="Loading..." {...loadingProps} />}
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  data-qa="data-table-row"
                  {...tableRowProps}
                  className={cn(tableRowProps?.className, getRowClassName?.(row))}
                  onClick={(e) => {
                    tableRowProps?.onClick?.(row, e);
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      data-qa="data-table-cell"
                      {...tableCellProps}
                      className={cn(tableCellProps?.className, getCellClassName?.(cell))}
                      onClick={(e) => {
                        tableCellProps?.onClick?.(cell, e);
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow data-qa="data-table-no-results" {...emptyContentTableRowProps}>
                <TableCell
                  colSpan={columns.length}
                  data-qa="data-table-no-results-cell"
                  {...emptyContentTableCellProps}
                  className={cn('h-24 text-center', emptyContentTableCellProps?.className)}
                >
                  {emptyContent}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {!isLoading && showPagination && (
          <DataTablePagination
            table={table}
            enableSelectableTable={enableSelectableTable}
            paginationProps={{
              ...paginationProps,
              className: cn('border-t', paginationProps?.className),
            }}
          />
        )}
      </div>
    </div>
  );
};
