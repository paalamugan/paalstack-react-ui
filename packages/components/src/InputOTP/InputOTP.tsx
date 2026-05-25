import * as React from 'react';

import type { BoxProps } from '@/layouts/Box';
import type { ComponentWithAs } from '@/shared/types';

import { OTPInput, OTPInputContext } from 'input-otp';

import { RxMinus as MinusIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

/**
 * InputOTP Component Family
 *
 * @example
 * // Basic 6-digit OTP
 * import { InputOTP, InputOTPGroup, InputOTPSlot } from '@paalstack/react-ui';
 *
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // OTP with separator
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *   </InputOTPGroup>
 *   <InputOTPSeparator />
 *   <InputOTPGroup>
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Controlled OTP
 * const [value, setValue] = useState('');
 *
 * <InputOTP maxLength={6} value={value} onChange={setValue}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Digits only (PIN code)
 * import { REGEXP_ONLY_DIGITS } from 'input-otp';
 *
 * <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Alphanumeric OTP
 * import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
 *
 * <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // With validation state
 * const [value, setValue] = useState('');
 * const isValid = value.length === 6;
 *
 * <InputOTP maxLength={6} value={value} onChange={setValue}>
 *   <InputOTPGroup>
 *     {Array.from({ length: 6 }).map((_, index) => (
 *       <InputOTPSlot key={index} index={index} aria-invalid={!isValid} />
 *     ))}
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Disabled state
 * <InputOTP maxLength={6} disabled>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Two-factor authentication
 * const [otp, setOtp] = useState('');
 *
 * <div>
 *   <label>Enter 2FA Code</label>
 *   <InputOTP maxLength={6} value={otp} onChange={setOtp}>
 *     <InputOTPGroup>
 *       <InputOTPSlot index={0} />
 *       <InputOTPSlot index={1} />
 *       <InputOTPSlot index={2} />
 *     </InputOTPGroup>
 *     <InputOTPSeparator />
 *     <InputOTPGroup>
 *       <InputOTPSlot index={3} />
 *       <InputOTPSlot index={4} />
 *       <InputOTPSlot index={5} />
 *     </InputOTPGroup>
 *   </InputOTP>
 *   {otp.length === 6 && <p>Verifying...</p>}
 * </div>
 *
 * @example
 * // Email verification code
 * const [code, setCode] = useState('');
 * const [error, setError] = useState(false);
 *
 * const handleComplete = async (value: string) => {
 *   try {
 *     await verifyCode(value);
 *     setError(false);
 *   } catch {
 *     setError(true);
 *   }
 * };
 *
 * <InputOTP
 *   maxLength={6}
 *   value={code}
 *   onChange={(value) => {
 *     setCode(value);
 *     if (value.length === 6) {
 *       handleComplete(value);
 *     }
 *   }}
 * >
 *   <InputOTPGroup>
 *     {Array.from({ length: 6 }).map((_, index) => (
 *       <InputOTPSlot key={index} index={index} aria-invalid={error} />
 *     ))}
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @tip Use REGEXP_ONLY_DIGITS for PIN codes (numbers only)
 * @tip Use REGEXP_ONLY_DIGITS_AND_CHARS for alphanumeric codes
 * @tip Set maxLength to match your OTP length requirement
 * @tip Use InputOTPSeparator to visually group digits
 * @tip Use aria-invalid on slots to show error states
 * @tip Component handles copy/paste automatically
 * @tip Component handles keyboard navigation (arrows, backspace, delete)
 */
const InputOTP = ({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) => {
  return (
    <OTPInput
      data-slot="input-otp"
      data-qa="input-otp"
      containerClassName={cn('cn-input-otp flex items-center has-disabled:opacity-50', containerClassName)}
      spellCheck={false}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  );
};

const InputOTPGroup: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>(({ className, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="input-otp-group"
      data-qa="input-otp-group"
      className={cn(
        'flex items-center rounded-lg has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  );
});

type InputOTPSlotComponentProps = BoxProps & {
  index: number;
};
const InputOTPSlot: ComponentWithAs<'div', InputOTPSlotComponentProps> = forwardRef<InputOTPSlotComponentProps, 'div'>(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

    return (
      <Box
        ref={ref}
        data-slot="input-otp-slot"
        data-qa="input-otp-slot"
        data-active={isActive}
        className={cn(
          'relative flex size-8 items-center justify-center border-y border-r border-input text-sm transition-all outline-none first:rounded-l-lg first:border-l last:rounded-r-lg aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40',
          className,
        )}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
          </div>
        )}
      </Box>
    );
  },
);
export type InputOTPSlotProps = React.ComponentProps<typeof InputOTPSlot>;

const InputOTPSeparator: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>(({ ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="input-otp-separator"
      data-qa="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon />
    </Box>
  );
});
export type InputOTPSeparatorProps = React.ComponentProps<typeof InputOTPSeparator>;

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
