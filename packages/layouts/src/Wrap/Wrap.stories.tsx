import type { Meta, StoryObj } from '@storybook/react';

import { getRandomBoxColors } from '@/shared/utils';

import boxStories from '../Box/Box.stories';
import { Center } from '../Center';
import { Wrap, WrapItem } from './Wrap';

const meta: Meta<typeof Wrap> = {
  title: 'Layouts/Wrap',
  component: Wrap,
  tags: ['autodocs'],
  argTypes: {
    ...boxStories.argTypes,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Wrap {...args}>
      {getRandomBoxColors(10).map((bg, i) => (
        <WrapItem key={i}>
          <Center bg={bg} color="white" className="h-32 w-32 rounded">
            Item {i + 1}
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  ),
};
