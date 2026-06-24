import * as React from 'react';

import type { BoxProps } from '@/layouts/Box';
import type { ComponentWithAs } from '@/shared/types';

import { Popover as PopoverPrimitive } from '@base-ui/react/popover';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

// ─── Primitive components (Composition API) ───────────────────────────────────

const PopoverRoot = ({ ...props }: PopoverPrimitive.Root.Props) => (
  <PopoverPrimitive.Root data-slot="popover" {...props} />
);
PopoverRoot.displayName = 'PopoverRoot';

const PopoverTrigger = ({ ...props }: PopoverPrimitive.Trigger.Props) => (
  <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
);
PopoverTrigger.displayName = 'PopoverTrigger';

const PopoverContent = ({
  className,
  align = 'center',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 4,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<PopoverPrimitive.Positioner.Props, 'align' | 'alignOffset' | 'side' | 'sideOffset'>) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Positioner
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      className="isolate z-50"
    >
      <PopoverPrimitive.Popup
        data-slot="popover-content"
        data-qa="popover-content"
        className={cn(
          'z-50 flex w-72 origin-(--transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Positioner>
  </PopoverPrimitive.Portal>
);
PopoverContent.displayName = 'PopoverContent';

const PopoverHeader: ComponentWithAs<'div', BoxProps> = ({ className, ...props }) => (
  <Box
    data-slot="popover-header"
    data-qa="popover-header"
    className={cn('flex flex-col gap-0.5 text-sm', className)}
    {...props}
  />
);
PopoverHeader.displayName = 'PopoverHeader';

const PopoverTitle = ({ className, ...props }: PopoverPrimitive.Title.Props) => (
  <PopoverPrimitive.Title
    data-slot="popover-title"
    data-qa="popover-title"
    className={cn('font-medium', className)}
    {...props}
  />
);
PopoverTitle.displayName = 'PopoverTitle';

const PopoverDescription = ({ className, ...props }: PopoverPrimitive.Description.Props) => (
  <PopoverPrimitive.Description
    data-slot="popover-description"
    data-qa="popover-description"
    className={cn('text-muted-foreground', className)}
    {...props}
  />
);
PopoverDescription.displayName = 'PopoverDescription';

// ─── Props API (Compound Component) ──────────────────────────────────────────

export interface PopoverProps extends Omit<PopoverPrimitive.Root.Props, 'children'> {
  /**
   * The trigger element for the popover.
   */
  trigger: React.ReactNode;
  /**
   * The content element for the popover.
   */
  content: React.ReactNode;
  /**
   * The className for the trigger element.
   */
  triggerClassName?: string;
  /**
   * The className for the content element.
   */
  contentClassName?: string;

  /**
   * The props for the trigger element.
   */
  triggerProps?: Omit<React.ComponentPropsWithoutRef<typeof PopoverTrigger>, 'children'>;
  /**
   * The props for the content element.
   */
  contentProps?: Omit<React.ComponentPropsWithoutRef<typeof PopoverContent>, 'children'>;
}

/**
 * Popover Component
 *
 * Displays rich content in a portal, triggered by a button.
 * Perfect for displaying additional information, forms, menus, and interactive content.
 *
 * @example
 * // Basic usage (Props API)
 * import { Popover, Button } from '@paalstack/react-ui';
 *
 * <Popover
 *   trigger={<Button>Open Popover</Button>}
 *   content={<div>Popover content goes here</div>}
 * />
 *
 * @example
 * // Using composition API
 * import {
 *   PopoverRoot, PopoverTrigger, PopoverContent,
 *   PopoverHeader, PopoverTitle, PopoverDescription,
 * } from '@paalstack/react-ui';
 *
 * <PopoverRoot>
 *   <PopoverTrigger render={<Button variant="outline" />}>
 *     Open
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <PopoverHeader>
 *       <PopoverTitle>Popover Title</PopoverTitle>
 *       <PopoverDescription>Description text</PopoverDescription>
 *     </PopoverHeader>
 *     <p>Additional content here</p>
 *   </PopoverContent>
 * </PopoverRoot>
 *
 * @example
 * // User info popover
 * <Popover
 *   trigger={
 *     <button className="flex items-center gap-2">
 *       <Avatar src="/user.jpg" fallback="JD" />
 *       <span>John Doe</span>
 *     </button>
 *   }
 *   content={
 *     <div className="space-y-2">
 *       <h4 className="font-semibold">John Doe</h4>
 *       <p className="text-sm text-muted-foreground">john@example.com</p>
 *       <Separator />
 *       <Button variant="ghost" size="sm" className="w-full justify-start">View Profile</Button>
 *       <Button variant="ghost" size="sm" className="w-full justify-start">Sign Out</Button>
 *     </div>
 *   }
 * />
 *
 * @example
 * // Controlled popover
 * const [open, setOpen] = useState(false);
 *
 * <Popover
 *   open={open}
 *   onOpenChange={setOpen}
 *   trigger={<Button>Open Controlled</Button>}
 *   content={
 *     <div>
 *       <p>Controlled popover</p>
 *       <Button onClick={() => setOpen(false)}>Close</Button>
 *     </div>
 *   }
 * />
 */
const Popover: React.FC<PopoverProps> = ({
  trigger,
  triggerClassName,
  contentClassName,
  content,
  triggerProps,
  contentProps,
  ...props
}) => (
  <PopoverRoot data-qa="popover" {...props}>
    {trigger && (
      <PopoverTrigger
        render={React.isValidElement(trigger) ? trigger : undefined}
        data-qa="popover-trigger"
        className={triggerClassName}
        {...triggerProps}
      >
        {React.isValidElement(trigger) ? null : trigger}
      </PopoverTrigger>
    )}
    {content && (
      <PopoverContent className={contentClassName} {...contentProps}>
        {content}
      </PopoverContent>
    )}
  </PopoverRoot>
);
Popover.displayName = 'Popover';

export { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverRoot, PopoverTitle, PopoverTrigger };
