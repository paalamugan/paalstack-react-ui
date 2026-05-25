import type { ColumnDef, Row, Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

export type DataTableInstance<TRow> = Table<TRow>;

export interface DataTableLabelOption {
  label: ReactNode;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface DataTableFacetFilterColumn {
  accessorKey: string;
  title: string;
  options: DataTableLabelOption[];
}

export interface DataTableActionItem extends DataTableLabelOption {
  label: string;
  value: string;
  onClick?: (value: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  subLabels?: DataTableLabelOption[];
}

export interface DataTablePaginationOption {
  enabled: boolean;
  currentPage?: number;
  pageSize?: number;
  sizes?: number[];
}

export interface DataTableSearchFilterColumn {
  accessorKey: string | string[];
  placeholder?: string;
  className?: string;
  searchValue?: string;
  onSearchValueChange?: (searchValue: string) => void;
}

export type DataTableColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue>;
export type DataTableRow<TData> = Row<TData>;
