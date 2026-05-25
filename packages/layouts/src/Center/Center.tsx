import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box/Box';

export interface CenterProps extends BoxProps {
  children: ReactNode;
}

/**
 * Center Component
 *
 * A flexbox container that centers its children both horizontally and vertically.
 * Uses `display: flex`, `align-items: center`, and `justify-content: center`.
 *
 * @example
 * // Basic center
 * import { Center } from '@paalstack/react-ui';
 *
 * <Center>
 *   <div>Centered content</div>
 * </Center>
 *
 * @example
 * // Full screen center
 * <Center className="h-screen">
 *   <h1>Centered on screen</h1>
 * </Center>
 *
 * @example
 * // Card with centered icon
 * <Center className="h-32 w-32 bg-gray-100 rounded-lg">
 *   <Icon size={48} />
 * </Center>
 *
 * @example
 * // Loading state
 * <Center className="min-h-[400px]">
 *   <Spinner />
 * </Center>
 *
 * @example
 * // Empty state
 * <Center className="py-12">
 *   <div className="text-center">
 *     <p>No items found</p>
 *   </div>
 * </Center>
 *
 * @example
 * // Avatar container
 * <Center className="size-12 rounded-full bg-blue-500 text-white">
 *   JD
 * </Center>
 *
 * @example
 * // Modal content
 * <Center className="fixed inset-0 bg-black/50">
 *   <div className="bg-white p-6 rounded-lg">
 *     Modal content
 *   </div>
 * </Center>
 *
 * @tip Centers both horizontally and vertically
 * @tip Add height class for full vertical centering
 * @tip Ideal for loading states, empty states, and icons
 * @tip Can be used for overlays and modals
 */
export const Center: ComponentWithAs<'div', CenterProps> = forwardRef<CenterProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex items-center justify-center', className)} data-qa="center" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
