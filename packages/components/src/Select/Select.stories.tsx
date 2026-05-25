/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    triggerClassName: 'w-[250px]',
  },
  argTypes: {
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback when the value changes',
    },
    value: {
      description: 'The value of the select',
    },
    triggerClassName: {
      table: { disable: true },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

// ─────────────────────────────────────────────
// Shared option data
// ─────────────────────────────────────────────

const fruitOptions = [
  { label: 'Apple', value: 'apple', key: 'apple' },
  { label: 'Banana', value: 'banana', key: 'banana' },
  { label: 'Blueberry', value: 'blueberry', key: 'blueberry' },
  { label: 'Grapes', value: 'grapes', key: 'grapes' },
  { label: 'Pineapple', value: 'pineapple', key: 'pineapple' },
];

const groupedFoodOptions = [
  {
    label: 'Fruits',
    options: fruitOptions,
  },
  {
    label: 'Vegetables',
    options: [
      { label: 'Aubergine', value: 'aubergine', key: 'aubergine' },
      { label: 'Broccoli', value: 'broccoli', key: 'broccoli' },
      { label: 'Carrot', value: 'carrot', key: 'carrot', disabled: true },
      { label: 'Courgette', value: 'courgette', key: 'courgette' },
      { label: 'Leek', value: 'leek', key: 'leek' },
    ],
  },
  {
    label: 'Meat',
    options: [
      { label: 'Beef', value: 'beef', key: 'beef' },
      { label: 'Chicken', value: 'chicken', key: 'chicken' },
      { label: 'Lamb', value: 'lamb', key: 'lamb' },
      { label: 'Pork', value: 'pork', key: 'pork' },
    ],
  },
];

// ─────────────────────────────────────────────
// Props API
// ─────────────────────────────────────────────

export const Simple: Story = {
  args: {
    options: fruitOptions,
  },
};

export const StringOptions: Story = {
  args: {
    options: ['apple', 'banana', 'blueberry', 'grapes', 'pineapple'],
  },
};

export const NumberOptions: Story = {
  args: {
    options: [1, 2, 3, 4, 5],
  },
};

export const WithLabel: Story = {
  args: {
    ...Simple.args,
    label: 'Select a fruit',
  },
};

export const Disabled: Story = {
  args: {
    ...Simple.args,
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    ...WithLabel.args,
    label: 'Small Trigger',
    triggerClassName: 'w-[250px] h-7',
  },
  render: (args) => <Select {...args} triggerClassName={undefined} className="w-[250px]" />,
};

export const InlineLabel: Story = {
  args: {
    ...WithLabel.args,
    inline: true,
    triggerClassName: 'w-[180px]',
    label: 'Country',
    options: ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina'],
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    ...Simple.args,
    placeholder: 'Pick a fruit…',
  },
};

export const WithInvalidWithoutMessage: Story = {
  args: {
    ...WithLabel.args,
    isInvalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: {
    ...WithInvalidWithoutMessage.args,
    errorMessage: 'This field is required.',
  },
};

export const DisabledOptions: Story = {
  args: {
    label: 'Choose a vegetable',
    options: [
      { label: 'Broccoli', value: 'broccoli', key: 'broccoli' },
      { label: 'Carrot (unavailable)', value: 'carrot', key: 'carrot', disabled: true },
      { label: 'Spinach', value: 'spinach', key: 'spinach' },
      { label: 'Kale (unavailable)', value: 'kale', key: 'kale', disabled: true },
      { label: 'Leek', value: 'leek', key: 'leek' },
    ],
  },
};

export const NoOptions: Story = {
  args: {
    label: 'Empty list',
    options: [],
    noOptionsMessage: 'No items available at this time.',
  },
};

export const SingleGroupWithLabel: Story = {
  args: {
    ...WithLabel.args,
    options: [{ label: 'Fruits', options: fruitOptions }],
  },
};

export const MultipleGroup: Story = {
  args: {
    options: groupedFoodOptions,
  },
};

export const MultipleGroupWithLabel: Story = {
  args: {
    ...MultipleGroup.args,
    label: 'Select a food',
  },
};

export const ResetSelect: Story = {
  args: Simple.args,
  render: (args) => {
    const { options, ...rest } = args;
    const [value, setValue] = useState<string>('');
    return (
      <>
        <Select {...rest} options={options} value={value} onValueChange={(v) => setValue(v as string)} />
        <Button variant="outline" className="mt-4" onClick={() => setValue('')}>
          Reset
        </Button>
      </>
    );
  },
};

export const Controlled: Story = {
  args: Simple.args,
  render: (args) => {
    const { options } = args;
    const [value, setValue] = useState<string | null>(null);
    return <Select className="w-[250px]" options={options} value={value} onValueChange={setValue} />;
  },
};

export const ControlledMultiple: Story = {
  args: MultipleGroup.args,
  render: (args) => {
    const { options } = args;
    const [value, setValue] = useState<string[]>([]);
    return <Select className="w-[250px]" multiple options={options} value={value} onValueChange={setValue} />;
  },
};

// ─────────────────────────────────────────────
// Composition API
// ─────────────────────────────────────────────

export const CompositionBasic: Story = {
  name: 'Composition API – Basic',
  render: () => (
    <SelectRoot>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {fruitOptions.map((opt) => (
          <SelectItem key={opt.key} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  ),
};

export const CompositionGrouped: Story = {
  name: 'Composition API – Grouped',
  render: () => (
    <SelectRoot>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select food…" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {fruitOptions.map((opt) => (
            <SelectItem key={opt.key} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="carrot" disabled>
            Carrot (unavailable)
          </SelectItem>
          <SelectItem value="leek">Leek</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  ),
};

export const CompositionSmallTrigger: Story = {
  name: 'Composition API – Small Trigger',
  render: () => (
    <SelectRoot>
      <SelectTrigger className="w-[200px]" size="sm">
        <SelectValue placeholder="Pick one…" />
      </SelectTrigger>
      <SelectContent>
        {fruitOptions.map((opt) => (
          <SelectItem key={opt.key} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  ),
};

export const CompositionControlled: Story = {
  name: 'Composition API – Controlled',
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="flex flex-col gap-2">
        <SelectRoot value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            {fruitOptions.map((opt) => (
              <SelectItem key={opt.key} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <p className="text-sm text-muted-foreground">
          Selected: <strong>{value ?? 'none'}</strong>
        </p>
        <Button variant="outline" size="sm" className="w-fit" onClick={() => setValue(null)}>
          Clear
        </Button>
      </div>
    );
  },
};

export const CompositionMultiple: Story = {
  name: 'Composition API – Multiple Selection',
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div className="flex flex-col gap-2">
        <SelectRoot multiple value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select fruits…" />
          </SelectTrigger>
          <SelectContent>
            {fruitOptions.map((opt) => (
              <SelectItem key={opt.key} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <p className="text-sm text-muted-foreground">
          Selected: <strong>{value.length ? value.join(', ') : 'none'}</strong>
        </p>
      </div>
    );
  },
};

export const CompositionInvalidState: Story = {
  name: 'Composition API – Invalid State',
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <SelectRoot value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[250px]" aria-invalid={!value}>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          {fruitOptions.map((opt) => (
            <SelectItem key={opt.key} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    );
  },
};
