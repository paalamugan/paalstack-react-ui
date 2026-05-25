import * as React from 'react';

import type { BoxPropsWithRef } from '@/layouts/Box';

import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

import { Button } from '../Button/Button';

const AlertDialogRoot = <TPayload,>({ ...props }: AlertDialogPrimitive.Root.Props<TPayload>) => (
  <AlertDialogPrimitive.Root<TPayload> data-slot="alert-dialog" {...props} />
);
AlertDialogRoot.displayName = 'AlertDialogRoot';

const AlertDialogTrigger = ({ ...props }: AlertDialogPrimitive.Trigger.Props) => (
  <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" data-qa="alert-dialog-trigger" {...props} />
);
AlertDialogTrigger.displayName = 'AlertDialogTrigger';

const AlertDialogPortal = ({ ...props }: AlertDialogPrimitive.Portal.Props) => (
  <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" data-qa="alert-dialog-portal" {...props} />
);
AlertDialogPortal.displayName = 'AlertDialogPortal';

const AlertDialogOverlay = ({ className, ...props }: AlertDialogPrimitive.Backdrop.Props) => (
  <AlertDialogPrimitive.Backdrop
    data-slot="alert-dialog-overlay"
    data-qa="alert-dialog-overlay"
    className={cn(
      'fixed inset-0 isolate z-50 bg-black/10 duration-100 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 supports-backdrop-filter:backdrop-blur-xs',
      className,
    )}
    {...props}
  />
);
AlertDialogOverlay.displayName = 'AlertDialogOverlay';

const AlertDialogContent = ({
  className,
  size = 'default',
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: 'default' | 'sm';
}) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Popup
      data-slot="alert-dialog-content"
      data-qa="alert-dialog-content"
      data-size={size}
      className={cn(
        'group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 ring-1 ring-foreground/10 duration-100 outline-none data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm',
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
);
AlertDialogContent.displayName = 'AlertDialogContent';

const AlertDialogHeader: React.FC<BoxPropsWithRef> = ({ className, ...props }) => (
  <Box
    data-slot="alert-dialog-header"
    data-qa="alert-dialog-header"
    className={cn(
      'grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]',
      className,
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter: React.FC<BoxPropsWithRef> = ({ className, ...props }) => (
  <Box
    data-slot="alert-dialog-footer"
    data-qa="alert-dialog-footer"
    className={cn(
      '-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end',
      className,
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogMedia: React.FC<BoxPropsWithRef> = ({ className, ...props }) => (
  <Box
    data-slot="alert-dialog-media"
    data-qa="alert-dialog-media"
    className={cn(
      "mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
      className,
    )}
    {...props}
  />
);
AlertDialogMedia.displayName = 'AlertDialogMedia';

const AlertDialogTitle = ({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) => (
  <AlertDialogPrimitive.Title
    data-slot="alert-dialog-title"
    data-qa="alert-dialog-title"
    className={cn(
      'text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
      className,
    )}
    {...props}
  />
);
AlertDialogTitle.displayName = 'AlertDialogTitle';

const AlertDialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) => (
  <AlertDialogPrimitive.Description
    data-slot="alert-dialog-description"
    data-qa="alert-dialog-description"
    className={cn(
      'text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
      className,
    )}
    {...props}
  />
);
AlertDialogDescription.displayName = 'AlertDialogDescription';

const AlertDialogAction = ({ className, ...props }: React.ComponentProps<typeof Button>) => (
  <Button data-slot="alert-dialog-action" data-qa="alert-dialog-action" className={cn(className)} {...props} />
);
AlertDialogAction.displayName = 'AlertDialogAction';

const AlertDialogCancel = ({
  className,
  variant = 'outline',
  size = 'md',
  color,
  ...props
}: AlertDialogPrimitive.Close.Props & Pick<React.ComponentProps<typeof Button>, 'variant' | 'size' | 'color'>) => (
  <AlertDialogPrimitive.Close
    data-slot="alert-dialog-cancel"
    data-qa="alert-dialog-cancel"
    className={cn(className)}
    render={<Button variant={variant} size={size} color={color} />}
    {...props}
  />
);
AlertDialogCancel.displayName = 'AlertDialogCancel';

interface AlertDialogProps extends React.ComponentProps<typeof AlertDialogPrimitive.Root> {
  /**
   * The trigger element. Must be a `Button` or `IconButton`.
   */
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * The icon of the alert dialog.
   */
  icon?: React.ReactNode;
  /**
   * The header of the alert dialog.
   */
  header?: {
    /**
     * The title of the alert dialog.
     */
    title?: React.ReactNode;
    /**
     * The description of the alert dialog.
     */
    description?: React.ReactNode;
  };
  /**
   * The cancel button text.
   */
  cancelButtonText?: string;
  /**
   * The confirm button text.
   */
  confirmButtonText?: string;
  /**
   * The cancel button click handler.
   */
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * The confirm button click handler.
   */
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * The props for the cancel button.
   */
  cancelButtonProps?: React.ComponentProps<typeof AlertDialogCancel>;
  /**
   * The props for the confirm button.
   */
  confirmButtonProps?: React.ComponentProps<typeof AlertDialogAction>;
  /**
   * The size of the alert dialog content.
   */
  size?: 'default' | 'sm';

  dialogContentProps?: React.ComponentProps<typeof AlertDialogContent>;
  dialogHeaderProps?: React.ComponentProps<typeof AlertDialogHeader>;
  dialogFooterProps?: React.ComponentProps<typeof AlertDialogFooter>;
  dialogMediaProps?: React.ComponentProps<typeof AlertDialogMedia>;
  dialogTitleProps?: React.ComponentProps<typeof AlertDialogTitle>;
  dialogDescriptionProps?: React.ComponentProps<typeof AlertDialogDescription>;
}

/**
 * AlertDialog Component
 *
 * A modal dialog that interrupts the user with important content and expects a response.
 * Perfect for confirmations, destructive actions, and important decisions.
 *
 * @example
 * // Basic usage
 * import { AlertDialog, Button } from '@paalstack/react-ui';
 *
 * <AlertDialog
 *   trigger={<Button variant="outline">Open Alert</Button>}
 *   header={{
 *     title: "Are you sure?",
 *     description: "This action cannot be undone."
 *   }}
 *   onConfirm={() => console.log('Confirmed')}
 * />
 *
 * @example
 * // Delete confirmation
 * const [open, setOpen] = useState(false);
 *
 * <AlertDialog
 *   open={open}
 *   onOpenChange={setOpen}
 *   trigger={<Button variant="solid" color="danger">Delete</Button>}
 *   header={{
 *     title: "Delete Item",
 *     description: "Are you sure you want to delete this item? This action cannot be undone."
 *   }}
 *   icon={<AlertTriangleIcon className="size-6 text-danger" />}
 *   cancelButtonText="Cancel"
 *   confirmButtonText="Delete"
 *   onCancel={() => setOpen(false)}
 *   onConfirm={() => {
 *     handleDelete();
 *     setOpen(false);
 *   }}
 *   confirmButtonProps={{
 *     variant: 'danger',
 *     className: 'bg-danger text-danger-foreground'
 *   }}
 * />
 *
 * @example
 * // Account deletion warning
 * <AlertDialog
 *   trigger={<Button color="danger">Delete Account</Button>}
 *   header={{
 *     title: "Delete Account",
 *     description: "This will permanently delete your account and all associated data. This action cannot be undone."
 *   }}
 *   icon={<TrashIcon className="size-6 text-danger" />}
 *   cancelButtonText="Keep Account"
 *   confirmButtonText="Yes, Delete My Account"
 *   onConfirm={handleAccountDeletion}
 *   confirmButtonProps={{ variant: 'danger' }}
 * >
 *   <div className="my-4 p-3 bg-danger/10 border border-danger/20 rounded text-sm">
 *     <strong>Warning:</strong> You will lose access to all your projects, files, and settings.
 *   </div>
 * </AlertDialog>
 *
 * @example
 * // Using composition for custom layouts
 * import {
 *   AlertDialogRoot,
 *   AlertDialogTrigger,
 *   AlertDialogContent,
 *   AlertDialogHeader,
 *   AlertDialogTitle,
 *   AlertDialogDescription,
 *   AlertDialogFooter,
 *   AlertDialogAction,
 *   AlertDialogCancel,
 * } from '@paalstack/react-ui';
 *
 * <AlertDialogRoot>
 *   <AlertDialogTrigger asChild>
 *     <Button>Open</Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Custom Layout</AlertDialogTitle>
 *       <AlertDialogDescription>
 *         Full control over the alert dialog structure
 *       </AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <div className="my-4">
 *       Custom content here
 *     </div>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction>Confirm</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialogRoot>
 */
const AlertDialog: React.FC<AlertDialogProps> = ({
  trigger,
  header,
  children,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Submit',
  onCancel,
  onConfirm,
  cancelButtonProps,
  confirmButtonProps,
  icon,
  size,
  dialogContentProps,
  dialogHeaderProps,
  dialogFooterProps,
  dialogMediaProps,
  dialogTitleProps,
  dialogDescriptionProps,
  ...props
}) => (
  <AlertDialogRoot data-qa="alert-dialog" {...props}>
    {!!trigger && React.isValidElement(trigger) && <AlertDialogTrigger render={trigger} />}
    <AlertDialogContent size={size} {...dialogContentProps}>
      <AlertDialogHeader {...dialogHeaderProps}>
        {icon && (
          <AlertDialogMedia data-qa="alert-dialog-icon" {...dialogMediaProps}>
            {icon}
          </AlertDialogMedia>
        )}
        {header?.title && <AlertDialogTitle {...dialogTitleProps}>{header.title}</AlertDialogTitle>}
        {header?.description && (
          <AlertDialogDescription {...dialogDescriptionProps}>{header.description}</AlertDialogDescription>
        )}
      </AlertDialogHeader>
      {children}
      <AlertDialogFooter {...dialogFooterProps}>
        <AlertDialogCancel {...cancelButtonProps} onClick={onCancel}>
          {cancelButtonText}
        </AlertDialogCancel>
        <AlertDialogAction {...confirmButtonProps} onClick={onConfirm}>
          {confirmButtonText}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogRoot>
);
AlertDialog.displayName = 'AlertDialog';

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
};
