/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LuBold, LuItalic, LuStar, LuUnderline } from '@/icons/lu';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle">
      Toggle
    </Toggle>
  ),
  args: {
    variant: 'default',
  },
};

export const Outline: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle">
      Toggle
    </Toggle>
  ),
  args: {
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <LuBold />
    </Toggle>
  ),
  args: {
    variant: 'default',
  },
};

export const IconOutline: Story = {
  name: 'Icon – Outline',
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <LuItalic />
    </Toggle>
  ),
  args: {
    variant: 'outline',
  },
};

export const Small: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle">
      Toggle
    </Toggle>
  ),
  args: {
    variant: 'default',
    size: 'sm',
  },
};

export const Large: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle">
      Toggle
    </Toggle>
  ),
  args: {
    variant: 'default',
    size: 'lg',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle">
      Toggle
    </Toggle>
  ),
  args: {
    disabled: true,
  },
};

export const DisabledPressed: Story = {
  name: 'Disabled (Pressed)',
  render: (args) => (
    <Toggle {...args} aria-label="Toggle">
      Toggle
    </Toggle>
  ),
  args: {
    disabled: true,
    pressed: true,
  },
};

export const WithText: Story = {
  name: 'Icon + Text',
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <LuBold />
      Bold
    </Toggle>
  ),
  args: {
    variant: 'outline',
  },
};

export const FormattingToolbar: Story = {
  render: () => {
    const [bold, setBold] = React.useState(false);
    const [italic, setItalic] = React.useState(false);
    const [underline, setUnderline] = React.useState(false);

    return (
      <div className="flex gap-1 rounded-md border p-1">
        <Toggle pressed={bold} onPressedChange={setBold} aria-label="Toggle bold" size="sm">
          <LuBold />
        </Toggle>
        <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Toggle italic" size="sm">
          <LuItalic />
        </Toggle>
        <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Toggle underline" size="sm">
          <LuUnderline />
        </Toggle>
      </div>
    );
  },
};

export const FavoriteToggle: Story = {
  render: () => {
    const [isFavorite, setIsFavorite] = React.useState(false);

    return (
      <Toggle
        pressed={isFavorite}
        onPressedChange={setIsFavorite}
        variant="outline"
        aria-label="Toggle favorite"
        className="aria-pressed:text-warning"
      >
        <LuStar className={isFavorite ? 'fill-current' : ''} />
        {isFavorite ? 'Favorited' : 'Favorite'}
      </Toggle>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm" aria-label="Small">
        <LuBold />
      </Toggle>
      <Toggle size="default" aria-label="Default">
        <LuBold />
      </Toggle>
      <Toggle size="lg" aria-label="Large">
        <LuBold />
      </Toggle>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle variant="default" aria-label="Default">
        Default
      </Toggle>
      <Toggle variant="outline" aria-label="Outline">
        Outline
      </Toggle>
    </div>
  ),
};
