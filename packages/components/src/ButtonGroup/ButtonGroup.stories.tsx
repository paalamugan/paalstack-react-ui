import type { Meta, StoryObj } from '@storybook/react';

import { RxArchive as ArchiveIcon, RxCopy as CopyIcon, RxClipboard as PasteIcon } from '@/icons/rx';

import { Button } from '../Button';
import { Input } from '../Input';
import { ButtonGroup, ButtonGroupRoot, ButtonGroupSeparator, ButtonGroupText } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      description: 'Layout direction of the button group.',
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    items: {
      description: 'Array of button items to render.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

// ─── Props API ────────────────────────────────────────────────────────────────

export const Basic: Story = {
  args: {
    items: [{ label: 'Archive' }, { label: 'Report' }, { label: 'Snooze' }],
  },
};

export const WithSeparator: Story = {
  args: {
    items: [{ label: 'Copy' }, { separator: true, label: 'Paste' }],
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    items: [{ label: 'Option A' }, { label: 'Option B' }, { label: 'Option C' }],
  },
};

export const MixedVariants: Story = {
  args: {
    items: [
      { label: 'Save', variant: 'default' },
      { separator: true, label: 'Discard', variant: 'outline' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { leftIcon: <ArchiveIcon />, label: 'Archive' },
      { leftIcon: <CopyIcon />, label: 'Copy' },
      { separator: true, leftIcon: <PasteIcon />, label: 'Paste' },
    ],
  },
};

export const IconOnly: Story = {
  args: {
    items: [
      { size: 'icon', leftIcon: <ArchiveIcon /> },
      { size: 'icon', leftIcon: <CopyIcon /> },
      { separator: true, size: 'icon', leftIcon: <PasteIcon /> },
    ],
  },
};

export const Small: Story = {
  args: {
    items: [
      { size: 'sm', label: 'Small A' },
      { size: 'sm', label: 'Small B' },
      { size: 'sm', label: 'Small C' },
    ],
  },
};

export const Large: Story = {
  args: {
    items: [
      { size: 'lg', label: 'Large A' },
      { size: 'lg', label: 'Large B' },
      { size: 'lg', label: 'Large C' },
    ],
  },
};

// ─── Composition API ──────────────────────────────────────────────────────────

export const CompositionBasic: Story = {
  render: () => (
    <ButtonGroupRoot>
      <Button>Archive</Button>
      <Button>Report</Button>
      <Button>Snooze</Button>
    </ButtonGroupRoot>
  ),
};

export const CompositionWithSeparator: Story = {
  render: () => (
    <ButtonGroupRoot>
      <Button>Copy</Button>
      <ButtonGroupSeparator />
      <Button>Paste</Button>
    </ButtonGroupRoot>
  ),
};

export const CompositionVertical: Story = {
  render: () => (
    <ButtonGroupRoot orientation="vertical" aria-label="Actions">
      <Button>Option A</Button>
      <Button>Option B</Button>
      <Button>Option C</Button>
    </ButtonGroupRoot>
  ),
};

export const CompositionWithText: Story = {
  render: () => (
    <ButtonGroupRoot>
      <ButtonGroupText>$</ButtonGroupText>
      <Input placeholder="Amount" className="w-32" />
      <Button>Pay</Button>
    </ButtonGroupRoot>
  ),
};

export const CompositionSplitButton: Story = {
  render: () => (
    <ButtonGroupRoot>
      <Button>Follow</Button>
      <ButtonGroupSeparator />
      <Button size="icon">
        <ArchiveIcon />
      </Button>
    </ButtonGroupRoot>
  ),
};

export const CompositionOutlineVariant: Story = {
  render: () => (
    <ButtonGroupRoot>
      <Button variant="outline">Copy</Button>
      <Button variant="outline">Paste</Button>
      <Button variant="outline">Cut</Button>
    </ButtonGroupRoot>
  ),
};
