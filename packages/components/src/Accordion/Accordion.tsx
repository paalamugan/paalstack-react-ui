import * as React from 'react';

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';

import { RxChevronDown as ChevronDownIcon, RxChevronUp as ChevronUpIcon } from '@/icons/rx';
import { cn } from '@/shared/lib';

const AccordionRoot = <TValue,>({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root<TValue>>) => (
  <AccordionPrimitive.Root<TValue> {...props} />
);

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('not-last:border-b', className)}
    data-slot="accordion-item"
    data-qa="accordion-item"
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground',
        className,
      )}
      data-slot="accordion-trigger"
      data-qa="accordion-trigger"
      {...props}
    >
      {children}
      <ChevronDownIcon
        data-slot="accordion-trigger-icon"
        data-qa="accordion-trigger-icon"
        className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
      />
      <ChevronUpIcon
        data-slot="accordion-trigger-icon"
        data-qa="accordion-trigger-icon-up"
        className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Panel>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Panel
    ref={ref}
    className="overflow-hidden text-sm data-closed:animate-accordion-up data-open:animate-accordion-down"
    data-slot="accordion-content"
    data-qa="accordion-content"
    {...props}
  >
    <div
      className={cn(
        'h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Panel>
));
AccordionContent.displayName = 'AccordionContent';

/**
 * Represents an item in the Accordion component.
 */
interface AccordionItem {
  /** The value associated with the Accordion item. */
  value: string;
  /** The title of the Accordion item. */
  title: React.ReactNode;
  /** The content of the Accordion item. */
  content: React.ReactNode;
}
/**
 * Props for the Accordion component.
 */
type AccordionProps<TValue> = Omit<React.ComponentProps<typeof AccordionRoot<TValue>>, 'multiple'> & {
  /** The items to render in the Accordion. */
  items: AccordionItem[];
  /**
   * The type of Accordion. Defaults to `single`.
   * @default 'single'
   */
  type?: 'single' | 'multiple';

  /** Props forwarded to AccordionTrigger. */
  triggerProps?: React.ComponentPropsWithoutRef<typeof AccordionTrigger>;
  /** Props forwarded to AccordionContent. */
  contentProps?: React.ComponentPropsWithoutRef<typeof AccordionContent>;
  /** Props forwarded to AccordionItem. */
  itemProps?: React.ComponentPropsWithoutRef<typeof AccordionItem>;
};

/**
 * Accordion Component
 *
 * A vertically stacked set of interactive headings that each reveal an associated section of content.
 * Perfect for FAQs, collapsible sections, and organizing large amounts of content.
 *
 * @example
 * // Basic usage
 * import { Accordion } from '@paalstack/react-ui';
 *
 * <Accordion
 *   type="single"
 *   items={[
 *     { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
 *     { value: 'item-2', title: 'Is it styled?', content: 'Yes. It comes with default styles.' },
 *     { value: 'item-3', title: 'Is it animated?', content: 'Yes. It has smooth animations.' },
 *   ]}
 * />
 *
 * @example
 * // Single type (only one item can be open at a time)
 * <Accordion
 *   type="single"
 *   defaultValue={['item-1']}
 *   items={[
 *     { value: 'item-1', title: 'Question 1', content: 'Answer 1' },
 *     { value: 'item-2', title: 'Question 2', content: 'Answer 2' },
 *     { value: 'item-3', title: 'Question 3', content: 'Answer 3' },
 *   ]}
 * />
 *
 * @example
 * // Multiple type (multiple items can be open simultaneously)
 * <Accordion
 *   type="multiple"
 *   defaultValue={['item-1', 'item-2']}
 *   items={[
 *     { value: 'item-1', title: 'Question 1', content: 'Answer 1' },
 *     { value: 'item-2', title: 'Question 2', content: 'Answer 2' },
 *     { value: 'item-3', title: 'Question 3', content: 'Answer 3' },
 *   ]}
 * />
 *
 * @example
 * // FAQ section
 * const faqItems = [
 *   {
 *     value: 'shipping',
 *     title: 'What are the shipping options?',
 *     content: 'We offer standard (5-7 days) and express (2-3 days) shipping options.',
 *   },
 *   {
 *     value: 'returns',
 *     title: 'What is your return policy?',
 *     content: 'Items can be returned within 30 days of purchase for a full refund.',
 *   },
 *   {
 *     value: 'warranty',
 *     title: 'Do you offer warranties?',
 *     content: 'All products come with a 1-year manufacturer warranty.',
 *   },
 * ];
 *
 * <Accordion type="single" items={faqItems} />
 *
 * @example
 * // Product specifications
 * <Accordion
 *   type="single"
 *   items={[
 *     {
 *       value: 'dimensions',
 *       title: 'Dimensions',
 *       content: (
 *         <div>
 *           <p>Width: 24 inches</p>
 *           <p>Height: 36 inches</p>
 *           <p>Depth: 12 inches</p>
 *         </div>
 *       ),
 *     },
 *     {
 *       value: 'materials',
 *       title: 'Materials',
 *       content: 'Made from sustainably sourced oak wood with a water-based finish.',
 *     },
 *     {
 *       value: 'care',
 *       title: 'Care Instructions',
 *       content: 'Wipe clean with a damp cloth. Avoid harsh chemicals.',
 *     },
 *   ]}
 * />
 *
 * @example
 * // Documentation sections
 * <Accordion
 *   type="multiple"
 *   items={[
 *     {
 *       value: 'installation',
 *       title: 'Installation',
 *       content: (
 *         <div>
 *           <p>Run the following command:</p>
 *           <code>npm install @paalstack/react-ui</code>
 *         </div>
 *       ),
 *     },
 *     {
 *       value: 'usage',
 *       title: 'Usage',
 *       content: (
 *         <div>
 *           <p>Import and use the component:</p>
 *           <code>import {'{ Button }'} from '@paalstack/react-ui'</code>
 *         </div>
 *       ),
 *     },
 *   ]}
 * />
 *
 * @example
 * // Using composition with AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent
 * import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from '@paalstack/react-ui';
 *
 * <AccordionRoot type="single">
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Custom Trigger 1</AccordionTrigger>
 *     <AccordionContent>Custom content with full control</AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem value="item-2">
 *     <AccordionTrigger>Custom Trigger 2</AccordionTrigger>
 *     <AccordionContent>More custom content</AccordionContent>
 *   </AccordionItem>
 * </AccordionRoot>
 *
 * @example
 * // Controlled accordion
 * const [value, setValue] = useState('item-1');
 *
 * <Accordion
 *   type="single"
 *   value={value}
 *   onValueChange={setValue}
 *   items={[
 *     { value: 'item-1', title: 'Section 1', content: 'Content 1' },
 *     { value: 'item-2', title: 'Section 2', content: 'Content 2' },
 *   ]}
 * />
 *
 * @example
 * // Settings panel
 * <Accordion
 *   type="multiple"
 *   items={[
 *     {
 *       value: 'account',
 *       title: 'Account Settings',
 *       content: (
 *         <div className="space-y-4">
 *           <Input label="Email" />
 *           <Input label="Username" />
 *           <Button>Save Changes</Button>
 *         </div>
 *       ),
 *     },
 *     {
 *       value: 'security',
 *       title: 'Security',
 *       content: (
 *         <div className="space-y-4">
 *           <Input label="Current Password" type="password" />
 *           <Input label="New Password" type="password" />
 *           <Button>Update Password</Button>
 *         </div>
 *       ),
 *     },
 *   ]}
 * />
 *
 * @example
 * // Course curriculum
 * <Accordion
 *   type="single"
 *   items={[
 *     {
 *       value: 'module-1',
 *       title: 'Module 1: Introduction',
 *       content: (
 *         <ul className="space-y-2">
 *           <li>Lesson 1.1: Getting Started</li>
 *           <li>Lesson 1.2: Basic Concepts</li>
 *           <li>Lesson 1.3: First Project</li>
 *         </ul>
 *       ),
 *     },
 *     {
 *       value: 'module-2',
 *       title: 'Module 2: Advanced Topics',
 *       content: (
 *         <ul className="space-y-2">
 *           <li>Lesson 2.1: Advanced Patterns</li>
 *           <li>Lesson 2.2: Performance</li>
 *           <li>Lesson 2.3: Best Practices</li>
 *         </ul>
 *       ),
 *     },
 *   ]}
 * />
 *
 * @example
 * // Order details
 * <Accordion
 *   type="single"
 *   items={[
 *     {
 *       value: 'order-info',
 *       title: 'Order Information',
 *       content: <OrderDetails order={order} />,
 *     },
 *     {
 *       value: 'shipping',
 *       title: 'Shipping Details',
 *       content: <ShippingInfo order={order} />,
 *     },
 *     {
 *       value: 'payment',
 *       title: 'Payment Method',
 *       content: <PaymentInfo order={order} />,
 *     },
 *   ]}
 * />
 */
const Accordion = <TValue,>({
  items,
  type = 'single',
  triggerProps,
  contentProps,
  itemProps,
  ...props
}: AccordionProps<TValue>) => {
  return (
    <AccordionRoot {...props} multiple={type === 'multiple'} data-qa="accordion">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} {...itemProps}>
          <AccordionTrigger {...triggerProps}>{item.title}</AccordionTrigger>
          <AccordionContent {...contentProps}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
};
Accordion.displayName = 'Accordion';

export { Accordion, AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger };
