import type { Meta, StoryObj } from '@storybook/react';

import { NativeRadioGroup } from './NativeRadioGroup';

const meta: Meta<typeof NativeRadioGroup> = {
  title: 'Components/NativeRadioGroup',
  component: NativeRadioGroup,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NativeRadioGroup>;

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
    label: 'Choose an option',
  },
};
export const WithInline: Story = {
  args: {
    ...WithLabel.args,
    inline: true,
  },
};

export const WithInvalidWithoutMessage: Story = {
  args: {
    ...WithInline.args,
    isInvalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: { ...WithInvalidWithoutMessage.args, errorMessage: 'This field is required.' },
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
