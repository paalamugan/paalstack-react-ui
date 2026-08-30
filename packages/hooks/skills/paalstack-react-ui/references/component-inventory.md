# paalstack-react-ui — Component Inventory & API Reference

> Generated 2026-08-27, refreshed 2026-08-30. Components marked (P) have a top-level props API;
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
- hooks: 73 (useMediaQuery, useControllable, useDisclosure, useLocalStorage,
  useCounter, useToggle, useClipboard, useHotkeys, useIntersection, useFetch,
  useFocusTrap, useFullscreen, useHover, useIdle, useMediaQuery, useMouse,
  useNetwork, usePagination, usePrevious, useQueue, useReducedMotion,
  useResizeObserver, useScrollIntoView, useSearchParams, useSessionStorage,
  useShortcut, useTextSelection, useTimeout, useViewportSize, ...)

## Import patterns

```tsx
import { Button, Dialog, useToast, toast, Box, Stack, Text } from '@paalstack/react-ui';
```

In a Next.js / Turbopack project: do NOT import `styles.css` — see
"Consumer-side pitfalls" in SKILL.md for why. Use `@source` in
`globals.css` instead.

## Theming / tokens

- Theme CSS variables (light/dark): import `@paalstack/react-ui/theme.css` or
  the full `all.css`
- Sidebar tokens exist: --sidebar, --sidebar-foreground, --sidebar-accent,
  --sidebar-border, --sidebar-ring, etc. (light + dark in base.css)
- Custom utilities shipped in the stylesheet: shimmer (+ shimmer-once/none),
  scroll-fade family, scrollbar-none/thin/gutter-stable, no-scrollbar,
  wrap-break-word

## Full component reference (every export, with usage)

All imports from `@paalstack/react-ui` unless noted. Components marked **(P)**
take a props API at the top level (trigger, header, footer, items, options,
etc.) — that's the default style. Composition API (`<DialogRoot>` /
`<DialogTrigger>` / `<DialogContent>`) is always available.

### Form components

| Component | Import | Props API summary |
|---|---|---|
| Button | `import { Button } from '@paalstack/react-ui'` | `<Button variant="default\|outline\|ghost\|destructive\|secondary\|link" size="default\|sm\|lg\|icon">label</Button>` |
| ButtonGroup | `ButtonGroup` | `<ButtonGroup orientation="horizontal\|vertical">{buttons}</ButtonGroup>` |
| IconButton | `IconButton` | `<IconButton icon={<LuX />} aria-label="Close" variant="ghost" />` |
| Input | `Input` | `<Input type="text" placeholder="..." value={v} onChange={...} />` |
| InputGroup | `InputGroup` | `<InputGroup><InputGroupAddon>...</InputGroupAddon><Input /></InputGroup>` |
| Textarea | `Textarea` | `<Textarea rows={4} value={v} onChange={...} />` |
| Label | `Label` | `<Label htmlFor="x">Email</Label>` |
| Field | `Field` | `<Field label="Email" description="..." error="...">{input}</Field>` |
| NumberInput | `NumberInput` | `<NumberInput value={n} onChange={setN} min={0} max={100} step={1} />` |
| Checkbox **(P)** | `Checkbox` | `<Checkbox checked={b} onCheckedChange={setB} indeterminate? />` |
| CheckboxGroup **(P)** | `CheckboxGroup` | `<CheckboxGroup options={[{value,label}]} value={vs} onChange={setVs} />` |
| RadioGroup **(P)** | `RadioGroup` | `<RadioGroup options={[{value,label}]} value={v} onChange={setV} />` |
| Switch | `Switch` | `<Switch checked={b} onCheckedChange={setB} />` |
| Select **(P)** | `Select` | `<Select options={[{value,label}]} value={v} onChange={setV} placeholder="..." />` |
| MultiSelect **(P)** | `MultiSelect` | `<MultiSelect options={...} value={vs} onChange={setVs} searchable />` |
| NativeSelect | `NativeSelect` | `<NativeSelect options={...} value={v} onChange={...} />` |
| NativeCheckbox | `NativeCheckbox` | `<NativeCheckbox checked={b} onChange={...} />` |
| NativeCheckboxGroup | `NativeCheckboxGroup` | `<NativeCheckboxGroup name="x" options={...} />` |
| NativeRadio | `NativeRadio` | `<NativeRadio value="a" name="x" />` |
| NativeRadioGroup | `NativeRadioGroup` | `<NativeRadioGroup name="x" options={...} />` |
| Slider | `Slider` | `<Slider value={[n]} onValueChange={setN} min={0} max={100} step={1} />` |
| InputOTP | `InputOTP` | `<InputOTP maxLength={6} value={v} onChange={setV}><InputOTPGroup>...</InputOTPGroup></InputOTP>` |
| Form | `Form` | `<Form fields={[{name,label,type,required}]} onSubmit={fn}>{submit}</Form>` (react-hook-form + zod) |
| FileUpload | `FileUpload` | `<FileUpload multiple accept="image/*" onUpload={fn} />` |
| Calendar | `Calendar` | `<Calendar mode="single\|range" selected={d} onSelect={setD} />` |
| DatePicker **(P)** | `DatePicker` | `<DatePicker value={d} onChange={setD} placeholder="Pick a date" />` |
| DateRangePicker **(P)** | `DateRangePicker` | `<DateRangePicker value={r} onChange={setR} />` |
| Pagination | `Pagination` | `<Pagination total={100} value={p} onChange={setP} siblings={1} />` |

### Layout & overlay

| Component | Import | Props API summary |
|---|---|---|
| Dialog **(P)** | `Dialog` | `<Dialog trigger={<Button>Open</Button>} header={{title,description}} footer={{primaryAction,secondaryAction}}>body</Dialog>` |
| Sheet **(P)** | `Sheet` | `<Sheet trigger={...} side="right\|left\|top\|bottom" header={...} footer={...}>body</Sheet>` |
| Drawer | `Drawer` | Same shape as Sheet. |
| AlertDialog **(P)** | `AlertDialog` | `<AlertDialog trigger={...} header={...} footer={{primaryAction,secondaryAction}}>body</AlertDialog>` |
| Popover **(P)** | `Popover` | `<Popover trigger={...} title="..." description="...">content</Popover>` |
| HoverCard **(P)** | `HoverCard` | `<HoverCard trigger={...} title="..." description="...">content</HoverCard>` |
| Tooltip **(P)** | `Tooltip` | `<Tooltip trigger={...} content="..." side="top\|right\|bottom\|left" />` |
| DropdownMenu **(P)** | `DropdownMenu` | `<DropdownMenu trigger={...} entries={[{label,onSelect,icon?}]} />` |
| ContextMenu **(P)** | `ContextMenu` | `<ContextMenu entries={...}>{children}</ContextMenu>` (right-click) |
| Menubar **(P)** | `Menubar` | `<Menubar menus={[{label,entries}]} />` |
| NavigationMenu **(P)** | `NavigationMenu` | `<NavigationMenu items={[{label,href,items?}]} />` |
| Accordion **(P)** | `Accordion` | `<Accordion items={[{value,title,content}]} type="single\|multiple" />` |
| Collapsible **(P)** | `Collapsible` | `<Collapsible trigger={...} title="...">content</Collapsible>` |
| Tabs **(P)** | `Tabs` | `<Tabs items={[{value,label,content}]} defaultValue="..." />` |
| Toggle **(P)** | `Toggle` | `<Toggle pressed={b} onPressedChange={setB}>label</Toggle>` |
| ToggleGroup **(P)** | `ToggleGroup` | `<ToggleGroup type="single\|multiple" items={[{value,label}]} value={v} onChange={setV} />` |
| Resizable | `Resizable` | `<Resizable direction="horizontal\|vertical"><ResizablePanel>...</ResizablePanel><ResizableHandle /><ResizablePanel>...</ResizablePanel></Resizable>` |
| ScrollArea | `ScrollArea` | `<ScrollArea className="h-72">{longContent}</ScrollArea>` |
| Separator | `Separator` | `<Separator orientation="horizontal\|vertical" />` |
| Sidebar | `Sidebar` | `<SidebarProvider><Sidebar>{nav}</Sidebar><SidebarInset>{main}</SidebarInset></SidebarProvider>` |
| Breadcrumb | `Breadcrumb` | `<Breadcrumb items={[{label,href?}]} separator="/" />` |
| Direction | `Direction` | `<Direction direction="ltr\|rtl">{children}</Direction>` |

### Data display

| Component | Import | Props API summary |
|---|---|---|
| Card | `Card` | `<Card><CardHeader><CardTitle>...</CardTitle><CardDescription>...</CardDescription></CardHeader><CardContent>...</CardContent><CardFooter>...</CardFooter></Card>` |
| Badge | `Badge` | `<Badge variant="default\|secondary\|outline\|destructive">label</Badge>` |
| Avatar | `Avatar` | `<Avatar src="..." alt="..." fallback="..." />` |
| AspectRatio | `AspectRatio` | `<AspectRatio ratio={16/9}><img /></AspectRatio>` |
| Carousel **(P)** | `Carousel` | `<Carousel items={[{content}]} opts={{loop:true}} />` |
| Chart **(P)** | `Chart` | `<Chart config={chartConfig} showTooltip showLegend><BarChart data={data}>...</BarChart></Chart>` |
| Table | `Table` | `<Table><TableHeader>...</TableHeader><TableBody>...</TableBody></Table>` |
| DataTable **(P)** | `DataTable` | `<DataTable columns={[{id,header,cell}]} data={rows} />` |
| SimpleTable | `SimpleTable` | `<SimpleTable data={rows} columns={[{key,label}]} />` |
| Kbd | `Kbd` | `<Kbd>⌘K</Kbd>` (keyboard shortcut display) |
| Skeleton | `Skeleton` | `<Skeleton className="h-4 w-32" />` |
| Spinner | `Spinner` | `<Spinner size="default\|sm\|lg" />` |
| Loading | `Loading` | `<Loading variant="spinner\|dots" label="..." />` (overlay or inline) |
| Empty | `Empty` | `<Empty icon={...} title="No items" description="..." action={...} />` |
| Error | `Error` | `<Error title="..." description="..." retry={fn} />` |
| ErrorMessage | `ErrorMessage` | `<ErrorMessage error={err} />` |
| Item | `Item` | `<Item icon={...} title="..." description="..." actions={...} />` |
| Attachment | `Attachment` | `<Attachment file={file} onDownload={fn} onRemove={fn} />` |
| Bubble | `Bubble` | `<Bubble side="start\|end" avatar={...}>{text}</Bubble>` (chat bubble) |
| Marker | `Marker` | `<Marker type="dot\|count" value={n} />` |
| Message | `Message` | `<Message role="user\|assistant" content="..." />` |
| MessageScroller **(P)** | `MessageScroller` | `<MessageScroller messages={[{id,content,align}]} autoScroll />` |
| Questionnaire **(P)** | `Questionnaire` | `<Questionnaire items={[{name,...}]} questions={[{name,title,choices}]} labels={...} />` |
| Progress | `Progress` | `<Progress value={p} max={100} />` |
| Command | `Command` | `<Command><CommandInput placeholder="..." /><CommandList><CommandItem>...</CommandItem></CommandList></Command>` |
| Combobox **(P)** | `Combobox` | `<Combobox items={[{value,label}]} value={v} onChange={setV} searchable />` |

### Providers & overlays (re-exported)

| Component | Import | Usage |
|---|---|---|
| ThemeProvider | `ThemeProvider` | `<ThemeProvider defaultTheme="system" storageKey="app-theme">{app}</ThemeProvider>` |
| NextThemeProvider | `NextThemeProvider` | `<NextThemeProvider attribute="class" defaultTheme="system" enableSystem>{app}</NextThemeProvider>` (for Next.js App Router; no FOUC flash) |
| FormatIntlProvider | `FormatIntlProvider` | `<FormatIntlProvider countryBasedFormatKey="US" timeZone="America/New_York">{app}</FormatIntlProvider>` |
| ToastProvider | `ToastProvider` | Already mounted inside ThemeProvider. Use `useToast()` + `toast()` helpers; or render `<Toaster />` standalone. |
| Toaster | `Toaster` | `<Toaster position="top-right" richColors closeButton />` |
| useToast / toast | `useToast, toast` | `const { toast } = useToast(); toast({ title: "Saved", description: "..." })` |

### Layout primitives

| Component | Import | Usage |
|---|---|---|
| Box | `Box` | `<Box className="p-4 bg-card">...</Box>` (styled `<div>`) |
| Stack / VStack / HStack | `Stack, VStack, HStack` | `<VStack gap={4}>{children}</VStack>` |
| Flex | `Flex` | `<Flex direction="row" justify="between" align="center" gap={2}>...</Flex>` |
| Grid | `Grid` | `<Grid cols={3} gap={4}>...</Grid>` |
| Center | `Center` | `<Center className="h-screen">...</Center>` |
| Container | `Container` | `<Container size="sm\|md\|lg\|xl">...</Container>` |
| Paper | `Paper` | `<Paper elevation={1\|2\|3}>...</Paper>` (surface with shadow) |
| Text | `Text` | `<Text size="sm\|md\|lg" weight="medium" color="muted\|foreground">...</Text>` |
| Heading | `Heading` | `<Heading as="h1\|h2\|h3" size="xl">Title</Heading>` |
| Typography | `Typography` | `<Typography variant="h1\|body\|caption">...</Typography>` |
| Wrap | `Wrap` | `<Wrap gap={2}>{tags}</Wrap>` |
| Portal | `Portal` | `<Portal>{modalContent}</Portal>` (renders to body) |

### Shared utilities (`@paalstack/react-ui/lib`)

```tsx
import { cn, httpClient, dateIntl, numberIntl, currencyIntl, logger } from '@paalstack/react-ui/lib';

// cn — class name combiner (clsx + tailwind-merge)
cn('p-4 hover:bg-primary', isActive && 'bg-primary');

// httpClient — pre-configured axios instance with interceptors
const data = await httpClient.get<User[]>('/users');

// Intl formatters — reactive to FormatIntlProvider context
const fmt = dateIntl(new Date(), { dateStyle: 'medium' });
const price = currencyIntl(1234.5, 'USD');
```

## Hooks — full list (73)

All from `@paalstack/react-hooks` (also re-exported via `@paalstack/react-ui`).

```tsx
import { useCounter, useToggle, useDisclosure, useLocalStorage,
         useMediaQuery, useClipboard, useHotkeys, useIntersection,
         useFocusTrap, useFullscreen, useHover, useMouse, useNetwork,
         usePagination, useReducedMotion, useResizeObserver, useTimeout,
         useViewportSize, /* ... 54 more */ } from '@paalstack/react-ui';
```

Most common usage patterns:

```tsx
// State
const [count, { increment, decrement, reset }] = useCounter(0);
const [isOpen, toggle] = useToggle(false);
const [value, setValue] = useLocalStorage('key', 'default');
const [items, setItems] = useListState([1, 2, 3]);
const [isDirty, setDirty] = useValidatedState('', (v) => v.length > 0);

// UI
const isMobile = useMediaQuery('(max-width: 768px)');
const ref = useClickOutside(() => setOpen(false));
const prefersReducedMotion = useReducedMotion();
const { width, height } = useElementSize(ref);

// Browser
const isOnline = useNetwork();
const copied, copy = useClipboard();
const isFullscreen, toggleFullscreen = useFullscreen();

// Async
const { data, error, isLoading } = useFetcher('/api/users');

// Effects
useInterval(() => tick(), delay);
useTimeout(() => save(), 1000);
useDebouncedValue(searchTerm, 300);
useDebouncedState(value, 300);
useFocusTrap(ref, isOpen);
useHotkeys([['mod+k', () => openSearch()]]);
useIntersection(ref, ([entry]) => setVisible(entry.isIntersecting));

// Head / meta
useDocumentTitle('Page title');
useFavicon('/icon.png');
useLocalNavigate();

// Keyboard / focus
useShortcut('mod+shift+p', () => openPalette());
useFocusReturn(isOpen);
useFocusWithin(ref);
useFocusOnPointerDown();

// Scroll
const scroll = useWindowScroll();
useScrollIntoView(ref, { behavior: 'smooth' });
useHeadroom(50);
useScrollLock(isOpen);

// Forms / inputs
useInputState('');
useControllable({ value, defaultValue, onChange });
useMergedRef(...refs);
useAsRef(value);
useLatestRef(value);
useLatestValue(value);

// Utilities
useId();
useConst(expensiveValue);
useColorScheme();
useCopyToClipboard();
useDisclosure({ onOpen, onClose });
useDocumentVisibility();
useEventListener('keydown', handler);
useEyeDropper();
useFetcher(url);
useForceUpdate();
useHash();
useIdle(60_000);
useIsomorphicEffect(() => {}, deps);
useLazyQueryFetcher(() => fetch(...));
useLazyRef(() => expensive());
useLogger('Component');
useMove();
useOS();
usePageLeave(() => save());
usePrevious(value);
useQueryFetcher(url);
useQueue();
useResizeObserver(ref);
useSearchParams();
useSessionStorage('key', 'default');
useSetState({ a: 1 });
useShallowEffect(() => {}, [obj]);  // compares by shallow-equal
useSize(ref);
useSubscription(subscriber);
useTextSelection();
useUpdateEffect(() => {}, deps);
useWindowEvent('resize', handler);
useWindowScroll();
```

Full type signatures live in TypeScript intellisense; this is the cheat sheet.

## Icons (31 packs via `@paalstack/react-icons`)

Import each pack as a subpath. Naming convention: pack prefix + PascalCase icon name (e.g. `Lu` + `House` = `LuHouse`).

```tsx
import { LuHouse, LuSettings, LuUser } from '@paalstack/react-icons/lu';          // Lucide
import { FaHome, FaCog, FaUser } from '@paalstack/react-icons/fa';                // Font Awesome 5
import { Fa6User, Fa6House } from '@paalstack/react-icons/fa6';                   // Font Awesome 6
import { HiHome, HiCog } from '@paalstack/react-icons/hi';                        // Heroicons
import { Hi2Home, Hi2Cog } from '@paalstack/react-icons/hi2';                     // Heroicons 2
import { MdHome, MdSettings } from '@paalstack/react-icons/md';                   // Material Design
import { RxHome, RxPerson } from '@paalstack/react-icons/rx';                     // Radix Icons
import { BiHome, BiCog } from '@paalstack/react-icons/bi';                        // Bootstrap Icons
import { TbHome, TbSettings } from '@paalstack/react-icons/tb';                   // Tabler Icons
import { PiHouse, PiUser } from '@paalstack/react-icons/pi';                      // Phosphor
import { IoHome, IoSettings } from '@paalstack/react-icons/io';                   // Ionicons 4
import { Io5Home, Io5Settings } from '@paalstack/react-icons/io5';               // Ionicons 5
import { GiHome, GiCog } from '@paalstack/react-icons/gi';                        // Game Icons
import { GoHome, GoGear } from '@paalstack/react-icons/go';                       // GitHub Octicons
import { GrHome, GrSettings } from '@paalstack/react-icons/gr';                   // Grommet
import { VscHome, VscSettings } from '@paalstack/react-icons/vsc';                // VS Code Icons
import { WiDaySunny, WiCloud } from '@paalstack/react-icons/wi';                  // Weather Icons
import { SiReact, SiTypescript } from '@paalstack/react-icons/si';                // Simple Icons
import { LiaHome, LiaCog } from '@paalstack/react-icons/lia';                     // Line Awesome
import { SlHome, SlSettings } from '@paalstack/react-icons/sl';                   // Simple Line Icons
import { TiHome, TiCog } from '@paalstack/react-icons/ti';                        // Typicons
import { TfiHome, TfiCog } from '@paalstack/react-icons/tfi';                    // Themify
import { ImHome, ImCog } from '@paalstack/react-icons/im';                        // Iconoir
import { RiHome, RiSettings } from '@paalstack/react-icons/ri';                   // Remix Icon
import { CgHome, CgCog } from '@paalstack/react-icons/cg';                        // CSS.gg
import { CiHome, CiSettings } from '@paalstack/react-icons/ci';                   // CoreUI Icons
import { DiReact, DiJsBadge } from '@paalstack/react-icons/di';                  // Devicons
import { FcHome, FcSettings } from '@paalstack/react-icons/fc';                   // Flat Color
import { FiHome, FiSettings } from '@paalstack/react-icons/fi';                   // Feather
import { AiFillHome, AiOutlineHome } from '@paalstack/react-icons/ai';            // Ant Design Icons
import { AiTwotoneHome } from '@paalstack/react-icons/ai';                        // (same pack)
import { BsHouse, BsGear } from '@paalstack/react-icons/bs';                      // Bootstrap (legacy)
```

Usage is the same as any React component:

```tsx
<LuHouse className="h-4 w-4" />
<Button leftIcon={<LuPlus />}>Add</Button>
```

When adding a component to the library, the canonical convention is:
`import { LuX as XIcon } from '@/icons/lu'` (Lucide preferred — see SKILL.md).

## CSS exports reference

```css
/* Most apps — single import */
@import '@paalstack/react-ui/all.css';

/* Or pieces, for fine-grained cascade control */
@import '@paalstack/react-ui/base.css';       /* tokens + reset (no Tailwind utilities) */
@import '@paalstack/react-ui/utilities.css';  /* custom Tailwind @utility defs */
@import '@paalstack/react-ui/toast.css';     /* sonner toast positioning */
@import '@paalstack/react-ui/theme.css';     /* @custom-variant dark + @theme inline */
@import '@paalstack/react-ui/fonts.css';     /* Inter @font-face blocks (avoid on Next.js — use next/font) */

/* Legacy (avoid on Next.js / Turbopack — 360 KB dead-weight bundle) */
@import '@paalstack/react-ui/styles.css';         /* compiled bundle of everything */
@import '@paalstack/react-ui/styles-scoped.css';  /* same but wrapped under .app */
```