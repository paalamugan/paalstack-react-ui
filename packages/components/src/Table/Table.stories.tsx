import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Table>;

const invoices = [
  { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$250.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV002', paymentStatus: 'Pending', totalAmount: '$150.00', paymentMethod: 'PayPal' },
  { invoice: 'INV003', paymentStatus: 'Unpaid', totalAmount: '$350.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV004', paymentStatus: 'Paid', totalAmount: '$450.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV005', paymentStatus: 'Paid', totalAmount: '$550.00', paymentMethod: 'PayPal' },
  { invoice: 'INV006', paymentStatus: 'Pending', totalAmount: '$200.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV007', paymentStatus: 'Unpaid', totalAmount: '$300.00', paymentMethod: 'Credit Card' },
];

export const Basic: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>Your shopping cart summary.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="text-center">Qty</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Wireless Mouse</TableCell>
          <TableCell className="text-center">2</TableCell>
          <TableCell className="text-right">$49.98</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Mechanical Keyboard</TableCell>
          <TableCell className="text-center">1</TableCell>
          <TableCell className="text-right">$129.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">USB-C Hub</TableCell>
          <TableCell className="text-center">1</TableCell>
          <TableCell className="text-right">$39.99</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right font-bold">$218.97</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

const statusVariant: Record<string, 'success' | 'warning' | 'danger' | 'muted'> = {
  Active: 'success',
  Away: 'warning',
  Offline: 'danger',
  'In Review': 'muted',
};

const teamMembers = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Williams', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Away' },
  { name: 'Dan Miller', email: 'dan@example.com', role: 'Editor', status: 'Offline' },
  { name: 'Eva Martinez', email: 'eva@example.com', role: 'Admin', status: 'Active' },
];

export const WithBadges: Story = {
  name: 'With Status Badges',
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamMembers.map((member) => (
          <TableRow key={member.email}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[member.status]}>{member.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Capital</TableHead>
          <TableHead className="text-right">Population</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { country: 'United States', capital: 'Washington D.C.', population: '331M' },
          { country: 'United Kingdom', capital: 'London', population: '67M' },
          { country: 'Germany', capital: 'Berlin', population: '83M' },
          { country: 'France', capital: 'Paris', population: '67M' },
          { country: 'Japan', capital: 'Tokyo', population: '126M' },
        ].map((row, i) => (
          <TableRow key={row.country} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
            <TableCell>{i + 1}</TableCell>
            <TableCell className="font-medium">{row.country}</TableCell>
            <TableCell>{row.capital}</TableCell>
            <TableCell className="text-right">{row.population}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const ComparisonTable: Story = {
  name: 'Feature Comparison',
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Feature</TableHead>
          <TableHead className="text-center">Free</TableHead>
          <TableHead className="text-center">Pro</TableHead>
          <TableHead className="text-center">Enterprise</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { feature: 'Users', free: '1', pro: '10', enterprise: 'Unlimited' },
          { feature: 'Storage', free: '5 GB', pro: '100 GB', enterprise: '1 TB' },
          { feature: 'API Requests', free: '1K/mo', pro: '100K/mo', enterprise: 'Unlimited' },
          { feature: 'Support', free: 'Email', pro: 'Priority', enterprise: '24/7 Phone' },
          { feature: 'Custom Domain', free: '—', pro: '✓', enterprise: '✓' },
          { feature: 'SSO', free: '—', pro: '—', enterprise: '✓' },
        ].map((row) => (
          <TableRow key={row.feature}>
            <TableCell className="font-medium">{row.feature}</TableCell>
            <TableCell className="text-center">{row.free}</TableCell>
            <TableCell className="text-center">{row.pro}</TableCell>
            <TableCell className="text-center">{row.enterprise}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
            No results found.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const OrderHistory: Story = {
  render: () => {
    const orders = [
      { id: '3210', date: 'Jan 15, 2025', items: 3, status: 'Delivered', total: '$124.99' },
      { id: '3209', date: 'Jan 12, 2025', items: 1, status: 'Shipped', total: '$49.00' },
      { id: '3208', date: 'Jan 10, 2025', items: 5, status: 'Delivered', total: '$312.50' },
      { id: '3207', date: 'Jan 8, 2025', items: 2, status: 'Processing', total: '$87.00' },
      { id: '3206', date: 'Jan 5, 2025', items: 1, status: 'Cancelled', total: '$29.99' },
    ];

    const orderStatusVariant: Record<string, 'success' | 'info' | 'warning' | 'danger' | 'muted'> = {
      Delivered: 'success',
      Shipped: 'info',
      Processing: 'warning',
      Cancelled: 'danger',
    };

    return (
      <Table>
        <TableCaption>Your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-center">Items</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">#{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-center">{order.items}</TableCell>
              <TableCell>
                <Badge variant={orderStatusVariant[order.status] ?? 'muted'}>{order.status}</Badge>
              </TableCell>
              <TableCell className="text-right">{order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total (delivered)</TableCell>
            <TableCell className="text-right font-bold">$437.49</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

export const Dense: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8 text-xs">Key</TableHead>
          <TableHead className="h-8 text-xs">Value</TableHead>
          <TableHead className="h-8 text-xs">Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { key: 'NODE_ENV', value: 'production', type: 'string' },
          { key: 'PORT', value: '3000', type: 'number' },
          { key: 'DEBUG', value: 'false', type: 'boolean' },
          { key: 'DATABASE_URL', value: 'postgres://...', type: 'string' },
          { key: 'REDIS_HOST', value: '127.0.0.1', type: 'string' },
          { key: 'MAX_RETRIES', value: '5', type: 'number' },
        ].map((row) => (
          <TableRow key={row.key}>
            <TableCell className="py-1.5 font-mono text-xs">{row.key}</TableCell>
            <TableCell className="py-1.5 font-mono text-xs text-muted-foreground">{row.value}</TableCell>
            <TableCell className="py-1.5 text-xs">
              <Badge variant="outline">{row.type}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const FinancialReport: Story = {
  render: () => {
    const quarters = [
      { quarter: 'Q1 2025', revenue: '$1.2M', expenses: '$0.8M', profit: '$0.4M', growth: '+12%' },
      { quarter: 'Q4 2024', revenue: '$1.1M', expenses: '$0.7M', profit: '$0.4M', growth: '+8%' },
      { quarter: 'Q3 2024', revenue: '$1.0M', expenses: '$0.7M', profit: '$0.3M', growth: '+5%' },
      { quarter: 'Q2 2024', revenue: '$0.9M', expenses: '$0.6M', profit: '$0.3M', growth: '+3%' },
    ];

    return (
      <Table>
        <TableCaption>Quarterly financial overview.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Quarter</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
            <TableHead className="text-right">Expenses</TableHead>
            <TableHead className="text-right">Profit</TableHead>
            <TableHead className="text-right">Growth</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quarters.map((q) => (
            <TableRow key={q.quarter}>
              <TableCell className="font-medium">{q.quarter}</TableCell>
              <TableCell className="text-right">{q.revenue}</TableCell>
              <TableCell className="text-right">{q.expenses}</TableCell>
              <TableCell className="text-right">{q.profit}</TableCell>
              <TableCell className="text-right text-success">{q.growth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Annual Total</TableCell>
            <TableCell className="text-right font-bold">$4.2M</TableCell>
            <TableCell className="text-right font-bold">$2.8M</TableCell>
            <TableCell className="text-right font-bold">$1.4M</TableCell>
            <TableCell className="text-right font-bold text-success">+7%</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};
