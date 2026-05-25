/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from './ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ContextMenu>;
type CompositionStory = StoryObj;

const TriggerArea = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-slate-200 text-sm dark:border-slate-700">
    {children}
  </div>
);

// ─── Props API ───────────────────────────────────────────────────────────────

export const Basic: Story = {
  name: 'Props API / Basic',
  args: {
    trigger: <TriggerArea>Right click here</TriggerArea>,
    contentClassName: 'w-64',
    items: [
      { label: 'Back', shortcut: '⌘[', inset: false },
      { label: 'Forward', shortcut: '⌘]', inset: false, disabled: true },
      { label: 'Reload', shortcut: '⌘R', inset: false },
      { type: 'separator' as const },
      {
        type: 'submenu' as const,
        label: 'More Tools',
        inset: false,
        className: 'w-48',
        items: [
          { label: 'Save Page As...', shortcut: '⇧⌘S' },
          { label: 'Create Shortcut...' },
          { label: 'Name Window...' },
          { type: 'separator' as const },
          { label: 'Developer Tools' },
        ],
      },
      { type: 'separator' as const },
      { type: 'checkbox' as const, label: 'Show Bookmarks Bar', checked: true, inset: false, shortcut: '⌘⇧B' },
      { type: 'checkbox' as const, label: 'Show Full URLs', inset: false },
      { type: 'separator' as const },
      {
        type: 'radio-group' as const,
        label: 'People',
        value: 'paala',
        inset: false,
        items: [
          { value: 'paala', label: 'Paala' },
          { value: 'paalamugan', label: 'Paalamugan' },
        ],
      },
    ],
  },
};

export const WithShortcuts: Story = {
  name: 'Props API / With Shortcuts',
  args: {
    trigger: <TriggerArea>Right click here</TriggerArea>,
    contentClassName: 'w-56',
    items: [
      { label: 'Cut', shortcut: '⌘X' },
      { label: 'Copy', shortcut: '⌘C' },
      { label: 'Paste', shortcut: '⌘V' },
      { type: 'separator' as const },
      { label: 'Select All', shortcut: '⌘A' },
      { label: 'Find...', shortcut: '⌘F' },
    ],
  },
};

export const WithDestructive: Story = {
  name: 'Props API / Destructive Items',
  args: {
    trigger: <TriggerArea>Right click here</TriggerArea>,
    contentClassName: 'w-48',
    items: [
      { label: 'Edit' },
      { label: 'Duplicate' },
      { label: 'Move to...' },
      { type: 'separator' as const },
      { label: 'Archive' },
      { type: 'separator' as const },
      { label: 'Delete', variant: 'destructive' as const },
    ],
  },
};

export const WithCheckboxes: Story = {
  name: 'Props API / Checkboxes',
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showFullUrls, setShowFullUrls] = useState(false);
    const [showStatusBar, setShowStatusBar] = useState(true);

    return (
      <ContextMenu
        trigger={<TriggerArea>Right click here</TriggerArea>}
        contentClassName="w-56"
        items={[
          { type: 'label', label: 'Appearance', inset: true },
          { type: 'separator' },
          {
            type: 'checkbox',
            label: 'Show Bookmarks Bar',
            checked: showBookmarks,
            onCheckedChange: setShowBookmarks,
            shortcut: '⌘⇧B',
          },
          {
            type: 'checkbox',
            label: 'Show Full URLs',
            checked: showFullUrls,
            onCheckedChange: setShowFullUrls,
          },
          {
            type: 'checkbox',
            label: 'Show Status Bar',
            checked: showStatusBar,
            onCheckedChange: setShowStatusBar,
          },
        ]}
      />
    );
  },
};

export const WithRadioGroup: Story = {
  name: 'Props API / Radio Group',
  render: () => {
    const [person, setPerson] = useState('paala');

    return (
      <ContextMenu
        trigger={<TriggerArea>Right click here</TriggerArea>}
        contentClassName="w-48"
        items={[
          { label: 'Back', shortcut: '⌘[', inset: true },
          { label: 'Forward', shortcut: '⌘]', inset: true },
          { type: 'separator' },
          {
            type: 'radio-group',
            label: 'People',
            value: person,
            onValueChange: setPerson,
            inset: true,
            items: [
              { value: 'paala', label: 'Paala' },
              { value: 'paalamugan', label: 'Paalamugan' },
              { value: 'john', label: 'John' },
            ],
          },
        ]}
      />
    );
  },
};

// ─── Composition API ─────────────────────────────────────────────────────────

export const CompositionBasic: CompositionStory = {
  name: 'Composition API / Basic',
  render: () => (
    <ContextMenuRoot>
      <ContextMenuTrigger>
        <TriggerArea>Right click here</TriggerArea>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="paala">
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="paala">Paala</ContextMenuRadioItem>
            <ContextMenuRadioItem value="paalamugan">Paalamugan</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenuRoot>
  ),
};

export const CompositionWithSubmenus: CompositionStory = {
  name: 'Composition API / Submenus',
  render: () => (
    <ContextMenuRoot>
      <ContextMenuTrigger>
        <TriggerArea>Right click here</TriggerArea>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuItem>View</ContextMenuItem>
          <ContextMenuItem>Edit</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Email</ContextMenuItem>
              <ContextMenuItem>Twitter</ContextMenuItem>
              <ContextMenuItem>Facebook</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Export</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>PDF</ContextMenuItem>
              <ContextMenuItem>CSV</ContextMenuItem>
              <ContextMenuItem>JSON</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenuRoot>
  ),
};

export const CompositionControlled: CompositionStory = {
  name: 'Composition API / Controlled Checkboxes',
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showFullUrls, setShowFullUrls] = useState(false);
    const [sortBy, setSortBy] = useState('name');

    return (
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <TriggerArea>Right click here</TriggerArea>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuGroup>
            <ContextMenuLabel inset>View Options</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
              Show Full URLs
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              <ContextMenuLabel inset>Sort By</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
              <ContextMenuRadioItem value="date">Date Modified</ContextMenuRadioItem>
              <ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenuRoot>
    );
  },
};
