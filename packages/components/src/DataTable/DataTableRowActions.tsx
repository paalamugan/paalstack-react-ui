import { Fragment } from 'react';

import type z from 'zod';
import type { DataTableActionItem, DataTableRow } from './types';

import { RxDotsHorizontal as DotsHorizontalIcon } from '@/icons/rx';

import { Button } from '../Button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../DropdownMenu';

interface DataTableRowActionsProps<TData> {
  row: DataTableRow<TData>;
  rowSchema: z.AnyZodObject;
  actionItems: DataTableActionItem[];
  /**
   * Accessible label for the trigger button. Defaults to "Open menu".
   * Pass a per-row label (e.g. `Actions for ${row.original.name}`) so
   * screen-reader users can distinguish rows - the generic default is
   * ambiguous in a table of many rows.
   */
  ariaLabel?: string;
}

export const DataTableRowActions = <TData,>({
  row,
  rowSchema,
  actionItems,
  ariaLabel = 'Open menu',
}: DataTableRowActionsProps<TData>) => {
  const rowData = rowSchema.parse(row.original);

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="flex size-8 p-0 data-[popup-open]:bg-muted"
            data-qa="data-table-row-actions-button"
            aria-label={ariaLabel}
          >
            <DotsHorizontalIcon className="size-4" data-qa="data-table-row-actions-icon" />
            <span className="sr-only">{ariaLabel}</span>
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="w-40" data-qa="data-table-row-actions-content">
        {actionItems.map((actionItem) => (
          <Fragment key={actionItem.label}>
            {!actionItem.subLabels?.length ? (
              <DropdownMenuItem
                onClick={(e) => actionItem.onClick?.(actionItem.value, e)}
                data-qa="data-table-row-action-item"
              >
                {actionItem.label}
                {actionItem.icon && (
                  <DropdownMenuShortcut data-qa="data-table-row-action-item-icon">
                    {<actionItem.icon />}
                  </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
            ) : (
              <Fragment>
                <DropdownMenuSeparator />
                <DropdownMenuSub data-qa="data-table-row-action-sub">
                  <DropdownMenuSubTrigger data-qa="data-table-row-action-sub-trigger">
                    {actionItem.label}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent data-qa="data-table-row-action-sub-content">
                    <DropdownMenuRadioGroup value={rowData.label} data-qa="data-table-row-action-sub-radio-group">
                      {actionItem.subLabels?.map((label) => (
                        <DropdownMenuRadioItem
                          key={label.value}
                          value={label.value}
                          data-qa="data-table-row-action-sub-radio-item"
                        >
                          {label.icon && (
                            <label.icon
                              className="mr-2 size-4 text-muted-foreground"
                              data-qa="data-table-row-action-sub-radio-item-icon"
                            />
                          )}
                          {label.label}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
              </Fragment>
            )}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};
