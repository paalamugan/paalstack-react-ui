import type { Meta, StoryObj } from '@storybook/react';

import { RxAccessibility as AccessibilityIcon } from '@/icons/rx';
import { Heading } from '@/layouts/Heading';
import { ALL_COLOR_VARIANTS } from '@/shared/constants';

import { BUTTON_ROUNDED, BUTTON_VARIANTS } from '../Button/constants';
import { IconButton } from './IconButton';

const ICON = <AccessibilityIcon />;

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual style variant of the icon button.',
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
    },
    color: {
      description: 'Color applied to the variant.',
      control: { type: 'select' },
      options: ALL_COLOR_VARIANTS,
      defaultValue: 'primary',
    },
    rounded: {
      description: 'The border radius of the icon button.',
      control: { type: 'select' },
      options: Object.keys(BUTTON_ROUNDED),
      defaultValue: 'md',
    },
    disabled: {
      description: 'Whether the icon button is disabled.',
      control: { type: 'boolean' },
    },
    outline: {
      description: '(Deprecated) Use variant="outline" instead.',
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: ICON,
  },
};

export const Outline: Story = {
  args: {
    ...Basic.args,
    outline: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const OutlineWithDisabled: Story = {
  args: {
    ...Outline.args,
    disabled: true,
  },
};

export const WithVariant: Story = {
  render: (args) => (
    <div className="flex flex-row items-center gap-3">
      {BUTTON_VARIANTS.map((variant) => (
        <IconButton {...args} variant={variant} key={variant} aria-label={variant} />
      ))}
    </div>
  ),
  args: {
    icon: ICON,
    color: 'primary',
  },
};

export const WithSolidVariant: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {ALL_COLOR_VARIANTS.map((color) => (
        <IconButton {...args} color={color} key={color} aria-label={color} />
      ))}
    </div>
  ),
  args: {
    icon: ICON,
    variant: 'solid',
  },
};

export const WithSurfaceVariant: Story = {
  ...WithSolidVariant,
  args: {
    icon: ICON,
    variant: 'surface',
  },
};

export const WithOutlineVariant: Story = {
  ...WithSolidVariant,
  args: {
    icon: ICON,
    variant: 'outline',
  },
};

export const WithSoftVariant: Story = {
  ...WithSolidVariant,
  args: {
    icon: ICON,
    variant: 'soft',
  },
};

export const WithGhostVariant: Story = {
  ...WithSolidVariant,
  args: {
    icon: ICON,
    variant: 'ghost',
  },
};

export const WithRounded: Story = {
  render: (args) => (
    <div className="flex flex-row items-center gap-3">
      {(Object.keys(BUTTON_ROUNDED) as Array<keyof typeof BUTTON_ROUNDED>).map((rounded) => (
        <IconButton {...args} rounded={rounded} key={rounded} aria-label={rounded} />
      ))}
    </div>
  ),
  args: {
    icon: ICON,
    variant: 'solid',
    color: 'primary',
  },
};

export const WithAllVariantColor: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {BUTTON_VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-3">
          <Heading>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Heading>
          <div className="flex flex-wrap gap-3">
            {ALL_COLOR_VARIANTS.map((color) => (
              <IconButton
                {...args}
                variant={variant}
                color={color}
                key={variant + color}
                aria-label={`${variant} ${color}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    icon: ICON,
  },
};

export const WithAllVariantColorDisabled: Story = {
  ...WithAllVariantColor,
  args: {
    icon: ICON,
    disabled: true,
  },
};
