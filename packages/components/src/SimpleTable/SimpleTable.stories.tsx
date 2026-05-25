/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Loading } from '../Loading';
import { Spinner } from '../Spinner';
import { SimpleTable } from './SimpleTable';

type InvoiceRow = {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
};

const meta: Meta<typeof SimpleTable> = {
  title: 'Components/SimpleTable',
  component: SimpleTable,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SimpleTable>;

export const Basic: Story = {
  args: {
    primaryKey: 'invoice',
    columns: [
      {
        title: 'Invoice',
        accessorKey: 'invoice',
        className: 'w-[100px]',
        rowCellClassName: 'font-medium',
      },
      {
        title: 'Status',
        accessorKey: 'paymentStatus',
      },
      {
        title: 'Method',
        accessorKey: 'paymentMethod',
      },
      {
        title: 'Amount',
        accessorKey: 'totalAmount',
        className: 'text-right',
        rowCellClassName: 'text-right',
      },
    ],
    rows: [
      {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
      },
      {
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
      },
      {
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
      },
      {
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
      },
      {
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
      },
      {
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
      },
      {
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
      },
    ],
    caption: '',
  },
};

export const WithCaption: Story = {
  args: {
    ...Basic.args,
    caption: 'A list of your recent invoices.',
  },
};

export const WithPagination: Story = {
  args: {
    ...Basic.args,
    showPagination: true,
    paginationProps: {
      currentPage: 1,
      pageSize: 3,
      onPageChange: () => {},
      onPageSizeChange: () => {},
      showOnlyIfTotalGreaterThanPageSize: false,
    },
  },
};

export const WithNoData: Story = {
  args: {
    ...Basic.args,
    rows: [],
  },
};

const allInvoices: InvoiceRow[] = [
  { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$250.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV002', paymentStatus: 'Pending', totalAmount: '$150.00', paymentMethod: 'PayPal' },
  { invoice: 'INV003', paymentStatus: 'Unpaid', totalAmount: '$350.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV004', paymentStatus: 'Paid', totalAmount: '$450.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV005', paymentStatus: 'Paid', totalAmount: '$550.00', paymentMethod: 'PayPal' },
  { invoice: 'INV006', paymentStatus: 'Pending', totalAmount: '$200.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV007', paymentStatus: 'Unpaid', totalAmount: '$300.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV008', paymentStatus: 'Paid', totalAmount: '$175.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV009', paymentStatus: 'Pending', totalAmount: '$420.00', paymentMethod: 'PayPal' },
  { invoice: 'INV010', paymentStatus: 'Paid', totalAmount: '$380.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV011', paymentStatus: 'Unpaid', totalAmount: '$190.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV012', paymentStatus: 'Paid', totalAmount: '$510.00', paymentMethod: 'PayPal' },
  { invoice: 'INV013', paymentStatus: 'Pending', totalAmount: '$275.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV014', paymentStatus: 'Paid', totalAmount: '$620.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV015', paymentStatus: 'Unpaid', totalAmount: '$330.00', paymentMethod: 'PayPal' },
];

/** Mock API: returns a page of invoices and total count with a short delay. */
async function fetchInvoicesPage(page: number, pageSize: number): Promise<{ rows: InvoiceRow[]; total: number }> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    rows: allInvoices.slice(start, end),
    total: allInvoices.length,
  };
}

/**
 * SimpleTable with server-side / API pagination. Changing page or page size triggers a
 * dummy API call (simulated with a 400ms delay). The built-in `isLoading` prop is used
 * to show the spinner while data is in flight.
 */
export const WithApiPagination: Story = {
  args: {
    ...Basic.args,
    columns: Basic.args?.columns ?? [],
  },
  render: (args) => {
    const [rows, setRows] = useState<InvoiceRow[]>([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

    const loadPage = useCallback(async (page: number, size: number) => {
      setIsLoading(true);
      try {
        const { rows: nextRows, total: nextTotal } = await fetchInvoicesPage(page, size);
        setRows(nextRows);
        setTotal(nextTotal);
      } finally {
        setIsLoading(false);
      }
    }, []);

    useEffect(() => {
      loadPage(currentPage, pageSize);
    }, [currentPage, pageSize, loadPage]);

    return (
      <SimpleTable
        {...args}
        rows={rows}
        isLoading={isLoading}
        showPagination
        paginationProps={{
          total,
          currentPage,
          pageSize,
          onPageChange: (page) => setCurrentPage(page),
          onPageSizeChange: (size) => {
            setPageSize(size);
            setCurrentPage(1);
          },
          showPageSizeOptions: true,
          showTotalResults: true,
          showOnlyIfTotalGreaterThanPageSize: false,
        }}
      />
    );
  },
};

/**
 * Shows the default `<Loading />` spinner while `isLoading` is true.
 */
export const IsLoading: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
  },
};

/**
 * Replaces the default spinner with a custom `loadingContent` node.
 */
export const IsLoadingWithCustomContent: Story = {
  args: {
    ...Basic.args,
    isLoading: true,
    loadingContent: (
      <div className="flex flex-col items-center gap-3 py-4">
        <Spinner size="lg" />
        <span className="text-sm text-muted-foreground">Fetching invoices…</span>
      </div>
    ),
  },
};

/**
 * Interactive story: click "Reload" to simulate a 1.5 s async fetch,
 * demonstrating the `isLoading` prop in a realistic workflow.
 */
export const IsLoadingSimulated: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const [rows, setRows] = useState<InvoiceRow[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const load = useCallback(() => {
      setRows([]);
      setIsLoading(true);
      setTimeout(() => {
        setRows(allInvoices.slice(0, 7));
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
        <SimpleTable {...args} rows={rows} isLoading={isLoading} />
      </div>
    );
  },
};
