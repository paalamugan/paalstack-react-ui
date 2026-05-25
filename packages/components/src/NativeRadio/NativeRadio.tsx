import type { ComponentWithAs, HTMLTailwindStyledComponentProps } from '@/shared/types';
import type React from 'react';

import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { Flex } from '@/layouts/Flex';
import { cn } from '@/shared/lib';
import { forwardRef, isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

const radioVariants = cva(
  'peer inline-block size-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-background align-middle text-primary checked:border-transparent checked:bg-current focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20',
);
export interface NativeRadioProps extends Omit<HTMLTailwindStyledComponentProps<'input'>, 'as' | 'children'> {
  /** Label for the radio */
  label?: React.ReactNode;
  /** Props for the label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /** Whether the radio is checked or not */
  checked?: boolean;
  /** Whether the radio is disabled or not */
  disabled?: boolean;
  /** Callback when the radio value changes */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Whether the radio is swapped to the right or not
   */
  swapRight?: boolean;
  /**
   * The class name for the radio label
   */
  labelClassName?: string;
  /**
   * Whether the radio is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the radio is invalid
   */
  isInvalid?: boolean;
  /**
   * The error message for the radio
   */
  errorMessage?: string;
  /**
   * The parent class name for the radio
   */
  wrapperClassName?: string;
}

/**
 * NativeRadio Component
 *
 * A radio button input component for selecting a single option from a list.
 * Use NativeRadioGroup for managing multiple radio options together.
 *
 * @example
 * // Basic usage
 * import { NativeRadio } from '@paalstack/react-ui';
 *
 * <NativeRadio name="option" label="Option 1" />
 *
 * @example
 * // Radio group (manual)
 * const [selected, setSelected] = useState('option1');
 *
 * <div className="space-y-2">
 *   <NativeRadio
 *     name="choice"
 *     label="Option 1"
 *     value="option1"
 *     checked={selected === 'option1'}
 *     onCheckedChange={() => setSelected('option1')}
 *   />
 *   <NativeRadio
 *     name="choice"
 *     label="Option 2"
 *     value="option2"
 *     checked={selected === 'option2'}
 *     onCheckedChange={() => setSelected('option2')}
 *   />
 *   <NativeRadio
 *     name="choice"
 *     label="Option 3"
 *     value="option3"
 *     checked={selected === 'option3'}
 *     onCheckedChange={() => setSelected('option3')}
 *   />
 * </div>
 *
 * @example
 * // With validation
 * <NativeRadio
 *   name="terms"
 *   label="I agree to the terms and conditions"
 *   required
 *   isInvalid={!accepted}
 *   errorMessage="You must accept the terms to continue"
 * />
 *
 * @example
 * // Disabled radio
 * <NativeRadio
 *   name="disabled"
 *   label="Disabled option"
 *   disabled
 *   checked
 * />
 *
 * @example
 * // Swap label to right side
 * <NativeRadio
 *   name="swap"
 *   label="Label on right"
 *   swapRight
 * />
 *
 * @example
 * // Payment method selection
 * const [paymentMethod, setPaymentMethod] = useState('');
 *
 * <div className="space-y-3">
 *   <h3 className="font-medium">Payment Method</h3>
 *   <NativeRadio
 *     name="payment"
 *     label="Credit Card"
 *     value="credit-card"
 *     checked={paymentMethod === 'credit-card'}
 *     onCheckedChange={() => setPaymentMethod('credit-card')}
 *   />
 *   <NativeRadio
 *     name="payment"
 *     label="PayPal"
 *     value="paypal"
 *     checked={paymentMethod === 'paypal'}
 *     onCheckedChange={() => setPaymentMethod('paypal')}
 *   />
 *   <NativeRadio
 *     name="payment"
 *     label="Bank Transfer"
 *     value="bank-transfer"
 *     checked={paymentMethod === 'bank-transfer'}
 *     onCheckedChange={() => setPaymentMethod('bank-transfer')}
 *   />
 * </div>
 *
 * @example
 * // Shipping options with descriptions
 * const [shipping, setShipping] = useState('standard');
 *
 * <div className="space-y-4">
 *   <div className="border rounded p-3">
 *     <NativeRadio
 *       name="shipping"
 *       label={
 *         <div>
 *           <div className="font-medium">Standard Shipping</div>
 *           <div className="text-sm text-muted-foreground">5-7 business days - Free</div>
 *         </div>
 *       }
 *       value="standard"
 *       checked={shipping === 'standard'}
 *       onCheckedChange={() => setShipping('standard')}
 *     />
 *   </div>
 *   <div className="border rounded p-3">
 *     <NativeRadio
 *       name="shipping"
 *       label={
 *         <div>
 *           <div className="font-medium">Express Shipping</div>
 *           <div className="text-sm text-muted-foreground">2-3 business days - $9.99</div>
 *         </div>
 *       }
 *       value="express"
 *       checked={shipping === 'express'}
 *       onCheckedChange={() => setShipping('express')}
 *     />
 *   </div>
 * </div>
 *
 * @example
 * // Subscription plan selection
 * const [plan, setPlan] = useState('');
 * const plans = [
 *   { id: 'free', name: 'Free', price: '$0/month' },
 *   { id: 'pro', name: 'Pro', price: '$9.99/month' },
 *   { id: 'enterprise', name: 'Enterprise', price: '$29.99/month' },
 * ];
 *
 * <div className="space-y-2">
 *   {plans.map(item => (
 *     <div key={item.id} className="flex items-center justify-between border rounded p-3">
 *       <NativeRadio
 *         name="plan"
 *         label={
 *           <div>
 *             <div className="font-medium">{item.name}</div>
 *             <div className="text-sm text-muted-foreground">{item.price}</div>
 *           </div>
 *         }
 *         value={item.id}
 *         checked={plan === item.id}
 *         onCheckedChange={() => setPlan(item.id)}
 *       />
 *     </div>
 *   ))}
 * </div>
 *
 * @example
 * // Form integration
 * <form onSubmit={handleSubmit}>
 *   <div className="space-y-2">
 *     <p className="font-medium">Select your preferred contact method:</p>
 *     <NativeRadio name="contact" label="Email" value="email" required />
 *     <NativeRadio name="contact" label="Phone" value="phone" />
 *     <NativeRadio name="contact" label="Mail" value="mail" />
 *   </div>
 *   <Button type="submit">Submit</Button>
 * </form>
 *
 * @example
 * // Custom styling
 * <NativeRadio
 *   name="custom"
 *   label="Custom styled"
 *   wrapperClassName="bg-gray-50 p-4 rounded"
 *   labelClassName="font-bold"
 *   className="size-5"
 * />
 *
 * @example
 * // Survey/questionnaire
 * const [satisfaction, setSatisfaction] = useState('');
 *
 * <div>
 *   <p className="font-medium mb-3">How satisfied are you with our service?</p>
 *   <div className="space-y-2">
 *     <NativeRadio name="satisfaction" label="Very Satisfied" value="5"
 *       checked={satisfaction === '5'} onCheckedChange={() => setSatisfaction('5')} />
 *     <NativeRadio name="satisfaction" label="Satisfied" value="4"
 *       checked={satisfaction === '4'} onCheckedChange={() => setSatisfaction('4')} />
 *     <NativeRadio name="satisfaction" label="Neutral" value="3"
 *       checked={satisfaction === '3'} onCheckedChange={() => setSatisfaction('3')} />
 *     <NativeRadio name="satisfaction" label="Dissatisfied" value="2"
 *       checked={satisfaction === '2'} onCheckedChange={() => setSatisfaction('2')} />
 *     <NativeRadio name="satisfaction" label="Very Dissatisfied" value="1"
 *       checked={satisfaction === '1'} onCheckedChange={() => setSatisfaction('1')} />
 *   </div>
 * </div>
 *
 * @tip Use NativeRadioGroup component for easier management of multiple radio options
 */
export const NativeRadio: ComponentWithAs<'input', NativeRadioProps> = forwardRef<NativeRadioProps, 'input'>(
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

    const id = props.id || props.name || (label && typeof label === 'string' ? label : 'radio-input');

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      onCheckedChange?.(checked);
      props.onChange?.(event);
    };
    return (
      <>
        <Flex className={cn('inline-flex items-center gap-2', wrapperClassName)}>
          <Box
            data-qa="radio-input"
            {...props}
            as="input"
            ref={ref}
            id={id}
            onChange={onChangeHandle}
            type="radio"
            {...(isInvalid ? { 'aria-invalid': true } : {})}
            className={cn(
              'native',
              radioVariants(),
              {
                'order-1': swapRight,
              },
              className,
            )}
          />
          {label && (
            <Label
              htmlFor={id}
              text={label}
              required={props.required}
              className={cn('cursor-pointer', labelClassName)}
              data-qa="radio-input-label"
              {...labelProps}
            />
          )}
        </Flex>
        {isInvalid && <ErrorMessage data-qa="radio-input-error-message" message={errorMessage} />}
      </>
    );
  },
);
NativeRadio.displayName = 'NativeRadio';
