import type { Meta, StoryObj } from '@storybook/react';

import { LuBell, LuCreditCard, LuSettings, LuUser } from '@/icons/lu';
import { Box, Text } from '@/layouts/index';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card } from '../Card';
import { Input } from '../Input';
import { Label } from '../Label';
import { Tabs, TabsContent, TabsList, TabsRoot, TabsTrigger } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'line'] },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

// ---------------------------------------------------------------------------
// Props API Stories
// ---------------------------------------------------------------------------

export const Basic: Story = {
  args: {
    defaultValue: 'account',
    tabs: [
      {
        value: 'account',
        label: 'Account',
        content: "Make changes to your account here. Click save when you're done.",
      },
      {
        value: 'password',
        label: 'Password',
        content: "Change your password here. After saving, you'll be logged out.",
      },
    ],
  },
};

export const DefaultVariant: Story = {
  name: 'Default Variant (Boxed)',
  args: {
    defaultValue: 'account',
    variant: 'default',
    tabs: [
      {
        value: 'account',
        label: 'Account',
        content: "Make changes to your account here. Click save when you're done.",
      },
      {
        value: 'password',
        label: 'Password',
        content: "Change your password here. After saving, you'll be logged out.",
      },
    ],
  },
};

export const WithForm: Story = {
  args: {
    defaultValue: 'account',
    tabs: [
      {
        value: 'account',
        label: 'Account',
        content: (
          <Box>
            <Text className="text-sm text-muted-foreground">
              Make changes to your account here. Click save when you&apos;re done.
            </Text>
            <Box className="grid gap-2 py-4">
              <Box className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Paalamugan" />
              </Box>
              <Box className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@paalamugan" />
              </Box>
            </Box>
            <Box className="flex">
              <Button>Save changes</Button>
            </Box>
          </Box>
        ),
      },
      {
        value: 'password',
        label: 'Password',
        content: (
          <Box>
            <Text className="text-sm text-muted-foreground">
              Change your password here. After saving, you&apos;ll be logged out.
            </Text>
            <Box className="grid gap-2 py-4">
              <Box className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </Box>
              <Box className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </Box>
            </Box>
            <Box className="flex">
              <Button>Save password</Button>
            </Box>
          </Box>
        ),
      },
    ],
  },
};

export const WithFormCard: Story = {
  parameters: { layout: 'centered' },
  args: {
    defaultValue: 'account',
    variant: 'default',
    tabListClassName: 'grid w-full grid-cols-2',
    tabs: [
      {
        value: 'account',
        label: 'Account',
        content: (
          <Card
            header={{
              title: 'Account',
              description: "Make changes to your account here. Click save when you're done.",
            }}
            contentClassName="space-y-2"
            footer={<Button>Save changes</Button>}
          >
            <Box className="space-y-1">
              <Label htmlFor="name-card">Name</Label>
              <Input id="name-card" defaultValue="Paalamugan" />
            </Box>
            <Box className="space-y-1">
              <Label htmlFor="username-card">Username</Label>
              <Input id="username-card" defaultValue="@paalamugan" />
            </Box>
          </Card>
        ),
      },
      {
        value: 'password',
        label: 'Password',
        content: (
          <Card
            header={{
              title: 'Password',
              description: "Change your password here. After saving, you'll be logged out.",
            }}
            contentClassName="space-y-2"
            footer={<Button>Save password</Button>}
          >
            <Box className="space-y-1">
              <Label htmlFor="current-card">Current password</Label>
              <Input id="current-card" type="password" />
            </Box>
            <Box className="space-y-1">
              <Label htmlFor="new-card">New password</Label>
              <Input id="new-card" type="password" />
            </Box>
          </Card>
        ),
      },
    ],
  },
};

export const LineVariantBordered: Story = {
  name: 'Line Variant – Bordered',
  parameters: { layout: 'centered' },
  args: {
    defaultValue: 'account',
    variant: 'line',
    className: 'w-96 overflow-hidden rounded-md border',
    tabListClassName: 'grid w-full grid-cols-2',
    triggerClassName: 'pt-3',
    contentClassName: 'p-4',
    tabs: [
      {
        value: 'account',
        label: 'Account',
        content: (
          <Box className="mt-4">
            <Text className="text-sm text-muted-foreground">
              Make changes to your account here. Click save when you&apos;re done.
            </Text>
            <Box className="grid gap-2 py-4">
              <Box className="space-y-1">
                <Label htmlFor="name-line">Name</Label>
                <Input id="name-line" defaultValue="Paalamugan" />
              </Box>
              <Box className="space-y-1">
                <Label htmlFor="username-line">Username</Label>
                <Input id="username-line" defaultValue="@paalamugan" />
              </Box>
            </Box>
            <Box className="flex">
              <Button>Save changes</Button>
            </Box>
          </Box>
        ),
      },
      {
        value: 'password',
        label: 'Password',
        content: (
          <Box className="mt-4">
            <Text className="text-sm text-muted-foreground">
              Change your password here. After saving, you&apos;ll be logged out.
            </Text>
            <Box className="grid gap-2 py-4">
              <Box className="space-y-1">
                <Label htmlFor="current-line">Current password</Label>
                <Input id="current-line" type="password" />
              </Box>
              <Box className="space-y-1">
                <Label htmlFor="new-line">New password</Label>
                <Input id="new-line" type="password" />
              </Box>
            </Box>
            <Box className="flex">
              <Button>Save password</Button>
            </Box>
          </Box>
        ),
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    defaultValue: 'profile',
    variant: 'default',
    tabs: [
      {
        value: 'profile',
        label: (
          <>
            <LuUser />
            Profile
          </>
        ),
        content: 'Manage your profile information.',
      },
      {
        value: 'billing',
        label: (
          <>
            <LuCreditCard />
            Billing
          </>
        ),
        content: 'View and update your billing details.',
      },
      {
        value: 'notifications',
        label: (
          <>
            <LuBell />
            Notifications
          </>
        ),
        content: 'Configure your notification preferences.',
      },
      {
        value: 'settings',
        label: (
          <>
            <LuSettings />
            Settings
          </>
        ),
        content: 'Adjust application settings.',
      },
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    defaultValue: 'mon',
    variant: 'default',
    tabs: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => ({
      value: day.toLowerCase(),
      label: day,
      content: `Schedule for ${day}.`,
    })),
  },
};

// ---------------------------------------------------------------------------
// Composition API Stories
// ---------------------------------------------------------------------------

export const CompositionBasic: Story = {
  name: 'Composition API – Basic',
  render: () => (
    <TabsRoot defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for tab 1.</TabsContent>
      <TabsContent value="tab2">Content for tab 2.</TabsContent>
      <TabsContent value="tab3">Content for tab 3.</TabsContent>
    </TabsRoot>
  ),
};

export const CompositionLine: Story = {
  name: 'Composition API – Line Variant',
  render: () => (
    <TabsRoot defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Application overview dashboard content.</TabsContent>
      <TabsContent value="analytics">Analytics data and charts.</TabsContent>
      <TabsContent value="reports">Generated reports and exports.</TabsContent>
    </TabsRoot>
  ),
};

export const CompositionVertical: Story = {
  name: 'Composition API – Vertical',
  render: () => (
    <TabsRoot defaultValue="general" orientation="vertical">
      <TabsList variant="line">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="rounded-md border p-4">
        General settings content.
      </TabsContent>
      <TabsContent value="security" className="rounded-md border p-4">
        Security settings content.
      </TabsContent>
      <TabsContent value="integrations" className="rounded-md border p-4">
        Integrations settings content.
      </TabsContent>
      <TabsContent value="advanced" className="rounded-md border p-4">
        Advanced settings content.
      </TabsContent>
    </TabsRoot>
  ),
};

export const CompositionWithBadges: Story = {
  name: 'Composition API – With Badges',
  render: () => (
    <TabsRoot defaultValue="all">
      <TabsList variant="line">
        <TabsTrigger value="all">
          All <Badge variant="outline">128</Badge>
        </TabsTrigger>
        <TabsTrigger value="active">
          Active <Badge variant="success">96</Badge>
        </TabsTrigger>
        <TabsTrigger value="archived">
          Archived <Badge variant="warning">32</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">Showing all 128 items.</TabsContent>
      <TabsContent value="active">Showing 96 active items.</TabsContent>
      <TabsContent value="archived">Showing 32 archived items.</TabsContent>
    </TabsRoot>
  ),
};

export const CompositionDisabled: Story = {
  name: 'Composition API – Disabled Tab',
  render: () => (
    <TabsRoot defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="active">This tab is active.</TabsContent>
      <TabsContent value="disabled">You should not see this.</TabsContent>
      <TabsContent value="other">Another tab.</TabsContent>
    </TabsRoot>
  ),
};
