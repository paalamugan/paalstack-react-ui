import * as React from 'react';

import type { BoxPropsWithRef } from '@/layouts/Box';
import type { CommandGroupList, CommandNoResultFoundProps } from './types';

import { Command as CommandPrimitive } from 'cmdk';

import { LuCheck as CheckIcon, LuSearch as SearchIcon } from '@/icons/lu';
import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';
import { cn } from '@/shared/lib';

import { DialogContent, DialogDescription, DialogHeader, DialogRoot, DialogTitle } from '../Dialog/Dialog';
import { InputGroup, InputGroupAddon } from '../InputGroup';

// ─── Primitive components (Composition API) ───────────────────────────────────

const CommandRoot = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive
    data-slot="command"
    data-qa="command-modal"
    className={cn(
      'flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground',
      className,
    )}
    {...props}
  />
);
CommandRoot.displayName = 'CommandRoot';

export interface CommandDialogProps extends React.ComponentProps<typeof DialogRoot> {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const CommandDialog = ({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  ...props
}: CommandDialogProps) => (
  <DialogRoot data-qa="command-dialog-root" {...props}>
    <DialogHeader className="sr-only">
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
    <DialogContent
      data-qa="command-dialog-content"
      className={cn('top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0', className)}
    >
      {children}
    </DialogContent>
  </DialogRoot>
);
CommandDialog.displayName = 'CommandDialog';

const CommandInput = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => (
  <Box data-slot="command-input-wrapper" className="p-1 pb-0">
    <InputGroup className="h-8 rounded-lg border-input/30 bg-input/30 shadow-none *:data-[slot=input-group-addon]:pl-2">
      <CommandPrimitive.Input
        data-slot="command-input"
        data-qa="command-input"
        className={cn('w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50', className)}
        {...props}
      />
      <InputGroupAddon>
        <SearchIcon className="size-4 shrink-0 opacity-50" />
      </InputGroupAddon>
    </InputGroup>
  </Box>
);
CommandInput.displayName = 'CommandInput';

const CommandList = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List
    data-slot="command-list"
    data-qa="command-list"
    className={cn('no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none', className)}
    {...props}
  />
);
CommandList.displayName = 'CommandList';

const CommandEmpty = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty
    data-slot="command-empty"
    data-qa="command-empty"
    className={cn('py-6 text-center text-sm', className)}
    {...props}
  />
);
CommandEmpty.displayName = 'CommandEmpty';

const CommandGroup = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group
    data-slot="command-group"
    data-qa="command-group"
    className={cn(
      'overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
);
CommandGroup.displayName = 'CommandGroup';

const CommandSeparator = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    data-slot="command-separator"
    data-qa="command-separator"
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
);
CommandSeparator.displayName = 'CommandSeparator';

const CommandLoading = ({ ...props }: React.ComponentProps<typeof CommandPrimitive.Loading>) => (
  <CommandPrimitive.Loading data-qa="command-loading" {...props} />
);
CommandLoading.displayName = 'CommandLoading';

const CommandItem = ({ className, children, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    data-slot="command-item"
    data-qa="command-item"
    className={cn(
      "group/command-item relative flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-muted data-[selected=true]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[selected=true]:*:[svg]:text-foreground",
      className,
    )}
    {...props}
  >
    {children}
    <CheckIcon className="ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
  </CommandPrimitive.Item>
);
CommandItem.displayName = 'CommandItem';

const CommandShortcut: React.FC<BoxPropsWithRef<'span'>> = ({ className, ...props }) => (
  <Box
    as="span"
    data-slot="command-shortcut"
    data-qa="command-shortcut"
    className={cn(
      'ml-auto text-xs tracking-widest text-muted-foreground group-data-[selected=true]/command-item:text-foreground',
      className,
    )}
    {...props}
  />
);
CommandShortcut.displayName = 'CommandShortcut';

const CommandNoResultFound: React.FC<CommandNoResultFoundProps> = ({
  optionsLength,
  emptyOptionMessage,
  emptyOptionContent,
  searchValue,
  initialSearchContent,
  ...props
}) => {
  if (optionsLength > 0) return null;
  if (!searchValue && initialSearchContent) {
    return typeof initialSearchContent === 'string' ? (
      <Box className="py-6 text-center text-sm" data-qa="command-initial-search-content">
        {initialSearchContent}
      </Box>
    ) : (
      initialSearchContent
    );
  }
  if (emptyOptionContent) return emptyOptionContent;
  return (
    <Box className="py-6 text-center text-sm" data-qa="command-no-result-found" {...props}>
      {emptyOptionMessage ?? `No results found${searchValue ? ` for "${searchValue}"` : ''}`}.
    </Box>
  );
};
CommandNoResultFound.displayName = 'CommandNoResultFound';

// ─── Props API (Compound Component) ──────────────────────────────────────────

export interface CommandProps extends Omit<CommandDialogProps, 'children'> {
  /**
   * Optional input options for the command input field
   */
  inputOptions?: React.ComponentPropsWithoutRef<typeof CommandInput>;
  /**
   * Optional content to display when no results are found
   */
  emptyResultContent?: React.ReactNode;
  /**
   * Optional groups to display in the command dialog
   */
  groups: CommandGroupList[];
}

/**
 * Command Component
 *
 * A fast, composable command menu for your application.
 * Perfect for keyboard-driven navigation, search, and quick actions (like Command+K menus).
 *
 * @example
 * // Props API — basic usage
 * import { Command } from '@paalstack/react-ui';
 *
 * const [open, setOpen] = useState(false);
 *
 * <Command
 *   open={open}
 *   onOpenChange={setOpen}
 *   groups={[
 *     {
 *       heading: 'Suggestions',
 *       items: [
 *         { label: 'Dashboard', onSelect: () => navigate('/dashboard') },
 *         { label: 'Profile', onSelect: () => navigate('/profile') },
 *         { label: 'Settings', onSelect: () => navigate('/settings') },
 *       ]
 *     }
 *   ]}
 * />
 *
 * @example
 * // Composition API
 * import {
 *   CommandDialog,
 *   CommandRoot,
 *   CommandInput,
 *   CommandList,
 *   CommandEmpty,
 *   CommandGroup,
 *   CommandItem,
 *   CommandShortcut,
 * } from '@paalstack/react-ui';
 *
 * <CommandDialog open={open} onOpenChange={setOpen}>
 *   <CommandRoot>
 *     <CommandInput placeholder="Type a command..." />
 *     <CommandList>
 *       <CommandEmpty>No results found.</CommandEmpty>
 *       <CommandGroup heading="Suggestions">
 *         <CommandItem onSelect={() => {}}>Calendar</CommandItem>
 *         <CommandItem onSelect={() => {}}>
 *           Search
 *           <CommandShortcut>⌘K</CommandShortcut>
 *         </CommandItem>
 *       </CommandGroup>
 *     </CommandList>
 *   </CommandRoot>
 * </CommandDialog>
 */
const Command: React.FC<CommandProps> = ({
  inputOptions,
  emptyResultContent = 'No results found.',
  groups,
  ...props
}) => {
  return (
    <CommandDialog {...props}>
      <CommandRoot>
        <CommandInput placeholder="Search..." {...inputOptions} />
        <CommandList>
          <CommandEmpty>{emptyResultContent}</CommandEmpty>
          {groups.map(({ items, ...group }, index) => (
            <React.Fragment key={group.heading}>
              <CommandGroup data-qa={`command-group-${index}`} {...group}>
                {items.map(({ icon, label, shortcut, ...item }, index) => (
                  <CommandItem key={index} {...item} id={`${group.heading} - ${index}`}>
                    {icon && (
                      <Text as="span" className="mr-2" data-qa="command-item-icon">
                        {icon}
                      </Text>
                    )}
                    <Text as="span" className="text-sm" data-qa={`command-item-label__${group.heading} - ${label}`}>
                      {label}
                    </Text>
                    {shortcut && <CommandShortcut data-qa="command-item-shortcut">{shortcut}</CommandShortcut>}
                  </CommandItem>
                ))}
              </CommandGroup>
              {index !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandRoot>
    </CommandDialog>
  );
};
Command.displayName = 'Command';

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandNoResultFound,
  CommandRoot,
  CommandSeparator,
  CommandShortcut,
};
