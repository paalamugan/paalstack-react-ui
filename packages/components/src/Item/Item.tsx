import type { BoxProps } from '@/layouts/Box';
import type { TextProps } from '@/layouts/Text';
import type { ComponentWithAs } from '@/shared/types';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';
import { forwardRef, Slot } from '@/shared/utils';

import { Separator } from '../Separator';

const itemVariants = cva(
  'group/item flex w-full flex-wrap items-center rounded-lg border text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-muted',
  {
    variants: {
      variant: {
        default: 'border-transparent',
        outline: 'border-border',
        muted: 'border-transparent bg-muted/50',
      },
      size: {
        default: 'gap-2.5 px-3 py-2.5',
        sm: 'gap-2.5 px-3 py-2.5',
        xs: 'gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "[&_svg:not([class*='size-'])]:size-4",
        image:
          'size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover',
        avatar: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ItemProps extends BoxProps, VariantProps<typeof itemVariants> {
  asChild?: boolean;
}

/**
 * Item Component Family
 *
 * A versatile component for displaying content with media, title, description, and actions.
 * Use it to create structured content blocks with consistent styling.
 *
 * @example
 * // Basic item with icon
 * import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from '@paalstack/react-ui';
 * import { Button } from '@paalstack/react-ui';
 *
 * <Item>
 *   <ItemMedia variant="icon">
 *     <BellIcon />
 *   </ItemMedia>
 *   <ItemContent>
 *     <ItemTitle>Security Alert</ItemTitle>
 *     <ItemDescription>New login detected from unknown device.</ItemDescription>
 *   </ItemContent>
 *   <ItemActions>
 *     <Button size="sm">Review</Button>
 *   </ItemActions>
 * </Item>
 *
 * @example
 * // Item with avatar
 * import { Avatar } from '@paalstack/react-ui';
 *
 * <Item>
 *   <ItemMedia variant="avatar">
 *     <Avatar src="/avatar.jpg" fallback="ER" />
 *   </ItemMedia>
 *   <ItemContent>
 *     <ItemTitle>Evil Rabbit</ItemTitle>
 *     <ItemDescription>Last seen 5 months ago</ItemDescription>
 *   </ItemContent>
 * </Item>
 *
 * @example
 * // Outlined item variant
 * <Item variant="outline">
 *   <ItemContent>
 *     <ItemTitle>Outlined Item</ItemTitle>
 *     <ItemDescription>This item has a visible border.</ItemDescription>
 *   </ItemContent>
 * </Item>
 *
 * @example
 * // Item group
 * import { ItemGroup, ItemSeparator } from '@paalstack/react-ui';
 *
 * <ItemGroup>
 *   <Item>
 *     <ItemContent>
 *       <ItemTitle>First Item</ItemTitle>
 *       <ItemDescription>Description for first item</ItemDescription>
 *     </ItemContent>
 *   </Item>
 *   <ItemSeparator />
 *   <Item>
 *     <ItemContent>
 *       <ItemTitle>Second Item</ItemTitle>
 *       <ItemDescription>Description for second item</ItemDescription>
 *     </ItemContent>
 *   </Item>
 * </ItemGroup>
 *
 * @example
 * // Item as link
 * <Item asChild>
 *   <a href="/dashboard">
 *     <ItemMedia variant="icon">
 *       <HomeIcon />
 *     </ItemMedia>
 *     <ItemContent>
 *       <ItemTitle>Dashboard</ItemTitle>
 *       <ItemDescription>Overview of your account and activity.</ItemDescription>
 *     </ItemContent>
 *   </a>
 * </Item>
 *
 * @example
 * // Item with header and footer
 * <Item>
 *   <ItemHeader>Model Information</ItemHeader>
 *   <ItemMedia variant="icon">
 *     <SparklesIcon />
 *   </ItemMedia>
 *   <ItemContent>
 *     <ItemTitle>v0-1.5-sm</ItemTitle>
 *     <ItemDescription>Everyday tasks and UI generation.</ItemDescription>
 *   </ItemContent>
 *   <ItemFooter>Last updated 2 days ago</ItemFooter>
 * </Item>
 *
 * @example
 * // Small size item
 * <Item size="sm">
 *   <ItemContent>
 *     <ItemTitle>Compact Item</ItemTitle>
 *     <ItemDescription>A smaller size for dense layouts.</ItemDescription>
 *   </ItemContent>
 * </Item>
 *
 * @tip Use ItemGroup to organize related items together
 * @tip Use variant="outline" for more visual separation
 * @tip Use variant="muted" for secondary content
 * @tip Use asChild prop to render Item as a link or button
 * @tip ItemMedia variant="icon" is perfect for status indicators
 * @tip ItemMedia variant="avatar" for user-related content
 * @tip Use ItemSeparator between items in a group
 * @tip Keep ItemDescription concise and informative
 * @tip ItemActions are right-aligned by default
 * @tip Use size="sm" or size="xs" for compact layouts
 */
const ItemRoot: ComponentWithAs<'div', ItemProps> = forwardRef<ItemProps, 'div'>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp
        ref={ref}
        data-slot="item"
        data-qa="item"
        className={cn(itemVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
ItemRoot.displayName = 'ItemRoot';

const ItemGroup: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        role="list"
        data-slot="item-group"
        data-qa="item-group"
        className={cn(
          'group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2',
          className,
        )}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

const ItemSeparator = ({ className, ...props }: React.ComponentProps<typeof Separator>) => {
  return (
    <Separator
      data-slot="item-separator"
      data-qa="item-separator"
      orientation="horizontal"
      className={cn('my-2', className)}
      {...props}
    />
  );
};

export interface ItemMediaProps extends BoxProps, VariantProps<typeof itemMediaVariants> {}

const ItemMedia: ComponentWithAs<'div', ItemMediaProps> = forwardRef(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        data-slot="item-media"
        data-qa="item-media"
        data-variant={variant}
        className={cn(itemMediaVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

const ItemContent: ComponentWithAs<'div', ItemMediaProps> = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="item-content"
      data-qa="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none',
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  );
});

const ItemTitle: ComponentWithAs<'div', TextProps> = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="item-title"
      data-qa="item-title"
      className={cn(
        'line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4',
        className,
      )}
      {...props}
    >
      {children}
    </Box>
  );
});

const ItemDescription: ComponentWithAs<'p', TextProps> = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Text
      ref={ref}
      data-slot="item-description"
      data-qa="item-description"
      className={cn(
        'line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
});

const ItemActions: ComponentWithAs<'div', TextProps> = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="item-actions"
      data-qa="item-actions"
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      {children}
    </Box>
  );
});

const ItemHeader: ComponentWithAs<'div', BoxProps> = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="item-header"
      data-qa="item-header"
      className={cn('flex basis-full items-center justify-between gap-2', className)}
      {...props}
    >
      {children}
    </Box>
  );
});

const ItemFooter: ComponentWithAs<'div', BoxProps> = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      data-slot="item-footer"
      data-qa="item-footer"
      className={cn('flex basis-full items-center justify-between gap-2', className)}
      {...props}
    >
      {children}
    </Box>
  );
});

export interface ItemComponentProps extends Omit<ItemProps, 'title' | 'content'> {
  /** Optional header (renders ItemHeader) */
  header?: React.ReactNode;
  /** Media content - icon, avatar, image (renders ItemMedia) */
  media?: React.ReactNode;
  /** ItemMedia variant - "icon" | "image" | "avatar" | "default" */
  mediaVariant?: ItemMediaProps['variant'];
  /** Main title (renders ItemTitle inside ItemContent) */
  title?: React.ReactNode;
  /** Description (renders ItemDescription inside ItemContent) */
  description?: React.ReactNode;
  /** Action buttons or controls (renders ItemActions) */
  actions?: React.ReactNode;
  /** Optional footer (renders ItemFooter) */
  footer?: React.ReactNode;
  /** Props for ItemHeader */
  headerProps?: React.ComponentPropsWithoutRef<typeof ItemHeader>;
  /** Props for ItemMedia */
  mediaProps?: React.ComponentPropsWithoutRef<typeof ItemMedia>;
  /** Props for ItemContent */
  contentProps?: React.ComponentPropsWithoutRef<typeof ItemContent>;
  /** Props for ItemTitle */
  titleProps?: React.ComponentPropsWithoutRef<typeof ItemTitle>;
  /** Props for ItemDescription */
  descriptionProps?: React.ComponentPropsWithoutRef<typeof ItemDescription>;
  /** Props for ItemActions */
  actionsProps?: React.ComponentPropsWithoutRef<typeof ItemActions>;
  /** Props for ItemFooter */
  footerProps?: React.ComponentPropsWithoutRef<typeof ItemFooter>;
}

/**
 * Single-component Item that composes all sub-components via props.
 * Use ItemRoot with ItemMedia, ItemContent, etc. when you need full control (e.g. asChild, custom order).
 *
 * @example
 * // Basic item with icon
 * import { Item, Button } from '@paalstack/react-ui';
 * import { BellIcon } from 'lucide-react';
 *
 * <Item
 *   media={<BellIcon className="size-4" />}
 *   mediaVariant="icon"
 *   title="Security Alert"
 *   description="New login detected from unknown device."
 *   actions={<Button size="sm">Review</Button>}
 * />
 *
 * @example
 * // Item with avatar
 * import { Avatar } from '@paalstack/react-ui';
 *
 * <Item
 *   media={<Avatar src="/avatar.jpg" fallback="ER" className="size-10" />}
 *   mediaVariant="avatar"
 *   title="Evil Rabbit"
 *   description="Last seen 5 months ago"
 * />
 *
 * @example
 * // Outlined variant with header and footer
 * <Item
 *   variant="outline"
 *   header="Model Information"
 *   media={<SparklesIcon className="size-4" />}
 *   mediaVariant="icon"
 *   title="v0-1.5-sm"
 *   description="Everyday tasks and UI generation."
 *   footer="Last updated 2 days ago"
 * />
 *
 * @example
 * // Minimal (title and description only)
 * <Item title="No Media Item" description="This item has no media or actions." />
 *
 * @example
 * // With sub-component props
 * <Item
 *   title="Custom Title"
 *   description="Custom description."
 *   titleProps={{ className: "text-base" }}
 *   descriptionProps={{ className: "text-muted-foreground/80" }}
 * />
 */
const Item: ComponentWithAs<'div', ItemComponentProps> = forwardRef<ItemComponentProps, 'div'>(
  (
    {
      className,
      variant,
      size,
      asChild,
      header,
      media,
      mediaVariant = 'default',
      title,
      description,
      actions,
      footer,
      headerProps,
      mediaProps,
      contentProps,
      titleProps,
      descriptionProps,
      actionsProps,
      footerProps,
      children,
      ...props
    },
    ref,
  ) => {
    const hasContent = !!title || !!description;
    const usePropsApi = !!header || !!media || hasContent || !!actions || !!footer;

    if (usePropsApi) {
      return (
        <ItemRoot ref={ref} className={className} variant={variant} size={size} asChild={asChild} {...props}>
          {!!header && <ItemHeader {...headerProps}>{header}</ItemHeader>}
          {!!media && (
            <ItemMedia variant={mediaVariant} {...mediaProps}>
              {media}
            </ItemMedia>
          )}
          {hasContent && (
            <ItemContent {...contentProps}>
              {!!title && <ItemTitle {...titleProps}>{title}</ItemTitle>}
              {!!description && <ItemDescription {...descriptionProps}>{description}</ItemDescription>}
            </ItemContent>
          )}
          {!!actions && <ItemActions {...actionsProps}>{actions}</ItemActions>}
          {!!footer && <ItemFooter {...footerProps}>{footer}</ItemFooter>}
        </ItemRoot>
      );
    }

    // If no props are used, render the children directly
    return (
      <ItemRoot ref={ref} className={className} variant={variant} size={size} asChild={asChild} {...props}>
        {children}
      </ItemRoot>
    );
  },
);
Item.displayName = 'Item';

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemRoot,
  ItemSeparator,
  ItemTitle,
};
