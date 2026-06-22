'use client';

import { Badge, DataTable, DataTableColumnHeader, Text, toast, type DataTableColumnDef } from '@paalstack/react-ui';

type UserRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joined: string;
};

const rows: UserRow[] = [
  { id: 'USR-001', name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer', status: 'active', joined: '2024-01-15' },
  { id: 'USR-002', name: 'Bob Chen', email: 'bob@example.com', role: 'Designer', status: 'active', joined: '2024-02-03' },
  { id: 'USR-003', name: 'Carol Smith', email: 'carol@example.com', role: 'Product Manager', status: 'pending', joined: '2024-03-20' },
  { id: 'USR-004', name: 'David Park', email: 'david@example.com', role: 'Developer', status: 'inactive', joined: '2023-11-08' },
  { id: 'USR-005', name: 'Emma Williams', email: 'emma@example.com', role: 'Engineering Manager', status: 'active', joined: '2023-09-14' },
  { id: 'USR-006', name: 'Frank Miller', email: 'frank@example.com', role: 'Designer', status: 'active', joined: '2024-04-01' },
  { id: 'USR-007', name: 'Grace Lee', email: 'grace@example.com', role: 'Developer', status: 'pending', joined: '2024-05-22' },
  { id: 'USR-008', name: 'Henry Brown', email: 'henry@example.com', role: 'Product Manager', status: 'active', joined: '2023-07-30' },
  { id: 'USR-009', name: 'Irene Davis', email: 'irene@example.com', role: 'Developer', status: 'inactive', joined: '2023-12-11' },
  { id: 'USR-010', name: 'James Wilson', email: 'james@example.com', role: 'Engineering Manager', status: 'active', joined: '2024-06-05' },
];

const statusVariantMap: Record<UserRow['status'], 'success' | 'warning' | 'outline'> = {
  active: 'success',
  pending: 'warning',
  inactive: 'outline',
};

const columns: DataTableColumnDef<UserRow>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => (
      <Text className="font-mono text-xs text-muted-foreground">{row.getValue('id')}</Text>
    ),
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue('name')}</span>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => (
      <Text className="text-sm text-muted-foreground">{row.getValue('email')}</Text>
    ),
  },
  {
    accessorKey: 'role',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue<UserRow['status']>('status');
      return (
        <Badge variant={statusVariantMap[status]} className="capitalize">
          {status}
        </Badge>
      );
    },
    filterFn: (row, id, value: string[]) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: 'joined',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Joined" />,
    cell: ({ row }) => (
      <Text className="text-sm text-muted-foreground">
        {new Date(row.getValue('joined')).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </Text>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <button
        className="text-xs text-muted-foreground underline-offset-2 hover:underline"
        onClick={() => toast.info(`Viewing ${row.original.name}`)}
      >
        View
      </button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];

export function DataDemo() {
  return (
    <div className="mt-6 space-y-4">
      <Text className="text-muted-foreground">
        Sortable, filterable table powered by TanStack Table via{' '}
        <code className="text-foreground">DataTable</code>.
      </Text>
      <DataTable
        columns={columns}
        rows={rows}
        search={{ accessorKey: 'name', placeholder: 'Search by name…' }}
        facetFilterColumns={[
          {
            accessorKey: 'status',
            title: 'Status',
            options: [
              { label: 'Active', value: 'active' },
              { label: 'Pending', value: 'pending' },
              { label: 'Inactive', value: 'inactive' },
            ],
          },
          {
            accessorKey: 'role',
            title: 'Role',
            options: [
              { label: 'Developer', value: 'Developer' },
              { label: 'Designer', value: 'Designer' },
              { label: 'Product Manager', value: 'Product Manager' },
              { label: 'Engineering Manager', value: 'Engineering Manager' },
            ],
          },
        ]}
        showTableConfigure
        showPagination
        paginationProps={{ pageSize: 5, showTotalResults: true }}
        enableSelectableTable
      />
    </div>
  );
}
