import type { Meta, StoryObj } from '@storybook/react';

import {
  RxExclamationTriangle as AlertIcon,
  RxBell as BellIcon,
  RxFile as FileIcon,
  RxHome as HomeIcon,
  RxPerson as PersonIcon,
} from '@/icons/rx';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from './Item';

const meta: Meta<typeof Item> = {
  title: 'Components/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style of the item',
      control: 'select',
      options: ['default', 'outline', 'muted'],
    },
    size: {
      description: 'Size of the item',
      control: 'select',
      options: ['default', 'sm', 'xs'],
    },
    asChild: {
      description: 'Render as a child element',
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Basic: Story = {
  render: () => (
    <Item>
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>A simple item with title and description.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm">Action</Button>
      </ItemActions>
    </Item>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Item>
      <ItemMedia variant="icon">
        <BellIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Security Alert</ItemTitle>
        <ItemDescription>New login detected from unknown device.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm">Review</Button>
      </ItemActions>
    </Item>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <Item>
      <ItemMedia variant="avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/42642576" fallback="PS" className="size-10" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Evil Rabbit</ItemTitle>
        <ItemDescription>Last seen 5 months ago</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <FileIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Outline Variant</ItemTitle>
        <ItemDescription>Outlined style with a visible border.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          View
        </Button>
      </ItemActions>
    </Item>
  ),
};

export const MutedVariant: Story = {
  render: () => (
    <Item variant="muted">
      <ItemMedia variant="icon">
        <AlertIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Muted Variant</ItemTitle>
        <ItemDescription>Muted background for secondary content.</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Item size="default">
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>The standard size for most use cases.</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="sm">
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>A compact size for dense layouts.</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="xs">
        <ItemContent>
          <ItemTitle>Extra Small Size</ItemTitle>
          <ItemDescription>The most compact size available.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const ItemGroupExample: Story = {
  render: () => (
    <ItemGroup>
      <Item>
        <ItemMedia variant="avatar">
          <Avatar fallback="S" className="size-10" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>shadcn</ItemTitle>
          <ItemDescription>shadcn@vercel.com</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="avatar">
          <Avatar fallback="M" className="size-10" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>maxleiter</ItemTitle>
          <ItemDescription>maxleiter@vercel.com</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="avatar">
          <Avatar fallback="E" className="size-10" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>evilrabbit</ItemTitle>
          <ItemDescription>evilrabbit@vercel.com</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Item variant="outline">
        <ItemHeader>Model Information</ItemHeader>
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>v0-1.5-sm</ItemTitle>
          <ItemDescription>Everyday tasks and UI generation.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemHeader>Advanced Model</ItemHeader>
        <ItemMedia variant="icon">
          <AlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>v0-1.5-lg</ItemTitle>
          <ItemDescription>Advanced thinking or reasoning.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <FileIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Document Updated</ItemTitle>
        <ItemDescription>Your document has been successfully updated.</ItemDescription>
      </ItemContent>
      <ItemFooter>Last updated 2 minutes ago</ItemFooter>
    </Item>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Item variant="outline">
      <ItemHeader>System Notification</ItemHeader>
      <ItemMedia variant="icon">
        <BellIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Maintenance Scheduled</ItemTitle>
        <ItemDescription>System maintenance is scheduled for this weekend.</ItemDescription>
      </ItemContent>
      <ItemFooter>Scheduled for Saturday, 2:00 AM - 4:00 AM</ItemFooter>
    </Item>
  ),
};

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Item asChild variant="outline" className="hover:bg-muted/50">
        <a href="/dashboard">
          <ItemMedia variant="icon">
            <HomeIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>Learn how to get started with our components.</ItemDescription>
          </ItemContent>
        </a>
      </Item>
      <Item asChild variant="outline" className="hover:bg-muted/50">
        <a href="/external" target="_blank" rel="noopener noreferrer">
          <ItemMedia variant="icon">
            <FileIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>Opens in a new tab with security attributes.</ItemDescription>
          </ItemContent>
        </a>
      </Item>
    </div>
  ),
};

export const NoMediaItem: Story = {
  render: () => (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>No Media Item</ItemTitle>
        <ItemDescription>This item doesn't have any media element, just content.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Edit
        </Button>
        <Button size="sm">Save</Button>
      </ItemActions>
    </Item>
  ),
};

export const MultipleActions: Story = {
  render: () => (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <PersonIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>User Profile</ItemTitle>
        <ItemDescription>Manage your account settings and preferences.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button size="sm" variant="outline">
          Edit
        </Button>
        <Button size="sm">Save</Button>
      </ItemActions>
    </Item>
  ),
};

export const ComplexGroup: Story = {
  render: () => (
    <ItemGroup>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>
          <ItemDescription>Manage your notification preferences</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Configure
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <PersonIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Profile Settings</ItemTitle>
          <ItemDescription>Update your personal information</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Edit
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <AlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security</ItemTitle>
          <ItemDescription>Manage security and authentication</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Manage
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
};

export const MixedVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Item variant="default">
        <ItemMedia variant="icon">
          <BellIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>Transparent background with no border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FileIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>Outlined style with a visible border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <AlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>Muted background for secondary content.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const CompactList: Story = {
  render: () => (
    <ItemGroup>
      <Item size="xs">
        <ItemContent>
          <ItemTitle>First Item</ItemTitle>
        </ItemContent>
      </Item>
      <Item size="xs">
        <ItemContent>
          <ItemTitle>Second Item</ItemTitle>
        </ItemContent>
      </Item>
      <Item size="xs">
        <ItemContent>
          <ItemTitle>Third Item</ItemTitle>
        </ItemContent>
      </Item>
      <Item size="xs">
        <ItemContent>
          <ItemTitle>Fourth Item</ItemTitle>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
};

// --- Prop-based API examples ---

export const PropsBasic: Story = {
  render: () => (
    <Item
      media={<BellIcon className="size-4" />}
      mediaVariant="icon"
      title="Security Alert"
      description="New login detected from unknown device."
      actions={<Button size="sm">Review</Button>}
    />
  ),
};

export const PropsWithIcon: Story = {
  render: () => (
    <Item
      media={<FileIcon className="size-4" />}
      mediaVariant="icon"
      title="Outline Variant"
      description="Outlined style with a visible border."
      actions={
        <Button size="sm" variant="outline">
          View
        </Button>
      }
      variant="outline"
    />
  ),
};

export const PropsWithAvatar: Story = {
  render: () => (
    <Item
      media={<Avatar src="https://avatars.githubusercontent.com/u/42642576" fallback="PS" className="size-10" />}
      mediaVariant="avatar"
      title="Evil Rabbit"
      description="Last seen 5 months ago"
    />
  ),
};

export const PropsOutlineWithHeaderFooter: Story = {
  render: () => (
    <Item
      variant="outline"
      header="Model Information"
      media={<BellIcon className="size-4" />}
      mediaVariant="icon"
      title="v0-1.5-sm"
      description="Everyday tasks and UI generation."
      footer="Last updated 2 days ago"
    />
  ),
};

export const PropsMinimal: Story = {
  render: () => <Item title="No Media Item" description="This item has no media or actions." />,
};

export const PropsWithSubComponentProps: Story = {
  render: () => (
    <Item
      title="Custom Title"
      description="Custom description styling via titleProps and descriptionProps."
      titleProps={{ className: 'text-base' }}
      descriptionProps={{ className: 'text-muted-foreground/80' }}
      variant="outline"
    />
  ),
};

export const PropsGroup: Story = {
  render: () => (
    <ItemGroup>
      <Item
        media={<Avatar fallback="S" className="size-10" />}
        mediaVariant="avatar"
        title="shadcn"
        description="shadcn@vercel.com"
      />
      <ItemSeparator />
      <Item
        media={<Avatar fallback="M" className="size-10" />}
        mediaVariant="avatar"
        title="maxleiter"
        description="maxleiter@vercel.com"
      />
      <ItemSeparator />
      <Item
        media={<Avatar fallback="E" className="size-10" />}
        mediaVariant="avatar"
        title="evilrabbit"
        description="evilrabbit@vercel.com"
      />
    </ItemGroup>
  ),
};
