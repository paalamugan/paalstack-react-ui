import type { ComponentWithAs, HTMLTailwindStyledComponentProps } from '@/shared/types';

import { LuLoaderCircle } from '@/icons/lu';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

export interface SpinnerProps extends HTMLTailwindStyledComponentProps<'svg'> {
  /**
   * Optional size for the Spinner
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  xs: 'size-3',
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
  xl: 'size-8',
};

/**
 * Spinner Component
 *
 * An indicator that can be used to show a loading state.
 * Perfect for indicating loading states, processing, and async operations.
 *
 * @example
 * // Basic usage
 * import { Spinner } from '@paalstack/react-ui';
 *
 * <Spinner />
 *
 * @example
 * // Different sizes
 * <Spinner size="xs" />
 * <Spinner size="sm" />
 * <Spinner size="md" />
 * <Spinner size="lg" />
 * <Spinner size="xl" />
 *
 * @example
 * // Custom size with className
 * <Spinner className="size-10" />
 * <Spinner className="size-12" />
 *
 * @example
 * // Button with spinner
 * <Button disabled>
 *   <Spinner size="sm" />
 *   Loading...
 * </Button>
 *
 * @example
 * // Button with spinner at start (data-icon="inline-start")
 * <Button disabled data-icon="inline-start">
 *   <Spinner size="sm" />
 *   Please wait
 * </Button>
 *
 * @example
 * // Button with spinner at end (data-icon="inline-end")
 * <Button disabled data-icon="inline-end">
 *   Processing
 *   <Spinner size="sm" />
 * </Button>
 *
 * @example
 * // Badge with spinner
 * <Badge>
 *   <Spinner size="xs" />
 *   Syncing
 * </Badge>
 *
 * @example
 * // Badge with spinner at start
 * <Badge data-icon="inline-start">
 *   <Spinner size="xs" />
 *   Updating
 * </Badge>
 *
 * @example
 * // Badge with spinner at end
 * <Badge data-icon="inline-end">
 *   Processing
 *   <Spinner size="xs" />
 * </Badge>
 *
 * @example
 * // Input Group with spinner
 * <InputGroup>
 *   <InputGroupAddon>
 *     <Spinner size="sm" />
 *   </InputGroupAddon>
 *   <Input placeholder="Validating..." disabled />
 * </InputGroup>
 *
 * @example
 * // Empty state with spinner
 * <Empty
 *   icon={<Spinner size="lg" />}
 *   title="Processing your request"
 *   description="Please wait while we process your request. Do not refresh the page."
 * />
 *
 * @example
 * // Card loading state
 * <Card>
 *   <CardContent className="flex items-center justify-center py-8">
 *     <Spinner />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Item component with spinner
 * <Item>
 *   <ItemContent>
 *     Processing payment...
 *   </ItemContent>
 *   <Spinner size="sm" />
 * </Item>
 *
 * @example
 * // Centered loading indicator
 * <div className="flex items-center justify-center min-h-screen">
 *   <Spinner size="xl" />
 * </div>
 *
 * @example
 * // With custom color
 * <Spinner className="text-primary" />
 * <Spinner className="text-success" />
 * <Spinner className="text-danger" />
 *
 * @example
 * // Inline with text
 * <div className="flex items-center gap-2">
 *   <Spinner size="sm" />
 *   <span>Loading data...</span>
 * </div>
 *
 * @example
 * // Table loading state
 * <Table>
 *   <TableBody>
 *     {isLoading ? (
 *       <TableRow>
 *         <TableCell colSpan={columns.length} className="text-center py-8">
 *           <Spinner />
 *         </TableCell>
 *       </TableRow>
 *     ) : (
 *       data.map(row => <TableRow key={row.id}>...</TableRow>)
 *     )}
 *   </TableBody>
 * </Table>
 *
 * @example
 * // Form submission
 * <form onSubmit={handleSubmit}>
 *   <Input label="Email" />
 *   <Button type="submit" disabled={isSubmitting}>
 *     {isSubmitting ? <Spinner size="sm" /> : null}
 *     {isSubmitting ? 'Submitting...' : 'Submit'}
 *   </Button>
 * </form>
 */
const Spinner: ComponentWithAs<'svg', SpinnerProps> = forwardRef<SpinnerProps, 'svg'>(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <Box
        as={LuLoaderCircle}
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn('animate-spin', sizeClasses[size], className)}
        data-slot="spinner"
        data-qa="spinner"
        {...props}
      />
    );
  },
);

Spinner.displayName = 'Spinner';

export { Spinner };
