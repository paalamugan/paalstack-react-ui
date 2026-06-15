import type { Menu as DropdownMenuPrimitive } from '@base-ui/react/menu';
import type { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './DropdownMenu';

export interface CustomDropdownMenuItem extends Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuItem>, 'label'> {
  /**
   * The type of item - regular menu item
   */
  type?: 'item';
  /**
   * The label to display for the item.
   */
  label?: React.ReactNode;
  /**
   * The shortcut to display for the item.
   */
  shortcut?: React.ReactNode;
  /**
   * Whether the item is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the item is a separator.
   */
  separator?: boolean;
  /**
   * Whether to add left padding (useful for alignment with checkbox/radio items).
   */
  inset?: boolean;
}

export interface CustomDropdownMenuItemWithSubItem extends Omit<CustomDropdownMenuItem, 'type'> {
  /**
   * The type of item - submenu with nested items
   */
  type: 'submenu';
  /**
   * The label to display for the item.
   */
  label: React.ReactNode;
  /**
   * The sub items to display for the item.
   */
  subItems: CustomDropdownMenuItem[];
}

export interface CustomDropdownMenuCheckboxItem extends Omit<CustomDropdownMenuItem, 'type' | 'separator'> {
  /**
   * The type of item - checkbox item
   */
  type: 'checkbox';
  /**
   * The label to display for the checkbox item.
   */
  label: React.ReactNode;
  /**
   * The checked state of the checkbox.
   */
  checked?: boolean;
  /**
   * Callback when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
}

export interface CustomDropdownMenuRadioGroupItem {
  /**
   * The type of item - radio group with radio items
   */
  type: 'radio-group';
  /**
   * The label/title for the radio group (optional).
   */
  label?: React.ReactNode;
  /**
   * The current selected value in the radio group.
   */
  value: string;
  /**
   * Callback when the selected value changes.
   */
  onValueChange: (value: string) => void;
  /**
   * The radio items in the group.
   */
  items: Array<{
    /**
     * The value of this radio item.
     */
    value: string;
    /**
     * The label to display for this radio item.
     */
    label: React.ReactNode;
    /**
     * Whether this radio item is disabled.
     */
    disabled?: boolean;
    /**
     * Additional className for this radio item.
     */
    className?: string;
  }>;
}

export type DropdownMenuItemType =
  | CustomDropdownMenuItem
  | CustomDropdownMenuItemWithSubItem
  | CustomDropdownMenuCheckboxItem
  | CustomDropdownMenuRadioGroupItem;

export interface DropdownMenuProps extends DropdownMenuPrimitive.Root.Props {
  /**
   * The trigger element that will open the dropdown menu.
   */
  trigger?: React.ReactNode;
  /**
   * The items to display in the dropdown menu.
   */
  items: DropdownMenuItemType[];
  /**
   * The title heading for the dropdown menu.
   */
  title?: React.ReactNode;
  /**
   * The props for the content of the dropdown menu.
   */
  contentProps?: React.ComponentPropsWithoutRef<typeof DropdownMenuContent>;
  /**
   * The class name for the trigger of the dropdown menu.
   */
  triggerClassName?: string;

  /**
   * The props for the trigger of the dropdown menu.
   */
  triggerProps?: React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger>;

  /**
   * The props for the group of the dropdown menu.
   */
  groupProps?: React.ComponentPropsWithoutRef<typeof DropdownMenuGroup>;
}
