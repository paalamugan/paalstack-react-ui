import * as React from 'react';

import type {
  MenubarMenuCheckboxItemProps,
  MenubarMenuItemProps,
  MenubarMenuItemsProps,
  MenubarMenuRadioItemProps,
  MenubarProps,
} from './types';

import { Menu as MenuPrimitive } from '@base-ui/react/menu';
import { Menubar as MenubarComponent } from '@base-ui/react/menubar';

import { RxCheck as CheckIcon, RxChevronRight as ChevronRightIcon, RxDotFilled as DotFilledIcon } from '@/icons/rx';
import { cn } from '@/shared/lib';

import { isMenubarMenuCheckbox, isMenubarMenuRadio, isMenubarMenuSeparator } from './helper';

const MenubarMenu = MenuPrimitive.Root;

const MenubarGroup = MenuPrimitive.Group;

const MenubarPortal = MenuPrimitive.Portal;

const MenubarSub = MenuPrimitive.SubmenuRoot;

const MenubarRadioGroup = MenuPrimitive.RadioGroup;

const MenubarRoot = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof MenubarComponent>) => (
  <MenubarComponent
    className={cn('flex h-8 items-center gap-0.5 rounded-lg border p-[3px]', className)}
    data-slot="menubar"
    data-qa="menubar"
    {...props}
  />
);
MenubarRoot.displayName = 'MenubarRoot';

const MenubarTrigger = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof MenuPrimitive.Trigger>) => (
  <MenuPrimitive.Trigger
    className={cn(
      'flex items-center rounded-sm px-1.5 py-[2px] text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted',
      className,
    )}
    data-slot="menubar-trigger"
    data-qa="menubar-trigger"
    {...props}
  />
);
MenubarTrigger.displayName = 'MenubarTrigger';

const MenubarSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubmenuTrigger> & {
  inset?: boolean;
}) => (
  <MenuPrimitive.SubmenuTrigger
    className={cn(
      'flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[popup-open]:bg-accent data-[popup-open]:text-accent-foreground',
      inset && 'pl-7',
      className,
    )}
    data-slot="menubar-sub-trigger"
    data-qa="menubar-sub-trigger"
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto size-4" />
  </MenuPrimitive.SubmenuTrigger>
);
MenubarSubTrigger.displayName = 'MenubarSubTrigger';

const MenubarSubContent = ({
  className,
  sideOffset = 0,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuPrimitive.Popup> & { sideOffset?: number }) => (
  <MenuPrimitive.Positioner sideOffset={sideOffset}>
    <MenuPrimitive.Popup
      className={cn(
        'z-50 min-w-32 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[open]:animate-in data-[open]:fade-in-0 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      data-slot="menubar-sub-content"
      data-qa="menubar-sub-content"
      {...props}
    />
  </MenuPrimitive.Positioner>
);
MenubarSubContent.displayName = 'MenubarSubContent';

const MenubarContent = ({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuPrimitive.Popup> & {
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  sideOffset?: number;
}) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Positioner align={align} alignOffset={alignOffset} sideOffset={sideOffset}>
      <MenuPrimitive.Popup
        className={cn(
          'z-50 min-w-36 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[open]:animate-in data-[open]:fade-in-0 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        data-slot="menubar-content"
        data-qa="menubar-content"
        {...props}
      />
    </MenuPrimitive.Positioner>
  </MenuPrimitive.Portal>
);
MenubarContent.displayName = 'MenubarContent';

const MenubarItem = ({
  className,
  inset,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item> & {
  inset?: boolean;
}) => (
  <MenuPrimitive.Item
    className={cn(
      "group/menubar-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
      inset && 'pl-7',
      className,
    )}
    data-slot="menubar-item"
    data-qa="menubar-item"
    {...props}
  />
);
MenubarItem.displayName = 'MenubarItem';

const MenubarCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>) => (
  <MenuPrimitive.CheckboxItem
    className={cn(
      'relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
      className,
    )}
    checked={checked}
    data-slot="menubar-checkbox-item"
    data-qa="menubar-checkbox-item"
    {...props}
  >
    <span className="pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
      <MenuPrimitive.CheckboxItemIndicator data-qa="menubar-checkbox-item-indicator">
        <CheckIcon className="size-4" />
      </MenuPrimitive.CheckboxItemIndicator>
    </span>
    {children}
  </MenuPrimitive.CheckboxItem>
);
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';

const MenubarRadioItem = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>) => (
  <MenuPrimitive.RadioItem
    className={cn(
      "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    data-slot="menubar-radio-item"
    data-qa="menubar-radio-item"
    {...props}
  >
    <span className="pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
      <MenuPrimitive.RadioItemIndicator data-qa="menubar-radio-item-indicator">
        <DotFilledIcon className="size-4 fill-current" />
      </MenuPrimitive.RadioItemIndicator>
    </span>
    {children}
  </MenuPrimitive.RadioItem>
);
MenubarRadioItem.displayName = 'MenubarRadioItem';

const MenubarLabel = ({ className, inset, ...props }: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) => (
  <div
    className={cn('px-1.5 py-1 text-sm font-medium', inset && 'pl-7', className)}
    data-slot="menubar-label"
    data-qa="menubar-label"
    {...props}
  />
);
MenubarLabel.displayName = 'MenubarLabel';

const MenubarSeparator = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>) => (
  <MenuPrimitive.Separator
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    data-slot="menubar-separator"
    data-qa="menubar-separator"
    {...props}
  />
);
MenubarSeparator.displayName = 'MenubarSeparator';

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground',
        className,
      )}
      data-slot="menubar-shortcut"
      data-qa="menubar-shortcut"
      {...props}
    />
  );
};
MenubarShortcut.displayName = 'MenubarShortcut';

export const MenubarMenuCheckboxItem: React.FC<MenubarMenuCheckboxItemProps> = ({ label, ...props }) => {
  return (
    <MenubarCheckboxItem data-qa="menubar-menu-checkbox-item" {...props}>
      {label}
    </MenubarCheckboxItem>
  );
};

export const MenubarMenuRadioItem: React.FC<MenubarMenuRadioItemProps> = ({ options, value, ...props }) => {
  return (
    <MenubarRadioGroup value={value} data-qa="menubar-menu-radio-group">
      {options.map(({ label, value }) => (
        <MenubarRadioItem key={value} value={value} data-qa="menubar-menu-radio" {...props}>
          {label}
        </MenubarRadioItem>
      ))}
    </MenubarRadioGroup>
  );
};

export const MenubarMenuItem: React.FC<MenubarMenuItemProps> = ({ label, shortcut, onClick, subMenus, ...props }) => {
  return (
    <React.Fragment>
      {subMenus?.length ? (
        subMenus.map(({ label, items }, index) => (
          <MenubarSub key={index} data-qa="menubar-sub">
            <MenubarSubTrigger data-qa="menubar-sub-trigger">{label}</MenubarSubTrigger>
            <MenubarSubContent data-qa="menubar-sub-content">
              {items.map((item, index) => (
                <MenubarMenuItems key={index} data-qa="menubar-menu-items" {...item} />
              ))}
            </MenubarSubContent>
          </MenubarSub>
        ))
      ) : (
        <MenubarItem onClick={onClick} data-qa="menubar-item" {...props}>
          {label}
          {shortcut && <MenubarShortcut data-qa="menubar-shortcut">{shortcut}</MenubarShortcut>}
        </MenubarItem>
      )}
    </React.Fragment>
  );
};

MenubarMenuItem.displayName = 'MenubarMenuItem';

export const MenubarMenuItems: React.FC<MenubarMenuItemsProps> = (props) => {
  if (isMenubarMenuSeparator(props)) {
    const { separator, ...restProps } = props;
    return <MenubarSeparator {...restProps} />;
  }
  if (isMenubarMenuCheckbox(props)) {
    return <MenubarMenuCheckboxItem {...props} />;
  }
  if (isMenubarMenuRadio(props)) {
    return <MenubarMenuRadioItem {...props} />;
  }
  return <MenubarMenuItem {...props} />;
};

/**
 * Menubar Component
 *
 * A visually persistent menu bar for web applications, providing access to application commands.
 * Perfect for desktop-style applications, text editors, and complex web apps with multiple menu sections.
 *
 * @example
 * // Basic usage
 * import { Menubar } from '@paalstack/react-ui';
 *
 * <Menubar
 *   menus={[
 *     {
 *       label: 'File',
 *       items: [
 *         { label: 'New File', shortcut: '⌘N', onClick: () => createNewFile() },
 *         { label: 'Open...', shortcut: '⌘O', onClick: () => openFile() },
 *         { label: 'Save', shortcut: '⌘S', onClick: () => saveFile() },
 *       ]
 *     },
 *     {
 *       label: 'Edit',
 *       items: [
 *         { label: 'Undo', shortcut: '⌘Z', onClick: () => undo() },
 *         { label: 'Redo', shortcut: '⇧⌘Z', onClick: () => redo() },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // With separators
 * <Menubar
 *   menus={[
 *     {
 *       label: 'File',
 *       items: [
 *         { label: 'New File', shortcut: '⌘N' },
 *         { label: 'Open...', shortcut: '⌘O' },
 *         { separator: true },
 *         { label: 'Save', shortcut: '⌘S' },
 *         { label: 'Save As...', shortcut: '⇧⌘S' },
 *         { separator: true },
 *         { label: 'Exit', shortcut: '⌘Q' },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // With sub-menus
 * <Menubar
 *   menus={[
 *     {
 *       label: 'File',
 *       items: [
 *         { label: 'New File', shortcut: '⌘N' },
 *         {
 *           label: 'Open Recent',
 *           subMenus: [
 *             {
 *               label: 'Recent Files',
 *               items: [
 *                 { label: 'document1.txt', onClick: () => openFile('document1.txt') },
 *                 { label: 'document2.txt', onClick: () => openFile('document2.txt') },
 *                 { label: 'document3.txt', onClick: () => openFile('document3.txt') },
 *               ]
 *             }
 *           ]
 *         },
 *         { label: 'Save', shortcut: '⌘S' },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // With checkboxes
 * const [showStatusBar, setShowStatusBar] = useState(true);
 * const [showActivityBar, setShowActivityBar] = useState(false);
 *
 * <Menubar
 *   menus={[
 *     {
 *       label: 'View',
 *       items: [
 *         {
 *           label: 'Status Bar',
 *           checkbox: true,
 *           checked: showStatusBar,
 *           onCheckedChange: setShowStatusBar
 *         },
 *         {
 *           label: 'Activity Bar',
 *           checkbox: true,
 *           checked: showActivityBar,
 *           onCheckedChange: setShowActivityBar
 *         },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // With radio groups
 * const [theme, setTheme] = useState('light');
 *
 * <Menubar
 *   menus={[
 *     {
 *       label: 'Preferences',
 *       items: [
 *         {
 *           radio: true,
 *           value: theme,
 *           onValueChange: setTheme,
 *           options: [
 *             { label: 'Light', value: 'light' },
 *             { label: 'Dark', value: 'dark' },
 *             { label: 'System', value: 'system' },
 *           ]
 *         }
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // Text editor menubar
 * <Menubar
 *   menus={[
 *     {
 *       label: 'File',
 *       items: [
 *         { label: 'New File', shortcut: '⌘N', onClick: () => newFile() },
 *         { label: 'Open...', shortcut: '⌘O', onClick: () => openFile() },
 *         { separator: true },
 *         { label: 'Save', shortcut: '⌘S', onClick: () => save() },
 *         { label: 'Save As...', shortcut: '⇧⌘S', onClick: () => saveAs() },
 *         { separator: true },
 *         { label: 'Close', shortcut: '⌘W', onClick: () => close() },
 *       ]
 *     },
 *     {
 *       label: 'Edit',
 *       items: [
 *         { label: 'Undo', shortcut: '⌘Z', onClick: () => undo() },
 *         { label: 'Redo', shortcut: '⇧⌘Z', onClick: () => redo() },
 *         { separator: true },
 *         { label: 'Cut', shortcut: '⌘X', onClick: () => cut() },
 *         { label: 'Copy', shortcut: '⌘C', onClick: () => copy() },
 *         { label: 'Paste', shortcut: '⌘V', onClick: () => paste() },
 *         { separator: true },
 *         { label: 'Find', shortcut: '⌘F', onClick: () => find() },
 *         { label: 'Replace', shortcut: '⌥⌘F', onClick: () => replace() },
 *       ]
 *     },
 *     {
 *       label: 'View',
 *       items: [
 *         { label: 'Zoom In', shortcut: '⌘+', onClick: () => zoomIn() },
 *         { label: 'Zoom Out', shortcut: '⌘-', onClick: () => zoomOut() },
 *         { label: 'Reset Zoom', shortcut: '⌘0', onClick: () => resetZoom() },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // Application menubar with nested options
 * <Menubar
 *   menus={[
 *     {
 *       label: 'File',
 *       items: [
 *         { label: 'New', shortcut: '⌘N' },
 *         { label: 'Open', shortcut: '⌘O' },
 *         {
 *           label: 'Export',
 *           subMenus: [
 *             {
 *               label: 'Export As',
 *               items: [
 *                 { label: 'PDF', onClick: () => exportAs('pdf') },
 *                 { label: 'HTML', onClick: () => exportAs('html') },
 *                 { label: 'Markdown', onClick: () => exportAs('md') },
 *               ]
 *             }
 *           ]
 *         },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // With disabled items
 * <Menubar
 *   menus={[
 *     {
 *       label: 'Edit',
 *       items: [
 *         { label: 'Undo', shortcut: '⌘Z', disabled: !canUndo },
 *         { label: 'Redo', shortcut: '⇧⌘Z', disabled: !canRedo },
 *         { separator: true },
 *         { label: 'Cut', shortcut: '⌘X', disabled: !hasSelection },
 *         { label: 'Copy', shortcut: '⌘C', disabled: !hasSelection },
 *         { label: 'Paste', shortcut: '⌘V' },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // Complete IDE-style menubar
 * const [sidebarVisible, setSidebarVisible] = useState(true);
 * const [minimap, setMinimap] = useState(false);
 * const [lineNumbers, setLineNumbers] = useState(true);
 *
 * <Menubar
 *   menus={[
 *     {
 *       label: 'File',
 *       items: [
 *         { label: 'New File', shortcut: '⌘N', onClick: () => createFile() },
 *         { label: 'New Window', shortcut: '⇧⌘N', onClick: () => newWindow() },
 *         { separator: true },
 *         { label: 'Open File...', shortcut: '⌘O', onClick: () => openDialog() },
 *         { label: 'Open Folder...', shortcut: '⌘K ⌘O', onClick: () => openFolder() },
 *         {
 *           label: 'Open Recent',
 *           subMenus: [
 *             {
 *               label: 'Files',
 *               items: [
 *                 { label: 'main.tsx', onClick: () => open('main.tsx') },
 *                 { label: 'App.tsx', onClick: () => open('App.tsx') },
 *               ]
 *             }
 *           ]
 *         },
 *         { separator: true },
 *         { label: 'Save', shortcut: '⌘S', onClick: () => save() },
 *         { label: 'Save As...', shortcut: '⇧⌘S', onClick: () => saveAs() },
 *         { label: 'Save All', shortcut: '⌥⌘S', onClick: () => saveAll() },
 *       ]
 *     },
 *     {
 *       label: 'Edit',
 *       items: [
 *         { label: 'Undo', shortcut: '⌘Z', onClick: () => undo() },
 *         { label: 'Redo', shortcut: '⇧⌘Z', onClick: () => redo() },
 *         { separator: true },
 *         { label: 'Cut', shortcut: '⌘X', onClick: () => cut() },
 *         { label: 'Copy', shortcut: '⌘C', onClick: () => copy() },
 *         { label: 'Paste', shortcut: '⌘V', onClick: () => paste() },
 *         { separator: true },
 *         { label: 'Find', shortcut: '⌘F', onClick: () => showFind() },
 *         { label: 'Replace', shortcut: '⌥⌘F', onClick: () => showReplace() },
 *       ]
 *     },
 *     {
 *       label: 'View',
 *       items: [
 *         {
 *           label: 'Sidebar',
 *           checkbox: true,
 *           checked: sidebarVisible,
 *           onCheckedChange: setSidebarVisible,
 *           shortcut: '⌘B'
 *         },
 *         {
 *           label: 'Minimap',
 *           checkbox: true,
 *           checked: minimap,
 *           onCheckedChange: setMinimap
 *         },
 *         {
 *           label: 'Line Numbers',
 *           checkbox: true,
 *           checked: lineNumbers,
 *           onCheckedChange: setLineNumbers
 *         },
 *         { separator: true },
 *         { label: 'Command Palette...', shortcut: '⇧⌘P', onClick: () => showPalette() },
 *       ]
 *     },
 *     {
 *       label: 'Help',
 *       items: [
 *         { label: 'Welcome', onClick: () => showWelcome() },
 *         { label: 'Documentation', onClick: () => openDocs() },
 *         { separator: true },
 *         { label: 'Check for Updates...', onClick: () => checkUpdates() },
 *         { label: 'About', onClick: () => showAbout() },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // Browser-style menubar
 * <Menubar
 *   menus={[
 *     {
 *       label: 'Chrome',
 *       items: [
 *         { label: 'About Chrome', onClick: () => showAbout() },
 *         { separator: true },
 *         { label: 'Settings', shortcut: '⌘,', onClick: () => openSettings() },
 *         { separator: true },
 *         { label: 'Quit Chrome', shortcut: '⌘Q', onClick: () => quit() },
 *       ]
 *     },
 *     {
 *       label: 'File',
 *       items: [
 *         { label: 'New Tab', shortcut: '⌘T', onClick: () => newTab() },
 *         { label: 'New Window', shortcut: '⌘N', onClick: () => newWindow() },
 *         { label: 'New Incognito Window', shortcut: '⇧⌘N', onClick: () => newIncognito() },
 *         { separator: true },
 *         { label: 'Close Tab', shortcut: '⌘W', onClick: () => closeTab() },
 *         { label: 'Close Window', shortcut: '⇧⌘W', onClick: () => closeWindow() },
 *       ]
 *     },
 *     {
 *       label: 'History',
 *       items: [
 *         { label: 'Show Full History', shortcut: '⌘Y', onClick: () => showHistory() },
 *         { separator: true },
 *         { label: 'Recently Closed', subMenus: [{ label: 'Tabs', items: [] }] },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // Using composition for custom layout
 * import { MenubarRoot, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@paalstack/react-ui'
 *
 * <MenubarRoot>
 *   <MenubarMenu>
 *     <MenubarTrigger>File</MenubarTrigger>
 *     <MenubarContent>
 *       <MenubarItem onClick={() => newFile()}>
 *         New File
 *         <MenubarShortcut>⌘N</MenubarShortcut>
 *       </MenubarItem>
 *       <MenubarItem onClick={() => save()}>
 *         Save
 *         <MenubarShortcut>⌘S</MenubarShortcut>
 *       </MenubarItem>
 *     </MenubarContent>
 *   </MenubarMenu>
 * </MenubarRoot>
 *
 * @tip Use keyboard shortcuts to provide familiar navigation patterns (Cmd on Mac, Ctrl on Windows)
 * @tip Group related actions with separators for better organization
 * @tip Disable menu items that aren't currently available instead of hiding them
 * @tip For complex nested menus, use subMenus to create multi-level navigation
 */
const Menubar = ({ menus, ...props }: MenubarProps) => (
  <MenubarRoot {...props}>
    {menus.map(({ label, items }, index) => (
      <MenubarMenu key={index} data-qa="menubar-menu">
        <MenubarTrigger data-qa="menubar-trigger">{label}</MenubarTrigger>
        <MenubarContent data-qa="menubar-content">
          {items.map((item, index) => (
            <MenubarMenuItems key={index} data-qa="menubar-menu" {...item} />
          ))}
        </MenubarContent>
      </MenubarMenu>
    ))}
  </MenubarRoot>
);
Menubar.displayName = 'Menubar';

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
