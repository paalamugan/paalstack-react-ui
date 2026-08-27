'use client';

import type { MessageScrollerDefaultScrollPosition } from '@shadcn/react/message-scroller';
import type * as React from 'react';

import {
  MessageScroller as MessageScrollerPrimitive,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
} from '@shadcn/react/message-scroller';

import { LuArrowDown as ArrowDownIcon } from '@/icons/lu';
import { cn } from '@/shared/lib';

import { Button } from '../Button';

function MessageScrollerProvider(props: React.ComponentProps<typeof MessageScrollerPrimitive.Provider>) {
  return (
    <MessageScrollerPrimitive.Provider
      data-slot="message-scroller-provider"
      data-qa="message-scroller-provider"
      {...props}
    />
  );
}
MessageScrollerProvider.displayName = 'MessageScrollerProvider';

function MessageScroller({ className, ...props }: React.ComponentProps<typeof MessageScrollerPrimitive.Root>) {
  return (
    <MessageScrollerPrimitive.Root
      data-slot="message-scroller"
      data-qa="message-scroller"
      className={cn('group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden', className)}
      {...props}
    />
  );
}
MessageScroller.displayName = 'MessageScroller';

function MessageScrollerViewport({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Viewport>) {
  return (
    <MessageScrollerPrimitive.Viewport
      data-slot="message-scroller-viewport"
      data-qa="message-scroller-viewport"
      className={cn(
        'scrollbar-thin size-full min-h-0 min-w-0 scroll-fade-b scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-none',
        className,
      )}
      {...props}
    />
  );
}
MessageScrollerViewport.displayName = 'MessageScrollerViewport';

function MessageScrollerContent({
  className,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Content>) {
  return (
    <MessageScrollerPrimitive.Content
      data-slot="message-scroller-content"
      data-qa="message-scroller-content"
      className={cn('flex h-max min-h-full flex-col gap-8', className)}
      {...props}
    />
  );
}
MessageScrollerContent.displayName = 'MessageScrollerContent';

function MessageScrollerItem({
  className,
  scrollAnchor = false,
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Item>) {
  return (
    <MessageScrollerPrimitive.Item
      data-slot="message-scroller-item"
      data-qa="message-scroller-item"
      scrollAnchor={scrollAnchor}
      className={cn('min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]', className)}
      {...props}
    />
  );
}
MessageScrollerItem.displayName = 'MessageScrollerItem';

function MessageScrollerButton({
  direction = 'end',
  className,
  children,
  render,
  variant = 'secondary',
  size = 'icon-sm',
  ...props
}: React.ComponentProps<typeof MessageScrollerPrimitive.Button> &
  Pick<React.ComponentProps<typeof Button>, 'variant' | 'size'>) {
  return (
    <MessageScrollerPrimitive.Button
      data-slot="message-scroller-button"
      data-qa="message-scroller-button"
      data-direction={direction}
      data-variant={variant}
      data-size={size}
      direction={direction}
      className={cn(
        'absolute inset-s-1/2 -translate-x-1/2 border-border bg-background text-foreground transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-foreground data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&_svg]:rotate-180',
        className,
      )}
      render={render ?? <Button variant={variant} size={size} />}
      {...props}
    >
      {children ?? (
        <>
          <ArrowDownIcon />
          <span className="sr-only">{direction === 'end' ? 'Scroll to end' : 'Scroll to start'}</span>
        </>
      )}
    </MessageScrollerPrimitive.Button>
  );
}
MessageScrollerButton.displayName = 'MessageScrollerButton';

// ─── Props API (Compound Component) ──────────────────────────────────────────

export interface MessageScrollerChatMessage {
  /** Unique identifier used as the scroller anchor for this message. */
  id: string;
  /** The message body content. */
  content: React.ReactNode;
  /** Horizontal alignment of the message within the content column. */
  align?: 'start' | 'end';
}

export interface MessageScrollerChatProps {
  /**
   * The list of messages to render.
   */
  messages: Array<MessageScrollerChatMessage>;
  /**
   * Enable auto-scrolling to new messages.
   * @default true
   */
  autoScroll?: boolean;
  /**
   * Where to scroll initially when the viewport mounts.
   * @default 'end'
   */
  defaultScrollPosition?: MessageScrollerDefaultScrollPosition;
  className?: string;
  /** Applied to the inner MessageScrollerContent column. */
  contentClassName?: string;
  /** Applied to the rendered message items. */
  itemClassName?: string;
  /** Applied to the scroll-to-end button. */
  buttonClassName?: string;
  /**
   * Extra props forwarded to the underlying MessageScrollerProvider.
   */
  providerProps?: React.ComponentProps<typeof MessageScrollerProvider>;
  /**
   * Custom empty-state content rendered when `messages` is empty.
   */
  emptyState?: React.ReactNode;
}

/**
 * Message Scroller Chat Component
 *
 * A ready-made, props-driven chat scroller built on the MessageScroller composition
 * API. Renders a scrollable list of messages with auto-scroll behavior, visibility
 * tracking, and a scroll-to-end button.
 * Perfect for chat apps, activity feeds, logs, and AI conversations.
 *
 * @example
 * // Props API — render a chat from a messages array
 * import { MessageScrollerChat } from '@paalstack/react-ui';
 *
 * const messages = [
 *   { id: '1', content: 'Hi there! 👋', align: 'start' },
 *   { id: '2', content: 'Hello! How can I help?', align: 'end' },
 * ];
 *
 * <MessageScrollerChat className="h-96" messages={messages} />
 *
 * @example
 * // With auto-scroll disabled and custom scroll position
 * <MessageScrollerChat
 *   autoScroll={false}
 *   className="h-[400px]"
 *   defaultScrollPosition="start"
 *   messages={messages}
 * />
 *
 * @example
 * // Composition API — full control over the scroller structure
 * import { MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem, MessageScrollerButton } from '@paalstack/react-ui';
 *
 * <MessageScrollerProvider autoScroll defaultScrollPosition="end">
 *   <MessageScroller className="h-96">
 *     <MessageScrollerViewport>
 *       <MessageScrollerContent>
 *         <MessageScrollerItem messageId="1">Hello</MessageScrollerItem>
 *         <MessageScrollerItem messageId="2">World</MessageScrollerItem>
 *       </MessageScrollerContent>
 *       <MessageScrollerButton direction="end" />
 *     </MessageScrollerViewport>
 *   </MessageScroller>
 * </MessageScrollerProvider>
 *
 * @tip Set align="start" for received messages and align="end" for sent messages
 * @tip Auto-scroll keeps the view pinned to the newest message unless the user scrolls up
 */
function MessageScrollerChat({
  messages,
  autoScroll = true,
  defaultScrollPosition = 'end',
  className,
  contentClassName,
  itemClassName,
  buttonClassName,
  providerProps,
  emptyState,
}: MessageScrollerChatProps) {
  return (
    <MessageScrollerProvider
      autoScroll={autoScroll}
      data-qa="message-scroller-chat"
      defaultScrollPosition={defaultScrollPosition}
      {...providerProps}
    >
      <MessageScroller className={className} data-qa="message-scroller-chat">
        <MessageScrollerViewport>
          <MessageScrollerContent className={contentClassName} data-qa="message-scroller-chat-content">
            {messages.length === 0
              ? emptyState
              : messages.map((message) => (
                  <MessageScrollerItem
                    className={cn(message.align === 'end' ? 'self-end' : 'self-start', itemClassName)}
                    data-align={message.align ?? 'start'}
                    key={message.id}
                    messageId={message.id}
                  >
                    {message.content}
                  </MessageScrollerItem>
                ))}
          </MessageScrollerContent>
          <MessageScrollerButton className={buttonClassName} data-qa="message-scroller-chat-button" />
        </MessageScrollerViewport>
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
MessageScrollerChat.displayName = 'MessageScrollerChat';

export {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerChat,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
  useMessageScroller,
  useMessageScrollerScrollable,
  useMessageScrollerVisibility,
};
