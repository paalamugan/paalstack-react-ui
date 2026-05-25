import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

import { Button } from '../Button';
import { Card } from '../Card';
import { Field, FieldDescription, FieldLabel } from '../Field';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './InputOTP';

const meta: Meta<typeof InputOTP> = {
  title: 'Components/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Basic: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const Disabled: Story = {
  render: () => (
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

const ControlledExample = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="flex flex-col gap-2">
      <Field>
        <FieldLabel>One-Time Password</FieldLabel>
        <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>Enter your one-time password.</FieldDescription>
      </Field>
      {value && (
        <div className="text-sm text-muted-foreground">
          Value: <span className="font-mono">{value}</span>
        </div>
      )}
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledExample />,
};

const InvalidExample = () => {
  const [value, setValue] = React.useState('');
  const isInvalid = value.length > 0 && value.length < 6;

  return (
    <div className="flex flex-col gap-2">
      <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          {Array.from({ length: 6 }).map((_, index) => (
            <InputOTPSlot key={index} index={index} aria-invalid={isInvalid} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      {isInvalid && <p className="text-sm text-destructive">Please enter all 6 digits.</p>}
    </div>
  );
};

export const Invalid: Story = {
  render: () => <InvalidExample />,
};

export const FourDigits: Story = {
  name: 'Four Digits (PIN)',
  render: () => (
    <Field>
      <FieldLabel>PIN Code</FieldLabel>
      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Enter your 4-digit PIN code.</FieldDescription>
    </Field>
  ),
};

export const DigitsOnly: Story = {
  render: () => (
    <Field>
      <FieldLabel>Verification Code</FieldLabel>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Digits only (0-9).</FieldDescription>
    </Field>
  ),
};

export const Alphanumeric: Story = {
  render: () => (
    <Field>
      <FieldLabel>Activation Code</FieldLabel>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Letters and numbers (A-Z, 0-9).</FieldDescription>
    </Field>
  ),
};

const FormExample = () => {
  const [value, setValue] = React.useState('');
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleVerify = () => {
    if (value.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsVerifying(true);
    setError('');

    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      alert('Verification successful!');
    }, 2000);
  };

  return (
    <Card className="mx-auto w-full max-w-md p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-2xl font-semibold">Verify your login</h2>
          <p className="text-sm text-muted-foreground">
            Enter the verification code we sent to your email address: <strong>m@example.com</strong>.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Field>
            <FieldLabel>Verification code</FieldLabel>
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              value={value}
              onChange={(value) => {
                setValue(value);
                setError('');
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} aria-invalid={!!error} />
                <InputOTPSlot index={1} aria-invalid={!!error} />
                <InputOTPSlot index={2} aria-invalid={!!error} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} aria-invalid={!!error} />
                <InputOTPSlot index={4} aria-invalid={!!error} />
                <InputOTPSlot index={5} aria-invalid={!!error} />
              </InputOTPGroup>
            </InputOTP>
            {error && <FieldDescription className="text-destructive">{error}</FieldDescription>}
          </Field>

          <Button onClick={handleVerify} disabled={isVerifying || value.length !== 6} className="w-full">
            {isVerifying ? 'Verifying...' : 'Verify'}
          </Button>
        </div>

        <div className="flex flex-col gap-2 text-center text-sm">
          <button type="button" className="text-muted-foreground hover:text-foreground">
            Resend Code
          </button>
          <button type="button" className="text-muted-foreground hover:text-foreground">
            I no longer have access to this email address.
          </button>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          Having trouble signing in?{' '}
          <button type="button" className="underline hover:text-foreground">
            Contact support
          </button>
        </div>
      </div>
    </Card>
  );
};

export const Form: Story = {
  render: () => <FormExample />,
};

const TwoFactorExample = () => {
  const [value, setValue] = React.useState('');

  return (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Two-Factor Authentication</FieldLabel>
        <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>Enter the code from your authenticator app.</FieldDescription>
      </Field>

      {value.length === 6 && (
        <div className="rounded-md border border-green-500 bg-green-50 p-3 dark:bg-green-900/20">
          <p className="text-sm text-green-700 dark:text-green-400">Code complete. Verifying...</p>
        </div>
      )}
    </div>
  );
};

export const TwoFactorAuth: Story = {
  name: '2FA Example',
  render: () => <TwoFactorExample />,
};

const EmailVerificationExample = () => {
  const [code, setCode] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'verifying' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    if (code.length === 6) {
      setStatus('verifying');

      // Simulate API call
      setTimeout(() => {
        // Random success/error for demo
        if (Math.random() > 0.3) {
          setStatus('success');
        } else {
          setStatus('error');
          setTimeout(() => {
            setCode('');
            setStatus('idle');
          }, 2000);
        }
      }, 1500);
    }
  }, [code]);

  return (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Email Verification</FieldLabel>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          value={code}
          onChange={(value) => {
            setCode(value);
            if (value.length < 6) {
              setStatus('idle');
            }
          }}
          disabled={status === 'verifying' || status === 'success'}
        >
          <InputOTPGroup>
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot key={index} index={index} aria-invalid={status === 'error'} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        {status === 'idle' && <FieldDescription>Check your email for the verification code.</FieldDescription>}
        {status === 'verifying' && <FieldDescription>Verifying your code...</FieldDescription>}
        {status === 'success' && (
          <FieldDescription className="text-green-600 dark:text-green-400">Verification successful!</FieldDescription>
        )}
        {status === 'error' && (
          <FieldDescription className="text-destructive">Invalid code. Try again.</FieldDescription>
        )}
      </Field>
    </div>
  );
};

export const EmailVerification: Story = {
  render: () => <EmailVerificationExample />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Field>
        <FieldLabel>Default Size</FieldLabel>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Field>

      <Field>
        <FieldLabel>Custom Size</FieldLabel>
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="size-12 text-lg" />
            <InputOTPSlot index={1} className="size-12 text-lg" />
            <InputOTPSlot index={2} className="size-12 text-lg" />
            <InputOTPSlot index={3} className="size-12 text-lg" />
          </InputOTPGroup>
        </InputOTP>
      </Field>

      <Field>
        <FieldLabel>Compact Size</FieldLabel>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="size-6 text-xs" />
            <InputOTPSlot index={1} className="size-6 text-xs" />
            <InputOTPSlot index={2} className="size-6 text-xs" />
            <InputOTPSlot index={3} className="size-6 text-xs" />
            <InputOTPSlot index={4} className="size-6 text-xs" />
            <InputOTPSlot index={5} className="size-6 text-xs" />
          </InputOTPGroup>
        </InputOTP>
      </Field>
    </div>
  ),
};

const MultipleGroupsExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>3-3 Format</FieldLabel>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Field>

      <Field>
        <FieldLabel>2-2-2 Format</FieldLabel>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Field>

      <Field>
        <FieldLabel>4-4 Format</FieldLabel>
        <InputOTP maxLength={8}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
          </InputOTPGroup>
        </InputOTP>
      </Field>
    </div>
  );
};

export const MultipleGroups: Story = {
  render: () => <MultipleGroupsExample />,
};

const AutoSubmitExample = () => {
  const [value, setValue] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (value.length === 6) {
      setSubmitted(true);
      setTimeout(() => {
        setValue('');
        setSubmitted(false);
      }, 2000);
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Auto-Submit on Complete</FieldLabel>
        <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>Code will auto-submit when complete.</FieldDescription>
      </Field>

      {submitted && (
        <div className="rounded-md border border-blue-500 bg-blue-50 p-3 dark:bg-blue-900/20">
          <p className="text-sm text-blue-700 dark:text-blue-400">Code submitted: {value}</p>
        </div>
      )}
    </div>
  );
};

export const AutoSubmit: Story = {
  render: () => <AutoSubmitExample />,
};
