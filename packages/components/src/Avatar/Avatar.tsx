import type { BoxPropsWithRef } from '@/layouts/Box';
import type * as React from 'react';

import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

const AvatarRoot = ({
  className,
  size = 'default',
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: 'default' | 'sm' | 'lg';
}) => (
  <AvatarPrimitive.Root
    data-slot="avatar"
    data-qa="avatar"
    data-size={size}
    className={cn(
      'group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten',
      className,
    )}
    {...props}
  />
);
AvatarRoot.displayName = 'AvatarRoot';

const AvatarImage = ({ className, ...props }: AvatarPrimitive.Image.Props) => (
  <AvatarPrimitive.Image
    data-slot="avatar-image"
    data-qa="avatar-image"
    className={cn('aspect-square size-full rounded-full object-cover', className)}
    {...props}
  />
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = ({ className, ...props }: AvatarPrimitive.Fallback.Props) => (
  <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    data-qa="avatar-fallback"
    className={cn(
      'flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs',
      className,
    )}
    {...props}
  />
);
AvatarFallback.displayName = 'AvatarFallback';

const AvatarBadge: React.FC<BoxPropsWithRef<'span'>> = ({ className, ...props }) => (
  <Box
    as="span"
    data-slot="avatar-badge"
    data-qa="avatar-badge"
    className={cn(
      'absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none',
      'group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden',
      'group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2',
      'group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2',
      className,
    )}
    {...props}
  />
);
AvatarBadge.displayName = 'AvatarBadge';

const AvatarGroup: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="avatar-group"
    data-qa="avatar-group"
    className={cn(
      'group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
      className,
    )}
    {...props}
  />
);
AvatarGroup.displayName = 'AvatarGroup';

const AvatarGroupCount: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="avatar-group-count"
    data-qa="avatar-group-count"
    className={cn(
      'relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3',
      className,
    )}
    {...props}
  />
);
AvatarGroupCount.displayName = 'AvatarGroupCount';
interface AvatarProps extends React.ComponentProps<typeof AvatarRoot> {
  /**
   * The image source to use for the avatar.
   */
  src?: string;
  /**
   * Alt text for the avatar image.
   */
  alt?: string;
  /**
   * The fallback content to use when the `src` is not available.
   */
  fallback?: React.ReactNode;
  /**
   * Badge content to display on the avatar (e.g. online status indicator).
   */
  badge?: React.ReactNode;
  /**
   * Props to pass to the AvatarImage sub-component.
   */
  imageProps?: Omit<AvatarPrimitive.Image.Props, 'src'>;
  /**
   * Props to pass to the AvatarFallback sub-component.
   */
  fallbackProps?: AvatarPrimitive.Fallback.Props;
  /**
   * Props to pass to the AvatarBadge sub-component.
   */
  badgeProps?: React.ComponentProps<typeof AvatarBadge>;
}

/**
 * Avatar Component
 *
 * Displays a user avatar image with automatic fallback support.
 * Perfect for user profiles, comments, and team displays.
 *
 * @example
 * // Basic usage with image
 * import { Avatar } from '@paalstack/react-ui';
 *
 * <Avatar src="/user-avatar.jpg" fallback="JD" />
 *
 * @example
 * // With fallback text (initials)
 * <Avatar fallback="JD" />
 *
 * @example
 * // Different sizes
 * <Avatar src="/avatar.jpg" fallback="SM" size="sm" />
 * <Avatar src="/avatar.jpg" fallback="LG" size="lg" />
 *
 * @example
 * // With badge
 * <Avatar src="/avatar.jpg" fallback="JD" badge />
 *
 * @example
 * // With custom badge content
 * <Avatar src="/avatar.jpg" fallback="JD" badge={<StatusIcon />} />
 *
 * @example
 * // With sub-component props
 * <Avatar
 *   src="/avatar.jpg"
 *   alt="John Doe"
 *   fallback="JD"
 *   imageProps={{ className: 'border-2' }}
 *   fallbackProps={{ className: 'bg-blue-500 text-white' }}
 * />
 *
 * @example
 * // Avatar group
 * import { AvatarGroup, AvatarGroupCount } from '@paalstack/react-ui';
 *
 * <AvatarGroup>
 *   <Avatar src="/user1.jpg" fallback="U1" />
 *   <Avatar src="/user2.jpg" fallback="U2" />
 *   <AvatarGroupCount>+5</AvatarGroupCount>
 * </AvatarGroup>
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallback,
  badge,
  imageProps,
  fallbackProps,
  badgeProps,
  ...props
}) => (
  <AvatarRoot {...props}>
    <AvatarImage src={src} alt={alt} {...imageProps} />
    {fallback && <AvatarFallback {...fallbackProps}>{fallback}</AvatarFallback>}
    {badge && <AvatarBadge {...badgeProps}>{badge}</AvatarBadge>}
  </AvatarRoot>
);
Avatar.displayName = 'Avatar';

interface AvatarGroupProps extends React.ComponentProps<typeof AvatarGroup> {
  /**
   * Array of avatar items to render inside the group.
   */
  items: AvatarProps[];
  /**
   * Maximum number of avatars to display. Remaining count is shown via AvatarGroupCount.
   */
  max?: number;
  /**
   * Props to pass to the AvatarGroupCount sub-component.
   */
  countProps?: React.ComponentProps<typeof AvatarGroupCount>;
}

/**
 * AvatarGroupList Component
 *
 * Renders a group of avatars with an optional overflow count indicator.
 *
 * @example
 * // Basic group
 * <AvatarGroupList
 *   items={[
 *     { src: '/user1.jpg', fallback: 'U1' },
 *     { src: '/user2.jpg', fallback: 'U2' },
 *     { src: '/user3.jpg', fallback: 'U3' },
 *   ]}
 * />
 *
 * @example
 * // With max limit
 * <AvatarGroupList
 *   items={users}
 *   max={3}
 * />
 */
const AvatarGroupList: React.FC<AvatarGroupProps> = ({ items, max, countProps, ...props }) => {
  const visibleItems = max !== undefined ? items.slice(0, max) : items;
  const remaining = max !== undefined ? items.length - max : 0;

  return (
    <AvatarGroup {...props}>
      {visibleItems.map((item, index) => (
        <Avatar key={index} {...item} />
      ))}
      {remaining > 0 && <AvatarGroupCount {...countProps}>+{remaining}</AvatarGroupCount>}
    </AvatarGroup>
  );
};
AvatarGroupList.displayName = 'AvatarGroupList';

export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarGroupList, AvatarImage, AvatarRoot };
export type { AvatarGroupProps, AvatarProps };
