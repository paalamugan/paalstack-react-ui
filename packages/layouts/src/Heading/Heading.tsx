import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box';

export interface HeadingProps extends BoxProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const headingSizes = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-bold',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-semibold',
  h5: 'text-base font-semibold',
  h6: 'text-sm font-semibold',
};

/**
 * Heading Component
 *
 * A semantic heading component that renders h1-h6 elements with appropriate styling.
 * Automatically applies size styling based on the heading level.
 *
 * @example
 * // Basic h1 heading
 * import { Heading } from '@paalstack/react-ui';
 *
 * <Heading>Page Title</Heading>
 *
 * @example
 * // Different heading levels
 * <Heading as="h1">Main Title</Heading>
 * <Heading as="h2">Section Title</Heading>
 * <Heading as="h3">Subsection Title</Heading>
 * <Heading as="h4">Minor Heading</Heading>
 *
 * @example
 * // With custom styling
 * <Heading as="h2" className="text-blue-600 mb-4">
 *   Styled Heading
 * </Heading>
 *
 * @example
 * // With color prop
 * <Heading textColor="blue">Colored Heading</Heading>
 *
 * @example
 * // Page header
 * <Heading as="h1" className="mb-2">
 *   Welcome to Our Site
 * </Heading>
 * <Text>Your tagline here</Text>
 *
 * @example
 * // Section heading
 * <Heading as="h2" className="border-b pb-2 mb-4">
 *   Features
 * </Heading>
 *
 * @example
 * // Card title
 * <Heading as="h3" className="mb-2">
 *   Card Title
 * </Heading>
 *
 * @tip Default renders as h1
 * @tip Use `as` prop to change heading level
 * @tip Size automatically matches heading level
 * @tip Override size with className if needed
 */
export const Heading: ComponentWithAs<'h1', HeadingProps> = forwardRef<HeadingProps, 'h1'>((props, ref) => {
  const { children, as: headTag = 'h1', className, ...restProps } = props;

  const size = headingSizes[headTag as keyof typeof headingSizes];
  return (
    <Box as={headTag} data-qa="heading" {...restProps} ref={ref} className={cn(size, className)}>
      {children}
    </Box>
  );
});
