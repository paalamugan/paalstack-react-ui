/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LuCopy as CopyIcon } from '@/icons/lu';
import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';

import { Button } from '../Button';
import { ContextMenuContent, ContextMenuItem, ContextMenuRoot, ContextMenuTrigger } from '../ContextMenu';
import { Input } from '../Input';
import { Label } from '../Label';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

// ─── Props API Stories ───────────────────────────────────────────────────────

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Dialog>;
type CompositionStory = StoryObj;

export const Basic: Story = {
  render: () => (
    <Dialog
      trigger={<Button variant="outline">Open Dialog</Button>}
      header={{
        title: 'Are you sure absolutely sure?',
        description:
          'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      }}
    />
  ),
};

export const EditProfile: Story = {
  render: () => (
    <Dialog
      trigger={<Button variant="outline">Edit Profile</Button>}
      contentClassName="sm:max-w-[425px]"
      header={{
        title: 'Edit profile',
        description: "Make changes to your profile here. Click save when you're done.",
      }}
      footer={<Button type="submit">Save changes</Button>}
    >
      <Box className="grid gap-4 py-4">
        <Box className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="Paalamugan" className="col-span-3" />
        </Box>
        <Box className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" defaultValue="@paalamugan" className="col-span-3" />
        </Box>
      </Box>
    </Dialog>
  ),
};

export const NoCloseButton: Story = {
  render: () => (
    <Dialog
      trigger={<Button variant="outline">No Close Button</Button>}
      header={{
        title: 'No Close Button',
        description: "This dialog doesn't have a close button in the top-right corner.",
      }}
      dialogContentProps={{ showCloseButton: false }}
    />
  ),
};

export const WithFooterClose: Story = {
  name: 'With Footer Close Button',
  render: () => (
    <Dialog
      trigger={<Button variant="outline">With Footer Close</Button>}
      header={{
        title: 'Settings Updated',
        description: 'Your preferences have been saved successfully.',
      }}
      dialogFooterProps={{ showCloseButton: true }}
    >
      <Text className="text-sm text-muted-foreground">All changes have been applied.</Text>
    </Dialog>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box className="flex items-center gap-4">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Controlled
        </Button>
        <Text className="text-sm text-muted-foreground">{open ? 'Dialog is open' : 'Dialog is closed'}</Text>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          header={{
            title: 'Controlled Dialog',
            description: 'This dialog is controlled via state.',
          }}
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <Text className="text-sm">You can control the open/close state programmatically.</Text>
        </Dialog>
      </Box>
    );
  },
};

// ─── Composition API Stories ──────────────────────────────────────────────────

export const CompositionBasic: CompositionStory = {
  name: 'Composition API / Basic',
  render: () => (
    <DialogRoot>
      <DialogTrigger render={<Button variant="outline" />}>Open Dialog</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <Box className="grid gap-3">
          <Box className="grid gap-1.5">
            <Label htmlFor="comp-name">Name</Label>
            <Input id="comp-name" defaultValue="Pedro Duarte" />
          </Box>
          <Box className="grid gap-1.5">
            <Label htmlFor="comp-username">Username</Label>
            <Input id="comp-username" defaultValue="@peduarte" />
          </Box>
        </Box>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};

export const CompositionShareLink: CompositionStory = {
  name: 'Composition API / Share Link',
  render: () => (
    <DialogRoot>
      <DialogTrigger render={<Button variant="outline" />}>Share</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <Box className="flex items-center gap-2">
          <Box className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
          </Box>
          <Button type="button" size="icon-sm">
            <CopyIcon />
            <span className="sr-only">Copy</span>
          </Button>
        </Box>
        <DialogFooter className="sm:justify-start">
          <DialogClose render={<Button type="button" />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};

export const CompositionNoCloseButton: CompositionStory = {
  name: 'Composition API / No Close Button',
  render: () => (
    <DialogRoot>
      <DialogTrigger render={<Button variant="outline" />}>No Close Button</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No Close Button</DialogTitle>
          <DialogDescription>This dialog doesn&apos;t have a close button in the top-right corner.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </DialogRoot>
  ),
};

export const CompositionStickyFooter: CompositionStory = {
  name: 'Composition API / Sticky Footer',
  render: () => (
    <DialogRoot>
      <DialogTrigger render={<Button variant="outline" />}>Sticky Footer</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sticky Footer</DialogTitle>
          <DialogDescription>
            This dialog has a sticky footer that stays visible while the content scrolls.
          </DialogDescription>
        </DialogHeader>
        <Box className="-mx-4 max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Text key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          ))}
        </Box>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};

export const CompositionScrollableContent: CompositionStory = {
  name: 'Composition API / Scrollable Content',
  render: () => (
    <DialogRoot>
      <DialogTrigger render={<Button variant="outline" />}>Scrollable Content</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Scrollable Content</DialogTitle>
          <DialogDescription>This is a dialog with scrollable content.</DialogDescription>
        </DialogHeader>
        <Box className="-mx-4 max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Text key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
          ))}
        </Box>
      </DialogContent>
    </DialogRoot>
  ),
};

export const CompositionContextMenu: CompositionStory = {
  name: 'Composition API / Context Menu',
  render: () => (
    <DialogRoot>
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <Box className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </Box>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuItem>Download</ContextMenuItem>
          <DialogTrigger
            render={
              <ContextMenuItem>
                <Text as="span" fontSize="sm">
                  Delete
                </Text>
              </ContextMenuItem>
            }
          />
        </ContextMenuContent>
      </ContextMenuRoot>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently delete this file from our servers?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  ),
};
