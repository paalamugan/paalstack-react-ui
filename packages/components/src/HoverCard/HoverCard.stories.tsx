import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RxCalendar as CalendarIcon } from '@/icons/rx';
import { Box, Heading, Text } from '@/layouts/index';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Basic: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link">@nextjs</Button>} />
      <HoverCardContent className="w-80">
        <Box className="flex justify-between space-x-4">
          <Avatar src="https://avatars.githubusercontent.com/u/42642576" fallback="PS" />

          <Box className="space-y-1">
            <Heading as="h4" className="text-sm font-semibold">
              @nextjs
            </Heading>
            <Text className="text-sm">The React Framework – created and maintained by @vercel.</Text>
            <Box className="flex items-center pt-2">
              <CalendarIcon className="mr-2 size-4 opacity-70" />{' '}
              <Text as="span" className="text-xs text-muted-foreground">
                Joined December 2021
              </Text>
            </Box>
          </Box>
        </Box>
      </HoverCardContent>
    </HoverCard>
  ),
  args: {},
};

// --- Prop-based API examples ---

export const PropsBasic: Story = {
  render: () => (
    <HoverCard
      trigger={<Button variant="link">@paalamugan</Button>}
      title="Paalamugan"
      description="Software Engineer @paalstack"
    >
      <p className="pt-1 text-xs text-muted-foreground">1.2k followers • 234 following</p>
    </HoverCard>
  ),
};

export const PropsTitleDescriptionOnly: Story = {
  render: () => (
    <HoverCard
      trigger={<span className="cursor-default font-medium underline">Hover for details</span>}
      title="Need Help?"
      description="Check our documentation or contact support."
    />
  ),
};

export const PropsCustomContent: Story = {
  render: () => (
    <HoverCard trigger={<Button variant="ghost">Preview</Button>} contentProps={{ className: 'w-80' }}>
      <div className="space-y-2">
        <p className="text-sm">Any custom content here — no title or description.</p>
        <Button size="sm">Learn more</Button>
      </div>
    </HoverCard>
  ),
};

export const PropsControlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = React.useState(false);
    return (
      <HoverCard
        open={open}
        onOpenChange={setOpen}
        trigger={<Button variant="outline">Controlled</Button>}
        title="Controlled card"
      >
        <p className="pt-1 text-sm">Content that appears on hover. Open state can be toggled programmatically.</p>
      </HoverCard>
    );
  },
};

export const PropsWithContentProps: Story = {
  render: () => (
    <HoverCard
      trigger={<Button variant="link">Wide card</Button>}
      title="Wide content"
      description="Uses contentProps to set width."
      contentProps={{ className: 'w-96' }}
    >
      <p className="pt-1 text-xs text-muted-foreground">Extra-wide hover card via contentProps.className.</p>
    </HoverCard>
  ),
};
