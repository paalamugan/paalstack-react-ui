import * as React from 'react';

import type { BoxPropsWithRef } from '@/layouts/Box';

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';

import { LuX as XIcon } from '@/icons/lu';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

import { Button } from '../Button';

// ─── Primitive components (Composition API) ───────────────────────────────────

/**
 * A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 */
const DialogRoot = ({ ...props }: DialogPrimitive.Root.Props) => <DialogPrimitive.Root data-slot="dialog" {...props} />;
DialogRoot.displayName = 'DialogRoot';

const DialogTrigger = ({ ...props }: DialogPrimitive.Trigger.Props) => (
  <DialogPrimitive.Trigger data-slot="dialog-trigger" data-qa="dialog-trigger" {...props} />
);
DialogTrigger.displayName = 'DialogTrigger';

const DialogPortal = ({ ...props }: DialogPrimitive.Portal.Props) => (
  <DialogPrimitive.Portal data-slot="dialog-portal" data-qa="dialog-portal" {...props} />
);
DialogPortal.displayName = 'DialogPortal';

const DialogClose = ({ ...props }: DialogPrimitive.Close.Props) => (
  <DialogPrimitive.Close data-slot="dialog-close" data-qa="dialog-close" {...props} />
);
DialogClose.displayName = 'DialogClose';

const DialogOverlay = ({ className, ...props }: DialogPrimitive.Backdrop.Props) => (
  <DialogPrimitive.Backdrop
    data-slot="dialog-overlay"
    data-qa="dialog-overlay"
    className={cn(
      'fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0',
      className,
    )}
    {...props}
  />
);
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = ({
  className,
  children,
  onClose,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  showCloseButton?: boolean;
}) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Popup
      data-slot="dialog-content"
      data-qa="dialog-content"
      className={cn(
        'fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 text-sm ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogClose
          data-slot="dialog-close"
          data-qa="dialog-close"
          onClick={onClose}
          render={
            <Button variant="ghost" className="absolute top-2 right-2" size="icon-sm">
              <XIcon />
              <span className="sr-only">Close</span>
            </Button>
          }
        />
      )}
    </DialogPrimitive.Popup>
  </DialogPortal>
);
DialogContent.displayName = 'DialogContent';

const DialogHeader: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box data-slot="dialog-header" data-qa="dialog-header" className={cn('flex flex-col gap-2', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter: React.FC<BoxPropsWithRef<'div', { showCloseButton?: boolean }>> = ({
  className,
  showCloseButton = false,
  children,
  ...props
}) => (
  <Box
    data-slot="dialog-footer"
    data-qa="dialog-footer"
    className={cn(
      '-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end',
      className,
    )}
    {...props}
  >
    {children}
    {showCloseButton && <DialogClose render={<Button variant="outline">Close</Button>} />}
  </Box>
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = ({ className, ...props }: DialogPrimitive.Title.Props) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    data-qa="dialog-title"
    className={cn('text-base leading-none font-medium', className)}
    {...props}
  />
);
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = ({ className, ...props }: DialogPrimitive.Description.Props) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    data-qa="dialog-description"
    className={cn(
      'text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
      className,
    )}
    {...props}
  />
);
DialogDescription.displayName = 'DialogDescription';

// ─── Props API (Compound Component) ──────────────────────────────────────────

export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  /**
   * The trigger content of the dialog that will open the dialog when clicked. (Optional)
   */
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * The trigger className of the dialog.
   */
  triggerClassName?: string;
  /**
   * The content of the dialog.
   */
  contentClassName?: string;
  /**
   * The header content of the dialog.
   */
  header?: {
    /**
     * The title content of the dialog.
     */
    title?: React.ReactNode;
    /**
     * The description content of the dialog.
     */
    description?: React.ReactNode;
    /**
     * The className of the header content. (Optional)
     */
    className?: string;
  };
  /**
   * The footer content of the dialog.
   */
  footer?: React.ReactNode;
  /**
   * The props for the dialog content.
   */
  dialogContentProps?: React.ComponentPropsWithoutRef<typeof DialogContent>;
  /**
   * The props for the dialog header.
   */
  dialogHeaderProps?: React.ComponentPropsWithoutRef<typeof DialogHeader>;
  /**
   * The props for the dialog footer.
   */
  dialogFooterProps?: React.ComponentPropsWithoutRef<typeof DialogFooter>;
}

/**
 * Dialog Component
 *
 * A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 * Perfect for modals, confirmations, forms, and important information.
 *
 * @example
 * // Basic usage
 * import { Dialog, Button } from '@paalstack/react-ui';
 *
 * <Dialog
 *   trigger={<Button>Open Dialog</Button>}
 *   header={{ title: "Dialog Title", description: "Dialog description" }}
 * >
 *   <p>Dialog content goes here</p>
 * </Dialog>
 *
 * @example
 * // Controlled dialog
 * const [open, setOpen] = useState(false);
 *
 * <Dialog
 *   open={open}
 *   onOpenChange={setOpen}
 *   header={{ title: "Controlled Dialog" }}
 * >
 *   <p>This is a controlled dialog</p>
 * </Dialog>
 *
 * <Button onClick={() => setOpen(true)}>Open Dialog</Button>
 *
 * @example
 * // With footer (actions)
 * const [open, setOpen] = useState(false);
 *
 * <Dialog
 *   open={open}
 *   onOpenChange={setOpen}
 *   header={{
 *     title: "Confirm Action",
 *     description: "Are you sure you want to proceed?"
 *   }}
 *   footer={
 *     <>
 *       <Button variant="ghost" onClick={() => setOpen(false)}>
 *         Cancel
 *       </Button>
 *       <Button onClick={() => {  setOpen(false); }}>
 *         Confirm
 *       </Button>
 *     </>
 *   }
 * >
 *   <p>This action cannot be undone.</p>
 * </Dialog>
 *
 * @example
 * // Without close button
 * <Dialog
 *   trigger={<Button>Open</Button>}
 *   header={{ title: "Important Message" }}
 *   dialogContentProps={{ showCloseButton: false }}
 *   footer={<Button onClick={() => {}}>I Understand</Button>}
 * >
 *   <p>This dialog requires your acknowledgment.</p>
 * </Dialog>
 *
 * @example
 * // Using composition with DialogRoot, DialogTrigger, DialogContent
 * import { DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@paalstack/react-ui';
 *
 * <DialogRoot>
 *   <DialogTrigger render={<Button>Open</Button>} />
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Custom Dialog</DialogTitle>
 *       <DialogDescription>Full control over dialog structure</DialogDescription>
 *     </DialogHeader>
 *     <div className="py-4">
 *       Dialog content here
 *     </div>
 *     <DialogFooter>
 *       <Button>Save</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </DialogRoot>
 */
const Dialog: React.FC<DialogProps> = ({
  children,
  trigger,
  triggerClassName,
  header,
  contentClassName,
  footer,
  dialogContentProps,
  dialogHeaderProps,
  dialogFooterProps,
  ...props
}) => {
  return (
    <DialogRoot data-qa="dialog" {...props}>
      {trigger && React.isValidElement(trigger) && (
        <DialogTrigger
          render={React.cloneElement(
            trigger as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
            {
              className: cn(triggerClassName, (trigger as React.ReactElement<{ className?: string }>).props.className),
              'data-qa': 'dialog-trigger',
            } as React.HTMLAttributes<HTMLElement>,
          )}
        />
      )}
      <DialogContent
        data-qa="dialog-content"
        {...dialogContentProps}
        className={cn(contentClassName, dialogContentProps?.className)}
      >
        {header && (
          <DialogHeader {...dialogHeaderProps} className={cn(header.className, dialogHeaderProps?.className)}>
            {header.title && <DialogTitle>{header.title}</DialogTitle>}
            <DialogDescription>{header.description}</DialogDescription>
          </DialogHeader>
        )}
        {children}
        {footer && <DialogFooter {...dialogFooterProps}>{footer}</DialogFooter>}
      </DialogContent>
    </DialogRoot>
  );
};
Dialog.displayName = 'Dialog';

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
};
