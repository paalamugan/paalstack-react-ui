import type { ComponentWithAs } from '@/shared/types';
import type * as React from 'react';
import type { InputProps } from '../Input';

import { useControllableState } from '@/hooks/use-controllable';
import { forwardRef, isDefinedValue, isPositiveFloat, isPositiveInteger } from '@/shared/utils';

import { Input } from '../Input';

export interface NumberInputProps extends Omit<InputProps, 'onValueChange' | 'value' | 'defaultValue'> {
  /**
   * value of number input
   */
  value?: string | number | null;
  /**
   * default value of number input(when uncontrolled)
   */
  defaultValue?: string | number | null;
  /**
   * If true, only positive integer is allowed
   */
  isPositiveInteger?: boolean;
  /**
   * If true, only positive float is allowed
   */
  isPositiveFloat?: boolean;
  /**
   * If true, only positive integer is allowed and starts with zero
   * @default false
   */
  positiveIntegerStartsWithZero?: boolean;
  /**
   * if true, only positive float is allowed and starts with zero
   * @default false
   */
  positiveFloatStartsWithZero?: boolean;
  /**
   *
   * @param value current value of the input
   */
  onValueChange?: (value: number) => void;
}

/**
 * NumberInput Component
 *
 * A specialized input component for numeric values with validation options.
 * Extends the Input component with number-specific constraints.
 *
 * @example
 * // Basic usage
 * import { NumberInput } from '@paalstack/react-ui';
 *
 * const [value, setValue] = useState<number>(0);
 *
 * <NumberInput
 *   label="Age"
 *   value={value}
 *   onValueChange={setValue}
 * />
 *
 * @example
 * // Positive integers only
 * <NumberInput
 *   label="Quantity"
 *   value={quantity}
 *   onValueChange={setQuantity}
 *   isPositiveInteger
 *   placeholder="Enter quantity"
 * />
 *
 * @example
 * // Positive integers starting with zero (like 01, 02, 03)
 * <NumberInput
 *   label="Item Code"
 *   value={code}
 *   onValueChange={setCode}
 *   isPositiveInteger
 *   positiveIntegerStartsWithZero
 * />
 *
 * @example
 * // Positive float numbers (decimals)
 * <NumberInput
 *   label="Price"
 *   value={price}
 *   onValueChange={setPrice}
 *   isPositiveFloat
 *   placeholder="0.00"
 * />
 *
 * @example
 * // Positive float starting with zero
 * <NumberInput
 *   label="Discount Rate"
 *   value={discount}
 *   onValueChange={setDiscoun t}
 *   isPositiveFloat
 *   positiveFloatStartsWithZero
 *   placeholder="0.00"
 * />
 *
 * @example
 * // With min and max
 * <NumberInput
 *   label="Age"
 *   value={age}
 *   onValueChange={setAge}
 *   min={0}
 *   max={120}
 *   isPositiveInteger
 * />
 *
 * @example
 * // Currency input
 * <NumberInput
 *   label="Amount ($)"
 *   value={amount}
 *   onValueChange={setAmount}
 *   isPositiveFloat
 *   placeholder="0.00"
 *   required
 * />
 *
 * @example
 * // Quantity selector
 * <NumberInput
 *   label="Quantity"
 *   value={quantity}
 *   onValueChange={setQuantity}
 *   isPositiveInteger
 *   min={1}
 *   max={99}
 *   defaultValue={1}
 * />
 *
 * @example
 * // Percentage input
 * <NumberInput
 *   label="Percentage"
 *   value={percentage}
 *   onValueChange={setPercentage}
 *   isPositiveFloat
 *   min={0}
 *   max={100}
 *   placeholder="0-100"
 * />
 *
 * @example
 * // Form integration with validation
 * const [formData, setFormData] = useState({
 *   age: 0,
 *   salary: 0,
 * });
 *
 * <form onSubmit={handleSubmit}>
 *   <NumberInput
 *     label="Age"
 *     value={formData.age}
 *     onValueChange={(val) => setFormData({...formData, age: val})}
 *     isPositiveInteger
 *     min={18}
 *     required
 *     isInvalid={formData.age < 18}
 *     errorMessage="Must be at least 18 years old"
 *   />
 *   <NumberInput
 *     label="Expected Salary"
 *     value={formData.salary}
 *     onValueChange={(val) => setFormData({...formData, salary: val})}
 *     isPositiveFloat
 *     min={0}
 *     required
 *   />
 *   <Button type="submit">Submit</Button>
 * </form>
 *
 * @example
 * // Product configuration
 * <div className="space-y-4">
 *   <NumberInput
 *     label="Width (cm)"
 *     value={width}
 *     onValueChange={setWidth}
 *     isPositiveFloat
 *     min={0}
 *   />
 *   <NumberInput
 *     label="Height (cm)"
 *     value={height}
 *     onValueChange={setHeight}
 *     isPositiveFloat
 *     min={0}
 *   />
 *   <NumberInput
 *     label="Weight (kg)"
 *     value={weight}
 *     onValueChange={setWeight}
 *     isPositiveFloat
 *     min={0}
 *   />
 * </div>
 *
 * @example
 * // Shopping cart item quantity
 * <div className="flex items-center gap-2">
 *   <Button variant="outline" size="sm" onClick={() => setQty(Math.max(1, qty - 1))}>
 *     -
 *   </Button>
 *   <NumberInput
 *     value={qty}
 *     onValueChange={setQty}
 *     isPositiveInteger
 *     min={1}
 *     max={10}
 *     className="w-20 text-center"
 *   />
 *   <Button variant="outline" size="sm" onClick={() => setQty(Math.min(10, qty + 1))}>
 *     +
 *   </Button>
 * </div>
 *
 * @example
 * // Rating input
 * <NumberInput
 *   label="Rating (1-5)"
 *   value={rating}
 *   onValueChange={setRating}
 *   isPositiveInteger
 *   min={1}
 *   max={5}
 *   placeholder="Enter rating"
 * />
 *
 * @example
 * // With step attribute
 * <NumberInput
 *   label="Temperature (°C)"
 *   value={temp}
 *   onValueChange={setTemp}
 *   step={0.5}
 *   isPositiveFloat
 * />
 *
 * @example
 * // Disabled state
 * <NumberInput
 *   label="Fixed Amount"
 *   value={100}
 *   disabled
 * />
 */
export const NumberInput: ComponentWithAs<'input', NumberInputProps> = forwardRef<NumberInputProps, 'input'>(
  (
    {
      isPositiveInteger: isPositiveIntegerValue,
      isPositiveFloat: isPositiveFloatValue,
      onChange,
      onValueChange,
      value,
      defaultValue,
      positiveIntegerStartsWithZero = false,
      positiveFloatStartsWithZero = false,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = useControllableState({
      value: isDefinedValue(value) ? `${value}` : '',
      defaultValue: isDefinedValue(defaultValue) ? `${defaultValue}` : '',
      onChange: (value) => onValueChange?.(+value),
    });

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === '') {
        setLocalValue(value);
        return onChange?.(event);
      }

      if (isPositiveIntegerValue) {
        if (isPositiveInteger(value, positiveIntegerStartsWithZero ? 0 : 1)) {
          setLocalValue(value);
          onChange?.(event);
        }
      } else if (isPositiveFloatValue) {
        if (isPositiveFloat(value, positiveFloatStartsWithZero ? 0 : 1)) {
          setLocalValue(value);
          onChange?.(event);
        }
      } else {
        setLocalValue(value);
        onChange?.(event);
      }
    };
    return (
      <Input data-qa="number-input" type="number" value={localValue} onChange={onChangeHandle} ref={ref} {...props} />
    );
  },
);
NumberInput.displayName = 'NumberInput';
