import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box';

export interface StackProps extends BoxProps {
  children: ReactNode;
  /**
   * The direction of the stack. Defaults to `column`.
   * @default column
   */
  direction?: 'row' | 'column';
}

/**
 * Stack Component
 *
 * A flexible container that stacks children vertically (default) or horizontally.
 * Provides consistent spacing between items with gap-2.
 *
 * @example
 * // Basic vertical stack
 * import { Stack } from '@paalstack/react-ui';
 *
 * <Stack>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Stack>
 *
 * @example
 * // Horizontal stack
 * <Stack direction="row">
 *   <button>Button 1</button>
 *   <button>Button 2</button>
 * </Stack>
 *
 * @example
 * // Form fields
 * <Stack className="gap-4">
 *   <Input label="Name" />
 *   <Input label="Email" />
 *   <Input label="Phone" />
 * </Stack>
 *
 * @example
 * // Card content
 * <Stack className="gap-3 p-6">
 *   <Heading as="h3">Card Title</Heading>
 *   <Text>Card description text</Text>
 *   <Button>Action</Button>
 * </Stack>
 *
 * @example
 * // Navigation links
 * <Stack direction="row" className="gap-6">
 *   <a href="/">Home</a>
 *   <a href="/about">About</a>
 *   <a href="/contact">Contact</a>
 * </Stack>
 *
 * @example
 * // Custom gap
 * <Stack className="gap-8">
 *   <section>Section 1</section>
 *   <section>Section 2</section>
 * </Stack>
 *
 * @tip Default direction is 'column' (vertical)
 * @tip Use direction="row" for horizontal stacking
 * @tip Use VStack for explicitly vertical, HStack for horizontal
 */
export const Stack: ComponentWithAs<'div', StackProps> = forwardRef<StackProps, 'div'>((props, ref) => {
  const { children, className, direction, ...restProps } = props;

  return (
    <Box
      className={cn(
        'flex flex-col',
        {
          'flex-row': direction === 'row',
        },
        className,
      )}
      data-qa="stack"
      {...restProps}
      ref={ref}
    >
      {children}
    </Box>
  );
});
