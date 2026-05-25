/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { COLOR_VARIANTS } from '@/shared/constants';

import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      table: {
        disable: true,
      },
    },
    value: {
      control: { type: 'select' },
      options: ['option-one', 'option-two', 'option-three'],
    },
    variant: {
      options: COLOR_VARIANTS,
      control: { type: 'radio' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    options: [
      {
        label: 'Option One',
        value: 'option-one',
        key: 'option-one',
      },
      {
        label: 'Option Two',
        value: 'option-two',
        key: 'option-two',
      },
      {
        label: ' Option Three',
        value: 'option-three',
        key: 'option-three',
      },
    ],
    defaultValue: 'option-two',
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: 'Radio Group',
  },
};

export const WithInvalidWithoutMessage: Story = {
  args: {
    ...WithLabel.args,
    isInvalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: { ...WithInvalidWithoutMessage.args, errorMessage: 'This field is required.' },
};

export const WithLabelAndRequired: Story = {
  args: {
    ...WithLabel.args,
    required: true,
  },
};

export const WithLabelAndRequiredAndInvalid: Story = {
  args: {
    ...WithLabelAndRequired.args,
    isInvalid: true,
  },
};

export const WithInline: Story = {
  args: {
    ...Default.args,
    inline: true,
  },
};

export const WithSwapRight: Story = {
  args: {
    ...Default.args,
    swapRight: true,
  },
};

export const WithSwapRightInline: Story = {
  args: {
    ...WithInline.args,
    swapRight: true,
  },
};

export const SuccessVariant: Story = {
  args: {
    ...Default.args,
    variant: 'success',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('option-two');
    return <RadioGroup {...args} value={value} onValueChange={(value) => setValue(value as string)} />;
  },
  args: {
    ...Default.args,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    options: [
      {
        label: 'Option One',
        value: 'option-one',
      },
      {
        label: 'Option Two',
        value: 'option-two',
        disabled: true,
      },
    ],
  },
};
