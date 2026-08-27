# paalstack-react-ui — Component Inventory & API Reference

> Generated 2026-08-27. Components marked (P) have a top-level props API;
> all components also expose composition sub-components.

## shadcn parity status

All 63 components on ui.shadcn.com/docs/components are covered:

- Pre-existing (49): accordion, alert, alert-dialog, aspect-ratio, avatar,
  badge, breadcrumb, button, button-group, calendar, card, carousel, chart,
  checkbox, collapsible, combobox, command, context-menu, data-table,
  date-picker, dialog, direction, drawer, dropdown-menu, empty, field, form,
  hover-card, input, input-group, input-otp, item, kbd, label, menubar,
  native-select, navigation-menu, pagination, popover, progress, radio-group,
  resizable, scroll-area, select, separator, sheet, skeleton, slider, spinner,
  switch, table, tabs, textarea, toggle, toggle-group, tooltip
- Added Aug 2026: sidebar, attachment, bubble, marker, message,
  message-scroller, questionnaire
- Covered by other packages: sonner/toast -> providers/ToastProvider;
  typography -> layouts/Typography

## Props API (preferred) vs Composition API

Every component exposes both. Props-style examples of the key components:

### Dialog (props)
```tsx
<Dialog trigger={<Button>Open</Button>} header={{ title: 'Confirm', description: 'Are you sure?' }}
  footer={{ primaryAction: <Button>Confirm</Button>, secondaryAction: <Button variant="ghost">Cancel</Button> }}>
  Body content
</Dialog>
```

### Sheet (props)
```tsx
<Sheet trigger={<Button>Open</Button>} side="right" header={{ title: 'Settings' }} footer={{ primaryAction: <Button>Save</Button> }}>
  Body
</Sheet>
```

### Tooltip (props)
```tsx
<Tooltip trigger={<Button>Hover</Button>} content="Tooltip text" side="top" />
```

### Popover (props)
```tsx
<Popover trigger={<Button>Open</Button>} title="Title" description="Desc">{content}</Popover>
```

### Chart (props)
```tsx
<Chart config={chartConfig} showTooltip showLegend>
  <BarChart data={data}>...</BarChart>
</Chart>
```

### Questionnaire (props)
```tsx
<Questionnaire
  items={[{ name: 'task', required: true }]}
  questions={[{ name: 'task', title: 'What next?', choices: [{ value: 'a', label: 'Option A' }] }]}
  labels={{ previous: 'Back', skip: 'Skip', next: 'Next', submit: 'Done' }}
/>
```
When `questions` is omitted, children-based composition works unchanged.

### MessageScrollerChat (props)
```tsx
<MessageScrollerChat
  messages={[{ id: '1', content: 'Hi', align: 'start' }, { id: '2', content: 'Hello', align: 'end' }]}
  autoScroll
  className="h-96"
/>
```

### Direction (props)
```tsx
<Direction direction="rtl">{children}</Direction>
```

### Data-driven components take `items`/`options` props
Accordion, Tabs, Carousel, Combobox, ToggleGroup, NavigationMenu: `items`.
Select, MultiSelect, CheckboxGroup, RadioGroup, NativeRadioGroup,
NativeCheckboxGroup: `options`. Menubar: `menus`. ContextMenu: `entries`.
Form: `fields`. DataTable: `columns` + `data`.

## Full component list (packages/components/src)

Accordion, Alert, AlertDialog, AspectRatio, Attachment, Avatar, Badge,
Breadcrumb, Bubble, Button, ButtonGroup, Calendar, Card, Carousel, Chart,
Checkbox, CheckboxGroup, Collapsible, Combobox, Command, ContextMenu,
DataTable, DatePicker, DateRangePicker, Dialog, Direction, Drawer,
DropdownMenu, Empty, Error, ErrorMessage, Field, FileUpload, Form, HoverCard,
IconButton, Input, InputGroup, InputOTP, Item, Kbd, Label, Loading, Marker,
Menubar, Message, MessageScroller, MultiSelect, NativeCheckbox,
NativeCheckboxGroup, NativeRadio, NativeRadioGroup, NativeSelect,
NavigationMenu, NumberInput, Pagination, Popover, Progress, Questionnaire,
RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar,
SimpleTable, Skeleton, Slider, Spinner, Switch, Table, Tabs, Textarea, Toggle,
ToggleGroup, Tooltip

Plus from other packages (re-exported by @paalstack/react-ui):
- layouts: Box, Stack, HStack, VStack, Flex, Grid, Center, Container, Paper,
  Text, Heading, Typography, Wrap, Portal
- providers: ThemeProvider, NextThemeProvider, ToastProvider (sonner),
  FormatIntlProvider
- hooks: 50+ (useMediaQuery, useControllable, useDisclosure, ...)

## Import patterns

```tsx
import { Button, Dialog, useToast, toast, Box, Stack, Text } from '@paalstack/react-ui';
import '@paalstack/react-ui/styles.css';
```

## Theming / tokens

- Theme CSS variables (light/dark): import `@paalstack/react-ui/theme.css` or
  the full styles.css
- Sidebar tokens exist: --sidebar, --sidebar-foreground, --sidebar-accent,
  --sidebar-border, --sidebar-ring, etc. (light + dark in base.css)
- Custom utilities shipped in the stylesheet: shimmer (+ shimmer-once/none),
  scroll-fade family, scrollbar-none/thin/gutter-stable, no-scrollbar,
  wrap-break-word