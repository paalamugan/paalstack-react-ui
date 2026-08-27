'use client';

import type * as React from 'react';

import { cn } from '@/shared/lib';

const MessageGroup = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="message-group"
      data-qa="message-group"
      className={cn('flex min-w-0 flex-col gap-2', className)}
      {...props}
    />
  );
};
MessageGroup.displayName = 'MessageGroup';

const Message = ({
  className,
  align = 'start',
  ...props
}: React.ComponentProps<'div'> & { align?: 'start' | 'end' }) => {
  return (
    <div
      data-slot="message"
      data-qa="message"
      data-align={align}
      className={cn(
        'group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse',
        className,
      )}
      {...props}
    />
  );
};
Message.displayName = 'Message';

const MessageAvatar = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="message-avatar"
      data-qa="message-avatar"
      className={cn(
        'flex w-fit min-w-8 shrink-0 items-center justify-center self-end overflow-hidden rounded-full bg-muted group-has-data-[slot=message-footer]/message:-translate-y-8',
        className,
      )}
      {...props}
    />
  );
};
MessageAvatar.displayName = 'MessageAvatar';

const MessageContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="message-content"
      data-qa="message-content"
      className={cn(
        'flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end',
        className,
      )}
      {...props}
    />
  );
};
MessageContent.displayName = 'MessageContent';

const MessageHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="message-header"
      data-qa="message-header"
      className={cn(
        'flex max-w-full min-w-0 items-center px-3 text-xs font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0',
        className,
      )}
      {...props}
    />
  );
};
MessageHeader.displayName = 'MessageHeader';

const MessageFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="message-footer"
      data-qa="message-footer"
      className={cn(
        'flex max-w-full min-w-0 items-center px-3 text-xs font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end',
        className,
      )}
      {...props}
    />
  );
};
MessageFooter.displayName = 'MessageFooter';

export { MessageGroup, Message, MessageAvatar, MessageContent, MessageFooter, MessageHeader };
