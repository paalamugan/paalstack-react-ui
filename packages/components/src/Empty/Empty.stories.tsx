import type { Meta, StoryObj } from '@storybook/react';

import {
  RxBell as BellIcon,
  RxUpload as CloudIcon,
  RxStack as DatabaseIcon,
  RxFile as FileIcon,
  RxArchive as FolderIcon,
  RxReader as InboxIcon,
  RxMagnifyingGlass as SearchIcon,
} from '@/icons/rx';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Input } from '../Input';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyRoot, EmptyTitle } from './Empty';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the empty state',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Basic: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-transparent">
          <InboxIcon className="size-12" />
        </EmptyMedia>
        <EmptyTitle>No Messages</EmptyTitle>
        <EmptyDescription>You don't have any messages yet.</EmptyDescription>
      </EmptyHeader>
    </EmptyRoot>
  ),
};

export const WithSingleAction: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-transparent">
          <FolderIcon className="size-12" />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven't created any projects yet. Get started by creating your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create Project</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-transparent">
          <FileIcon className="size-12" />
        </EmptyMedia>
        <EmptyTitle>No Files Found</EmptyTitle>
        <EmptyDescription>Upload files to get started with your project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload File</Button>
        <Button variant="outline">Browse Files</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <EmptyRoot className="rounded-lg border p-8">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-transparent">
          <CloudIcon className="size-12" />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>Upload files to your cloud storage to access them anywhere.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload Files</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <EmptyRoot className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-transparent">
          <BellIcon className="size-12" />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription>You're all caught up. New notifications will appear here.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Refresh</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyMedia>
          <Avatar src="https://avatars.githubusercontent.com/u/42642576" fallback="PS" className="size-16" />
        </EmptyMedia>
        <EmptyTitle>User Offline</EmptyTitle>
        <EmptyDescription>This user is currently offline. You can leave a message or try again later.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Leave Message</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const WithAvatarGroup: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2">
            <Avatar fallback="CN" className="border-2 border-background" />
            <Avatar fallback="LR" className="border-2 border-background" />
            <Avatar fallback="ER" className="border-2 border-background" />
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>Invite your team to collaborate on this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Invite Members</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const TableEmpty: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <DatabaseIcon className="size-12" />
        </EmptyMedia>
        <EmptyTitle>No Data Available</EmptyTitle>
        <EmptyDescription>There are no records to display at this time.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add Record</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const SearchEmpty: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon className="size-12" />
        </EmptyMedia>
        <EmptyTitle>No Results Found</EmptyTitle>
        <EmptyDescription>Try adjusting your search terms or filters.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear Filters</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const WithInput: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you're looking for doesn't exist. Try searching for what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex w-full max-w-sm gap-2">
          <Input placeholder="Search..." />
          <Button>Search</Button>
        </div>
      </EmptyContent>
    </EmptyRoot>
  ),
};

export const Minimal: Story = {
  render: () => (
    <EmptyRoot>
      <EmptyHeader>
        <EmptyTitle>No Items</EmptyTitle>
        <EmptyDescription>Add your first item to get started.</EmptyDescription>
      </EmptyHeader>
    </EmptyRoot>
  ),
};

export const WithCustomSpacing: Story = {
  render: () => (
    <EmptyRoot className="py-12">
      <EmptyHeader className="gap-4">
        <EmptyMedia variant="icon">
          <InboxIcon className="size-16" />
        </EmptyMedia>
        <EmptyTitle className="text-2xl">Your Inbox is Empty</EmptyTitle>
        <EmptyDescription className="text-base">When you receive new messages, they will appear here.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="mt-6">
        <Button size="lg">Compose Message</Button>
      </EmptyContent>
    </EmptyRoot>
  ),
};

// --- Prop-based API examples ---

export const PropsBasic: Story = {
  render: () => (
    <Empty
      media={<InboxIcon className="size-12" />}
      mediaVariant="icon"
      title="No Messages"
      description="You don't have any messages yet."
    />
  ),
};

export const PropsWithSingleAction: Story = {
  render: () => (
    <Empty
      media={<FolderIcon className="size-12" />}
      mediaVariant="icon"
      title="No Projects Yet"
      description="Get started by creating your first project."
      content={<Button>Create Project</Button>}
    />
  ),
};

export const PropsWithMultipleActions: Story = {
  render: () => (
    <Empty
      media={<FileIcon className="size-12" />}
      mediaVariant="icon"
      title="No Files Found"
      description="Upload files to get started with your project."
      content={
        <>
          <Button>Upload File</Button>
          <Button variant="outline">Browse Files</Button>
        </>
      }
    />
  ),
};

export const PropsMinimal: Story = {
  render: () => <Empty title="No Items" description="Add your first item to get started." />,
};

export const PropsWithBorderAndSubComponentProps: Story = {
  render: () => (
    <Empty
      className="rounded-lg border p-8"
      media={<CloudIcon className="size-12" />}
      mediaVariant="icon"
      title="Cloud Storage Empty"
      description="Upload files to your cloud storage to access them anywhere."
      content={<Button>Upload Files</Button>}
      titleProps={{ className: 'text-base' }}
      contentProps={{ className: 'gap-4' }}
    />
  ),
};

export const PropsWithAvatar: Story = {
  render: () => (
    <Empty
      media={<Avatar src="https://avatars.githubusercontent.com/u/42642576" fallback="PS" className="size-16" />}
      title="User Offline"
      description="This user is currently offline. You can leave a message or try again later."
      content={<Button variant="outline">Leave Message</Button>}
    />
  ),
};

export const PropsTableEmpty: Story = {
  render: () => (
    <Empty
      media={<DatabaseIcon className="size-12" />}
      mediaVariant="icon"
      title="No Data Available"
      description="There are no records to display at this time."
      content={<Button>Add Record</Button>}
    />
  ),
};

export const PropsSearchEmpty: Story = {
  render: () => (
    <Empty
      media={<SearchIcon className="size-12" />}
      mediaVariant="icon"
      title="No Results Found"
      description="Try adjusting your search terms or filters."
      content={<Button variant="outline">Clear Filters</Button>}
    />
  ),
};
