import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Basic: Story = {
  args: {},
};

export const WithContent: Story = {
  args: {
    content: 'Loading...',
  },
};

export const SpinnerSizeXs: Story = {
  args: {
    content: 'Loading...',
    spinnerProps: { size: 'xs' },
  },
};

export const SpinnerSizeSm: Story = {
  args: {
    content: 'Loading...',
    spinnerProps: { size: 'sm' },
  },
};

export const SpinnerSizeMd: Story = {
  args: {
    content: 'Loading...',
    spinnerProps: { size: 'md' },
  },
};

export const SpinnerSizeLg: Story = {
  args: {
    content: 'Loading...',
    spinnerProps: { size: 'lg' },
  },
};

export const SpinnerSizeXl: Story = {
  args: {
    content: 'Loading...',
    spinnerProps: { size: 'xl' },
  },
};

export const CustomColor: Story = {
  args: {
    content: 'Processing...',
    className: 'text-primary',
  },
};

export const ColumnLayout: Story = {
  args: {
    content: 'Please wait...',
    spinnerProps: { size: 'xl' },
    className: 'flex-col gap-3',
  },
};

export const InlineButton: Story = {
  render: () => (
    <Button disabled>
      <Loading content="Saving…" />
    </Button>
  ),
};

export const CenteredOverlay: Story = {
  render: () => (
    <div className="relative h-48 w-full rounded-md border bg-muted/30">
      <div className="absolute inset-0 flex items-center justify-center bg-background/70">
        <Loading spinnerProps={{ size: 'lg' }} content="Refreshing..." />
      </div>
    </div>
  ),
};
