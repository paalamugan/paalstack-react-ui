/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Field, FieldDescription, FieldError, FieldLabel } from '../Field';
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption, NativeSelectRoot } from './NativeSelect';

const meta: Meta<typeof NativeSelect> = {
  title: 'Components/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof NativeSelect>;

// ─── Props API ────────────────────────────────────────────────────────────────

export const PropsAPIBasic: Story = {
  name: 'Props API — Basic',
  render: () => (
    <NativeSelect
      label="Fruit"
      placeholder="Select a fruit"
      options={['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']}
      onValueChange={(v) => console.log('Selected:', v)}
    />
  ),
};

export const PropsAPIWithObjectOptions: Story = {
  name: 'Props API — Object Options',
  render: () => (
    <NativeSelect
      label="Framework"
      placeholder="Select a framework"
      options={[
        { value: 'react', label: 'React', key: 'react' },
        { value: 'vue', label: 'Vue.js', key: 'vue' },
        { value: 'angular', label: 'Angular', key: 'angular' },
        { value: 'svelte', label: 'Svelte', key: 'svelte' },
        { value: 'solid', label: 'SolidJS', key: 'solid' },
      ]}
      onValueChange={(v) => console.log('Selected:', v)}
    />
  ),
};

export const PropsAPIWithGroups: Story = {
  name: 'Props API — Grouped Options',
  render: () => (
    <NativeSelect
      label="Department"
      placeholder="Select a department"
      options={[
        {
          label: 'Engineering',
          options: [
            { value: 'frontend', label: 'Frontend', key: 'frontend' },
            { value: 'backend', label: 'Backend', key: 'backend' },
            { value: 'devops', label: 'DevOps', key: 'devops' },
          ],
        },
        {
          label: 'Sales',
          options: [
            { value: 'sales-rep', label: 'Sales Rep', key: 'sales-rep' },
            { value: 'account-manager', label: 'Account Manager', key: 'account-manager' },
          ],
        },
        {
          label: 'Support',
          options: [
            { value: 'customer-support', label: 'Customer Support', key: 'customer-support' },
            { value: 'product-manager', label: 'Product Manager', key: 'product-manager' },
          ],
        },
      ]}
      onValueChange={(v) => console.log('Selected:', v)}
    />
  ),
};

export const PropsAPIWithValidation: Story = {
  name: 'Props API — With Validation',
  render: () => {
    const [value, setValue] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const isInvalid = submitted && !value;

    return (
      <form
        className="flex w-64 flex-col"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <NativeSelect
          label="Country"
          required
          placeholder="Select a country"
          isInvalid={isInvalid}
          errorMessage="Please select a country"
          options={['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany']}
          value={value}
          onValueChange={setValue}
        />
        <Button type="submit" size="sm" className="mt-4">
          Submit
        </Button>
      </form>
    );
  },
};

export const PropsAPIInline: Story = {
  name: 'Props API — Inline Label',
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <NativeSelect
        label="Priority"
        inline
        options={['Low', 'Medium', 'High', 'Urgent']}
        defaultValue="medium"
        onValueChange={(v) => console.log('Priority:', v)}
      />
      <NativeSelect
        label="Status"
        inline
        options={[
          { value: 'todo', label: 'To Do', key: 'todo' },
          { value: 'in-progress', label: 'In Progress', key: 'in-progress' },
          { value: 'done', label: 'Done', key: 'done' },
        ]}
        defaultValue="todo"
        onValueChange={(v) => console.log('Status:', v)}
      />
    </div>
  ),
};

export const PropsAPIDisabled: Story = {
  name: 'Props API — Disabled',
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <NativeSelect
        label="Locked option"
        options={['Option A', 'Option B', 'Option C']}
        defaultValue="Option A"
        disabled
      />
      <NativeSelect
        label="With disabled options"
        placeholder="Select option"
        options={[
          { value: 'a', label: 'Available', key: 'a' },
          { value: 'b', label: 'Unavailable', key: 'b', disabled: true },
          { value: 'c', label: 'Available', key: 'c' },
        ]}
      />
    </div>
  ),
};

export const PropsAPISizes: Story = {
  name: 'Props API — Sizes',
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <NativeSelect
        label="Default size"
        size="default"
        options={['Apple', 'Banana', 'Blueberry']}
        placeholder="Select a fruit"
      />
      <NativeSelect
        label="Small size"
        size="sm"
        options={['Apple', 'Banana', 'Blueberry']}
        placeholder="Select a fruit"
      />
    </div>
  ),
};

const PropsAPIDependentDemo = () => {
  const [country, setCountry] = React.useState('');
  const [region, setRegion] = React.useState('');

  const regionMap: Record<string, string[]> = {
    us: ['California', 'Texas', 'Florida', 'New York'],
    ca: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    uk: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  };

  return (
    <div className="flex w-64 flex-col gap-4">
      <NativeSelect
        label="Country"
        placeholder="Select country"
        options={[
          { value: 'us', label: 'United States', key: 'us' },
          { value: 'ca', label: 'Canada', key: 'ca' },
          { value: 'uk', label: 'United Kingdom', key: 'uk' },
        ]}
        value={country}
        onValueChange={(v) => {
          setCountry(v);
          setRegion('');
        }}
      />
      <NativeSelect
        label="Region"
        placeholder="Select region"
        disabled={!country}
        options={(regionMap[country] ?? []).map((r) => ({
          value: r.toLowerCase().replace(/\s+/g, '-'),
          label: r,
          key: r,
        }))}
        value={region}
        onValueChange={setRegion}
      />
    </div>
  );
};

export const PropsAPIDependentSelects: Story = {
  name: 'Props API — Dependent Selects',
  render: () => <PropsAPIDependentDemo />,
};

// ─── Composition API ──────────────────────────────────────────────────────────

export const CompositionBasic: Story = {
  name: 'Composition API — Basic',
  render: () => (
    <NativeSelectRoot>
      <NativeSelectOption value="">Select a fruit</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
    </NativeSelectRoot>
  ),
};

export const CompositionWithGroups: Story = {
  name: 'Composition API — Grouped Options',
  render: () => (
    <NativeSelectRoot>
      <NativeSelectOption value="">Select department</NativeSelectOption>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
        <NativeSelectOption value="backend">Backend</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Sales">
        <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
        <NativeSelectOption value="account-manager">Account Manager</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Support">
        <NativeSelectOption value="customer-support">Customer Support</NativeSelectOption>
        <NativeSelectOption value="product-manager">Product Manager</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelectRoot>
  ),
};

export const CompositionSizes: Story = {
  name: 'Composition API — Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Default</label>
        <NativeSelectRoot>
          <NativeSelectOption value="">Select fruit</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectRoot>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Small</label>
        <NativeSelectRoot size="sm">
          <NativeSelectOption value="">Select fruit</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectRoot>
      </div>
    </div>
  ),
};

export const CompositionDisabled: Story = {
  name: 'Composition API — Disabled',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Disabled select</label>
        <NativeSelectRoot disabled>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
        </NativeSelectRoot>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">With disabled options</label>
        <NativeSelectRoot>
          <NativeSelectOption value="">Select option</NativeSelectOption>
          <NativeSelectOption value="a">Option A</NativeSelectOption>
          <NativeSelectOption value="b" disabled>
            Option B (Unavailable)
          </NativeSelectOption>
          <NativeSelectOption value="c">Option C</NativeSelectOption>
        </NativeSelectRoot>
      </div>
    </div>
  ),
};

export const CompositionWithField: Story = {
  name: 'Composition API — With Field',
  render: () => (
    <Field>
      <FieldLabel>Choose fruit</FieldLabel>
      <NativeSelectRoot defaultValue="">
        <NativeSelectOption value="">Select a fruit</NativeSelectOption>
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
      </NativeSelectRoot>
      <FieldDescription>Select your favorite fruit from the list.</FieldDescription>
    </Field>
  ),
};

export const CompositionWithValidation: Story = {
  name: 'Composition API — With Validation',
  render: () => {
    const [value, setValue] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);
    const isInvalid = submitted && !value;

    return (
      <form
        className="flex w-64 flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <Field>
          <FieldLabel>Required field</FieldLabel>
          <NativeSelectRoot value={value} onChange={(e) => setValue(e.target.value)} aria-invalid={isInvalid}>
            <NativeSelectOption value="">Select option</NativeSelectOption>
            <NativeSelectOption value="a">Option A</NativeSelectOption>
            <NativeSelectOption value="b">Option B</NativeSelectOption>
            <NativeSelectOption value="c">Option C</NativeSelectOption>
          </NativeSelectRoot>
          {isInvalid && <FieldError>This field is required</FieldError>}
        </Field>
        <Button type="submit" size="sm">
          Submit
        </Button>
      </form>
    );
  },
};

export const CompositionControlled: Story = {
  name: 'Composition API — Controlled',
  render: () => {
    const [value, setValue] = React.useState('');

    return (
      <div className="flex w-64 flex-col gap-4">
        <Field>
          <FieldLabel>Select fruit</FieldLabel>
          <NativeSelectRoot value={value} onChange={(e) => setValue(e.target.value)}>
            <NativeSelectOption value="">Choose a fruit</NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
            <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
          </NativeSelectRoot>
          <FieldDescription>Your favorite fruit.</FieldDescription>
        </Field>
        {value && (
          <p className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            Selected: <strong>{value}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const CompositionCountries: Story = {
  name: 'Composition API — Country Selector',
  render: () => (
    <Field>
      <FieldLabel>Country</FieldLabel>
      <NativeSelectRoot>
        <NativeSelectOption value="">Choose a country</NativeSelectOption>
        <NativeSelectOptGroup label="North America">
          <NativeSelectOption value="us">United States</NativeSelectOption>
          <NativeSelectOption value="ca">Canada</NativeSelectOption>
          <NativeSelectOption value="mx">Mexico</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Europe">
          <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
          <NativeSelectOption value="fr">France</NativeSelectOption>
          <NativeSelectOption value="de">Germany</NativeSelectOption>
          <NativeSelectOption value="es">Spain</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Asia">
          <NativeSelectOption value="jp">Japan</NativeSelectOption>
          <NativeSelectOption value="cn">China</NativeSelectOption>
          <NativeSelectOption value="in">India</NativeSelectOption>
          <NativeSelectOption value="kr">South Korea</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelectRoot>
      <FieldDescription>Your country of residence.</FieldDescription>
    </Field>
  ),
};

export const CompositionTimeZones: Story = {
  name: 'Composition API — Time Zones',
  render: () => (
    <Field>
      <FieldLabel>Time zone</FieldLabel>
      <NativeSelectRoot defaultValue="utc" className="w-full">
        <NativeSelectOptGroup label="America">
          <NativeSelectOption value="pst">Pacific Time (PST)</NativeSelectOption>
          <NativeSelectOption value="mst">Mountain Time (MST)</NativeSelectOption>
          <NativeSelectOption value="cst">Central Time (CST)</NativeSelectOption>
          <NativeSelectOption value="est">Eastern Time (EST)</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Europe">
          <NativeSelectOption value="gmt">Greenwich Mean Time (GMT)</NativeSelectOption>
          <NativeSelectOption value="cet">Central European Time (CET)</NativeSelectOption>
          <NativeSelectOption value="eet">Eastern European Time (EET)</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Asia / Pacific">
          <NativeSelectOption value="ist">India Standard Time (IST)</NativeSelectOption>
          <NativeSelectOption value="jst">Japan Standard Time (JST)</NativeSelectOption>
          <NativeSelectOption value="aest">Australian Eastern Time (AEST)</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Other">
          <NativeSelectOption value="utc">Coordinated Universal Time (UTC)</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelectRoot>
      <FieldDescription>Select your time zone.</FieldDescription>
    </Field>
  ),
};

const CompositionFormDemo = () => {
  const [formData, setFormData] = React.useState({
    department: '',
    role: '',
    priority: 'medium',
    status: 'todo',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const roleOptions: Record<string, Array<{ value: string; label: string }>> = {
    engineering: [
      { value: 'frontend', label: 'Frontend Developer' },
      { value: 'backend', label: 'Backend Developer' },
      { value: 'devops', label: 'DevOps Engineer' },
    ],
    sales: [
      { value: 'rep', label: 'Sales Representative' },
      { value: 'manager', label: 'Account Manager' },
    ],
    support: [
      { value: 'agent', label: 'Support Agent' },
      { value: 'lead', label: 'Support Lead' },
    ],
  };

  const isValid = !!formData.department && !!formData.role;

  return (
    <form
      className="flex w-80 flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <Field>
        <FieldLabel>Department *</FieldLabel>
        <NativeSelectRoot
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value, role: '' })}
          aria-invalid={submitted && !formData.department}
          className="w-full"
        >
          <NativeSelectOption value="">Select department</NativeSelectOption>
          <NativeSelectOption value="engineering">Engineering</NativeSelectOption>
          <NativeSelectOption value="sales">Sales</NativeSelectOption>
          <NativeSelectOption value="support">Support</NativeSelectOption>
        </NativeSelectRoot>
        {submitted && !formData.department && <FieldError>Department is required</FieldError>}
      </Field>

      <Field>
        <FieldLabel>Role *</FieldLabel>
        <NativeSelectRoot
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          disabled={!formData.department}
          aria-invalid={submitted && !formData.role}
          className="w-full"
        >
          <NativeSelectOption value="">Select role</NativeSelectOption>
          {(roleOptions[formData.department] ?? []).map((r) => (
            <NativeSelectOption key={r.value} value={r.value}>
              {r.label}
            </NativeSelectOption>
          ))}
        </NativeSelectRoot>
        {submitted && !formData.role && <FieldError>Role is required</FieldError>}
        {!formData.department && <FieldDescription>Select a department first.</FieldDescription>}
      </Field>

      <Field>
        <FieldLabel>Priority</FieldLabel>
        <NativeSelectRoot
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          className="w-full"
        >
          <NativeSelectOption value="low">Low</NativeSelectOption>
          <NativeSelectOption value="medium">Medium</NativeSelectOption>
          <NativeSelectOption value="high">High</NativeSelectOption>
        </NativeSelectRoot>
      </Field>

      <Field>
        <FieldLabel>Status</FieldLabel>
        <NativeSelectRoot
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="w-full"
        >
          <NativeSelectOption value="todo">To Do</NativeSelectOption>
          <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
          <NativeSelectOption value="done">Done</NativeSelectOption>
        </NativeSelectRoot>
      </Field>

      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>

      {submitted && isValid && (
        <p className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">
          Form submitted successfully!
        </p>
      )}
    </form>
  );
};

export const CompositionCompleteForm: Story = {
  name: 'Composition API — Complete Form',
  render: () => <CompositionFormDemo />,
};
