import { useCallback, useMemo } from 'react';

import type { Column } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import type { DataTableLabelOption } from './types';

import { RxCheck as CheckIcon, RxPlusCircled as PlusCircledIcon } from '@/icons/rx';
import { cn } from '@/shared/lib';

import { Badge } from '../Badge';
import { Button } from '../Button';
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandRoot,
  CommandSeparator,
} from '../Command';
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../Popover';
import { Separator } from '../Separator';

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: DataTableLabelOption[];
  emptyResultMessage?: ReactNode;
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
  emptyResultMessage = 'No results found.',
}: DataTableFacetedFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  const getFacetValue = useCallback(
    (value: string) => {
      if (!facets) return 0;
      const convertedValue = isNaN(Number(value)) ? value : Number(value);
      return facets.get(convertedValue) ?? 0;
    },
    [facets],
  );

  const filteredOptions = useMemo(() => {
    return options.filter((option) => getFacetValue(option.value) > 0);
  }, [getFacetValue, options]);

  return (
    <PopoverRoot>
      <PopoverTrigger
        render={
          <Button variant="outline" size="sm" className="border-dashed" data-qa="data-table-facet-filter-button">
            <PlusCircledIcon className="mr-2 size-4" />
            {title}
            {selectedValues?.size > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal lg:hidden"
                  data-qa="data-table-facet-filter-badge"
                >
                  {selectedValues.size}
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  {selectedValues.size > 2 ? (
                    <Badge
                      variant="secondary"
                      className="rounded-sm px-1 font-normal"
                      data-qa="data-table-facet-filter-badge"
                    >
                      {selectedValues.size} selected
                    </Badge>
                  ) : (
                    filteredOptions
                      .filter((option) => selectedValues.has(option.value))
                      .map((option) => (
                        <Badge
                          variant="secondary"
                          key={option.value}
                          className="rounded-sm px-1 font-normal"
                          data-qa="data-table-facet-filter-badge"
                        >
                          {option.label}
                        </Badge>
                      ))
                  )}
                </div>
              </>
            )}
          </Button>
        }
      />
      <PopoverContent className="w-[200px] p-0" align="start">
        <CommandRoot>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>{emptyResultMessage}</CommandEmpty>
            <CommandGroup data-qa="data-table-facet-filter-group">
              {filteredOptions.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(filterValues.length ? filterValues : undefined);
                    }}
                    data-qa="data-table-facet-filter-item"
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-gray-400',
                        isSelected
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible',
                      )}
                      data-qa="data-table-facet-filter-item-icon"
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>
                    {option.icon && (
                      <option.icon
                        className="mr-2 size-4 text-muted-foreground"
                        data-qa="data-table-facet-filter-item-icon"
                      />
                    )}
                    <span data-qa="data-table-facet-filter-item-label">{option.label}</span>
                    {!!getFacetValue(option.value) && (
                      <span
                        className="ml-auto flex size-4 items-center justify-center font-mono text-xs"
                        data-qa="data-table-facet-filter-item-count"
                      >
                        {getFacetValue(option.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
          {selectedValues.size > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup>
                <CommandItem
                  onSelect={() => column?.setFilterValue(undefined)}
                  className="justify-center text-center"
                  data-qa="data-table-facet-filter-clear"
                >
                  Clear filters
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandRoot>
      </PopoverContent>
    </PopoverRoot>
  );
}
