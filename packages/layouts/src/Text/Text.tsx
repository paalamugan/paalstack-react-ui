import type { ComponentWithAs } from '@/shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box';

import { forwardRef } from '@/shared/utils';

import { Box } from '../Box';

export interface TextProps extends BoxProps {
  children: ReactNode;
}

/**
 * Text Component
 *
 * A polymorphic text component for rendering paragraphs, spans, and other text elements.
 * Built on top of Box with default `as="p"`.
 *
 * @example
 * // Basic paragraph
 * import { Text } from '@paalstack/react-ui';
 *
 * <Text>This is a paragraph.</Text>
 *
 * @example
 * // As span
 * <Text as="span">Inline text</Text>
 *
 * @example
 * // With styling
 * <Text className="text-lg font-bold text-blue-600">
 *   Styled text
 * </Text>
 *
 * @example
 * // With color prop
 * <Text textColor="blue">Colored text</Text>
 *
 * @example
 * // As label
 * <Text as="label" htmlFor="input">
 *   Input Label
 * </Text>
 *
 * @example
 * // Truncated text
 * <Text className="truncate max-w-xs">
 *   This is a very long text that will be truncated
 * </Text>
 *
 * @example
 * // Multi-line clamp
 * <Text className="line-clamp-3">
 *   Long text that will be clamped to 3 lines
 * </Text>
 *
 * @example
 * // As small text
 * <Text as="small" className="text-sm text-gray-500">
 *   Helper text
 * </Text>
 *
 * @example
 * // With font size prop
 * <Text fontSize="lg">Large text</Text>
 *
 * @tip Default renders as <p> tag
 * @tip Use `as` prop to render as span, label, small, etc.
 * @tip Supports all Box props for flexible styling
 * @tip Use for body text, descriptions, and inline text
 */
export const Text: ComponentWithAs<'p', TextProps> = forwardRef<TextProps, 'p'>((props, ref) => {
  const { children, className, as = 'p', ...restProps } = props;

  return (
    <Box as={as} ref={ref} className={className} data-qa="text" {...restProps}>
      {children}
    </Box>
  );
});
