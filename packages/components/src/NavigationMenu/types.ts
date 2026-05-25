import type { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import type { NavigationMenuContent } from './NavigationMenu';

export interface NavigationMenuLinkItem {
  /**
   * The type of navigation item - simple link without dropdown
   */
  type: 'link';
  /**
   * The label to display for the link.
   */
  label: React.ReactNode;
  /**
   * The href for the link.
   */
  href: string;
  /**
   * Whether the link is disabled.
   */
  disabled?: boolean;
  /**
   * Additional className for the link.
   */
  className?: string;
  /**
   * onClick handler for the link.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface NavigationMenuDropdownItem {
  /**
   * The type of navigation item - dropdown with content
   */
  type: 'dropdown';
  /**
   * The label to display for the trigger.
   */
  label: React.ReactNode;
  /**
   * The content to display in the dropdown.
   * Can be a custom React node or an array of list items.
   */
  content?: React.ReactNode;
  /**
   * List items to display in the dropdown (alternative to custom content).
   * Will be rendered in a grid layout.
   */
  items?: Array<{
    /**
     * The href for the list item.
     */
    href: string;
    /**
     * The title for the list item.
     */
    title: React.ReactNode;
    /**
     * The description for the list item.
     */
    description?: React.ReactNode;
    /**
     * Additional className for the list item.
     */
    className?: string;
    /**
     * onClick handler for the list item.
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }>;
  /**
   * Whether the dropdown is disabled.
   */
  disabled?: boolean;
  /**
   * Additional className for the trigger.
   */
  className?: string;
  /**
   * Props for the dropdown content.
   */
  contentProps?: React.ComponentPropsWithoutRef<typeof NavigationMenuContent>;
  /**
   * Grid layout configuration for items (e.g., 'grid-cols-2', 'md:grid-cols-3')
   */
  gridClassName?: string;
  /**
   * Width configuration for the dropdown (e.g., 'w-[400px]', 'md:w-[600px]')
   */
  widthClassName?: string;
}

export type NavigationMenuItemType = NavigationMenuLinkItem | NavigationMenuDropdownItem;

export interface NavigationMenuProps extends Omit<NavigationMenuPrimitive.Root.Props, 'children'> {
  /**
   * The navigation items to display.
   */
  items: NavigationMenuItemType[];
  /**
   * Additional className for the navigation menu list.
   */
  listClassName?: string;
}
