import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';

import type { ComponentWithAs } from '@/shared/types';
import type React from 'react';
import type { FC, ReactElement } from 'react';
import type { SimpleTableProps, SimpleTableRow } from './types';

import { Stack } from '@/layouts/Stack';
import { cn } from '@/shared/lib';
import { forwardRef, result } from '@/shared/utils';

import { Loading } from '../Loading';
import { Pagination } from '../Pagination';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../Table';

type DefaultTableRowProps = {
  children: React.ReactNode;
  className?: string;
  row: SimpleTableRow;
  index: number;
  primaryKey: string;
  tableRowProps?: React.ComponentPropsWithRef<typeof TableRow>;
};
const DefaultTableRow: FC<DefaultTableRowProps> = ({ children, className, row, index, primaryKey, tableRowProps }) => (
  <TableRow
    data-qa="table-body-row"
    data-state={row[primaryKey] ? row[primaryKey] : index}
    data-primary-key={primaryKey}
    {...tableRowProps}
    className={cn(tableRowProps?.className, className)}
  >
    {children}
  </TableRow>
);

const SimpleTableRef: ComponentWithAs<'table', SimpleTableProps<SimpleTableRow>> = forwardRef<
  SimpleTableProps<SimpleTableRow>,
  'table'
>(
  (
    {
      caption,
      primaryKey,
      columns,
      rows,
      rowClassName,
      rowCellClassName,
      columnClassName,
      paginationProps,
      showPagination,
      emptyTableContent = 'No data available.',
      emptyTableContentClassName,
      CustomTableRowComponent,
      theadClassName,
      tbodyClassName,
      tableHeaderProps,
      tableBodyProps,
      tableRowProps,
      tableCellProps,
      tableCaptionProps,
      tableHeadProps,
      tableHeaderRowProps,
      emptyTableRowProps,
      emptyTableCellProps,
      isLoading = false,
      loadingContent,
      loadingTableRowProps,
      loadingTableCellProps,
      ...props
    },
    ref,
  ) => {
    const [pageSize, setPageSize] = useState<number>(paginationProps?.pageSize ?? 10);
    const [currentPage, setCurrentPage] = useState<number>(paginationProps?.currentPage ?? 1);

    const RenderTableRow = CustomTableRowComponent || DefaultTableRow;

    /**
     * Update current page whenever value changes
     */
    useEffect(() => {
      if (paginationProps?.currentPage) {
        setCurrentPage(paginationProps.currentPage);
      }
    }, [paginationProps?.currentPage]);

    /**
     * Update page size whenever value changes
     */
    useEffect(() => {
      if (paginationProps?.pageSize) {
        setPageSize(paginationProps.pageSize);
      }
    }, [paginationProps?.pageSize]);

    const handlePageChange = useCallback(
      (page: number) => {
        setCurrentPage(page);
        paginationProps?.onPageChange?.(page);
      },
      [paginationProps],
    );

    const handlePageSizeChange = useCallback(
      (size: number) => {
        setPageSize(size);
        paginationProps?.onPageSizeChange?.(size);
      },
      [paginationProps],
    );

    const startIndex = (currentPage - 1) * pageSize;

    const endIndex = Math.min(currentPage * pageSize, rows.length);

    const paginatedRows = useMemo(() => {
      if (!showPagination) return rows;
      if (paginationProps?.total && paginationProps.total !== rows.length) return rows;
      return rows.slice(startIndex, endIndex);
    }, [showPagination, rows, paginationProps?.total, startIndex, endIndex]);

    const localPaginationProps = {
      ...paginationProps,
      currentPage,
      pageSize,
      total: paginationProps?.total || rows.length,
      onPageChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange,
    };

    return (
      <Stack className="gap-2">
        <Table ref={ref} data-qa="table" {...props}>
          {caption && (
            <TableCaption data-qa="table-caption" {...tableCaptionProps}>
              {caption}
            </TableCaption>
          )}
          <TableHeader
            data-qa="table-header"
            {...tableHeaderProps}
            className={cn(tableHeaderProps?.className, theadClassName)}
          >
            <TableRow data-qa="table-header-row" {...tableHeaderRowProps}>
              {columns.map((column, index) => (
                <TableHead
                  key={column.accessorKey}
                  id={column.accessorKey}
                  data-qa="table-header-cell"
                  data-accessor-key={column.accessorKey}
                  {...tableHeadProps}
                  className={cn(tableHeadProps?.className, columnClassName, column.className)}
                >
                  {column.renderHeader ? column.renderHeader({ column, index }) : column.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className={tbodyClassName} data-qa="table-body">
            {isLoading ? (
              <TableRow data-qa="table-loading-row" {...loadingTableRowProps}>
                <TableCell
                  colSpan={columns.length}
                  data-qa="table-loading-cell"
                  {...loadingTableCellProps}
                  className={cn('h-24 text-center', loadingTableCellProps?.className)}
                >
                  {loadingContent ?? <Loading content="Loading..." />}
                </TableCell>
              </TableRow>
            ) : !paginatedRows.length ? (
              <TableRow data-qa="table-empty-row" {...emptyTableRowProps}>
                <TableCell
                  colSpan={columns.length}
                  data-qa="table-empty-cell"
                  {...emptyTableCellProps}
                  className={cn(
                    'py-6 text-center text-muted-foreground',
                    emptyTableCellProps?.className,
                    emptyTableContentClassName,
                  )}
                >
                  {emptyTableContent}
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, index) => (
                <Fragment key={`${row[primaryKey] ? row[primaryKey] : index}`}>
                  <RenderTableRow
                    row={row}
                    index={index}
                    primaryKey={primaryKey}
                    tableRowProps={tableRowProps}
                    className={rowClassName}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column.accessorKey}
                        data-qa="table-body-cell"
                        data-accessor-key={column.accessorKey}
                        {...tableCellProps}
                        className={cn(tableCellProps?.className, rowCellClassName, column.rowCellClassName)}
                      >
                        <>
                          {column.render
                            ? column.render({ value: result(row, column.accessorKey), row, column, index })
                            : (result(row, column.accessorKey) ?? column.rowEmptyValue ?? '-')}
                        </>
                      </TableCell>
                    ))}
                  </RenderTableRow>
                </Fragment>
              ))
            )}
          </TableBody>
        </Table>
        {showPagination && !!paginatedRows.length && <Pagination {...localPaginationProps} />}
      </Stack>
    );
  },
);

SimpleTableRef.displayName = 'SimpleTable';

/**
 * SimpleTable Component
 *
 * A simplified table component with built-in pagination support.
 * Perfect for quickly displaying tabular data without complex data table features.
 *
 * @example
 * // Basic usage
 * import { SimpleTable } from '@paalstack/react-ui';
 *
 * const columns = [
 *   { accessorKey: 'name', title: 'Name' },
 *   { accessorKey: 'email', title: 'Email' },
 *   { accessorKey: 'role', title: 'Role' },
 * ];
 *
 * const rows = [
 *   { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
 *   { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
 * ];
 *
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={rows}
 * />
 *
 * @example
 * // With pagination enabled
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={rows}
 *   showPagination
 *   paginationProps={{
 *     pageSize: 10,
 *     currentPage: 1,
 *     onPageChange: (page) => console.log('Page:', page),
 *   }}
 * />
 *
 * @example
 * // With custom cell rendering
 * const columns = [
 *   { accessorKey: 'name', title: 'Name' },
 *   { accessorKey: 'status', title: 'Status',
 *     render: ({ value }) => (
 *       <Badge variant={value === 'active' ? 'success' : 'secondary'}>
 *         {value}
 *       </Badge>
 *     )
 *   },
 *   { accessorKey: 'actions', title: 'Actions',
 *     render: ({ row }) => (
 *       <Button size="sm" onClick={() => handleEdit(row.id)}>
 *         Edit
 *       </Button>
 *     )
 *   },
 * ];
 *
 * <SimpleTable primaryKey="id" columns={columns} rows={rows} />
 *
 * @example
 * // With custom header rendering
 * const columns = [
 *   {
 *     accessorKey: 'name',
 *     title: 'Name',
 *     renderHeader: ({ column }) => (
 *       <div className="flex items-center gap-2">
 *         <UserIcon className="size-4" />
 *         {column.title}
 *       </div>
 *     )
 *   },
 *   { accessorKey: 'email', title: 'Email' },
 * ];
 *
 * <SimpleTable primaryKey="id" columns={columns} rows={rows} />
 *
 * @example
 * // Empty state
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={[]}
 *   emptyTableContent={
 *     <div className="flex flex-col items-center gap-2 py-8">
 *       <InboxIcon className="size-12 text-muted-foreground" />
 *       <p className="text-lg font-medium">No data found</p>
 *       <Button variant="outline" onClick={handleRefresh}>
 *         Refresh
 *       </Button>
 *     </div>
 *   }
 * />
 *
 * @example
 * // With caption
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={rows}
 *   caption="User list - Last updated: Today"
 * />
 *
 * @example
 * // Product inventory table
 * const productColumns = [
 *   { accessorKey: 'sku', title: 'SKU' },
 *   { accessorKey: 'name', title: 'Product Name' },
 *   {
 *     accessorKey: 'stock',
 *     title: 'Stock',
 *     render: ({ value }) => (
 *       <Badge variant={value > 10 ? 'success' : value > 0 ? 'warning' : 'danger'}>
 *         {value} units
 *       </Badge>
 *     )
 *   },
 *   {
 *     accessorKey: 'price',
 *     title: 'Price',
 *     render: ({ value }) => `$${value.toFixed(2)}`
 *   },
 * ];
 *
 * <SimpleTable
 *   primaryKey="sku"
 *   columns={productColumns}
 *   rows={products}
 *   showPagination
 * />
 *
 * @example
 * // Order history table
 * const orderColumns = [
 *   { accessorKey: 'id', title: 'Order ID',
 *     render: ({ value }) => <span className="font-mono">#{value}</span>
 *   },
 *   { accessorKey: 'date', title: 'Date',
 *     render: ({ value }) => format(new Date(value), 'MMM dd, yyyy')
 *   },
 *   { accessorKey: 'items', title: 'Items',
 *     render: ({ value }) => `${value.length} items`
 *   },
 *   { accessorKey: 'total', title: 'Total',
 *     render: ({ value }) => <span className="font-semibold">${value}</span>,
 *     className: 'text-right'
 *   },
 * ];
 *
 * <SimpleTable
 *   primaryKey="id"
 *   columns={orderColumns}
 *   rows={orders}
 *   showPagination
 *   paginationProps={{ pageSize: 20 }}
 * />
 *
 * @example
 * // Custom row styling
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={rows}
 *   rowClassName={(row) => cn(
 *     row.status === 'urgent' && 'bg-danger/10',
 *     row.status === 'completed' && 'opacity-50'
 *   )}
 * />
 *
 * @example
 * // Nested data access
 * const columns = [
 *   { accessorKey: 'user.name', title: 'Name' },
 *   { accessorKey: 'user.email', title: 'Email' },
 *   { accessorKey: 'profile.department', title: 'Department' },
 * ];
 *
 * const rows = [
 *   { id: 1, user: { name: 'John', email: 'john@example.com' }, profile: { department: 'IT' } },
 * ];
 *
 * <SimpleTable primaryKey="id" columns={columns} rows={rows} />
 *
 * @example
 * // With custom column and cell className
 * const columns = [
 *   { accessorKey: 'name', title: 'Name', className: 'font-bold' },
 *   {
 *     accessorKey: 'price',
 *     title: 'Price',
 *     className: 'text-right',
 *     rowCellClassName: 'font-mono'
 *   },
 * ];
 *
 * <SimpleTable primaryKey="id" columns={columns} rows={rows} />
 *
 * @example
 * // Loading state — shows the default spinner while data is being fetched
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={[]}
 *   isLoading={isLoading}
 * />
 *
 * @example
 * // Loading state with custom content
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={[]}
 *   isLoading={isLoading}
 *   loadingContent={<Loading spinnerProps={{ size: 'lg' }} content="Fetching invoices…" />}
 * />
 *
 * @example
 * // Server-side pagination
 * const [page, setPage] = useState(1);
 * const [pageSize, setPageSize] = useState(10);
 * const { data, total } = useFetchData(page, pageSize);
 *
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={data}
 *   showPagination
 *   paginationProps={{
 *     currentPage: page,
 *     pageSize: pageSize,
 *     total: total,
 *     onPageChange: setPage,
 *     onPageSizeChange: setPageSize,
 *   }}
 * />
 *
 * @example
 * // With custom table header/body styling
 * <SimpleTable
 *   primaryKey="id"
 *   columns={columns}
 *   rows={rows}
 *   theadClassName="bg-muted/50"
 *   tbodyClassName="divide-y"
 * />
 *
 * @example
 * // Employee directory
 * const employeeColumns = [
 *   { accessorKey: 'avatar', title: '',
 *     render: ({ row }) => <Avatar src={row.avatar} fallback={row.initials} />
 *   },
 *   { accessorKey: 'name', title: 'Name' },
 *   { accessorKey: 'email', title: 'Email' },
 *   { accessorKey: 'department', title: 'Department' },
 *   { accessorKey: 'phone', title: 'Phone' },
 * ];
 *
 * <SimpleTable
 *   primaryKey="employeeId"
 *   columns={employeeColumns}
 *   rows={employees}
 *   showPagination
 *   caption="Company Directory - 125 employees"
 * />
 */
export const SimpleTable = SimpleTableRef as <TRow>(
  props: SimpleTableProps<TRow> & React.RefAttributes<React.ElementRef<'table'>>,
) => ReactElement | null;
