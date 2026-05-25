import { useEffect, useMemo, useState } from 'react';

import type { ComponentWithAs, OptionType } from '@/shared/types';
import type { NativeRadioProps } from '../NativeRadio';

import { Stack } from '@/layouts/Stack';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';
import { NativeRadio } from '../NativeRadio';

export interface NativeRadioGroupProps extends NativeRadioProps {
  /**
   * The options for the radio input group
   */
  options: Array<OptionType | string | number>;
  /**
   * The default value for the radio input group
   */
  defaultValue?: string;
  /**
   * The default value for the radio input group
   */
  value?: string;
  /**
   * The label for the radio input group
   */
  label?: string;
  /**
   * Props for the label
   */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /**
   * The class name for the radio input group label
   */
  labelClassName?: string;
  /**
   * Whether the radio input group is vertical or horizontal.
   */
  inline?: boolean;
}

/**
 * NativeRadioGroup Component
 *
 * A group of radio inputs for selecting a single option.
 * More convenient than managing individual NativeRadio components or using RadioGroup.
 *
 * @example
 * // Basic usage
 * import { NativeRadioGroup } from '@paalstack/react-ui';
 *
 * const [value, setValue] = useState('');
 *
 * <NativeRadioGroup
 *   label="Choose an option"
 *   options={[
 *     { value: 'option1', label: 'Option 1', key: 'option1' },
 *     { value: 'option2', label: 'Option 2', key: 'option2' },
 *     { value: 'option3', label: 'Option 3', key: 'option3' },
 *   ]}
 *   value={value}
 *   onCheckedChange={(checked) => console.log('Changed:', checked)}
 * />
 *
 * @example
 * // Controlled component
 * const [selected, setSelected] = useState('email');
 *
 * <NativeRadioGroup
 *   label="Contact Method"
 *   options={[
 *     { value: 'email', label: 'Email', key: 'email' },
 *     { value: 'phone', label: 'Phone', key: 'phone' },
 *     { value: 'sms', label: 'SMS', key: 'sms' },
 *   ]}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 *
 * @example
 * // Required field with validation
 * <NativeRadioGroup
 *   label="Payment Method"
 *   options={[
 *     { value: 'credit', label: 'Credit Card', key: 'credit' },
 *     { value: 'paypal', label: 'PayPal', key: 'paypal' },
 *     { value: 'bank', label: 'Bank Transfer', key: 'bank' },
 *   ]}
 *   value={paymentMethod}
 *   required
 *   isInvalid={!paymentMethod}
 *   errorMessage="Please select a payment method"
 * />
 *
 * @example
 * // Inline layout (horizontal)
 * <NativeRadioGroup
 *   label="Gender"
 *   options={[
 *     { value: 'male', label: 'Male', key: 'male' },
 *     { value: 'female', label: 'Female', key: 'female' },
 *     { value: 'other', label: 'Other', key: 'other' },
 *   ]}
 *   value={gender}
 *   inline
 * />
 *
 * @example
 * // Shipping options with descriptions
 * <NativeRadioGroup
 *   label="Shipping Method"
 *   options={[
 *     {
 *       value: 'standard',
 *       labelContent: (
 *         <div>
 *           <div className="font-medium">Standard Shipping</div>
 *           <div className="text-xs text-muted-foreground">5-7 business days - Free</div>
 *         </div>
 *       ),
 *       key: 'standard'
 *     },
 *     {
 *       value: 'express',
 *       labelContent: (
 *         <div>
 *           <div className="font-medium">Express Shipping</div>
 *           <div className="text-xs text-muted-foreground">2-3 business days - $9.99</div>
 *         </div>
 *       ),
 *       key: 'express'
 *     },
 *   ]}
 *   value={shipping}
 * />
 *
 * @example
 * // With disabled options
 * <NativeRadioGroup
 *   label="Plan Type"
 *   options={[
 *     { value: 'free', label: 'Free Plan', key: 'free' },
 *     { value: 'pro', label: 'Pro Plan (Coming Soon)', key: 'pro', disabled: true },
 *     { value: 'enterprise', label: 'Enterprise (Contact Us)', key: 'enterprise', disabled: true },
 *   ]}
 *   value={plan}
 * />
 *
 * @example
 * // Survey question
 * <Card>
 *   <CardContent className="pt-6">
 *     <NativeRadioGroup
 *       label="How often do you use our product?"
 *       options={[
 *         { value: 'daily', label: 'Daily', key: 'daily' },
 *         { value: 'weekly', label: 'Weekly', key: 'weekly' },
 *         { value: 'monthly', label: 'Monthly', key: 'monthly' },
 *         { value: 'rarely', label: 'Rarely', key: 'rarely' },
 *       ]}
 *       value={frequency}
 *       required
 *     />
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Priority selection
 * <NativeRadioGroup
 *   label="Priority Level"
 *   options={[
 *     { value: 'low', label: 'Low', key: 'low' },
 *     { value: 'medium', label: 'Medium', key: 'medium' },
 *     { value: 'high', label: 'High', key: 'high' },
 *     { value: 'urgent', label: 'Urgent', key: 'urgent' },
 *   ]}
 *   value={priority}
 *   inline
 * />
 *
 * @example
 * // Form integration
 * const [formData, setFormData] = useState({
 *   size: '',
 *   color: '',
 * });
 *
 * <form onSubmit={handleSubmit}>
 *   <NativeRadioGroup
 *     label="Size"
 *     options={[
 *       { value: 's', label: 'Small', key: 's' },
 *       { value: 'm', label: 'Medium', key: 'm' },
 *       { value: 'l', label: 'Large', key: 'l' },
 *       { value: 'xl', label: 'Extra Large', key: 'xl' },
 *     ]}
 *     value={formData.size}
 *     onChange={(e) => setFormData({...formData, size: e.target.value})}
 *     inline
 *     required
 *   />
 *
 *   <NativeRadioGroup
 *     label="Color"
 *     options={[
 *       { value: 'red', label: 'Red', key: 'red' },
 *       { value: 'blue', label: 'Blue', key: 'blue' },
 *       { value: 'green', label: 'Green', key: 'green' },
 *     ]}
 *     value={formData.color}
 *     onChange={(e) => setFormData({...formData, color: e.target.value})}
 *     inline
 *     required
 *   />
 *
 *   <Button type="submit">Add to Cart</Button>
 * </form>
 *
 * @example
 * // Subscription tier selection
 * <NativeRadioGroup
 *   label="Select Your Plan"
 *   options={[
 *     {
 *       value: 'basic',
 *       labelContent: (
 *         <div>
 *           <div className="font-semibold">Basic</div>
 *           <div className="text-sm text-muted-foreground">$9/month</div>
 *         </div>
 *       ),
 *       key: 'basic'
 *     },
 *     {
 *       value: 'pro',
 *       labelContent: (
 *         <div>
 *           <div className="font-semibold">Pro</div>
 *           <div className="text-sm text-muted-foreground">$19/month</div>
 *         </div>
 *       ),
 *       key: 'pro'
 *     },
 *   ]}
 *   value={selectedPlan}
 *   required
 * />
 *
 * @example
 * // Custom styling
 * <NativeRadioGroup
 *   label="Theme"
 *   options={[
 *     { value: 'light', label: 'Light', key: 'light' },
 *     { value: 'dark', label: 'Dark', key: 'dark' },
 *   ]}
 *   value={theme}
 *   labelClassName="text-lg font-bold"
 *   wrapperClassName="bg-muted p-4 rounded"
 * />
 *
 * @tip Use RadioGroup component for more features like color variants and better composition
 * @tip NativeRadioGroup is a simpler alternative when you don't need advanced RadioGroup features
 */
export const NativeRadioGroup: ComponentWithAs<typeof NativeRadio, NativeRadioGroupProps> = forwardRef<
  NativeRadioGroupProps,
  typeof NativeRadio
>(
  (
    {
      options,
      label,
      defaultValue,
      value: localValue,
      onChange,
      onCheckedChange,
      required,
      isInvalid,
      labelClassName,
      errorMessage,
      id,
      disabled,
      inline,
      labelProps,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState<string | undefined>(localValue ?? defaultValue);

    useEffect(() => {
      setValue(localValue);
    }, [localValue]);

    const localOptions = useMemo<OptionType[]>(() => {
      return options.map((option) => {
        if (typeof option === 'string' || typeof option === 'number') {
          return { label: option.toString(), value: option.toString(), key: option.toString() };
        }
        return option;
      });
    }, [options]);

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange?.(event);
      onCheckedChange?.(event.target.checked);
    };

    return (
      <>
        <Stack className="gap-4">
          {label && (
            <Label
              text={label}
              id={id}
              required={required}
              className={labelClassName}
              disabled={disabled}
              data-qa="radio-input-group-label"
              {...labelProps}
            />
          )}
          <Stack
            className={cn('inline-flex gap-2', {
              'flex-row gap-3': inline,
            })}
          >
            {localOptions.map((option) => (
              <NativeRadio
                data-qa="radio-input-group-item"
                ref={ref}
                {...props}
                key={option.key || option.value}
                id={option.key || option.value}
                className={cn(props.className, option.className)}
                name={option.value}
                value={option.value}
                label={option.labelContent || option.label}
                onChange={onChangeHandle}
                checked={value === option.value}
                isInvalid={isInvalid}
                disabled={option.disabled ?? disabled}
              />
            ))}
          </Stack>
        </Stack>
        {isInvalid && <ErrorMessage data-qa="radio-input-group-error-message" message={errorMessage} />}
      </>
    );
  },
);
