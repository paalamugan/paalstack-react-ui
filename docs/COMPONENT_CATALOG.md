# Component Catalog

> **Last Updated:** 2026-06-22  
> **Total Components:** 70  
> **Location:** `packages/components/src/`

## Overview

Comprehensive catalog of all components in the **@paalstack/react-ui** library.

Each component entry includes:
- ✅ **Purpose & Description**
- ✅ **Import Path & Exports**
- ✅ **Props Interface** (TypeScript)
- ✅ **Variants & Sizes** (CVA if applicable)
- ✅ **States & Accessibility** (ARIA attributes)
- ✅ **Dependencies** (Base UI, Radix UI, CVA, etc.)
- ✅ **Related Components**
- ✅ **Code Examples**
- ✅ **Best Practices**
- ✅ **Common Mistakes**

---

## Statistics

- **Total Components:** 70
- **CVA Components:** 20 (use class-variance-authority)
- **Base UI Components:** 31 (built on Base UI primitives)
- **Radix UI Components:** 0 (built on Radix UI primitives)
- **Context-based:** 5 (use React Context)
- **Portal-rendered:** 13 (use React Portal)
- **Components with Examples:** 68

---

## Quick Reference

| Component | Uses CVA | Base/Radix UI | Has Variants | Has Examples |
|-----------|----------|---------------|--------------|--------------|
| [Accordion](#accordion) | — | ✅ | — | ✅ (5) |
| [Alert](#alert) | ✅ | — | — | ✅ (5) |
| [AlertDialog](#alertdialog) | — | ✅ | — | ✅ (4) |
| [AspectRatio](#aspectratio) | — | — | — | ✅ (5) |
| [Avatar](#avatar) | — | ✅ | — | ✅ (5) |
| [Badge](#badge) | ✅ | ✅ | — | ✅ (4) |
| [Breadcrumb](#breadcrumb) | — | ✅ | — | ✅ (5) |
| [Button](#button) | ✅ | ✅ | — | ✅ (5) |
| [ButtonGroup](#buttongroup) | ✅ | ✅ | — | ✅ (5) |
| [Calendar](#calendar) | ✅ | — | — | ✅ (5) |
| [Card](#card) | — | — | — | ✅ (5) |
| [Carousel](#carousel) | — | — | — | ✅ (5) |
| [Chart](#chart) | — | — | — | ✅ (5) |
| [Checkbox](#checkbox) | ✅ | ✅ | — | ✅ (5) |
| [CheckboxGroup](#checkboxgroup) | — | — | — | ✅ (5) |
| [Collapsible](#collapsible) | — | ✅ | — | ✅ (5) |
| [Combobox](#combobox) | — | ✅ | — | ✅ (5) |
| [Command](#command) | — | — | — | ✅ (2) |
| [ContextMenu](#contextmenu) | — | ✅ | — | ✅ (3) |
| [DataTable](#datatable) | — | — | — | ✅ (5) |
| [DatePicker](#datepicker) | — | — | — | ✅ (5) |
| [DateRangePicker](#daterangepicker) | — | — | — | ✅ (5) |
| [Dialog](#dialog) | — | ✅ | — | ✅ (5) |
| [Direction](#direction) | — | ✅ | — | — |
| [Drawer](#drawer) | — | — | — | ✅ (5) |
| [DropdownMenu](#dropdownmenu) | — | ✅ | — | ✅ (5) |
| [Empty](#empty) | ✅ | — | — | ✅ (5) |
| [Error](#error) | — | — | — | ✅ (5) |
| [ErrorMessage](#errormessage) | — | — | — | ✅ (5) |
| [Field](#field) | ✅ | — | — | ✅ (5) |
| [FileUpload](#fileupload) | — | ✅ | — | ✅ (5) |
| [Form](#form) | — | — | — | ✅ (5) |
| [HoverCard](#hovercard) | — | ✅ | — | ✅ (5) |
| [IconButton](#iconbutton) | — | — | — | ✅ (5) |
| [Input](#input) | — | — | — | ✅ (5) |
| [InputGroup](#inputgroup) | ✅ | — | — | ✅ (5) |
| [InputOTP](#inputotp) | — | — | — | ✅ (5) |
| [Item](#item) | ✅ | — | — | ✅ (5) |
| [Kbd](#kbd) | — | — | — | — |
| [Label](#label) | ✅ | — | — | ✅ (5) |
| [Loading](#loading) | — | — | — | ✅ (5) |
| [Menubar](#menubar) | — | ✅ | — | ✅ (5) |
| [MultiSelect](#multiselect) | — | — | — | ✅ (5) |
| [NativeCheckbox](#nativecheckbox) | ✅ | — | — | ✅ (5) |
| [NativeCheckboxGroup](#nativecheckboxgroup) | — | — | — | ✅ (5) |
| [NativeRadio](#nativeradio) | ✅ | — | — | ✅ (5) |
| [NativeRadioGroup](#nativeradiogroup) | — | — | — | ✅ (5) |
| [NativeSelect](#nativeselect) | — | — | — | ✅ (5) |
| [NavigationMenu](#navigationmenu) | ✅ | ✅ | — | ✅ (5) |
| [NumberInput](#numberinput) | — | — | — | ✅ (5) |
| [Pagination](#pagination) | — | — | — | ✅ (5) |
| [Popover](#popover) | — | ✅ | — | ✅ (4) |
| [Progress](#progress) | ✅ | ✅ | — | ✅ (5) |
| [RadioGroup](#radiogroup) | ✅ | ✅ | — | ✅ (5) |
| [Resizable](#resizable) | — | — | — | ✅ (3) |
| [ScrollArea](#scrollarea) | — | ✅ | — | ✅ (5) |
| [Select](#select) | — | ✅ | — | ✅ (5) |
| [Separator](#separator) | — | ✅ | — | ✅ (5) |
| [Sheet](#sheet) | — | ✅ | — | ✅ (5) |
| [SimpleTable](#simpletable) | — | — | — | ✅ (5) |
| [Skeleton](#skeleton) | — | — | — | ✅ (5) |
| [Slider](#slider) | — | ✅ | — | ✅ (5) |
| [Spinner](#spinner) | — | — | — | ✅ (5) |
| [Switch](#switch) | ✅ | ✅ | — | ✅ (5) |
| [Table](#table) | — | — | — | ✅ (2) |
| [Tabs](#tabs) | ✅ | ✅ | — | ✅ (5) |
| [Textarea](#textarea) | — | — | — | ✅ (5) |
| [Toggle](#toggle) | ✅ | ✅ | — | ✅ (5) |
| [ToggleGroup](#togglegroup) | ✅ | ✅ | — | ✅ (4) |
| [Tooltip](#tooltip) | — | ✅ | — | ✅ (5) |

---

## Table of Contents

1. [Accordion](#accordion)
2. [Alert](#alert)
3. [AlertDialog](#alertdialog)
4. [AspectRatio](#aspectratio)
5. [Avatar](#avatar)
6. [Badge](#badge)
7. [Breadcrumb](#breadcrumb)
8. [Button](#button)
9. [ButtonGroup](#buttongroup)
10. [Calendar](#calendar)
11. [Card](#card)
12. [Carousel](#carousel)
13. [Chart](#chart)
14. [Checkbox](#checkbox)
15. [CheckboxGroup](#checkboxgroup)
16. [Collapsible](#collapsible)
17. [Combobox](#combobox)
18. [Command](#command)
19. [ContextMenu](#contextmenu)
20. [DataTable](#datatable)
21. [DatePicker](#datepicker)
22. [DateRangePicker](#daterangepicker)
23. [Dialog](#dialog)
24. [Direction](#direction)
25. [Drawer](#drawer)
26. [DropdownMenu](#dropdownmenu)
27. [Empty](#empty)
28. [Error](#error)
29. [ErrorMessage](#errormessage)
30. [Field](#field)
31. [FileUpload](#fileupload)
32. [Form](#form)
33. [HoverCard](#hovercard)
34. [IconButton](#iconbutton)
35. [Input](#input)
36. [InputGroup](#inputgroup)
37. [InputOTP](#inputotp)
38. [Item](#item)
39. [Kbd](#kbd)
40. [Label](#label)
41. [Loading](#loading)
42. [Menubar](#menubar)
43. [MultiSelect](#multiselect)
44. [NativeCheckbox](#nativecheckbox)
45. [NativeCheckboxGroup](#nativecheckboxgroup)
46. [NativeRadio](#nativeradio)
47. [NativeRadioGroup](#nativeradiogroup)
48. [NativeSelect](#nativeselect)
49. [NavigationMenu](#navigationmenu)
50. [NumberInput](#numberinput)
51. [Pagination](#pagination)
52. [Popover](#popover)
53. [Progress](#progress)
54. [RadioGroup](#radiogroup)
55. [Resizable](#resizable)
56. [ScrollArea](#scrollarea)
57. [Select](#select)
58. [Separator](#separator)
59. [Sheet](#sheet)
60. [SimpleTable](#simpletable)
61. [Skeleton](#skeleton)
62. [Slider](#slider)
63. [Spinner](#spinner)
64. [Switch](#switch)
65. [Table](#table)
66. [Tabs](#tabs)
67. [Textarea](#textarea)
68. [Toggle](#toggle)
69. [ToggleGroup](#togglegroup)
70. [Tooltip](#tooltip)

---

## Accordion

**Purpose:** A vertically stacked set of interactive headings that each reveal an associated section of content.

### Import

```typescript
import { Accordion } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface AccordionProps {
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
}
```

### States

This component supports the following states:

- **disabled**
- **expanded/collapsed**
- **open/closed**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-disabled`
- `aria-expanded`

### Dependencies

- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage

```tsx
import { Accordion } from '@paalstack/react-ui';
<Accordion
  type="single"
  items={[
    { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
    { value: 'item-2', title: 'Is it styled?', content: 'Yes. It comes with default styles.' },
    { value: 'item-3', title: 'Is it animated?', content: 'Yes. It has smooth animations.' },
  ]}
/>
```

#### Single type (only one item can be open at a time)

```tsx
<Accordion
  type="single"
  defaultValue="item-1"
  items={[
    { value: 'item-1', title: 'Question 1', content: 'Answer 1' },
    { value: 'item-2', title: 'Question 2', content: 'Answer 2' },
    { value: 'item-3', title: 'Question 3', content: 'Answer 3' },
  ]}
/>
```

#### Multiple type (multiple items can be open simultaneously)

```tsx
<Accordion
  type="multiple"
  defaultValue={['item-1', 'item-2']}
  items={[
    { value: 'item-1', title: 'Question 1', content: 'Answer 1' },
    { value: 'item-2', title: 'Question 2', content: 'Answer 2' },
    { value: 'item-3', title: 'Question 3', content: 'Answer 3' },
  ]}
/>
```

#### FAQ section

```tsx
const faqItems = [
  {
    value: 'shipping',
    title: 'What are the shipping options?',
    content: 'We offer standard (5-7 days) and express (2-3 days) shipping options.',
  },
  {
    value: 'returns',
    title: 'What is your return policy?',
    content: 'Items can be returned within 30 days of purchase for a full refund.',
  },
  {
    value: 'warranty',
    title: 'Do you offer warranties?',
    content: 'All products come with a 1-year manufacturer warranty.',
  },
];
<Accordion type="single" items={faqItems} />
```

#### Product specifications

```tsx
<Accordion
  type="single"
  items={[
    {
      value: 'dimensions',
      title: 'Dimensions',
      content: (
        <div>
          <p>Width: 24 inches</p>
          <p>Height: 36 inches</p>
          <p>Depth: 12 inches</p>
        </div>
      ),
    },
    {
      value: 'materials',
      title: 'Materials',
      content: 'Made from sustainably sourced oak wood with a water-based finish.',
    },
    {
      value: 'care',
      title: 'Care Instructions',
      content: 'Wipe clean with a damp cloth. Avoid harsh chemicals.',
    },
  ]}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Accordion/Accordion.tsx`](../packages/components/src/Accordion/Accordion.tsx)
- **Index:** [`packages/components/src/Accordion/index.ts`](../packages/components/src/Accordion/index.ts)

---

## Alert

**Purpose:** Alerts are used to communicate a state that affects a system, feature, or page.

### Import

```typescript
import { Alert } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface AlertProps {
  /** Title for the alert */
  title?: React.ReactNode;
  /** Props for the alert title */
  titleProps?: React.ComponentProps<typeof AlertTitle>;
  /** Description for the alert */
  description?: React.ReactNode;
  /** Props for the alert description */
  descriptionProps?: React.ComponentProps<typeof AlertDescription>;
  /**
  * Icon for the alert
  */
  icon?: React.ReactNode;
  /**
  * Whether the alert is dismissible or not
  */
  dismissible?: boolean;
  /** onDismiss functions call when the alert is dismissed */
  onDismiss?: () => void;
}
```

### Accessibility (ARIA)

Built-in accessibility attributes:

- `role="alert"`

### Dependencies

- **CVA** — class-variance-authority for variants

### Related Components

- [IconButton](#iconbutton)

### Code Examples

#### Basic usage

```tsx
import { Alert } from '@paalstack/react-ui';
<Alert title="Info" description="This is an informational alert" />
```

#### Different color variants

```tsx
<Alert colorVariant="primary" title="Primary Alert" description="Primary color variant" />
<Alert colorVariant="success" title="Success" description="Operation completed successfully" />
<Alert colorVariant="warning" title="Warning" description="Please be cautious" />
<Alert colorVariant="danger" title="Error" description="Something went wrong" />
<Alert colorVariant="info" title="Information" description="Helpful information" />
```

#### With soft background

```tsx
<Alert softBackground="primary" title="Soft Primary" description="Soft background variant" />
<Alert softBackground="success" title="Soft Success" description="Success with soft background" />
<Alert softBackground="warning" title="Soft Warning" description="Warning with soft background" />
```

#### With solid background

```tsx
<Alert solidBackground="primary" title="Solid Primary" description="Solid background variant" />
<Alert solidBackground="danger" title="Solid Danger" description="Error with solid background" />
```

#### With icon

```tsx
import { FiInfo, FiCheckCircle, FiAlertTriangle, FiXCircle } from '@paalstack/react-icons/fi';
<Alert
  colorVariant="info"
  icon={<FiInfo className="size-5" />}
  title="With Icon"
  description="Alert with custom icon"
/>
<Alert
  colorVariant="success"
  icon={<FiCheckCircle className="size-5" />}
  title="Success"
  description="Task completed successfully"
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Alert/Alert.tsx`](../packages/components/src/Alert/Alert.tsx)
- **Index:** [`packages/components/src/Alert/index.ts`](../packages/components/src/Alert/index.ts)

---

## AlertDialog

**Purpose:** A modal dialog that interrupts the user with important content and expects a response.

### Import

```typescript
import { AlertDialog } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface AlertDialogProps {
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
}
```

### States

This component supports the following states:

- **open/closed**
- **hover**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Basic usage

```tsx
import { AlertDialog, Button } from '@paalstack/react-ui';
<AlertDialog
  trigger={<Button variant="outline">Open Alert</Button>}
  header={{
    title: "Are you sure?",
    description: "This action cannot be undone."
  }}
  onConfirm={() => console.log('Confirmed')}
/>
```

#### Delete confirmation

```tsx
const [open, setOpen] = useState(false);
<AlertDialog
  open={open}
  onOpenChange={setOpen}
  trigger={<Button variant="solid" color="danger">Delete</Button>}
  header={{
    title: "Delete Item",
    description: "Are you sure you want to delete this item? This action cannot be undone."
  }}
  icon={<AlertTriangleIcon className="size-6 text-danger" />}
  cancelButtonText="Cancel"
  confirmButtonText="Delete"
  onCancel={() => setOpen(false)}
  onConfirm={() => {
    handleDelete();
    setOpen(false);
  }}
  confirmButtonProps={{
    variant: 'danger',
    className: 'bg-danger text-danger-foreground'
  }}
/>
```

#### Account deletion warning

```tsx
<AlertDialog
  trigger={<Button color="danger">Delete Account</Button>}
  header={{
    title: "Delete Account",
    description: "This will permanently delete your account and all associated data. This action cannot be undone."
  }}
  icon={<TrashIcon className="size-6 text-danger" />}
  cancelButtonText="Keep Account"
  confirmButtonText="Yes, Delete My Account"
  onConfirm={handleAccountDeletion}
  confirmButtonProps={{ variant: 'danger' }}
>
  <div className="my-4 p-3 bg-danger/10 border border-danger/20 rounded text-sm">
    <strong>Warning:</strong> You will lose access to all your projects, files, and settings.
  </div>
</AlertDialog>
```

#### Using composition for custom layouts

```tsx
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@paalstack/react-ui';
<AlertDialogRoot>
  <AlertDialogTrigger asChild>
    <Button>Open</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Custom Layout</AlertDialogTitle>
      <AlertDialogDescription>
        Full control over the alert dialog structure
      </AlertDialogDescription>
    </AlertDialogHeader>
    <div className="my-4">
      Custom content here
    </div>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Confirm</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialogRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/AlertDialog/AlertDialog.tsx`](../packages/components/src/AlertDialog/AlertDialog.tsx)
- **Index:** [`packages/components/src/AlertDialog/index.ts`](../packages/components/src/AlertDialog/index.ts)

---

## AspectRatio

**Purpose:** Displays content within a desired ratio.

### Import

```typescript
import { AspectRatio } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface AspectRatioProps {
  /**
  * The desired aspect ratio (width / height).
  * @default 1
  */
  ratio?: number;
}
```

### States

This component supports the following states:

- **loading**
- **hover**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage (16:9 aspect ratio)

```tsx
import { AspectRatio } from '@paalstack/react-ui';
<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="Image" className="rounded object-cover" />
</AspectRatio>
```

#### Square aspect ratio (1:1)

```tsx
<AspectRatio ratio={1}>
  <img src="/avatar.jpg" alt="Avatar" className="rounded-full object-cover" />
</AspectRatio>
```

#### Video player (16:9)

```tsx
<AspectRatio ratio={16 / 9} className="bg-muted">
  <video controls className="size-full">
    <source src="/video.mp4" type="video/mp4" />
  </video>
</AspectRatio>
```

#### YouTube embed

```tsx
<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    className="size-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</AspectRatio>
```

#### Product image card

```tsx
<Card>
  <AspectRatio ratio={4 / 3}>
    <img
      src="/product.jpg"
      alt="Product"
      className="size-full object-cover"
    />
  </AspectRatio>
  <CardContent>
    <h3 className="font-semibold">{product.name}</h3>
    <p className="text-sm text-muted-foreground">${product.price}</p>
  </CardContent>
</Card>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/AspectRatio/AspectRatio.tsx`](../packages/components/src/AspectRatio/AspectRatio.tsx)
- **Index:** [`packages/components/src/AspectRatio/index.ts`](../packages/components/src/AspectRatio/index.ts)

---

## Avatar

**Purpose:** Displays a user avatar image with automatic fallback support.

### Import

```typescript
import { Avatar } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface AvatarProps {
  /**
  * The image source to use for the avatar.
  */
  src?: string;
  /**
  * Alt text for the avatar image.
  */
  alt?: string;
  /**
  * The fallback content to use when the `src` is not available.
  */
  fallback?: React.ReactNode;
  /**
  * Badge content to display on the avatar (e.g. online status indicator).
  */
  badge?: React.ReactNode;
  /**
  * Props to pass to the AvatarImage sub-component.
  */
  imageProps?: Omit<AvatarPrimitive.Image.Props, 'src'>;
  /**
  * Props to pass to the AvatarFallback sub-component.
  */
  fallbackProps?: AvatarPrimitive.Fallback.Props;
  /**
  * Props to pass to the AvatarBadge sub-component.
  */
  badgeProps?: React.ComponentProps<typeof AvatarBadge>;
}
```

### Dependencies

- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage with image

```tsx
import { Avatar } from '@paalstack/react-ui';
<Avatar src="/user-avatar.jpg" fallback="JD" />
```

#### With fallback text (initials)

```tsx
<Avatar fallback="JD" />
```

#### Different sizes

```tsx
<Avatar src="/avatar.jpg" fallback="SM" size="sm" />
<Avatar src="/avatar.jpg" fallback="LG" size="lg" />
```

#### With badge

```tsx
<Avatar src="/avatar.jpg" fallback="JD" badge />
```

#### With custom badge content

```tsx
<Avatar src="/avatar.jpg" fallback="JD" badge={<StatusIcon />} />
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Avatar/Avatar.tsx`](../packages/components/src/Avatar/Avatar.tsx)
- **Index:** [`packages/components/src/Avatar/index.ts`](../packages/components/src/Avatar/index.ts)

---

## Badge

**Purpose:** Displays a badge or a component that looks like a badge.

### Import

```typescript
import { Badge } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface BadgeProps {
  /**
  * Optional label for the badge
  */
  label?: React.ReactNode;
}
```

### States

This component supports the following states:

- **invalid/error**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage

```tsx
import { Badge } from '@paalstack/react-ui';
<Badge label="New" />
// or
<Badge>New</Badge>
```

#### Different color variants

```tsx
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="link">Link</Badge>
```

#### Different sizes

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

#### With render prop for composition

```tsx
<Badge variant="outline" render={<a href="/tags/react" />}>React</Badge>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Badge/Badge.tsx`](../packages/components/src/Badge/Badge.tsx)
- **Index:** [`packages/components/src/Badge/index.ts`](../packages/components/src/Badge/index.ts)

---

## Breadcrumb

**Purpose:** Displays the path to the current resource using a hierarchy of links.

### Import

```typescript
import { Breadcrumb } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface BreadcrumbProps {
  /**
  * The breadcrumb items to render.
  * The last item is automatically treated as the current page.
  */
  items: BreadcrumbItemType[];
  /**
  * A custom separator node. Defaults to `<ChevronRightIcon />`.
  */
  separator?: React.ReactNode;
  /**
  * When set, collapses middle items beyond this count and shows an ellipsis.
  */
  maxItems?: number;
}
```

### States

This component supports the following states:

- **disabled**
- **hover**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-label`
- `aria-disabled`
- `aria-current`
- `aria-hidden`
- `role="navigation"`
- `role="list"`
- `role="listitem"`
- `role="link"`
- `role="presentation"`

### Dependencies

- **Base UI** — unstyled accessible primitives

### Code Examples

#### Props API — basic

```tsx
import { Breadcrumb } from '@paalstack/react-ui';
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb' },
  ]}
/>
```

#### Props API — custom separator

```tsx
import { RxSlash } from '@paalstack/react-icons/rx';
<Breadcrumb
  separator={<RxSlash />}
  items={[
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile' },
  ]}
/>
```

#### Props API — collapse middle items

```tsx
<Breadcrumb
  maxItems={3}
  items={[
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile', href: '/settings/profile' },
    { label: 'Edit' },
  ]}
/>
```

#### Props API — with render prop for router links

```tsx
import { Link } from 'react-router-dom';
<Breadcrumb
  items={[
    { label: 'Home', render: <Link to="/" /> },
    { label: 'Components', render: <Link to="/components" /> },
    { label: 'Breadcrumb' },
  ]}
/>
```

#### Composition API — full control

```tsx
import {
  BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@paalstack/react-ui';
<BreadcrumbRoot>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</BreadcrumbRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Breadcrumb/Breadcrumb.tsx`](../packages/components/src/Breadcrumb/Breadcrumb.tsx)
- **Index:** [`packages/components/src/Breadcrumb/index.ts`](../packages/components/src/Breadcrumb/index.ts)

---

## Button

**Purpose:** A versatile button component with multiple variants, colors, sizes, and loading states.

### Import

```typescript
import { Button } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ButtonProps {
  asChild?: boolean;
  /**
  * Optional click handler
  */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
  * Optional label for the button
  */
  label?: string;
  /**
  * Optional variant for the button (solid, outline, ghost, soft, link).
  * @default default
  */
  variant?: ButtonVariant | 'default' | 'destructive' | 'secondary';
  /**
  * Optional color for the button.
  * @default primary
  */
  color?: AllColorVariant;
  /**
  * Optional left icon for the button
  */
  leftIcon?: React.ReactNode;
  /**
  * Optional right icon for the button
  */
  rightIcon?: React.ReactNode;
  /**
  * Optional loading state for the button
  */
  isLoading?: boolean;
  /**
  * Optional loading text for the button
  */
  loadingText?: string;
  /**
  * Optional unstyled button
  */
  unstyled?: boolean;
}
```

### States

This component supports the following states:

- **disabled**
- **expanded/collapsed**
- **invalid/error**
- **loading**
- **hover**
- **focus**
- **active**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `aria-expanded`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Related Components

- [Spinner](#spinner)

### Code Examples

#### Basic usage

```tsx
import { Button } from '@paalstack/react-ui';
<Button>Click me</Button>
```

#### shadcn v4 variants

```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
```

#### Project color variants with solid/soft/surface/ghost/outline

```tsx
<Button variant="solid" color="primary">Primary Button</Button>
<Button variant="outline" color="secondary">Outline Button</Button>
<Button variant="ghost" color="success">Ghost Button</Button>
<Button variant="soft" color="danger">Soft Button</Button>
```

#### With icons

```tsx
import { FiPlus, FiArrowRight } from '@paalstack/react-icons/fi';
<Button leftIcon={<FiPlus />}>Add Item</Button>
<Button rightIcon={<FiArrowRight />}>Next</Button>
<Button leftIcon={<FiPlus />} rightIcon={<FiArrowRight />}>Both Icons</Button>
```

#### Sizes

```tsx
<Button size="xs">XSmall</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><PlusIcon /></Button>
<Button size="icon-sm"><PlusIcon /></Button>
<Button size="icon-lg"><PlusIcon /></Button>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Button/Button.tsx`](../packages/components/src/Button/Button.tsx)
- **Index:** [`packages/components/src/Button/index.ts`](../packages/components/src/Button/index.ts)

---

## ButtonGroup

**Purpose:** A container that groups related buttons together with consistent styling and

### Import

```typescript
import { ButtonGroup } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ButtonGroupProps {
  /** Optional class name for the group container. */
  className?: string;
  /**
  * The buttons to render inside the group.
  * Set `separator: true` on an item to insert a `ButtonGroupSeparator` before it.
  */
  items: ButtonGroupItem[];
  /**
  * Layout direction of the group.
  * @default 'horizontal'
  */
  orientation?: 'horizontal' | 'vertical';
  /** Optional `aria-label` for the group. */
  'aria-label'?: string;
}
```

### States

This component supports the following states:

- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-hidden`
- `aria-label`
- `role="group"`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Related Components

- [Button](#button)
- [Separator](#separator)

### Code Examples

#### Props API — basic horizontal group

```tsx
import { ButtonGroup } from '@paalstack/react-ui';
<ButtonGroup
  items={[
    { label: 'Archive', onClick: () => {} },
    { label: 'Report', onClick: () => {} },
    { label: 'Snooze', onClick: () => {} },
  ]}
/>
```

#### Props API — with a separator

```tsx
<ButtonGroup
  items={[
    { label: 'Copy', onClick: handleCopy },
    { separator: true, label: 'Paste', onClick: handlePaste },
  ]}
/>
```

#### Props API — vertical orientation

```tsx
<ButtonGroup
  orientation="vertical"
  items={[
    { label: 'Option A' },
    { label: 'Option B' },
    { label: 'Option C' },
  ]}
/>
```

#### Props API — mixed variants

```tsx
<ButtonGroup
  items={[
    { label: 'Save', variant: 'default' },
    { separator: true, label: 'Discard', variant: 'outline' },
  ]}
/>
```

#### Composition API — full control

```tsx
import {
  ButtonGroupRoot,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@paalstack/react-ui';
<ButtonGroupRoot>
  <Button>Archive</Button>
  <ButtonGroupSeparator />
  <Button>Report</Button>
</ButtonGroupRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/ButtonGroup/ButtonGroup.tsx`](../packages/components/src/ButtonGroup/ButtonGroup.tsx)
- **Index:** [`packages/components/src/ButtonGroup/index.ts`](../packages/components/src/ButtonGroup/index.ts)

---

## Calendar

**Purpose:** A flexible calendar component built on react-day-picker for date selection.

### Import

```typescript
import { Calendar } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface CalendarProps {
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
}
```

### States

This component supports the following states:

- **disabled**
- **selected**
- **hover**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-disabled`
- `aria-selected`

### Dependencies

- **CVA** — class-variance-authority for variants

### Code Examples

#### Basic single date selection

```tsx
import { Calendar } from '@paalstack/react-ui';
const [date, setDate] = useState<Date>();
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>
```

#### Date range selection

```tsx
import { DateRange } from 'react-day-picker';
const [range, setRange] = useState<DateRange>();
<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
/>
```

#### Multiple date selection

```tsx
const [dates, setDates] = useState<Date[]>([]);
<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
/>
```

#### Disable past dates

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  fromDate={new Date()}
/>
```

#### Disable future dates

```tsx
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  toDate={new Date()}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Calendar/Calendar.tsx`](../packages/components/src/Calendar/Calendar.tsx)
- **Index:** [`packages/components/src/Calendar/index.ts`](../packages/components/src/Calendar/index.ts)

---

## Card

**Purpose:** A flexible card container component with optional header, footer, title, and description.

### Import

```typescript
import { Card } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface CardProps {
  /**
  * content for the card
  */
  children: React.ReactNode;
  /**
  * Optional header for the card
  */
  header?:
  | {
  /**
  * Optional title for the card header
  */
  title: React.ReactNode;
  /**
  * Optional description for the card header
  */
  description?: React.ReactNode;
  /**
  * Optional class name for the card header title
  */
  className?: string;
}
```

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage

```tsx
import { Card } from '@paalstack/react-ui';
<Card>
  <p>This is card content</p>
</Card>
```

#### With header (title and description)

```tsx
<Card
  header={{
    title: "Card Title",
    description: "This is a card description"
  }}
>
  <p>Card content goes here</p>
</Card>
```

#### With footer

```tsx
import { Button } from '@paalstack/react-ui';
<Card
  header={{ title: "Confirm Action" }}
  footer={
    <>
      <Button variant="ghost">Cancel</Button>
      <Button>Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Card>
```

#### With custom header (not using title/description object)

```tsx
<Card
  header={<div className="flex items-center gap-2"><Icon /> Custom Header</div>}
>
  <p>Card content</p>
</Card>
```

#### Using composition with CardHeader, CardTitle, etc.

```tsx
import { CardRoot, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@paalstack/react-ui';
<CardRoot>
  <CardHeader>
    <CardTitle>Custom Card</CardTitle>
    <CardDescription>Full control over card structure</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content with full customization</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</CardRoot>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Card/Card.tsx`](../packages/components/src/Card/Card.tsx)
- **Index:** [`packages/components/src/Card/index.ts`](../packages/components/src/Card/index.ts)

---

## Carousel

**Purpose:** A carousel/slider component built on embla-carousel-react for cycling

### Import

```typescript
import { Carousel } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface CarouselProps {
  className?: string;
  items: CarouselItemType[];
  showNavigation?: boolean;
  contentClassName?: string;
  itemClassName?: string;
  previousProps?: React.ComponentProps<typeof Button>;
  nextProps?: React.ComponentProps<typeof Button>;
}
```

### States

This component supports the following states:

- **disabled**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-roledescription`
- `role="region"`
- `role="group"`

### Dependencies

- **React Context** — for state management

### Related Components

- [Button](#button)

### Code Examples

#### Props API — basic usage

```tsx
import { Carousel } from '@paalstack/react-ui';
<Carousel
  items={[
    { key: '1', content: <div>Slide 1</div> },
    { key: '2', content: <div>Slide 2</div> },
    { key: '3', content: <div>Slide 3</div> },
  ]}
/>
```

#### Props API — vertical with loop

```tsx
<Carousel
  orientation="vertical"
  opts={{ loop: true }}
  items={[
    { key: 'a', content: <Card><CardContent>Panel A</CardContent></Card> },
    { key: 'b', content: <Card><CardContent>Panel B</CardContent></Card> },
  ]}
/>
```

#### Props API — without navigation buttons

```tsx
<Carousel
  showNavigation={false}
  items={[
    { key: '1', content: <img src="/slide-1.jpg" alt="Slide 1" /> },
    { key: '2', content: <img src="/slide-2.jpg" alt="Slide 2" /> },
  ]}
/>
```

#### Composition API

```tsx
import { CarouselRoot, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@paalstack/react-ui';
<CarouselRoot>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</CarouselRoot>
```

#### Composition API — partial-width slides

```tsx
<CarouselRoot>
  <CarouselContent className="-ml-2">
    <CarouselItem className="basis-1/3 pl-2">Slide 1</CarouselItem>
    <CarouselItem className="basis-1/3 pl-2">Slide 2</CarouselItem>
    <CarouselItem className="basis-1/3 pl-2">Slide 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</CarouselRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Using component outside of its required context provider
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Carousel/Carousel.tsx`](../packages/components/src/Carousel/Carousel.tsx)
- **Index:** [`packages/components/src/Carousel/index.ts`](../packages/components/src/Carousel/index.ts)

---

## Chart

**Purpose:** A collection of chart components built on Recharts for data visualization.

### Import

```typescript
import { Chart } from '@paalstack/react-ui';
```

### Dependencies

- **React Context** — for state management

### Code Examples

#### Basic bar chart

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@paalstack/react-ui';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
const chartData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
];
const chartConfig = {
  sales: { label: 'Sales', color: '#2563eb' },
};
<ChartContainer config={chartConfig} className="h-[300px]">
  <BarChart data={chartData}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="sales" fill="var(--color-sales)" />
  </BarChart>
</ChartContainer>
```

#### Line chart with multiple series

```tsx
const chartData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5000, expenses: 3800 },
];
const chartConfig = {
  revenue: { label: 'Revenue', color: '#10b981' },
  expenses: { label: 'Expenses', color: '#ef4444' },
};
<ChartContainer config={chartConfig}>
  <LineChart data={chartData}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line dataKey="revenue" stroke="var(--color-revenue)" />
    <Line dataKey="expenses" stroke="var(--color-expenses)" />
  </LineChart>
</ChartContainer>
```

#### Area chart

```tsx
<ChartContainer config={chartConfig}>
  <AreaChart data={chartData}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area
      dataKey="value"
      fill="var(--color-value)"
      stroke="var(--color-value)"
    />
  </AreaChart>
</ChartContainer>
```

#### Pie chart

```tsx
const pieData = [
  { category: 'Product A', value: 400, fill: 'var(--color-productA)' },
  { category: 'Product B', value: 300, fill: 'var(--color-productB)' },
  { category: 'Product C', value: 200, fill: 'var(--color-productC)' },
];
const pieConfig = {
  productA: { label: 'Product A', color: '#3b82f6' },
  productB: { label: 'Product B', color: '#10b981' },
  productC: { label: 'Product C', color: '#f59e0b' },
};
<ChartContainer config={pieConfig}>
  <PieChart>
    <Pie data={pieData} dataKey="value" nameKey="category" />
    <ChartTooltip content={<ChartTooltipContent />} />
  </PieChart>
</ChartContainer>
```

#### Dashboard with multiple charts

```tsx
<div className="grid gap-4 md:grid-cols-2">
  <Card>
    <CardHeader>
      <CardTitle>Monthly Sales</CardTitle>
    </CardHeader>
    <CardContent>
      <ChartContainer config={salesConfig} className="h-[200px]">
        <BarChart data={salesData}>
          <XAxis dataKey="month" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="sales" fill="var(--color-sales)" />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>Traffic Trend</CardTitle>
    </CardHeader>
    <CardContent>
      <ChartContainer config={trafficConfig} className="h-[200px]">
        <LineChart data={trafficData}>
          <XAxis dataKey="date" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line dataKey="visitors" stroke="var(--color-visitors)" />
        </LineChart>
      </ChartContainer>
    </CardContent>
  </Card>
</div>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Using component outside of its required context provider
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Chart/Chart.tsx`](../packages/components/src/Chart/Chart.tsx)
- **Index:** [`packages/components/src/Chart/index.ts`](../packages/components/src/Chart/index.ts)

---

## Checkbox

**Purpose:** A checkbox component that allows users to select one or multiple items from a list.

### Import

```typescript
import { Checkbox } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface CheckboxProps {
  /** Label for the checkbox */
  label?: React.ReactNode;
  /** Props for the label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /** Whether the checkbox is checked or not */
  checked?: boolean;
  /** Whether the checkbox is disabled or not */
  disabled?: boolean;
  /** Callback when the checkbox value changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Variant of the checkbox */
  variant?: VariantProps<typeof checkboxVariants>['variant'];
  /**
  * Whether the checkbox is swapped to the right or not
  */
  swapRight?: boolean;
  /**
  * The class name for the checkbox label
  */
  labelClassName?: string;
  /**
  * Whether the checkbox is invalid.
  */
  'aria-invalid'?: boolean;
  /**
  * whether the checkbox is invalid
  */
  isInvalid?: boolean;
  /**
  * The error message for the checkbox
  */
  errorMessage?: string;
  /**
  * Whether the checkbox is indeterminate or not
  */
  indeterminate?: boolean;
  /**
  * The class name for the checkbox root container
  */
  rootClassName?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **checked**
- **invalid/error**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `aria-checked`
- `aria-disabled`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Related Components

- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { Checkbox } from '@paalstack/react-ui';
<Checkbox label="Accept terms and conditions" />
```

#### Controlled checkbox

```tsx
const [checked, setChecked] = useState(false);
<Checkbox
  label="Subscribe to newsletter"
  checked={checked}
  onCheckedChange={setChecked}
/>
```

#### Different color variants

```tsx
<Checkbox variant="primary" label="Primary" />
<Checkbox variant="success" label="Success" />
<Checkbox variant="danger" label="Danger" />
<Checkbox variant="warning" label="Warning" />
<Checkbox variant="info" label="Info" />
```

#### Disabled checkbox

```tsx
<Checkbox label="Disabled checkbox" disabled checked />
```

#### Required checkbox with validation

```tsx
<Checkbox
  label="I agree to the terms"
  required
  isInvalid
  errorMessage="You must accept the terms to continue"
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Checkbox/Checkbox.tsx`](../packages/components/src/Checkbox/Checkbox.tsx)
- **Index:** [`packages/components/src/Checkbox/index.ts`](../packages/components/src/Checkbox/index.ts)

---

## CheckboxGroup

**Purpose:** A group of checkboxes that allows users to select multiple options.

### Import

```typescript
import { CheckboxGroup } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface CheckboxGroupProps {
  /** options for the checkbox group */
  options: Array<OptionType | string | number>;
  /** selectedValues for the checkbox group */
  selectedValues: string[] | undefined;
  /** Callback when the checkbox value changes */
  onSelectedValueChange: (selectedValues: string[]) => void;
  /** Label for the checkbox */
  label?: ReactNode;
  /** Props for the label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /**
  * The class name for the label
  */
  labelClassName?: string;
  /**
  * Whether the checkbox group is inline or not
  */
  inline?: boolean;
  /** Variant of the checkbox */
  variant?: ColorVariant;
  /**
  * Whether the checkbox is swapped to the right or not
  */
  swapRight?: boolean;
  /**
  * The class name for the checkbox group
  */
  className?: string;
  /**
  * Whether the checkbox group is required
  */
  required?: boolean;
  /**
  * Whether the checkbox group is invalid.
  */
  'aria-invalid'?: boolean;
  /**
  * whether the checkbox group is invalid
  */
  isInvalid?: boolean;
  /**
  * The error message for the checkbox
  */
  errorMessage?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Checkbox](#checkbox)
- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { CheckboxGroup } from '@paalstack/react-ui';
const [selected, setSelected] = useState<string[]>([]);
<CheckboxGroup
  options={['Option 1', 'Option 2', 'Option 3']}
  selectedValues={selected}
  onSelectedValueChange={setSelected}
/>
```

#### With label

```tsx
<CheckboxGroup
  label="Select your interests"
  options={['Reading', 'Sports', 'Music', 'Travel', 'Cooking']}
  selectedValues={interests}
  onSelectedValueChange={setInterests}
/>
```

#### With object options

```tsx
const hobbies = [
  { value: 'reading', label: 'Reading', key: 'reading' },
  { value: 'sports', label: 'Sports', key: 'sports' },
  { value: 'music', label: 'Music', key: 'music' },
];
<CheckboxGroup
  label="Hobbies"
  options={hobbies}
  selectedValues={selectedHobbies}
  onSelectedValueChange={setSelectedHobbies}
/>
```

#### Required field with validation

```tsx
<CheckboxGroup
  label="Terms and Conditions"
  options={[
    'I agree to the Terms of Service',
    'I agree to the Privacy Policy',
    'I agree to receive marketing emails'
  ]}
  selectedValues={agreements}
  onSelectedValueChange={setAgreements}
  required
  isInvalid={agreements.length < 2}
  errorMessage="You must agree to Terms and Privacy Policy"
/>
```

#### Inline layout (horizontal)

```tsx
<CheckboxGroup
  label="Days available"
  options={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
  selectedValues={days}
  onSelectedValueChange={setDays}
  inline
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/CheckboxGroup/CheckboxGroup.tsx`](../packages/components/src/CheckboxGroup/CheckboxGroup.tsx)
- **Index:** [`packages/components/src/CheckboxGroup/index.ts`](../packages/components/src/CheckboxGroup/index.ts)

---

## Collapsible

**Purpose:** An interactive component which expands/collapses a panel.

### Import

```typescript
import { Collapsible } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface CollapsibleProps {
  /** Content rendered inside the trigger button. */
  trigger?: React.ReactNode;
  /** Props forwarded to CollapsibleTrigger. */
  triggerProps?: Omit<CollapsiblePrimitive.Trigger.Props, 'children'>;
  /** Props forwarded to CollapsibleContent (Panel). */
  contentProps?: Omit<CollapsiblePrimitive.Panel.Props, 'children'>;
}
```

### States

This component supports the following states:

- **open/closed**

### Dependencies

- **Base UI** — unstyled accessible primitives

### Code Examples

#### Props API — basic usage

```tsx
import { Collapsible } from '@paalstack/react-ui';
<Collapsible trigger={<Button>Toggle Content</Button>}>
  <p>This content can be collapsed</p>
</Collapsible>
```

#### Props API — controlled

```tsx
const [isOpen, setIsOpen] = useState(false);
<Collapsible
  open={isOpen}
  onOpenChange={setIsOpen}
  trigger={
    <Button variant="outline">
      {isOpen ? 'Hide' : 'Show'} Details
    </Button>
  }
>
  <Card>
    <CardContent>
      <p>Detailed information goes here</p>
    </CardContent>
  </Card>
</Collapsible>
```

#### Composition API

```tsx
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from '@paalstack/react-ui';
<CollapsibleRoot>
  <CollapsibleTrigger>
    <Button>Toggle Content</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content can be collapsed</p>
  </CollapsibleContent>
</CollapsibleRoot>
```

#### Composition API — controlled

```tsx
const [isOpen, setIsOpen] = useState(false);
<CollapsibleRoot open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger>
    <Button variant="outline">
      {isOpen ? 'Hide' : 'Show'} Details
      <ChevronDownIcon className={cn('ml-2 transition-transform', isOpen && 'rotate-180')} />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="mt-2">
    <Card>
      <CardContent>
        <p>Detailed information goes here</p>
      </CardContent>
    </Card>
  </CollapsibleContent>
</CollapsibleRoot>
```

#### Filter section

```tsx
const [filtersOpen, setFiltersOpen] = useState(true);
<CollapsibleRoot open={filtersOpen} onOpenChange={setFiltersOpen}>
  <CollapsibleTrigger>
    <button className="flex w-full items-center justify-between p-4 font-medium">
      Filters
      <ChevronDownIcon className={cn('transition-transform', filtersOpen && 'rotate-180')} />
    </button>
  </CollapsibleTrigger>
  <CollapsibleContent className="px-4 pb-4">
    <div className="space-y-4">
      <Select label="Category" options={categories} />
      <Input label="Min Price" type="number" />
      <Input label="Max Price" type="number" />
      <Button>Apply Filters</Button>
    </div>
  </CollapsibleContent>
</CollapsibleRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Collapsible/Collapsible.tsx`](../packages/components/src/Collapsible/Collapsible.tsx)
- **Index:** [`packages/components/src/Collapsible/index.ts`](../packages/components/src/Collapsible/index.ts)

---

## Combobox

**Purpose:** Autocomplete input and command palette with a list of suggestions.

### Import

```typescript
import { Combobox } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ComboboxProps {
  /**
  * List of items for local (client-side) filtering.
  * When `fetchOptions` is provided this acts as the initial/fallback list shown
  * before the user starts typing. Defaults to [].
  */
  options?: Array<ComboboxOptionType>;
  /** Whether to select the option as the value @default false */
  selectOptionAsValue?: boolean;
  /** Whether the combobox is open */
  open?: boolean;
  /** @param open whether the combobox is open */
  onOpenChange?: (open: boolean) => void;
  /** Optional label for the combobox */
  label?: React.ReactNode;
  /** Optional placeholder for the search input @default Search... */
  placeholder?: string;
  /** Whether the combobox is required */
  required?: boolean;
  /** Optional disabled for the combobox */
  disabled?: boolean;
  /** Optional onBlur handler for the combobox */
  onBlur?: () => void;
  /** Whether the select is invalid. */
  'aria-invalid'?: boolean;
  /** whether the select is invalid */
  isInvalid?: boolean;
  /** Optional inline for the combobox */
  inline?: boolean;
  /** Optional contentClassName for the combobox */
  contentClassName?: string;
  /** Optional className for the combobox */
  className?: string;
  /** Optional id for the combobox */
  id?: string;
  /** The error message for the combobox */
  errorMessage?: string;
  /** onClear handler for the combobox to clear the value */
  onClear?: () => void;
  /** Message displayed when no options match the search */
  emptyOptionMessage?: React.ReactNode;
  /** Props for the input */
  inputProps?: React.ComponentProps<typeof ComboboxInput>;
  /** Props for the content */
  contentProps?: React.ComponentProps<typeof ComboboxContent>;
  /** Props for the list */
  listProps?: React.ComponentProps<typeof ComboboxList>;
  /** Props for the item */
  itemProps?: React.ComponentProps<typeof ComboboxItem>;
  /** Props for the empty */
  emptyProps?: React.ComponentProps<typeof ComboboxEmpty>;
  /** Props for the group */
  groupProps?: React.ComponentProps<typeof ComboboxGroup>;
  /** Props for the collection */
  collectionProps?: React.ComponentProps<typeof ComboboxCollection>;
  /** Props for the value */
  valueProps?: React.ComponentProps<typeof ComboboxValue>;
  /** Props for the label */
  labelProps?: React.ComponentProps<typeof Label>;
  /** Props for the combobox label */
  groupLabelProps?: React.ComponentProps<typeof ComboboxLabel>;
  /**
  * Props forwarded to the `ComboboxChips` container rendered when `multiple` is true.
  * Use this to customise the chip-container's className, aria attributes, etc.
  */
  chipsProps?: React.ComponentProps<typeof ComboboxChips>;
  /**
  * Props forwarded to every `ComboboxChip` rendered inside the chips container.
  * Useful for controlling `showRemove`, className, or other per-chip options.
  */
  chipProps?: React.ComponentProps<typeof ComboboxChip>;
  /**
  * Props forwarded to the `ComboboxChipsInput` (the text input inside the
  * chips container) when `multiple` is true.
  */
  chipsInputProps?: React.ComponentProps<typeof ComboboxChipsInput>;
  // ── Remote fetch ────────────────────────────────────────────────────────────
  /**
  * Async function called with the current search query to fetch options
  * from a remote source. When provided, local client-side filtering is
  * bypassed — the combobox displays whatever the function resolves with.
  *
  * @example
  * fetchOptions={async (query) => {
  *   const res = await fetch(`/api/users?q=${query
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **loading**
- **open/closed**
- **hover**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Related Components

- [Button](#button)
- [ErrorMessage](#errormessage)
- [InputGroup](#inputgroup)
- [Label](#label)

### Code Examples

#### Props API — basic usage

```tsx
import { Combobox } from '@paalstack/react-ui';
const [value, setValue] = useState('');
<Combobox
  options={['React', 'Vue', 'Angular', 'Svelte']}
  value={value}
  onValueChange={setValue}
  placeholder="Select framework..."
/>
```

#### Props API — remote fetch

```tsx
<Combobox
  label="User"
  value={userId}
  onValueChange={setUserId}
  placeholder="Search users..."
  fetchOptions={async (query) => {
    const res = await fetch(`/api/users?q=${encodeURIComponent(query)}`);
    return res.json(); // [{ value: '1', label: 'Alice' }, ...]
  }}
  fetchDebounce={400}
  loadingMessage="Searching users…"
  emptyOptionMessage="No users found."
/>
```

#### Props API — with label and validation

```tsx
<Combobox
  label="Country"
  options={countries}
  value={country}
  onValueChange={setCountry}
  required
  isInvalid={!country}
  errorMessage="Please select a country"
/>
```

#### Composition API — basic

```tsx
import { ComboboxRoot, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from '@paalstack/react-ui';
<ComboboxRoot>
  <ComboboxInput placeholder="Search..." />
  <ComboboxContent>
    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
    <ComboboxList>
      <ComboboxItem value="react">React</ComboboxItem>
      <ComboboxItem value="vue">Vue</ComboboxItem>
      <ComboboxItem value="angular">Angular</ComboboxItem>
    </ComboboxList>
  </ComboboxContent>
</ComboboxRoot>
```

#### Composition API — with groups

```tsx
<ComboboxRoot>
  <ComboboxInput placeholder="Search frameworks..." />
  <ComboboxContent>
    <ComboboxList>
      <ComboboxGroup>
        <ComboboxLabel>Frontend</ComboboxLabel>
        <ComboboxItem value="react">React</ComboboxItem>
        <ComboboxItem value="vue">Vue</ComboboxItem>
      </ComboboxGroup>
      <ComboboxSeparator />
      <ComboboxGroup>
        <ComboboxLabel>Backend</ComboboxLabel>
        <ComboboxItem value="express">Express</ComboboxItem>
        <ComboboxItem value="fastify">Fastify</ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
    <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
  </ComboboxContent>
</ComboboxRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Combobox/Combobox.tsx`](../packages/components/src/Combobox/Combobox.tsx)
- **Index:** [`packages/components/src/Combobox/index.ts`](../packages/components/src/Combobox/index.ts)

---

## Command

**Purpose:** A fast, composable command menu for your application.

### Import

```typescript
import { Command } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface CommandProps {
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
```

### States

This component supports the following states:

- **disabled**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [InputGroup](#inputgroup)

### Code Examples

#### Props API — basic usage

```tsx
import { Command } from '@paalstack/react-ui';
const [open, setOpen] = useState(false);
<Command
  open={open}
  onOpenChange={setOpen}
  groups={[
    {
      heading: 'Suggestions',
      items: [
        { label: 'Dashboard', onSelect: () => navigate('/dashboard') },
        { label: 'Profile', onSelect: () => navigate('/profile') },
        { label: 'Settings', onSelect: () => navigate('/settings') },
      ]
    }
  ]}
/>
```

#### Composition API

```tsx
import {
  CommandDialog,
  CommandRoot,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from '@paalstack/react-ui';
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandRoot>
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem onSelect={() => {}}>Calendar</CommandItem>
        <CommandItem onSelect={() => {}}>
          Search
          <CommandShortcut>⌘K</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandRoot>
</CommandDialog>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Command/Command.tsx`](../packages/components/src/Command/Command.tsx)
- **Index:** [`packages/components/src/Command/index.ts`](../packages/components/src/Command/index.ts)

---

## ContextMenu

**Purpose:** ContextMenu Component (Props API)
 *
 * Displays a menu to the user upon right-click or long-press.

### Import

```typescript
import { ContextMenu } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ContextMenuProps {
  /** The trigger element that the user right-clicks */
  trigger: ReactNode;
  /** The menu items to render */
  items: ContextMenuEntry[];
  /** Optional className for the trigger wrapper */
  triggerClassName?: string;
  /** Optional className for the content popover */
  contentClassName?: string;
  /** Optional props for the ContextMenuContent */
  contentProps?: ContextMenuPrimitive.Popup.Props;
  /** Optional props for the ContextMenuTrigger */
  triggerProps?: ContextMenuPrimitive.Trigger.Props;
}
```

### States

This component supports the following states:

- **disabled**
- **open/closed**
- **focus**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Basic usage

```tsx
import { ContextMenu } from '@paalstack/react-ui';
<ContextMenu
  trigger={<div className="border rounded p-4">Right-click me</div>}
  items={[
    { label: 'Back', shortcut: '⌘[', inset: true },
    { label: 'Forward', shortcut: '⌘]', inset: true, disabled: true },
    { label: 'Reload', shortcut: '⌘R', inset: true },
    { type: 'separator' },
    { type: 'checkbox', label: 'Show Bookmarks Bar', checked: true, shortcut: '⌘⇧B' },
    { type: 'checkbox', label: 'Show Full URLs' },
  ]}
/>
```

#### With submenus and radio groups

```tsx
<ContextMenu
  trigger={<div className="border rounded p-4">Right-click me</div>}
  items={[
    { label: 'Cut', shortcut: '⌘X' },
    { label: 'Copy', shortcut: '⌘C' },
    { label: 'Paste', shortcut: '⌘V' },
    { type: 'separator' },
    {
      type: 'submenu',
      label: 'More Tools',
      items: [
        { label: 'Save Page As...', shortcut: '⇧⌘S' },
        { label: 'Developer Tools' },
      ],
    },
    { type: 'separator' },
    {
      type: 'radio-group',
      label: 'People',
      value: 'pedro',
      inset: true,
      items: [
        { value: 'pedro', label: 'Pedro' },
        { value: 'colm', label: 'Colm' },
      ],
    },
  ]}
/>
```

#### With destructive variant

```tsx
<ContextMenu
  trigger={<div className="border rounded p-4">Right-click me</div>}
  items={[
    { label: 'Edit' },
    { label: 'Duplicate' },
    { type: 'separator' },
    { label: 'Delete', variant: 'destructive' },
  ]}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/ContextMenu/ContextMenu.tsx`](../packages/components/src/ContextMenu/ContextMenu.tsx)
- **Index:** [`packages/components/src/ContextMenu/index.ts`](../packages/components/src/ContextMenu/index.ts)

---

## DataTable

**Purpose:** A powerful and feature-rich data table built on TanStack Table (react-table).

### Import

```typescript
import { DataTable } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface DataTableProps {
  /**
  * provide the columns to render in the table
  */
  columns: DataTableColumnDef<TRow, TValue>[];
  /**
  * provide the data to render in the table
  */
  rows: TRow[];
  /**
  * Make sure you pass the setTable function directly without wrapping in useCallback
  * @param table instance of the table
  * @returns
  */
  setTable?: (table: DataTableInstance<TRow>) => void;
  /**
  * enable the selectable checkbox input in the table header
  */
  enableSelectableTable?: boolean;
  /**
  * provide the column accessorKey value to search the table
  */
  search?: DataTableSearchFilterColumn;
  /**
  * provide the column accessorKey value to filter the table
  */
  facetFilterColumns?: DataTableFacetFilterColumn[];
  /**
  * show the table toolbar
  */
  showTableConfigure?: boolean;
  /**
  * show the pagination
  * @default false
  */
  showPagination?: boolean;
  /**
  * Props forwarded directly to the Pagination component rendered inside the table.
  * Accepts all PaginationProps: pageSize, pageSizeOptions, showPageSizeOptions,
  * showTotalResults, showOnlyNextAndPrevious, pageSizeText, siblings, boundaries, etc.
  * The table's row count and page index are controlled internally — total, currentPage,
  * onPageChange, and onPageSizeChange are managed by the DataTable.
  *
  * @example
  * // Basic page size configuration
  * <DataTable paginationProps={{ pageSize: 10
}
```

### States

This component supports the following states:

- **loading**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Loading](#loading)
- [Table](#table)

### Code Examples

#### Basic page size configuration

```tsx
<DataTable paginationProps={{ pageSize: 10 }} />
```

#### With total results and custom page sizes

```tsx
<DataTable paginationProps={{ showTotalResults: true, pageSizeOptions: [10, 25, 50] }} />
```

#### Next/previous only

```tsx
<DataTable paginationProps={{ showOnlyNextAndPrevious: true, showPageSizeOptions: false }} />
```

#### Custom page size label

```tsx
<DataTable paginationProps={{ pageSizeText: 'rows per page' }} />
```

#### Example

```tsx
// custom filter logic
   return true; // return true to include the row, false to exclude it
}
<DataTable globalFilterFn={customGlobalFilter} />
@default undefined
If not provided, the default global filter function from react-table will be used.
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/DataTable/DataTable.tsx`](../packages/components/src/DataTable/DataTable.tsx)
- **Index:** [`packages/components/src/DataTable/index.ts`](../packages/components/src/DataTable/index.ts)

---

## DatePicker

**Purpose:** A date picker component with calendar, presets, and validation support.

### Import

```typescript
import { DatePicker } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface DatePickerProps {
  /**
  * The selected date.
  */
  date?: Date | string;
  /**
  * Callback when the selected date changes.
  */
  onDateChange?: (date: Date | undefined) => void;
  /**
  * Additional class names to apply to the date picker.
  */
  className?: string;
  /**
  * Label for the date picker.
  */
  label?: string;
  /**
  * Placeholder text for the date picker.
  */
  placeholder?: string;
  /**
  * Date format to use
  */
  dateFormat?: string;
  /**
  * Placeholder text for the presets.
  */
  presetPlaceholder?: string;
  /**
  * Preset values to show.
  * value is the number of days to add to the current date.
  */
  presets?: {
  label: string;
  value: number;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Calendar](#calendar)
- [Button](#button)
- [ErrorMessage](#errormessage)
- [Label](#label)
- [Popover](#popover)
- [Select](#select)

### Code Examples

#### Basic usage

```tsx
import { DatePicker } from '@paalstack/react-ui';
const [date, setDate] = useState<Date>();
<DatePicker date={date} onDateChange={setDate} />
```

#### With label

```tsx
<DatePicker
  label="Select Date"
  date={date}
  onDateChange={setDate}
  placeholder="Choose a date"
/>
```

#### Required field with validation

```tsx
<DatePicker
  label="Birth Date"
  date={date}
  onDateChange={setDate}
  required
  isInvalid={!date}
  errorMessage="Birth date is required"
/>
```

#### With date presets (quick select)

```tsx
<DatePicker
  label="Due Date"
  date={date}
  onDateChange={setDate}
  presets={[
    { label: 'Today', value: 0 },
    { label: 'Tomorrow', value: 1 },
    { label: 'In 3 days', value: 3 },
    { label: 'In 7 days', value: 7 },
    { label: 'In 14 days', value: 14 },
  ]}
  presetPlaceholder="Quick select"
/>
```

#### Custom date format

```tsx
<DatePicker
  date={date}
  onDateChange={setDate}
  dateFormat="MM/dd/yyyy" // Default is "PPP" (e.g., "April 29th, 2023")
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/DatePicker/DatePicker.tsx`](../packages/components/src/DatePicker/DatePicker.tsx)
- **Index:** [`packages/components/src/DatePicker/index.ts`](../packages/components/src/DatePicker/index.ts)

---

## DateRangePicker

**Purpose:** A date range picker component for selecting start and end dates with calendar and preset support.

### Import

```typescript
import { DateRangePicker } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface DateRangePickerProps {
  /**
  * The selected date.
  */
  dateRange?: DateRange;
  /**
  * Callback when the selected date changes.
  */
  onDateRangeChange?: (date: DateRange | undefined) => void;
  /**
  * Additional class names to apply to the date picker.
  */
  className?: string;
  /**
  * Label for the date picker.
  */
  label?: string;
  /**
  * Placeholder text for the date picker.
  */
  placeholder?: string;
  /**
  * Number of months to show in the calendar
  */
  numberOfMonths?: number;
  /**
  * Date format to use
  */
  dateFormat?: string;
  /**
  * Placeholder text for the presets.
  */
  presetPlaceholder?: string;
  /**
  * Preset values to show.
  * value is the number of days to add to the current date.
  */
  presets?: DateRangePreset[];
  /**
  * required or not
  */
  required?: boolean;
  /**
  * Whether the checkbox is invalid.
  */
  'aria-invalid'?: boolean;
  /**
  * whether the checkbox is invalid
  */
  isInvalid?: boolean;
  /**
  *  id for the date picker
  */
  id?: string;
  /**
  * The error message for the checkbox
  */
  errorMessage?: string;
  /**
  * Parent class name for the date range picker
  */
  wrapperClassName?: string;
  /**
  * Whether the date picker is disabled or not
  */
  disabled?: boolean;
  /**
  * Additional props for the calendar component.
  */
  calendarProps?: Omit<CalendarProps, 'mode' | 'selected' | 'onSelect'>;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Calendar](#calendar)
- [Button](#button)
- [ErrorMessage](#errormessage)
- [Label](#label)
- [Popover](#popover)
- [Select](#select)

### Code Examples

#### Basic usage

```tsx
import { DateRangePicker } from '@paalstack/react-ui';
import { DateRange } from 'react-day-picker';
const [dateRange, setDateRange] = useState<DateRange>();
<DateRangePicker
  dateRange={dateRange}
  onDateRangeChange={setDateRange}
/>
```

#### With label

```tsx
<DateRangePicker
  label="Select Date Range"
  dateRange={dateRange}
  onDateRangeChange={setDateRange}
  placeholder="Pick date range"
/>
```

#### Required field with validation

```tsx
<DateRangePicker
  label="Event Duration"
  dateRange={dateRange}
  onDateRangeChange={setDateRange}
  required
  isInvalid={!dateRange?.from || !dateRange?.to}
  errorMessage="Please select both start and end dates"
/>
```

#### With presets (quick select common ranges)

```tsx
<DateRangePicker
  label="Report Period"
  dateRange={dateRange}
  onDateRangeChange={setDateRange}
  presets={[
    { label: 'Today', from: 0, to: 0 },
    { label: 'Last 7 days', from: -7, to: 0 },
    { label: 'Last 30 days', from: -30, to: 0 },
    { label: 'Last 90 days', from: -90, to: 0 },
  ]}
  presetPlaceholder="Quick select"
/>
```

#### Disabled state

```tsx
<DateRangePicker
  label="Fixed Date Range"
  dateRange={fixedRange}
  disabled
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/DateRangePicker/DateRangePicker.tsx`](../packages/components/src/DateRangePicker/DateRangePicker.tsx)
- **Index:** [`packages/components/src/DateRangePicker/index.ts`](../packages/components/src/DateRangePicker/index.ts)

---

## Dialog

**Purpose:** A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

### Import

```typescript
import { Dialog } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface DialogProps {
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
}
```

### States

This component supports the following states:

- **open/closed**
- **hover**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Related Components

- [Button](#button)

### Code Examples

#### Basic usage

```tsx
import { Dialog, Button } from '@paalstack/react-ui';
<Dialog
  trigger={<Button>Open Dialog</Button>}
  header={{ title: "Dialog Title", description: "Dialog description" }}
>
  <p>Dialog content goes here</p>
</Dialog>
```

#### Controlled dialog

```tsx
const [open, setOpen] = useState(false);
<Dialog
  open={open}
  onOpenChange={setOpen}
  header={{ title: "Controlled Dialog" }}
>
  <p>This is a controlled dialog</p>
</Dialog>
<Button onClick={() => setOpen(true)}>Open Dialog</Button>
```

#### With footer (actions)

```tsx
const [open, setOpen] = useState(false);
<Dialog
  open={open}
  onOpenChange={setOpen}
  header={{
    title: "Confirm Action",
    description: "Are you sure you want to proceed?"
  }}
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => {  setOpen(false); }}>
        Confirm
      </Button>
    </>
  }
>
  <p>This action cannot be undone.</p>
</Dialog>
```

#### Without close button

```tsx
<Dialog
  trigger={<Button>Open</Button>}
  header={{ title: "Important Message" }}
  dialogContentProps={{ showCloseButton: false }}
  footer={<Button onClick={() => {}}>I Understand</Button>}
>
  <p>This dialog requires your acknowledgment.</p>
</Dialog>
```

#### Using composition with DialogRoot, DialogTrigger, DialogContent

```tsx
import { DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@paalstack/react-ui';
<DialogRoot>
  <DialogTrigger render={<Button>Open</Button>} />
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Dialog</DialogTitle>
      <DialogDescription>Full control over dialog structure</DialogDescription>
    </DialogHeader>
    <div className="py-4">
      Dialog content here
    </div>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</DialogRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Dialog/Dialog.tsx`](../packages/components/src/Dialog/Dialog.tsx)
- **Index:** [`packages/components/src/Dialog/index.ts`](../packages/components/src/Dialog/index.ts)

---

## Direction

**Purpose:** Component

### Import

```typescript
import { Direction } from '@paalstack/react-ui';
```

### Dependencies

- **Base UI** — unstyled accessible primitives

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Direction/Direction.tsx`](../packages/components/src/Direction/Direction.tsx)
- **Index:** [`packages/components/src/Direction/index.ts`](../packages/components/src/Direction/index.ts)

---

## Drawer

**Purpose:** Drawer Component Family
 *
 * A drawer component for React built on top of Vaul by @emilkowalski.

### Import

```typescript
import { Drawer } from '@paalstack/react-ui';
```

### States

This component supports the following states:

- **open/closed**

### Dependencies

- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Prop-based API

```tsx
import { Drawer, Button } from '@paalstack/react-ui';
<Drawer
  trigger={<Button>Open</Button>}
  title="Are you absolutely sure?"
  description="This action cannot be undone."
  footer={
    <>
      <Button>Submit</Button>
      <DrawerClose><Button variant="outline">Cancel</Button></DrawerClose>
    </>
  }
>
  <p>Optional body content</p>
</Drawer>
```

#### Compound API (full control)

```tsx
import { DrawerRoot, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@paalstack/react-ui';
<DrawerRoot>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose><Button variant="outline">Cancel</Button></DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</DrawerRoot>
```

#### Drawer with direction (sides)

```tsx
<Drawer direction="right">
  <DrawerTrigger>Open Right</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Side Panel</DrawerTitle>
      <DrawerDescription>Content slides from the right.</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>
```

#### Controlled drawer

```tsx
const [open, setOpen] = useState(false);
<Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Controlled Drawer</DrawerTitle>
    </DrawerHeader>
    <DrawerFooter>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

#### All directions

```tsx
<Drawer direction="top">...</Drawer>
<Drawer direction="right">...</Drawer>
<Drawer direction="bottom">...</Drawer>
<Drawer direction="left">...</Drawer>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Drawer/Drawer.tsx`](../packages/components/src/Drawer/Drawer.tsx)
- **Index:** [`packages/components/src/Drawer/index.ts`](../packages/components/src/Drawer/index.ts)

---

## DropdownMenu

**Purpose:** Displays a menu to the user — such as a set of actions or functions — triggered by a button.

### Import

```typescript
import { DropdownMenu } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface DropdownMenuProps {
  /**
  * The trigger element that will open the dropdown menu.
  */
  trigger?: React.ReactNode;
  /**
  * The items to display in the dropdown menu.
  */
  items: DropdownMenuItemType[];
  /**
  * The title heading for the dropdown menu.
  */
  title?: React.ReactNode;
  /**
  * The props for the content of the dropdown menu.
  */
  contentProps?: React.ComponentPropsWithoutRef<typeof DropdownMenuContent>;
  /**
  * The class name for the trigger of the dropdown menu.
  */
  triggerClassName?: string;
  /**
  * The props for the trigger of the dropdown menu.
  */
  triggerProps?: React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger>;
  /**
  * The props for the group of the dropdown menu.
  */
  groupProps?: React.ComponentPropsWithoutRef<typeof DropdownMenuGroup>;
}
```

### States

This component supports the following states:

- **disabled**
- **open/closed**
- **hover**
- **focus**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Basic usage

```tsx
import { DropdownMenu, Button } from '@paalstack/react-ui';
<DropdownMenu
  trigger={<Button>Menu</Button>}
  items={[
    { label: 'Profile', onClick: () => navigate('/profile') },
    { label: 'Settings', onClick: () => navigate('/settings') },
    { separator: true },
    { label: 'Logout', onClick: handleLogout },
  ]}
/>
```

#### With title/header

```tsx
<DropdownMenu
  trigger={<Button>Options</Button>}
  title="My Account"
  items={[
    { label: 'Profile', onClick: () => {} },
    { label: 'Settings', onClick: () => {} },
    { separator: true },
    { label: 'Logout', onClick: () => {} },
  ]}
/>
```

#### With keyboard shortcuts

```tsx
<DropdownMenu
  trigger={<Button>File</Button>}
  items={[
    { label: 'New File', shortcut: '⌘N', onClick: handleNew },
    { label: 'Open', shortcut: '⌘O', onClick: handleOpen },
    { label: 'Save', shortcut: '⌘S', onClick: handleSave },
    { separator: true },
    { label: 'Exit', shortcut: '⌘Q', onClick: handleExit },
  ]}
/>
```

#### With sub-menus

```tsx
<DropdownMenu
  trigger={<Button>Edit</Button>}
  items={[
    { label: 'Undo', shortcut: '⌘Z', onClick: handleUndo },
    { label: 'Redo', shortcut: '⇧⌘Z', onClick: handleRedo },
    { separator: true },
    {
      label: 'Transform',
      subItems: [
        { label: 'Uppercase', onClick: () => transform('uppercase') },
        { label: 'Lowercase', onClick: () => transform('lowercase') },
        { label: 'Title Case', onClick: () => transform('titlecase') },
      ]
    },
  ]}
/>
```

#### User menu with avatar

```tsx
<DropdownMenu
  trigger={
    <Button variant="ghost" className="flex items-center gap-2">
      <Avatar src="/user.jpg" fallback="JD" />
      <span>John Doe</span>
    </Button>
  }
  items={[
    { label: 'My Profile', onClick: () => navigate('/profile') },
    { label: 'Account Settings', onClick: () => navigate('/settings') },
    { label: 'Billing', onClick: () => navigate('/billing') },
    { separator: true },
    { label: 'Sign Out', onClick: handleSignOut },
  ]}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/DropdownMenu/DropdownMenu.tsx`](../packages/components/src/DropdownMenu/DropdownMenu.tsx)
- **Index:** [`packages/components/src/DropdownMenu/index.ts`](../packages/components/src/DropdownMenu/index.ts)

---

## Empty

**Purpose:** A flexible empty state component for displaying placeholder content when lists, tables,

### Import

```typescript
import { Empty } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface EmptyProps {
  /** Content for EmptyMedia (icon, avatar, etc.) */
  media?: ReactNode;
  /** Variant for EmptyMedia - "icon" for icons, "default" for avatars/custom */
  mediaVariant?: EmptyMediaProps['variant'];
  /** Title text or element */
  title?: ReactNode;
  /** Description text or element */
  description?: ReactNode;
  /** Action buttons or other content in EmptyContent */
  content?: ReactNode;
  /** Props for EmptyHeader */
  headerProps?: React.ComponentPropsWithRef<typeof EmptyHeader>;
  /** Props for EmptyMedia */
  mediaProps?: React.ComponentPropsWithRef<typeof EmptyMedia>;
  /** Props for EmptyTitle */
  titleProps?: React.ComponentPropsWithRef<typeof EmptyTitle>;
  /** Props for EmptyDescription */
  descriptionProps?: React.ComponentPropsWithRef<typeof EmptyDescription>;
  /** Props for EmptyContent */
  contentProps?: React.ComponentPropsWithRef<typeof EmptyContent>;
}
```

### Dependencies

- **CVA** — class-variance-authority for variants

### Code Examples

#### Basic empty state

```tsx
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@paalstack/react-ui';
import { LuInbox } from '@paalstack/react-icons/lu';
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <LuInbox className="size-12" />
    </EmptyMedia>
    <EmptyTitle>No Messages</EmptyTitle>
    <EmptyDescription>You don't have any messages yet.</EmptyDescription>
  </EmptyHeader>
</Empty>
```

#### Empty state with action button

```tsx
import { Button } from '@paalstack/react-ui';
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <LuFolder className="size-12" />
    </EmptyMedia>
    <EmptyTitle>No Projects Yet</EmptyTitle>
    <EmptyDescription>
      You haven't created any projects yet. Get started by creating your first project.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Create Project</Button>
  </EmptyContent>
</Empty>
```

#### Empty state with avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@paalstack/react-ui';
<Empty>
  <EmptyHeader>
    <EmptyMedia>
      <Avatar>
        <AvatarImage src="/user.png" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </EmptyMedia>
    <EmptyTitle>User Offline</EmptyTitle>
    <EmptyDescription>
      This user is currently offline. Try again later.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="outline">Leave Message</Button>
  </EmptyContent>
</Empty>
```

#### Empty state with multiple actions

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <LuFile className="size-12" />
    </EmptyMedia>
    <EmptyTitle>No Files Found</EmptyTitle>
    <EmptyDescription>
      Upload files to get started with your project.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Upload File</Button>
    <Button variant="outline">Browse Files</Button>
  </EmptyContent>
</Empty>
```

#### Empty state with border (outline style)

```tsx
<Empty className="border rounded-lg p-8">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <CloudIcon className="size-12" />
    </EmptyMedia>
    <EmptyTitle>Cloud Storage Empty</EmptyTitle>
    <EmptyDescription>
      Upload files to your cloud storage to access them anywhere.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Upload Files</Button>
  </EmptyContent>
</Empty>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Empty/Empty.tsx`](../packages/components/src/Empty/Empty.tsx)
- **Index:** [`packages/components/src/Empty/index.ts`](../packages/components/src/Empty/index.ts)

---

## Error

**Purpose:** ErrorBoundary Component
 *
 * A React error boundary that catches JavaScript errors anywhere in the child component tree.

### Import

```typescript
import { Error } from '@paalstack/react-ui';
```

### Accessibility (ARIA)

Built-in accessibility attributes:

- `role="alert"`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage with default fallback

```tsx
import { ErrorBoundary } from '@paalstack/react-ui';
<ErrorBoundary>
  <YourApp />
</ErrorBoundary>
```

#### With custom fallback component

```tsx
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourApp />
</ErrorBoundary>
```

#### With error logging

```tsx
<ErrorBoundary
  onError={(error, errorInfo) => {
    console.error('Caught error:', error, errorInfo);
    // Log to error tracking service (e.g., Sentry)
    logErrorToService(error, errorInfo);
  }}
>
  <YourApp />
</ErrorBoundary>
```

#### With reset keys (resets when keys change)

```tsx
const [userId, setUserId] = useState(null);
<ErrorBoundary resetKeys={[userId]}>
  <UserProfile userId={userId} />
</ErrorBoundary>
```

#### Wrapping specific components

```tsx
<ErrorBoundary>
  <Dashboard>
    <ErrorBoundary>
      <Widget1 />
    </ErrorBoundary>
    <ErrorBoundary>
      <Widget2 />
    </ErrorBoundary>
  </Dashboard>
</ErrorBoundary>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Error/ErrorBoundary.tsx`](../packages/components/src/Error/ErrorBoundary.tsx)
- **Index:** [`packages/components/src/Error/index.ts`](../packages/components/src/Error/index.ts)

---

## ErrorMessage

**Purpose:** Displays error messages for form fields and validation feedback.

### Import

```typescript
import { ErrorMessage } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ErrorMessageProps {
  /**
  * The error message to display.
  */
  message?: React.ReactNode;
  /**
  * Additional class names to apply to the error message.
  */
  className?: string;
  /**
  * Optional label for the error message to be displayed.
  * this label will be suffix with "is required"
  */
  label?: string;
}
```

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage

```tsx
import { ErrorMessage } from '@paalstack/react-ui';
<ErrorMessage message="This field is required" />
```

#### With label (auto-generates message)

```tsx
<ErrorMessage label="Email" />
// Outputs: "Email is required"
```

#### Form field with error

```tsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    isInvalid={!!error}
  />
  {error && <ErrorMessage message={error} />}
</div>
```

#### Conditional error display

```tsx
<div>
  <Input
    label="Password"
    type="password"
    value={password}
    onChange={handleChange}
    isInvalid={passwordError}
  />
  <ErrorMessage message={passwordError && "Password must be at least 8 characters"} />
</div>
```

#### Multiple validation messages

```tsx
const errors = [];
if (password.length < 8) errors.push("At least 8 characters");
if (!/[A-Z]/.test(password)) errors.push("One uppercase letter");
if (!/[0-9]/.test(password)) errors.push("One number");
<div>
  <Input label="Password" type="password" />
  {errors.length > 0 && (
    <div className="space-y-1">
      {errors.map((error, i) => (
        <ErrorMessage key={i} message={`• ${error}`} />
      ))}
    </div>
  )}
</div>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/ErrorMessage/ErrorMessage.tsx`](../packages/components/src/ErrorMessage/ErrorMessage.tsx)
- **Index:** [`packages/components/src/ErrorMessage/index.ts`](../packages/components/src/ErrorMessage/index.ts)

---

## Field

**Purpose:** Field Component Family
 *
 * A comprehensive set of components for building accessible, composable form fields.

### Import

```typescript
import { Field } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface FieldProps {
  /** Label for the field (renders FieldLabel) */
  label?: React.ReactNode;
  /** Description or hint (renders FieldDescription) */
  description?: React.ReactNode;
  /** Custom error content (renders FieldError with children) */
  error?: React.ReactNode;
  /** Validation errors for FieldError (e.g. from react-hook-form) */
  errors?: Array<{ message?: string
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `role="group"`
- `role="alert"`

### Dependencies

- **CVA** — class-variance-authority for variants

### Related Components

- [Label](#label)
- [Separator](#separator)

### Code Examples

#### Basic field with label and description

```tsx
import { Field, FieldLabel, FieldDescription } from '@paalstack/react-ui';
import { Input } from '@paalstack/react-ui';
<Field>
  <FieldLabel htmlFor="username">Username</FieldLabel>
  <Input id="username" placeholder="Enter username" />
  <FieldDescription>Choose a unique username for your account.</FieldDescription>
</Field>
```

#### Field with validation error

```tsx
<Field data-invalid>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" aria-invalid />
  <FieldError>Please enter a valid email address.</FieldError>
</Field>
```

#### Horizontal field layout (label beside control)

```tsx
import { Switch } from '@paalstack/react-ui';
<Field orientation="horizontal">
  <Switch id="newsletter" />
  <FieldLabel htmlFor="newsletter">Subscribe to newsletter</FieldLabel>
</Field>
```

#### Field with label and description beside control

```tsx
import { Checkbox } from '@paalstack/react-ui';
<Field orientation="horizontal">
  <Checkbox id="terms" />
  <FieldContent>
    <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
    <FieldDescription>You must accept the terms to continue.</FieldDescription>
  </FieldContent>
</Field>
```

#### FieldSet with multiple fields

```tsx
<FieldSet>
  <FieldLegend>Profile Information</FieldLegend>
  <FieldDescription>Fill in your profile details below.</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full Name</FieldLabel>
      <Input id="name" />
    </Field>
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" />
    </Field>
  </FieldGroup>
</FieldSet>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Field/Field.tsx`](../packages/components/src/Field/Field.tsx)
- **Index:** [`packages/components/src/Field/index.ts`](../packages/components/src/Field/index.ts)

---

## FileUpload

**Purpose:** Internal hook that retrieves the file upload store from context.

### Import

```typescript
import { FileUpload } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface FileUploadProps {
  value?: File[];
  defaultValue?: File[];
  onValueChange?: (files: File[]) => void;
  onAccept?: (files: File[]) => void;
  onFileAccept?: (file: File) => void;
  onFileReject?: (file: File, message: string) => void;
  onFileValidate?: (file: File) => string | null | undefined;
  onUpload?: (
  files: File[],
  options: {
  onProgress: (file: File, progress: number) => void;
  onSuccess: (file: File) => void;
  onError: (file: File, error: Error) => void;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-labelledby`
- `aria-describedby`
- `aria-controls`
- `aria-disabled`
- `aria-invalid`
- `aria-orientation`
- `aria-setsize`
- `aria-posinset`
- `aria-valuemin`
- `aria-valuemax`
- `aria-valuenow`
- `aria-valuetext`
- `role="region"`
- `role="list"`
- `role="listitem"`

### Dependencies

- **Base UI** — unstyled accessible primitives
- **React Context** — for state management

### Code Examples

#### Track the number of uploaded files

```tsx
const fileCount = useFileUpload((state) => state.files.size);
```

#### Check whether a drag is currently in progress

```tsx
const isDragging = useFileUpload((state) => state.dragOver);
```

#### Basic uncontrolled usage

```tsx
<FileUpload multiple accept="image/*" maxFiles={5} maxSize={5 * 1024 * 1024}>
  <FileUploadDropzone />
  <FileUploadList>
    {files.map((file, i) => (
      <FileUploadItem key={i} value={file}>
        <FileUploadItemPreview />
        <FileUploadItemMetadata />
        <FileUploadItemDelete />
      </FileUploadItem>
    ))}
  </FileUploadList>
</FileUpload>
```

#### Controlled usage with upload callback

```tsx
const [files, setFiles] = useState<File[]>([]);
const onUpload = async (files, { onProgress, onSuccess, onError }) => {
  for (const file of files) {
    try {
      await uploadToServer(file, (p) => onProgress(file, p));
      onSuccess(file);
    } catch (err) {
      onError(file, err instanceof Error ? err : new Error('Upload failed'));
    }
  }
};
<FileUpload value={files} onValueChange={setFiles} onUpload={onUpload} multiple>
  <FileUploadDropzone />
  <FileUploadList>
    {files.map((file, i) => (
      <FileUploadItem key={i} value={file} className="flex-col">
        <div className="flex w-full items-center gap-2">
          <FileUploadItemPreview />
          <FileUploadItemMetadata />
          <FileUploadItemDelete />
        </div>
        <FileUploadItemProgress />
      </FileUploadItem>
    ))}
  </FileUploadList>
</FileUpload>
```

#### With custom file validation

```tsx
<FileUpload
  accept="image/*"
  onFileValidate={(file) => {
    if (file.size > 2 * 1024 * 1024) return 'File must be smaller than 2 MB';
    return null;
  }}
  onFileReject={(file, message) => toast.error(`${file.name}: ${message}`)}
>
  ...
</FileUpload>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Using component outside of its required context provider
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/FileUpload/FileUpload.tsx`](../packages/components/src/FileUpload/FileUpload.tsx)
- **Index:** [`packages/components/src/FileUpload/index.ts`](../packages/components/src/FileUpload/index.ts)

---

## Form

**Purpose:** A powerful form component built on react-hook-form with automatic field rendering.

### Import

```typescript
import { Form } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface FormProps {
  /**
  * The form object from react-hook-form
  */
  form: UseFormReturn<TData>;
  /**
  * The fields to render
  */
  fields: FormFieldItemType<TData>[];
  /**
  * The callback will fired when the form is submitted
  */
  onSubmit?: SubmitHandler<TData>;
  /**
  * The callback will fired when the form is submitted with error
  */
  onSubmitError?: SubmitErrorHandler<TData> | undefined;
  /**
  * The text to display on the submit button
  */
  submitText?: React.ReactNode;
  /**
  * The submit button component
  */
  SubmitButton?: React.ComponentType<{
  /**
  * Whether the form is submitting or not
  */
  isSubmitting: boolean;
  /**
  * You have to call this function to submit the form, If you do that then the form will be submitted and onSubmit callback will be called if there is no error
  * Only use this function when you want to submit the form manually or <Button type="button" />
  * @param e Event
  * @example <Button type="button" isLoading={isSubmitting
}
```

### States

This component supports the following states:

- **disabled**
- **loading**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Button](#button)

### Code Examples

#### Basic usage

```tsx
import { Form } from '@paalstack/react-ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});
const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: { name: '', email: '' },
});
<Form
  form={form}
  onSubmit={(data) => console.log(data)}
  fields={[
    { name: 'name', label: 'Name', type: 'input', required: true },
    { name: 'email', label: 'Email', type: 'input', inputType: 'email', required: true },
  ]}
/>
```

#### Different field types

```tsx
<Form
  form={form}
  onSubmit={handleSubmit}
  fields={[
    { name: 'name', label: 'Name', type: 'input' },
    { name: 'email', label: 'Email', type: 'input', inputType: 'email' },
    { name: 'bio', label: 'Bio', type: 'textarea' },
    { name: 'country', label: 'Country', type: 'select', options: countries },
    { name: 'terms', label: 'Accept terms', type: 'checkbox' },
    { name: 'birthdate', label: 'Birth Date', type: 'date-picker' },
    { name: 'amount', label: 'Amount', type: 'input-group', addonStart: '$', addonEnd: 'USD' },
    { name: 'notes', label: 'Notes', type: 'field', render: ({ field }) => <Input {...field} /> },
  ]}
/>
```

#### Custom submit and reset buttons

```tsx
<Form
  form={form}
  onSubmit={handleSubmit}
  fields={fields}
  submitText="Create Account"
  resetText="Clear Form"
  submitButtonColor="success"
/>
```

#### Hide buttons

```tsx
<Form
  form={form}
  onSubmit={handleSubmit}
  fields={fields}
  hideResetButton
  hideSubmitButton
>
  <div className="flex gap-2">
    <Button type="submit">Custom Submit</Button>
    <Button type="button" variant="outline" onClick={() => form.reset()}>
      Custom Reset
    </Button>
  </div>
</Form>
```

#### Custom submit button component

```tsx
<Form
  form={form}
  onSubmit={handleSubmit}
  fields={fields}
  SubmitButton={({ isSubmitting, onFormSubmit }) => (
    <Button
      type="submit"
      onClick={onFormSubmit}
      isLoading={isSubmitting}
      className="w-full"
    >
      {isSubmitting ? 'Saving...' : 'Save Changes'}
    </Button>
  )}
/>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Form/Form.tsx`](../packages/components/src/Form/Form.tsx)
- **Index:** [`packages/components/src/Form/index.ts`](../packages/components/src/Form/index.ts)

---

## HoverCard

**Purpose:** For sighted users to preview content available behind a link.

### Import

```typescript
import { HoverCard } from '@paalstack/react-ui';
```

### States

This component supports the following states:

- **open/closed**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Prop-based API

```tsx
import { HoverCard } from '@paalstack/react-ui';
<HoverCard
  trigger={<span className="font-medium underline">@johndoe</span>}
  title="John Doe"
  description="Software Engineer @Company"
>
  <p className="text-xs text-muted-foreground">1.2k followers • 234 following</p>
</HoverCard>
```

#### Compound API

```tsx
import { HoverCardRoot, HoverCardTrigger, HoverCardContent } from '@paalstack/react-ui';
<HoverCardRoot>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>
    <p>This is the hover card content</p>
  </HoverCardContent>
</HoverCardRoot>
```

#### User profile preview

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/users/johndoe" className="font-medium underline">
      @johndoe
    </a>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar src="/users/johndoe.jpg" fallback="JD" />
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">John Doe</h4>
        <p className="text-sm text-muted-foreground">
          Software Engineer @Company
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>1.2k followers</span>
          <span>•</span>
          <span>234 following</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

#### Product preview

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="/products/123">
      <img src="/product.jpg" alt="Product" className="w-20 h-20" />
    </a>
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <h4 className="font-semibold">Product Name</h4>
      <p className="text-sm text-muted-foreground">
        Brief product description goes here
      </p>
      <div className="flex items-center gap-2">
        <Badge variant="success">In Stock</Badge>
        <span className="text-lg font-bold">$99.99</span>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

#### Link preview with metadata

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <a href="https://example.com" className="text-primary underline">
      Check this article
    </a>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-2">
      <img src="/article-thumbnail.jpg" alt="Article" className="w-full rounded" />
      <h4 className="font-semibold">Article Title</h4>
      <p className="text-sm text-muted-foreground">
        Article description and preview text...
      </p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>5 min read</span>
        <span>•</span>
        <span>Published Jan 1, 2024</span>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/HoverCard/HoverCard.tsx`](../packages/components/src/HoverCard/HoverCard.tsx)
- **Index:** [`packages/components/src/HoverCard/index.ts`](../packages/components/src/HoverCard/index.ts)

---

## IconButton

**Purpose:** A button component optimized for displaying icons.

### Import

```typescript
import { IconButton } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface IconButtonProps {
  icon?: React.ReactNode;
  /**
  * Additional class names to apply to the icon button.
  */
  className?: string;
  /**
  * Whether the icon button is disabled.
  */
  disabled?: boolean;
  /**
  * The rounded variant of the icon button.
  */
  outline?: boolean;
  /**
  * The border radius of the icon button.
  */
  rounded?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **hover**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-label`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage

```tsx
import { IconButton } from '@paalstack/react-ui';
import { FiSettings } from '@paalstack/react-icons/fi';
<IconButton icon={<FiSettings />} />
```

#### With children (alternative to icon prop)

```tsx
<IconButton>
  <FiSettings />
</IconButton>
```

#### With onClick handler

```tsx
<IconButton
  icon={<FiTrash />}
  onClick={() => handleDelete()}
  aria-label="Delete item"
/>
```

#### Outline variant

```tsx
<IconButton
  icon={<FiEdit />}
  outline
  aria-label="Edit"
/>
```

#### Different rounded corners

```tsx
<IconButton icon={<FiPlus />} rounded="none" />
<IconButton icon={<FiPlus />} rounded="sm" />
<IconButton icon={<FiPlus />} rounded="md" /> // default rounded
<IconButton icon={<FiPlus />} rounded="lg" />
<IconButton icon={<FiPlus />} rounded="full" />
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/IconButton/IconButton.tsx`](../packages/components/src/IconButton/IconButton.tsx)
- **Index:** [`packages/components/src/IconButton/index.ts`](../packages/components/src/IconButton/index.ts)

---

## Input

**Purpose:** A flexible input component with label, error message, and validation states.

### Import

```typescript
import { Input } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface InputProps {
  /**
  * whether the input is invalid
  */
  isInvalid?: boolean;
  /**
  * label for the input
  */
  label?: ReactNode;
  /**
  * props for the label
  */
  labelProps?: LabelProps;
  /**
  * inline input or not
  */
  inline?: boolean;
  /**
  * input class name for styling
  */
  inputClassName?: string;
  /**
  * Optional value change handler for the number input
  */
  onValueChange?: (value: string) => void;
  /**
  * The error message for the checkbox
  */
  errorMessage?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Label](#label)
- [ErrorMessage](#errormessage)

### Code Examples

#### Basic usage

```tsx
import { Input } from '@paalstack/react-ui';
<Input placeholder="Enter your name" />
```

#### With label

```tsx
<Input label="Email Address" type="email" placeholder="email@example.com" />
```

#### Required field

```tsx
<Input label="Username" required placeholder="Enter username" />
```

#### With error message

```tsx
<Input
  label="Password"
  type="password"
  isInvalid
  errorMessage="Password must be at least 8 characters"
/>
```

#### Inline layout

```tsx
<Input label="Search" inline placeholder="Search..." />
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Input/Input.tsx`](../packages/components/src/Input/Input.tsx)
- **Index:** [`packages/components/src/Input/index.ts`](../packages/components/src/Input/index.ts)

---

## InputGroup

**Purpose:** InputGroup Component Family
 *
 * Add addons, buttons, and helper content to inputs and textareas.

### Import

```typescript
import { InputGroup } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface InputGroupProps {
  /** Optional className for the root */
  className?: string;
  /** Addon content before the input (e.g. icon, prefix text) */
  addonStart?: React.ReactNode;
  /** Alignment for start addon: inline-start (default) or block-start */
  addonStartAlign?: 'inline-start' | 'block-start';
  /** Addon content after the input (e.g. suffix text, button) */
  addonEnd?: React.ReactNode;
  /** Alignment for end addon: inline-end (default) or block-end */
  addonEndAlign?: 'inline-end' | 'block-end';
  /** Input props (use with InputGroupInput); omit when using textareaProps or compound children */
  inputProps?: InputProps;
  /** Textarea props (use with InputGroupTextarea); omit when using inputProps or compound children */
  textareaProps?: TextareaProps;
  /** Props for the start addon wrapper (InputGroupAddon) */
  addonStartProps?: Omit<InputGroupAddonProps, 'align' | 'children'>;
  /** Props for the end addon wrapper (InputGroupAddon) */
  addonEndProps?: Omit<InputGroupAddonProps, 'align' | 'children'>;
  /** Children for compound API (InputGroupInput, InputGroupAddon, etc.); ignored when inputProps or textareaProps is set */
  children?: React.ReactNode;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **loading**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-label`
- `aria-invalid`
- `aria-describedby`
- `role="group"`

### Dependencies

- **CVA** — class-variance-authority for variants

### Related Components

- [Input](#input)
- [Textarea](#textarea)
- [Button](#button)

### Code Examples

#### Prop-based API: search with icon

```tsx
import { InputGroup } from '@paalstack/react-ui';
import { SearchIcon } from '@/icons/rx';
<InputGroup
  inputProps={{ placeholder: 'Search...' }}
  addonEnd={<SearchIcon />}
/>
```

#### Compound API: basic input with icon

```tsx
import { InputGroupRoot, InputGroupInput, InputGroupAddon } from '@paalstack/react-ui';
import { SearchIcon } from '@/icons/rx';
<InputGroupRoot>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
</InputGroupRoot>
```

#### Input with text addon (inline-start)

```tsx
<InputGroup>
  <InputGroupInput placeholder="Amount" />
  <InputGroupAddon align="inline-start">
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
</InputGroup>
```

#### Input with text addon (inline-end)

```tsx
<InputGroup>
  <InputGroupInput placeholder="Amount" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>USD</InputGroupText>
  </InputGroupAddon>
</InputGroup>
```

#### Input with button

```tsx
<InputGroup>
  <InputGroupInput placeholder="https://example.com" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/InputGroup/InputGroup.tsx`](../packages/components/src/InputGroup/InputGroup.tsx)
- **Index:** [`packages/components/src/InputGroup/index.ts`](../packages/components/src/InputGroup/index.ts)

---

## InputOTP

**Purpose:** InputOTP Component Family
 *
 * @example
 * // Basic 6-digit OTP
 * import { InputOTP, InputOTPGroup, InputOTPSlot } from '@paalstack/react-ui';
 *
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // OTP with separator
 * <InputOTP maxLength={6}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *   </InputOTPGroup>
 *   <InputOTPSeparator />
 *   <InputOTPGroup>
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Controlled OTP
 * const [value, setValue] = useState('');
 *
 * <InputOTP maxLength={6} value={value} onChange={setValue}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Digits only (PIN code)
 * import { REGEXP_ONLY_DIGITS } from 'input-otp';
 *
 * <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // Alphanumeric OTP
 * import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
 *
 * <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * @example
 * // With validation state
 * const [value, setValue] = useState('');
 * const isValid = value.

### Import

```typescript
import { InputOTP } from '@paalstack/react-ui';
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `role="separator"`

### Dependencies

- **React Context** — for state management

### Code Examples

#### Basic 6-digit OTP

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@paalstack/react-ui';
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

#### OTP with separator

```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

#### Controlled OTP

```tsx
const [value, setValue] = useState('');
<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

#### Digits only (PIN code)

```tsx
import { REGEXP_ONLY_DIGITS } from 'input-otp';
<InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>
```

#### Alphanumeric OTP

```tsx
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Using component outside of its required context provider
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/InputOTP/InputOTP.tsx`](../packages/components/src/InputOTP/InputOTP.tsx)
- **Index:** [`packages/components/src/InputOTP/index.ts`](../packages/components/src/InputOTP/index.ts)

---

## Item

**Purpose:** Item Component Family
 *
 * A versatile component for displaying content with media, title, description, and actions.

### Import

```typescript
import { Item } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ItemProps {
  asChild?: boolean;
}
```

### States

This component supports the following states:

- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `role="list"`

### Dependencies

- **CVA** — class-variance-authority for variants

### Related Components

- [Separator](#separator)

### Code Examples

#### Basic item with icon

```tsx
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from '@paalstack/react-ui';
import { Button } from '@paalstack/react-ui';
<Item>
  <ItemMedia variant="icon">
    <BellIcon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Security Alert</ItemTitle>
    <ItemDescription>New login detected from unknown device.</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button size="sm">Review</Button>
  </ItemActions>
</Item>
```

#### Item with avatar

```tsx
import { Avatar } from '@paalstack/react-ui';
<Item>
  <ItemMedia variant="avatar">
    <Avatar src="/avatar.jpg" fallback="ER" />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Evil Rabbit</ItemTitle>
    <ItemDescription>Last seen 5 months ago</ItemDescription>
  </ItemContent>
</Item>
```

#### Outlined item variant

```tsx
<Item variant="outline">
  <ItemContent>
    <ItemTitle>Outlined Item</ItemTitle>
    <ItemDescription>This item has a visible border.</ItemDescription>
  </ItemContent>
</Item>
```

#### Item group

```tsx
import { ItemGroup, ItemSeparator } from '@paalstack/react-ui';
<ItemGroup>
  <Item>
    <ItemContent>
      <ItemTitle>First Item</ItemTitle>
      <ItemDescription>Description for first item</ItemDescription>
    </ItemContent>
  </Item>
  <ItemSeparator />
  <Item>
    <ItemContent>
      <ItemTitle>Second Item</ItemTitle>
      <ItemDescription>Description for second item</ItemDescription>
    </ItemContent>
  </Item>
</ItemGroup>
```

#### Item as link

```tsx
<Item asChild>
  <a href="/dashboard">
    <ItemMedia variant="icon">
      <HomeIcon />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Dashboard</ItemTitle>
      <ItemDescription>Overview of your account and activity.</ItemDescription>
    </ItemContent>
  </a>
</Item>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Item/Item.tsx`](../packages/components/src/Item/Item.tsx)
- **Index:** [`packages/components/src/Item/index.ts`](../packages/components/src/Item/index.ts)

---

## Kbd

**Purpose:** Component

### Import

```typescript
import { Kbd } from '@paalstack/react-ui';
```

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Kbd/Kbd.tsx`](../packages/components/src/Kbd/Kbd.tsx)
- **Index:** [`packages/components/src/Kbd/index.ts`](../packages/components/src/Kbd/index.ts)

---

## Label

**Purpose:** Renders an accessible label associated with form controls.

### Import

```typescript
import { Label } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface LabelProps {
  /**
  * if required, adds a red asterisk to the label
  */
  required?: boolean;
  /**
  *
  */
  text?: React.ReactNode;
  /**
  * if true, show the label in red color
  */
  isInvalid?: boolean;
  /**
  * if true, disable the label
  */
  disabled?: boolean;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-disabled`
- `aria-invalid`

### Dependencies

- **CVA** — class-variance-authority for variants

### Code Examples

#### Basic usage

```tsx
import { Label } from '@paalstack/react-ui';
<Label htmlFor="email">Email Address</Label>
<input id="email" type="email" />
```

#### Required field indicator

```tsx
<Label htmlFor="name" required>Name</Label>
<input id="name" type="text" />
```

#### With text prop

```tsx
<Label htmlFor="username" text="Username" required />
```

#### Invalid state (shows in red)

```tsx
<Label htmlFor="password" isInvalid>Password</Label>
<input id="password" type="password" className="border-danger" />
```

#### Disabled state

```tsx
<Label htmlFor="disabled-field" disabled>Disabled Field</Label>
<input id="disabled-field" type="text" disabled />
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Label/Label.tsx`](../packages/components/src/Label/Label.tsx)
- **Index:** [`packages/components/src/Label/index.ts`](../packages/components/src/Label/index.ts)

---

## Loading

**Purpose:** Displays a spinning indicator with optional text content.

### Import

```typescript
import { Loading } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface LoadingProps {
  /**
  * Optional content to display next to the Loading
  */
  content?: React.ReactNode;
  /**
  * Optional props to apply to the Spinner component
  */
  spinnerProps?: React.ComponentPropsWithoutRef<typeof Spinner>;
}
```

### States

This component supports the following states:

- **disabled**
- **loading**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Spinner](#spinner)

### Code Examples

#### Basic usage — spinner only

```tsx
import { Loading } from '@paalstack/react-ui';
<Loading />
```

#### With loading text

```tsx
<Loading content="Loading..." />
```

#### Larger spinner via spinnerProps

```tsx
<Loading spinnerProps={{ size: 'xl' }} content="Please wait..." />
```

#### Small spinner for inline / button use

```tsx
<Button disabled={isLoading}>
  {isLoading ? <Loading spinnerProps={{ size: 'xs' }} content="Saving…" /> : 'Save'}
</Button>
```

#### Custom wrapper color / layout via className (applied to the Flex container)

```tsx
<Loading className="text-primary flex-col gap-3" content="Processing..." />
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Loading/Loading.tsx`](../packages/components/src/Loading/Loading.tsx)
- **Index:** [`packages/components/src/Loading/index.ts`](../packages/components/src/Loading/index.ts)

---

## Menubar

**Purpose:** A visually persistent menu bar for web applications, providing access to application commands.

### Import

```typescript
import { Menubar } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface MenubarProps {
  menus: MenubarMenuList[];
}
```

### States

This component supports the following states:

- **disabled**
- **expanded/collapsed**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-expanded`

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Basic usage

```tsx
import { Menubar } from '@paalstack/react-ui';
<Menubar
  menus={[
    {
      label: 'File',
      items: [
        { label: 'New File', shortcut: '⌘N', onClick: () => createNewFile() },
        { label: 'Open...', shortcut: '⌘O', onClick: () => openFile() },
        { label: 'Save', shortcut: '⌘S', onClick: () => saveFile() },
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', shortcut: '⌘Z', onClick: () => undo() },
        { label: 'Redo', shortcut: '⇧⌘Z', onClick: () => redo() },
      ]
    }
  ]}
/>
```

#### With separators

```tsx
<Menubar
  menus={[
    {
      label: 'File',
      items: [
        { label: 'New File', shortcut: '⌘N' },
        { label: 'Open...', shortcut: '⌘O' },
        { separator: true },
        { label: 'Save', shortcut: '⌘S' },
        { label: 'Save As...', shortcut: '⇧⌘S' },
        { separator: true },
        { label: 'Exit', shortcut: '⌘Q' },
      ]
    }
  ]}
/>
```

#### With sub-menus

```tsx
<Menubar
  menus={[
    {
      label: 'File',
      items: [
        { label: 'New File', shortcut: '⌘N' },
        {
          label: 'Open Recent',
          subMenus: [
            {
              label: 'Recent Files',
              items: [
                { label: 'document1.txt', onClick: () => openFile('document1.txt') },
                { label: 'document2.txt', onClick: () => openFile('document2.txt') },
                { label: 'document3.txt', onClick: () => openFile('document3.txt') },
              ]
            }
          ]
        },
        { label: 'Save', shortcut: '⌘S' },
      ]
    }
  ]}
/>
```

#### With checkboxes

```tsx
const [showStatusBar, setShowStatusBar] = useState(true);
const [showActivityBar, setShowActivityBar] = useState(false);
<Menubar
  menus={[
    {
      label: 'View',
      items: [
        {
          label: 'Status Bar',
          checkbox: true,
          checked: showStatusBar,
          onCheckedChange: setShowStatusBar
        },
        {
          label: 'Activity Bar',
          checkbox: true,
          checked: showActivityBar,
          onCheckedChange: setShowActivityBar
        },
      ]
    }
  ]}
/>
```

#### With radio groups

```tsx
const [theme, setTheme] = useState('light');
<Menubar
  menus={[
    {
      label: 'Preferences',
      items: [
        {
          radio: true,
          value: theme,
          onValueChange: setTheme,
          options: [
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'System', value: 'system' },
          ]
        }
      ]
    }
  ]}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Menubar/Menubar.tsx`](../packages/components/src/Menubar/Menubar.tsx)
- **Index:** [`packages/components/src/Menubar/index.ts`](../packages/components/src/Menubar/index.ts)

---

## MultiSelect

**Purpose:** A multi-select dropdown component that allows users to select multiple options from a list.

### Import

```typescript
import { MultiSelect } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface MultiSelectProps {
  /**
  * Whether the multiselect is open
  */
  open?: boolean;
  /**
  * @param open whether the multiselect is open
  * @returns void
  */
  onOpenChange?: (open: boolean) => void;
  /**
  * List of items to be displayed in the combobox
  */
  options: Array<OptionType | string | number>;
  /**
  * List of selected values
  */
  selectedValues: string[] | undefined;
  /**
  * onChange handler for the multiselect
  */
  onSelectedValueChange: (selectedValues: string[]) => void;
  /**
  * id for the multiselect
  */
  id?: string;
  /**
  * Label for the multiselect
  */
  label?: React.ReactNode;
  /**
  * Props for the label
  */
  labelProps?: React.ComponentProps<typeof Label>;
  /**
  * Placeholder for the multiselect
  */
  placeholder?: string;
  /**
  * Props for the trigger button
  */
  triggerProps?: React.ComponentProps<typeof Button>;
  /**
  * Props for the content
  */
  contentProps?: React.ComponentProps<typeof PopoverContent>;
  /**
  * Whether the multiselect is inline
  */
  inline?: boolean;
  /**
  * Whether the multiselect is required
  */
  required?: boolean;
  /**
  * Whether the multiselect is disabled
  */
  disabled?: boolean;
  /**
  * Whether the multiselect is invalid
  */
  isInvalid?: boolean;
  /**
  * Error message for the multiselect
  */
  errorMessage?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **expanded/collapsed**
- **invalid/error**
- **hover**
- **focus**
- **active**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `aria-expanded`
- `role="combobox"`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Popover](#popover)
- [Badge](#badge)
- [Button](#button)
- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { MultiSelect } from '@paalstack/react-ui';
const [selected, setSelected] = useState<string[]>([]);
<MultiSelect
  label="Select Options"
  options={['Option 1', 'Option 2', 'Option 3']}
  selectedValues={selected}
  onSelectedValueChange={setSelected}
/>
```

#### With object options

```tsx
const options = [
  { value: 'react', label: 'React', key: 'react' },
  { value: 'vue', label: 'Vue.js', key: 'vue' },
  { value: 'angular', label: 'Angular', key: 'angular' },
  { value: 'svelte', label: 'Svelte', key: 'svelte' },
];
<MultiSelect
  label="Frameworks"
  options={options}
  selectedValues={selectedFrameworks}
  onSelectedValueChange={setSelectedFrameworks}
  placeholder="Select frameworks"
/>
```

#### Required field with validation

```tsx
<MultiSelect
  label="Tags"
  options={['React', 'TypeScript', 'Node.js', 'MongoDB']}
  selectedValues={tags}
  onSelectedValueChange={setTags}
  required
  isInvalid={tags.length === 0}
  errorMessage="Please select at least one tag"
/>
```

#### Skills selector

```tsx
const skills = ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java'];
<MultiSelect
  label="Your Skills"
  options={skills}
  selectedValues={selectedSkills}
  onSelectedValueChange={setSelectedSkills}
  placeholder="Select your skills"
/>
```

#### Team member assignment

```tsx
const teamMembers = [
  { value: '1', label: 'John Doe', key: '1' },
  { value: '2', label: 'Jane Smith', key: '2' },
  { value: '3', label: 'Bob Johnson', key: '3' },
  { value: '4', label: 'Alice Williams', key: '4' },
];
<MultiSelect
  label="Assign Team Members"
  options={teamMembers}
  selectedValues={assignedMembers}
  onSelectedValueChange={setAssignedMembers}
  placeholder="Select team members"
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/MultiSelect/MultiSelect.tsx`](../packages/components/src/MultiSelect/MultiSelect.tsx)
- **Index:** [`packages/components/src/MultiSelect/index.ts`](../packages/components/src/MultiSelect/index.ts)

---

## NativeCheckbox

**Purpose:** A simpler checkbox component using native HTML input with custom styling.

### Import

```typescript
import { NativeCheckbox } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface NativeCheckboxProps {
  /** Label for the checkbox */
  label?: React.ReactNode;
  /** Props for the label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /** Whether the checkbox is checked or not */
  checked?: boolean;
  /** Whether the checkbox is disabled or not */
  disabled?: boolean;
  /** Callback when the checkbox value changes */
  onCheckedChange?: (checked: boolean) => void;
  /**
  * Whether the checkbox is swapped to the right or not
  */
  swapRight?: boolean;
  /**
  * The class name for the checkbox label
  */
  labelClassName?: string;
  /**
  * Whether the checkbox is invalid.
  */
  'aria-invalid'?: boolean;
  /**
  * whether the checkbox is invalid
  */
  isInvalid?: boolean;
  /**
  * The error message for the checkbox
  */
  errorMessage?: string;
  /**
  * The parent class name for the checkbox
  */
  wrapperClassName?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

- **CVA** — class-variance-authority for variants

### Related Components

- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { NativeCheckbox } from '@paalstack/react-ui';
<NativeCheckbox label="Accept terms" />
```

#### Controlled checkbox

```tsx
const [checked, setChecked] = useState(false);
<NativeCheckbox
  label="Subscribe to newsletter"
  checked={checked}
  onCheckedChange={setChecked}
/>
```

#### Required field with validation

```tsx
<NativeCheckbox
  label="I agree to the terms"
  required
  isInvalid={!agreed}
  errorMessage="You must accept the terms to continue"
/>
```

#### Disabled checkbox

```tsx
<NativeCheckbox
  label="Disabled option"
  checked
  disabled
/>
```

#### Swap label to right

```tsx
<NativeCheckbox
  label="Checkbox on left"
  swapRight
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/NativeCheckbox/NativeCheckbox.tsx`](../packages/components/src/NativeCheckbox/NativeCheckbox.tsx)
- **Index:** [`packages/components/src/NativeCheckbox/index.ts`](../packages/components/src/NativeCheckbox/index.ts)

---

## NativeCheckboxGroup

**Purpose:** A group of checkboxes for selecting multiple options.

### Import

```typescript
import { NativeCheckboxGroup } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface NativeCheckboxGroupProps {
  /**
  * The options for the checkbox group
  */
  options: Array<OptionType | string | number>;
  /**
  * The default values for the checkbox group
  */
  defaultValue?: string[];
  /**
  * The values for the checkbox group
  */
  value?: string[];
  /**
  * The label for the checkbox group
  */
  label?: string;
  /**
  * Props for the label
  */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /**
  * The class name for the checkbox group label
  */
  labelClassName?: string;
  /**
  * Whether the checkbox group is vertical or horizontal.
  */
  inline?: boolean;
  /**
  * Callback when the checkbox group values change
  */
  onValuesChange?: (values: string[]) => void;
}
```

### States

This component supports the following states:

- **disabled**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [NativeCheckbox](#nativecheckbox)
- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { NativeCheckboxGroup } from '@paalstack/react-ui';
const [values, setValues] = useState<string[]>([]);
<NativeCheckboxGroup
  label="Choose options"
  options={[
    { value: 'option1', label: 'Option 1', key: 'option1' },
    { value: 'option2', label: 'Option 2', key: 'option2' },
    { value: 'option3', label: 'Option 3', key: 'option3' },
  ]}
  value={values}
  onValuesChange={setValues}
/>
```

#### Controlled component

```tsx
const [selected, setSelected] = useState<string[]>(['email', 'sms']);
<NativeCheckboxGroup
  label="Notification Methods"
  options={[
    { value: 'email', label: 'Email', key: 'email' },
    { value: 'phone', label: 'Phone', key: 'phone' },
    { value: 'sms', label: 'SMS', key: 'sms' },
  ]}
  value={selected}
  onValuesChange={setSelected}
/>
```

#### Required field with validation

```tsx
<NativeCheckboxGroup
  label="Select features"
  options={[
    { value: 'feature1', label: 'Feature 1', key: 'feature1' },
    { value: 'feature2', label: 'Feature 2', key: 'feature2' },
    { value: 'feature3', label: 'Feature 3', key: 'feature3' },
  ]}
  value={features}
  required
  isInvalid={features.length === 0}
  errorMessage="Please select at least one feature"
/>
```

#### Inline layout (horizontal)

```tsx
<NativeCheckboxGroup
  label="Days of the week"
  options={[
    { value: 'mon', label: 'Monday', key: 'mon' },
    { value: 'tue', label: 'Tuesday', key: 'tue' },
    { value: 'wed', label: 'Wednesday', key: 'wed' },
  ]}
  value={days}
  inline
/>
```

#### With disabled options

```tsx
<NativeCheckboxGroup
  label="Services"
  options={[
    { value: 'basic', label: 'Basic Service', key: 'basic' },
    { value: 'premium', label: 'Premium (Coming Soon)', key: 'premium', disabled: true },
    { value: 'enterprise', label: 'Enterprise (Contact Us)', key: 'enterprise', disabled: true },
  ]}
  value={services}
/>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/NativeCheckboxGroup/NativeCheckboxGroup.tsx`](../packages/components/src/NativeCheckboxGroup/NativeCheckboxGroup.tsx)
- **Index:** [`packages/components/src/NativeCheckboxGroup/index.ts`](../packages/components/src/NativeCheckboxGroup/index.ts)

---

## NativeRadio

**Purpose:** A radio button input component for selecting a single option from a list.

### Import

```typescript
import { NativeRadio } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface NativeRadioProps {
  /** Label for the radio */
  label?: React.ReactNode;
  /** Props for the label */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /** Whether the radio is checked or not */
  checked?: boolean;
  /** Whether the radio is disabled or not */
  disabled?: boolean;
  /** Callback when the radio value changes */
  onCheckedChange?: (checked: boolean) => void;
  /**
  * Whether the radio is swapped to the right or not
  */
  swapRight?: boolean;
  /**
  * The class name for the radio label
  */
  labelClassName?: string;
  /**
  * Whether the radio is invalid.
  */
  'aria-invalid'?: boolean;
  /**
  * whether the radio is invalid
  */
  isInvalid?: boolean;
  /**
  * The error message for the radio
  */
  errorMessage?: string;
  /**
  * The parent class name for the radio
  */
  wrapperClassName?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

- **CVA** — class-variance-authority for variants

### Related Components

- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { NativeRadio } from '@paalstack/react-ui';
<NativeRadio name="option" label="Option 1" />
```

#### Radio group (manual)

```tsx
const [selected, setSelected] = useState('option1');
<div className="space-y-2">
  <NativeRadio
    name="choice"
    label="Option 1"
    value="option1"
    checked={selected === 'option1'}
    onCheckedChange={() => setSelected('option1')}
  />
  <NativeRadio
    name="choice"
    label="Option 2"
    value="option2"
    checked={selected === 'option2'}
    onCheckedChange={() => setSelected('option2')}
  />
  <NativeRadio
    name="choice"
    label="Option 3"
    value="option3"
    checked={selected === 'option3'}
    onCheckedChange={() => setSelected('option3')}
  />
</div>
```

#### With validation

```tsx
<NativeRadio
  name="terms"
  label="I agree to the terms and conditions"
  required
  isInvalid={!accepted}
  errorMessage="You must accept the terms to continue"
/>
```

#### Disabled radio

```tsx
<NativeRadio
  name="disabled"
  label="Disabled option"
  disabled
  checked
/>
```

#### Swap label to right side

```tsx
<NativeRadio
  name="swap"
  label="Label on right"
  swapRight
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/NativeRadio/NativeRadio.tsx`](../packages/components/src/NativeRadio/NativeRadio.tsx)
- **Index:** [`packages/components/src/NativeRadio/index.ts`](../packages/components/src/NativeRadio/index.ts)

---

## NativeRadioGroup

**Purpose:** A group of radio inputs for selecting a single option.

### Import

```typescript
import { NativeRadioGroup } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface NativeRadioGroupProps {
  /**
  * The options for the radio input group
  */
  options: Array<OptionType | string | number>;
  /**
  * The default value for the radio input group
  */
  defaultValue?: string;
  /**
  * The default value for the radio input group
  */
  value?: string;
  /**
  * The label for the radio input group
  */
  label?: string;
  /**
  * Props for the label
  */
  labelProps?: React.ComponentPropsWithoutRef<typeof Label>;
  /**
  * The class name for the radio input group label
  */
  labelClassName?: string;
  /**
  * Whether the radio input group is vertical or horizontal.
  */
  inline?: boolean;
}
```

### States

This component supports the following states:

- **disabled**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [NativeRadio](#nativeradio)
- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { NativeRadioGroup } from '@paalstack/react-ui';
const [value, setValue] = useState('');
<NativeRadioGroup
  label="Choose an option"
  options={[
    { value: 'option1', label: 'Option 1', key: 'option1' },
    { value: 'option2', label: 'Option 2', key: 'option2' },
    { value: 'option3', label: 'Option 3', key: 'option3' },
  ]}
  value={value}
  onCheckedChange={(checked) => console.log('Changed:', checked)}
/>
```

#### Controlled component

```tsx
const [selected, setSelected] = useState('email');
<NativeRadioGroup
  label="Contact Method"
  options={[
    { value: 'email', label: 'Email', key: 'email' },
    { value: 'phone', label: 'Phone', key: 'phone' },
    { value: 'sms', label: 'SMS', key: 'sms' },
  ]}
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
/>
```

#### Required field with validation

```tsx
<NativeRadioGroup
  label="Payment Method"
  options={[
    { value: 'credit', label: 'Credit Card', key: 'credit' },
    { value: 'paypal', label: 'PayPal', key: 'paypal' },
    { value: 'bank', label: 'Bank Transfer', key: 'bank' },
  ]}
  value={paymentMethod}
  required
  isInvalid={!paymentMethod}
  errorMessage="Please select a payment method"
/>
```

#### Inline layout (horizontal)

```tsx
<NativeRadioGroup
  label="Gender"
  options={[
    { value: 'male', label: 'Male', key: 'male' },
    { value: 'female', label: 'Female', key: 'female' },
    { value: 'other', label: 'Other', key: 'other' },
  ]}
  value={gender}
  inline
/>
```

#### Shipping options with descriptions

```tsx
<NativeRadioGroup
  label="Shipping Method"
  options={[
    {
      value: 'standard',
      labelContent: (
        <div>
          <div className="font-medium">Standard Shipping</div>
          <div className="text-xs text-muted-foreground">5-7 business days - Free</div>
        </div>
      ),
      key: 'standard'
    },
    {
      value: 'express',
      labelContent: (
        <div>
          <div className="font-medium">Express Shipping</div>
          <div className="text-xs text-muted-foreground">2-3 business days - $9.99</div>
        </div>
      ),
      key: 'express'
    },
  ]}
  value={shipping}
/>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/NativeRadioGroup/NativeRadioGroup.tsx`](../packages/components/src/NativeRadioGroup/NativeRadioGroup.tsx)
- **Index:** [`packages/components/src/NativeRadioGroup/index.ts`](../packages/components/src/NativeRadioGroup/index.ts)

---

## NativeSelect

**Purpose:** Group label shown as an optgroup header */
  label?

### Import

```typescript
import { NativeSelect } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface NativeSelectProps {
  /**
  * Flat or grouped options to render automatically.
  * - Plain strings/numbers are turned into `<option>` elements.
  * - `{ value, label, disabled?
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `aria-hidden`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic

```tsx
import { NativeSelectRoot, NativeSelectOption } from '@paalstack/react-ui';
<NativeSelectRoot>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
</NativeSelectRoot>
```

#### With groups

```tsx
<NativeSelectRoot>
  <NativeSelectOption value="">Select department</NativeSelectOption>
  <NativeSelectOptGroup label="Engineering">
    <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
    <NativeSelectOption value="backend">Backend</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelectRoot>
```

#### Small size

```tsx
<NativeSelectRoot size="sm">
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
</NativeSelectRoot>
```

#### Controlled

```tsx
const [value, setValue] = useState('');
<NativeSelectRoot value={value} onChange={(e) => setValue(e.target.value)}>
  <NativeSelectOption value="">Select option</NativeSelectOption>
  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
</NativeSelectRoot>
@tip Use NativeSelectRoot for native browser behavior and better performance
@tip Use NativeSelect (Props API) for quick setup with a label and validation
@tip NativeSelectRoot is ideal for mobile-optimized dropdowns
@tip Always provide a default "Select…" option
@tip Use aria-invalid for validation states
@tip The size prop supports 'sm' and 'default' (default: 'default')
```

#### Basic usage

```tsx
import { NativeSelect } from '@paalstack/react-ui';
<NativeSelect
  label="Fruit"
  placeholder="Select a fruit"
  options={['Apple', 'Banana', 'Blueberry']}
  onValueChange={(v) => console.log(v)}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/NativeSelect/NativeSelect.tsx`](../packages/components/src/NativeSelect/NativeSelect.tsx)
- **Index:** [`packages/components/src/NativeSelect/index.ts`](../packages/components/src/NativeSelect/index.ts)

---

## NavigationMenu

**Purpose:** A developer-friendly navigation menu component with support for simple links and dropdown menus.

### Import

```typescript
import { NavigationMenu } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface NavigationMenuProps {
  /**
  * The navigation items to display.
  */
  items: NavigationMenuItemType[];
  /**
  * Additional className for the navigation menu list.
  */
  listClassName?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **open/closed**
- **hover**
- **focus**
- **active**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-hidden`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Basic usage

```tsx
import { NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@paalstack/react-ui';
<NavigationMenuRoot>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/">Home</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/about">About</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenuRoot>
```

#### With dropdown menu

```tsx
<NavigationMenuRoot>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          <NavigationMenuListItem href="/products/category1" title="Category 1">
            Description for category 1
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/products/category2" title="Category 2">
            Description for category 2
          </NavigationMenuListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenuRoot>
```

#### Full website navigation

```tsx
<NavigationMenuRoot>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
          <NavigationMenuListItem href="/products/laptops" title="Laptops">
            High-performance laptops for work and gaming
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/products/phones" title="Smartphones">
            Latest smartphones with advanced features
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/products/tablets" title="Tablets">
            Versatile tablets for work and entertainment
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/products/accessories" title="Accessories">
            Essential accessories for your devices
          </NavigationMenuListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4">
          <NavigationMenuListItem href="/docs" title="Documentation">
            Learn how to use our products
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/blog" title="Blog">
            Read our latest articles and updates
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/support" title="Support">
            Get help from our support team
          </NavigationMenuListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
        Contact
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenuRoot>
```

#### With featured content

```tsx
<NavigationMenuRoot>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[600px] md:grid-cols-2">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                href="/featured"
                className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-hidden"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  Featured Solution
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Discover our flagship product with advanced features
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <NavigationMenuListItem href="/solutions/1" title="Solution 1">
            Enterprise-grade solution
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/solutions/2" title="Solution 2">
            Small business solution
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/solutions/3" title="Solution 3">
            Individual solution
          </NavigationMenuListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenuRoot>
```

#### Documentation site navigation

```tsx
<NavigationMenuRoot>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[300px] gap-2 p-2">
          <NavigationMenuListItem href="/docs/installation" title="Installation">
            How to install the library
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/docs/quickstart" title="Quick Start">
            Get up and running in minutes
          </NavigationMenuListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[500px] gap-2 p-4 md:grid-cols-2">
          <NavigationMenuListItem href="/docs/button" title="Button">
            Interactive button component
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/docs/input" title="Input">
            Form input field
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/docs/select" title="Select">
            Dropdown selection
          </NavigationMenuListItem>
          <NavigationMenuListItem href="/docs/dialog" title="Dialog">
            Modal dialog window
          </NavigationMenuListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenuRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/NavigationMenu/NavigationMenu.tsx`](../packages/components/src/NavigationMenu/NavigationMenu.tsx)
- **Index:** [`packages/components/src/NavigationMenu/index.ts`](../packages/components/src/NavigationMenu/index.ts)

---

## NumberInput

**Purpose:** A specialized input component for numeric values with validation options.

### Import

```typescript
import { NumberInput } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface NumberInputProps {
  /**
  * value of number input
  */
  value?: string | number | null;
  /**
  * default value of number input(when uncontrolled)
  */
  defaultValue?: string | number | null;
  /**
  * If true, only positive integer is allowed
  */
  isPositiveInteger?: boolean;
  /**
  * If true, only positive float is allowed
  */
  isPositiveFloat?: boolean;
  /**
  * If true, only positive integer is allowed and starts with zero
  * @default false
  */
  positiveIntegerStartsWithZero?: boolean;
  /**
  * if true, only positive float is allowed and starts with zero
  * @default false
  */
  positiveFloatStartsWithZero?: boolean;
  /**
  *
  * @param value current value of the input
  */
  onValueChange?: (value: number) => void;
}
```

### States

This component supports the following states:

- **disabled**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Input](#input)

### Code Examples

#### Basic usage

```tsx
import { NumberInput } from '@paalstack/react-ui';
const [value, setValue] = useState<number>(0);
<NumberInput
  label="Age"
  value={value}
  onValueChange={setValue}
/>
```

#### Positive integers only

```tsx
<NumberInput
  label="Quantity"
  value={quantity}
  onValueChange={setQuantity}
  isPositiveInteger
  placeholder="Enter quantity"
/>
```

#### Positive integers starting with zero (like 01, 02, 03)

```tsx
<NumberInput
  label="Item Code"
  value={code}
  onValueChange={setCode}
  isPositiveInteger
  positiveIntegerStartsWithZero
/>
```

#### Positive float numbers (decimals)

```tsx
<NumberInput
  label="Price"
  value={price}
  onValueChange={setPrice}
  isPositiveFloat
  placeholder="0.00"
/>
```

#### Positive float starting with zero

```tsx
<NumberInput
  label="Discount Rate"
  value={discount}
  onValueChange={setDiscoun t}
  isPositiveFloat
  positiveFloatStartsWithZero
  placeholder="0.00"
/>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/NumberInput/NumberInput.tsx`](../packages/components/src/NumberInput/NumberInput.tsx)
- **Index:** [`packages/components/src/NumberInput/index.ts`](../packages/components/src/NumberInput/index.ts)

---

## Pagination

**Purpose:** A controlled pagination component that renders link-based (`<a>` tag) page

### Import

```typescript
import { Pagination } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface PaginationProps {
  /**
  * The total number of items.
  */
  total: number;
  /**
  * The current page number (controlled).
  */
  currentPage?: number;
  /**
  * Number of items displayed per page.
  * @default 10
  */
  pageSize?: number;
  /**
  * Callback fired when the active page changes.
  */
  onPageChange?: (page: number) => void;
  /**
  * Callback fired when the page size changes.
  */
  onPageSizeChange?: (pageSize: number) => void;
  /**
  * Generates an `href` for each page link. When provided, every page
  * button is rendered as an `<a>` tag with the returned href **and** still
  * fires `onPageChange`. When omitted, buttons remain clickable but
  * contain no href.
  *
  * @example
  * getPageHref={(page) => `/products?page=${page
}
```

### States

This component supports the following states:

- **disabled**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-label`
- `aria-current`
- `aria-hidden`
- `aria-disabled`
- `role="navigation"`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Button](#button)

### Code Examples

#### Example

```tsx
<PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/10">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/3" />
    </PaginationItem>
  </PaginationContent>
</PaginationRoot>
```

#### Basic usage

```tsx
import { Pagination } from '@paalstack/react-ui';
const [currentPage, setCurrentPage] = useState(1);
<Pagination
  total={100}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  pageSize={10}
/>
```

#### URL-based navigation with getPageHref

```tsx
<Pagination
  total={250}
  currentPage={page}
  pageSize={pageSize}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
  showPageSizeOptions
  pageSizeOptions={[10, 20, 50, 100]}
  getPageHref={(p) => `/products?page=${p}`}
/>
```

#### With total results and page size selector

```tsx
<Pagination
  total={500}
  currentPage={page}
  pageSize={25}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
  showTotalResults
  showPageSizeOptions
/>
```

#### Simple previous / next only

```tsx
<Pagination
  total={100}
  currentPage={page}
  pageSize={10}
  onPageChange={setPage}
  showOnlyNextAndPrevious
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Pagination/Pagination.tsx`](../packages/components/src/Pagination/Pagination.tsx)
- **Index:** [`packages/components/src/Pagination/index.ts`](../packages/components/src/Pagination/index.ts)

---

## Popover

**Purpose:** Displays rich content in a portal, triggered by a button.

### Import

```typescript
import { Popover } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface PopoverProps {
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
```

### States

This component supports the following states:

- **open/closed**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Basic usage (Props API)

```tsx
import { Popover, Button } from '@paalstack/react-ui';
<Popover
  trigger={<Button>Open Popover</Button>}
  content={<div>Popover content goes here</div>}
/>
```

#### Using composition API

```tsx
import {
  PopoverRoot, PopoverTrigger, PopoverContent,
  PopoverHeader, PopoverTitle, PopoverDescription,
} from '@paalstack/react-ui';
<PopoverRoot>
  <PopoverTrigger render={<Button variant="outline" />}>
    Open
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Popover Title</PopoverTitle>
      <PopoverDescription>Description text</PopoverDescription>
    </PopoverHeader>
    <p>Additional content here</p>
  </PopoverContent>
</PopoverRoot>
```

#### User info popover

```tsx
<Popover
  trigger={
    <button className="flex items-center gap-2">
      <Avatar src="/user.jpg" fallback="JD" />
      <span>John Doe</span>
    </button>
  }
  content={
    <div className="space-y-2">
      <h4 className="font-semibold">John Doe</h4>
      <p className="text-sm text-muted-foreground">john@example.com</p>
      <Separator />
      <Button variant="ghost" size="sm" className="w-full justify-start">View Profile</Button>
      <Button variant="ghost" size="sm" className="w-full justify-start">Sign Out</Button>
    </div>
  }
/>
```

#### Controlled popover

```tsx
const [open, setOpen] = useState(false);
<Popover
  open={open}
  onOpenChange={setOpen}
  trigger={<Button>Open Controlled</Button>}
  content={
    <div>
      <p>Controlled popover</p>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </div>
  }
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Popover/Popover.tsx`](../packages/components/src/Popover/Popover.tsx)
- **Index:** [`packages/components/src/Popover/index.ts`](../packages/components/src/Popover/index.ts)

---

## Progress

**Purpose:** Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

### Import

```typescript
import { Progress } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ProgressProps {
  /**
  * The value of the progress bar. Should be between 0 and `max`.
  */
  value?: number | null;
  /**
  * The maximum value of the progress bar.
  * @default 100
  */
  max?: number;
}
```

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage

```tsx
import { Progress } from '@paalstack/react-ui';
<Progress value={50} />
```

#### Different color variants

```tsx
<Progress value={25} variant="primary" />
<Progress value={50} variant="success" />
<Progress value={75} variant="warning" />
<Progress value={90} variant="danger" />
<Progress value={60} variant="info" />
```

#### With label and value display (Composition API)

```tsx
import { ProgressRoot, ProgressLabel, ProgressValue, ProgressTrack, ProgressIndicator } from '@paalstack/react-ui';
<ProgressRoot value={66}>
  <ProgressLabel>Loading…</ProgressLabel>
  <ProgressValue />
  <ProgressTrack>
    <ProgressIndicator />
  </ProgressTrack>
</ProgressRoot>
```

#### File upload progress

```tsx
const [uploadProgress, setUploadProgress] = useState(0);
<div>
  <Progress value={uploadProgress} variant="primary" />
  <p className="text-sm text-center mt-2">{Math.round(uploadProgress)}% uploaded</p>
</div>
```

#### Multi-step form progress

```tsx
const steps = 5;
const currentStep = 3;
const progress = (currentStep / steps) * 100;
<div>
  <div className="flex justify-between mb-2">
    <span className="text-sm">Step {currentStep} of {steps}</span>
    <span className="text-sm">{Math.round(progress)}%</span>
  </div>
  <Progress value={progress} variant="success" />
</div>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Progress/Progress.tsx`](../packages/components/src/Progress/Progress.tsx)
- **Index:** [`packages/components/src/Progress/index.ts`](../packages/components/src/Progress/index.ts)

---

## RadioGroup

**Purpose:** A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.

### Import

```typescript
import { RadioGroup } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface RadioGroupProps {
  /** Array of options to render */
  options: Array<OptionType | string | number>;
  /** Label for the radio group */
  label?: React.ReactNode;
  /** Whether the radio group is inline or not */
  inline?: boolean;
  /**
  * Whether the radio group is swap to right or not
  */
  swapRight?: boolean;
  /**
  * The class name for the label
  */
  labelClassName?: string;
  /**
  * The variant of the radio group
  */
  variant?: ColorVariant;
  /**
  * required or not
  */
  required?: boolean;
  /**
  * Whether the checkbox group is invalid.
  */
  'aria-invalid'?: boolean;
  /**
  * whether the checkbox group is invalid
  */
  isInvalid?: boolean;
  /**
  * The error message for the checkbox
  */
  errorMessage?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Related Components

- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { RadioGroup } from '@paalstack/react-ui';
const [value, setValue] = useState('');
<RadioGroup
  options={['Option 1', 'Option 2', 'Option 3']}
  value={value}
  onValueChange={setValue}
/>
```

#### With label

```tsx
<RadioGroup
  label="Choose an option"
  options={['Option 1', 'Option 2', 'Option 3']}
  value={selected}
  onValueChange={setSelected}
/>
```

#### With object options

```tsx
const options = [
  { value: 'react', label: 'React', key: 'react' },
  { value: 'vue', label: 'Vue.js', key: 'vue' },
  { value: 'angular', label: 'Angular', key: 'angular' },
];
<RadioGroup
  label="Select Framework"
  options={options}
  value={framework}
  onValueChange={setFramework}
/>
```

#### Required field with validation

```tsx
<RadioGroup
  label="Payment Method"
  options={['Credit Card', 'PayPal', 'Bank Transfer']}
  value={paymentMethod}
  onValueChange={setPaymentMethod}
  required
  isInvalid={!paymentMethod}
  errorMessage="Please select a payment method"
/>
```

#### Inline layout (horizontal)

```tsx
<RadioGroup
  label="Gender"
  options={['Male', 'Female', 'Other']}
  value={gender}
  onValueChange={setGender}
  inline
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/RadioGroup/RadioGroup.tsx`](../packages/components/src/RadioGroup/RadioGroup.tsx)
- **Index:** [`packages/components/src/RadioGroup/index.ts`](../packages/components/src/RadioGroup/index.ts)

---

## Resizable

**Purpose:** Default size of the panel as a percentage (0–100) */
  defaultSize?

### Import

```typescript
import { Resizable } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ResizableProps {
  /** Array of panel configurations rendered in order */
  panels: ResizablePanelConfig[];
  /** Show the visible drag handle knob between panels */
  withHandle?: boolean;
  /** Panel group orientation — "horizontal" (default) or "vertical" */
  orientation?: 'horizontal' | 'vertical';
}
```

### States

This component supports the following states:

- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-orientation`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Horizontal two-panel split

```tsx
<Resizable
  direction="horizontal"
  className="h-48 rounded-lg border"
  panels={[
    { defaultSize: 30, children: <div>Sidebar</div> },
    { defaultSize: 70, children: <div>Content</div> },
  ]}
/>
```

#### Vertical split with visible handle knob

```tsx
<Resizable
  direction="vertical"
  className="h-64 rounded-lg border"
  withHandle
  panels={[
    { defaultSize: 50, children: <div>Top</div> },
    { defaultSize: 50, children: <div>Bottom</div> },
  ]}
/>
```

#### Constrained panel sizes

```tsx
<Resizable
  direction="horizontal"
  className="h-48 rounded-lg border"
  withHandle
  panels={[
    { defaultSize: 25, minSize: 15, maxSize: 40, children: <div>Nav</div> },
    { defaultSize: 75, children: <div>Main</div> },
  ]}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Resizable/Resizable.tsx`](../packages/components/src/Resizable/Resizable.tsx)
- **Index:** [`packages/components/src/Resizable/index.ts`](../packages/components/src/Resizable/index.ts)

---

## ScrollArea

**Purpose:** Augments native scroll functionality for custom, cross-browser styling.

### Import

```typescript
import { ScrollArea } from '@paalstack/react-ui';
```

### States

This component supports the following states:

- **hover**
- **focus**

### Dependencies

- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage

```tsx
import { ScrollArea } from '@paalstack/react-ui';
<ScrollArea className="h-72 w-full rounded border">
  <div className="p-4">
    <p>Scrollable content goes here...</p>
    <p>More content...</p>
    // Long content *
  </div>
</ScrollArea>
```

#### Tags list with horizontal scroll

```tsx
<ScrollArea className="w-96 whitespace-nowrap">
  <div className="flex gap-2 p-4">
    {tags.map(tag => (
      <Badge key={tag} variant="outline">{tag}</Badge>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>
```

#### Sidebar navigation

```tsx
<ScrollArea className="h-screen w-64">
  <nav className="p-4 space-y-2">
    <a href="/" className="block p-2 hover:bg-accent rounded">Dashboard</a>
    <a href="/projects" className="block p-2 hover:bg-accent rounded">Projects</a>
    <a href="/team" className="block p-2 hover:bg-accent rounded">Team</a>
    // Many more links *
  </nav>
</ScrollArea>
```

#### Chat messages

```tsx
<ScrollArea className="h-96 w-full rounded border">
  <div className="p-4 space-y-4">
    {messages.map(message => (
      <div key={message.id} className="flex gap-3">
        <Avatar src={message.avatar} fallback={message.initials} />
        <div>
          <p className="font-medium">{message.author}</p>
          <p className="text-sm">{message.text}</p>
          <p className="text-xs text-muted-foreground">{message.time}</p>
        </div>
      </div>
    ))}
  </div>
</ScrollArea>
```

#### Code viewer

```tsx
<ScrollArea className="h-96 w-full rounded border">
  <pre className="p-4">
    <code>{sourceCode}</code>
  </pre>
</ScrollArea>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/ScrollArea/ScrollArea.tsx`](../packages/components/src/ScrollArea/ScrollArea.tsx)
- **Index:** [`packages/components/src/ScrollArea/index.ts`](../packages/components/src/ScrollArea/index.ts)

---

## Select

**Purpose:** A dropdown select component for choosing a single option from a list.

### Import

```typescript
import { Select } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface SelectProps {
  /**
  * The groups of options to display in the select.
  */
  options: SelectOption[];
  /**
  * The placeholder text to display when no option is selected.
  */
  placeholder?: React.ReactNode;
  /**
  * The label for the select.
  */
  label?: React.ReactNode;
  /**
  * The props for the label.
  */
  labelProps?: React.ComponentProps<typeof Label>;
  /**
  * The class name for the select.
  */
  className?: string;
  /**
  * The class name for the trigger select.
  */
  triggerClassName?: string;
  /**
  * The class name for the content select.
  */
  contentClassName?: string;
  /**
  * The id for the select.
  */
  id?: string;
  /**
  * Whether the select is required.
  */
  required?: boolean;
  /**
  * Whether the select is invalid.
  */
  'aria-invalid'?: boolean;
  /**
  * whether the select is invalid
  */
  isInvalid?: boolean;
  /**
  * blur event handler
  */
  onBlur?: () => void;
  /**
  * Optional inline for the select
  */
  inline?: boolean;
  /**
  * The error message for the checkbox
  */
  errorMessage?: string;
  /**
  * If options are not found, display this message.
  * @default 'No option found.'
  */
  noOptionsMessage?: React.ReactNode;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **open/closed**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Related Components

- [ErrorMessage](#errormessage)
- [Label](#label)

### Code Examples

#### Basic usage

```tsx
import { Select } from '@paalstack/react-ui';
<Select
  options={['Option 1', 'Option 2', 'Option 3']}
  placeholder="Choose an option"
/>
```

#### With label

```tsx
<Select
  label="Country"
  options={['USA', 'Canada', 'Mexico']}
  placeholder="Select a country"
/>
```

#### With object options

```tsx
const options = [
  { value: 'react', label: 'React', key: 'react' },
  { value: 'vue', label: 'Vue.js', key: 'vue' },
  { value: 'angular', label: 'Angular', key: 'angular' },
];
<Select
  label="Framework"
  options={options}
  placeholder="Select a framework"
/>
```

#### Controlled select

```tsx
const [value, setValue] = useState('');
<Select
  label="Controlled Select"
  options={['Option 1', 'Option 2', 'Option 3']}
  value={value}
  onValueChange={setValue}
/>
```

#### Grouped options

```tsx
const groupedOptions = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple', key: 'apple' },
      { value: 'banana', label: 'Banana', key: 'banana' },
    ]
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot', key: 'carrot' },
      { value: 'broccoli', label: 'Broccoli', key: 'broccoli' },
    ]
  }
];
<Select
  label="Food"
  options={groupedOptions}
  placeholder="Select food"
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Select/Select.tsx`](../packages/components/src/Select/Select.tsx)
- **Index:** [`packages/components/src/Select/index.ts`](../packages/components/src/Select/index.ts)

---

## Separator

**Purpose:** Visually or semantically separates content.

### Import

```typescript
import { Separator } from '@paalstack/react-ui';
```

### Dependencies

- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic horizontal separator

```tsx
import { Separator } from '@paalstack/react-ui';
<div>
  <p>Content above</p>
  <Separator />
  <p>Content below</p>
</div>
```

#### Vertical separator

```tsx
<div className="flex items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" className="h-6" />
  <span>Item 2</span>
  <Separator orientation="vertical" className="h-6" />
  <span>Item 3</span>
</div>
```

#### In a navigation menu

```tsx
<nav className="flex items-center gap-4">
  <a href="/">Home</a>
  <Separator orientation="vertical" className="h-4" />
  <a href="/about">About</a>
  <Separator orientation="vertical" className="h-4" />
  <a href="/contact">Contact</a>
</nav>
```

#### In a card

```tsx
<Card>
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
  </CardHeader>
  <Separator />
  <CardContent>
    <p>Profile information here</p>
  </CardContent>
  <Separator />
  <CardFooter>
    <Button>Edit Profile</Button>
  </CardFooter>
</Card>
```

#### Section divider with text

```tsx
<div className="my-8">
  <div className="relative">
    <Separator />
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">
      or
    </span>
  </div>
</div>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Separator/Separator.tsx`](../packages/components/src/Separator/Separator.tsx)
- **Index:** [`packages/components/src/Separator/index.ts`](../packages/components/src/Separator/index.ts)

---

## Sheet

**Purpose:** A slide-out panel that extends from the edge of the screen.

### Import

```typescript
import { Sheet } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface SheetProps {
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
}
```

### States

This component supports the following states:

- **hover**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Related Components

- [Button](#button)

### Code Examples

#### Basic usage

```tsx
import { Sheet, Button } from '@paalstack/react-ui';
<Sheet
  trigger={<Button>Open Sheet</Button>}
  header={{ title: "Sheet Title", description: "Sheet description" }}
>
  <p>Sheet content goes here</p>
</Sheet>
```

#### Different sides

```tsx
// Right side (default)
<Sheet
  trigger={<Button>Open Right</Button>}
  header={{ title: "Right Sheet" }}
  side="right"
>
  <p>Content</p>
</Sheet>
// Left side
<Sheet
  trigger={<Button>Open Left</Button>}
  header={{ title: "Left Sheet" }}
  side="left"
>
  <p>Content</p>
</Sheet>
// Top side
<Sheet
  trigger={<Button>Open Top</Button>}
  header={{ title: "Top Sheet" }}
  side="top"
>
  <p>Content</p>
</Sheet>
// Bottom side
<Sheet
  trigger={<Button>Open Bottom</Button>}
  header={{ title: "Bottom Sheet" }}
  side="bottom"
>
  <p>Content</p>
</Sheet>
```

#### With footer actions

```tsx
<Sheet
  trigger={<Button>Open Form</Button>}
  header={{
    title: "Edit Profile",
    description: "Make changes to your profile here"
  }}
  footer={{
    secondaryAction: <Button variant="outline">Cancel</Button>,
    primaryAction: <Button>Save Changes</Button>
  }}
>
  <div className="space-y-4">
    <Input label="Name" />
    <Input label="Email" type="email" />
  </div>
</Sheet>
```

#### Mobile navigation menu

```tsx
<Sheet
  trigger={<Button variant="ghost"><MenuIcon /></Button>}
  header={{ title: "Menu" }}
  side="left"
>
  <nav className="space-y-2">
    <a href="/" className="block p-2 hover:bg-accent rounded">Home</a>
    <a href="/about" className="block p-2 hover:bg-accent rounded">About</a>
    <a href="/services" className="block p-2 hover:bg-accent rounded">Services</a>
    <a href="/contact" className="block p-2 hover:bg-accent rounded">Contact</a>
  </nav>
</Sheet>
```

#### Filters panel

```tsx
<Sheet
  trigger={
    <Button variant="outline">
      <FilterIcon className="mr-2" />
      Filters
    </Button>
  }
  header={{ title: "Filter Options" }}
  footer={{
    secondaryAction: <Button variant="ghost" onClick={clearFilters}>Clear All</Button>,
    primaryAction: <Button onClick={applyFilters}>Apply Filters</Button>
  }}
>
  <div className="space-y-4">
    <Select label="Category" options={categories} />
    <Input label="Min Price" type="number" />
    <Input label="Max Price" type="number" />
    <Checkbox label="In Stock Only" />
  </div>
</Sheet>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Sheet/Sheet.tsx`](../packages/components/src/Sheet/Sheet.tsx)
- **Index:** [`packages/components/src/Sheet/index.ts`](../packages/components/src/Sheet/index.ts)

---

## SimpleTable

**Purpose:** A simplified table component with built-in pagination support.

### Import

```typescript
import { SimpleTable } from '@paalstack/react-ui';
```

### States

This component supports the following states:

- **loading**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Loading](#loading)
- [Pagination](#pagination)
- [Table](#table)

### Code Examples

#### Basic usage

```tsx
import { SimpleTable } from '@paalstack/react-ui';
const columns = [
  { accessorKey: 'name', title: 'Name' },
  { accessorKey: 'email', title: 'Email' },
  { accessorKey: 'role', title: 'Role' },
];
const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];
<SimpleTable
  primaryKey="id"
  columns={columns}
  rows={rows}
/>
```

#### With pagination enabled

```tsx
<SimpleTable
  primaryKey="id"
  columns={columns}
  rows={rows}
  showPagination
  paginationProps={{
    pageSize: 10,
    currentPage: 1,
    onPageChange: (page) => console.log('Page:', page),
  }}
/>
```

#### With custom cell rendering

```tsx
const columns = [
  { accessorKey: 'name', title: 'Name' },
  { accessorKey: 'status', title: 'Status',
    render: ({ value }) => (
      <Badge variant={value === 'active' ? 'success' : 'secondary'}>
        {value}
      </Badge>
    )
  },
  { accessorKey: 'actions', title: 'Actions',
    render: ({ row }) => (
      <Button size="sm" onClick={() => handleEdit(row.id)}>
        Edit
      </Button>
    )
  },
];
<SimpleTable primaryKey="id" columns={columns} rows={rows} />
```

#### With custom header rendering

```tsx
const columns = [
  {
    accessorKey: 'name',
    title: 'Name',
    renderHeader: ({ column }) => (
      <div className="flex items-center gap-2">
        <UserIcon className="size-4" />
        {column.title}
      </div>
    )
  },
  { accessorKey: 'email', title: 'Email' },
];
<SimpleTable primaryKey="id" columns={columns} rows={rows} />
```

#### Empty state

```tsx
<SimpleTable
  primaryKey="id"
  columns={columns}
  rows={[]}
  emptyTableContent={
    <div className="flex flex-col items-center gap-2 py-8">
      <InboxIcon className="size-12 text-muted-foreground" />
      <p className="text-lg font-medium">No data found</p>
      <Button variant="outline" onClick={handleRefresh}>
        Refresh
      </Button>
    </div>
  }
/>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/SimpleTable/SimpleTable.tsx`](../packages/components/src/SimpleTable/SimpleTable.tsx)
- **Index:** [`packages/components/src/SimpleTable/index.ts`](../packages/components/src/SimpleTable/index.ts)

---

## Skeleton

**Purpose:** A placeholder component that displays a loading skeleton while content is being fetched.

### Import

```typescript
import { Skeleton } from '@paalstack/react-ui';
```

### States

This component supports the following states:

- **loading**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage

```tsx
import { Skeleton } from '@paalstack/react-ui';
<Skeleton className="h-4 w-full" />
```

#### Different shapes and sizes

```tsx
<Skeleton className="h-12 w-12 rounded-full" /> // Circle
<Skeleton className="h-4 w-[250px]" /> // Line
<Skeleton className="h-32 w-full rounded-lg" /> // Rectangle
```

#### Loading card skeleton

```tsx
<Card>
  <CardHeader>
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-[200px] w-full" />
  </CardContent>
</Card>
```

#### User profile skeleton

```tsx
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```

#### List of items skeleton

```tsx
<div className="space-y-2">
  {[...Array(5)].map((_, i) => (
    <Skeleton key={i} className="h-16 w-full" />
  ))}
</div>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Skeleton/Skeleton.tsx`](../packages/components/src/Skeleton/Skeleton.tsx)
- **Index:** [`packages/components/src/Skeleton/index.ts`](../packages/components/src/Skeleton/index.ts)

---

## Slider

**Purpose:** An input where the user selects a value from within a given range.

### Import

```typescript
import { Slider } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface SliderProps {
  /**
  * The variant of the slider
  */
  variant?: ColorVariant;
}
```

### States

This component supports the following states:

- **disabled**
- **hover**
- **focus**
- **active**

### Dependencies

- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage

```tsx
import { Slider } from '@paalstack/react-ui';
const [value, setValue] = useState([50]);
<Slider value={value} onValueChange={setValue} />
```

#### With label and display value

```tsx
const [volume, setVolume] = useState([50]);
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>Volume</Label>
    <span className="text-sm text-muted-foreground">{volume[0]}%</span>
  </div>
  <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
</div>
```

#### Different color variants

```tsx
<Slider variant="primary" defaultValue={[50]} />
<Slider variant="success" defaultValue={[50]} />
<Slider variant="danger" defaultValue={[50]} />
<Slider variant="warning" defaultValue={[50]} />
<Slider variant="info" defaultValue={[50]} />
```

#### Price range slider

```tsx
const [priceRange, setPriceRange] = useState([0, 1000]);
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <Label>Price Range</Label>
    <span className="text-sm text-muted-foreground">
      ${priceRange[0]} - ${priceRange[1]}
    </span>
  </div>
  <Slider
    value={priceRange}
    onValueChange={setPriceRange}
    min={0}
    max={5000}
    step={50}
    minStepsBetweenThumbs={1}
  />
</div>
```

#### With min and max labels

```tsx
const [brightness, setBrightness] = useState([50]);
<div className="space-y-2">
  <Label>Brightness</Label>
  <Slider value={brightness} onValueChange={setBrightness} />
  <div className="flex justify-between text-xs text-muted-foreground">
    <span>Dark</span>
    <span>Bright</span>
  </div>
</div>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Slider/Slider.tsx`](../packages/components/src/Slider/Slider.tsx)
- **Index:** [`packages/components/src/Slider/index.ts`](../packages/components/src/Slider/index.ts)

---

## Spinner

**Purpose:** An indicator that can be used to show a loading state.

### Import

```typescript
import { Spinner } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface SpinnerProps {
  /**
  * Optional size for the Spinner
  * @default 'md'
  */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
```

### States

This component supports the following states:

- **disabled**
- **loading**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-label`
- `role="status"`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage

```tsx
import { Spinner } from '@paalstack/react-ui';
<Spinner />
```

#### Different sizes

```tsx
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />
```

#### Custom size with className

```tsx
<Spinner className="size-10" />
<Spinner className="size-12" />
```

#### Button with spinner

```tsx
<Button disabled>
  <Spinner size="sm" />
  Loading...
</Button>
```

#### Button with spinner at start (data-icon="inline-start")

```tsx
<Button disabled data-icon="inline-start">
  <Spinner size="sm" />
  Please wait
</Button>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Spinner/Spinner.tsx`](../packages/components/src/Spinner/Spinner.tsx)
- **Index:** [`packages/components/src/Spinner/index.ts`](../packages/components/src/Spinner/index.ts)

---

## Switch

**Purpose:** A toggle switch component for boolean on/off states.

### Import

```typescript
import { Switch } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface SwitchProps {
  size?: 'sm' | 'default' | 'lg' | 'xl';
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `aria-label`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage

```tsx
import { Switch } from '@paalstack/react-ui';
<Switch />
```

#### Controlled switch

```tsx
const [enabled, setEnabled] = useState(false);
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

#### Color variants

```tsx
<Switch color="default" defaultChecked />
<Switch color="success" defaultChecked />
<Switch color="warning" defaultChecked />
<Switch color="destructive" defaultChecked />
<Switch color="info" defaultChecked />
<Switch color="danger" defaultChecked />
<Switch color="secondary" defaultChecked />
<Switch color="tertiary" defaultChecked />
```

#### Size variants

```tsx
<Switch size="sm" />
<Switch size="default" />
<Switch size="lg" />
<Switch size="xl" />
```

#### With label (use Label component)

```tsx
import { Switch, Label } from '@paalstack/react-ui'
<div className="flex items-center gap-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Switch/Switch.tsx`](../packages/components/src/Switch/Switch.tsx)
- **Index:** [`packages/components/src/Switch/index.ts`](../packages/components/src/Switch/index.ts)

---

## Table

**Purpose:** A set of layered sections of content—known as table—that present data in rows and columns.

### Import

```typescript
import { Table } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface TableProps {
  containerClassName?: string;
}
```

### States

This component supports the following states:

- **hover**

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Code Examples

#### Basic usage

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@paalstack/react-ui';
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### With caption and footer

```tsx
<Table>
  <TableCaption>A list of recent transactions</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Date</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>2024-01-15</TableCell>
      <TableCell>Payment received</TableCell>
      <TableCell className="text-right">$500.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### Best Practices

✅ Always check TypeScript types for available props

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Table/Table.tsx`](../packages/components/src/Table/Table.tsx)
- **Index:** [`packages/components/src/Table/index.ts`](../packages/components/src/Table/index.ts)

---

## Tabs

**Purpose:** Tab variant — "default" (boxed) or "line" (underline)
   * @default "default"
   */
  variant?

### Import

```typescript
import { Tabs } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface TabsProps {
  /**
  * Tab variant — "default" (boxed) or "line" (underline)
  * @default "default"
  */
  variant?: 'default' | 'line';
  /**
  * Optional class name applied to every tab trigger
  */
  triggerClassName?: string;
  /**
  * Optional class name applied to every tab content panel
  */
  contentClassName?: string;
  /**
  * The tabs to render
  */
  tabs: {
  label: React.ReactNode;
  value: string;
  content: React.ReactNode;
  triggerClassName?: string;
  contentClassName?: string;
}
```

### States

This component supports the following states:

- **disabled**
- **hover**
- **focus**
- **active**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-disabled`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage with default variant (boxed)

```tsx
import { Tabs } from '@paalstack/react-ui';
<Tabs
  defaultValue="account"
  tabs={[
    { label: 'Account', value: 'account', content: <AccountForm /> },
    { label: 'Password', value: 'password', content: <PasswordForm /> },
  ]}
/>
```

#### Line variant (underline indicator)

```tsx
<Tabs
  defaultValue="overview"
  variant="line"
  tabs={[
    { label: 'Overview', value: 'overview', content: <Overview /> },
    { label: 'Analytics', value: 'analytics', content: <Analytics /> },
    { label: 'Reports', value: 'reports', content: <Reports /> },
  ]}
/>
```

#### Controlled tabs

```tsx
const [activeTab, setActiveTab] = useState('general');
<Tabs
  value={activeTab}
  onValueChange={(val) => setActiveTab(val as string)}
  tabs={[
    { label: 'General', value: 'general', content: <GeneralSettings /> },
    { label: 'Advanced', value: 'advanced', content: <AdvancedSettings /> },
  ]}
/>
```

#### With icons in labels

```tsx
<Tabs
  defaultValue="profile"
  tabs={[
    { label: <><UserIcon /> Profile</>, value: 'profile', content: <ProfileForm /> },
    { label: <><BellIcon /> Notifications</>, value: 'notifications', content: <NotificationPrefs /> },
  ]}
/>
```

#### Vertical orientation

```tsx
<Tabs
  defaultValue="general"
  orientation="vertical"
  variant="line"
  tabs={[
    { label: 'General', value: 'general', content: <GeneralSettings /> },
    { label: 'Security', value: 'security', content: <SecuritySettings /> },
  ]}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Tabs/Tabs.tsx`](../packages/components/src/Tabs/Tabs.tsx)
- **Index:** [`packages/components/src/Tabs/index.ts`](../packages/components/src/Tabs/index.ts)

---

## Textarea

**Purpose:** A multi-line text input component for longer text content.

### Import

```typescript
import { Textarea } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface TextareaProps {
  /**
  * whether the textarea is invalid
  */
  isInvalid?: boolean;
  /**
  * label for the input
  */
  label?: string;
  /**
  * props for the label
  */
  labelProps?: LabelProps;
  /**
  * inline input or not
  */
  inline?: boolean;
  /**
  * textarea class name for styling
  */
  className?: string;
  /**
  * parent class name for styling
  */
  wrapperClassName?: string;
  /**
  * error message for the textarea
  */
  errorMessage?: string;
  /**
  * value for the textarea
  */
  value?: string;
  /**
  * on value change callback
  */
  onValueChange?: (value: string) => void;
}
```

### States

This component supports the following states:

- **disabled**
- **invalid/error**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`

### Dependencies

✅ **Pure React** — No external UI library dependencies

### Related Components

- [Label](#label)
- [ErrorMessage](#errormessage)

### Code Examples

#### Basic usage

```tsx
import { Textarea } from '@paalstack/react-ui';
<Textarea placeholder="Enter your message..." />
```

#### With label

```tsx
<Textarea
  label="Description"
  placeholder="Enter a description..."
/>
```

#### Required field

```tsx
<Textarea
  label="Comments"
  required
  placeholder="Your comments here..."
/>
```

#### With error message

```tsx
<Textarea
  label="Bio"
  isInvalid
  errorMessage="Bio must be at least 50 characters"
  placeholder="Tell us about yourself..."
/>
```

#### Controlled textarea

```tsx
const [value, setValue] = useState('');
<Textarea
  label="Message"
  value={value}
  onValueChange={setValue}
  placeholder="Type your message..."
/>
<p className="text-sm text-gray-500">{value.length} characters</p>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Not forwarding refs when wrapping the component
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Textarea/Textarea.tsx`](../packages/components/src/Textarea/Textarea.tsx)
- **Index:** [`packages/components/src/Textarea/index.ts`](../packages/components/src/Textarea/index.ts)

---

## Toggle

**Purpose:** A two-state button that can be either on or off.

### Import

```typescript
import { Toggle } from '@paalstack/react-ui';
```

### States

This component supports the following states:

- **disabled**
- **pressed**
- **invalid/error**
- **hover**
- **focus**

### Accessibility (ARIA)

Built-in accessibility attributes:

- `aria-invalid`
- `aria-pressed`
- `aria-label`

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives

### Code Examples

#### Basic usage

```tsx
import { Toggle } from '@paalstack/react-ui';
<Toggle pressed={pressed} onPressedChange={setPressed}>
  Toggle Me
</Toggle>
```

#### With icon

```tsx
<Toggle pressed={bold} onPressedChange={setBold} aria-label="Toggle bold">
  <BoldIcon />
</Toggle>
```

#### Outline variant

```tsx
<Toggle variant="outline">Outline</Toggle>
```

#### Different sizes

```tsx
<Toggle size="sm">Small</Toggle>
<Toggle size="default">Default</Toggle>
<Toggle size="lg">Large</Toggle>
```

#### Disabled state

```tsx
<Toggle disabled pressed>Disabled</Toggle>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support
✅ ARIA attributes are built-in — avoid adding duplicate attributes

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Toggle/Toggle.tsx`](../packages/components/src/Toggle/Toggle.tsx)
- **Index:** [`packages/components/src/Toggle/index.ts`](../packages/components/src/Toggle/index.ts)

---

## ToggleGroup

**Purpose:** The items to render as toggle buttons
   */
  items: (Omit<React.

### Import

```typescript
import { ToggleGroup } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface ToggleGroupProps {
  /**
  * The items to render as toggle buttons
  */
  items: (Omit<React.ComponentProps<typeof ToggleGroupItem>, 'children' | 'content'> & {
  content: React.ReactNode;
}
```

### States

This component supports the following states:

- **focus**

### Dependencies

- **CVA** — class-variance-authority for variants
- **Base UI** — unstyled accessible primitives
- **React Context** — for state management

### Related Components

- [Label](#label)

### Code Examples

#### Single selection

```tsx
import { ToggleGroup } from '@paalstack/react-ui';
<ToggleGroup
  type="single"
  value={alignment}
  onValueChange={setAlignment}
  items={[
    { value: 'left', content: 'Left' },
    { value: 'center', content: 'Center' },
    { value: 'right', content: 'Right' },
  ]}
/>
```

#### Multiple selection

```tsx
<ToggleGroup
  type="multiple"
  value={formats}
  onValueChange={setFormats}
  items={[
    { value: 'bold', content: <BoldIcon /> },
    { value: 'italic', content: <ItalicIcon /> },
    { value: 'underline', content: <UnderlineIcon /> },
  ]}
/>
```

#### Outline variant with spacing

```tsx
<ToggleGroup
  variant="outline"
  spacing={1}
  items={[
    { value: 'a', content: 'A' },
    { value: 'b', content: 'B' },
  ]}
/>
```

#### Composition API

```tsx
import { ToggleGroupRoot, ToggleGroupItem } from '@paalstack/react-ui';
<ToggleGroupRoot variant="outline">
  <ToggleGroupItem value="a">Option A</ToggleGroupItem>
  <ToggleGroupItem value="b">Option B</ToggleGroupItem>
</ToggleGroupRoot>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Use variant props instead of overriding with `className`
✅ Component includes keyboard navigation and screen reader support

### Common Mistakes

❌ Overriding variant classes with `className` instead of using variant props
❌ Using component outside of its required context provider
❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/ToggleGroup/ToggleGroup.tsx`](../packages/components/src/ToggleGroup/ToggleGroup.tsx)
- **Index:** [`packages/components/src/ToggleGroup/index.ts`](../packages/components/src/ToggleGroup/index.ts)

---

## Tooltip

**Purpose:** A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

### Import

```typescript
import { Tooltip } from '@paalstack/react-ui';
```

### Props Interface

```typescript
interface TooltipProps {
  /**
  * Tooltip open state
  *
  * @default false
  */
  open?: boolean;
  /**
  * Tooltip default open state
  *
  * @default false
  */
  defaultOpen?: boolean;
  /**
  * Tooltip on open state change handler
  *
  */
  onOpenChange?: (open: boolean) => void;
  /**
  * Tooltip root props
  *
  */
  rootProps?: Omit<React.ComponentPropsWithoutRef<typeof TooltipRoot>, 'open' | 'defaultOpen' | 'onOpenChange'>;
}
```

### States

This component supports the following states:

- **open/closed**

### Dependencies

- **Base UI** — unstyled accessible primitives
- **Portal** — for rendering outside DOM hierarchy

### Code Examples

#### Basic usage (Props API)

```tsx
import { Tooltip } from '@paalstack/react-ui';
<Tooltip content="Add to library" trigger={<Button variant="outline">Hover me</Button>} />
```

#### Different sides

```tsx
<Tooltip content="Top tooltip" side="top" trigger={<Button>Top</Button>} />
<Tooltip content="Right tooltip" side="right" trigger={<Button>Right</Button>} />
<Tooltip content="Bottom tooltip" side="bottom" trigger={<Button>Bottom</Button>} />
<Tooltip content="Left tooltip" side="left" trigger={<Button>Left</Button>} />
```

#### Different alignments

```tsx
<Tooltip content="Start aligned" align="start" trigger={<Button>Start</Button>} />
<Tooltip content="Center aligned" align="center" trigger={<Button>Center</Button>} />
<Tooltip content="End aligned" align="end" trigger={<Button>End</Button>} />
```

#### With custom delay

```tsx
<Tooltip content="Instant" delay={0} trigger={<Button>Instant</Button>} />
<Tooltip content="Delayed 500ms" delay={500} trigger={<Button>Delayed</Button>} />
```

#### With keyboard shortcut in content

```tsx
import { Kbd, KbdGroup } from '@paalstack/react-ui';
<Tooltip
  content={
    <div className="flex items-center gap-2">
      Save file
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>S</Kbd>
      </KbdGroup>
    </div>
  }
  trigger={<Button variant="outline">Save</Button>}
/>
```

### Best Practices

✅ Always check TypeScript types for available props
✅ Component includes keyboard navigation and screen reader support
✅ Consider z-index and positioning when using portals

### Common Mistakes

❌ Applying conflicting inline styles that break the design system

### Source Files

- **Component:** [`packages/components/src/Tooltip/Tooltip.tsx`](../packages/components/src/Tooltip/Tooltip.tsx)
- **Index:** [`packages/components/src/Tooltip/index.ts`](../packages/components/src/Tooltip/index.ts)

---

## Appendix

### How to Use This Catalog

1. **Find a component** using the Table of Contents or Quick Reference table
2. **Check the Props Interface** to see all available props and their types
3. **Review Code Examples** to understand common usage patterns
4. **Read Best Practices** before implementing
5. **Avoid Common Mistakes** listed for each component

### Updating This Catalog

This catalog is auto-generated from source code. To regenerate:

```bash
node scripts/final-catalog-generator.mjs
```

### Additional Resources

- **Storybook:** Interactive component playground with live examples
- **Source Code:** Browse `packages/components/src/` for implementation details
- **TypeScript:** Full type definitions included for IntelliSense support

