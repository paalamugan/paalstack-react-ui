import type { Meta, StoryObj } from '@storybook/react';

import { NativeCheckboxGroup } from './NativeCheckboxGroup';

const meta: Meta<typeof NativeCheckboxGroup> = {
  title: 'Components/NativeCheckboxGroup',
  component: NativeCheckboxGroup,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NativeCheckboxGroup>;

export const Default: Story = {
  args: {
    id: 'options',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
};

export const WithStrings: Story = {
  args: {
    ...Default.args,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const WithNumbers: Story = {
  args: {
    ...Default.args,
    options: [1, 2, 3],
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: 'Choose options',
  },
};

export const WithInline: Story = {
  args: {
    ...WithLabel.args,
    inline: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...WithInline.args,
    defaultValue: ['1', '2'],
  },
};

export const WithInvalidWithoutMessage: Story = {
  args: {
    ...WithInline.args,
    isInvalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: { ...WithInvalidWithoutMessage.args, errorMessage: 'Please select at least one option.' },
};

export const Disabled: Story = {
  args: {
    ...WithInline.args,
    id: 'terms2',
    disabled: true,
  },
};

export const SwapRight: Story = {
  args: {
    ...WithInline.args,
    id: 'terms3',
    swapRight: true,
  },
};

export const Required: Story = {
  args: {
    ...WithInline.args,
    id: 'terms4',
    required: true,
  },
};

export const WithSwapRightRequired: Story = {
  args: {
    ...Required.args,
    id: 'terms5',
    swapRight: true,
  },
};
