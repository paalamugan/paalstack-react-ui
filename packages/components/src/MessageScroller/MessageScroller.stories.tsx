import type { Meta, StoryObj } from '@storybook/react';

import { LuArrowDown as ArrowDownIcon } from '@/icons/lu';

import { Message, MessageContent } from '../Message';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from './MessageScroller';

const meta: Meta<typeof MessageScroller> = {
  title: 'Components/MessageScroller',
  component: MessageScroller,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof MessageScroller>;

const MESSAGES = [
  'Morning! Kick-off sync moved to 10:30.',
  'Works for me.',
  'I pushed the API contract changes last night.',
  'Nice — I will update the client SDK today.',
  'Heads up: the staging DB was migrated to the new instance.',
  'Thanks for the heads-up. Any downtime?',
  'About 30 seconds during cutover.',
  'Alright, I will pause the nightly jobs just in case.',
  'Good call.',
  'Preview envs are back up if you want to test.',
  'Testing now…',
  'Everything checks out on my side.',
];

function DemoConversation() {
  return (
    <MessageScrollerProvider defaultScrollPosition="end" autoScroll>
      <MessageScroller className="h-96 w-full max-w-md rounded-xl border">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {MESSAGES.map((text, i) => (
              <MessageScrollerItem key={i} messageId={`msg-${i}`}>
                <Message align={i % 3 === 2 ? 'end' : 'start'} className="max-w-full">
                  <MessageContent>
                    <p
                      className={
                        i % 3 === 2
                          ? 'w-fit rounded-xl bg-primary px-3 py-2 text-primary-foreground'
                          : 'w-fit rounded-xl bg-muted px-3 py-2'
                      }
                    >
                      {text}
                    </p>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton aria-label="Scroll to latest message">
          <ArrowDownIcon />
        </MessageScrollerButton>
      </MessageScroller>
    </MessageScrollerProvider>
  );
}

export const AutoScrollToEnd: Story = {
  render: () => <DemoConversation />,
};

export const StartAtLatest: Story = {
  render: () => (
    <MessageScrollerProvider defaultScrollPosition="last-anchor">
      <MessageScroller className="h-80 w-full max-w-md rounded-xl border">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            {MESSAGES.slice(0, 6).map((text, i) => (
              <MessageScrollerItem key={i} messageId={`anchor-${i}`} scrollAnchor={i === 5}>
                <Message className="max-w-full">
                  <MessageContent>
                    <p className="w-fit rounded-xl bg-muted px-3 py-2">{text}</p>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  ),
};

export const WithoutProvider: Story = {
  render: () => (
    <MessageScroller className="h-64 w-full max-w-md rounded-xl border">
      <MessageScrollerViewport>
        <MessageScrollerContent>
          {MESSAGES.slice(0, 4).map((text, i) => (
            <MessageScrollerItem key={i}>
              <Message className="max-w-full">
                <MessageContent>
                  <p className="w-fit rounded-xl bg-muted px-3 py-2">{text}</p>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          ))}
        </MessageScrollerContent>
      </MessageScrollerViewport>
    </MessageScroller>
  ),
};
