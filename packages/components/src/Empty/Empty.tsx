import type { BoxPropsWithRef } from '@/layouts/Box';
import type { VariantProps } from 'class-variance-authority';
import type { FC, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';

const emptyMediaVariants = cva(
  'mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

/**
 * Empty Component
 *
 * A flexible empty state component for displaying placeholder content when lists, tables,
 * or containers have no data to show. Supports various layouts with icons, titles,
 * descriptions, and action buttons.
 *
 * @example
 * // Basic empty state
 * import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@paalstack/react-ui';
 * import { LuInbox } from '@paalstack/react-icons/lu';
 *
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon">
 *       <LuInbox className="size-12" />
 *     </EmptyMedia>
 *     <EmptyTitle>No Messages</EmptyTitle>
 *     <EmptyDescription>You don't have any messages yet.</EmptyDescription>
 *   </EmptyHeader>
 * </Empty>
 *
 * @example
 * // Empty state with action button
 * import { Button } from '@paalstack/react-ui';
 *
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon">
 *       <LuFolder className="size-12" />
 *     </EmptyMedia>
 *     <EmptyTitle>No Projects Yet</EmptyTitle>
 *     <EmptyDescription>
 *       You haven't created any projects yet. Get started by creating your first project.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button>Create Project</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Empty state with avatar
 * import { Avatar, AvatarImage, AvatarFallback } from '@paalstack/react-ui';
 *
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia>
 *       <Avatar>
 *         <AvatarImage src="/user.png" />
 *         <AvatarFallback>JD</AvatarFallback>
 *       </Avatar>
 *     </EmptyMedia>
 *     <EmptyTitle>User Offline</EmptyTitle>
 *     <EmptyDescription>
 *       This user is currently offline. Try again later.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button variant="outline">Leave Message</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Empty state with multiple actions
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon">
 *       <LuFile className="size-12" />
 *     </EmptyMedia>
 *     <EmptyTitle>No Files Found</EmptyTitle>
 *     <EmptyDescription>
 *       Upload files to get started with your project.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button>Upload File</Button>
 *     <Button variant="outline">Browse Files</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Empty state with border (outline style)
 * <Empty className="border rounded-lg p-8">
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon">
 *       <CloudIcon className="size-12" />
 *     </EmptyMedia>
 *     <EmptyTitle>Cloud Storage Empty</EmptyTitle>
 *     <EmptyDescription>
 *       Upload files to your cloud storage to access them anywhere.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button>Upload Files</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Empty state with background gradient
 * <Empty className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon">
 *       <BellIcon className="size-12" />
 *     </EmptyMedia>
 *     <EmptyTitle>No Notifications</EmptyTitle>
 *     <EmptyDescription>
 *       You're all caught up. New notifications will appear here.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button variant="outline">Refresh</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Empty table state
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon">
 *       <DatabaseIcon className="size-12" />
 *     </EmptyMedia>
 *     <EmptyTitle>No Data Available</EmptyTitle>
 *     <EmptyDescription>
 *       There are no records to display at this time.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button>Add Record</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Search results empty state
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia variant="icon">
 *       <SearchIcon className="size-12" />
 *     </EmptyMedia>
 *     <EmptyTitle>No Results Found</EmptyTitle>
 *     <EmptyDescription>
 *       Try adjusting your search terms or filters.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // 404 error state with input
 * import { Input } from '@paalstack/react-ui';
 *
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyTitle>404 - Not Found</EmptyTitle>
 *     <EmptyDescription>
 *       The page you're looking for doesn't exist. Try searching below.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <div className="flex w-full max-w-sm gap-2">
 *       <Input placeholder="Search..." />
 *       <Button>Search</Button>
 *     </div>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Empty state with avatar group
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyMedia>
 *       <div className="flex -space-x-2">
 *         <Avatar className="border-2 border-background">
 *           <AvatarFallback>CN</AvatarFallback>
 *         </Avatar>
 *         <Avatar className="border-2 border-background">
 *           <AvatarFallback>LR</AvatarFallback>
 *         </Avatar>
 *         <Avatar className="border-2 border-background">
 *           <AvatarFallback>ER</AvatarFallback>
 *         </Avatar>
 *       </div>
 *     </EmptyMedia>
 *     <EmptyTitle>No Team Members</EmptyTitle>
 *     <EmptyDescription>
 *       Invite your team to collaborate on this project.
 *     </EmptyDescription>
 *   </EmptyHeader>
 *   <EmptyContent>
 *     <Button>Invite Members</Button>
 *   </EmptyContent>
 * </Empty>
 *
 * @example
 * // Minimal empty state (text only)
 * <Empty>
 *   <EmptyHeader>
 *     <EmptyTitle>No Items</EmptyTitle>
 *     <EmptyDescription>Add your first item to get started.</EmptyDescription>
 *   </EmptyHeader>
 * </Empty>
 *
 * @tip Use the "icon" variant for EmptyMedia when displaying icons
 * @tip Use the "default" variant for EmptyMedia when displaying avatars or custom components
 * @tip Add border and padding classes to Empty for outlined empty states
 * @tip Use bg-gradient utilities for visually appealing backgrounds
 * @tip Keep descriptions concise and actionable
 * @tip Always provide at least one action button when possible
 * @tip Use EmptyContent to display action buttons or input fields
 * @tip Customize spacing and alignment with className prop on any sub-component
 */
const EmptyRoot: FC<BoxPropsWithRef> = ({ className, ...props }) => {
  return (
    <Box
      data-slot="empty"
      data-qa="empty"
      className={cn(
        'flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance',
        className,
      )}
      {...props}
    />
  );
};

const EmptyHeader: FC<BoxPropsWithRef> = ({ className, ...props }) => {
  return (
    <Box
      data-slot="empty-header"
      data-qa="empty-header"
      className={cn('flex max-w-sm flex-col items-center gap-2', className)}
      {...props}
    />
  );
};

export interface EmptyMediaProps extends BoxPropsWithRef, VariantProps<typeof emptyMediaVariants> {}

const EmptyMedia: FC<EmptyMediaProps> = ({ className, variant = 'default', ...props }) => {
  return (
    <Box
      data-slot="empty-icon"
      data-qa="empty-media"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  );
};

const EmptyTitle: FC<BoxPropsWithRef> = ({ className, ...props }) => {
  return (
    <Box
      data-slot="empty-title"
      data-qa="empty-title"
      className={cn('text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  );
};

const EmptyDescription: FC<BoxPropsWithRef<'p'>> = ({ className, children, ...props }) => {
  return (
    <Text
      data-slot="empty-description"
      data-qa="empty-description"
      className={cn(
        'text-base/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
};

const EmptyContent: FC<BoxPropsWithRef> = ({ className, ...props }) => {
  return (
    <Box
      data-slot="empty-content"
      data-qa="empty-content"
      className={cn('flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance', className)}
      {...props}
    />
  );
};

export interface EmptyProps extends Omit<BoxPropsWithRef, 'title' | 'content'> {
  /** Content for EmptyMedia (icon, avatar, etc.) */
  media?: ReactNode;
  /** Variant for EmptyMedia - "icon" for icons, "default" for avatars/custom */
  mediaVariant?: EmptyMediaProps['variant'];
  /** Title text or element */
  title?: ReactNode;
  /** Description text or element */
  description?: ReactNode;
  /** Action buttons or other content in EmptyContent */
  content?: ReactNode;
  /** Props for EmptyHeader */
  headerProps?: React.ComponentPropsWithRef<typeof EmptyHeader>;
  /** Props for EmptyMedia */
  mediaProps?: React.ComponentPropsWithRef<typeof EmptyMedia>;
  /** Props for EmptyTitle */
  titleProps?: React.ComponentPropsWithRef<typeof EmptyTitle>;
  /** Props for EmptyDescription */
  descriptionProps?: React.ComponentPropsWithRef<typeof EmptyDescription>;
  /** Props for EmptyContent */
  contentProps?: React.ComponentPropsWithRef<typeof EmptyContent>;
}

/**
 * Single-component Empty that composes all sub-components via props.
 * Use EmptyRoot with EmptyHeader, EmptyMedia, etc. when you need full control over structure.
 *
 * @example
 * // Basic empty state with icon
 * import { Empty } from '@paalstack/react-ui';
 * import { LuInbox } from '@paalstack/react-icons/lu';
 *
 * <Empty
 *   media={<LuInbox className="size-12" />}
 *   mediaVariant="icon"
 *   title="No Messages"
 *   description="You don't have any messages yet."
 * />
 *
 * @example
 * // Empty state with action button
 * import { Empty, Button } from '@paalstack/react-ui';
 * import { LuFolder } from '@paalstack/react-icons/lu';
 *
 * <Empty
 *   media={<LuFolder className="size-12" />}
 *   mediaVariant="icon"
 *   title="No Projects Yet"
 *   description="Get started by creating your first project."
 *   content={<Button>Create Project</Button>}
 * />
 *
 * @example
 * // Empty state with multiple actions
 * import { Empty, Button } from '@paalstack/react-ui';
 * import { LuFile } from '@paalstack/react-icons/lu';
 *
 * <Empty
 *   media={<LuFile className="size-12" />}
 *   mediaVariant="icon"
 *   title="No Files Found"
 *   description="Upload files to get started with your project."
 *   content={
 *     <>
 *       <Button>Upload File</Button>
 *       <Button variant="outline">Browse Files</Button>
 *     </>
 *   }
 * />
 *
 * @example
 * // Minimal empty state (title and description only)
 * <Empty
 *   title="No Items"
 *   description="Add your first item to get started."
 * />
 *
 * @example
 * // With custom styling and sub-component props
 * <Empty
 *   className="border rounded-lg p-8"
 *   media={<CloudIcon className="size-12" />}
 *   mediaVariant="icon"
 *   title="Cloud Storage Empty"
 *   description="Upload files to your cloud storage to access them anywhere."
 *   content={<Button>Upload Files</Button>}
 *   titleProps={{ className: "text-base" }}
 *   contentProps={{ className: "gap-4" }}
 * />
 *
 * @example
 * // With avatar (default media variant)
 * import { Avatar, AvatarImage, AvatarFallback } from '@paalstack/react-ui';
 *
 * <Empty
 *   media={
 *     <Avatar>
 *       <AvatarImage src="/user.png" />
 *       <AvatarFallback>JD</AvatarFallback>
 *     </Avatar>
 *   }
 *   title="User Offline"
 *   description="This user is currently offline. Try again later."
 *   content={<Button variant="outline">Leave Message</Button>}
 * />
 */
const Empty: FC<EmptyProps> = ({
  className,
  media,
  mediaVariant = 'default',
  title,
  description,
  content,
  children,
  headerProps,
  mediaProps,
  titleProps,
  descriptionProps,
  contentProps,
  ...props
}) => {
  const hasHeaderContent = !!media || !!title || !!description;

  return (
    <EmptyRoot className={className} {...props}>
      {hasHeaderContent && (
        <EmptyHeader {...headerProps}>
          {media && (
            <EmptyMedia variant={mediaVariant} {...mediaProps}>
              {media}
            </EmptyMedia>
          )}
          {title && <EmptyTitle {...titleProps}>{title}</EmptyTitle>}
          {description && <EmptyDescription {...descriptionProps}>{description}</EmptyDescription>}
        </EmptyHeader>
      )}
      {content && <EmptyContent {...contentProps}>{content}</EmptyContent>}
      {children}
    </EmptyRoot>
  );
};

export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyRoot, EmptyTitle };
