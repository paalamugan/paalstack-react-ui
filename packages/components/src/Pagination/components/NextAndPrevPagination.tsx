import type { FC } from 'react';

import { RxChevronLeft as ChevronLeftIcon, RxChevronRight as ChevronRightIcon } from '@/icons/rx';
import { Flex } from '@/layouts/Flex';
import { HStack } from '@/layouts/HStack';

import { Button } from '../../Button';

export interface NextAndPrevPaginationProps {
  onNext: () => void;
  onPrev: () => void;
  isDisabledNext: boolean;
  isDisabledPrev: boolean;
}

export const NextAndPrevPagination: FC<NextAndPrevPaginationProps> = ({
  onNext,
  onPrev,
  isDisabledNext,
  isDisabledPrev,
}) => {
  return (
    <Flex className="gap-4">
      <Button
        data-qa="pagination-prev-button"
        variant="outline"
        aria-label="Previous"
        disabled={isDisabledPrev}
        onClick={onPrev}
      >
        <HStack>
          <ChevronLeftIcon className="size-5" /> Previous
        </HStack>
      </Button>
      <Button
        data-qa="pagination-next-button"
        variant="outline"
        aria-label="Next"
        disabled={isDisabledNext}
        onClick={onNext}
      >
        <HStack>
          Next <ChevronRightIcon className="size-5" />
        </HStack>
      </Button>
    </Flex>
  );
};
