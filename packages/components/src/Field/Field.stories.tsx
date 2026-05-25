import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { RadioGroupRoot, RadioGroupRootItem } from '../RadioGroup';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '../Select';
import { Slider } from '../Slider';
import { Switch } from '../Switch';
import { Textarea } from '../Textarea';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './Field';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      description: 'Orientation of the field layout',
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Field>;

export const Basic: Story = {
  render: (args) => (
    <Field {...args} label="Username" description="Choose a unique username for your account.">
      <Input id="username" placeholder="Enter username" />
    </Field>
  ),
  args: {
    orientation: 'horizontal',
  },
};

export const WithError: Story = {
  render: () => (
    <Field data-invalid>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" aria-invalid defaultValue="invalid-email" />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  ),
};

export const WithMultipleErrors: Story = {
  render: () => (
    <Field data-invalid orientation="horizontal">
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" aria-invalid />
      <FieldError
        errors={[
          { message: 'Password must be at least 8 characters long' },
          { message: 'Password must contain at least one uppercase letter' },
          { message: 'Password must contain at least one number' },
        ]}
      />
    </Field>
  ),
};

export const HorizontalLayout: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Switch id="newsletter" />
      <FieldLabel htmlFor="newsletter">Subscribe to newsletter</FieldLabel>
    </Field>
  ),
};

export const HorizontalWithContent: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldContent>
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
        <FieldDescription>You must accept the terms to continue.</FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const InputField: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="username-input">Username</FieldLabel>
        <Input id="username-input" placeholder="johndoe" />
        <FieldDescription>Choose a unique username for your account.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="password-input">Password</FieldLabel>
        <Input id="password-input" type="password" placeholder="Enter a password" />
        <FieldDescription>Must be at least 8 characters long.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};

export const TextareaField: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
      <Textarea id="feedback" rows={4} placeholder="Share your thoughts..." />
      <FieldDescription>Share your thoughts about our service.</FieldDescription>
    </Field>
  ),
};

export const SelectField: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="department">Department</FieldLabel>
      <SelectRoot>
        <SelectTrigger id="department">
          <SelectValue placeholder="Choose department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eng">Engineering</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
        </SelectContent>
      </SelectRoot>
      <FieldDescription>Select your department or area of work.</FieldDescription>
    </Field>
  ),
};

const SliderFieldComponent = () => {
  const [value, setValue] = React.useState([400]);
  return (
    <Field>
      <FieldLabel>Price Range</FieldLabel>
      <Slider
        value={value}
        onValueChange={(v) => setValue(Array.isArray(v) ? (v as number[]) : [v as number])}
        min={200}
        max={800}
        step={10}
        className="w-full"
      />
      <FieldDescription>Set your budget range (${value[0]} - 800).</FieldDescription>
    </Field>
  );
};

export const SliderField: Story = {
  render: () => <SliderFieldComponent />,
};

export const FieldSetExample: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Address Information</FieldLegend>
      <FieldDescription>We need your address to deliver your order.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street">Street Address</FieldLabel>
          <Input id="street" placeholder="123 Main St" />
        </Field>
        <Field>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <Input id="city" placeholder="New York" />
        </Field>
        <Field>
          <FieldLabel htmlFor="postal">Postal Code</FieldLabel>
          <Input id="postal" placeholder="10001" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend variant="label">Desktop Items</FieldLegend>
      <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="hardDisks" />
          <FieldLabel htmlFor="hardDisks">Hard disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="external" />
          <FieldLabel htmlFor="external">External disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="cds" />
          <FieldLabel htmlFor="cds">CDs, DVDs, and iPods</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="servers" />
          <FieldLabel htmlFor="servers">Connected servers</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

export const RadioGroupField: Story = {
  render: () => (
    <Field>
      <FieldLabel>Subscription Plan</FieldLabel>
      <RadioGroupRoot defaultValue="monthly">
        <Field orientation="horizontal">
          <RadioGroupRootItem value="monthly" id="monthly" />
          <FieldLabel htmlFor="monthly">Monthly ($9.99/month)</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupRootItem value="yearly" id="yearly" />
          <FieldLabel htmlFor="yearly">Yearly ($99.99/year)</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupRootItem value="lifetime" id="lifetime" />
          <FieldLabel htmlFor="lifetime">Lifetime ($299.99)</FieldLabel>
        </Field>
      </RadioGroupRoot>
      <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
    </Field>
  ),
};

export const SwitchField: Story = {
  render: () => (
    <Field orientation="horizontal">
      <Switch id="mfa" />
      <FieldLabel htmlFor="mfa">Multi-factor authentication</FieldLabel>
    </Field>
  ),
};

export const FieldGroupWithSeparator: Story = {
  render: () => (
    <FieldGroup>
      <Field orientation="horizontal">
        <Checkbox id="pushNotif" />
        <FieldContent>
          <FieldTitle>Push notifications</FieldTitle>
          <FieldDescription>Get notified when ChatGPT responds to requests.</FieldDescription>
        </FieldContent>
      </Field>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="emailNotif" />
        <FieldContent>
          <FieldTitle>Email notifications</FieldTitle>
          <FieldDescription>Get notified via email for important updates.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const SeparatorWithText: Story = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="email-login">Email</FieldLabel>
        <Input id="email-login" type="email" placeholder="you@example.com" />
      </Field>
      <FieldSeparator>Or continue with</FieldSeparator>
      <Button variant="outline" className="w-full">
        Sign in with Google
      </Button>
    </FieldGroup>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <FieldGroup className="@container/field-group">
      <Field orientation="responsive">
        <FieldLabel htmlFor="name-responsive">Name</FieldLabel>
        <FieldContent>
          <Input id="name-responsive" placeholder="Enter your name" />
          <FieldDescription>Provide your full name for identification.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="responsive">
        <FieldLabel htmlFor="email-responsive">Email</FieldLabel>
        <FieldContent>
          <Input id="email-responsive" type="email" placeholder="you@example.com" />
          <FieldDescription>We'll never share your email with anyone.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Profile Information</FieldLegend>
      <FieldDescription>Fill in your profile details below.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fullname">Full name</FieldLabel>
          <Input id="fullname" placeholder="John Doe" />
          <FieldDescription>This appears on invoices and emails.</FieldDescription>
        </Field>
        <Field data-invalid>
          <FieldLabel htmlFor="username-form">Username</FieldLabel>
          <Input id="username-form" defaultValue="john" aria-invalid />
          <FieldError>Choose another username.</FieldError>
        </Field>
        <Field orientation="horizontal">
          <Switch id="newsletter-form" />
          <FieldLabel htmlFor="newsletter-form">Subscribe to the newsletter</FieldLabel>
        </Field>
      </FieldGroup>
      <FieldGroup className="mt-6">
        <Button type="submit">Save Changes</Button>
        <Button variant="outline">Cancel</Button>
      </FieldGroup>
    </FieldSet>
  ),
};

export const PaymentForm: Story = {
  render: () => (
    <FieldSet className="max-w-2xl">
      <FieldLegend>Payment Method</FieldLegend>
      <FieldDescription>All transactions are secure and encrypted</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="cardName">Name on Card</FieldLabel>
          <Input id="cardName" placeholder="John Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="cardNumber">Card Number</FieldLabel>
          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          <FieldDescription>Enter your 16-digit card number</FieldDescription>
        </Field>
        <div className="grid grid-cols-3 gap-4">
          <Field>
            <FieldLabel htmlFor="month">Month</FieldLabel>
            <Input id="month" placeholder="MM" />
          </Field>
          <Field>
            <FieldLabel htmlFor="year">Year</FieldLabel>
            <Input id="year" placeholder="YYYY" />
          </Field>
          <Field>
            <FieldLabel htmlFor="cvv">CVV</FieldLabel>
            <Input id="cvv" placeholder="123" />
          </Field>
        </div>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend variant="label">Billing Address</FieldLegend>
          <FieldDescription>The billing address associated with your payment method</FieldDescription>
          <Field orientation="horizontal">
            <Checkbox id="sameAddress" />
            <FieldLabel htmlFor="sameAddress">Same as shipping address</FieldLabel>
          </Field>
        </FieldSet>
        <Field>
          <FieldLabel htmlFor="comments">Comments</FieldLabel>
          <Textarea id="comments" rows={3} />
        </Field>
      </FieldGroup>
      <FieldGroup className="mt-6 flex-row">
        <Button type="submit">Submit</Button>
        <Button variant="outline">Cancel</Button>
      </FieldGroup>
    </FieldSet>
  ),
};

// --- Prop-based API examples ---

export const PropsBasic: Story = {
  render: () => (
    <Field
      label="Username"
      description="Choose a unique username for your account."
      labelProps={{ htmlFor: 'username-props' }}
    >
      <Input id="username-props" placeholder="Enter username" />
    </Field>
  ),
};

export const PropsWithError: Story = {
  render: () => (
    <Field
      label="Email"
      labelProps={{ htmlFor: 'email-props' }}
      error="Please enter a valid email address."
      data-invalid
    >
      <Input id="email-props" type="email" aria-invalid defaultValue="invalid" />
    </Field>
  ),
};

export const PropsWithMultipleErrors: Story = {
  render: () => (
    <Field
      label="Password"
      labelProps={{ htmlFor: 'password-props' }}
      errors={[
        { message: 'Password must be at least 8 characters long' },
        { message: 'Password must contain at least one number' },
      ]}
      data-invalid
    >
      <Input id="password-props" type="password" aria-invalid />
    </Field>
  ),
};

export const PropsHorizontal: Story = {
  render: () => (
    <Field orientation="horizontal" label="Subscribe to newsletter" labelProps={{ htmlFor: 'newsletter-props' }}>
      <Switch id="newsletter-props" />
    </Field>
  ),
};

export const PropsHorizontalWithDescription: Story = {
  render: () => (
    <Field
      orientation="horizontal"
      label="Accept terms and conditions"
      description="You must accept the terms to continue."
      labelProps={{ htmlFor: 'terms-props' }}
    >
      <Checkbox id="terms-props" />
    </Field>
  ),
};

export const PropsSelectField: Story = {
  render: () => (
    <Field
      label="Department"
      description="Select your department or area of work."
      labelProps={{ htmlFor: 'dept-props' }}
    >
      <SelectRoot>
        <SelectTrigger id="dept-props">
          <SelectValue placeholder="Choose department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eng">Engineering</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
        </SelectContent>
      </SelectRoot>
    </Field>
  ),
};
