import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box/Box';

export interface GridProps extends BoxProps {
  children: ReactNode;
}

/**
 * Grid Component
 *
 * A CSS Grid container component for creating grid-based layouts.
 * Built on top of Box with `display: grid` applied.
 *
 * @example
 * // Basic grid
 * import { Grid, GridItem } from '@paalstack/react-ui';
 *
 * <Grid className="grid-cols-3 gap-4">
 *   <GridItem>Item 1</GridItem>
 *   <GridItem>Item 2</GridItem>
 *   <GridItem>Item 3</GridItem>
 * </Grid>
 *
 * @example
 * // Responsive grid
 * <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
 *   {items.map(item => (
 *     <GridItem key={item.id}>{item.content}</GridItem>
 *   ))}
 * </Grid>
 *
 * @example
 * // Auto-fit grid
 * <Grid className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
 *   <div>Card 1</div>
 *   <div>Card 2</div>
 *   <div>Card 3</div>
 * </Grid>
 *
 * @example
 * // Grid with rows
 * <Grid className="grid-cols-2 grid-rows-3 gap-4">
 *   <GridItem>1</GridItem>
 *   <GridItem>2</GridItem>
 *   <GridItem>3</GridItem>
 *   <GridItem>4</GridItem>
 * </Grid>
 *
 * @example
 * // Grid with span
 * <Grid className="grid-cols-3 gap-4">
 *   <GridItem className="col-span-2">Wide item</GridItem>
 *   <GridItem>Normal</GridItem>
 *   <GridItem className="col-span-3">Full width</GridItem>
 * </Grid>
 *
 * @example
 * // Dashboard layout
 * <Grid className="grid-cols-12 gap-4">
 *   <GridItem className="col-span-12 md:col-span-8">Main content</GridItem>
 *   <GridItem className="col-span-12 md:col-span-4">Sidebar</GridItem>
 * </Grid>
 *
 * @example
 * // Photo gallery
 * <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
 *   {photos.map(photo => (
 *     <GridItem key={photo.id}>
 *       <img src={photo.url} alt={photo.title} />
 *     </GridItem>
 *   ))}
 * </Grid>
 *
 * @tip Use className to control grid properties (columns, rows, gap)
 * @tip GridItem can span multiple columns/rows with col-span-* classes
 * @tip Supports all Box props (bg, textColor, etc.)
 * @tip Ideal for card grids, dashboards, and complex layouts
 */
export const Grid: ComponentWithAs<'div', GridProps> = forwardRef<GridProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('grid', className)} data-qa="grid" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});

export interface GridItemProps extends BoxProps {
  children?: ReactNode;
}

/**
 * GridItem Component
 *
 * A grid item component to be used inside Grid.
 * Supports column and row spanning.
 *
 * @example
 * // Basic grid item
 * <GridItem>Content</GridItem>
 *
 * @example
 * // Span multiple columns
 * <GridItem className="col-span-2">Wide content</GridItem>
 *
 * @example
 * // Span multiple rows
 * <GridItem className="row-span-2">Tall content</GridItem>
 *
 * @example
 * // Start at specific column
 * <GridItem className="col-start-2">Starts at column 2</GridItem>
 *
 * @example
 * // Full width item
 * <GridItem className="col-span-full">Full width</GridItem>
 *
 * @tip Use col-span-* to span multiple columns
 * @tip Use row-span-* to span multiple rows
 * @tip Use col-start-* and row-start-* to position items
 */
export const GridItem = forwardRef<GridItemProps, 'div'>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <Box data-qa="grid-item" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
