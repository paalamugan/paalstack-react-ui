import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_PAGE_SIZE_OPTIONS } from './constants';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    total: 100,
    siblings: 1,
    boundaries: 1,
    initialPage: 1,
    pageSize: 10,
    showTotalResults: true,
    showOnlyNextAndPrevious: false,
    showPageSizeOptions: true,
  },
};

export const WithCustomInitialPage: Story = {
  args: {
    ...Default.args,
    initialPage: 5,
  },
};

export const WithoutTotalResults: Story = {
  args: {
    ...Default.args,
    showTotalResults: false,
  },
};

export const OnlyNextAndPrevious: Story = {
  args: {
    ...Default.args,
    showOnlyNextAndPrevious: true,
    showPageSizeOptions: false,
  },
};

export const WithoutPageSizeOptions: Story = {
  args: {
    ...Default.args,
    showPageSizeOptions: false,
  },
};

export const WithCustomPageSizeOptions: Story = {
  args: {
    ...Default.args,
    pageSizeOptions: [10, 40, 50, 100],
  },
};

export const WithCustomPageSize: Story = {
  args: {
    ...Default.args,
    pageSize: DEFAULT_PAGE_SIZE_OPTIONS[3],
  },
};

export const WithCustomTotal: Story = {
  args: {
    ...Default.args,
    total: 1000,
  },
};

export const WithCustomPage: Story = {
  args: {
    ...Default.args,
    currentPage: 5,
  },
};

export const WithCustomSiblings: Story = {
  args: {
    ...Default.args,
    siblings: 2,
  },
};

export const WithCustomBoundaries: Story = {
  args: {
    ...Default.args,
    boundaries: 2,
  },
};

export const WithCustomPageSizeText: Story = {
  args: {
    ...Default.args,
    pageSizeText: 'results per page',
  },
};

/**
 * The `selectedRowsCount` and `showSelectedRowsCount` props render a
 * "X of Y row(s) selected." indicator on the left instead of the total results.
 * Useful when embedding `Pagination` next to a selectable table.
 */
export const WithSelectedRowsCount: Story = {
  args: {
    ...Default.args,
    showSelectedRowsCount: true,
    selectedRowsCount: 3,
    showTotalResults: false,
  },
};

/**
 * When `showOnlyIfTotalGreaterThanPageSize` is `true` (the default),
 * the component renders nothing if `total <= pageSize`.
 * Toggle this prop to control the behaviour.
 */
export const ConditionalDisplay: Story = {
  args: {
    ...Default.args,
    total: 8,
    pageSize: 10,
    showOnlyIfTotalGreaterThanPageSize: true,
  },
};

/**
 * Fully controlled pagination — page number and page size are
 * managed externally via React state, mimicking real application usage.
 */
export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageSize, setPageSize] = useState(10);
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Current page: <strong>{currentPage}</strong> — Page size: <strong>{pageSize}</strong>
        </p>
        <Pagination
          total={250}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
          showPageSizeOptions
          showTotalResults
        />
      </div>
    );
  },
};

/**
 * Controlled pagination with next/previous buttons only.
 */
export const ControlledNextPrevOnly: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const total = 100;
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Current page: <strong>{currentPage}</strong> of <strong>{Math.ceil(total / pageSize)}</strong>
        </p>
        <Pagination
          total={total}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          showOnlyNextAndPrevious
          showTotalResults
        />
      </div>
    );
  },
};
