import type { Meta, StoryObj } from '@storybook/react';

import { RxAccessibility as AccessibilityIcon } from '@/icons/rx';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    icon: <AccessibilityIcon className="size-8" />,
  },
};

export const Outline: Story = {
  args: {
    ...Basic.args,
    outline: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const OutlineWithDisabled: Story = {
  args: {
    ...Outline.args,
    disabled: true,
  },
};
