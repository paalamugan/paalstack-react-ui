import type { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';
import type { ReactNode } from 'react';

export interface ContextMenuItemConfig {
  /** The label text for the item */
  label: ReactNode;
  /** Optional icon to display before the label */
  icon?: ReactNode;
  /** Optional keyboard shortcut to display */
  shortcut?: string;
  /** Click handler for the item */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is inset (extra left padding) */
  inset?: boolean;
  /** Variant for the item */
  variant?: 'default' | 'destructive';
  /** Optional className for the item */
  className?: string;
}

export interface ContextMenuCheckboxItemConfig {
  type: 'checkbox';
  /** The label text for the checkbox item */
  label: ReactNode;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Callback when the checked state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Optional keyboard shortcut to display */
  shortcut?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is inset */
  inset?: boolean;
  /** Optional className for the item */
  className?: string;
}

export interface ContextMenuRadioGroupConfig {
  type: 'radio-group';
  /** The label for the radio group */
  label?: string;
  /** The currently selected value */
  value?: string;
  /** Callback when the selected value changes */
  onValueChange?: (value: string) => void;
  /** The radio items */
  items: {
    /** The value of the radio item */
    value: string;
    /** The label text for the radio item */
    label: ReactNode;
    /** Whether the item is disabled */
    disabled?: boolean;
  }[];
  /** Whether the label is inset */
  inset?: boolean;
}

export interface ContextMenuSubMenuConfig {
  type: 'submenu';
  /** The trigger label for the submenu */
  label: ReactNode;
  /** Whether the trigger is inset */
  inset?: boolean;
  /** The items within the submenu */
  items: ContextMenuEntry[];
  /** Optional className for the submenu content */
  className?: string;
}

export interface ContextMenuSeparatorConfig {
  type: 'separator';
}

export interface ContextMenuLabelConfig {
  type: 'label';
  /** The label text */
  label: ReactNode;
  /** Whether the label is inset */
  inset?: boolean;
}

export type ContextMenuEntry =
  | ContextMenuItemConfig
  | ContextMenuCheckboxItemConfig
  | ContextMenuRadioGroupConfig
  | ContextMenuSubMenuConfig
  | ContextMenuSeparatorConfig
  | ContextMenuLabelConfig;

export interface ContextMenuProps extends Omit<ContextMenuPrimitive.Root.Props, 'children'> {
  /** The trigger element that the user right-clicks */
  trigger: ReactNode;
  /** The menu items to render */
  items: ContextMenuEntry[];
  /** Optional className for the trigger wrapper */
  triggerClassName?: string;
  /** Optional className for the content popover */
  contentClassName?: string;
  /** Optional props for the ContextMenuContent */
  contentProps?: ContextMenuPrimitive.Popup.Props;
  /** Optional props for the ContextMenuTrigger */
  triggerProps?: ContextMenuPrimitive.Trigger.Props;
}
