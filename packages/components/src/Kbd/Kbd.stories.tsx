import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@/layouts/Box';
import { Stack } from '@/layouts/Stack';

import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';
import { Kbd, KbdGroup } from './Kbd';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Kbd>;

export const Basic: Story = {
  render: () => <Kbd>⌘</Kbd>,
  args: {},
};

export const SingleKey: Story = {
  render: () => (
    <Stack>
      <Box className="flex flex-wrap gap-2">
        <Kbd>⌘</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌃</Kbd>
        <Kbd>⏎</Kbd>
        <Kbd>⌫</Kbd>
        <Kbd>Esc</Kbd>
        <Kbd>Tab</Kbd>
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
      </Box>
    </Stack>
  ),
  args: {},
};

export const WithText: Story = {
  render: () => (
    <Stack>
      <Box className="flex flex-wrap gap-2">
        <Kbd>A</Kbd>
        <Kbd>B</Kbd>
        <Kbd>C</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Delete</Kbd>
        <Kbd>Space</Kbd>
        <Kbd>F1</Kbd>
        <Kbd>F12</Kbd>
      </Box>
    </Stack>
  ),
  args: {},
};

export const KeyCombinations: Story = {
  render: () => (
    <Stack className="gap-4">
      <Box className="flex flex-wrap items-center gap-4">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>P</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>⌃</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>T</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>V</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </Box>
    </Stack>
  ),
  args: {},
};

export const ShortcutList: Story = {
  render: () => (
    <Box className="w-64 rounded-lg border p-4">
      <p className="mb-3 text-sm font-medium">Keyboard shortcuts</p>
      <Box className="space-y-2">
        {[
          { label: 'Open command palette', keys: ['⌘', 'K'] },
          { label: 'Search', keys: ['⌘', 'F'] },
          { label: 'Save', keys: ['⌘', 'S'] },
          { label: 'Undo', keys: ['⌘', 'Z'] },
          { label: 'Redo', keys: ['⌘', '⇧', 'Z'] },
          { label: 'New file', keys: ['⌘', 'N'] },
        ].map(({ label, keys }) => (
          <Box key={label} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{label}</span>
            <KbdGroup>
              {keys.map((k) => (
                <Kbd key={k}>{k}</Kbd>
              ))}
            </KbdGroup>
          </Box>
        ))}
      </Box>
    </Box>
  ),
  args: {},
};

export const InTooltip: Story = {
  render: () => (
    <Box className="flex justify-center p-8">
      <Tooltip>
        <TooltipTrigger>
          <Box as="button" className="rounded-md border bg-muted px-3 py-1.5 text-sm hover:bg-accent">
            Hover me
          </Box>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2">
          Open command palette
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </TooltipContent>
      </Tooltip>
    </Box>
  ),
  args: {},
};

export const InMenuContext: Story = {
  render: () => (
    <Box className="w-52 rounded-lg border bg-popover p-1 shadow-md">
      {[
        { label: 'Cut', keys: ['⌘', 'X'] },
        { label: 'Copy', keys: ['⌘', 'C'] },
        { label: 'Paste', keys: ['⌘', 'V'] },
        { label: 'Select All', keys: ['⌘', 'A'] },
      ].map(({ label, keys }) => (
        <Box
          key={label}
          className="flex cursor-default items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
        >
          <span>{label}</span>
          <KbdGroup>
            {keys.map((k) => (
              <Kbd key={k}>{k}</Kbd>
            ))}
          </KbdGroup>
        </Box>
      ))}
    </Box>
  ),
  args: {},
};
