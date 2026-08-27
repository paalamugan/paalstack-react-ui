import type { Meta, StoryObj } from '@storybook/react';

import { Marker, MarkerContent, MarkerIcon } from './Marker';

const meta: Meta<typeof Marker> = {
  title: 'Components/Marker',
  component: Marker,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'separator', 'border'],
      description: 'The visual style of the marker',
    },
    asChild: {
      control: 'boolean',
      description: 'Render the marker as the child element instead of a div',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Marker>;

export const Default: Story = {
  render: () => <Marker>Today</Marker>,
};

export const WithIcon: Story = {
  render: () => (
    <Marker>
      <MarkerIcon>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
      </MarkerIcon>
      <MarkerContent>Yesterday</MarkerContent>
    </Marker>
  ),
};

export const Separator: Story = {
  render: () => (
    <Marker variant="separator">
      <MarkerContent>Monday, June 9</MarkerContent>
    </Marker>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Marker variant="border">
      <MarkerContent>Unread messages</MarkerContent>
    </Marker>
  ),
};

export const InMessageList: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-6 rounded-xl border p-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <p className="text-sm">Hey, did you finish the report?</p>
      <Marker>
        <MarkerContent>2 hours later</MarkerContent>
      </Marker>
      <p className="text-sm">Just sent it over.</p>
      <Marker variant="border">
        <MarkerContent>Conversation ended</MarkerContent>
      </Marker>
    </div>
  ),
};
