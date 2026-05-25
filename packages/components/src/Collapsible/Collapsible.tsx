import type * as React from 'react';

import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible';

// Primitive components (Composition API)

const CollapsibleRoot = ({ ...props }: CollapsiblePrimitive.Root.Props) => (
  <CollapsiblePrimitive.Root data-slot="collapsible" data-qa="collapsible" {...props} />
);
CollapsibleRoot.displayName = 'CollapsibleRoot';

const CollapsibleTrigger = ({ ...props }: CollapsiblePrimitive.Trigger.Props) => (
  <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" data-qa="collapsible-trigger" {...props} />
);
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

const CollapsibleContent = ({ ...props }: CollapsiblePrimitive.Panel.Props) => (
  <CollapsiblePrimitive.Panel data-slot="collapsible-content" data-qa="collapsible-content" {...props} />
);
CollapsibleContent.displayName = 'CollapsibleContent';

// Props API (Compound Component)

export interface CollapsibleProps extends CollapsiblePrimitive.Root.Props {
  /** Content rendered inside the trigger button. */
  trigger?: React.ReactNode;
  /** Props forwarded to CollapsibleTrigger. */
  triggerProps?: Omit<CollapsiblePrimitive.Trigger.Props, 'children'>;
  /** Props forwarded to CollapsibleContent (Panel). */
  contentProps?: Omit<CollapsiblePrimitive.Panel.Props, 'children'>;
}

/**
 * Collapsible Component
 *
 * An interactive component which expands/collapses a panel.
 * Similar to Accordion but for single expandable sections.
 *
 * @example
 * // Props API — basic usage
 * import { Collapsible } from '@paalstack/react-ui';
 *
 * <Collapsible trigger={<Button>Toggle Content</Button>}>
 *   <p>This content can be collapsed</p>
 * </Collapsible>
 *
 * @example
 * // Props API — controlled
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Collapsible
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   trigger={
 *     <Button variant="outline">
 *       {isOpen ? 'Hide' : 'Show'} Details
 *     </Button>
 *   }
 * >
 *   <Card>
 *     <CardContent>
 *       <p>Detailed information goes here</p>
 *     </CardContent>
 *   </Card>
 * </Collapsible>
 *
 * @example
 * // Composition API
 * import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from '@paalstack/react-ui';
 *
 * <CollapsibleRoot>
 *   <CollapsibleTrigger>
 *     <Button>Toggle Content</Button>
 *   </CollapsibleTrigger>
 *   <CollapsibleContent>
 *     <p>This content can be collapsed</p>
 *   </CollapsibleContent>
 * </CollapsibleRoot>
 *
 * @example
 * // Composition API — controlled
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <CollapsibleRoot open={isOpen} onOpenChange={setIsOpen}>
 *   <CollapsibleTrigger>
 *     <Button variant="outline">
 *       {isOpen ? 'Hide' : 'Show'} Details
 *       <ChevronDownIcon className={cn('ml-2 transition-transform', isOpen && 'rotate-180')} />
 *     </Button>
 *   </CollapsibleTrigger>
 *   <CollapsibleContent className="mt-2">
 *     <Card>
 *       <CardContent>
 *         <p>Detailed information goes here</p>
 *       </CardContent>
 *     </Card>
 *   </CollapsibleContent>
 * </CollapsibleRoot>
 *
 * @example
 * // Filter section
 * const [filtersOpen, setFiltersOpen] = useState(true);
 *
 * <CollapsibleRoot open={filtersOpen} onOpenChange={setFiltersOpen}>
 *   <CollapsibleTrigger>
 *     <button className="flex w-full items-center justify-between p-4 font-medium">
 *       Filters
 *       <ChevronDownIcon className={cn('transition-transform', filtersOpen && 'rotate-180')} />
 *     </button>
 *   </CollapsibleTrigger>
 *   <CollapsibleContent className="px-4 pb-4">
 *     <div className="space-y-4">
 *       <Select label="Category" options={categories} />
 *       <Input label="Min Price" type="number" />
 *       <Input label="Max Price" type="number" />
 *       <Button>Apply Filters</Button>
 *     </div>
 *   </CollapsibleContent>
 * </CollapsibleRoot>
 *
 * @example
 * // Mobile menu
 * const [menuOpen, setMenuOpen] = useState(false);
 *
 * <div className="md:hidden">
 *   <CollapsibleRoot open={menuOpen} onOpenChange={setMenuOpen}>
 *     <CollapsibleTrigger>
 *       <button className="p-2">
 *         {menuOpen ? <XIcon /> : <MenuIcon />}
 *       </button>
 *     </CollapsibleTrigger>
 *     <CollapsibleContent>
 *       <nav className="flex flex-col gap-2 p-4">
 *         <a href="/">Home</a>
 *         <a href="/about">About</a>
 *         <a href="/services">Services</a>
 *         <a href="/contact">Contact</a>
 *       </nav>
 *     </CollapsibleContent>
 *   </CollapsibleRoot>
 * </div>
 */
const Collapsible: React.FC<CollapsibleProps> = ({ trigger, triggerProps, contentProps, children, ...props }) => {
  return (
    <CollapsibleRoot {...props}>
      {trigger && <CollapsibleTrigger {...triggerProps}>{trigger}</CollapsibleTrigger>}
      <CollapsibleContent {...contentProps}>{children}</CollapsibleContent>
    </CollapsibleRoot>
  );
};
Collapsible.displayName = 'Collapsible';

export { Collapsible, CollapsibleContent, CollapsibleRoot, CollapsibleTrigger };
