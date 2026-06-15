import * as React from 'react';

import type {
  CustomDropdownMenuCheckboxItem,
  CustomDropdownMenuItem,
  CustomDropdownMenuItemWithSubItem,
  CustomDropdownMenuRadioGroupItem,
  DropdownMenuItemType,
  DropdownMenuProps,
} from './types';

import { Menu as DropdownMenuPrimitive } from '@base-ui/react/menu';

import { RxCheck as CheckIcon, RxChevronRight as ChevronRightIcon } from '@/icons/rx';
import { cn } from '@/shared/lib';

/**
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 */
function DropdownMenuRoot({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubmenuRoot>) {
  return <DropdownMenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubmenuTrigger> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.SubmenuTrigger
    className={cn(
      "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground data-popup-open:bg-accent data-popup-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    data-slot="dropdown-menu-sub-trigger"
    data-qa="dropdown-menu-sub-trigger"
    data-inset={inset}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto" data-qa="dropdown-menu-sub-trigger-icon" />
  </DropdownMenuPrimitive.SubmenuTrigger>
);
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

const DropdownMenuSubContent = ({
  className,
  sideOffset = 0,
  alignOffset = -3,
  align = 'start',
  side = 'right',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Popup> & {
  sideOffset?: number;
  alignOffset?: number;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
}) => (
  <DropdownMenuPrimitive.Positioner
    className="isolate z-50 outline-none"
    sideOffset={sideOffset}
    alignOffset={alignOffset}
    align={align}
    side={side}
  >
    <DropdownMenuPrimitive.Popup
      className={cn(
        'z-50 min-w-24 overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 outline-none data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      data-slot="dropdown-menu-sub-content"
      data-qa="dropdown-menu-sub-content"
      {...props}
    />
  </DropdownMenuPrimitive.Positioner>
);
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  alignOffset = 0,
  align = 'start',
  side = 'bottom',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Popup> & {
  sideOffset?: number;
  alignOffset?: number;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Positioner
      className="isolate z-50 outline-none"
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      align={align}
      side={side}
    >
      <DropdownMenuPrimitive.Popup
        className={cn(
          'z-50 max-h-(--available-height) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        data-slot="dropdown-menu-content"
        data-qa="dropdown-menu-content"
        {...props}
      />
    </DropdownMenuPrimitive.Positioner>
  </DropdownMenuPrimitive.Portal>
);
DropdownMenuContent.displayName = 'DropdownMenuContent';

const DropdownMenuItem = ({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    data-slot="dropdown-menu-item"
    data-qa="dropdown-menu-item"
    data-inset={inset}
    data-variant={variant}
    {...props}
  />
);
DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    checked={checked}
    data-slot="dropdown-menu-checkbox-item"
    data-qa="dropdown-menu-checkbox-item"
    data-inset={inset}
    data-disabled={props.disabled}
    {...props}
  >
    <span
      className="pointer-events-none absolute right-2 flex items-center justify-center"
      data-slot="dropdown-menu-checkbox-item-indicator"
    >
      <DropdownMenuPrimitive.CheckboxItemIndicator data-qa="dropdown-menu-checkbox-item-indicator">
        <CheckIcon />
      </DropdownMenuPrimitive.CheckboxItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

const DropdownMenuRadioItem = ({
  className,
  children,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  inset?: boolean;
}) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    data-slot="dropdown-menu-radio-item"
    data-qa="dropdown-menu-radio-item"
    data-inset={inset}
    data-disabled={props.disabled}
    {...props}
  >
    <span
      className="pointer-events-none absolute right-2 flex items-center justify-center"
      data-slot="dropdown-menu-radio-item-indicator"
    >
      <DropdownMenuPrimitive.RadioItemIndicator data-qa="dropdown-menu-radio-item-indicator">
        <CheckIcon />
      </DropdownMenuPrimitive.RadioItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
);
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) => (
  <div
    className={cn('px-1.5 py-1 text-xs font-medium text-muted-foreground', inset && 'pl-7', className)}
    data-slot="dropdown-menu-label"
    data-qa="dropdown-menu-label"
    {...props}
  />
);
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

const DropdownMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    data-slot="dropdown-menu-separator"
    data-qa="dropdown-menu-separator"
    {...props}
  />
);
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground',
        className,
      )}
      data-slot="dropdown-menu-shortcut"
      data-qa="dropdown-menu-shortcut"
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

const LocalDropdownMenuItem: React.FC<CustomDropdownMenuItem & { subItems?: unknown; type?: unknown }> = ({
  separator,
  label,
  shortcut,
  inset,
  type: _type, // Destructure and discard type to prevent it from spreading to DOM
  subItems: _subItems, // Destructure and discard subItems to prevent it from spreading to DOM
  ...props
}) => {
  if (separator) {
    return <DropdownMenuSeparator className={typeof props.className === 'string' ? props.className : undefined} />;
  }
  return (
    <DropdownMenuItem inset={inset} {...props}>
      {label}
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuItem>
  );
};

const LocalDropdownMenuCheckboxItem: React.FC<Omit<CustomDropdownMenuCheckboxItem, 'type'> & { type?: unknown }> = ({
  label,
  checked,
  onCheckedChange,
  disabled,
  className,
  type: _type, // Destructure and discard type to prevent it from spreading to DOM
  ...props
}) => {
  return (
    <DropdownMenuCheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={className}
      {...props}
    >
      {label}
    </DropdownMenuCheckboxItem>
  );
};

const LocalDropdownMenuRadioGroup: React.FC<CustomDropdownMenuRadioGroupItem> = ({
  label,
  value,
  onValueChange,
  items,
}) => {
  return (
    <>
      {label && (
        <>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
        </>
      )}
      <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
        {items.map((item, index) => (
          <DropdownMenuRadioItem
            key={index}
            value={item.value}
            disabled={item.disabled}
            className={item.className}
            data-qa="dropdown-menu-radio-item-local"
          >
            {item.label}
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuRadioGroup>
    </>
  );
};

const isSubItem = (item: DropdownMenuItemType): item is CustomDropdownMenuItemWithSubItem => {
  // Check both the explicit type and the presence of subItems for backward compatibility
  const subItem = item as CustomDropdownMenuItemWithSubItem;
  return item.type === 'submenu' || (Boolean(subItem.subItems) && !!subItem.subItems?.length);
};

const isCheckboxItem = (item: DropdownMenuItemType): item is CustomDropdownMenuCheckboxItem => {
  return item.type === 'checkbox';
};

const isRadioGroupItem = (item: DropdownMenuItemType): item is CustomDropdownMenuRadioGroupItem => {
  return item.type === 'radio-group';
};

/**
 * DropdownMenu Component
 *
 * Displays a menu to the user — such as a set of actions or functions — triggered by a button.
 * Perfect for action menus, user menus, context menus, and option selectors.
 *
 * @example
 * // Basic usage
 * import { DropdownMenu, Button } from '@paalstack/react-ui';
 *
 * <DropdownMenu
 *   trigger={<Button>Menu</Button>}
 *   items={[
 *     { label: 'Profile', onClick: () => navigate('/profile') },
 *     { label: 'Settings', onClick: () => navigate('/settings') },
 *     { separator: true },
 *     { label: 'Logout', onClick: handleLogout },
 *   ]}
 * />
 *
 * @example
 * // With title/header
 * <DropdownMenu
 *   trigger={<Button>Options</Button>}
 *   title="My Account"
 *   items={[
 *     { label: 'Profile', onClick: () => {} },
 *     { label: 'Settings', onClick: () => {} },
 *     { separator: true },
 *     { label: 'Logout', onClick: () => {} },
 *   ]}
 * />
 *
 * @example
 * // With keyboard shortcuts
 * <DropdownMenu
 *   trigger={<Button>File</Button>}
 *   items={[
 *     { label: 'New File', shortcut: '⌘N', onClick: handleNew },
 *     { label: 'Open', shortcut: '⌘O', onClick: handleOpen },
 *     { label: 'Save', shortcut: '⌘S', onClick: handleSave },
 *     { separator: true },
 *     { label: 'Exit', shortcut: '⌘Q', onClick: handleExit },
 *   ]}
 * />
 *
 * @example
 * // With sub-menus
 * <DropdownMenu
 *   trigger={<Button>Edit</Button>}
 *   items={[
 *     { label: 'Undo', shortcut: '⌘Z', onClick: handleUndo },
 *     { label: 'Redo', shortcut: '⇧⌘Z', onClick: handleRedo },
 *     { separator: true },
 *     {
 *       label: 'Transform',
 *       subItems: [
 *         { label: 'Uppercase', onClick: () => transform('uppercase') },
 *         { label: 'Lowercase', onClick: () => transform('lowercase') },
 *         { label: 'Title Case', onClick: () => transform('titlecase') },
 *       ]
 *     },
 *   ]}
 * />
 *
 * @example
 * // User menu with avatar
 * <DropdownMenu
 *   trigger={
 *     <Button variant="ghost" className="flex items-center gap-2">
 *       <Avatar src="/user.jpg" fallback="JD" />
 *       <span>John Doe</span>
 *     </Button>
 *   }
 *   items={[
 *     { label: 'My Profile', onClick: () => navigate('/profile') },
 *     { label: 'Account Settings', onClick: () => navigate('/settings') },
 *     { label: 'Billing', onClick: () => navigate('/billing') },
 *     { separator: true },
 *     { label: 'Sign Out', onClick: handleSignOut },
 *   ]}
 * />
 *
 * @example
 * // Table row actions
 * <DropdownMenu
 *   trigger={
 *     <IconButton icon={<MoreVerticalIcon />} variant="ghost" />
 *   }
 *   items={[
 *     { label: 'Edit', onClick: () => handleEdit(row.id) },
 *     { label: 'Duplicate', onClick: () => handleDuplicate(row.id) },
 *     { label: 'Archive', onClick: () => handleArchive(row.id) },
 *     { separator: true },
 *     {
 *       label: 'Delete',
 *       onClick: () => handleDelete(row.id),
 *       className: 'text-danger'
 *     },
 *   ]}
 * />
 *
 * @example
 * // Disabled menu items
 * <DropdownMenu
 *   trigger={<Button>Actions</Button>}
 *   items={[
 *     { label: 'View', onClick: () => {} },
 *     { label: 'Edit', onClick: () => {}, disabled: !canEdit },
 *     { label: 'Delete', onClick: () => {}, disabled: !canDelete },
 *   ]}
 * />
 *
 * @example
 * // Using composition for complex menus
 * import {
 *   DropdownMenuRoot,
 *   DropdownMenuTrigger,
 *   DropdownMenuContent,
 *   DropdownMenuItem,
 *   DropdownMenuSeparator,
 *   DropdownMenuCheckboxItem,
 *   DropdownMenuRadioGroup,
 *   DropdownMenuRadioItem,
 *   DropdownMenuLabel,
 *   DropdownMenuShortcut
 * } from '@paalstack/react-ui';
 *
 * <DropdownMenuRoot>
 *   <DropdownMenuTrigger asChild>
 *     <Button>Advanced Menu</Button>
 *   </DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuLabel>Appearance</DropdownMenuLabel>
 *     <DropdownMenuSeparator />
 *     <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
 *       Show Panel
 *     </DropdownMenuCheckboxItem>
 *     <DropdownMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
 *       Show Toolbar
 *     </DropdownMenuCheckboxItem>
 *     <DropdownMenuSeparator />
 *     <DropdownMenuLabel>Theme</DropdownMenuLabel>
 *     <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
 *       <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
 *       <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
 *       <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
 *     </DropdownMenuRadioGroup>
 *   </DropdownMenuContent>
 * </DropdownMenuRoot>
 *
 * @example
 * // Status change menu
 * <DropdownMenu
 *   trigger={
 *     <Button variant="outline">
 *       Status: {currentStatus}
 *     </Button>
 *   }
 *   items={[
 *     { label: 'Active', onClick: () => setStatus('active') },
 *     { label: 'In Progress', onClick: () => setStatus('in-progress') },
 *     { label: 'On Hold', onClick: () => setStatus('on-hold') },
 *     { label: 'Completed', onClick: () => setStatus('completed') },
 *   ]}
 * />
 *
 * @example
 * // Multi-level nested menu
 * <DropdownMenu
 *   trigger={<Button>Export</Button>}
 *   items={[
 *     {
 *       label: 'Export as...',
 *       subItems: [
 *         { label: 'PDF', onClick: () => exportAs('pdf') },
 *         { label: 'Excel', onClick: () => exportAs('xlsx') },
 *         { label: 'CSV', onClick: () => exportAs('csv') },
 *         {
 *           label: 'Image',
 *           subItems: [
 *             { label: 'PNG', onClick: () => exportAs('png') },
 *             { label: 'JPEG', onClick: () => exportAs('jpg') },
 *             { label: 'SVG', onClick: () => exportAs('svg') },
 *           ]
 *         },
 *       ]
 *     },
 *     { separator: true },
 *     { label: 'Print', shortcut: '⌘P', onClick: handlePrint },
 *   ]}
 * />
 *
 * @example
 * // Filter menu
 * <DropdownMenu
 *   trigger={
 *     <Button variant="outline">
 *       <FilterIcon className="mr-2" />
 *       Filter
 *     </Button>
 *   }
 *   items={[
 *     { label: 'All Items', onClick: () => setFilter('all') },
 *     { separator: true },
 *     { label: 'Active', onClick: () => setFilter('active') },
 *     { label: 'Archived', onClick: () => setFilter('archived') },
 *     { label: 'Deleted', onClick: () => setFilter('deleted') },
 *   ]}
 * />
 *
 * @example
 * // Custom trigger (not a button)
 * <DropdownMenu
 *   trigger={
 *     <div className="cursor-pointer p-2 hover:bg-accent rounded">
 *       <MoreHorizontalIcon />
 *     </div>
 *   }
 *   items={[
 *     { label: 'Option 1', onClick: () => {} },
 *     { label: 'Option 2', onClick: () => {} },
 *   ]}
 * />
 *
 * @example
 * // With checkbox items
 * <DropdownMenu
 *   trigger={<Button>View Options</Button>}
 *   title="Appearance"
 *   items={[
 *     {
 *       type: 'checkbox',
 *       label: 'Show Status Bar',
 *       checked: showStatusBar,
 *       onCheckedChange: setShowStatusBar,
 *     },
 *     {
 *       type: 'checkbox',
 *       label: 'Show Activity Bar',
 *       checked: showActivityBar,
 *       onCheckedChange: setShowActivityBar,
 *     },
 *     {
 *       type: 'checkbox',
 *       label: 'Show Panel',
 *       checked: showPanel,
 *       onCheckedChange: setShowPanel,
 *     },
 *   ]}
 * />
 *
 * @example
 * // With radio group
 * <DropdownMenu
 *   trigger={<Button>Select Position</Button>}
 *   items={[
 *     {
 *       type: 'radio-group',
 *       label: 'Panel Position',
 *       value: position,
 *       onValueChange: setPosition,
 *       items: [
 *         { value: 'top', label: 'Top' },
 *         { value: 'bottom', label: 'Bottom' },
 *         { value: 'right', label: 'Right' },
 *       ],
 *     },
 *   ]}
 * />
 *
 * @example
 * // Mixed items with checkbox, radio, and regular items
 * <DropdownMenu
 *   trigger={<Button>Settings</Button>}
 *   items={[
 *     {
 *       type: 'checkbox',
 *       label: 'Enable notifications',
 *       checked: notifications,
 *       onCheckedChange: setNotifications,
 *     },
 *     { separator: true },
 *     {
 *       type: 'radio-group',
 *       label: 'Theme',
 *       value: theme,
 *       onValueChange: setTheme,
 *       items: [
 *         { value: 'light', label: 'Light' },
 *         { value: 'dark', label: 'Dark' },
 *         { value: 'system', label: 'System' },
 *       ],
 *     },
 *     { separator: true },
 *     { label: 'Advanced Settings', onClick: () => navigate('/settings') },
 *   ]}
 * />
 *
 * @example
 * // With inset prop for alignment
 * <DropdownMenu
 *   trigger={<Button>Menu</Button>}
 *   items={[
 *     {
 *       type: 'checkbox',
 *       label: 'Show toolbar',
 *       checked: showToolbar,
 *       onCheckedChange: setShowToolbar,
 *     },
 *     { label: 'Settings', inset: true, onClick: () => {} },
 *     { label: 'Preferences', inset: true, onClick: () => {} },
 *   ]}
 * />
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  title,
  contentProps,
  triggerClassName,
  items,
  triggerProps,
  groupProps,
  ...props
}) => {
  return (
    <DropdownMenuRoot data-qa="dropdown-menu" {...props}>
      {trigger && (
        <DropdownMenuTrigger
          render={React.isValidElement(trigger) ? trigger : undefined}
          data-qa="dropdown-menu-trigger"
          {...triggerProps}
          className={cn(triggerClassName, triggerProps?.className)}
        />
      )}
      <DropdownMenuContent
        data-qa="dropdown-menu-content"
        {...contentProps}
        className={cn('min-w-32', contentProps?.className)}
      >
        {title && (
          <>
            <DropdownMenuLabel data-qa="dropdown-menu-label">{title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuGroup data-qa="dropdown-menu-group" {...groupProps}>
          {items.map((item, index) => {
            // Handle checkbox items
            if (isCheckboxItem(item)) {
              return <LocalDropdownMenuCheckboxItem key={index} {...item} />;
            }

            // Handle radio group items
            if (isRadioGroupItem(item)) {
              return <LocalDropdownMenuRadioGroup key={index} {...item} />;
            }

            // Handle submenu items
            if (isSubItem(item)) {
              return (
                <DropdownMenuSub key={index} data-qa="dropdown-menu-sub">
                  <DropdownMenuSubTrigger disabled={item.disabled} data-qa="dropdown-menu-sub-trigger">
                    {item.label}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal data-qa="dropdown-menu-portal">
                    <DropdownMenuSubContent data-qa="dropdown-menu-sub-content">
                      {item.subItems.map((subItem, subIndex) => (
                        <LocalDropdownMenuItem key={subIndex} data-qa="dropdown-menu-sub-item" {...subItem} />
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              );
            }

            // Handle regular menu items
            return <LocalDropdownMenuItem key={index} data-qa="dropdown-menu-item" {...item} />;
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
