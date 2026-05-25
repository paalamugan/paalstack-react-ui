import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Box } from '../Box/Box';

export interface ContainerProps extends BoxProps {
  children: ReactNode;
}

/**
 * Container Component
 *
 * A responsive container component that centers content with a max-width.
 * Uses Tailwind's container utility for responsive behavior.
 *
 * @example
 * // Basic container
 * import { Container } from '@paalstack/react-ui';
 *
 * <Container>
 *   <h1>Page Title</h1>
 *   <p>Page content</p>
 * </Container>
 *
 * @example
 * // With padding
 * <Container className="px-4 py-8">
 *   Content with padding
 * </Container>
 *
 * @example
 * // Full page layout
 * <Container className="min-h-screen py-12">
 *   <h1>Welcome</h1>
 *   <p>Content</p>
 * </Container>
 *
 * @example
 * // Centered container
 * <Container className="mx-auto">
 *   Centered content
 * </Container>
 *
 * @example
 * // With background
 * <Container bg="gray" className="py-16">
 *   Section content
 * </Container>
 *
 * @example
 * // Narrow container
 * <Container className="max-w-2xl mx-auto px-4">
 *   Blog post content
 * </Container>
 *
 * @example
 * // Full width on mobile
 * <Container className="px-4 sm:px-6 lg:px-8">
 *   Responsive padding
 * </Container>
 *
 * @tip Automatically centers content horizontally
 * @tip Responsive max-width at different breakpoints
 * @tip Add px-* classes for horizontal padding
 * @tip Ideal for page content, sections, and articles
 */
export const Container: ComponentWithAs<'div', ContainerProps> = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('container', className)} data-qa="container" {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
