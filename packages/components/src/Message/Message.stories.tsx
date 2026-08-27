import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarFallback } from '../Avatar';
import { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader } from './Message';

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'radio',
      options: ['start', 'end'],
      description: 'Which side of the conversation the message is aligned to',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Message>;

const OutgoingAvatar = () => (
  <Avatar size="sm">
    <AvatarFallback>ME</AvatarFallback>
  </Avatar>
);

const IncomingAvatar = () => (
  <Avatar size="sm">
    <AvatarFallback>AL</AvatarFallback>
  </Avatar>
);

export const Default: Story = {
  render: () => (
    <Message className="max-w-md">
      <MessageAvatar>
        <IncomingAvatar />
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Alex</MessageHeader>
        <p className="rounded-xl bg-muted px-3 py-2">Hey, did you get a chance to review the design files?</p>
        <MessageFooter>10:24 AM</MessageFooter>
      </MessageContent>
    </Message>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <Message align="end" className="max-w-md">
      <MessageAvatar>
        <OutgoingAvatar />
      </MessageAvatar>
      <MessageContent>
        <p className="rounded-xl bg-primary px-3 py-2 text-primary-foreground">
          Yes! Left a few comments, but overall it looks great.
        </p>
        <MessageFooter>10:26 AM · Read</MessageFooter>
      </MessageContent>
    </Message>
  ),
};

export const Conversation: Story = {
  render: () => (
    <MessageGroup className="max-w-md rounded-xl border p-4">
      <Message>
        <MessageAvatar>
          <IncomingAvatar />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Alex</MessageHeader>
          <p className="rounded-xl bg-muted px-3 py-2">The build is green. Ready to deploy?</p>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <OutgoingAvatar />
        </MessageAvatar>
        <MessageContent>
          <p className="rounded-xl bg-primary px-3 py-2 text-primary-foreground">Ship it.</p>
          <MessageFooter>10:31 AM</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <OutgoingAvatar />
        </MessageAvatar>
        <MessageContent>
          <p className="rounded-xl bg-primary px-3 py-2 text-primary-foreground">
            Actually wait — run the e2e suite one more time first.
          </p>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <IncomingAvatar />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Alex</MessageHeader>
          <p className="rounded-xl bg-muted px-3 py-2">Already did. All 42 passed.</p>
          <MessageFooter>10:33 AM</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  ),
};

export const WithFooterOnly: Story = {
  render: () => (
    <Message className="max-w-md">
      <MessageAvatar>
        <IncomingAvatar />
      </MessageAvatar>
      <MessageContent>
        <p className="rounded-xl bg-muted px-3 py-2">Message without a header — just content and a delivery time.</p>
        <MessageFooter>Delivered</MessageFooter>
      </MessageContent>
    </Message>
  ),
};
