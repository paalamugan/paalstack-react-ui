import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box';

export interface HStackProps extends BoxProps {
  children: ReactNode;
}

/**
 * HStack Component
 *
 * A horizontal stack that arranges children in a row with vertical centering.
 * Uses `display: flex`, `flex-direction: row`, and `align-items: center`.
 *
 * @example
 * // Basic horizontal stack
 * import { HStack } from '@paalstack/react-ui';
 *
 * <HStack>
 *   <button>Button 1</button>
 *   <button>Button 2</button>
 *   <button>Button 3</button>
 * </HStack>
 *
 * @example
 * // Navigation bar
 * <HStack className="gap-4 p-4">
 *   <Logo />
 *   <a href="/">Home</a>
 *   <a href="/about">About</a>
 *   <a href="/contact">Contact</a>
 * </HStack>
 *
 * @example
 * // Icon with text
 * <HStack className="gap-2">
 *   <Icon />
 *   <Text>Label text</Text>
 * </HStack>
 *
 * @example
 * // Space between items
 * <HStack className="justify-between w-full">
 *   <span>Left</span>
 *   <span>Right</span>
 * </HStack>
 *
 * @example
 * // Button group
 * <HStack className="gap-2">
 *   <Button>Save</Button>
 *   <Button variant="outline">Cancel</Button>
 *   <Button variant="ghost">Delete</Button>
 * </HStack>
 *
 * @example
 * // User info
 * <HStack className="gap-3">
 *   <Avatar />
 *   <div>
 *     <Text className="font-medium">John Doe</Text>
 *     <Text className="text-sm text-gray-500">john@example.com</Text>
 *   </div>
 * </HStack>
 *
 * @example
 * // Badge with icon
 * <HStack className="gap-1.5 px-2 py-1 bg-blue-100 rounded-full">
 *   <CheckIcon className="size-4" />
 *   <span className="text-xs">Verified</span>
 * </HStack>
 *
 * @tip Items are vertically centered by default
 * @tip Default gap is gap-2, override with className
 * @tip Ideal for horizontal layouts with vertical alignment
 * @tip Use for navigation, button groups, and inline content
 */
export const HStack: ComponentWithAs<'div', HStackProps> = forwardRef<HStackProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-row items-center gap-2', className)} data-qa="h-stack" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
