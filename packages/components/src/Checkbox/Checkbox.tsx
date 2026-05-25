import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { cva } from 'class-variance-authority';

import { RxCheck as CheckIcon, RxMinus as MinusIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

const checkboxVariants = cva(
  'border-input dark:bg-input/30 aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 cursor-pointer aria-disabled:cursor-not-allowed aria-disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground',
        secondary: 'data-checked:border-secondary data-checked:bg-secondary data-checked:text-secondary-foreground',
        tertiary: 'data-checked:border-tertiary data-checked:bg-tertiary data-checked:text-tertiary-foreground',
        destructive:
          'data-checked:border-destructive data-checked:bg-destructive data-checked:text-destructive-foreground',
        info: 'data-checked:border-info data-checked:bg-info data-checked:text-info-foreground',
        success: 'data-checked:border-success data-checked:bg-success data-checked:text-success-foreground',
        warning: 'data-checked:border-warning data-checked:bg-warning data-checked:text-warning-foreground',
        danger: 'data-checked:border-danger data-checked:bg-danger data-checked:text-danger-foreground',
        muted: 'data-checked:border-muted data-checked:bg-muted data-checked:text-muted-foreground',
        accent: 'data-checked:border-accent data-checked:bg-accent data-checked:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type CheckboxRootProps = CheckboxPrimitive.Root.Props & {
  variant?: CheckboxProps['variant'];
  indeterminate?: boolean;
};

const CheckboxRoot = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxRootProps>(
  ({ className, variant, indeterminate, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ variant }), className)}
      data-slot="checkbox"
      data-qa="checkbox"
      indeterminate={indeterminate}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
        data-slot="checkbox-indicator"
        data-qa="checkbox-indicator"
      >
        {indeterminate ? (
          <MinusIcon className="size-full" data-qa="checkbox-indeterminate" />
        ) : (
          <CheckIcon data-qa="checkbox-checked" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
CheckboxRoot.displayName = 'CheckboxRoot';

export interface CheckboxProps extends CheckboxRootProps {
  /** Label for the checkbox */
  label?: React.ReactNode;
  /** Props for the label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /** Whether the checkbox is checked or not */
  checked?: boolean;
  /** Whether the checkbox is disabled or not */
  disabled?: boolean;
  /** Callback when the checkbox value changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Variant of the checkbox */
  variant?: VariantProps<typeof checkboxVariants>['variant'];
  /**
   * Whether the checkbox is swapped to the right or not
   */
  swapRight?: boolean;
  /**
   * The class name for the checkbox label
   */
  labelClassName?: string;
  /**
   * Whether the checkbox is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the checkbox is invalid
   */
  isInvalid?: boolean;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
  /**
   * Whether the checkbox is indeterminate or not
   */
  indeterminate?: boolean;
  /**
   * The class name for the checkbox root container
   */
  rootClassName?: string;
}

/**
 * Checkbox Component
 *
 * A checkbox component that allows users to select one or multiple items from a list.
 * Supports different color variants, indeterminate state, labels, and error messages.
 *
 * @example
 * // Basic usage
 * import { Checkbox } from '@paalstack/react-ui';
 *
 * <Checkbox label="Accept terms and conditions" />
 *
 * @example
 * // Controlled checkbox
 * const [checked, setChecked] = useState(false);
 *
 * <Checkbox
 *   label="Subscribe to newsletter"
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 *
 * @example
 * // Different color variants
 * <Checkbox variant="primary" label="Primary" />
 * <Checkbox variant="success" label="Success" />
 * <Checkbox variant="danger" label="Danger" />
 * <Checkbox variant="warning" label="Warning" />
 * <Checkbox variant="info" label="Info" />
 *
 * @example
 * // Disabled checkbox
 * <Checkbox label="Disabled checkbox" disabled checked />
 *
 * @example
 * // Required checkbox with validation
 * <Checkbox
 *   label="I agree to the terms"
 *   required
 *   isInvalid
 *   errorMessage="You must accept the terms to continue"
 * />
 *
 * @example
 * // Indeterminate state (useful for "select all" functionality)
 * const [checkedItems, setCheckedItems] = useState([false, false, false]);
 * const allChecked = checkedItems.every(Boolean);
 * const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
 *
 * <Checkbox
 *   label="Select all"
 *   checked={allChecked}
 *   indeterminate={isIndeterminate}
 *   onCheckedChange={(checked) => setCheckedItems([checked, checked, checked])}
 * />
 * {checkedItems.map((checked, index) => (
 *   <Checkbox
 *     key={index}
 *     label={`Item ${index + 1}`}
 *     checked={checked}
 *     onCheckedChange={(value) => {
 *       const newItems = [...checkedItems];
 *       newItems[index] = value;
 *       setCheckedItems(newItems);
 *     }}
 *   />
 * ))}
 *
 * @example
 * // Swap label to the right side
 * <Checkbox label="Checkbox on left" swapRight />
 *
 * @example
 * // With custom styling
 * <Checkbox
 *   label="Custom styled"
 *   rootClassName="p-4 bg-gray-50 rounded"
 *   labelClassName="font-bold text-lg"
 *   className="size-6"
 * />
 *
 * @example
 * // Form integration
 * <form>
 *   <Checkbox name="terms" label="Accept terms" required />
 *   <Checkbox name="marketing" label="Receive marketing emails" />
 *   <button type="submit">Submit</button>
 * </form>
 */
type CheckboxRef = React.ElementRef<typeof CheckboxPrimitive.Root>;

const CheckboxForwardRef = React.forwardRef<CheckboxRef, CheckboxProps>(function Checkbox(
  {
    label,
    className,
    rootClassName,
    swapRight,
    labelClassName,
    isInvalid: invalid,
    errorMessage,
    indeterminate,
    checked,
    labelProps,
    ...props
  },
  ref,
) {
  const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
  const id = props.id || props.name || label?.toString() || '';
  return (
    <>
      <Box className={cn('flex items-center gap-2', rootClassName)}>
        <CheckboxRoot
          ref={ref}
          {...props}
          id={id}
          checked={indeterminate ? true : checked}
          indeterminate={indeterminate}
          {...(isInvalid ? { 'aria-invalid': true } : {})}
          className={cn({ 'order-1': swapRight }, className)}
        />
        {label && (
          <Label
            htmlFor={id}
            text={label}
            required={props.required}
            className={cn('cursor-pointer', labelClassName)}
            data-qa="checkbox-label"
            {...labelProps}
          />
        )}
      </Box>
      {isInvalid && <ErrorMessage data-qa="checkbox-error-message" message={errorMessage} />}
    </>
  );
});

CheckboxForwardRef.displayName = 'Checkbox';

const Checkbox = CheckboxForwardRef;

export { Checkbox, CheckboxRoot };
