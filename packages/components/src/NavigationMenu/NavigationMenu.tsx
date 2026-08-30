import type * as React from 'react';
import type {
  NavigationMenuDropdownItem,
  NavigationMenuItemType,
  NavigationMenuLinkItem,
  NavigationMenuProps,
} from './types';

import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { cva } from 'class-variance-authority';

import { RxChevronDown as ChevronDownIcon } from '@/icons/rx';
import { cn } from '@/shared/lib';

/**
 * NavigationMenuRoot Component
 *
 * A collection of links for navigating websites with dropdown submenus.
 * Perfect for header navigation, main menus, and site-wide navigation.
 *
 * @example
 * // Basic usage
 * import { NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@paalstack/react-ui';
 *
 * <NavigationMenuRoot>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuLink href="/">Home</NavigationMenuLink>
 *     </NavigationMenuItem>
 *     <NavigationMenuItem>
 *       <NavigationMenuLink href="/about">About</NavigationMenuLink>
 *     </NavigationMenuItem>
 *     <NavigationMenuItem>
 *       <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenuRoot>
 *
 * @example
 * // With dropdown menu
 * <NavigationMenuRoot>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Products</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid w-[400px] gap-3 p-4">
 *           <NavigationMenuListItem href="/products/category1" title="Category 1">
 *             Description for category 1
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/products/category2" title="Category 2">
 *             Description for category 2
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenuRoot>
 *
 * @example
 * // Full website navigation
 * <NavigationMenuRoot>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
 *         Home
 *       </NavigationMenuLink>
 *     </NavigationMenuItem>
 *
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Products</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
 *           <NavigationMenuListItem href="/products/laptops" title="Laptops">
 *             High-performance laptops for work and gaming
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/products/phones" title="Smartphones">
 *             Latest smartphones with advanced features
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/products/tablets" title="Tablets">
 *             Versatile tablets for work and entertainment
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/products/accessories" title="Accessories">
 *             Essential accessories for your devices
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid w-[400px] gap-3 p-4">
 *           <NavigationMenuListItem href="/docs" title="Documentation">
 *             Learn how to use our products
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/blog" title="Blog">
 *             Read our latest articles and updates
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/support" title="Support">
 *             Get help from our support team
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *
 *     <NavigationMenuItem>
 *       <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
 *         Contact
 *       </NavigationMenuLink>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenuRoot>
 *
 * @example
 * // With featured content
 * <NavigationMenuRoot>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid gap-3 p-6 md:w-[600px] md:grid-cols-2">
 *           <li className="row-span-3">
 *             <NavigationMenuLink asChild>
 *               <a
 *                 href="/featured"
 *                 className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-hidden"
 *               >
 *                 <div className="mb-2 mt-4 text-lg font-medium">
 *                   Featured Solution
 *                 </div>
 *                 <p className="text-sm leading-tight text-muted-foreground">
 *                   Discover our flagship product with advanced features
 *                 </p>
 *               </a>
 *             </NavigationMenuLink>
 *           </li>
 *           <NavigationMenuListItem href="/solutions/1" title="Solution 1">
 *             Enterprise-grade solution
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/solutions/2" title="Solution 2">
 *             Small business solution
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/solutions/3" title="Solution 3">
 *             Individual solution
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenuRoot>
 *
 * @example
 * // Documentation site navigation
 * <NavigationMenuRoot>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid w-[300px] gap-2 p-2">
 *           <NavigationMenuListItem href="/docs/installation" title="Installation">
 *             How to install the library
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/docs/quickstart" title="Quick Start">
 *             Get up and running in minutes
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Components</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid w-[500px] gap-2 p-4 md:grid-cols-2">
 *           <NavigationMenuListItem href="/docs/button" title="Button">
 *             Interactive button component
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/docs/input" title="Input">
 *             Form input field
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/docs/select" title="Select">
 *             Dropdown selection
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/docs/dialog" title="Dialog">
 *             Modal dialog window
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenuRoot>
 *
 * @example
 * // E-commerce site navigation
 * <NavigationMenuRoot>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
 *           <NavigationMenuListItem href="/shop/mens" title="Men's">
 *             Browse men's collection
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/shop/womens" title="Women's">
 *             Browse women's collection
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/shop/kids" title="Kids">
 *             Browse kids' collection
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/shop/accessories" title="Accessories">
 *             Browse accessories
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *
 *     <NavigationMenuItem>
 *       <NavigationMenuLink href="/sale" className={navigationMenuTriggerStyle()}>
 *         Sale
 *       </NavigationMenuLink>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenuRoot>
 *
 * @example
 * // With icons
 * <NavigationMenuRoot>
 *   <NavigationMenuList>
 *     <NavigationMenuItem>
 *       <NavigationMenuTrigger>
 *         <LayoutIcon className="mr-2 size-4" />
 *         Features
 *       </NavigationMenuTrigger>
 *       <NavigationMenuContent>
 *         <ul className="grid w-[400px] gap-3 p-4">
 *           <NavigationMenuListItem href="/features/analytics" title="Analytics">
 *             Track your performance metrics
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/features/reports" title="Reports">
 *             Generate detailed reports
 *           </NavigationMenuListItem>
 *         </ul>
 *       </NavigationMenuContent>
 *     </NavigationMenuItem>
 *   </NavigationMenuList>
 * </NavigationMenuRoot>
 *
 * @tip NavigationMenuListItem is a helper component for consistent link styling with title and description
 * @tip Use navigationMenuTriggerStyle() to apply consistent trigger styling to regular links
 */
const NavigationMenuRoot = ({
  align = 'start',
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> &
  Pick<NavigationMenuPrimitive.Positioner.Props, 'align'>) => (
  <NavigationMenuPrimitive.Root
    data-slot="navigation-menu"
    data-qa="navigation-menu"
    className={cn('group/navigation-menu relative flex max-w-max flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuPositioner align={align} />
  </NavigationMenuPrimitive.Root>
);
NavigationMenuRoot.displayName = 'NavigationMenuRoot';

const NavigationMenuList = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) => (
  <NavigationMenuPrimitive.List
    data-slot="navigation-menu-list"
    data-qa="navigation-menu-list"
    className={cn('group flex flex-1 list-none items-center justify-center gap-0', className)}
    {...props}
  />
);
NavigationMenuList.displayName = 'NavigationMenuList';

const NavigationMenuItem = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) => (
  <NavigationMenuPrimitive.Item
    data-slot="navigation-menu-item"
    data-qa="navigation-menu-item"
    className={cn('relative', className)}
    {...props}
  />
);
NavigationMenuItem.displayName = 'NavigationMenuItem';

const navigationMenuTriggerStyle = cva(
  'bg-background hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center outline-none disabled:pointer-events-none',
);

const NavigationMenuTrigger = ({ className, children, ...props }: NavigationMenuPrimitive.Trigger.Props) => (
  <NavigationMenuPrimitive.Trigger
    data-slot="navigation-menu-trigger"
    data-qa="navigation-menu-trigger"
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDownIcon
      className="relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180"
      aria-hidden="true"
      data-qa="navigation-menu-trigger-icon"
    />
  </NavigationMenuPrimitive.Trigger>
);
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

const NavigationMenuContent = ({ className, ...props }: NavigationMenuPrimitive.Content.Props) => (
  <NavigationMenuPrimitive.Content
    data-slot="navigation-menu-content"
    data-qa="navigation-menu-content"
    className={cn(
      'data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto p-1 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95 data-starting-style:opacity-0 data-ending-style:opacity-0',
      className,
    )}
    {...props}
  />
);
NavigationMenuContent.displayName = 'NavigationMenuContent';

const NavigationMenuLink = ({ className, ...props }: NavigationMenuPrimitive.Link.Props) => (
  <NavigationMenuPrimitive.Link
    data-slot="navigation-menu-link"
    data-qa="navigation-menu-link"
    className={cn(
      "flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
      className,
    )}
    {...props}
  />
);
NavigationMenuLink.displayName = 'NavigationMenuLink';

const NavigationMenuViewport = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>) => (
  <div className={cn('absolute top-full left-0 flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'origin-top-center relative mt-1.5 w-full overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-95',
        className,
      )}
      data-slot="navigation-menu-viewport"
      data-qa="navigation-menu-viewport"
      {...props}
    />
  </div>
);
NavigationMenuViewport.displayName = 'NavigationMenuViewport';

const NavigationMenuPositioner = ({
  className,
  side = 'bottom',
  sideOffset = 8,
  align = 'start',
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) => (
  <NavigationMenuPrimitive.Portal>
    <NavigationMenuPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      className={cn(
        'isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0',
        className,
      )}
      data-slot="navigation-menu-positioner"
      {...props}
    >
      <NavigationMenuPrimitive.Popup
        className="data-[ending-style]:easing-[ease] relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none xs:w-(--popup-width) data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150"
        data-slot="navigation-menu-popup"
      >
        <NavigationMenuPrimitive.Viewport
          className="relative size-full overflow-hidden"
          data-slot="navigation-menu-positioner-viewport"
        />
      </NavigationMenuPrimitive.Popup>
    </NavigationMenuPrimitive.Positioner>
  </NavigationMenuPrimitive.Portal>
);
NavigationMenuPositioner.displayName = 'NavigationMenuPositioner';

const NavigationMenuIndicator = ({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) => (
  <NavigationMenuPrimitive.Icon
    data-slot="navigation-menu-indicator"
    data-qa="navigation-menu-indicator"
    className={cn(
      'top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in',
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Icon>
);
NavigationMenuIndicator.displayName = 'NavigationMenuIndicator';

const NavigationMenuListItem = ({
  className,
  title,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'a'>, 'title'> & { title?: React.ReactNode }) => {
  return (
    <li>
      <NavigationMenuPrimitive.Link
        data-slot="navigation-menu-link"
        render={
          <a
            className={cn(
              'block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            data-qa="navigation-menu-list-item"
            {...props}
          />
        }
      >
        <div className="text-sm leading-none font-medium">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </NavigationMenuPrimitive.Link>
    </li>
  );
};
NavigationMenuListItem.displayName = 'NavigationMenuListItem';

const isDropdownItem = (item: NavigationMenuItemType): item is NavigationMenuDropdownItem => {
  return item.type === 'dropdown';
};

const isLinkItem = (item: NavigationMenuItemType): item is NavigationMenuLinkItem => {
  return item.type === 'link';
};

const LocalNavigationMenuLinkItem: React.FC<NavigationMenuLinkItem> = ({
  label,
  href,
  disabled,
  className,
  onClick,
}) => {
  return (
    <NavigationMenuLink
      href={href}
      className={cn(navigationMenuTriggerStyle(), className)}
      onClick={disabled ? (e) => e.preventDefault() : onClick}
      data-disabled={disabled}
      data-qa="navigation-menu-link-item"
    >
      {label}
    </NavigationMenuLink>
  );
};

const LocalNavigationMenuDropdownItem: React.FC<NavigationMenuDropdownItem> = ({
  label,
  content,
  items,
  disabled,
  className,
  contentProps,
  gridClassName = 'grid gap-3 p-4',
  widthClassName = 'w-[400px]',
}) => {
  return (
    <>
      <NavigationMenuTrigger disabled={disabled} className={className} data-qa="navigation-menu-dropdown-trigger">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent {...contentProps} data-qa="navigation-menu-dropdown-content">
        {content ? (
          content
        ) : items && items.length > 0 ? (
          <ul className={cn(widthClassName, gridClassName)}>
            {items.map((item, index) => (
              <NavigationMenuListItem
                key={index}
                href={item.href}
                title={item.title}
                className={item.className}
                onClick={item.onClick}
                data-qa="navigation-menu-dropdown-list-item"
              >
                {item.description}
              </NavigationMenuListItem>
            ))}
          </ul>
        ) : null}
      </NavigationMenuContent>
    </>
  );
};

/**
 * NavigationMenu Component
 *
 * A developer-friendly navigation menu component with support for simple links and dropdown menus.
 * Perfect for header navigation, main menus, and site-wide navigation.
 *
 * @example
 * // Basic usage with simple links
 * import { NavigationMenu } from '@paalstack/react-ui';
 *
 * <NavigationMenu
 *   items={[
 *     { type: 'link', label: 'Home', href: '/' },
 *     { type: 'link', label: 'About', href: '/about' },
 *     { type: 'link', label: 'Contact', href: '/contact' },
 *   ]}
 * />
 *
 * @example
 * // With dropdown menus using items array
 * <NavigationMenu
 *   items={[
 *     { type: 'link', label: 'Home', href: '/' },
 *     {
 *       type: 'dropdown',
 *       label: 'Products',
 *       items: [
 *         {
 *           href: '/products/laptops',
 *           title: 'Laptops',
 *           description: 'High-performance laptops for work and gaming'
 *         },
 *         {
 *           href: '/products/phones',
 *           title: 'Smartphones',
 *           description: 'Latest smartphones with advanced features'
 *         },
 *         {
 *           href: '/products/tablets',
 *           title: 'Tablets',
 *           description: 'Versatile tablets for work and entertainment'
 *         },
 *       ],
 *       gridClassName: 'grid gap-3 p-6 md:grid-cols-2',
 *       widthClassName: 'w-[500px]',
 *     },
 *     { type: 'link', label: 'Contact', href: '/contact' },
 *   ]}
 * />
 *
 * @example
 * // With custom dropdown content
 * <NavigationMenu
 *   items={[
 *     { type: 'link', label: 'Home', href: '/' },
 *     {
 *       type: 'dropdown',
 *       label: 'Solutions',
 *       content: (
 *         <ul className="grid gap-3 p-6 md:w-[600px] md:grid-cols-2">
 *           <li className="row-span-3">
 *             <a
 *               href="/featured"
 *               className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6"
 *             >
 *               <div className="mb-2 mt-4 text-lg font-medium">
 *                 Featured Solution
 *               </div>
 *               <p className="text-sm leading-tight text-muted-foreground">
 *                 Discover our flagship product
 *               </p>
 *             </a>
 *           </li>
 *           <NavigationMenuListItem href="/solutions/1" title="Solution 1">
 *             Enterprise-grade solution
 *           </NavigationMenuListItem>
 *           <NavigationMenuListItem href="/solutions/2" title="Solution 2">
 *             Small business solution
 *           </NavigationMenuListItem>
 *         </ul>
 *       ),
 *     },
 *   ]}
 * />
 *
 * @example
 * // E-commerce navigation
 * <NavigationMenu
 *   items={[
 *     {
 *       type: 'dropdown',
 *       label: 'Shop',
 *       items: [
 *         { href: '/shop/mens', title: "Men's", description: "Browse men's collection" },
 *         { href: '/shop/womens', title: "Women's", description: "Browse women's collection" },
 *         { href: '/shop/kids', title: 'Kids', description: "Browse kids' collection" },
 *         { href: '/shop/accessories', title: 'Accessories', description: 'Browse accessories' },
 *       ],
 *       gridClassName: 'grid gap-3 p-4 md:grid-cols-2',
 *       widthClassName: 'w-[600px]',
 *     },
 *     { type: 'link', label: 'Sale', href: '/sale' },
 *     { type: 'link', label: 'About', href: '/about' },
 *   ]}
 * />
 *
 * @example
 * // Documentation site navigation
 * <NavigationMenu
 *   items={[
 *     {
 *       type: 'dropdown',
 *       label: 'Getting Started',
 *       items: [
 *         {
 *           href: '/docs/installation',
 *           title: 'Installation',
 *           description: 'How to install the library'
 *         },
 *         {
 *           href: '/docs/quickstart',
 *           title: 'Quick Start',
 *           description: 'Get up and running in minutes'
 *         },
 *       ],
 *       widthClassName: 'w-[300px]',
 *     },
 *     {
 *       type: 'dropdown',
 *       label: 'Components',
 *       items: [
 *         { href: '/docs/button', title: 'Button', description: 'Interactive button component' },
 *         { href: '/docs/input', title: 'Input', description: 'Form input field' },
 *         { href: '/docs/select', title: 'Select', description: 'Dropdown selection' },
 *         { href: '/docs/dialog', title: 'Dialog', description: 'Modal dialog window' },
 *       ],
 *       gridClassName: 'grid gap-2 p-4 md:grid-cols-2',
 *       widthClassName: 'w-[500px]',
 *     },
 *   ]}
 * />
 *
 * @example
 * // With disabled items and custom styling
 * <NavigationMenu
 *   items={[
 *     { type: 'link', label: 'Home', href: '/' },
 *     {
 *       type: 'dropdown',
 *       label: 'Resources',
 *       items: [
 *         { href: '/docs', title: 'Documentation', description: 'Learn how to use our products' },
 *         { href: '/blog', title: 'Blog', description: 'Read our latest articles' },
 *         { href: '/support', title: 'Support', description: 'Get help from our team' },
 *       ],
 *     },
 *     { type: 'link', label: 'Premium', href: '/premium', disabled: true },
 *   ]}
 *   className="bg-white shadow-sm"
 *   listClassName="px-4"
 * />
 *
 * @tip Use type: 'link' for simple navigation links
 * @tip Use type: 'dropdown' with items array for quick dropdown creation
 * @tip Use type: 'dropdown' with content for fully custom dropdown layouts
 * @tip Combine gridClassName and widthClassName to control dropdown layout
 */
const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, className, listClassName, ...props }) => {
  return (
    <NavigationMenuRoot className={className} data-qa="navigation-menu" {...props}>
      <NavigationMenuList className={listClassName} data-qa="navigation-menu-list">
        {items.map((item, index) => {
          if (isLinkItem(item)) {
            return (
              <NavigationMenuItem key={index} data-qa="navigation-menu-item">
                <LocalNavigationMenuLinkItem {...item} />
              </NavigationMenuItem>
            );
          }

          if (isDropdownItem(item)) {
            return (
              <NavigationMenuItem key={index} data-qa="navigation-menu-item">
                <LocalNavigationMenuDropdownItem {...item} />
              </NavigationMenuItem>
            );
          }

          return null;
        })}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};

NavigationMenu.displayName = 'NavigationMenu';

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuPositioner,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
