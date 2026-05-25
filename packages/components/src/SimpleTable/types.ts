import type { ReactNode } from 'react';
import type { PaginationProps } from '../Pagination';
import type { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../Table';

export type SimpleTableRow = Record<string, unknown>;

export type SimpleTableProps<TRow = SimpleTableRow> = React.ComponentPropsWithRef<typeof Table> & {
  /**
   * An array of objects that define the table headers.
   */
  columns: SimpleTableColumn<TRow>[];
  /**
   * An array of objects that define the table rows.
   */
  rows: TRow[];
  /**
   * The primary key of the table rows.
   */
  primaryKey: string;
  /**
   * The table caption.
   */
  caption?: React.ReactNode;
  /**
   * className is the class name of the table row. it is apply for all rows.
   */
  rowClassName?: string;
  /**
   * rowCellClassName is the class name of the table cell. it is apply for all cells.
   */
  rowCellClassName?: string;
  /**
   * columnClassName is the class name of the table header. it is apply for all headers.
   */
  columnClassName?: string;
  /**
   * className is the class name of the table.
   */
  className?: string;
  /**
   * When true, shows the pagination bar below the table.
   */
  showPagination?: boolean;
  /**
   * paginationProps is the props of the pagination.
   */
  paginationProps?: Omit<PaginationProps, 'total'> & { total?: number };
  /**
   * emptyTableContent is the content to display when the table is empty.
   * @default 'No data available'
   */
  emptyTableContent?: ReactNode;
  /**
   * emptyTableContentClassName is the class name of the empty table content.
   */
  emptyTableContentClassName?: string;
  /**
   * CustomTableRowComponent is the custom table row component.
   */
  CustomTableRowComponent?: React.ComponentType<{
    className?: string;
    row: TRow;
    index: number;
    primaryKey: string;
    children: React.ReactNode;
  }>;
  /**
   * theadClassName is the class name of the table head.
   */
  theadClassName?: string;
  /**
   * tbodyClassName is the class name of the table body.
   */
  tbodyClassName?: string;

  /**
   * tableHeaderProps is the props of the table header.
   */
  tableHeaderProps?: React.ComponentPropsWithRef<typeof TableHeader>;
  /**
   * tableHeaderRowProps is the props of the table header row.
   */
  tableHeaderRowProps?: React.ComponentPropsWithRef<typeof TableRow>;
  /**
   * tableHeadProps is the props of the table head.
   */
  tableHeadProps?: React.ComponentPropsWithRef<typeof TableHead>;
  /**
   * tableBodyProps is the props of the table body.
   */
  tableBodyProps?: React.ComponentPropsWithRef<typeof TableBody>;
  /**
   * emptyTableRowProps is the props of the table empty row.
   */
  emptyTableRowProps?: React.ComponentPropsWithRef<typeof TableRow>;

  /**
   * emptyTableCellProps is the props of the table empty cell.
   */
  emptyTableCellProps?: React.ComponentPropsWithRef<typeof TableCell>;
  /**
   * tableRowProps is the props of the table row.
   */
  tableRowProps?: React.ComponentPropsWithRef<typeof TableRow>;
  /**
   * tableCellProps is the props of the table cell.
   */
  tableCellProps?: React.ComponentPropsWithRef<typeof TableCell>;
  /**
   * tableCaptionProps is the props of the table caption.
   */
  tableCaptionProps?: React.ComponentPropsWithRef<typeof TableCaption>;
  /**
   * When true, renders a loading row instead of data rows or the empty state.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Content to display inside the loading cell.
   * @default <Loading content="Loading..." />
   */
  loadingContent?: ReactNode;
  /**
   * Additional props to apply to the loading row.
   */
  loadingTableRowProps?: React.ComponentPropsWithRef<typeof TableRow>;
  /**
   * Additional props to apply to the loading cell.
   */
  loadingTableCellProps?: React.ComponentPropsWithRef<typeof TableCell>;
};

export interface SimpleTableColumn<TRow = SimpleTableRow> {
  /**
   * accessorKey is the key of the row object.
   */
  accessorKey: string;
  /**
   * The header content.
   */
  title: ReactNode;
  /**
   * className is the class name of the table header.
   */
  className?: string;
  /**
   * rowCellClassName is the class name of the table cell.
   */
  rowCellClassName?: string;
  /**
   * rowEmptyValue is the value to display when the row value is empty.
   * @default '-'
   */
  rowEmptyValue?: ReactNode;
  /**
   *
   * @param props is the value of the row object and the column object.
   * @returns rowRender returns the row content.
   */
  render?: (props: { value: unknown; column: SimpleTableColumn<TRow>; row: TRow; index: number }) => ReactNode;
  /**
   * @param props is the column object and the index of the column.
   * @returns headerRender returns the header content.
   */
  renderHeader?: (props: { column: SimpleTableColumn<TRow>; index: number }) => ReactNode;
}
