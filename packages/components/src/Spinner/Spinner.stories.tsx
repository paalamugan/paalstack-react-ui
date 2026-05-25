import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { InputGroup, InputGroupAddon } from '../InputGroup';
import { Item, ItemContent } from '../Item';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size for the Spinner',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
      control: {
        type: 'select',
      },
    },
    className: {
      description: 'Additional CSS classes',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="text-primary" />
      <Spinner className="text-success" />
      <Spinner className="text-warning" />
      <Spinner className="text-danger" />
      <Spinner className="text-info" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button disabled>
        <Spinner size="sm" />
        Loading...
      </Button>
      <Button disabled data-icon="inline-start">
        <Spinner size="sm" />
        Please wait
      </Button>
      <Button disabled data-icon="inline-end">
        Processing
        <Spinner size="sm" />
      </Button>
    </div>
  ),
};

export const InBadge: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Badge>
        <Spinner size="xs" />
        Syncing
      </Badge>
      <Badge data-icon="inline-start">
        <Spinner size="xs" />
        Updating
      </Badge>
      <Badge data-icon="inline-end">
        Processing
        <Spinner size="xs" />
      </Badge>
    </div>
  ),
};

export const InInputGroup: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <InputGroup>
        <InputGroupAddon className="pl-3">
          <Spinner size="sm" />
        </InputGroupAddon>
        <input className="flex-1 px-3 py-2" placeholder="Validating..." disabled />
      </InputGroup>
      <InputGroup>
        <input className="flex-1 px-3 py-2" placeholder="Loading..." disabled />
        <InputGroupAddon className="pr-3">
          <Spinner size="sm" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const InItem: Story = {
  render: () => (
    <div className="w-full max-w-md rounded-lg border">
      <Item>
        <ItemContent>
          <div className="font-semibold">Processing payment...</div>
          <div className="text-sm text-muted-foreground">$100.00</div>
        </ItemContent>
        <Spinner size="sm" />
      </Item>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner size="sm" />
      <span>Loading data...</span>
    </div>
  ),
};

export const CenteredLoading: Story = {
  render: () => (
    <div className="flex h-64 items-center justify-center rounded-lg border">
      <Spinner size="xl" />
    </div>
  ),
};
