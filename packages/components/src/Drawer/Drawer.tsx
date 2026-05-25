import type { BoxPropsWithRef } from '@/layouts/Box';
import type * as React from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

/**
 * Drawer Component Family
 *
 * A drawer component for React built on top of Vaul by @emilkowalski.
 * Perfect for mobile-first experiences and side panels.
 *
 * Two APIs: use **DrawerRoot** with DrawerTrigger, DrawerContent, etc. for full control;
 * use **Drawer** with trigger, title, description, footer, and children for a single-component API.
 *
 * @example
 * // Prop-based API
 * import { Drawer, Button } from '@paalstack/react-ui';
 *
 * <Drawer
 *   trigger={<Button>Open</Button>}
 *   title="Are you absolutely sure?"
 *   description="This action cannot be undone."
 *   footer={
 *     <>
 *       <Button>Submit</Button>
 *       <DrawerClose><Button variant="outline">Cancel</Button></DrawerClose>
 *     </>
 *   }
 * >
 *   <p>Optional body content</p>
 * </Drawer>
 *
 * @example
 * // Compound API (full control)
 * import { DrawerRoot, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@paalstack/react-ui';
 *
 * <DrawerRoot>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Are you absolutely sure?</DrawerTitle>
 *       <DrawerDescription>This action cannot be undone.</DrawerDescription>
 *     </DrawerHeader>
 *     <DrawerFooter>
 *       <Button>Submit</Button>
 *       <DrawerClose><Button variant="outline">Cancel</Button></DrawerClose>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </DrawerRoot>
 *
 * @example
 * // Drawer with direction (sides)
 * <Drawer direction="right">
 *   <DrawerTrigger>Open Right</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Side Panel</DrawerTitle>
 *       <DrawerDescription>Content slides from the right.</DrawerDescription>
 *     </DrawerHeader>
 *   </DrawerContent>
 * </Drawer>
 *
 * @example
 * // Controlled drawer
 * const [open, setOpen] = useState(false);
 *
 * <Drawer open={open} onOpenChange={setOpen}>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Controlled Drawer</DrawerTitle>
 *     </DrawerHeader>
 *     <DrawerFooter>
 *       <Button onClick={() => setOpen(false)}>Close</Button>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 *
 * @example
 * // All directions
 * <Drawer direction="top">...</Drawer>
 * <Drawer direction="right">...</Drawer>
 * <Drawer direction="bottom">...</Drawer>
 * <Drawer direction="left">...</Drawer>
 *
 * @example
 * // Scrollable content
 * <Drawer>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Scrollable Content</DrawerTitle>
 *     </DrawerHeader>
 *     <div className="p-4 overflow-auto">
 *       ...Long content here...
 *     </div>
 *     <DrawerFooter>
 *       <Button>Submit</Button>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 *
 * @example
 * // With form
 * <Drawer>
 *   <DrawerTrigger>Edit Profile</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Edit Profile</DrawerTitle>
 *       <DrawerDescription>Make changes to your profile.</DrawerDescription>
 *     </DrawerHeader>
 *     <form onSubmit={handleSubmit}>
 *       <div className="p-4 space-y-4">
 *         <Input label="Name" />
 *         <Input label="Email" />
 *       </div>
 *       <DrawerFooter>
 *         <Button type="submit">Save changes</Button>
 *         <DrawerClose>
 *           <Button variant="outline">Cancel</Button>
 *         </DrawerClose>
 *       </DrawerFooter>
 *     </form>
 *   </DrawerContent>
 * </Drawer>
 *
 * @example
 * // Nested drawers
 * <Drawer>
 *   <DrawerTrigger>Open Parent</DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Parent Drawer</DrawerTitle>
 *     </DrawerHeader>
 *     <div className="p-4">
 *       <Drawer>
 *         <DrawerTrigger>Open Child</DrawerTrigger>
 *         <DrawerContent>
 *           <DrawerHeader>
 *             <DrawerTitle>Child Drawer</DrawerTitle>
 *           </DrawerHeader>
 *         </DrawerContent>
 *       </Drawer>
 *     </div>
 *   </DrawerContent>
 * </Drawer>
 *
 * @example
 * // Responsive dialog/drawer
 * const [open, setOpen] = useState(false);
 * const isDesktop = useMediaQuery("(min-width: 768px)");
 *
 * if (isDesktop) {
 *   return (
 *     <Dialog open={open} onOpenChange={setOpen}>
 *       <DialogTrigger>Edit Profile</DialogTrigger>
 *       <DialogContent>...</DialogContent>
 *     </Dialog>
 *   );
 * }
 *
 * return (
 *   <Drawer open={open} onOpenChange={setOpen}>
 *     <DrawerTrigger>Edit Profile</DrawerTrigger>
 *     <DrawerContent>...</DrawerContent>
 *   </Drawer>
 * );
 *
 * @tip Use direction prop to control which side the drawer opens from
 * @tip Default direction is 'bottom' (mobile-first)
 * @tip Drawer handles backdrop, overlay, and animations automatically
 * @tip DrawerClose can wrap any element to close the drawer
 * @tip Use controlled state for complex drawer interactions
 * @tip Combine with Dialog for responsive layouts
 * @tip Content is scrollable when it exceeds viewport height
 * @tip Footer stays visible at bottom during scroll
 */

/**
 * Root component for the compound Drawer API. Compose with DrawerTrigger, DrawerContent,
 * DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, and DrawerClose for full control.
 * For a simpler API, use the prop-based **Drawer** component with trigger, title, description, footer.
 *
 * @example
 * // Basic compound usage
 * import { DrawerRoot, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@paalstack/react-ui';
 * import { Button } from '@paalstack/react-ui';
 *
 * <DrawerRoot>
 *   <DrawerTrigger asChild>
 *     <Button>Open Drawer</Button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Are you absolutely sure?</DrawerTitle>
 *       <DrawerDescription>This action cannot be undone.</DrawerDescription>
 *     </DrawerHeader>
 *     <DrawerFooter>
 *       <Button>Submit</Button>
 *       <DrawerClose asChild>
 *         <Button variant="outline">Cancel</Button>
 *       </DrawerClose>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </DrawerRoot>
 *
 * @example
 * // With direction and controlled state
 * const [open, setOpen] = useState(false);
 *
 * <DrawerRoot open={open} onOpenChange={setOpen} direction="right">
 *   <DrawerTrigger asChild>
 *     <Button>Open Panel</Button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Side Panel</DrawerTitle>
 *       <DrawerDescription>Content slides from the right.</DrawerDescription>
 *     </DrawerHeader>
 *     <div className="p-4">Custom content here</div>
 *     <DrawerFooter>
 *       <DrawerClose asChild>
 *         <Button variant="outline">Close</Button>
 *       </DrawerClose>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </DrawerRoot>
 */
const DrawerRoot = ({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => {
  return <DrawerPrimitive.Root data-slot="drawer" data-qa="drawer" {...props} />;
};
DrawerRoot.displayName = 'DrawerRoot';

const DrawerTrigger = ({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" data-qa="drawer-trigger" {...props} />;
};

const DrawerPortal = ({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Portal>) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" data-qa="drawer-portal" {...props} />;
};

const DrawerClose = ({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" data-qa="drawer-close" {...props} />;
};

const DrawerOverlay = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      data-qa="drawer-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/10 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 supports-backdrop-filter:backdrop-blur-xs',
        className,
      )}
      {...props}
    />
  );
};

const DrawerContent = ({ className, children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>) => {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        data-qa="drawer-content"
        className={cn(
          'group/drawer-content fixed z-50 flex h-auto flex-col bg-background text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm',
          className,
        )}
        {...props}
      >
        <div className="mx-auto mt-4 hidden h-1 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

const DrawerHeader: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="drawer-header"
    data-qa="drawer-header"
    className={cn(
      'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left',
      className,
    )}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => (
  <Box
    data-slot="drawer-footer"
    data-qa="drawer-footer"
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      data-qa="drawer-title"
      className={cn('text-base font-medium text-foreground', className)}
      {...props}
    />
  );
};

const DrawerDescription = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Description>) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      data-qa="drawer-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
};

type DrawerRootProps = React.ComponentProps<typeof DrawerRoot>;

export type DrawerComponentProps = Omit<DrawerRootProps, 'children'> & {
  /** Trigger element that opens the drawer */
  trigger?: React.ReactNode;
  /** Title (renders DrawerTitle inside DrawerHeader) */
  title?: React.ReactNode;
  /** Description (renders DrawerDescription inside DrawerHeader) */
  description?: React.ReactNode;
  /** Footer content (e.g. buttons; renders DrawerFooter) */
  footer?: React.ReactNode;
  /** Main content (renders inside DrawerContent); also used for compound children when no trigger/title/description/footer */
  children?: React.ReactNode;
  /** Props for DrawerContent */
  contentProps?: React.ComponentProps<typeof DrawerContent>;
  /** Props for DrawerHeader */
  headerProps?: React.ComponentProps<typeof DrawerHeader>;
  /** Props for DrawerFooter */
  footerProps?: React.ComponentProps<typeof DrawerFooter>;
};

/**
 * Single-component Drawer that composes trigger, header, content, and footer via props.
 * Use DrawerRoot with DrawerTrigger, DrawerContent, etc. when you need full control (e.g. custom layout, DrawerClose).
 *
 * @example
 * // Basic prop-based drawer
 * import { Drawer, DrawerClose, Button } from '@paalstack/react-ui';
 *
 * <Drawer
 *   trigger={<Button>Open</Button>}
 *   title="Are you sure?"
 *   description="This action cannot be undone."
 *   footer={
 *     <>
 *       <Button>Submit</Button>
 *       <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
 *     </>
 *   }
 * >
 *   <p>Optional body content</p>
 * </Drawer>
 *
 * @example
 * // Drawer from the right
 * <Drawer
 *   direction="right"
 *   trigger={<Button>Open Panel</Button>}
 *   title="Side Panel"
 *   description="Content slides from the right."
 * >
 *   <div className="p-4">Panel content</div>
 * </Drawer>
 *
 * @example
 * // Controlled drawer (open/onOpenChange)
 * const [open, setOpen] = useState(false);
 *
 * <Drawer
 *   open={open}
 *   onOpenChange={setOpen}
 *   trigger={<Button>Edit</Button>}
 *   title="Edit Profile"
 *   footer={<Button onClick={() => setOpen(false)}>Save</Button>}
 * >
 *   <Input label="Name" />
 * </Drawer>
 *
 * @example
 * // With sub-component props
 * <Drawer
 *   trigger={<Button>Open</Button>}
 *   title="Custom Header"
 *   headerProps={{ className: "border-b" }}
 *   footerProps={{ className: "gap-4" }}
 * >
 *   Content
 * </Drawer>
 */
const Drawer: React.FC<DrawerComponentProps> = ({
  trigger,
  title,
  description,
  footer,
  contentProps,
  headerProps,
  footerProps,
  children,
  ...rootProps
}) => {
  const usePropsApi = !!trigger || !!title || !!description || !!footer;

  if (usePropsApi) {
    return (
      <DrawerRoot data-qa="drawer" {...(rootProps as DrawerRootProps)}>
        {!!trigger && (
          <DrawerTrigger data-qa="drawer-trigger" asChild>
            {trigger}
          </DrawerTrigger>
        )}
        <DrawerContent {...contentProps}>
          {(!!title || !!description) && (
            <DrawerHeader {...headerProps}>
              {!!title && <DrawerTitle>{title}</DrawerTitle>}
              {!!description && <DrawerDescription>{description}</DrawerDescription>}
            </DrawerHeader>
          )}
          {children}
          {!!footer && <DrawerFooter {...footerProps}>{footer}</DrawerFooter>}
        </DrawerContent>
      </DrawerRoot>
    );
  }

  return (
    <DrawerRoot data-qa="drawer" {...(rootProps as DrawerRootProps)}>
      {children}
    </DrawerRoot>
  );
};
Drawer.displayName = 'Drawer';

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
};
