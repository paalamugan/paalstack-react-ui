/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  LuBell as BellIcon,
  LuCircleHelp as HelpCircleIcon,
  LuInfo as InfoIcon,
  LuSettings as SettingsIcon,
  LuUser as UserIcon,
} from '@/icons/lu';
import { Box } from '@/layouts/Box';
import { Stack } from '@/layouts/Stack';

import { Button } from '../Button';
import { Kbd, KbdGroup } from '../Kbd';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'radio' },
    },
    onOpenChange: {
      action: 'onOpenChange',
    },
    open: {
      control: { type: 'boolean' },
    },
    defaultOpen: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;
type CompositionStory = StoryObj<typeof Tooltip>;

// ---------------------------------------------------------------------------
// Props API
// ---------------------------------------------------------------------------

export const Basic: Story = {
  args: {
    content: 'Add to library',
    trigger: <Button variant="outline">Hover me</Button>,
  },
};

export const AllSides: Story = {
  render: () => (
    <Box className="grid grid-cols-2 gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip
          key={side}
          content={`${side} tooltip`}
          side={side}
          trigger={
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          }
        />
      ))}
    </Box>
  ),
  args: {},
};

export const AllAlignments: Story = {
  render: () => (
    <Box className="flex flex-col gap-4">
      {(['start', 'center', 'end'] as const).map((align) => (
        <Tooltip
          key={align}
          content={`Aligned to ${align}`}
          side="right"
          align={align}
          trigger={
            <Button variant="outline" className="w-32 capitalize">
              {align}
            </Button>
          }
        />
      ))}
    </Box>
  ),
  args: {},
};

export const WithDelay: Story = {
  render: () => (
    <Box className="flex gap-4">
      <Tooltip content="No delay" delay={0} trigger={<Button variant="outline">Instant</Button>} />

      <Tooltip content="300ms delay" delay={300} trigger={<Button variant="outline">300ms</Button>} />

      <Tooltip content="700ms delay" delay={700} trigger={<Button variant="outline">700ms</Button>} />
    </Box>
  ),
  args: {},
};

export const WithIconButton: Story = {
  render: () => (
    <Box className="flex gap-2">
      <Tooltip
        content="Notifications"
        trigger={
          <Button variant="ghost" size="icon">
            <BellIcon />
          </Button>
        }
      />
      <Tooltip
        content="Settings"
        trigger={
          <Button variant="ghost" size="icon">
            <SettingsIcon />
          </Button>
        }
      />
      <Tooltip
        content="Help & support"
        trigger={
          <Button variant="ghost" size="icon">
            <HelpCircleIcon />
          </Button>
        }
      />
      <Tooltip
        content="Profile"
        trigger={
          <Button variant="ghost" size="icon">
            <UserIcon />
          </Button>
        }
      />
    </Box>
  ),
  args: {},
};

export const WithShortcut: Story = {
  render: () => (
    <Box className="flex gap-4">
      <Tooltip
        content={
          <Box className="flex items-center gap-2">
            Bold
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>B</Kbd>
            </KbdGroup>
          </Box>
        }
        trigger={<Button variant="outline">Bold</Button>}
      />
      <Tooltip
        content={
          <Box className="flex items-center gap-2">
            Save
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>S</Kbd>
            </KbdGroup>
          </Box>
        }
        trigger={<Button variant="outline">Save</Button>}
      />
      <Tooltip
        content={
          <Box className="flex items-center gap-2">
            Command palette
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </Box>
        }
        trigger={<Button variant="outline">Command</Button>}
      />
    </Box>
  ),
  args: {},
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Stack className="items-center gap-4">
        <Tooltip
          content="This tooltip is controlled"
          open={open}
          onOpenChange={setOpen}
          trigger={
            <Button variant="outline" onClick={() => setOpen((v) => !v)}>
              {open ? 'Click to close' : 'Click to open'}
            </Button>
          }
        />

        <p className="text-sm text-muted-foreground">Tooltip is: {open ? 'open' : 'closed'}</p>
      </Stack>
    );
  },
  args: {},
};

// ---------------------------------------------------------------------------
// Composition API
// ---------------------------------------------------------------------------

export const CompositionBasic: CompositionStory = {
  name: 'Composition API / Basic',
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  ),
  args: {},
};

export const CompositionWithSides: CompositionStory = {
  name: 'Composition API / All Sides',
  render: () => (
    <Box className="grid grid-cols-2 gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger
            render={
              <Button variant="outline" className="capitalize">
                {side}
              </Button>
            }
          />
          <TooltipContent side={side}>{side} tooltip</TooltipContent>
        </Tooltip>
      ))}
    </Box>
  ),
  args: {},
};

export const CompositionRichContent: CompositionStory = {
  name: 'Composition API / Rich Content',
  render: () => (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="ghost" size="icon">
            <InfoIcon />
          </Button>
        }
      />
      <TooltipContent className="max-w-[200px] p-3" side="right">
        <Box className="space-y-1">
          <p className="font-semibold">Quick tip</p>
          <p className="text-xs opacity-80">
            You can use keyboard shortcuts to speed up your workflow. Press <Kbd>⌘K</Kbd> to open the command palette.
          </p>
        </Box>
      </TooltipContent>
    </Tooltip>
  ),
  args: {},
};

export const CompositionWithShortcut: CompositionStory = {
  name: 'Composition API / With Kbd',
  render: () => (
    <Box className="flex gap-2">
      {[
        { label: 'B', tip: 'Bold', keys: ['⌘', 'B'] },
        { label: 'I', tip: 'Italic', keys: ['⌘', 'I'] },
        { label: 'U', tip: 'Underline', keys: ['⌘', 'U'] },
      ].map(({ label, tip, keys }) => (
        <Tooltip key={label}>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" className="font-serif italic">
                {label}
              </Button>
            }
          />
          <TooltipContent>
            <Box className="flex items-center gap-1.5">
              {tip}
              <KbdGroup>
                {keys.map((k) => (
                  <Kbd key={k}>{k}</Kbd>
                ))}
              </KbdGroup>
            </Box>
          </TooltipContent>
        </Tooltip>
      ))}
    </Box>
  ),
  args: {},
};

export const CompositionToolbar: CompositionStory = {
  name: 'Composition API / Toolbar',
  render: () => (
    <Box className="flex items-center gap-1 rounded-lg border bg-background p-1 shadow-sm">
      {[
        { icon: <BellIcon />, label: 'Notifications', shortcut: '⌘N' },
        { icon: <UserIcon />, label: 'Profile', shortcut: '⌘P' },
        { icon: <SettingsIcon />, label: 'Settings', shortcut: '⌘,' },
        { icon: <HelpCircleIcon />, label: 'Help', shortcut: '⌘?' },
      ].map(({ icon, label, shortcut }) => (
        <Tooltip key={label}>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon">
                {icon}
              </Button>
            }
          />
          <TooltipContent side="bottom">
            <Box className="flex items-center gap-1.5">
              {label}
              <Kbd>{shortcut}</Kbd>
            </Box>
          </TooltipContent>
        </Tooltip>
      ))}
    </Box>
  ),
  args: {},
};
