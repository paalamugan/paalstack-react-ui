import type { Meta, StoryObj } from '@storybook/react';

import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from './Bubble';

const meta: Meta<typeof Bubble> = {
  title: 'Components/Bubble',
  component: Bubble,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'],
      description: 'Visual style of the bubble content',
    },
    align: {
      control: 'radio',
      options: ['start', 'end'],
      description: 'Which side of the conversation the bubble sits on',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Bubble>;

export const Default: Story = {
  render: () => (
    <Bubble className="max-w-sm">
      <BubbleContent>Looks good to me — ship it!</BubbleContent>
    </Bubble>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <Bubble align="end" className="max-w-sm">
      <BubbleContent>Deploying to production now.</BubbleContent>
    </Bubble>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <BubbleGroup className="max-w-md gap-3">
      {(['default', 'secondary', 'muted', 'tinted', 'outline', 'ghost', 'destructive'] as const).map((variant) => (
        <Bubble key={variant} variant={variant}>
          <BubbleContent>
            <span className="block text-[10px] uppercase opacity-60">{variant}</span>
            Variant preview text
          </BubbleContent>
        </Bubble>
      ))}
    </BubbleGroup>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Bubble className="max-w-sm">
      <BubbleContent asChild>
        <a href="#docs">Check out the new docs page</a>
      </BubbleContent>
    </Bubble>
  ),
};

export const WithReactions: Story = {
  render: () => (
    <Bubble className="max-w-sm">
      <BubbleContent>Great catch, I pushed a fix.</BubbleContent>
      <BubbleReactions>
        <button type="button" className="rounded-full px-1 hover:bg-background" aria-label="Remove reaction">
          👍 2
        </button>
      </BubbleReactions>
    </Bubble>
  ),
};

export const Conversation: Story = {
  render: () => (
    <BubbleGroup className="max-w-md rounded-xl border p-4">
      <Bubble>
        <BubbleContent>Are the preview URLs working for you?</BubbleContent>
      </Bubble>
      <Bubble align="end" variant="secondary">
        <BubbleContent>Yep, all three environments render.</BubbleContent>
      </Bubble>
      <Bubble>
        <BubbleContent>Perfect. Marking the ticket done.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  ),
};
