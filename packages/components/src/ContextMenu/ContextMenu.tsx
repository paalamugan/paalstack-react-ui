import * as React from 'react';

import type { BoxPropsWithRef } from '@/layouts/Box';
import type { ContextMenuEntry, ContextMenuItemConfig, ContextMenuProps } from './types';

import { ContextMenu as ContextMenuPrimitive } from '@base-ui/react/context-menu';

import { RxCheck as CheckIcon, RxChevronRight as ChevronRightIcon } from '@/icons/rx';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

// ─── Primitive components (Composition API) ───────────────────────────────────

const ContextMenuRoot = ({ ...props }: ContextMenuPrimitive.Root.Props) => (
  <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
);
ContextMenuRoot.displayName = 'ContextMenuRoot';

const ContextMenuPortal = ({ ...props }: ContextMenuPrimitive.Portal.Props) => (
  <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
);
ContextMenuPortal.displayName = 'ContextMenuPortal';

const ContextMenuTrigger = ({ className, ...props }: ContextMenuPrimitive.Trigger.Props) => (
  <ContextMenuPrimitive.Trigger
    data-slot="context-menu-trigger"
    data-qa="context-menu-trigger"
    className={cn('select-none', className)}
    {...props}
  />
);
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

const ContextMenuContent = ({
  className,
  align = 'start',
  alignOffset = 4,
  side = 'right',
  sideOffset = 0,
  ...props
}: ContextMenuPrimitive.Popup.Props &
  Pick<ContextMenuPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Positioner
      className="isolate z-50 outline-none"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
    >
      <ContextMenuPrimitive.Popup
        data-slot="context-menu-content"
        data-qa="context-menu-content"
        className={cn(
          'z-50 max-h-(--available-height) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Positioner>
  </ContextMenuPrimitive.Portal>
);
ContextMenuContent.displayName = 'ContextMenuContent';

const ContextMenuGroup = ({ ...props }: ContextMenuPrimitive.Group.Props) => (
  <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
);
ContextMenuGroup.displayName = 'ContextMenuGroup';

const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) => (
  <div
    data-slot="context-menu-label"
    data-qa="context-menu-label"
    className={cn('px-1.5 py-1 text-xs font-medium text-muted-foreground', inset && 'pl-7', className)}
    {...props}
  />
);
ContextMenuLabel.displayName = 'ContextMenuLabel';

const ContextMenuItem = ({
  className,
  inset,
  variant = 'default',
  ...props
}: ContextMenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: 'default' | 'destructive';
}) => (
  <ContextMenuPrimitive.Item
    data-slot="context-menu-item"
    data-qa="context-menu-item"
    data-inset={inset}
    data-variant={variant}
    className={cn(
      "group/context-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset=true]:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive",
      className,
    )}
    {...props}
  />
);
ContextMenuItem.displayName = 'ContextMenuItem';

const ContextMenuSub = ({ ...props }: ContextMenuPrimitive.SubmenuRoot.Props) => (
  <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
);
ContextMenuSub.displayName = 'ContextMenuSub';

const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & { inset?: boolean }) => (
  <ContextMenuPrimitive.SubmenuTrigger
    data-slot="context-menu-sub-trigger"
    data-qa="context-menu-sub-trigger"
    data-inset={inset}
    className={cn(
      "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-[inset=true]:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon data-qa="context-menu-sub-trigger-icon" className="cn-rtl-flip ml-auto" />
  </ContextMenuPrimitive.SubmenuTrigger>
);
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

const ContextMenuSubContent = ({ ...props }: React.ComponentProps<typeof ContextMenuContent>) => (
  <ContextMenuContent data-slot="context-menu-sub-content" className="shadow-lg" side="right" {...props} />
);
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  inset,
  ...props
}: ContextMenuPrimitive.CheckboxItem.Props & { inset?: boolean }) => (
  <ContextMenuPrimitive.CheckboxItem
    data-slot="context-menu-checkbox-item"
    data-qa="context-menu-checkbox-item"
    data-inset={inset}
    className={cn(
      "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset=true]:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    checked={checked}
    {...props}
  >
    <Box as="span" className="pointer-events-none absolute right-2">
      <ContextMenuPrimitive.CheckboxItemIndicator>
        <CheckIcon data-qa="context-menu-checkbox-item-indicator" />
      </ContextMenuPrimitive.CheckboxItemIndicator>
    </Box>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
);
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

const ContextMenuRadioGroup = ({ ...props }: ContextMenuPrimitive.RadioGroup.Props) => (
  <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />
);
ContextMenuRadioGroup.displayName = 'ContextMenuRadioGroup';

const ContextMenuRadioItem = ({
  className,
  children,
  inset,
  ...props
}: ContextMenuPrimitive.RadioItem.Props & { inset?: boolean }) => (
  <ContextMenuPrimitive.RadioItem
    data-slot="context-menu-radio-item"
    data-qa="context-menu-radio-item"
    data-inset={inset}
    className={cn(
      "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset=true]:pl-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  >
    <Box as="span" className="pointer-events-none absolute right-2">
      <ContextMenuPrimitive.RadioItemIndicator>
        <CheckIcon data-qa="context-menu-radio-item-indicator" />
      </ContextMenuPrimitive.RadioItemIndicator>
    </Box>
    {children}
  </ContextMenuPrimitive.RadioItem>
);
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

const ContextMenuSeparator = ({ className, ...props }: ContextMenuPrimitive.Separator.Props) => (
  <ContextMenuPrimitive.Separator
    data-slot="context-menu-separator"
    data-qa="context-menu-separator"
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
);
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

const ContextMenuShortcut: React.FC<BoxPropsWithRef<'span'>> = ({ className, ...props }) => (
  <Box
    as="span"
    data-slot="context-menu-shortcut"
    data-qa="context-menu-shortcut"
    className={cn(
      'ml-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground',
      className,
    )}
    {...props}
  />
);
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

// ─── Props API (Compound Component) ──────────────────────────────────────────

const renderMenuEntries = (entries: ContextMenuEntry[]): React.ReactNode =>
  entries.map((entry, index) => {
    if ('type' in entry) {
      switch (entry.type) {
        case 'separator':
          return <ContextMenuSeparator key={`sep-${index}`} />;

        case 'label':
          return (
            <ContextMenuLabel key={`label-${index}`} inset={entry.inset}>
              {entry.label}
            </ContextMenuLabel>
          );

        case 'checkbox':
          return (
            <ContextMenuCheckboxItem
              key={`checkbox-${index}`}
              checked={entry.checked}
              onCheckedChange={entry.onCheckedChange}
              disabled={entry.disabled}
              inset={entry.inset}
              className={entry.className}
            >
              {entry.label}
              {entry.shortcut && <ContextMenuShortcut>{entry.shortcut}</ContextMenuShortcut>}
            </ContextMenuCheckboxItem>
          );

        case 'radio-group':
          return (
            <React.Fragment key={`radio-${index}`}>
              <ContextMenuRadioGroup value={entry.value} onValueChange={entry.onValueChange}>
                {entry.label && (
                  <>
                    <ContextMenuLabel inset={entry.inset}>{entry.label}</ContextMenuLabel>
                    <ContextMenuSeparator />
                  </>
                )}
                {entry.items.map((radio) => (
                  <ContextMenuRadioItem key={radio.value} value={radio.value} disabled={radio.disabled}>
                    {radio.label}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
            </React.Fragment>
          );

        case 'submenu':
          return (
            <ContextMenuSub key={`sub-${index}`}>
              <ContextMenuSubTrigger inset={entry.inset}>{entry.label}</ContextMenuSubTrigger>
              <ContextMenuSubContent className={entry.className}>
                {renderMenuEntries(entry.items)}
              </ContextMenuSubContent>
            </ContextMenuSub>
          );

        default:
          return null;
      }
    }

    const item = entry as ContextMenuItemConfig;
    return (
      <ContextMenuItem
        key={`item-${index}`}
        onClick={item.onClick}
        disabled={item.disabled}
        inset={item.inset}
        variant={item.variant}
        className={item.className}
      >
        {item.icon}
        {item.label}
        {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
      </ContextMenuItem>
    );
  });

/**
 * ContextMenu Component (Props API)
 *
 * Displays a menu to the user upon right-click or long-press.
 * Perfect for providing contextual actions on elements like images, text, table rows, etc.
 *
 * @example
 * // Basic usage
 * import { ContextMenu } from '@paalstack/react-ui';
 *
 * <ContextMenu
 *   trigger={<div className="border rounded p-4">Right-click me</div>}
 *   items={[
 *     { label: 'Back', shortcut: '⌘[', inset: true },
 *     { label: 'Forward', shortcut: '⌘]', inset: true, disabled: true },
 *     { label: 'Reload', shortcut: '⌘R', inset: true },
 *     { type: 'separator' },
 *     { type: 'checkbox', label: 'Show Bookmarks Bar', checked: true, shortcut: '⌘⇧B' },
 *     { type: 'checkbox', label: 'Show Full URLs' },
 *   ]}
 * />
 *
 * @example
 * // With submenus and radio groups
 * <ContextMenu
 *   trigger={<div className="border rounded p-4">Right-click me</div>}
 *   items={[
 *     { label: 'Cut', shortcut: '⌘X' },
 *     { label: 'Copy', shortcut: '⌘C' },
 *     { label: 'Paste', shortcut: '⌘V' },
 *     { type: 'separator' },
 *     {
 *       type: 'submenu',
 *       label: 'More Tools',
 *       items: [
 *         { label: 'Save Page As...', shortcut: '⇧⌘S' },
 *         { label: 'Developer Tools' },
 *       ],
 *     },
 *     { type: 'separator' },
 *     {
 *       type: 'radio-group',
 *       label: 'People',
 *       value: 'pedro',
 *       inset: true,
 *       items: [
 *         { value: 'pedro', label: 'Pedro' },
 *         { value: 'colm', label: 'Colm' },
 *       ],
 *     },
 *   ]}
 * />
 *
 * @example
 * // With destructive variant
 * <ContextMenu
 *   trigger={<div className="border rounded p-4">Right-click me</div>}
 *   items={[
 *     { label: 'Edit' },
 *     { label: 'Duplicate' },
 *     { type: 'separator' },
 *     { label: 'Delete', variant: 'destructive' },
 *   ]}
 * />
 */
const ContextMenu: React.FC<ContextMenuProps> = ({
  trigger,
  items,
  triggerClassName,
  contentClassName,
  contentProps,
  triggerProps,
  ...props
}) => (
  <ContextMenuRoot {...props} data-qa="context-menu">
    <ContextMenuTrigger className={triggerClassName} {...triggerProps}>
      {trigger}
    </ContextMenuTrigger>
    <ContextMenuContent className={contentClassName} {...contentProps}>
      <ContextMenuGroup>{renderMenuEntries(items)}</ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenuRoot>
);
ContextMenu.displayName = 'ContextMenu';

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
