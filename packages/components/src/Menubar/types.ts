import type { MenubarCheckboxItem, MenubarItem, MenubarRadioItem, MenubarRoot, MenubarSeparator } from './Menubar';

export interface MenubarMenuItemProps extends Omit<React.ComponentPropsWithoutRef<typeof MenubarItem>, 'label'> {
  label: React.ReactNode;
  shortcut?: string;
  subMenus?: MenubarMenuList[];
}

export interface MenubarMenuCheckboxItemProps extends Omit<
  React.ComponentPropsWithoutRef<typeof MenubarCheckboxItem>,
  'label'
> {
  type: 'checkbox';
  label: React.ReactNode;
}
export interface MenubarMenuRadioItemProps extends React.ComponentPropsWithoutRef<typeof MenubarRadioItem> {
  type: 'radio';
  value: string;
  options: { label: string; value: string }[];
}

export interface MenubarMenuSeparatorProps extends React.ComponentPropsWithoutRef<typeof MenubarSeparator> {
  separator: boolean;
}

export type MenubarMenuItemsProps =
  | MenubarMenuItemProps
  | MenubarMenuSeparatorProps
  | MenubarMenuCheckboxItemProps
  | MenubarMenuRadioItemProps;

export interface MenubarMenuList {
  label: React.ReactNode;
  items: MenubarMenuItemsProps[];
}

export interface MenubarProps extends Omit<React.ComponentPropsWithoutRef<typeof MenubarRoot>, 'children' | 'asChild'> {
  menus: MenubarMenuList[];
}
