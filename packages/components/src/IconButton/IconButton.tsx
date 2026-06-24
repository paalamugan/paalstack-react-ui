import type { BoxProps } from '@/layouts/Box';
import type { AllColorVariant } from '@/shared/constants';
import type { ComponentWithAs } from '@/shared/types';
import type React from 'react';
import type { BUTTON_ROUNDED, ButtonVariant } from '../Button/constants';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';
import { forwardRef } from '@/shared/utils';

import { buttonVariants } from '../Button/Button';
import { BUTTON_COLOR_VARIANT_MAPPING } from '../Button/constants';

export type IconButtonProps = BoxProps & {
  icon?: React.ReactNode;
  /**
   * Additional class names to apply to the icon button.
   */
  className?: string;
  /**
   * Whether the icon button is disabled.
   */
  disabled?: boolean;
  /**
   * @deprecated Use `variant="outline"` instead.
   */
  outline?: boolean;
  /**
   * The border radius of the icon button.
   */
  rounded?: keyof typeof BUTTON_ROUNDED;
  /**
   * The visual style variant of the icon button. Mirrors Button's variant prop.
   * @default undefined
   */
  variant?: ButtonVariant | 'default' | 'destructive' | 'secondary';
  /**
   * The color applied to the variant. Only used when `variant` is a ButtonVariant
   * (solid, surface, outline, soft, ghost, link).
   * @default 'primary'
   */
  color?: AllColorVariant;
} & (
    | {
        /**
         * The icon to display.
         */
        icon: React.ReactNode;
      }
    | {
        /**
         * The icon to display.
         */
        children: React.ReactNode;
      }
  );

/**
 * IconButton Component
 *
 * A button component optimized for displaying icons.
 * Perfect for toolbars, action buttons, and icon-only interactions.
 *
 * @example
 * // Basic usage
 * import { IconButton } from '@paalstack/react-ui';
 * import { FiSettings } from '@paalstack/react-icons/fi';
 *
 * <IconButton icon={<FiSettings />} />
 *
 * @example
 * // With children (alternative to icon prop)
 * <IconButton>
 *   <FiSettings />
 * </IconButton>
 *
 * @example
 * // With onClick handler
 * <IconButton
 *   icon={<FiTrash />}
 *   onClick={() => handleDelete()}
 *   aria-label="Delete item"
 * />
 *
 * @example
 * // Outline variant
 * <IconButton
 *   icon={<FiEdit />}
 *   outline
 *   aria-label="Edit"
 * />
 *
 * @example
 * // Different rounded corners
 * <IconButton icon={<FiPlus />} rounded="none" />
 * <IconButton icon={<FiPlus />} rounded="sm" />
 * <IconButton icon={<FiPlus />} rounded="md" /> // default rounded
 * <IconButton icon={<FiPlus />} rounded="lg" />
 * <IconButton icon={<FiPlus />} rounded="full" />
 *
 * @example
 * // Disabled state
 * <IconButton
 *   icon={<FiSave />}
 *   disabled
 *   aria-label="Save (disabled)"
 * />
 *
 * @example
 * // Toolbar actions
 * <div className="flex gap-1 p-2 border rounded">
 *   <IconButton icon={<FiBold />} aria-label="Bold" />
 *   <IconButton icon={<FiItalic />} aria-label="Italic" />
 *   <IconButton icon={<FiUnderline />} aria-label="Underline" />
 *   <IconButton icon={<FiLink />} aria-label="Insert link" />
 * </div>
 *
 * @example
 * // Table row actions
 * <IconButton
 *   icon={<FiMoreVertical />}
 *   aria-label="More options"
 *   onClick={(e) => {
 *     e.stopPropagation();
 *     openMenu();
 *   }}
 * />
 *
 * @example
 * // Media player controls
 * <div className="flex items-center gap-2">
 *   <IconButton icon={<FiSkipBack />} aria-label="Previous" />
 *   <IconButton
 *     icon={isPlaying ? <FiPause /> : <FiPlay />}
 *     aria-label={isPlaying ? 'Pause' : 'Play'}
 *     outline
 *     onClick={togglePlay}
 *   />
 *   <IconButton icon={<FiSkipForward />} aria-label="Next" />
 * </div>
 *
 * @example
 * // Close button
 * <IconButton
 *   icon={<FiX />}
 *   aria-label="Close"
 *   onClick={onClose}
 *   className="absolute top-2 right-2"
 * />
 *
 * @example
 * // With tooltip
 * <Tooltip content="Settings">
 *   <IconButton icon={<FiSettings />} aria-label="Settings" />
 * </Tooltip>
 *
 * @example
 * // Social media links
 * <div className="flex gap-2">
 *   <IconButton
 *     as="a"
 *     href="https://twitter.com"
 *     icon={<FiTwitter />}
 *     aria-label="Twitter"
 *   />
 *   <IconButton
 *     as="a"
 *     href="https://github.com"
 *     icon={<FiGithub />}
 *     aria-label="GitHub"
 *   />
 *   <IconButton
 *     as="a"
 *     href="https://linkedin.com"
 *     icon={<FiLinkedin />}
 *     aria-label="LinkedIn"
 *   />
 * </div>
 *
 * @example
 * // With custom colors
 * <IconButton
 *   icon={<FiHeart />}
 *   className="text-red-500 hover:text-red-600"
 *   aria-label="Like"
 * />
 *
 * @example
 * // Different sizes with custom styling
 * <IconButton icon={<FiPlus />} className="size-6" />
 * <IconButton icon={<FiPlus />} className="size-8" />
 * <IconButton icon={<FiPlus />} className="size-10" />
 * <IconButton icon={<FiPlus />} className="size-12" />
 *
 * @example
 * // Notification bell with badge
 * <div className="relative">
 *   <IconButton icon={<FiBell />} aria-label="Notifications" />
 *   {unreadCount > 0 && (
 *     <Badge
 *       className="absolute -top-1 -right-1"
 *       size="sm"
 *       variant="danger"
 *     >
 *       {unreadCount}
 *     </Badge>
 *   )}
 * </div>
 *
 * @example
 * // Favorite toggle button
 * <IconButton
 *   icon={isFavorite ? <FiHeart className="fill-current" /> : <FiHeart />}
 *   onClick={() => setIsFavorite(!isFavorite)}
 *   className={isFavorite ? 'text-red-500' : 'text-gray-500'}
 *   aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
 * />
 *
 * @example
 * // Copy to clipboard button
 * <IconButton
 *   icon={copied ? <FiCheck /> : <FiCopy />}
 *   onClick={handleCopy}
 *   aria-label="Copy to clipboard"
 *   className={copied ? 'text-success' : ''}
 * />
 *
 * @example
 * // Expand/collapse button
 * <IconButton
 *   icon={isExpanded ? <FiChevronUp /> : <FiChevronDown />}
 *   onClick={() => setIsExpanded(!isExpanded)}
 *   aria-label={isExpanded ? 'Collapse' : 'Expand'}
 * />
 */
export const IconButton: ComponentWithAs<'button', IconButtonProps> = forwardRef<IconButtonProps, 'button'>(
  ({ children, icon, ...props }, ref) => {
    const { className, disabled, outline, rounded = 'md', variant, color, ...rest } = props;

    const isSimpleVariant =
      variant && ['outline', 'ghost', 'link', 'destructive', 'secondary', 'default'].includes(variant as string);

    const variantClassName = (() => {
      if (!variant) return '';
      if (isSimpleVariant && !color) {
        return buttonVariants({
          variant: variant as Extract<
            typeof variant,
            'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary'
          >,
          size: 'icon',
          rounded,
        });
      }
      return cn(
        buttonVariants({ size: 'icon', rounded }),
        BUTTON_COLOR_VARIANT_MAPPING[variant as ButtonVariant]?.[color || 'primary'],
      );
    })();

    return (
      <Box
        data-qa="icon-button"
        as="button"
        type="button"
        ref={ref}
        {...rest}
        className={cn(
          !variant && 'inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50',
          !variant && outline && 'border border-border bg-transparent p-2 text-accent-foreground',
          !variant && `rounded-${rounded}`,
          variantClassName,
          className,
        )}
        disabled={disabled}
      >
        {icon || children}
      </Box>
    );
  },
);
