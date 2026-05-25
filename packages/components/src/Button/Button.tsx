import type { BoxProps } from '@/layouts/Box';
import type { AllColorVariant } from '@/shared/constants';
import type { ComponentWithAs } from '@/shared/types';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { ButtonVariant } from './constants';

import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef, Slot } from '@/shared/utils';

import { Spinner } from '../Spinner';
import { BUTTON_COLOR_VARIANT_MAPPING, BUTTON_ROUNDED, BUTTON_SIZE, LOADING_ICON_SIZE } from './constants';

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:translate-y-px [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: BUTTON_COLOR_VARIANT_MAPPING['solid']['primary'],
        primary: BUTTON_COLOR_VARIANT_MAPPING['solid']['primary'],
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        info: BUTTON_COLOR_VARIANT_MAPPING['solid']['info'],
        success: BUTTON_COLOR_VARIANT_MAPPING['solid']['success'],
        warning: BUTTON_COLOR_VARIANT_MAPPING['solid']['warning'],
        danger: BUTTON_COLOR_VARIANT_MAPPING['solid']['danger'],
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        destructive:
          'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      rounded: BUTTON_ROUNDED,
      size: BUTTON_SIZE,
    },
    defaultVariants: {
      rounded: 'md',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends
    Omit<BoxProps, 'size' | 'rounded' | 'textColor'>,
    Omit<VariantProps<typeof buttonVariants>, 'variant'>,
    ButtonPrimitive.Props {
  asChild?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Optional label for the button
   */
  label?: string;

  /**
   * Optional variant for the button (solid, outline, ghost, soft, link).
   * @default default
   */
  variant?: ButtonVariant | 'default' | 'destructive' | 'secondary';

  /**
   * Optional color for the button.
   * @default primary
   */
  color?: AllColorVariant;
  /**
   * Optional left icon for the button
   */
  leftIcon?: React.ReactNode;
  /**
   * Optional right icon for the button
   */
  rightIcon?: React.ReactNode;
  /**
   * Optional loading state for the button
   */
  isLoading?: boolean;
  /**
   * Optional loading text for the button
   */
  loadingText?: string;
  /**
   * Optional unstyled button
   */
  unstyled?: boolean;
}

/**
 * Button Component
 *
 * A versatile button component with multiple variants, colors, sizes, and loading states.
 *
 * @example
 * // Basic usage
 * import { Button } from '@paalstack/react-ui';
 *
 * <Button>Click me</Button>
 *
 * @example
 * // shadcn v4 variants
 * <Button variant="default">Default</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="outline">Outline</Button>
 * <Button variant="ghost">Ghost</Button>
 * <Button variant="destructive">Destructive</Button>
 * <Button variant="link">Link</Button>
 *
 * @example
 * // Project color variants with solid/soft/surface/ghost/outline
 * <Button variant="solid" color="primary">Primary Button</Button>
 * <Button variant="outline" color="secondary">Outline Button</Button>
 * <Button variant="ghost" color="success">Ghost Button</Button>
 * <Button variant="soft" color="danger">Soft Button</Button>
 *
 * @example
 * // With icons
 * import { FiPlus, FiArrowRight } from '@paalstack/react-icons/fi';
 *
 * <Button leftIcon={<FiPlus />}>Add Item</Button>
 * <Button rightIcon={<FiArrowRight />}>Next</Button>
 * <Button leftIcon={<FiPlus />} rightIcon={<FiArrowRight />}>Both Icons</Button>
 *
 * @example
 * // Sizes
 * <Button size="xs">XSmall</Button>
 * <Button size="sm">Small</Button>
 * <Button size="default">Default</Button>
 * <Button size="lg">Large</Button>
 * <Button size="icon"><PlusIcon /></Button>
 * <Button size="icon-sm"><PlusIcon /></Button>
 * <Button size="icon-lg"><PlusIcon /></Button>
 *
 * @example
 * // Rounded corners
 * <Button rounded="sm">Rounded SM</Button>
 * <Button rounded="md">Rounded MD</Button>
 * <Button rounded="full">Rounded Full</Button>
 *
 * @example
 * // Loading states
 * <Button isLoading>Loading...</Button>
 * <Button isLoading loadingText="Processing...">Submit</Button>
 *
 * @example
 * // As a link using asChild
 * import Link from 'next/link';
 *
 * <Button asChild>
 *   <Link href="/dashboard">Go to Dashboard</Link>
 * </Button>
 *
 * @example
 * // Polymorphic — render as an anchor
 * <Button as="a" href="/">Link Button</Button>
 *
 * @example
 * // Unstyled
 * <Button unstyled>Unstyled Button</Button>
 */
const Button: ComponentWithAs<'button', ButtonProps> = forwardRef<ButtonProps, 'button'>(
  (
    {
      as: Component = ButtonPrimitive,
      className,
      variant = 'solid',
      color,
      size,
      label,
      rounded,
      children,
      leftIcon,
      rightIcon,
      asChild = false,
      isLoading,
      loadingText,
      unstyled,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : Component;

    let buttonClassName = '';
    const isColorVariant = ['outline', 'ghost', 'link', 'destructive', 'secondary', 'default'].includes(
      variant as string,
    );

    if (isColorVariant && !color) {
      buttonClassName = buttonVariants({
        variant: variant as Extract<
          ButtonProps['variant'],
          'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary'
        >,
        size, // if size is provided, it will override the size variant
        rounded, // if rounded is provided, it will override the rounded variant
      });
    } else if (!isColorVariant || variant) {
      buttonClassName = BUTTON_COLOR_VARIANT_MAPPING[variant as ButtonVariant]?.[color || 'primary'] ?? '';
    }

    return (
      <Box
        data-qa="button"
        data-slot="button"
        as={Comp}
        {...props}
        className={
          unstyled
            ? className
            : cn(
                buttonVariants({ size, rounded }), // this needs to be here to ensure the size and rounded variants are applied
                buttonClassName, // this needs to be here to ensure class name overrides are applied
                {
                  'px-0 py-0': variant === 'link',
                },
                className,
              )
        }
        ref={ref}
        disabled={isLoading || disabled}
      >
        {asChild ? (
          children
        ) : (
          <>
            {!isLoading && leftIcon}
            {isLoading && (
              <Spinner
                data-qa="loading-icon"
                className={cn('size-4', size && LOADING_ICON_SIZE[size as keyof typeof LOADING_ICON_SIZE])}
              />
            )}
            {isLoading && loadingText ? loadingText : label || children}
            {!isLoading && rightIcon}
          </>
        )}
      </Box>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
