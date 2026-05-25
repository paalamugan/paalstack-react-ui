import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  LuAlignCenter,
  LuAlignLeft,
  LuAlignRight,
  LuBold,
  LuItalic,
  LuLayoutGrid,
  LuList,
  LuUnderline,
} from '@/icons/lu';

import { ToggleGroup, ToggleGroupItem, ToggleGroupRoot } from './ToggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
    type: { control: 'select', options: ['single', 'multiple'] },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

// ---------------------------------------------------------------------------
// Props API Stories
// ---------------------------------------------------------------------------

export const Single: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    items: [
      {
        value: 'left',
        content: <LuAlignLeft />,
      },
      { value: 'center', content: <LuAlignCenter /> },
      { value: 'right', content: <LuAlignRight /> },
    ],
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['bold'],
    items: [
      { value: 'bold', content: <LuBold /> },
      { value: 'italic', content: <LuItalic /> },
      { value: 'underline', content: <LuUnderline /> },
    ],
  },
};

export const OutlineVariant: Story = {
  args: {
    type: 'single',
    variant: 'outline',
    defaultValue: 'center',
    items: [
      { value: 'left', content: <LuAlignLeft /> },
      { value: 'center', content: <LuAlignCenter /> },
      { value: 'right', content: <LuAlignRight /> },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    type: 'single',
    label: 'Text Alignment',
    defaultValue: 'left',
    items: [
      { value: 'left', content: <LuAlignLeft /> },
      { value: 'center', content: <LuAlignCenter /> },
      { value: 'right', content: <LuAlignRight /> },
    ],
  },
};

export const InlineLabel: Story = {
  args: {
    ...WithLabel.args,
    inline: true,
  },
};

export const SmallSize: Story = {
  args: {
    type: 'single',
    size: 'sm',
    defaultValue: 'left',
    items: [
      { value: 'left', content: <LuAlignLeft /> },
      { value: 'center', content: <LuAlignCenter /> },
      { value: 'right', content: <LuAlignRight /> },
    ],
  },
};

export const LargeSize: Story = {
  args: {
    type: 'single',
    size: 'lg',
    defaultValue: 'left',
    items: [
      { value: 'left', content: <LuAlignLeft /> },
      { value: 'center', content: <LuAlignCenter /> },
      { value: 'right', content: <LuAlignRight /> },
    ],
  },
};

export const WithSpacing: Story = {
  args: {
    type: 'single',
    variant: 'outline',
    spacing: 1,
    defaultValue: 'grid',
    items: [
      {
        value: 'grid',
        content: (
          <>
            <LuLayoutGrid /> Grid
          </>
        ),
      },
      {
        value: 'list',
        content: (
          <>
            <LuList /> List
          </>
        ),
      },
    ],
  },
};

export const TextItems: Story = {
  args: {
    type: 'single',
    variant: 'outline',
    defaultValue: 'week',
    items: [
      { value: 'day', content: 'Day' },
      { value: 'week', content: 'Week' },
      { value: 'month', content: 'Month' },
      { value: 'year', content: 'Year' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    type: 'single',
    disabled: true,
    defaultValue: 'center',
    items: [
      { value: 'left', content: <LuAlignLeft /> },
      { value: 'center', content: <LuAlignCenter /> },
      { value: 'right', content: <LuAlignRight /> },
    ],
  },
};

export const DisabledItem: Story = {
  args: {
    type: 'single',
    defaultValue: 'left',
    items: [
      { value: 'left', content: 'Available' },
      { value: 'center', content: 'Premium', disabled: true },
      { value: 'right', content: 'Available' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Composition API Stories
// ---------------------------------------------------------------------------

export const CompositionBasic: Story = {
  name: 'Composition API – Basic',
  render: () => (
    <ToggleGroupRoot defaultValue={['center']}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <LuAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <LuAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <LuAlignRight />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};

export const CompositionOutline: Story = {
  name: 'Composition API – Outline',
  render: () => (
    <ToggleGroupRoot variant="outline" defaultValue={['center']}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <LuAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <LuAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <LuAlignRight />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};

export const CompositionVertical: Story = {
  name: 'Composition API – Vertical',
  render: () => (
    <ToggleGroupRoot variant="outline" orientation="vertical" defaultValue={['grid']}>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <LuLayoutGrid />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List view">
        <LuList />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};

const CompositionMultipleRender = () => {
  const [values, setValues] = React.useState(['bold']);

  return (
    <div className="space-y-2">
      <ToggleGroupRoot multiple value={values} onValueChange={setValues}>
        <ToggleGroupItem value="bold" aria-label="Bold">
          <LuBold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <LuItalic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <LuUnderline />
        </ToggleGroupItem>
      </ToggleGroupRoot>
      <p className="text-sm text-muted-foreground">Selected: {values.join(', ') || 'none'}</p>
    </div>
  );
};

export const CompositionMultiple: Story = {
  name: 'Composition API – Multiple',
  render: () => <CompositionMultipleRender />,
};

export const CompositionWithSpacing: Story = {
  name: 'Composition API – With Spacing',
  render: () => (
    <ToggleGroupRoot variant="outline" spacing={1} defaultValue={['grid']}>
      <ToggleGroupItem value="grid">
        <LuLayoutGrid /> Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list">
        <LuList /> List
      </ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};
