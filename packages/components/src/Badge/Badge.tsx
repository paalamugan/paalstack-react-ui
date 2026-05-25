import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib';

const badgeVariants = cva(
  'h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        primary: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
        tertiary: 'bg-tertiary text-tertiary-foreground [a]:hover:bg-tertiary/80',
        destructive:
          'bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20',
        danger: 'bg-danger text-danger-foreground [a]:hover:bg-danger/80',
        warning: 'bg-warning text-warning-foreground [a]:hover:bg-warning/80',
        success: 'bg-success text-success-foreground [a]:hover:bg-success/80',
        info: 'bg-info text-info-foreground [a]:hover:bg-info/80',
        outline: 'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
        ghost: 'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
        link: 'text-primary underline-offset-4 hover:underline',
        muted: 'bg-muted text-muted-foreground [a]:hover:bg-muted/80',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-0.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface BadgeProps extends useRender.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
  /**
   * Optional label for the badge
   */
  label?: React.ReactNode;
}

/**
 * Badge Component
 *
 * Displays a badge or a component that looks like a badge.
 * Perfect for status indicators, labels, tags, and notifications.
 *
 * @example
 * // Basic usage
 * import { Badge } from '@paalstack/react-ui';
 *
 * <Badge label="New" />
 * // or
 * <Badge>New</Badge>
 *
 * @example
 * // Different color variants
 * <Badge variant="primary">Primary</Badge>
 * <Badge variant="secondary">Secondary</Badge>
 * <Badge variant="success">Success</Badge>
 * <Badge variant="warning">Warning</Badge>
 * <Badge variant="danger">Danger</Badge>
 * <Badge variant="info">Info</Badge>
 * <Badge variant="outline">Outline</Badge>
 * <Badge variant="destructive">Destructive</Badge>
 * <Badge variant="ghost">Ghost</Badge>
 * <Badge variant="link">Link</Badge>
 *
 * @example
 * // Different sizes
 * <Badge size="sm">Small</Badge>
 * <Badge size="md">Medium</Badge>
 * <Badge size="lg">Large</Badge>
 *
 * @example
 * // With render prop for composition
 * <Badge variant="outline" render={<a href="/tags/react" />}>React</Badge>
 */
const Badge = ({ className, variant = 'default', size, label, children, render, ...props }: BadgeProps) =>
  useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant, size }), className),
        children: label || children,
      },
      { 'data-qa': 'badge', ...props } as React.ComponentPropsWithoutRef<'span'>,
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  });
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
