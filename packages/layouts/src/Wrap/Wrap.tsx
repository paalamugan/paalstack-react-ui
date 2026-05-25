import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box/Box';

export interface WrapProps extends BoxProps {
  children: ReactNode;
}

/**
 * Wrap Component
 *
 * A flex container that wraps children to the next line when space runs out.
 * Uses `display: flex` with `flex-wrap: wrap`.
 *
 * @example
 * // Basic wrap
 * import { Wrap, WrapItem } from '@paalstack/react-ui';
 *
 * <Wrap>
 *   <WrapItem>Item 1</WrapItem>
 *   <WrapItem>Item 2</WrapItem>
 *   <WrapItem>Item 3</WrapItem>
 * </Wrap>
 *
 * @example
 * // Tag list
 * <Wrap className="gap-2">
 *   <span className="px-2 py-1 bg-gray-200 rounded">React</span>
 *   <span className="px-2 py-1 bg-gray-200 rounded">TypeScript</span>
 *   <span className="px-2 py-1 bg-gray-200 rounded">Tailwind</span>
 * </Wrap>
 *
 * @example
 * // Badge collection
 * <Wrap className="gap-2">
 *   {tags.map(tag => (
 *     <Badge key={tag}>{tag}</Badge>
 *   ))}
 * </Wrap>
 *
 * @example
 * // Button group that wraps
 * <Wrap className="gap-2">
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 *   <Button>Action 3</Button>
 *   <Button>Action 4</Button>
 * </Wrap>
 *
 * @example
 * // Filter chips
 * <Wrap className="gap-2">
 *   <button className="px-3 py-1 rounded-full border">All</button>
 *   <button className="px-3 py-1 rounded-full border">Active</button>
 *   <button className="px-3 py-1 rounded-full border">Completed</button>
 * </Wrap>
 *
 * @example
 * // Avatar group
 * <Wrap className="gap-2">
 *   <Avatar src="user1.jpg" />
 *   <Avatar src="user2.jpg" />
 *   <Avatar src="user3.jpg" />
 * </Wrap>
 *
 * @tip Items automatically wrap to next line
 * @tip Default gap is gap-2, override with className
 * @tip Use WrapItem for individual wrapped items
 * @tip Ideal for tags, badges, and button groups
 */
export const Wrap: ComponentWithAs<'div', WrapProps> = forwardRef<WrapProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-wrap gap-2', className)} data-qa="wrap" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});

interface WrapItemProps extends WrapProps {}

/**
 * WrapItem Component
 *
 * An individual item within a Wrap container.
 * Ensures items don't shrink and align properly.
 *
 * @example
 * // Basic wrap item
 * <WrapItem>Content</WrapItem>
 *
 * @example
 * // With custom styling
 * <WrapItem className="px-3 py-1 bg-blue-100 rounded">
 *   Tag
 * </WrapItem>
 *
 * @tip Use inside Wrap component
 * @tip Items won't shrink (flex-none)
 * @tip Aligns items to start
 */
export const WrapItem = forwardRef<WrapItemProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-none items-start', className)} data-qa="wrap-item" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
