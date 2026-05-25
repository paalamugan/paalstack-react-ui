/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import type { DataTableInstance } from '.';
import type { Task } from './data';

import { DataTableViewOptions } from '.';
import { Button } from '../Button';
import { Loading } from '../Loading';
import { Spinner } from '../Spinner';
import { columns } from './columns';
import { priorities, statuses, tasks } from './data';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable<Task, unknown>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DataTable<Task, unknown>>;

export const Basic: Story = {
  args: {
    columns: columns,
    rows: tasks,
  },
};

export const WithPagination: Story = {
  args: {
    ...Basic.args,
    showPagination: true,
    paginationProps: {
      currentPage: 2,
      pageSize: 10,
      showPageSizeOptions: true,
    },
    tableRowProps: {
      className: 'cursor-pointer hover:bg-gray-50',
      onClick: (row) => {
        alert(`You clicked on row with id: ${row.original.id}`);
      },
    },
  },
};

export const PaginationWithTotalResults: Story = {
  args: {
    ...WithPagination.args,
    paginationProps: {
      pageSize: 10,
      showPageSizeOptions: true,
      showTotalResults: true,
    },
  },
};

export const PaginationNextPrevOnly: Story = {
  args: {
    ...WithPagination.args,
    paginationProps: {
      pageSize: 10,
      showOnlyNextAndPrevious: true,
      showPageSizeOptions: false,
    },
  },
};

export const PaginationCustomSizes: Story = {
  args: {
    ...WithPagination.args,
    paginationProps: {
      pageSize: 5,
      pageSizeOptions: [5, 15, 25, 50],
      showPageSizeOptions: true,
      showTotalResults: true,
      pageSizeText: 'rows per page',
    },
  },
};

export const Selectable: Story = {
  args: {
    ...WithPagination.args,
    enableSelectableTable: true,
  },
};

export const SelectableWithCustomPagination: Story = {
  args: {
    ...Selectable.args,
    paginationProps: {
      pageSize: 10,
      showPageSizeOptions: true,
      showOnlyNextAndPrevious: false,
    },
  },
};

export const Toolbar: Story = {
  args: {
    ...Basic.args,
    showTableConfigure: true,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const FilterSearch: Story = {
  args: {
    ...WithPagination.args,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
  },
};

export const ToolbarWithPagination: Story = {
  args: {
    ...WithPagination.args,
    showTableConfigure: true,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const ToolbarWithRightSideContent: Story = {
  args: {
    ...WithPagination.args,
    showTableConfigure: true,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
    toolbarRightSideContent: (
      <Button color="primary" size="md">
        Create Task
      </Button>
    ),
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const FacetFilter: Story = {
  args: {
    ...Basic.args,
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const SearchWithFacetFilter: Story = {
  args: {
    ...WithPagination.args,
    search: {
      accessorKey: ['id', 'title'],
      placeholder: 'Search by task ID or title...',
    },
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const MultipleColumnSearch: Story = {
  args: {
    ...Basic.args,
    showTableConfigure: true,
    search: {
      accessorKey: ['title', 'status', 'priority'],
      placeholder: 'Search across title, status, and priority...',
    },
  },
};

export const WithCustomTable: Story = {
  args: {
    ...Basic.args,
    search: {
      accessorKey: ['title', 'status', 'priority'],
      placeholder: 'Search across title, status, and priority...',
    },
  },
  render: (args) => {
    const [table, setTable] = useState<DataTableInstance<Task> | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    return (
      <DataTable
        {...args}
        setTable={setTable}
        toolbarRightSideContent={table && <DataTableViewOptions table={table} />}
        showPagination={true}
        paginationProps={{
          currentPage,
          pageSize: pageSize,
          onPageSizeChange: setPageSize,
          showPageSizeOptions: true,
          showTotalResults: true,
          onPageChange: setCurrentPage,
        }}
      />
    );
  },
};

/**
 * Shows the default loading spinner (`<Loading />`) while `isLoading` is true.
 * Pass `isLoading` to the table to display the built-in spinner instead of rows or the empty state.
 */
export const IsLoading: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
  },
};

/**
 * Replaces the default spinner with a custom `loadingContent` node.
 * Useful when you need a branded or differently-styled loading indicator.
 */
export const IsLoadingWithCustomContent: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
    loadingContent: (
      <div className="flex flex-col items-center gap-3 py-4">
        <Spinner size="lg" />
        <span className="text-sm text-muted-foreground">Fetching tasks…</span>
      </div>
    ),
  },
};

/**
 * Interactive story: click "Reload" to simulate an async data fetch.
 * The table shows the loading state for 1.5 s before populating with rows,
 * demonstrating the `isLoading` prop in a realistic workflow.
 */
export const IsLoadingSimulated: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const [rows, setRows] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const load = useCallback(() => {
      setRows([]);
      setIsLoading(true);
      setTimeout(() => {
        setRows(tasks);
        setIsLoading(false);
      }, 1500);
    }, []);

    useEffect(() => {
      load();
    }, [load]);

    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button color="primary" size="sm" onClick={load} disabled={isLoading}>
            {isLoading ? <Loading spinnerProps={{ size: 'xs' }} content="Loading…" /> : 'Reload'}
          </Button>
        </div>
        <DataTable {...args} rows={rows} isLoading={isLoading} />
      </div>
    );
  },
};

/** Mock API: returns a page of tasks and total count with a short delay. */
async function fetchTasksPage(page: number, pageSize: number): Promise<{ rows: Task[]; total: number }> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    rows: tasks.slice(start, end),
    total: tasks.length,
  };
}

/**
 * DataTable with server-side / API pagination. Changing page or page size triggers a
 * dummy API call (simulated with a 400ms delay). Only the current page of rows is
 * passed to the table; total is provided so the pagination bar shows correct page count.
 */
export const WithApiPagination: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const [rows, setRows] = useState<Task[]>([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);

    const loadPage = useCallback(async (page: number, size: number) => {
      setLoading(true);
      try {
        const { rows: nextRows, total: nextTotal } = await fetchTasksPage(page, size);
        setRows(nextRows);
        setTotal(nextTotal);
      } finally {
        setLoading(false);
      }
    }, []);

    useEffect(() => {
      loadPage(currentPage, pageSize);
    }, [currentPage, pageSize, loadPage]);

    const handlePageChange = useCallback((page: number) => {
      setCurrentPage(page);
    }, []);

    const handlePageSizeChange = useCallback((size: number) => {
      setPageSize(size);
      setCurrentPage(1);
    }, []);
    return (
      <div className="relative">
        <DataTable
          {...args}
          rows={rows}
          showPagination
          isLoading={loading}
          paginationProps={{
            total,
            currentPage,
            pageSize,
            onPageChange: handlePageChange,
            onPageSizeChange: handlePageSizeChange,
            showPageSizeOptions: true,
            showTotalResults: true,
          }}
        />
      </div>
    );
  },
};
