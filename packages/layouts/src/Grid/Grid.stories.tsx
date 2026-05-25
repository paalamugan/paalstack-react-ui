import type { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem } from '.';
import boxStories from '../Box/Box.stories';

const meta: Meta<typeof Grid> = {
  title: 'Layouts/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    ...boxStories.argTypes,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Grid {...args} className="grid-cols-4 gap-3">
      {Array.from({ length: 10 }).map((_, i) => (
        <GridItem key={i} className="grid-col-auto bg-blue-600 p-4 text-white">
          Grid Item {i + 1}
        </GridItem>
      ))}
    </Grid>
  ),
};
