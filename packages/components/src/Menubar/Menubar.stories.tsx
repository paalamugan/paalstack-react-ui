import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './Menubar';

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Menubar>;

// ─── Props API ────────────────────────────────────────────────────────────────

export const Basic: Story = {
  name: 'Props API — Basic',
  args: {
    menus: [
      {
        label: 'File',
        items: [
          { label: 'New Tab', shortcut: '⌘T' },
          { label: 'New Window', shortcut: '⌘N' },
          { label: 'New Incognito Window', disabled: true },
          { separator: true },
          {
            label: '',
            subMenus: [
              {
                label: 'Share',
                items: [{ label: 'Email link' }, { label: 'Messages' }, { label: 'Notes' }],
              },
            ],
          },
          { separator: true },
          { label: 'Print...', shortcut: '⌘P' },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', shortcut: '⌘Z' },
          { label: 'Redo', shortcut: '⇧⌘Z' },
          { separator: true },
          {
            label: '',
            subMenus: [
              {
                label: 'Find',
                items: [
                  { label: 'Search the web' },
                  { separator: true },
                  { label: 'Find...' },
                  { label: 'Find Next' },
                  { label: 'Find Previous' },
                ],
              },
            ],
          },
          { separator: true },
          { label: 'Cut' },
          { label: 'Copy' },
          { label: 'Paste' },
        ],
      },
      {
        label: 'View',
        items: [
          { label: 'Always Show Bookmarks Bar', type: 'checkbox' },
          { label: 'Always Show Full URLs', type: 'checkbox', checked: true },
          { separator: true },
          { label: 'Reload', shortcut: '⌘R', inset: true },
          { label: 'Force Reload', shortcut: '⇧⌘R', disabled: true, inset: true },
          { separator: true },
          { label: 'Toggle Fullscreen', inset: true },
          { separator: true },
          { label: 'Hide Sidebar', inset: true },
        ],
      },
      {
        label: 'Profiles',
        items: [
          {
            type: 'radio',
            value: 'benoit',
            options: [
              { label: 'Andy', value: 'andy' },
              { label: 'Benoit', value: 'benoit' },
              { label: 'Luis', value: 'luis' },
            ],
          },
          { separator: true },
          { label: 'Edit...', inset: true },
          { separator: true },
          { label: 'Add Profile...', inset: true },
        ],
      },
    ],
  },
};

export const WithSubmenus: Story = {
  name: 'Props API — With Submenus',
  args: {
    menus: [
      {
        label: 'File',
        items: [
          { label: 'New File', shortcut: '⌘N' },
          { label: 'Open...', shortcut: '⌘O' },
          {
            label: '',
            subMenus: [
              {
                label: 'Open Recent',
                items: [
                  { label: 'project/src/App.tsx' },
                  { label: 'project/src/index.tsx' },
                  { label: 'project/package.json' },
                  { separator: true },
                  { label: 'Clear Recent' },
                ],
              },
            ],
          },
          { separator: true },
          { label: 'Save', shortcut: '⌘S' },
          { label: 'Save As...', shortcut: '⇧⌘S' },
          { separator: true },
          {
            label: '',
            subMenus: [
              {
                label: 'Export As',
                items: [
                  { label: 'PDF Document' },
                  { label: 'HTML File' },
                  { label: 'Markdown' },
                  { label: 'Plain Text' },
                ],
              },
            ],
          },
          { separator: true },
          { label: 'Close Window', shortcut: '⇧⌘W' },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', shortcut: '⌘Z' },
          { label: 'Redo', shortcut: '⇧⌘Z', disabled: true },
          { separator: true },
          { label: 'Cut', shortcut: '⌘X' },
          { label: 'Copy', shortcut: '⌘C' },
          { label: 'Paste', shortcut: '⌘V' },
          { separator: true },
          { label: 'Select All', shortcut: '⌘A' },
        ],
      },
    ],
  },
};

export const WithCheckboxAndRadio: Story = {
  name: 'Props API — Checkbox & Radio Items',
  args: {
    menus: [
      {
        label: 'View',
        items: [
          { label: 'Status Bar', type: 'checkbox', checked: true },
          { label: 'Activity Bar', type: 'checkbox' },
          { label: 'Panel', type: 'checkbox', checked: true },
          { label: 'Minimap', type: 'checkbox' },
          { separator: true },
          { label: 'Zoom In', shortcut: '⌘+', inset: true },
          { label: 'Zoom Out', shortcut: '⌘-', inset: true },
          { label: 'Reset Zoom', shortcut: '⌘0', inset: true },
        ],
      },
      {
        label: 'Theme',
        items: [
          {
            type: 'radio',
            value: 'system',
            options: [
              { label: 'Light', value: 'light' },
              { label: 'Dark', value: 'dark' },
              { label: 'System', value: 'system' },
            ],
          },
        ],
      },
    ],
  },
};

export const TextEditorMenubar: Story = {
  name: 'Props API — Text Editor',
  args: {
    menus: [
      {
        label: 'File',
        items: [
          { label: 'New File', shortcut: '⌘N' },
          { label: 'New Window', shortcut: '⇧⌘N' },
          { separator: true },
          { label: 'Open File...', shortcut: '⌘O' },
          { label: 'Open Folder...', shortcut: '⌘K ⌘O' },
          {
            label: '',
            subMenus: [
              {
                label: 'Open Recent',
                items: [
                  { label: 'main.tsx' },
                  { label: 'App.tsx' },
                  { label: 'package.json' },
                  { separator: true },
                  { label: 'Clear Recent Files' },
                ],
              },
            ],
          },
          { separator: true },
          { label: 'Save', shortcut: '⌘S' },
          { label: 'Save As...', shortcut: '⇧⌘S' },
          { label: 'Save All', shortcut: '⌥⌘S' },
          { separator: true },
          { label: 'Close Editor', shortcut: '⌘W' },
          { label: 'Close Window', shortcut: '⇧⌘W' },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', shortcut: '⌘Z' },
          { label: 'Redo', shortcut: '⇧⌘Z' },
          { separator: true },
          { label: 'Cut', shortcut: '⌘X' },
          { label: 'Copy', shortcut: '⌘C' },
          { label: 'Paste', shortcut: '⌘V' },
          { separator: true },
          {
            label: '',
            subMenus: [
              {
                label: 'Find',
                items: [
                  { label: 'Find...', shortcut: '⌘F' },
                  { label: 'Find Next', shortcut: '⌘G' },
                  { label: 'Find Previous', shortcut: '⇧⌘G' },
                  { separator: true },
                  { label: 'Replace...', shortcut: '⌥⌘F' },
                ],
              },
            ],
          },
          { separator: true },
          { label: 'Select All', shortcut: '⌘A' },
        ],
      },
      {
        label: 'View',
        items: [
          { label: 'Show Sidebar', type: 'checkbox', checked: true },
          { label: 'Show Minimap', type: 'checkbox' },
          { label: 'Show Breadcrumbs', type: 'checkbox', checked: true },
          { label: 'Show Line Numbers', type: 'checkbox', checked: true },
          { separator: true },
          { label: 'Zoom In', shortcut: '⌘+', inset: true },
          { label: 'Zoom Out', shortcut: '⌘-', inset: true },
          { label: 'Reset Zoom', shortcut: '⌘0', inset: true },
          { separator: true },
          { label: 'Command Palette...', shortcut: '⇧⌘P', inset: true },
        ],
      },
      {
        label: 'Help',
        items: [
          { label: 'Welcome' },
          { label: 'Documentation' },
          { label: 'Release Notes' },
          { separator: true },
          { label: 'Check for Updates...' },
          { separator: true },
          { label: 'About' },
        ],
      },
    ],
  },
};

export const WithDisabledItems: Story = {
  name: 'Props API — Disabled Items',
  args: {
    menus: [
      {
        label: 'Edit',
        items: [
          { label: 'Undo', shortcut: '⌘Z', disabled: true },
          { label: 'Redo', shortcut: '⇧⌘Z', disabled: true },
          { separator: true },
          { label: 'Cut', shortcut: '⌘X', disabled: true },
          { label: 'Copy', shortcut: '⌘C', disabled: true },
          { label: 'Paste', shortcut: '⌘V' },
          { separator: true },
          { label: 'Select All', shortcut: '⌘A' },
          { label: 'Deselect All', shortcut: '⇧⌘A', disabled: true },
        ],
      },
      {
        label: 'Format',
        items: [
          { label: 'Bold', shortcut: '⌘B', disabled: true },
          { label: 'Italic', shortcut: '⌘I', disabled: true },
          { label: 'Underline', shortcut: '⌘U', disabled: true },
          { separator: true },
          { label: 'Clear Formatting', disabled: true, inset: true },
        ],
      },
    ],
  },
};

// ─── Composition API ──────────────────────────────────────────────────────────

export const Composition: Story = {
  name: 'Composition API — Basic',
  render: () => (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </MenubarRoot>
  ),
};

const CompositionWithStateDemo = () => {
  const [statusBar, setStatusBar] = React.useState(true);
  const [activityBar, setActivityBar] = React.useState(false);
  const [panel, setPanel] = React.useState(true);
  const [theme, setTheme] = React.useState('system');
  const [profile, setProfile] = React.useState('alice');

  return (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Panels</MenubarLabel>
          <MenubarCheckboxItem checked={statusBar} onCheckedChange={setStatusBar}>
            Status Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={activityBar} onCheckedChange={setActivityBar}>
            Activity Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={panel} onCheckedChange={setPanel}>
            Panel
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel>Zoom</MenubarLabel>
          <MenubarItem inset>
            Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
          </MenubarItem>
          <MenubarItem inset>
            Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem inset>
            Reset Zoom <MenubarShortcut>⌘0</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Theme</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Color Theme</MenubarLabel>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Account</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Switch Profile</MenubarLabel>
          <MenubarRadioGroup value={profile} onValueChange={setProfile}>
            <MenubarRadioItem value="alice">Alice</MenubarRadioItem>
            <MenubarRadioItem value="bob">Bob</MenubarRadioItem>
            <MenubarRadioItem value="carol">Carol</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Manage Profiles...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </MenubarRoot>
  );
};

export const CompositionWithState: Story = {
  name: 'Composition API — Stateful (Checkbox & Radio)',
  render: () => <CompositionWithStateDemo />,
};

export const CompositionWithLabels: Story = {
  name: 'Composition API — With Labels & Groups',
  render: () => (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Create</MenubarLabel>
          <MenubarGroup>
            <MenubarItem inset>
              New File <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem inset>
              New Folder <MenubarShortcut>⇧⌘N</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarLabel>Open</MenubarLabel>
          <MenubarGroup>
            <MenubarItem inset>
              Open File... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem inset>Open Folder...</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarLabel>Save</MenubarLabel>
          <MenubarGroup>
            <MenubarItem inset>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem inset>
              Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>History</MenubarLabel>
          <MenubarGroup>
            <MenubarItem inset>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem inset>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarLabel>Clipboard</MenubarLabel>
          <MenubarGroup>
            <MenubarItem inset>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem inset>
              Copy <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem inset>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </MenubarRoot>
  ),
};

const CompositionIDEDemo = () => {
  const [sidebar, setSidebar] = React.useState(true);
  const [minimap, setMinimap] = React.useState(false);
  const [breadcrumbs, setBreadcrumbs] = React.useState(true);
  const [lineNumbers, setLineNumbers] = React.useState(true);
  const [wordWrap, setWordWrap] = React.useState(false);
  const [theme, setTheme] = React.useState('dark');

  return (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⇧⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Open File... <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Open Folder...</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>main.tsx</MenubarItem>
              <MenubarItem>App.tsx</MenubarItem>
              <MenubarItem>index.css</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Clear Recent Files</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save All <MenubarShortcut>⌥⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Close Editor <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                Find... <MenubarShortcut>⌘F</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Find Next <MenubarShortcut>⌘G</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Find Previous <MenubarShortcut>⇧⌘G</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Replace... <MenubarShortcut>⌥⌘F</MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Select All <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={sidebar} onCheckedChange={setSidebar}>
            Sidebar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={minimap} onCheckedChange={setMinimap}>
            Minimap
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={breadcrumbs} onCheckedChange={setBreadcrumbs}>
            Breadcrumbs
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={lineNumbers} onCheckedChange={setLineNumbers}>
            Line Numbers
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={wordWrap} onCheckedChange={setWordWrap}>
            Word Wrap
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
          </MenubarItem>
          <MenubarItem inset>
            Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem inset>
            Reset Zoom <MenubarShortcut>⌘0</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Command Palette... <MenubarShortcut>⇧⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Preferences</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Color Theme</MenubarLabel>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="light-hc">Light High Contrast</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="dark-hc">Dark High Contrast</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Settings...</MenubarItem>
          <MenubarItem inset>Keyboard Shortcuts...</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Extensions</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Install Extensions...</MenubarItem>
              <MenubarItem>Show Installed Extensions</MenubarItem>
              <MenubarItem>Show Outdated Extensions</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Welcome</MenubarItem>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Release Notes</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Check for Updates...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </MenubarRoot>
  );
};

export const CompositionIDELayout: Story = {
  name: 'Composition API — IDE Layout',
  render: () => <CompositionIDEDemo />,
};
