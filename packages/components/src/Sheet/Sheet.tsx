import * as React from 'react';

import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';

import { LuX as XIcon } from '@/icons/lu';
import { cn } from '@/shared/lib';

import { Button } from '../Button';

const SheetRoot = SheetPrimitive.Root;

const SheetTrigger = ({ ...props }: SheetPrimitive.Trigger.Props) => (
  <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
);
SheetTrigger.displayName = 'SheetTrigger';

const SheetClose = ({ ...props }: SheetPrimitive.Close.Props) => (
  <SheetPrimitive.Close data-slot="sheet-close" {...props} />
);
SheetClose.displayName = 'SheetClose';

const SheetPortal = ({ ...props }: SheetPrimitive.Portal.Props) => (
  <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
);
SheetPortal.displayName = 'SheetPortal';

const SheetOverlay = ({ className, ...props }: SheetPrimitive.Backdrop.Props) => (
  <SheetPrimitive.Backdrop
    data-slot="sheet-overlay"
    data-qa="sheet-overlay"
    className={cn(
      'fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 supports-backdrop-filter:backdrop-blur-xs data-starting-style:opacity-0 data-ending-style:opacity-0',
      className,
    )}
    {...props}
  />
);
SheetOverlay.displayName = 'SheetOverlay';

const SheetContent = ({
  side = 'right',
  showCloseButton = true,
  className,
  children,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: 'top' | 'right' | 'bottom' | 'left';
  showCloseButton?: boolean;
}) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Popup
      data-slot="sheet-content"
      data-qa="sheet-content"
      data-side={side}
      className={cn(
        'fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-starting-style:opacity-0 data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-ending-style:opacity-0 data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=top]:data-ending-style:translate-y-[-2.5rem]',
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <SheetPrimitive.Close
          data-slot="sheet-close"
          data-qa="sheet-close"
          render={
            <Button variant="ghost" size="icon-sm" className="absolute top-3 right-3">
              <XIcon />
              <span className="sr-only">Close</span>
            </Button>
          }
        />
      )}
    </SheetPrimitive.Popup>
  </SheetPortal>
);
SheetContent.displayName = 'SheetContent';

const SheetHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="sheet-header"
    data-qa="sheet-header"
    className={cn('flex flex-col gap-0.5 p-4', className)}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    data-slot="sheet-footer"
    data-qa="sheet-footer"
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = ({ className, ...props }: SheetPrimitive.Title.Props) => (
  <SheetPrimitive.Title
    data-slot="sheet-title"
    data-qa="sheet-title"
    className={cn('text-base font-medium text-foreground', className)}
    {...props}
  />
);
SheetTitle.displayName = 'SheetTitle';

const SheetDescription = ({ className, ...props }: SheetPrimitive.Description.Props) => (
  <SheetPrimitive.Description
    data-slot="sheet-description"
    data-qa="sheet-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
);
SheetDescription.displayName = 'SheetDescription';

interface SheetProps extends React.ComponentProps<typeof SheetRoot> {
  /**
   * The trigger element that will open the sheet
   */
  trigger: React.ReactNode;
  /**
   * The header of the sheet, title represents the main title and description is optional
   */
  header: {
    title: React.ReactNode;
    description?: React.ReactNode;
  };
  /**
   * The content of the sheet (usually a form or a list)
   */
  children?: React.ReactNode;
  /**
   * The footer of the sheet, primaryAction is the main action and secondaryAction is optional
   * primaryAction is usually a submit button
   * secondaryAction is usually a cancel button
   */
  footer?: {
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
  };
  /**
   * The side of the screen the sheet will be displayed
   */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * The className of the sheet content, useful for adding padding
   */
  className?: string;

  triggerProps?: React.ComponentProps<typeof SheetTrigger>;
  contentProps?: React.ComponentProps<typeof SheetContent>;
  headerProps?: React.ComponentProps<typeof SheetHeader>;
  footerProps?: React.ComponentProps<typeof SheetFooter>;
  titleProps?: React.ComponentProps<typeof SheetTitle>;
  descriptionProps?: React.ComponentProps<typeof SheetDescription>;
  closeProps?: React.ComponentProps<typeof SheetClose>;
}

/**
 * Sheet Component
 *
 * A slide-out panel that extends from the edge of the screen.
 * Perfect for mobile menus, filters, settings panels, and side navigation.
 *
 * @example
 * // Basic usage
 * import { Sheet, Button } from '@paalstack/react-ui';
 *
 * <Sheet
 *   trigger={<Button>Open Sheet</Button>}
 *   header={{ title: "Sheet Title", description: "Sheet description" }}
 * >
 *   <p>Sheet content goes here</p>
 * </Sheet>
 *
 * @example
 * // Different sides
 * // Right side (default)
 * <Sheet
 *   trigger={<Button>Open Right</Button>}
 *   header={{ title: "Right Sheet" }}
 *   side="right"
 * >
 *   <p>Content</p>
 * </Sheet>
 *
 * // Left side
 * <Sheet
 *   trigger={<Button>Open Left</Button>}
 *   header={{ title: "Left Sheet" }}
 *   side="left"
 * >
 *   <p>Content</p>
 * </Sheet>
 *
 * // Top side
 * <Sheet
 *   trigger={<Button>Open Top</Button>}
 *   header={{ title: "Top Sheet" }}
 *   side="top"
 * >
 *   <p>Content</p>
 * </Sheet>
 *
 * // Bottom side
 * <Sheet
 *   trigger={<Button>Open Bottom</Button>}
 *   header={{ title: "Bottom Sheet" }}
 *   side="bottom"
 * >
 *   <p>Content</p>
 * </Sheet>
 *
 * @example
 * // With footer actions
 * <Sheet
 *   trigger={<Button>Open Form</Button>}
 *   header={{
 *     title: "Edit Profile",
 *     description: "Make changes to your profile here"
 *   }}
 *   footer={{
 *     secondaryAction: <Button variant="outline">Cancel</Button>,
 *     primaryAction: <Button>Save Changes</Button>
 *   }}
 * >
 *   <div className="space-y-4">
 *     <Input label="Name" />
 *     <Input label="Email" type="email" />
 *   </div>
 * </Sheet>
 *
 * @example
 * // Mobile navigation menu
 * <Sheet
 *   trigger={<Button variant="ghost"><MenuIcon /></Button>}
 *   header={{ title: "Menu" }}
 *   side="left"
 * >
 *   <nav className="space-y-2">
 *     <a href="/" className="block p-2 hover:bg-accent rounded">Home</a>
 *     <a href="/about" className="block p-2 hover:bg-accent rounded">About</a>
 *     <a href="/services" className="block p-2 hover:bg-accent rounded">Services</a>
 *     <a href="/contact" className="block p-2 hover:bg-accent rounded">Contact</a>
 *   </nav>
 * </Sheet>
 *
 * @example
 * // Filters panel
 * <Sheet
 *   trigger={
 *     <Button variant="outline">
 *       <FilterIcon className="mr-2" />
 *       Filters
 *     </Button>
 *   }
 *   header={{ title: "Filter Options" }}
 *   footer={{
 *     secondaryAction: <Button variant="ghost" onClick={clearFilters}>Clear All</Button>,
 *     primaryAction: <Button onClick={applyFilters}>Apply Filters</Button>
 *   }}
 * >
 *   <div className="space-y-4">
 *     <Select label="Category" options={categories} />
 *     <Input label="Min Price" type="number" />
 *     <Input label="Max Price" type="number" />
 *     <Checkbox label="In Stock Only" />
 *   </div>
 * </Sheet>
 *
 * @example
 * // Shopping cart
 * <Sheet
 *   trigger={
 *     <Button variant="outline">
 *       <ShoppingCartIcon className="mr-2" />
 *       Cart ({cartItems.length})
 *     </Button>
 *   }
 *   header={{
 *     title: "Shopping Cart",
 *     description: `${cartItems.length} items in your cart`
 *   }}
 *   footer={{
 *     secondaryAction: <Button variant="outline" onClick={() => navigate('/cart')}>View Cart</Button>,
 *     primaryAction: <Button onClick={handleCheckout}>Checkout</Button>
 *   }}
 * >
 *   <div className="space-y-4">
 *     {cartItems.map(item => (
 *       <CartItem key={item.id} item={item} />
 *     ))}
 *   </div>
 * </Sheet>
 *
 * @example
 * // Controlled sheet
 * const [open, setOpen] = useState(false);
 *
 * <Sheet
 *   open={open}
 *   onOpenChange={setOpen}
 *   trigger={<Button>Open Controlled Sheet</Button>}
 *   header={{ title: "Controlled Sheet" }}
 * >
 *   <p>Content</p>
 * </Sheet>
 *
 * <Button onClick={() => setOpen(true)}>Open Externally</Button>
 *
 * @example
 * // Settings panel
 * <Sheet
 *   trigger={<Button>Settings</Button>}
 *   header={{ title: "Settings" }}
 *   side="right"
 * >
 *   <div className="space-y-6">
 *     <div>
 *       <h3 className="font-medium mb-2">Appearance</h3>
 *       <div className="space-y-2">
 *         <div className="flex items-center justify-between">
 *           <span>Dark Mode</span>
 *           <Switch checked={darkMode} onCheckedChange={setDarkMode} />
 *         </div>
 *       </div>
 *     </div>
 *     <Separator />
 *     <div>
 *       <h3 className="font-medium mb-2">Notifications</h3>
 *       <div className="space-y-2">
 *         <Checkbox label="Email notifications" />
 *         <Checkbox label="Push notifications" />
 *       </div>
 *     </div>
 *   </div>
 * </Sheet>
 *
 * @example
 * // Using composition for advanced layouts
 * import { SheetRoot, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@paalstack/react-ui'
 *
 * <SheetRoot>
 *   <SheetTrigger asChild>
 *     <Button>Open Custom Sheet</Button>
 *   </SheetTrigger>
 *   <SheetContent side="right">
 *     <SheetHeader>
 *       <SheetTitle>Custom Layout</SheetTitle>
 *       <SheetDescription>Full control over sheet structure</SheetDescription>
 *     </SheetHeader>
 *     <div className="my-4">
 *       Custom content with complete control
 *     </div>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button variant="outline">Close</Button>
 *       </SheetClose>
 *       <Button>Save</Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </SheetRoot>
 *
 * @example
 * // Product details
 * <Sheet
 *   trigger={<Button>View Details</Button>}
 *   header={{
 *     title: product.name,
 *     description: product.category
 *   }}
 *   footer={{
 *     primaryAction: <Button onClick={addToCart}>Add to Cart - ${product.price}</Button>
 *   }}
 * >
 *   <div className="space-y-4">
 *     <img src={product.image} alt={product.name} className="w-full rounded" />
 *     <p>{product.description}</p>
 *     <div>
 *       <h4 className="font-medium">Specifications</h4>
 *       <ul className="mt-2 space-y-1 text-sm">
 *         {product.specs.map(spec => <li key={spec}>{spec}</li>)}
 *       </ul>
 *     </div>
 *   </div>
 * </Sheet>
 *
 * @example
 * // Notifications panel
 * <Sheet
 *   trigger={
 *     <Button variant="ghost" className="relative">
 *       <BellIcon />
 *       {unreadCount > 0 && (
 *         <Badge className="absolute -top-1 -right-1" size="sm">{unreadCount}</Badge>
 *       )}
 *     </Button>
 *   }
 *   header={{ title: "Notifications" }}
 *   side="right"
 * >
 *   <div className="space-y-2">
 *     {notifications.map(notification => (
 *       <NotificationItem key={notification.id} notification={notification} />
 *     ))}
 *   </div>
 * </Sheet>
 *
 * @example
 * // Custom styling
 * <Sheet
 *   trigger={<Button>Open Styled Sheet</Button>}
 *   header={{ title: "Custom Styled" }}
 *   className="w-full sm:max-w-md"
 * >
 *   <p>Sheet with custom width</p>
 * </Sheet>
 */
export const Sheet: React.FC<SheetProps> = ({
  side = 'right',
  trigger,
  header,
  footer,
  children,
  className,
  triggerProps,
  contentProps,
  headerProps,
  footerProps,
  titleProps,
  descriptionProps,
  closeProps,
  ...props
}) => {
  return (
    <SheetRoot {...props}>
      {React.isValidElement(trigger) && <SheetTrigger render={trigger as React.ReactElement} {...triggerProps} />}
      <SheetContent side={side} data-qa="sheet-content" className={className} {...contentProps}>
        <SheetHeader data-qa="sheet-header" {...headerProps}>
          <SheetTitle data-qa="sheet-title" {...titleProps}>
            {header.title}
          </SheetTitle>
          {header.description && (
            <SheetDescription data-qa="sheet-description" {...descriptionProps}>
              {header.description}
            </SheetDescription>
          )}
        </SheetHeader>
        {children}
        <SheetFooter className="my-4" data-qa="sheet-footer" {...footerProps}>
          {footer?.secondaryAction && React.isValidElement(footer.secondaryAction) && (
            <SheetClose render={footer.secondaryAction as React.ReactElement} data-qa="sheet-close" {...closeProps} />
          )}
          {footer?.primaryAction}
        </SheetFooter>
      </SheetContent>
    </SheetRoot>
  );
};

export { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetRoot, SheetTitle, SheetTrigger };
