import type { BoxProps } from '@/layouts/Box';
import type { ComponentWithAs } from '@/shared/types';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

interface TableProps extends BoxProps {
  containerClassName?: string;
}
/**
 * Table Component
 *
 * A set of layered sections of content—known as table—that present data in rows and columns.
 * Perfect for displaying structured data, lists, and comparisons.
 *
 * @example
 * // Basic usage
 * import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@paalstack/react-ui';
 *
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Email</TableHead>
 *       <TableHead>Role</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john@example.com</TableCell>
 *       <TableCell>Admin</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 *
 * @example
 * // With caption and footer
 * <Table>
 *   <TableCaption>A list of recent transactions</TableCaption>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Date</TableHead>
 *       <TableHead>Description</TableHead>
 *       <TableHead className="text-right">Amount</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>2024-01-15</TableCell>
 *       <TableCell>Payment received</TableCell>
 *       <TableCell className="text-right">$500.00</TableCell>
 *     </TableRow>
 *   </TableBody>
 *   <TableFooter>
 *     <TableRow>
 *       <TableCell colSpan={2}>Total</TableCell>
 *       <TableCell className="text-right">$500.00</TableCell>
 *     </TableRow>
 *   </TableFooter>
 * </Table>
 */
const Table: ComponentWithAs<'table', TableProps> = forwardRef<TableProps, 'table'>(
  ({ className, containerClassName, ...props }, ref) => (
    <Box data-slot="table-container" className={cn('relative w-full overflow-x-auto', containerClassName)}>
      <Box
        as="table"
        ref={ref}
        data-slot="table"
        data-qa="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </Box>
  ),
);
Table.displayName = 'Table';

const TableHeader: ComponentWithAs<'thead', BoxProps> = forwardRef<BoxProps, 'thead'>(
  ({ className, ...props }, ref) => (
    <Box
      as="thead"
      ref={ref}
      data-slot="table-header"
      data-qa="table-header"
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  ),
);
TableHeader.displayName = 'TableHeader';

const TableBody: ComponentWithAs<'tbody', BoxProps> = forwardRef<BoxProps, 'tbody'>(({ className, ...props }, ref) => (
  <Box
    as="tbody"
    ref={ref}
    data-slot="table-body"
    data-qa="table-body"
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter: ComponentWithAs<'tfoot', BoxProps> = forwardRef<BoxProps, 'tfoot'>(
  ({ className, ...props }, ref) => (
    <Box
      as="tfoot"
      ref={ref}
      data-slot="table-footer"
      data-qa="table-footer"
      className={cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  ),
);
TableFooter.displayName = 'TableFooter';

const TableRow: ComponentWithAs<'tr', BoxProps> = forwardRef<BoxProps, 'tr'>(({ className, ...props }, ref) => (
  <Box
    as="tr"
    ref={ref}
    data-slot="table-row"
    data-qa="table-row"
    className={cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead: ComponentWithAs<'th', BoxProps> = forwardRef<BoxProps, 'th'>(({ className, ...props }, ref) => (
  <Box
    as="th"
    ref={ref}
    data-slot="table-head"
    data-qa="table-head"
    className={cn(
      'h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
      className,
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell: ComponentWithAs<'td', BoxProps> = forwardRef<BoxProps, 'td'>(({ className, ...props }, ref) => (
  <Box
    as="td"
    ref={ref}
    data-slot="table-cell"
    data-qa="table-cell"
    className={cn(
      'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
      className,
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption: ComponentWithAs<'caption', BoxProps> = forwardRef<BoxProps, 'caption'>(
  ({ className, ...props }, ref) => (
    <Box
      as="caption"
      ref={ref}
      data-slot="table-caption"
      data-qa="table-caption"
      className={cn('mt-4 text-sm text-muted-foreground', className)}
      {...props}
    />
  ),
);
TableCaption.displayName = 'TableCaption';

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
