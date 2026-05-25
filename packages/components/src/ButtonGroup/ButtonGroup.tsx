import * as React from 'react';

import type { BoxProps, BoxPropsWithRef } from '@/layouts/Box';
import type { VariantProps } from 'class-variance-authority';
import type { ButtonProps } from '../Button/Button';

import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { Slot } from '@/shared/utils';

import { Button } from '../Button';
import { Separator } from '../Separator';

// ─── Variants ────────────────────────────────────────────────────────────────

const buttonGroupVariants = cva(
  "has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          '[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! *:data-slot:rounded-r-none [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0',
        vertical:
          '[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! flex-col *:data-slot:rounded-b-none [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

// ─── Primitive components (Composition API) ───────────────────────────────────

const ButtonGroupRoot: React.FC<BoxPropsWithRef<'div', VariantProps<typeof buttonGroupVariants>>> = ({
  className,
  orientation,
  ...props
}) => (
  <Box
    role="group"
    data-slot="button-group"
    data-qa="button-group"
    data-orientation={orientation}
    className={cn(buttonGroupVariants({ orientation }), className)}
    {...props}
  />
);
ButtonGroupRoot.displayName = 'ButtonGroupRoot';

const ButtonGroupText = ({ className, render, ...props }: useRender.ComponentProps<'div'>) =>
  useRender({
    defaultTagName: 'div',
    props: mergeProps<'div'>(
      {
        'data-slot': 'button-group-text',
        'data-qa': 'button-group-text',
        className: cn(
          "flex items-center gap-2 rounded-lg border bg-muted px-2.5 text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          className,
        ),
      } as React.ComponentPropsWithoutRef<'div'>,
      props,
    ),
    render,
    state: { slot: 'button-group-text' },
  });
ButtonGroupText.displayName = 'ButtonGroupText';

export interface ButtonGroupTextAsChildProps {
  /** Render the text wrapper as a child element (e.g. a Label). */
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ButtonGroupTextAsChild = ({ asChild = false, className, children, ...props }: ButtonGroupTextAsChildProps) => {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot="button-group-text"
      data-qa="button-group-text"
      className={cn(
        "flex items-center gap-2 rounded-lg border bg-muted px-2.5 text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
ButtonGroupTextAsChild.displayName = 'ButtonGroupTextAsChild';

export interface ButtonGroupSeparatorProps extends React.ComponentProps<typeof Separator> {}

const ButtonGroupSeparator = ({ className, orientation = 'vertical', ...props }: ButtonGroupSeparatorProps) => (
  <Separator
    data-slot="button-group-separator"
    data-qa="button-group-separator"
    orientation={orientation}
    className={cn(
      'relative self-stretch bg-input data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto',
      className,
    )}
    {...props}
  />
);
ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';

// ─── Props API ────────────────────────────────────────────────────────────────

/**
 * A single button item in the props-based ButtonGroup API.
 * Use `separator: true` to insert a divider between buttons.
 */
export interface ButtonGroupItem extends ButtonProps {
  /** Unique key for the item. Falls back to `label` or index. */
  key?: string;
  /** Whether to render a separator before this item. */
  separator?: boolean;
}

export interface ButtonGroupProps extends Omit<BoxProps, 'children'>, VariantProps<typeof buttonGroupVariants> {
  /** Optional class name for the group container. */
  className?: string;
  /**
   * The buttons to render inside the group.
   * Set `separator: true` on an item to insert a `ButtonGroupSeparator` before it.
   */
  items: ButtonGroupItem[];
  /**
   * Layout direction of the group.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Optional `aria-label` for the group. */
  'aria-label'?: string;
}

/**
 * ButtonGroup Component
 *
 * A container that groups related buttons together with consistent styling and
 * collapsed borders between adjacent items.
 *
 * Supports both a **props API** for quick setup and a **composition API** for
 * full control via `ButtonGroupRoot`, `ButtonGroupSeparator`, and `ButtonGroupText`.
 *
 * @example
 * // Props API — basic horizontal group
 * import { ButtonGroup } from '@paalstack/react-ui';
 *
 * <ButtonGroup
 *   items={[
 *     { label: 'Archive', onClick: () => {} },
 *     { label: 'Report', onClick: () => {} },
 *     { label: 'Snooze', onClick: () => {} },
 *   ]}
 * />
 *
 * @example
 * // Props API — with a separator
 * <ButtonGroup
 *   items={[
 *     { label: 'Copy', onClick: handleCopy },
 *     { separator: true, label: 'Paste', onClick: handlePaste },
 *   ]}
 * />
 *
 * @example
 * // Props API — vertical orientation
 * <ButtonGroup
 *   orientation="vertical"
 *   items={[
 *     { label: 'Option A' },
 *     { label: 'Option B' },
 *     { label: 'Option C' },
 *   ]}
 * />
 *
 * @example
 * // Props API — mixed variants
 * <ButtonGroup
 *   items={[
 *     { label: 'Save', variant: 'default' },
 *     { separator: true, label: 'Discard', variant: 'outline' },
 *   ]}
 * />
 *
 * @example
 * // Composition API — full control
 * import {
 *   ButtonGroupRoot,
 *   ButtonGroupSeparator,
 *   ButtonGroupText,
 * } from '@paalstack/react-ui';
 *
 * <ButtonGroupRoot>
 *   <Button>Archive</Button>
 *   <ButtonGroupSeparator />
 *   <Button>Report</Button>
 * </ButtonGroupRoot>
 *
 * @example
 * // Composition API — with text label
 * <ButtonGroupRoot>
 *   <ButtonGroupText>$</ButtonGroupText>
 *   <Input placeholder="Amount" />
 *   <Button>Pay</Button>
 * </ButtonGroupRoot>
 *
 * @example
 * // Composition API — vertical
 * <ButtonGroupRoot orientation="vertical" aria-label="Actions">
 *   <Button>Option A</Button>
 *   <Button>Option B</Button>
 *   <Button>Option C</Button>
 * </ButtonGroupRoot>
 */
const ButtonGroup: React.FC<ButtonGroupProps> = ({ items, orientation = 'horizontal', className, ...props }) => (
  <ButtonGroupRoot orientation={orientation} className={className} {...props}>
    {items.map((item, index) => {
      const { key, separator, label, children, ...buttonProps } = item;
      const itemKey = key ?? (typeof label === 'string' ? label : String(index));

      return (
        <React.Fragment key={itemKey}>
          {separator && <ButtonGroupSeparator orientation={orientation === 'vertical' ? 'horizontal' : 'vertical'} />}
          <Button {...buttonProps}>{label ?? children}</Button>
        </React.Fragment>
      );
    })}
  </ButtonGroupRoot>
);
ButtonGroup.displayName = 'ButtonGroup';

export {
  ButtonGroup,
  ButtonGroupRoot,
  ButtonGroupSeparator,
  ButtonGroupText,
  ButtonGroupTextAsChild,
  buttonGroupVariants,
};
