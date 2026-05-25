/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  args: {
    trigger: <Button variant="outline">Open</Button>,
    title: 'My Account',
    contentProps: { className: 'w-56' },
    items: [
      {
        label: 'Profile',
        shortcut: '⇧⌘P',
      },
      {
        label: 'Billing',
        shortcut: '⌘B',
      },
      {
        label: 'Settings',
        shortcut: '⌘S',
      },
      {
        label: 'Keyboard shortcuts',
        shortcut: '⌘K',
      },
      {
        separator: true,
      },
      {
        label: 'Team',
      },
      {
        label: 'Invite users',
        subItems: [
          {
            label: 'Email',
          },
          {
            label: 'Message',
          },
          {
            label: 'More...',
          },
        ],
      },
      {
        label: 'New Team',
        shortcut: '⌘+T',
      },
      {
        separator: true,
      },
      {
        label: 'GitHub',
      },
      {
        label: 'Support',
      },
      {
        label: 'API',
        disabled: true,
      },
      {
        separator: true,
      },
      {
        label: 'Log out',
        shortcut: '⇧⌘Q',
      },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};
export const WithoutTitle: Story = {
  args: {
    trigger: <Button variant="outline">Open</Button>,
    contentProps: { className: 'w-56' },
    items: [
      {
        label: 'Profile',
        shortcut: '⇧⌘P',
      },
      {
        label: 'Billing',
        shortcut: '⌘B',
      },
      {
        label: 'Settings',
        shortcut: '⌘S',
      },
      {
        label: 'Keyboard shortcuts',
        shortcut: '⌘K',
      },
      {
        separator: true,
      },
      {
        label: 'Team',
      },
      {
        label: 'Invite users',
        subItems: [
          {
            label: 'Email',
          },
          {
            label: 'Message',
          },
          {
            label: 'More...',
          },
        ],
      },
      {
        label: 'New Team',
        shortcut: '⌘+T',
      },
      {
        separator: true,
      },
      {
        label: 'GitHub',
      },
      {
        label: 'Support',
      },
      {
        label: 'API',
        disabled: true,
      },
      {
        separator: true,
      },
      {
        label: 'Log out',
        shortcut: '⇧⌘Q',
      },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithRawDropdownMenu: Story = {
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
  args: {},
  parameters: {
    layout: 'padded',
  },
};

export const Checkboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
    const [showActivityBar, setShowActivityBar] = React.useState<boolean>(false);
    const [showPanel, setShowPanel] = React.useState<boolean>(false);

    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    );
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [position, setPosition] = React.useState('bottom');

    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    );
  },
};

/**
 * Simplified API: Checkbox items example
 */
export const SimplifiedCheckboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
    const [showActivityBar, setShowActivityBar] = React.useState<boolean>(false);
    const [showPanel, setShowPanel] = React.useState<boolean>(false);

    return (
      <DropdownMenu
        trigger={<Button variant="outline">View Options</Button>}
        title="Appearance"
        contentProps={{ className: 'w-56' }}
        items={[
          {
            type: 'checkbox',
            label: 'Status Bar',
            checked: showStatusBar,
            onCheckedChange: setShowStatusBar,
          },
          {
            type: 'checkbox',
            label: 'Activity Bar',
            checked: showActivityBar,
            onCheckedChange: setShowActivityBar,
            disabled: true,
          },
          {
            type: 'checkbox',
            label: 'Panel',
            checked: showPanel,
            onCheckedChange: setShowPanel,
          },
        ]}
      />
    );
  },
};

/**
 * Simplified API: Radio group example
 */
export const SimplifiedRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = React.useState('bottom');

    return (
      <DropdownMenu
        trigger={<Button variant="outline">Select Position</Button>}
        contentProps={{ className: 'w-56' }}
        items={[
          {
            type: 'radio-group',
            label: 'Panel Position',
            value: position,
            onValueChange: setPosition,
            items: [
              { value: 'top', label: 'Top' },
              { value: 'bottom', label: 'Bottom' },
              { value: 'right', label: 'Right' },
            ],
          },
        ]}
      />
    );
  },
};

/**
 * Simplified API: Mixed items (checkbox, radio, regular, and submenu)
 */
export const SimplifiedMixedItems: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [autoSave, setAutoSave] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    return (
      <DropdownMenu
        trigger={<Button variant="outline">Settings</Button>}
        title="Preferences"
        contentProps={{ className: 'w-56' }}
        items={[
          {
            type: 'checkbox',
            label: 'Enable notifications',
            checked: notifications,
            onCheckedChange: setNotifications,
          },
          {
            type: 'checkbox',
            label: 'Auto-save',
            checked: autoSave,
            onCheckedChange: setAutoSave,
          },
          { separator: true },
          {
            type: 'radio-group',
            label: 'Theme',
            value: theme,
            onValueChange: setTheme,
            items: [
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'system', label: 'System' },
            ],
          },
          { separator: true },
          { label: 'Advanced Settings', inset: true, onClick: () => alert('Advanced Settings') },
          {
            type: 'submenu',
            label: 'More Options',
            subItems: [
              { label: 'Reset Settings', onClick: () => alert('Reset') },
              { label: 'Export Settings', onClick: () => alert('Export') },
              { label: 'Import Settings', onClick: () => alert('Import') },
            ],
          },
        ]}
      />
    );
  },
};

/**
 * Simplified API: With inset prop for alignment
 */
export const SimplifiedWithInset: Story = {
  render: () => {
    const [showToolbar, setShowToolbar] = React.useState(true);

    return (
      <DropdownMenu
        trigger={<Button variant="outline">View</Button>}
        contentProps={{ className: 'w-56' }}
        items={[
          {
            type: 'checkbox',
            label: 'Show Toolbar',
            checked: showToolbar,
            onCheckedChange: setShowToolbar,
          },
          { separator: true },
          { label: 'Customize Toolbar', inset: true, onClick: () => alert('Customize') },
          { label: 'Reset Layout', inset: true, onClick: () => alert('Reset') },
          { separator: true },
          { label: 'Full Screen', shortcut: 'F11', onClick: () => alert('Full Screen') },
        ]}
      />
    );
  },
};
