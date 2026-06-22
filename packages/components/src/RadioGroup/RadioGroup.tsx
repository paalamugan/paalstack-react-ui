import * as React from 'react';

import type { ColorVariant } from '@/shared/constants';
import type { OptionType } from '@/shared/types';

import { Radio as RadioPrimitive } from '@base-ui/react/radio';
import { RadioGroup as RadioGroupRoot } from '@base-ui/react/radio-group';
import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

const radioGroupVariants = cva(
  'group/radio-group-item peer cursor-pointer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
  {
    variants: {
      variant: {
        primary:
          'data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground aria-invalid:data-checked:border-primary dark:data-checked:bg-primary',
        secondary:
          'data-checked:border-secondary data-checked:bg-secondary data-checked:text-secondary-foreground aria-invalid:data-checked:border-secondary dark:data-checked:bg-secondary',
        tertiary:
          'data-checked:border-tertiary data-checked:bg-tertiary data-checked:text-tertiary-foreground aria-invalid:data-checked:border-tertiary dark:data-checked:bg-tertiary',
        destructive:
          'data-checked:border-destructive data-checked:bg-destructive data-checked:text-destructive-foreground aria-invalid:data-checked:border-destructive dark:data-checked:bg-destructive',
        info: 'data-checked:border-info data-checked:bg-info data-checked:text-info-foreground aria-invalid:data-checked:border-info dark:data-checked:bg-info',
        success:
          'data-checked:border-success data-checked:bg-success data-checked:text-success-foreground aria-invalid:data-checked:border-success dark:data-checked:bg-success',
        warning:
          'data-checked:border-warning data-checked:bg-warning data-checked:text-warning-foreground aria-invalid:data-checked:border-warning dark:data-checked:bg-warning',
        danger:
          'data-checked:border-danger data-checked:bg-danger data-checked:text-danger-foreground aria-invalid:data-checked:border-danger dark:data-checked:bg-danger',
        muted:
          'data-checked:border-muted data-checked:bg-muted data-checked:text-muted-foreground aria-invalid:data-checked:border-muted dark:data-checked:bg-muted',
        accent:
          'data-checked:border-accent data-checked:bg-accent data-checked:text-accent-foreground aria-invalid:data-checked:border-accent dark:data-checked:bg-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const RadioGroupRootComponent = <TValue,>({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupRoot<TValue>>) => (
  <RadioGroupRoot
    className={cn('grid w-full gap-2', className)}
    data-slot="radio-group"
    data-qa="radio-group"
    {...props}
  />
);
RadioGroupRootComponent.displayName = 'RadioGroupRoot';

const RadioGroupRootItem = <TValue,>({
  className,
  variant = 'primary',
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Root<TValue>> & { variant?: ColorVariant }) => (
  <RadioPrimitive.Root
    data-slot="radio-group-item"
    data-qa="radio-group-item"
    className={cn(radioGroupVariants({ variant }), className)}
    {...props}
  >
    <RadioPrimitive.Indicator
      data-slot="radio-group-indicator"
      data-qa="radio-group-indicator"
      className="flex size-4 items-center justify-center"
    >
      <span className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" />
    </RadioPrimitive.Indicator>
  </RadioPrimitive.Root>
);
RadioGroupRootItem.displayName = 'RadioGroupRootItem';

const RadioGroupItem = RadioGroupRootItem;
RadioGroupItem.displayName = 'RadioGroupItem';

export interface RadioGroupProps<TValue = string> extends RadioGroupRoot.Props<TValue> {
  /** Array of options to render */
  options: Array<OptionType | string | number>;
  /** Label for the radio group */
  label?: React.ReactNode;
  /** Whether the radio group is inline or not */
  inline?: boolean;
  /**
   * Whether the radio group is swap to right or not
   */
  swapRight?: boolean;
  /**
   * The class name for the label
   */
  labelClassName?: string;
  /**
   * The variant of the radio group
   */
  variant?: ColorVariant;
  /**
   * required or not
   */
  required?: boolean;
  /**
   * Whether the checkbox group is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the checkbox group is invalid
   */
  isInvalid?: boolean;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
}

/**
 * RadioGroup Component
 *
 * A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.
 * More user-friendly than individual NativeRadio components when managing groups.
 *
 * @example
 * // Basic usage
 * import { RadioGroup } from '@paalstack/react-ui';
 *
 * const [value, setValue] = useState('');
 *
 * <RadioGroup
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   value={value}
 *   onValueChange={setValue}
 * />
 *
 * @example
 * // With label
 * <RadioGroup
 *   label="Choose an option"
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   value={selected}
 *   onValueChange={setSelected}
 * />
 *
 * @example
 * // With object options
 * const options = [
 *   { value: 'react', label: 'React', key: 'react' },
 *   { value: 'vue', label: 'Vue.js', key: 'vue' },
 *   { value: 'angular', label: 'Angular', key: 'angular' },
 * ];
 *
 * <RadioGroup
 *   label="Select Framework"
 *   options={options}
 *   value={framework}
 *   onValueChange={setFramework}
 * />
 *
 * @example
 * // Required field with validation
 * <RadioGroup
 *   label="Payment Method"
 *   options={['Credit Card', 'PayPal', 'Bank Transfer']}
 *   value={paymentMethod}
 *   onValueChange={setPaymentMethod}
 *   required
 *   isInvalid={!paymentMethod}
 *   errorMessage="Please select a payment method"
 * />
 *
 * @example
 * // Inline layout (horizontal)
 * <RadioGroup
 *   label="Gender"
 *   options={['Male', 'Female', 'Other']}
 *   value={gender}
 *   onValueChange={setGender}
 *   inline
 * />
 *
 * @example
 * // Different color variants
 * <RadioGroup
 *   label="Priority Level"
 *   options={['Low', 'Medium', 'High']}
 *   value={priority}
 *   onValueChange={setPriority}
 *   variant="success"
 * />
 *
 * @example
 * // Subscription plan selector
 * const plans = [
 *   {
 *     value: 'free',
 *     label: 'Free - $0/month',
 *     labelContent: (
 *       <div>
 *         <div className="font-medium">Free</div>
 *         <div className="text-sm text-muted-foreground">$0/month</div>
 *       </div>
 *     ),
 *     key: 'free'
 *   },
 *   {
 *     value: 'pro',
 *     label: 'Pro - $9.99/month',
 *     labelContent: (
 *       <div>
 *         <div className="font-medium">Pro</div>
 *         <div className="text-sm text-muted-foreground">$9.99/month</div>
 *       </div>
 *     ),
 *     key: 'pro'
 *   },
 *   {
 *     value: 'enterprise',
 *     label: 'Enterprise - $29.99/month',
 *     labelContent: (
 *       <div>
 *         <div className="font-medium">Enterprise</div>
 *         <div className="text-sm text-muted-foreground">$29.99/month</div>
 *       </div>
 *     ),
 *     key: 'enterprise'
 *   },
 * ];
 *
 * <RadioGroup
 *   label="Choose Plan"
 *   options={plans}
 *   value={selectedPlan}
 *   onValueChange={setSelectedPlan}
 * />
 *
 * @example
 * // Shipping options
 * const shippingOptions = [
 *   {
 *     value: 'standard',
 *     label: 'Standard Shipping - Free (5-7 business days)',
 *     key: 'standard'
 *   },
 *   {
 *     value: 'express',
 *     label: 'Express Shipping - $9.99 (2-3 business days)',
 *     key: 'express'
 *   },
 *   {
 *     value: 'overnight',
 *     label: 'Overnight - $24.99 (Next business day)',
 *     key: 'overnight'
 *   },
 * ];
 *
 * <RadioGroup
 *   label="Shipping Method"
 *   options={shippingOptions}
 *   value={shipping}
 *   onValueChange={setShipping}
 *   required
 * />
 *
 * @example
 * // With disabled options
 * const options = [
 *   { value: '1', label: 'Available Option', key: '1' },
 *   { value: '2', label: 'Unavailable Option', key: '2', disabled: true },
 *   { value: '3', label: 'Available Option', key: '3' },
 * ];
 *
 * <RadioGroup
 *   label="Select Option"
 *   options={options}
 *   value={selected}
 *   onValueChange={setSelected}
 * />
 *
 * @example
 * // Swap labels to right
 * <RadioGroup
 *   label="Position"
 *   options={['Left', 'Right']}
 *   value={position}
 *   onValueChange={setPosition}
 *   swapRight
 * />
 *
 * @example
 * // Survey question
 * <Card>
 *   <CardContent className="pt-6">
 *     <RadioGroup
 *       label="How satisfied are you with our service?"
 *       options={[
 *         'Very Satisfied',
 *         'Satisfied',
 *         'Neutral',
 *         'Dissatisfied',
 *         'Very Dissatisfied'
 *       ]}
 *       value={satisfaction}
 *       onValueChange={setSatisfaction}
 *       required
 *     />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Account type selection
 * <RadioGroup
 *   label="Account Type"
 *   options={[
 *     { value: 'personal', label: 'Personal - For individual use', key: 'personal' },
 *     { value: 'business', label: 'Business - For teams and organizations', key: 'business' },
 *   ]}
 *   value={accountType}
 *   onValueChange={setAccountType}
 *   required
 * />
 *
 * @example
 * // Form integration
 * const [formData, setFormData] = useState({
 *   contactMethod: '',
 *   frequency: '',
 * });
 *
 * <form onSubmit={handleSubmit}>
 *   <RadioGroup
 *     label="Preferred Contact Method"
 *     options={['Email', 'Phone', 'SMS']}
 *     value={formData.contactMethod}
 *     onValueChange={(val) => setFormData({...formData, contactMethod: val})}
 *     required
 *   />
 *
 *   <RadioGroup
 *     label="Contact Frequency"
 *     options={['Daily', 'Weekly', 'Monthly']}
 *     value={formData.frequency}
 *     onValueChange={(val) => setFormData({...formData, frequency: val})}
 *     inline
 *   />
 *
 *   <Button type="submit">Submit</Button>
 * </form>
 *
 * @example
 * // Custom styling
 * <RadioGroup
 *   label="Theme"
 *   options={['Light', 'Dark', 'System']}
 *   value={theme}
 *   onValueChange={setTheme}
 *   labelClassName="text-lg font-bold"
 *   className="gap-4"
 * />
 */
type RadioGroupRef = React.ElementRef<typeof RadioGroupRoot>;

const RadioGroupForwardRef = React.forwardRef<RadioGroupRef, RadioGroupProps<unknown>>(function RadioGroup(
  {
    options,
    inline,
    label,
    className,
    labelClassName,
    swapRight,
    isInvalid: invalid,
    variant,
    required,
    errorMessage,
    disabled,
    ...props
  },
  ref,
) {
  const isInvalid = invalid ?? isAriaInvalid(props['aria-invalid']);

  const localOptions = React.useMemo<OptionType[]>(() => {
    return options.map((option) => {
      if (typeof option === 'string' || typeof option === 'number') {
        return { label: option.toString(), value: option.toString(), key: option.toString(), disabled: disabled };
      }
      return option;
    });
  }, [options, disabled]);

  return (
    <>
      <Box className="grid gap-4" data-qa="radio-group-container">
        {label && (
          <Label required={required} className={labelClassName} data-qa="radio-group-label">
            {label}
          </Label>
        )}
        <RadioGroupRootComponent
          ref={ref}
          data-qa="radio-group"
          className={cn(
            {
              'auto-cols-max grid-flow-col gap-5': inline,
            },
            className,
          )}
          {...props}
        >
          {localOptions.map((option) => (
            <Box key={option.key || option.value} className="flex items-center gap-2">
              <RadioGroupRootItem
                id={option.key || option.value}
                value={option.value}
                className={cn(
                  {
                    'order-1': swapRight,
                  },
                  option.className,
                )}
                disabled={option.disabled}
                variant={isInvalid ? 'danger' : variant}
                {...(isInvalid ? { 'aria-invalid': true } : {})}
                data-qa="radio-group-item"
              />
              <Label
                htmlFor={option.key || option.value}
                disabled={option.disabled}
                className={cn(
                  'cursor-pointer',
                  {
                    'font-normal': !!label,
                  },
                  labelClassName,
                )}
                data-qa="radio-group-item-label"
              >
                {option.labelContent || option.label}
              </Label>
            </Box>
          ))}
        </RadioGroupRootComponent>
      </Box>
      {isInvalid && <ErrorMessage data-qa="radio-group-error-message" message={errorMessage} />}
    </>
  );
});

RadioGroupForwardRef.displayName = 'RadioGroup';

const RadioGroup = RadioGroupForwardRef as <TValue = string>(
  props: RadioGroupProps<TValue> & React.RefAttributes<RadioGroupRef>,
) => React.ReactElement;

export {
  RadioGroup,
  RadioGroupItem,
  RadioGroupRootComponent as RadioGroupRoot,
  RadioGroupRootItem,
  radioGroupVariants,
};
