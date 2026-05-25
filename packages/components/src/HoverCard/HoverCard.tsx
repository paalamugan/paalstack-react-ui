import * as React from 'react';

import { PreviewCard as HoverCardPrimitive } from '@base-ui/react/preview-card';

import { cn } from '@/shared/lib';

/**
 * HoverCard Component
 *
 * For sighted users to preview content available behind a link.
 * Displays rich information when hovering over an element.
 *
 * Two APIs: use **HoverCardRoot** with HoverCardTrigger and HoverCardContent for full control;
 * use **HoverCard** with trigger, title, description, and children for a single-component API.
 *
 * @example
 * // Prop-based API
 * import { HoverCard } from '@paalstack/react-ui';
 *
 * <HoverCard
 *   trigger={<span className="font-medium underline">@johndoe</span>}
 *   title="John Doe"
 *   description="Software Engineer @Company"
 * >
 *   <p className="text-xs text-muted-foreground">1.2k followers • 234 following</p>
 * </HoverCard>
 *
 * @example
 * // Compound API
 * import { HoverCardRoot, HoverCardTrigger, HoverCardContent } from '@paalstack/react-ui';
 *
 * <HoverCardRoot>
 *   <HoverCardTrigger>Hover me</HoverCardTrigger>
 *   <HoverCardContent>
 *     <p>This is the hover card content</p>
 *   </HoverCardContent>
 * </HoverCardRoot>
 *
 * @example
 * // User profile preview
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <a href="/users/johndoe" className="font-medium underline">
 *       @johndoe
 *     </a>
 *   </HoverCardTrigger>
 *   <HoverCardContent className="w-80">
 *     <div className="flex gap-4">
 *       <Avatar src="/users/johndoe.jpg" fallback="JD" />
 *       <div className="space-y-1">
 *         <h4 className="text-sm font-semibold">John Doe</h4>
 *         <p className="text-sm text-muted-foreground">
 *           Software Engineer @Company
 *         </p>
 *         <div className="flex items-center gap-2 text-xs text-muted-foreground">
 *           <span>1.2k followers</span>
 *           <span>•</span>
 *           <span>234 following</span>
 *         </div>
 *       </div>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Product preview
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <a href="/products/123">
 *       <img src="/product.jpg" alt="Product" className="w-20 h-20" />
 *     </a>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <div className="space-y-2">
 *       <h4 className="font-semibold">Product Name</h4>
 *       <p className="text-sm text-muted-foreground">
 *         Brief product description goes here
 *       </p>
 *       <div className="flex items-center gap-2">
 *         <Badge variant="success">In Stock</Badge>
 *         <span className="text-lg font-bold">$99.99</span>
 *       </div>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Link preview with metadata
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <a href="https://example.com" className="text-primary underline">
 *       Check this article
 *     </a>
 *   </HoverCardTrigger>
 *   <HoverCardContent className="w-80">
 *     <div className="space-y-2">
 *       <img src="/article-thumbnail.jpg" alt="Article" className="w-full rounded" />
 *       <h4 className="font-semibold">Article Title</h4>
 *       <p className="text-sm text-muted-foreground">
 *         Article description and preview text...
 *       </p>
 *       <div className="flex items-center gap-2 text-xs text-muted-foreground">
 *         <span>5 min read</span>
 *         <span>•</span>
 *         <span>Published Jan 1, 2024</span>
 *       </div>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Team member info
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <button className="flex items-center gap-2">
 *       <Avatar src="/team/alice.jpg" fallback="AL" className="size-8" />
 *       <span>Alice Johnson</span>
 *     </button>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <div className="space-y-2">
 *       <div className="flex items-center gap-3">
 *         <Avatar src="/team/alice.jpg" fallback="AL" />
 *         <div>
 *           <h4 className="font-semibold">Alice Johnson</h4>
 *           <p className="text-sm text-muted-foreground">Product Designer</p>
 *         </div>
 *       </div>
 *       <p className="text-sm">
 *         Passionate about creating beautiful and functional user experiences.
 *       </p>
 *       <div className="flex gap-2">
 *         <Button variant="outline" size="sm">Email</Button>
 *         <Button variant="outline" size="sm">Schedule</Button>
 *       </div>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Repository stats
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <a href="/repos/awesome-project" className="font-medium text-primary">
 *       awesome-project
 *     </a>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <div className="space-y-2">
 *       <h4 className="font-semibold">awesome-project</h4>
 *       <p className="text-sm text-muted-foreground">
 *         An awesome project description
 *       </p>
 *       <div className="flex gap-4 text-sm">
 *         <div className="flex items-center gap-1">
 *           <StarIcon className="size-4" />
 *           <span>1.2k</span>
 *         </div>
 *         <div className="flex items-center gap-1">
 *           <GitForkIcon className="size-4" />
 *           <span>234</span>
 *         </div>
 *       </div>
 *       <div className="flex gap-1">
 *         <Badge size="sm">TypeScript</Badge>
 *         <Badge size="sm">React</Badge>
 *       </div>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Tooltip-like usage with more content
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <button className="inline-flex items-center gap-1">
 *       Help
 *       <InfoIcon className="size-4" />
 *     </button>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <div className="space-y-2">
 *       <h4 className="font-semibold">Need Help?</h4>
 *       <ul className="text-sm space-y-1 text-muted-foreground">
 *         <li>• Check our documentation</li>
 *         <li>• Contact support</li>
 *         <li>• Join our community</li>
 *       </ul>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Different alignments and sides
 * <HoverCard>
 *   <HoverCardTrigger>Hover (centered)</HoverCardTrigger>
 *   <HoverCardContent align="center">
 *     Centered content
 *   </HoverCardContent>
 * </HoverCard>
 *
 * <HoverCard>
 *   <HoverCardTrigger>Hover (start)</HoverCardTrigger>
 *   <HoverCardContent align="start">
 *     Aligned to start
 *   </HoverCardContent>
 * </HoverCard>
 *
 * <HoverCard>
 *   <HoverCardTrigger>Hover (end)</HoverCardTrigger>
 *   <HoverCardContent align="end">
 *     Aligned to end
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Controlled hover card
 * const [open, setOpen] = useState(false);
 *
 * <HoverCard open={open} onOpenChange={setOpen}>
 *   <HoverCardTrigger>Controlled hover</HoverCardTrigger>
 *   <HoverCardContent>
 *     <p>Controlled content</p>
 *     <Button onClick={() => setOpen(false)}>Close</Button>
 *   </HoverCardContent>
 * </HoverCard>
 *
 * @example
 * // Custom delay
 * <HoverCard openDelay={100} closeDelay={500}>
 *   <HoverCardTrigger>Quick open, slow close</HoverCardTrigger>
 *   <HoverCardContent>
 *     Opens quickly, closes slowly
 *   </HoverCardContent>
 * </HoverCard>
 */
const HoverCardRoot = ({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Root>) => (
  <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
);
HoverCardRoot.displayName = 'HoverCardRoot';

const HoverCardTrigger = ({ ...props }: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) => (
  <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
);
HoverCardTrigger.displayName = 'HoverCardTrigger';

const HoverCardContent = ({
  className,
  align = 'center',
  alignOffset = 4,
  sideOffset = 4,
  side = 'bottom',
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Popup> & {
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
}) => (
  <HoverCardPrimitive.Portal data-slot="hover-card-portal">
    <HoverCardPrimitive.Positioner
      side={side}
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className="isolate z-50"
    >
      <HoverCardPrimitive.Popup
        className={cn(
          'z-50 w-64 origin-(--transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        data-slot="hover-card-content"
        data-qa="hover-card-content"
        {...props}
      />
    </HoverCardPrimitive.Positioner>
  </HoverCardPrimitive.Portal>
);
HoverCardContent.displayName = 'HoverCardContent';

type HoverCardRootProps = React.ComponentProps<typeof HoverCardRoot>;

export interface HoverCardComponentProps extends Omit<HoverCardRootProps, 'children'> {
  /** Trigger element (hover target); omit for compound API (use HoverCardTrigger as child) */
  trigger?: React.ReactNode;
  /** Optional title (renders as heading inside content) */
  title?: React.ReactNode;
  /** Optional description (renders as muted text inside content) */
  description?: React.ReactNode;
  /** Content of the hover card (or use children for custom content) */
  children?: React.ReactNode;
  /** Props for HoverCardContent */
  contentProps?: React.ComponentPropsWithoutRef<typeof HoverCardContent>;
}

/**
 * Single-component HoverCard that composes trigger and content via props.
 * Use HoverCardRoot with HoverCardTrigger and HoverCardContent when you need full control.
 *
 * @example
 * // Basic prop-based (title + description)
 * import { HoverCard, Button } from '@paalstack/react-ui';
 *
 * <HoverCard
 *   trigger={<Button variant="link">@johndoe</Button>}
 *   title="John Doe"
 *   description="Software Engineer @Company"
 * >
 *   <p className="text-xs text-muted-foreground pt-1">1.2k followers • 234 following</p>
 * </HoverCard>
 *
 * @example
 * // Title and description only
 * <HoverCard
 *   trigger={<span className="font-medium underline">Hover for details</span>}
 *   title="Need Help?"
 *   description="Check our documentation or contact support."
 * />
 *
 * @example
 * // Custom content only (no title/description)
 * <HoverCard
 *   trigger={<Button variant="ghost">Preview</Button>}
 *   contentProps={{ className: "w-80" }}
 * >
 *   <div className="space-y-2">
 *     <p>Any custom content here.</p>
 *     <Button size="sm">Learn more</Button>
 *   </div>
 * </HoverCard>
 *
 * @example
 * // With open/onOpenChange (controlled)
 * const [open, setOpen] = useState(false);
 *
 * <HoverCard open={open} onOpenChange={setOpen} trigger={<span>Controlled</span>} title="Controlled card">
 *   <p className="text-sm">Content that appears on hover.</p>
 * </HoverCard>
 */
const HoverCard: React.FC<HoverCardComponentProps> = ({
  trigger,
  title,
  description,
  contentProps,
  children,
  ...rootProps
}) => {
  const usePropsApi = !!trigger || !!title || !!description;

  if (usePropsApi) {
    return (
      <HoverCardRoot {...rootProps}>
        {trigger && (
          <HoverCardTrigger render={React.isValidElement(trigger) ? trigger : undefined}>
            {React.isValidElement(trigger) ? null : trigger}
          </HoverCardTrigger>
        )}
        <HoverCardContent {...contentProps}>
          {(!!title || !!description) && (
            <div className="space-y-1">
              {!!title && <h4 className="text-sm leading-none font-semibold">{title}</h4>}
              {!!description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
          )}
          {children}
        </HoverCardContent>
      </HoverCardRoot>
    );
  }

  return <HoverCardRoot {...rootProps}>{children}</HoverCardRoot>;
};
HoverCard.displayName = 'HoverCard';

export { HoverCard, HoverCardContent, HoverCardRoot, HoverCardTrigger };
