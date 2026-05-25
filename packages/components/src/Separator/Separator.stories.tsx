import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '@/layouts/Stack';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <Stack className="gap-4">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Application</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator />
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">About</h4>
        <p className="text-sm text-muted-foreground">Built with shadcn/ui and base-ui.</p>
      </div>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
  ),
};

export const Combined: Story = {
  render: () => (
    <Stack className="gap-4">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Application</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-2" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </Stack>
  ),
};

export const WithTextDivider: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <p className="text-sm text-muted-foreground">Sign in with your email</p>
      <div className="relative">
        <Separator />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
          or
        </span>
      </div>
      <p className="text-center text-sm text-muted-foreground">Continue with a provider</p>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <nav className="flex items-center gap-3 text-sm">
      <a href="#" className="font-medium hover:underline">
        Home
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="text-muted-foreground hover:underline">
        About
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="text-muted-foreground hover:underline">
        Blog
      </a>
      <Separator orientation="vertical" className="h-4" />
      <a href="#" className="text-muted-foreground hover:underline">
        Contact
      </a>
    </nav>
  ),
};

export const SectionDivider: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <section className="space-y-2">
        <h3 className="text-sm font-semibold">Personal Info</h3>
        <p className="text-sm text-muted-foreground">Name, email, and profile picture.</p>
      </section>
      <Separator />
      <section className="space-y-2">
        <h3 className="text-sm font-semibold">Security</h3>
        <p className="text-sm text-muted-foreground">Password and two-factor authentication.</p>
      </section>
      <Separator />
      <section className="space-y-2">
        <h3 className="text-sm font-semibold">Notifications</h3>
        <p className="text-sm text-muted-foreground">Choose what you want to be notified about.</p>
      </section>
    </div>
  ),
};

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-md border p-2">
      {['B', 'I', 'U'].map((label) => (
        <button key={label} className="rounded px-2 py-1 text-sm font-medium hover:bg-accent">
          {label}
        </button>
      ))}
      <Separator orientation="vertical" className="mx-1 h-6" />
      {['←', '↔', '→'].map((icon) => (
        <button key={icon} className="rounded px-2 py-1 text-sm hover:bg-accent">
          {icon}
        </button>
      ))}
      <Separator orientation="vertical" className="mx-1 h-6" />
      <button className="rounded px-2 py-1 text-sm text-destructive hover:bg-accent">Clear</button>
    </div>
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <Stack className="w-80 gap-4">
      <p className="text-xs text-muted-foreground">Default</p>
      <Separator />
      <p className="text-xs text-muted-foreground">Primary colour</p>
      <Separator className="bg-primary" />
      <p className="text-xs text-muted-foreground">Thicker (2 px)</p>
      <Separator className="h-0.5" />
      <p className="text-xs text-muted-foreground">Gradient</p>
      <Separator className="bg-gradient-to-r from-transparent via-primary to-transparent" />
      <p className="text-xs text-muted-foreground">Dashed (via border)</p>
      <div className="h-px w-full border-t border-dashed border-border" />
    </Stack>
  ),
};
