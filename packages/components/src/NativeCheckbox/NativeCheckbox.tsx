import React from 'react';

import type { HTMLTailwindStyledComponentProps } from '@/shared/types';

import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { Flex } from '@/layouts/Flex';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

const checkboxVariants = cva(
  'peer inline-block size-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-background align-middle text-primary checked:border-transparent checked:bg-current focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
);

export interface NativeCheckboxProps extends Omit<HTMLTailwindStyledComponentProps<'input'>, 'as' | 'children'> {
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
   * The parent class name for the checkbox
   */
  wrapperClassName?: string;
}

/**
 * NativeCheckbox Component
 *
 * A simpler checkbox component using native HTML input with custom styling.
 * Alternative to Checkbox component with lighter weight (no Radix UI dependency).
 * Use NativeCheckboxGroup for managing multiple checkbox options together.
 *
 * @example
 * // Basic usage
 * import { NativeCheckbox } from '@paalstack/react-ui';
 *
 * <NativeCheckbox label="Accept terms" />
 *
 * @example
 * // Controlled checkbox
 * const [checked, setChecked] = useState(false);
 *
 * <NativeCheckbox
 *   label="Subscribe to newsletter"
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 *
 * @example
 * // Required field with validation
 * <NativeCheckbox
 *   label="I agree to the terms"
 *   required
 *   isInvalid={!agreed}
 *   errorMessage="You must accept the terms to continue"
 * />
 *
 * @example
 * // Disabled checkbox
 * <NativeCheckbox
 *   label="Disabled option"
 *   checked
 *   disabled
 * />
 *
 * @example
 * // Swap label to right
 * <NativeCheckbox
 *   label="Checkbox on left"
 *   swapRight
 * />
 *
 * @example
 * // Form with multiple checkboxes
 * <form className="space-y-2">
 *   <NativeCheckbox label="Option 1" name="opt1" />
 *   <NativeCheckbox label="Option 2" name="opt2" />
 *   <NativeCheckbox label="Option 3" name="opt3" />
 *   <Button type="submit">Submit</Button>
 * </form>
 *
 * @example
 * // Terms acceptance
 * const [termsAccepted, setTermsAccepted] = useState(false);
 * const [privacyAccepted, setPrivacyAccepted] = useState(false);
 *
 * <div className="space-y-3">
 *   <NativeCheckbox
 *     label="I accept the Terms of Service"
 *     checked={termsAccepted}
 *     onCheckedChange={setTermsAccepted}
 *     required
 *   />
 *   <NativeCheckbox
 *     label="I accept the Privacy Policy"
 *     checked={privacyAccepted}
 *     onCheckedChange={setPrivacyAccepted}
 *     required
 *   />
 *   <Button disabled={!termsAccepted || !privacyAccepted}>
 *     Continue
 *   </Button>
 * </div>
 *
 * @example
 * // With custom styling
 * <NativeCheckbox
 *   label="Custom styled"
 *   wrapperClassName="bg-muted p-3 rounded"
 *   labelClassName="font-bold"
 *   className="size-5"
 * />
 *
 * @example
 * // Task list
 * const [tasks, setTasks] = useState([
 *   { id: 1, text: 'Task 1', completed: false },
 *   { id: 2, text: 'Task 2', completed: false },
 *   { id: 3, text: 'Task 3', completed: true },
 * ]);
 *
 * <div className="space-y-2">
 *   {tasks.map(task => (
 *     <NativeCheckbox
 *       key={task.id}
 *       label={task.text}
 *       checked={task.completed}
 *       onCheckedChange={(checked) => {
 *         setTasks(tasks.map(t =>
 *           t.id === task.id ? {...t, completed: checked} : t
 *         ));
 *       }}
 *       labelClassName={cn(task.completed && 'line-through text-muted-foreground')}
 *     />
 *   ))}
 * </div>
 *
 * @example
 * // Preferences form
 * <form onSubmit={handleSubmit} className="space-y-3">
 *   <h3 className="font-medium">Notification Preferences</h3>
 *   <NativeCheckbox label="Email notifications" name="emailNotif" />
 *   <NativeCheckbox label="SMS notifications" name="smsNotif" />
 *   <NativeCheckbox label="Push notifications" name="pushNotif" />
 *   <NativeCheckbox label="Marketing emails" name="marketingNotif" />
 *   <Button type="submit">Save Preferences</Button>
 * </form>
 *
 * @example
 * // Filter options
 * <div className="space-y-2">
 *   <h4 className="font-medium">Filters</h4>
 *   <NativeCheckbox label="In Stock" checked={filters.inStock} onCheckedChange={(val) => setFilters({...filters, inStock: val})} />
 *   <NativeCheckbox label="On Sale" checked={filters.onSale} onCheckedChange={(val) => setFilters({...filters, onSale: val})} />
 *   <NativeCheckbox label="New Arrivals" checked={filters.newArrivals} onCheckedChange={(val) => setFilters({...filters, newArrivals: val})} />
 * </div>
 *
 * @example
 * // Remember me checkbox
 * <div className="flex items-center gap-2">
 *   <NativeCheckbox
 *     label="Remember me"
 *     checked={rememberMe}
 *     onCheckedChange={setRememberMe}
 *   />
 * </div>
 *
 * @tip Use Checkbox component for advanced features like indeterminate state and color variants
 * @tip NativeCheckbox is lightweight and uses native HTML input, while Checkbox uses Radix UI
 * @tip Use NativeCheckboxGroup component for easier management of multiple checkbox options
 */
export const NativeCheckbox = React.forwardRef<HTMLInputElement, NativeCheckboxProps>(
  (
    {
      label,
      className,
      swapRight,
      labelClassName,
      isInvalid: invalid,
      errorMessage,
      wrapperClassName,
      onCheckedChange,
      labelProps,
      ...props
    },
    ref,
  ) => {
    const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
    const id = props.id || props.name || (label && typeof label === 'string' ? label : 'checkbox-input');
    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      onCheckedChange?.(checked);
      props.onChange?.(event);
    };
    return (
      <>
        <Flex className={cn('inline-flex items-center gap-2', wrapperClassName)}>
          <Box
            {...props}
            as="input"
            ref={ref}
            id={id}
            onChange={onChangeHandle}
            type="checkbox"
            className={cn(
              'native',
              checkboxVariants(),
              {
                'order-1': swapRight,
              },
              className,
            )}
            data-qa="checkbox-input"
          />
          {label && (
            <Label
              htmlFor={id}
              text={label}
              required={props.required}
              className={cn('cursor-pointer', labelClassName)}
              data-qa="checkbox-input-label"
              {...labelProps}
            />
          )}
        </Flex>
        {isInvalid && <ErrorMessage data-qa="checkbox-input-error-message" message={errorMessage} />}
      </>
    );
  },
);
NativeCheckbox.displayName = 'NativeCheckbox';
