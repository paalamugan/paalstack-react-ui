import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box/Box';

export interface FlexProps extends BoxProps {
  children: ReactNode;
}

/**
 * Flex Component
 *
 * A flexbox container component for creating flexible layouts.
 * Built on top of Box with `display: flex` applied.
 *
 * @example
 * // Basic flex container
 * import { Flex } from '@paalstack/react-ui';
 *
 * <Flex>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 *
 * @example
 * // Horizontal layout with gap
 * <Flex className="gap-4">
 *   <button>Button 1</button>
 *   <button>Button 2</button>
 *   <button>Button 3</button>
 * </Flex>
 *
 * @example
 * // Center aligned
 * <Flex className="items-center justify-center h-screen">
 *   <div>Centered content</div>
 * </Flex>
 *
 * @example
 * // Space between items
 * <Flex className="justify-between">
 *   <div>Left</div>
 *   <div>Right</div>
 * </Flex>
 *
 * @example
 * // Vertical flex (column)
 * <Flex className="flex-col gap-2">
 *   <div>Top</div>
 *   <div>Middle</div>
 *   <div>Bottom</div>
 * </Flex>
 *
 * @example
 * // Wrap items
 * <Flex className="flex-wrap gap-2">
 *   {items.map(item => <div key={item}>{item}</div>)}
 * </Flex>
 *
 * @example
 * // Align items
 * <Flex className="items-start">
 *   <div>Aligned to start</div>
 * </Flex>
 *
 * @example
 * // As navigation
 * <Flex as="nav" className="gap-4 p-4">
 *   <a href="/">Home</a>
 *   <a href="/about">About</a>
 *   <a href="/contact">Contact</a>
 * </Flex>
 *
 * @tip Use className to control flex properties (direction, wrap, gap, alignment)
 * @tip Supports all Box props (bg, textColor, etc.)
 * @tip Can be rendered as any HTML element with `as` prop
 * @tip Ideal for navigation bars, button groups, and horizontal layouts
 */
export const Flex: ComponentWithAs<'div', FlexProps> = forwardRef<FlexProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex', className)} data-qa="flex" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
