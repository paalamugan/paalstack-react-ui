import type { BoxProps } from '@/layouts/Box';
import type { ComponentWithAs } from '@/shared/types';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { InputProps } from '../Input';
import type { TextareaProps } from '../Textarea';

import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { Button } from '../Button';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

const inputGroupAddonVariants = cva(
  "text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none",
  {
    variants: {
      align: {
        'inline-start': 'pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first',
        'inline-end': 'pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last',
        'block-start':
          'px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start',
        'block-end': 'px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
);

const inputGroupButtonVariants = cva('gap-2 text-sm shadow-none flex items-center', {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: '',
      'icon-xs': 'size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0',
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

/**
 * InputGroup Component Family
 *
 * Add addons, buttons, and helper content to inputs and textareas.
 * Perfect for search bars, URLs, currency inputs, and complex form controls.
 *
 * Two APIs: use **InputGroupRoot** with InputGroupInput, InputGroupAddon, etc. for full control;
 * use **InputGroup** with inputProps/textareaProps, addonStart, addonEnd for a single-component API.
 *
 * @example
 * // Prop-based API: search with icon
 * import { InputGroup } from '@paalstack/react-ui';
 * import { SearchIcon } from '@/icons/rx';
 *
 * <InputGroup
 *   inputProps={{ placeholder: 'Search...' }}
 *   addonEnd={<SearchIcon />}
 * />
 *
 * @example
 * // Compound API: basic input with icon
 * import { InputGroupRoot, InputGroupInput, InputGroupAddon } from '@paalstack/react-ui';
 * import { SearchIcon } from '@/icons/rx';
 *
 * <InputGroupRoot>
 *   <InputGroupInput placeholder="Search..." />
 *   <InputGroupAddon>
 *     <SearchIcon />
 *   </InputGroupAddon>
 * </InputGroupRoot>
 *
 * @example
 * // Input with text addon (inline-start)
 * <InputGroup>
 *   <InputGroupInput placeholder="Amount" />
 *   <InputGroupAddon align="inline-start">
 *     <InputGroupText>$</InputGroupText>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Input with text addon (inline-end)
 * <InputGroup>
 *   <InputGroupInput placeholder="Amount" />
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupText>USD</InputGroupText>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Input with button
 * <InputGroup>
 *   <InputGroupInput placeholder="https://example.com" />
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupButton>Search</InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Input with multiple buttons
 * <InputGroup>
 *   <InputGroupInput placeholder="File path" />
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupButton size="icon-xs" aria-label="Copy">
 *       <CopyIcon />
 *     </InputGroupButton>
 *     <InputGroupButton size="icon-xs" aria-label="Delete">
 *       <TrashIcon />
 *     </InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // URL input with prefix and suffix
 * <InputGroup>
 *   <InputGroupInput placeholder="yoursite" />
 *   <InputGroupAddon align="inline-start">
 *     <InputGroupText>https://</InputGroupText>
 *   </InputGroupAddon>
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupText>.com</InputGroupText>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Textarea with header (block-start)
 * <InputGroup>
 *   <InputGroupTextarea placeholder="Enter code..." rows={6} />
 *   <InputGroupAddon align="block-start">
 *     <InputGroupText>script.js</InputGroupText>
 *     <InputGroupButton size="icon-xs" aria-label="Copy">
 *       <CopyIcon />
 *     </InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Textarea with footer (block-end)
 * <InputGroup>
 *   <InputGroupTextarea placeholder="Write your message..." rows={4} />
 *   <InputGroupAddon align="block-end">
 *     <InputGroupText>0/280</InputGroupText>
 *     <InputGroupButton>Post</InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Email input
 * <InputGroup>
 *   <InputGroupInput type="email" placeholder="username" />
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupText>@company.com</InputGroupText>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Search with loading spinner
 * const [isLoading, setIsLoading] = useState(false);
 *
 * <InputGroup>
 *   <InputGroupInput placeholder="Search..." />
 *   <InputGroupAddon>
 *     {isLoading ? <SpinnerIcon className="animate-spin" /> : <SearchIcon />}
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Input with kbd shortcut
 * <InputGroup>
 *   <InputGroupInput placeholder="Search..." />
 *   <InputGroupAddon>
 *     <Kbd>⌘K</Kbd>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Currency input with both prefix and suffix
 * <InputGroup>
 *   <InputGroupInput type="number" placeholder="0.00" />
 *   <InputGroupAddon align="inline-start">
 *     <InputGroupText>$</InputGroupText>
 *   </InputGroupAddon>
 *   <InputGroupAddon align="inline-end">
 *     <InputGroupText>USD</InputGroupText>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @example
 * // Character counter textarea
 * const [text, setText] = useState('');
 * const maxLength = 280;
 *
 * <InputGroup>
 *   <InputGroupTextarea
 *     value={text}
 *     onChange={(e) => setText(e.target.value)}
 *     placeholder="What's happening?"
 *     rows={4}
 *   />
 *   <InputGroupAddon align="block-end">
 *     <InputGroupText>{text.length}/{maxLength}</InputGroupText>
 *     <InputGroupButton disabled={!text}>Post</InputGroupButton>
 *   </InputGroupAddon>
 * </InputGroup>
 *
 * @tip Use align="inline-start" or "inline-end" for InputGroupInput
 * @tip Use align="block-start" or "block-end" for InputGroupTextarea
 * @tip Always place InputGroupAddon after the input in DOM for focus management
 * @tip Use InputGroupButton for interactive elements
 * @tip Use InputGroupText for static text content
 * @tip Multiple buttons can be placed in a single InputGroupAddon
 * @tip Add data-slot="input-group-control" to custom inputs for focus handling
 */

/**
 * Root component for the compound InputGroup API. Compose with InputGroupInput (or InputGroupTextarea),
 * InputGroupAddon, InputGroupText, and InputGroupButton. For a simpler API, use the prop-based **InputGroup**
 * with inputProps/textareaProps, addonStart, and addonEnd.
 *
 * @example
 * <InputGroupRoot>
 *   <InputGroupInput placeholder="Search..." />
 *   <InputGroupAddon><SearchIcon /></InputGroupAddon>
 * </InputGroupRoot>
 */
const InputGroupRoot: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>(({ className, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="input-group"
      data-qa="input-group"
      role="group"
      className={cn(
        'group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5',
        className,
      )}
      {...props}
    />
  );
});
InputGroupRoot.displayName = 'InputGroupRoot';

export type InputGroupAddonProps = BoxProps & VariantProps<typeof inputGroupAddonVariants>;
const InputGroupAddon: ComponentWithAs<'div', InputGroupAddonProps> = forwardRef<InputGroupAddonProps, 'div'>(
  ({ className, align = 'inline-start', ...props }, ref) => {
    return (
      <Box
        ref={ref}
        role="group"
        data-slot="input-group-addon"
        data-align={align}
        data-qa="input-group-addon"
        className={cn(inputGroupAddonVariants({ align }), className)}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if ((e.target as HTMLElement).closest('button')) {
            return;
          }
          e.currentTarget.parentElement?.querySelector('input')?.focus();
        }}
        {...props}
      />
    );
  },
);

export type InputGroupButtonProps = Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>;
const InputGroupButton = forwardRef<InputGroupButtonProps, typeof Button>(
  ({ className, type = 'button', variant = 'ghost', size = 'xs', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        type={type}
        data-slot="input-group-button"
        data-qa="input-group-button"
        data-size={size}
        variant={variant}
        className={cn(inputGroupButtonVariants({ size }), className)}
        {...props}
      />
    );
  },
);

const InputGroupInput: ComponentWithAs<'input', InputProps> = forwardRef<InputProps, 'input'>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-slot="input-group-control"
        data-qa="input-group-input"
        inputClassName={cn(
          'flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent',
          className,
        )}
        {...props}
      />
    );
  },
);

const InputGroupTextarea: ComponentWithAs<'textarea', TextareaProps> = forwardRef<TextareaProps, 'textarea'>(
  ({ className, ...props }, ref) => {
    return (
      <Textarea
        ref={ref}
        data-slot="input-group-control"
        data-qa="input-group-textarea"
        className={cn(
          'flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent',
          className,
        )}
        {...props}
      />
    );
  },
);

const InputGroupText: ComponentWithAs<'span', BoxProps> = forwardRef<BoxProps, 'span'>(
  ({ className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        data-slot="input-group-text"
        data-qa="input-group-text"
        className={cn(
          "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        {...props}
      />
    );
  },
);

export interface InputGroupProps extends Omit<React.ComponentPropsWithoutRef<typeof InputGroupRoot>, 'children'> {
  /** Optional className for the root */
  className?: string;
  /** Addon content before the input (e.g. icon, prefix text) */
  addonStart?: React.ReactNode;
  /** Alignment for start addon: inline-start (default) or block-start */
  addonStartAlign?: 'inline-start' | 'block-start';
  /** Addon content after the input (e.g. suffix text, button) */
  addonEnd?: React.ReactNode;
  /** Alignment for end addon: inline-end (default) or block-end */
  addonEndAlign?: 'inline-end' | 'block-end';
  /** Input props (use with InputGroupInput); omit when using textareaProps or compound children */
  inputProps?: InputProps;
  /** Textarea props (use with InputGroupTextarea); omit when using inputProps or compound children */
  textareaProps?: TextareaProps;
  /** Props for the start addon wrapper (InputGroupAddon) */
  addonStartProps?: Omit<InputGroupAddonProps, 'align' | 'children'>;
  /** Props for the end addon wrapper (InputGroupAddon) */
  addonEndProps?: Omit<InputGroupAddonProps, 'align' | 'children'>;
  /** Children for compound API (InputGroupInput, InputGroupAddon, etc.); ignored when inputProps or textareaProps is set */
  children?: React.ReactNode;
}

/**
 * Single-component InputGroup that composes addons and input/textarea via props.
 * Use InputGroupRoot with InputGroupInput, InputGroupAddon, etc. when you need full control.
 *
 * @example
 * // Prop-based: search input with icon
 * import { InputGroup } from '@paalstack/react-ui';
 * import { SearchIcon } from '@/icons/rx';
 *
 * <InputGroup
 *   inputProps={{ placeholder: 'Search...' }}
 *   addonEnd={<SearchIcon />}
 *   addonEndAlign="inline-end"
 * />
 *
 * @example
 * // Prop-based: currency with prefix and suffix
 * <InputGroup
 *   inputProps={{ type: 'number', placeholder: '0.00' }}
 *   addonStart={<InputGroupText>$</InputGroupText>}
 *   addonEnd={<InputGroupText>USD</InputGroupText>}
 * />
 *
 * @example
 * // Prop-based: URL with prefix
 * <InputGroup
 *   inputProps={{ placeholder: 'yoursite' }}
 *   addonStart={<InputGroupText>https://</InputGroupText>}
 *   addonEnd={<InputGroupText>.com</InputGroupText>}
 * />
 *
 * @example
 * // Compound API (full control)
 * import { InputGroup, InputGroupInput, InputGroupAddon } from '@paalstack/react-ui';
 *
 * <InputGroup>
 *   <InputGroupInput placeholder="Search..." />
 *   <InputGroupAddon>
 *     <SearchIcon />
 *   </InputGroupAddon>
 * </InputGroup>
 */
const InputGroup: React.FC<InputGroupProps> = ({
  className,
  addonStart,
  addonStartAlign = 'inline-start',
  addonEnd,
  addonEndAlign = 'inline-end',
  inputProps,
  textareaProps,
  addonStartProps,
  addonEndProps,
  children,
  'aria-invalid': invalid,
  'aria-describedby': describedby,
  id: id,
  ...rootProps
}) => {
  const usePropsApi = !!(inputProps || textareaProps);

  if (usePropsApi) {
    const control = inputProps ? (
      <InputGroupInput id={id} aria-describedby={describedby} aria-invalid={invalid} {...inputProps} />
    ) : textareaProps ? (
      <InputGroupTextarea id={id} aria-describedby={describedby} aria-invalid={invalid} {...textareaProps} />
    ) : null;

    return (
      <InputGroupRoot className={className} {...rootProps}>
        {!!addonStart && (
          <InputGroupAddon align={addonStartAlign} {...addonStartProps}>
            {addonStart}
          </InputGroupAddon>
        )}
        {control}
        {!!addonEnd && (
          <InputGroupAddon align={addonEndAlign} {...addonEndProps}>
            {addonEnd}
          </InputGroupAddon>
        )}
      </InputGroupRoot>
    );
  }

  return (
    <InputGroupRoot className={className} {...rootProps}>
      {children}
    </InputGroupRoot>
  );
};
InputGroup.displayName = 'InputGroup';

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupRoot,
  InputGroupText,
  InputGroupTextarea,
  inputGroupAddonVariants,
  inputGroupButtonVariants,
};
