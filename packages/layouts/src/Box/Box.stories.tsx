import type { Meta, StoryObj } from '@storybook/react';

import { BOX_COLOR_VARIANTS, FONT_SIZE_VARIANTS } from '@/shared/constants';
import { disableStorybookArgTypes } from '@/shared/utils';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layouts/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    ...disableStorybookArgTypes(['htmlTranslate', 'pos', 'flexDir']),
    as: {
      description: 'The HTML element or React component to render',
      control: {
        type: 'text',
      },
    },
    bg: {
      description: 'Background color for the box',
      options: BOX_COLOR_VARIANTS,
      control: {
        type: 'select',
      },
    },
    color: {
      description: 'Text color for the box',
      options: BOX_COLOR_VARIANTS,
      control: {
        type: 'select',
      },
    },
    borderColor: {
      description: 'Border color for the box',
      options: BOX_COLOR_VARIANTS,
      control: {
        type: 'select',
      },
    },
    fontSize: {
      description: 'Font Size for the box',
      options: FONT_SIZE_VARIANTS,
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  args: {
    children: 'Box',
    as: 'section',
    bg: 'blue',
    color: 'white',
    fontSize: 'base',
  },
};
