import type { TailwindStyledComponentProps } from '@/shared/types';
import type { As, ComponentWithAs, RightJoinProps } from '@/shared/types/tailwind-styled-component';

import { tailwindBoxVariants } from '@/shared/constants';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

/**
 * BoxProps is the props for the Box component
 */
export interface BoxProps extends TailwindStyledComponentProps {}

/**
 * BoxPropsWithRef is the props for the Box component with a ref
 */
export type BoxPropsWithRef<T extends As = 'div', Props extends object = NonNullable<unknown>> = RightJoinProps<
  React.ComponentPropsWithoutRef<T> & React.RefAttributes<React.ElementRef<T>>,
  RightJoinProps<BoxProps, Props>
>;

/**
 * BoxPropsWithoutRef is the props for the Box component without a ref
 */
export type BoxPropsWithoutRef<T extends As = 'div', Props extends object = NonNullable<unknown>> = RightJoinProps<
  React.ComponentPropsWithoutRef<T>,
  RightJoinProps<BoxProps, Props>
>;

/**
 * Box Component
 *
 * The most fundamental layout component - a polymorphic box with styling props.
 * Can be rendered as any HTML element using the `as` prop.
 *
 * @example
 * // Basic box
 * import { Box } from '@paalstack/react-ui';
 *
 * <Box>Content</Box>
 *
 * @example
 * // Box with background and text color
 * <Box bg="blue" textColor="white" className="p-4 rounded-lg">
 *   Styled box
 * </Box>
 *
 * @example
 * // Polymorphic usage - render as different element
 * <Box as="section">Section content</Box>
 * <Box as="article">Article content</Box>
 * <Box as="header">Header content</Box>
 *
 * @example
 * // With border
 * <Box borderColor="gray" className="border p-4">
 *   Bordered box
 * </Box>
 *
 * @example
 * // With font size
 * <Box fontSize="lg" className="p-2">
 *   Large text
 * </Box>
 *
 * @example
 * // Clickable box
 * <Box as="button" onClick={handleClick} className="p-4 hover:bg-gray-100">
 *   Click me
 * </Box>
 *
 * @example
 * // Card-like box
 * <Box className="rounded-lg shadow-md p-6 bg-white">
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Box>
 *
 * @example
 * // With ref
 * const boxRef = useRef<HTMLDivElement>(null);
 * <Box ref={boxRef}>Content</Box>
 *
 * @tip Use `as` prop to render Box as any HTML element
 * @tip Supports all HTML attributes of the rendered element
 * @tip Use bg, textColor, borderColor, fontSize props for quick styling
 * @tip Can be used as base for all other layout components
 */
export const Box: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>((props, ref) => {
  const { as: Component = 'div', className, bg, textColor, borderColor, fontSize, ...restProps } = props;

  return (
    <Component
      data-qa="box"
      ref={ref}
      className={cn(
        tailwindBoxVariants({
          bg,
          textColor,
          borderColor,
          fontSize,
        }),
        className,
      )}
      {...restProps}
    />
  );
});
