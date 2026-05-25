import type { FC, ReactNode } from 'react';

import { Flex } from '@/layouts/Flex';
import { Text } from '@/layouts/Text';

import { Select } from '../../Select';

export interface PaginationSizeOptionProps {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  isDisabled: boolean;
  options: number[];
  text?: ReactNode;
}
export const PaginationSizeOption: FC<PaginationSizeOptionProps> = ({
  pageSize,
  setPageSize,
  isDisabled,
  options,
  text,
}) => {
  return (
    <Flex className="items-center gap-2">
      <Select
        aria-label="Items per page"
        className="w-20"
        triggerClassName="h-full py-2.5"
        onValueChange={(value) => value && setPageSize(+value)}
        value={pageSize.toString()}
        disabled={isDisabled}
        options={options}
        data-qa="pagination-size-option"
      />

      <Text as="span" fontSize="sm" className="whitespace-nowrap" data-qa="pagination-size-option-text">
        {text || 'rows per page'}
      </Text>
    </Flex>
  );
};
