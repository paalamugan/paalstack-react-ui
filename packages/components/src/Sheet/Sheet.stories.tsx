import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { Separator } from '../Separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetRoot,
  SheetTitle,
  SheetTrigger,
} from './Sheet';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'radio',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Side of the screen the sheet slides in from',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Sheet>;

// ─────────────────────────────────────────────
// Shared form body used across multiple stories
// ─────────────────────────────────────────────

const ProfileFormBody = () => (
  <div className="grid gap-4 px-4 py-2">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Name
      </Label>
      <Input id="name" defaultValue="Paalamugan" className="col-span-3" />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="username" className="text-right">
        Username
      </Label>
      <Input id="username" defaultValue="@paalamugan" className="col-span-3" />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="email" className="text-right">
        Email
      </Label>
      <Input id="email" type="email" defaultValue="user@example.com" className="col-span-3" />
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Props API
// ─────────────────────────────────────────────

export const Right: Story = {
  render: (args) => (
    <Sheet {...args}>
      <ProfileFormBody />
    </Sheet>
  ),
  args: {
    side: 'right',
    trigger: <Button variant="outline">Open Right</Button>,
    header: {
      title: 'Edit Profile',
      description: "Make changes to your profile here. Click save when you're done.",
    },
    footer: {
      secondaryAction: <Button variant="outline">Cancel</Button>,
      primaryAction: <Button type="submit">Save Changes</Button>,
    },
  },
};

export const Left: Story = {
  render: Right.render,
  args: {
    ...Right.args,
    side: 'left',
    trigger: <Button variant="outline">Open Left</Button>,
  },
};

export const Top: Story = {
  render: (args) => (
    <Sheet {...args}>
      <div className="px-4 py-2">
        <Label htmlFor="confirm">
          Type <strong>delete</strong> to confirm
        </Label>
        <Input id="confirm" placeholder='type "delete"' className="mt-2" />
      </div>
    </Sheet>
  ),
  args: {
    side: 'top',
    trigger: <Button variant="outline">Open Top</Button>,
    header: {
      title: 'Are you absolutely sure?',
      description: 'This action cannot be undone. This will permanently delete your account.',
    },
    footer: {
      secondaryAction: <Button variant="outline">Cancel</Button>,
      primaryAction: (
        <Button type="submit" variant="solid" color="danger">
          Yes, Delete Account
        </Button>
      ),
    },
  },
};

export const Bottom: Story = {
  render: Right.render,
  args: {
    ...Right.args,
    side: 'bottom',
    trigger: <Button variant="outline">Open Bottom</Button>,
  },
};

export const WithoutFooter: Story = {
  render: Right.render,
  args: {
    ...Right.args,
    trigger: <Button variant="outline">No Footer</Button>,
    footer: undefined,
  },
};

export const WithoutDescription: Story = {
  render: Right.render,
  args: {
    ...Right.args,
    trigger: <Button variant="outline">No Description</Button>,
    header: { title: 'Edit Profile' },
  },
};

export const CustomWidth: Story = {
  render: Right.render,
  args: {
    ...Right.args,
    trigger: <Button variant="outline">Wide Sheet</Button>,
    className: 'w-full sm:max-w-xl',
  },
};

// ─────────────────────────────────────────────
// Composition API
// ─────────────────────────────────────────────

export const CompositionBasic: Story = {
  name: 'Composition API – Basic',
  render: () => (
    <SheetRoot>
      <SheetTrigger render={<Button variant="outline">Open Sheet</Button>} />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>Make changes to your profile. Click save when done.</SheetDescription>
        </SheetHeader>
        <ProfileFormBody />
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </SheetRoot>
  ),
};

export const CompositionLeft: Story = {
  name: 'Composition API – Left Side',
  render: () => (
    <SheetRoot>
      <SheetTrigger render={<Button variant="outline">Open Left</Button>} />
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse all sections of the application.</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {['Dashboard', 'Projects', 'Team', 'Reports', 'Settings'].map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {item}
            </a>
          ))}
          <Separator className="my-2" />
          {['Help', 'Logout'].map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
      </SheetContent>
    </SheetRoot>
  ),
};

export const CompositionNoCloseButton: Story = {
  name: 'Composition API – No Close Button',
  render: () => (
    <SheetRoot>
      <SheetTrigger render={<Button variant="outline">Open (no X button)</Button>} />
      <SheetContent side="right" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Confirm Action</SheetTitle>
          <SheetDescription>Please confirm before proceeding.</SheetDescription>
        </SheetHeader>
        <p className="px-4 text-sm text-muted-foreground">
          Use the footer buttons below to dismiss or confirm this sheet.
        </p>
        <SheetFooter>
          <SheetClose render={<Button variant="outline">Cancel</Button>} />
          <Button>Confirm</Button>
        </SheetFooter>
      </SheetContent>
    </SheetRoot>
  ),
};

export const CompositionBottom: Story = {
  name: 'Composition API – Bottom Sheet',
  render: () => (
    <SheetRoot>
      <SheetTrigger render={<Button variant="outline">Open Bottom</Button>} />
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Share Document</SheetTitle>
          <SheetDescription>Choose how you want to share this document.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          {['Copy link', 'Share via email', 'Export as PDF', 'Download'].map((action) => (
            <Button key={action} variant="ghost" className="justify-start">
              {action}
            </Button>
          ))}
        </div>
        <SheetFooter>
          <SheetClose
            render={
              <Button variant="outline" className="w-full">
                Close
              </Button>
            }
          />
        </SheetFooter>
      </SheetContent>
    </SheetRoot>
  ),
};

export const CompositionTop: Story = {
  name: 'Composition API – Top Sheet',
  render: () => (
    <SheetRoot>
      <SheetTrigger render={<Button variant="outline">Open Top</Button>} />
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Search</SheetTitle>
        </SheetHeader>
        <div className="px-4 pb-2">
          <Input placeholder="Search for anything…" className="w-full" />
        </div>
      </SheetContent>
    </SheetRoot>
  ),
};
