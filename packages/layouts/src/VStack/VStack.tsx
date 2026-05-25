import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box/Box';

export interface VStackProps extends BoxProps {
  children: ReactNode;
}

/**
 * VStack Component
 *
 * A vertical stack that arranges children in a column with full-width items.
 * Uses `display: flex`, `flex-direction: column`, and `align-items: stretch`.
 *
 * @example
 * // Basic vertical stack
 * import { VStack } from '@paalstack/react-ui';
 *
 * <VStack>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </VStack>
 *
 * @example
 * // Form layout
 * <VStack className="gap-4">
 *   <Input label="Name" />
 *   <Input label="Email" />
 *   <Input label="Phone" />
 *   <Button className="w-full">Submit</Button>
 * </VStack>
 *
 * @example
 * // Card content
 * <VStack className="gap-3 p-6 rounded-lg border">
 *   <Heading as="h3">Card Title</Heading>
 *   <Text>Card description</Text>
 *   <Button>Action</Button>
 * </VStack>
 *
 * @example
 * // List of items
 * <VStack className="gap-2">
 *   {items.map(item => (
 *     <div key={item.id} className="p-4 border rounded">
 *       {item.name}
 *     </div>
 *   ))}
 * </VStack>
 *
 * @example
 * // Navigation menu
 * <VStack as="nav" className="gap-1">
 *   <a className="p-2 hover:bg-gray-100 rounded">Home</a>
 *   <a className="p-2 hover:bg-gray-100 rounded">About</a>
 *   <a className="p-2 hover:bg-gray-100 rounded">Contact</a>
 * </VStack>
 *
 * @example
 * // Sidebar
 * <VStack className="gap-6 p-4 w-64 border-r">
 *   <Logo />
 *   <VStack className="gap-2">
 *     <a href="/dashboard">Dashboard</a>
 *     <a href="/settings">Settings</a>
 *   </VStack>
 * </VStack>
 *
 * @example
 * // Timeline
 * <VStack className="gap-4">
 *   <div className="flex gap-3">
 *     <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
 *     <div>Event 1</div>
 *   </div>
 *   <div className="flex gap-3">
 *     <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
 *     <div>Event 2</div>
 *   </div>
 * </VStack>
 *
 * @tip Items stretch to full width by default
 * @tip Default gap is gap-2, override with className
 * @tip Ideal for forms, lists, and vertical navigation
 * @tip Use for sidebar menus and vertical content
 */
export const VStack: ComponentWithAs<'div', VStackProps> = forwardRef<VStackProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-col items-stretch gap-2', className)} data-qa="v-stack" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
