import type { ComponentWithAs, HTMLTailwindStyledComponentProps } from '@/shared/types';
import type { ReactNode } from 'react';
import type { LabelProps } from '../Label';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef, isAriaInvalid } from '@/shared/utils';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

export interface InputProps extends HTMLTailwindStyledComponentProps<'input'> {
  /**
   * whether the input is invalid
   */
  isInvalid?: boolean;
  /**
   * label for the input
   */
  label?: ReactNode;
  /**
   * props for the label
   */
  labelProps?: LabelProps;
  /**
   * inline input or not
   */
  inline?: boolean;
  /**
   * input class name for styling
   */
  inputClassName?: string;
  /**
   * Optional value change handler for the number input
   */
  onValueChange?: (value: string) => void;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
}

/**
 * Input Component
 *
 * A flexible input component with label, error message, and validation states.
 *
 * @example
 * // Basic usage
 * import { Input } from '@paalstack/react-ui';
 *
 * <Input placeholder="Enter your name" />
 *
 * @example
 * // With label
 * <Input label="Email Address" type="email" placeholder="email@example.com" />
 *
 * @example
 * // Required field
 * <Input label="Username" required placeholder="Enter username" />
 *
 * @example
 * // With error message
 * <Input
 *   label="Password"
 *   type="password"
 *   isInvalid
 *   errorMessage="Password must be at least 8 characters"
 * />
 *
 * @example
 * // Inline layout
 * <Input label="Search" inline placeholder="Search..." />
 *
 * @example
 * // Different input types
 * <Input type="text" placeholder="Text input" />
 * <Input type="email" placeholder="Email input" />
 * <Input type="password" placeholder="Password input" />
 * <Input type="number" placeholder="Number input" />
 * <Input type="tel" placeholder="Phone number" />
 * <Input type="url" placeholder="Website URL" />
 * <Input type="date" />
 *
 * @example
 * // With value change handler
 * <Input
 *   onValueChange={(value) => console.log('Value:', value)}
 *   placeholder="Type something..."
 * />
 *
 * @example
 * // Read-only and disabled states
 * <Input value="Read only value" readOnly />
 * <Input value="Disabled input" disabled />
 *
 * @example
 * // Controlled input with form state
 * const [value, setValue] = useState('');
 *
 * <Input
 *   label="Controlled Input"
 *   value={value}
 *   onValueChange={setValue}
 *   placeholder="Controlled value"
 * />
 *
 * @example
 * // With custom styling
 * <Input
 *   label="Custom Styled"
 *   className="mb-4"
 *   inputClassName="bg-gray-50 border-2"
 *   placeholder="Custom styles"
 * />
 */
const Input: ComponentWithAs<'input', InputProps> = forwardRef<InputProps, 'input'>(
  (
    {
      className,
      type,
      isInvalid: invalid,
      label,
      required,
      id,
      inline,
      inputClassName,
      onValueChange,
      errorMessage,
      labelProps,
      ...props
    },
    ref,
  ) => {
    const { className: labelClassName, ...restLabelProps } = labelProps || {};
    const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
    const labelId = id || props.name || (typeof label === 'string' ? label : 'input');

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onValueChange?.(value);
      props.onChange?.(event);
    };

    return (
      <>
        <Box
          className={cn(
            'flex w-full flex-col gap-2',
            {
              'flex-row items-center': inline,
            },
            className,
          )}
          data-qa="input-container"
        >
          {label && (
            <Label
              htmlFor={labelId}
              required={required}
              className={cn(labelClassName)}
              data-qa={`input-label-${labelId}`}
              {...restLabelProps}
            >
              {label}
            </Label>
          )}
          <Box
            data-qa={`input-${labelId}`}
            {...(isInvalid ? { 'aria-invalid': true } : {})}
            {...props}
            as="input"
            type={type}
            id={labelId}
            required={required}
            className={cn(
              'h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
              {
                'bg-muted/40 read-only:focus-visible:ring-0': props.readOnly,
              },
              inputClassName,
            )}
            ref={ref}
            onChange={onChangeHandle}
          />
        </Box>
        {isInvalid && <ErrorMessage message={errorMessage} />}
      </>
    );
  },
);
Input.displayName = 'Input';

export { Input };
