import type { BoxPropsWithRef } from '@/layouts/Box';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

const labelVariants = cva(
  'flex items-center text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50',
);

export interface LabelProps extends BoxPropsWithRef<'label', VariantProps<typeof labelVariants>> {
  /**
   * if required, adds a red asterisk to the label
   */
  required?: boolean;
  /**
   *
   */
  text?: React.ReactNode;
  /**
   * if true, show the label in red color
   */
  isInvalid?: boolean;
  /**
   * if true, disable the label
   */
  disabled?: boolean;
}

/**
 * Label Component
 *
 * Renders an accessible label associated with form controls.
 * Automatically handles required indicators and invalid states.
 *
 * @example
 * // Basic usage
 * import { Label } from '@paalstack/react-ui';
 *
 * <Label htmlFor="email">Email Address</Label>
 * <input id="email" type="email" />
 *
 * @example
 * // Required field indicator
 * <Label htmlFor="name" required>Name</Label>
 * <input id="name" type="text" />
 *
 * @example
 * // With text prop
 * <Label htmlFor="username" text="Username" required />
 *
 * @example
 * // Invalid state (shows in red)
 * <Label htmlFor="password" isInvalid>Password</Label>
 * <input id="password" type="password" className="border-danger" />
 *
 * @example
 * // Disabled state
 * <Label htmlFor="disabled-field" disabled>Disabled Field</Label>
 * <input id="disabled-field" type="text" disabled />
 *
 * @example
 * // With Input component
 * <div className="space-y-2">
 *   <Label htmlFor="email" required>Email</Label>
 *   <Input id="email" type="email" placeholder="email@example.com" />
 * </div>
 *
 * @example
 * // Form with multiple labels
 * <form className="space-y-4">
 *   <div>
 *     <Label htmlFor="firstname" required>First Name</Label>
 *     <Input id="firstname" />
 *   </div>
 *   <div>
 *     <Label htmlFor="lastname" required>Last Name</Label>
 *     <Input id="lastname" />
 *   </div>
 *   <div>
 *     <Label htmlFor="bio">Bio (Optional)</Label>
 *     <Textarea id="bio" />
 *   </div>
 * </form>
 *
 * @example
 * // With Checkbox
 * <div className="flex items-center gap-2">
 *   <input type="checkbox" id="terms" />
 *   <Label htmlFor="terms" required className="cursor-pointer">
 *     I agree to the terms and conditions
 *   </Label>
 * </div>
 *
 * @example
 * // With Radio buttons
 * <div className="space-y-2">
 *   <Label>Choose an option:</Label>
 *   <div className="flex items-center gap-2">
 *     <input type="radio" id="option1" name="option" />
 *     <Label htmlFor="option1" className="cursor-pointer">Option 1</Label>
 *   </div>
 *   <div className="flex items-center gap-2">
 *     <input type="radio" id="option2" name="option" />
 *     <Label htmlFor="option2" className="cursor-pointer">Option 2</Label>
 *   </div>
 * </div>
 *
 * @example
 * // Custom styling
 * <Label htmlFor="custom" className="text-lg font-bold text-primary">
 *   Custom Styled Label
 * </Label>
 *
 * @example
 * // With validation error
 * const [email, setEmail] = useState('');
 * const [error, setError] = useState('');
 *
 * <div className="space-y-2">
 *   <Label htmlFor="email" required isInvalid={!!error}>
 *     Email Address
 *   </Label>
 *   <Input
 *     id="email"
 *     type="email"
 *     value={email}
 *     onChange={(e) => setEmail(e.target.value)}
 *     isInvalid={!!error}
 *   />
 *   {error && <span className="text-sm text-danger">{error}</span>}
 * </div>
 */
const Label = ({ className, required = false, text, isInvalid, children, disabled, ...props }: LabelProps) => (
  <Box
    as="label"
    className={cn(labelVariants(), { 'text-danger': isInvalid, 'opacity-70': disabled }, className)}
    data-slot="label"
    data-qa="label"
    {...(disabled ? { 'data-disabled': true, 'aria-disabled': true } : {})}
    {...(isInvalid ? { 'aria-invalid': true } : {})}
    {...props}
  >
    {text || children}
    {required && (
      <span className="text-danger" data-qa="required-indicator">
        *
      </span>
    )}
  </Box>
);
Label.displayName = 'Label';

export { Label };
