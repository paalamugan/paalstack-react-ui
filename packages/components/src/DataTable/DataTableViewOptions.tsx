import type { Table } from '@tanstack/react-table';

import { RxMixerHorizontal as MixerHorizontalIcon } from '@/icons/rx';

import { Button } from '../Button';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../DropdownMenu';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" size="sm" className="ml-auto hidden lg:flex" data-qa="data-table-view-options">
            <MixerHorizontalIcon className="mr-2 size-4" data-qa="data-table-view-options-icon" />
            Configure
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuLabel data-qa="data-table-view-options-label">Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                data-qa="data-table-view-options-checkbox-item"
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
