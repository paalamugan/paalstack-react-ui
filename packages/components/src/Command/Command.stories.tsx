/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  LuBell as BellIcon,
  LuCalculator as CalculatorIcon,
  LuClipboardPaste as ClipboardPasteIcon,
  LuCode as CodeIcon,
  LuCopy as CopyIcon,
  LuCreditCard as CreditCardIcon,
  LuFileText as FileTextIcon,
  LuFolder as FolderIcon,
  LuFolderPlus as FolderPlusIcon,
  LuCircleHelp as HelpCircleIcon,
  LuHouse as HomeIcon,
  LuImage as ImageIcon,
  LuInbox as InboxIcon,
  LuLayoutGrid as LayoutGridIcon,
  LuList as ListIcon,
  LuPlus as PlusIcon,
  LuScissors as ScissorsIcon,
  LuSettings as SettingsIcon,
  LuSmile as SmileIcon,
  LuTrash as TrashIcon,
  LuUser as UserIcon,
  LuZoomIn as ZoomInIcon,
  LuZoomOut as ZoomOutIcon,
} from '@/icons/lu';
import {
  RxCalendar as CalendarIcon,
  RxEnvelopeClosed as EnvelopeClosedIcon,
  RxFace as FaceIcon,
  RxGear as GearIcon,
  RxPerson as PersonIcon,
  RxRocket as RocketIcon,
} from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';

import { Button } from '../Button';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandRoot,
  CommandSeparator,
  CommandShortcut,
} from './Command';

// ─── Props API Stories ───────────────────────────────────────────────────────

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Command>;
type CompositionStory = StoryObj;

const KeyboardHint = ({ onToggle }: { onToggle: () => void }) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onToggle();
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [onToggle]);

  return (
    <Text className="text-sm text-muted-foreground">
      Press{' '}
      <Text
        as="kbd"
        className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 select-none"
      >
        <Text as="span" className="text-xs">
          ⌘
        </Text>
        J
      </Text>
    </Text>
  );
};

const defaultGroups = [
  {
    heading: 'Suggestions',
    items: [
      { icon: <CalendarIcon className="size-4" />, label: 'Calendar' },
      { icon: <FaceIcon className="size-4" />, label: 'Search Emoji' },
      { icon: <RocketIcon className="size-4" />, label: 'Launch' },
    ],
  },
  {
    heading: 'Settings',
    items: [
      { icon: <PersonIcon className="size-4" />, label: 'Profile', shortcut: '⌘P' },
      { icon: <EnvelopeClosedIcon className="size-4" />, label: 'Mail', shortcut: '⌘B' },
      { icon: <GearIcon className="size-4" />, label: 'Settings', shortcut: '⌘S' },
    ],
  },
];

// ─── Props API ───────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    return (
      <>
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          Open Command
        </Button>
        <Command {...args} open={open} onOpenChange={setOpen} />
      </>
    );
  },
  args: {
    open: false,
    inputOptions: {
      placeholder: 'Type a command or search...',
    },
    emptyResultContent: 'No results found.',
    groups: defaultGroups,
  },
};

export const WithCustomTitle: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    return (
      <>
        <KeyboardHint onToggle={() => setOpen((prev) => !prev)} />
        <Command {...args} open={open} onOpenChange={setOpen} />
      </>
    );
  },
  args: {
    open: false,
    title: 'Quick Actions',
    description: 'Find and run actions quickly...',
    inputOptions: {
      placeholder: 'Search actions...',
    },
    emptyResultContent: 'No actions found.',
    groups: [
      {
        heading: 'Actions',
        items: [
          { icon: <RocketIcon className="size-4" />, label: 'Deploy', shortcut: '⌘D' },
          { icon: <GearIcon className="size-4" />, label: 'Configure', shortcut: '⌘,' },
        ],
      },
    ],
  },
};

// ─── Composition API Stories ─────────────────────────────────────────────────

export const Inline: CompositionStory = {
  name: 'Composition API / Inline',
  render: () => (
    <CommandRoot className="max-w-sm rounded-lg border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <CalculatorIcon />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandRoot>
  ),
};

export const CompositionBasic: CompositionStory = {
  name: 'Composition API / Basic',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandRoot>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandRoot>
        </CommandDialog>
      </Box>
    );
  },
};

export const CompositionShortcuts: CompositionStory = {
  name: 'Composition API / Shortcuts',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandRoot>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandRoot>
        </CommandDialog>
      </Box>
    );
  },
};

export const CompositionGroups: CompositionStory = {
  name: 'Composition API / Groups',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandRoot>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <SmileIcon />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <CalculatorIcon />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandRoot>
        </CommandDialog>
      </Box>
    );
  },
};

export const CompositionScrollable: CompositionStory = {
  name: 'Composition API / Scrollable',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandRoot>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem>
                  <HomeIcon />
                  <span>Home</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <InboxIcon />
                  <span>Inbox</span>
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FileTextIcon />
                  <span>Documents</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FolderIcon />
                  <span>Folders</span>
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <PlusIcon />
                  <span>New File</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FolderPlusIcon />
                  <span>New Folder</span>
                  <CommandShortcut>⇧⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CopyIcon />
                  <span>Copy</span>
                  <CommandShortcut>⌘C</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ScissorsIcon />
                  <span>Cut</span>
                  <CommandShortcut>⌘X</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ClipboardPasteIcon />
                  <span>Paste</span>
                  <CommandShortcut>⌘V</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <TrashIcon />
                  <span>Delete</span>
                  <CommandShortcut>⌫</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="View">
                <CommandItem>
                  <LayoutGridIcon />
                  <span>Grid View</span>
                </CommandItem>
                <CommandItem>
                  <ListIcon />
                  <span>List View</span>
                </CommandItem>
                <CommandItem>
                  <ZoomInIcon />
                  <span>Zoom In</span>
                  <CommandShortcut>⌘+</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ZoomOutIcon />
                  <span>Zoom Out</span>
                  <CommandShortcut>⌘-</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Account">
                <CommandItem>
                  <UserIcon />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <BellIcon />
                  <span>Notifications</span>
                </CommandItem>
                <CommandItem>
                  <HelpCircleIcon />
                  <span>Help &amp; Support</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Tools">
                <CommandItem>
                  <CalculatorIcon />
                  <span>Calculator</span>
                </CommandItem>
                <CommandItem>
                  <CalendarIcon />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <ImageIcon />
                  <span>Image Editor</span>
                </CommandItem>
                <CommandItem>
                  <CodeIcon />
                  <span>Code Editor</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandRoot>
        </CommandDialog>
      </Box>
    );
  },
};

export const CompositionWithDisabledItems: CompositionStory = {
  name: 'Composition API / Disabled Items',
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandRoot>
            <CommandInput placeholder="Search commands..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="General">
                <CommandItem>
                  <CalendarIcon />
                  Calendar
                </CommandItem>
                <CommandItem disabled>
                  <RocketIcon className="size-4" />
                  Launch (disabled)
                </CommandItem>
                <CommandItem>
                  <GearIcon className="size-4" />
                  Settings
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandRoot>
        </CommandDialog>
      </Box>
    );
  },
};
