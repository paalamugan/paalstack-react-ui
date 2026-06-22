#!/usr/bin/env node
/**
 * Generates AI knowledge base documentation files in docs/ and .cursor/rules/
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const RULES = path.join(ROOT, '.cursor', 'rules');

const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/.kb-extract.json'), 'utf8'));

function readFile(rel) {
  const p = path.join(ROOT, rel);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function categoryForExport(name, pkg) {
  if (name.startsWith('use') || name.startsWith('Use')) return 'Hook';
  if (name.endsWith('Provider')) return 'Provider';
  if (name.endsWith('Context') || name.startsWith('use') === false && name.includes('Context')) return 'Context';
  if (name.endsWith('Props') || name.startsWith('I') && name.length > 2) return 'Type';
  if (/^[A-Z_]+$/.test(name)) return 'Constant';
  if (name.endsWith('Variant') || name.endsWith('Variants')) return 'Utility';
  if (pkg === 'icons') return 'Icon';
  if (pkg === 'layouts' && /^[A-Z]/.test(name)) return 'Component';
  if (pkg === 'components') {
    if (name.endsWith('Props') || name.endsWith('Options') || name.endsWith('Return')) return 'Type';
    if (/Variants$/.test(name)) return 'Utility';
    return 'Component';
  }
  if (pkg === 'hooks') return 'Hook';
  if (pkg === 'shared') {
    if (/^(I[A-Z]|.*Exception|.*Client|.*Registry)/.test(name)) return 'Interface';
    if (/Type$|^Option|^Dict|^Merge|^Literal/.test(name)) return 'Type';
    if (/VARIANTS$|^InternalErrorCode/.test(name)) return 'Constant';
    return 'Utility';
  }
  return 'Utility';
}

const ICON_LIBS = {
  ai: { name: 'Ant Design Icons', prefix: 'Ai', import: '@paalstack/react-icons/ai' },
  bi: { name: 'Bootstrap Icons', prefix: 'Bi', import: '@paalstack/react-icons/bi' },
  bs: { name: 'BoxIcons', prefix: 'Bs', import: '@paalstack/react-icons/bs' },
  cg: { name: 'css.gg', prefix: 'Cg', import: '@paalstack/react-icons/cg' },
  ci: { name: 'Circum Icons', prefix: 'Ci', import: '@paalstack/react-icons/ci' },
  di: { name: 'Devicons', prefix: 'Di', import: '@paalstack/react-icons/di' },
  fa: { name: 'Font Awesome 5', prefix: 'Fa', import: '@paalstack/react-icons/fa' },
  fa6: { name: 'Font Awesome 6', prefix: 'Fa6', import: '@paalstack/react-icons/fa6' },
  fc: { name: 'Flat Color Icons', prefix: 'Fc', import: '@paalstack/react-icons/fc' },
  fi: { name: 'Feather Icons', prefix: 'Fi', import: '@paalstack/react-icons/fi' },
  gi: { name: 'Game Icons', prefix: 'Gi', import: '@paalstack/react-icons/gi' },
  go: { name: 'Octicons', prefix: 'Go', import: '@paalstack/react-icons/go' },
  gr: { name: 'Grommet Icons', prefix: 'Gr', import: '@paalstack/react-icons/gr' },
  hi: { name: 'Heroicons', prefix: 'Hi', import: '@paalstack/react-icons/hi' },
  hi2: { name: 'Heroicons v2', prefix: 'Hi2', import: '@paalstack/react-icons/hi2' },
  im: { name: 'IcoMoon Free', prefix: 'Im', import: '@paalstack/react-icons/im' },
  io: { name: 'Ionicons 4', prefix: 'Io', import: '@paalstack/react-icons/io' },
  io5: { name: 'Ionicons 5', prefix: 'Io5', import: '@paalstack/react-icons/io5' },
  lia: { name: 'Line Awesome', prefix: 'Lia', import: '@paalstack/react-icons/lia' },
  lu: { name: 'Lucide', prefix: 'Lu', import: '@paalstack/react-icons/lu' },
  md: { name: 'Material Design', prefix: 'Md', import: '@paalstack/react-icons/md' },
  pi: { name: 'Phosphor Icons', prefix: 'Pi', import: '@paalstack/react-icons/pi' },
  ri: { name: 'Remix Icon', prefix: 'Ri', import: '@paalstack/react-icons/ri' },
  rx: { name: 'Radix Icons', prefix: 'Rx', import: '@paalstack/react-icons/rx' },
  si: { name: 'Simple Icons', prefix: 'Si', import: '@paalstack/react-icons/si' },
  sl: { name: 'Simple Line Icons', prefix: 'Sl', import: '@paalstack/react-icons/sl' },
  tb: { name: 'Tabler Icons', prefix: 'Tb', import: '@paalstack/react-icons/tb' },
  tfi: { name: 'Themify Icons', prefix: 'Tfi', import: '@paalstack/react-icons/tfi' },
  ti: { name: 'Typicons', prefix: 'Ti', import: '@paalstack/react-icons/ti' },
  vsc: { name: 'VS Code Icons', prefix: 'Vsc', import: '@paalstack/react-icons/vsc' },
  wi: { name: 'Weather Icons', prefix: 'Wi', import: '@paalstack/react-icons/wi' },
};

const COMPONENT_PURPOSES = {
  Accordion: 'Expandable/collapsible content sections with keyboard navigation.',
  Alert: 'Inline status messages with semantic color variants.',
  AlertDialog: 'Modal confirmation dialog that interrupts user flow for critical actions.',
  AspectRatio: 'Maintains width/height ratio for media containers.',
  Avatar: 'User profile image with fallback initials and group stacking.',
  Badge: 'Small status/count label attached to UI elements.',
  Breadcrumb: 'Hierarchical navigation trail for current page location.',
  Button: 'Primary action control with variants, colors, sizes, loading, and polymorphic rendering.',
  ButtonGroup: 'Groups related buttons with shared styling.',
  Calendar: 'Date grid picker built on react-day-picker.',
  Card: 'Container for grouped content with header/footer slots.',
  Carousel: 'Horizontal slide carousel using Embla.',
  Chart: 'Data visualization wrappers around Recharts.',
  Checkbox: 'Accessible checkbox input via Base UI.',
  CheckboxGroup: 'Grouped checkbox selection with shared state.',
  Collapsible: 'Show/hide content region with animation.',
  Combobox: 'Searchable select with autocomplete.',
  Command: 'Command palette (cmdk) for keyboard-driven actions.',
  ContextMenu: 'Right-click contextual action menu.',
  DataTable: 'Full-featured table with sorting, filtering, pagination via TanStack Table.',
  DatePicker: 'Single-date selection popover/calendar.',
  DateRangePicker: 'Start/end date range selection.',
  Dialog: 'Modal overlay for focused tasks.',
  Direction: 'RTL/LTR direction provider for internationalized layouts.',
  Drawer: 'Mobile-friendly slide-in panel (Vaul).',
  DropdownMenu: 'Trigger-activated menu of actions.',
  Empty: 'Empty state placeholder with icon and call-to-action.',
  Error: 'Error boundary wrapper using react-error-boundary.',
  ErrorMessage: 'Form field error text display.',
  Field: 'Form field wrapper with label, description, and error slots.',
  FileUpload: 'Drag-and-drop and browse file upload control.',
  Form: 'React Hook Form integration with Zod validation.',
  HoverCard: 'Preview content on hover/focus.',
  IconButton: 'Icon-only button variant.',
  Input: 'Text input with styling and validation states.',
  InputGroup: 'Input with addons (prefix/suffix icons, buttons).',
  InputOTP: 'One-time password segmented input.',
  Item: 'Generic list/item row primitive.',
  Kbd: 'Keyboard shortcut display chip.',
  Label: 'Accessible form label.',
  Loading: 'Full-page or inline loading overlay.',
  Menubar: 'Desktop-style horizontal menu bar.',
  MultiSelect: 'Multi-value select with chips.',
  NativeCheckbox: 'Unstyled native HTML checkbox with CVA styling.',
  NativeCheckboxGroup: 'Native checkbox group wrapper.',
  NativeRadio: 'Unstyled native HTML radio with CVA styling.',
  NativeRadioGroup: 'Native radio group wrapper.',
  NativeSelect: 'Styled native HTML select element.',
  NavigationMenu: 'Site navigation with dropdown submenus.',
  NumberInput: 'Numeric input with increment/decrement controls.',
  Pagination: 'Page navigation with size options.',
  Popover: 'Floating content anchored to a trigger.',
  Progress: 'Linear progress indicator.',
  RadioGroup: 'Single-selection radio group via Base UI.',
  Resizable: 'Drag-to-resize panel layouts.',
  ScrollArea: 'Custom styled scrollable region.',
  Select: 'Dropdown single-select via Base UI.',
  Separator: 'Visual divider between content sections.',
  Sheet: 'Side panel overlay (similar to Dialog).',
  SimpleTable: 'Lightweight table without TanStack overhead.',
  Skeleton: 'Loading placeholder shimmer.',
  Slider: 'Range value slider input.',
  Spinner: 'Animated loading spinner icon.',
  Switch: 'Toggle on/off control.',
  Table: 'Semantic HTML table primitives (head/body/cell).',
  Tabs: 'Tabbed content panels.',
  Textarea: 'Multi-line text input.',
  Toggle: 'Pressable toggle button (not switch).',
  ToggleGroup: 'Group of mutually-aware toggle buttons.',
  Tooltip: 'Hover/focus supplementary information.',
};

const COMPONENT_RELATED = {
  Button: 'IconButton, ButtonGroup, Spinner, Link patterns via asChild',
  Input: 'Field, Label, InputGroup, Form, ErrorMessage',
  Select: 'Combobox, MultiSelect, NativeSelect, Field, Form',
  Checkbox: 'NativeCheckbox, CheckboxGroup, Field, Form',
  RadioGroup: 'NativeRadio, NativeRadioGroup, Field, Form',
  Dialog: 'AlertDialog, Sheet, Drawer, Popover',
  Table: 'DataTable, SimpleTable, Pagination',
  Form: 'Field, Input, Select, Checkbox, zodResolver',
  DatePicker: 'Calendar, DateRangePicker, Popover',
  Card: 'Box, Paper, Heading, Text',
};

const HOOK_PURPOSES = {
  'use-as-ref': 'Syncs a ref with a value on every render (callback ref pattern).',
  'use-callback-ref': 'Returns a stable callback ref that always invokes the latest callback.',
  'use-click-outside': 'Detects clicks outside a referenced element.',
  'use-clipboard': 'Copy text to clipboard with success/error state.',
  'use-color-scheme': 'Reads and tracks preferred color scheme (light/dark).',
  'use-const': 'Returns a constant value that never changes across renders.',
  'use-controllable': 'Controlled/uncontrolled state pattern for components.',
  'use-counter': 'Increment/decrement/reset counter state.',
  'use-debounced-state': 'State value debounced on update.',
  'use-debounced-value': 'Debounced mirror of a value prop.',
  'use-disclosure': 'Open/close toggle with ARIA button/disclosure props.',
  'use-document-title': 'Sets document.title reactively.',
  'use-document-visibility': 'Tracks Page Visibility API state.',
  'use-element-size': 'Measures element width/height via @zag-js/element-size.',
  'use-event-listener': 'Attaches DOM event listeners with cleanup.',
  'use-eye-dropper': 'Browser EyeDropper API wrapper.',
  'use-favicon': 'Dynamically changes favicon.',
  'use-fetcher': 'React Router fetcher wrapper for mutations.',
  'use-focus-on-pointer-down': 'Focuses element on pointer down.',
  'use-focus-return': 'Returns focus to trigger when overlay closes.',
  'use-focus-trap': 'Traps keyboard focus within a container.',
  'use-focus-within': 'Detects focus within a subtree.',
  'use-force-update': 'Forces component re-render.',
  'use-fullscreen': 'Fullscreen API toggle.',
  'use-hash': 'Syncs state with URL hash fragment.',
  'use-headroom': 'Hide/show header on scroll direction.',
  'use-hotkeys': 'Global keyboard shortcut registration.',
  'use-hover': 'Tracks hover state on an element.',
  'use-id': 'Stable unique ID generation (SSR-safe).',
  'use-idle': 'Detects user idle/inactivity.',
  'use-input-state': 'Controlled input state with onChange handler.',
  'use-intersection': 'Intersection Observer wrapper.',
  'use-interval': 'Declarative setInterval with cleanup.',
  'use-isomorphic-effect': 'useLayoutEffect on client, useEffect on server.',
  'use-latest-ref': 'Ref always holding the latest value.',
  'use-latest-value': 'Returns latest value without triggering effects.',
  'use-lazy-query-fetcher': 'Deferred React Router query fetcher.',
  'use-lazy-ref': 'Lazy-initialized ref (runs initializer once).',
  'use-list-state': 'Array state with append/remove/reorder helpers.',
  'use-local-navigate': 'React Router navigate scoped to local context.',
  'use-local-storage': 'Persisted state in localStorage with sync.',
  'use-logger': 'Returns configured logger instance.',
  'use-media-query': 'Matches CSS media query strings.',
  'use-merged-ref': 'Combines multiple refs into one callback ref.',
  'use-mouse': 'Tracks mouse position relative to element/window.',
  'use-move': 'Drag/move gesture tracking.',
  'use-network': 'Online/offline and connection quality.',
  'use-os': 'Detects operating system from user agent.',
  'use-page-leave': 'Detects mouse leaving viewport (exit intent).',
  'use-pagination': 'Page index, range, and navigation helpers.',
  'use-previous': 'Returns previous render value.',
  'use-query-fetcher': 'React Router query fetcher for data loading.',
  'use-queue': 'FIFO queue state management.',
  'use-reduced-motion': 'Respects prefers-reduced-motion.',
  'use-resize-observer': 'Observes element size changes.',
  'use-scroll-into-view': 'Animated scroll element into viewport.',
  'use-scroll-lock': 'Locks body scroll when overlay open.',
  'use-search-params': 'React Router search params read/write.',
  'use-session-storage': 'Persisted state in sessionStorage.',
  'use-set-state': 'Partial state updates (object merge).',
  'use-shallow-effect': 'useEffect with shallow dependency compare.',
  'use-shortcut': 'Single keyboard shortcut handler.',
  'use-size': 'Element size measurement hook.',
  'use-subscription': 'Subscribe to Observable-like sources.',
  'use-text-selection': 'Tracks text selection within element.',
  'use-timeout': 'Declarative setTimeout with cleanup.',
  'use-toggle': 'Boolean toggle state.',
  'use-update-effect': 'useEffect that skips first mount.',
  'use-validated-state': 'State with validation rules.',
  'use-viewport-size': 'Window inner width/height tracking.',
  'use-window-event': 'window.addEventListener wrapper.',
  'use-window-scroll': 'Window scroll position tracking.',
};

function metaFlags(m) {
  const flags = [];
  if (m.cva) flags.push('CVA');
  if (m.tailwindVariants) flags.push('Tailwind Variants');
  if (m.baseUI) flags.push('Base UI');
  if (m.radix) flags.push('Radix UI');
  if (m.headless) flags.push('Headless UI');
  if (m.context) flags.push('Context');
  if (m.portal) flags.push('Portal');
  return flags.length ? flags.join(', ') : 'None (styled primitives / custom)';
}

function extractJsDocPurpose(filePath) {
  const content = readFile(filePath.replace(ROOT + '/', ''));
  const m = content.match(/\/\*\*\s*\n\s*\*\s*([^\n@]+)/);
  return m?.[1]?.trim() || null;
}

function extractExportBlock(content) {
  const m = content.match(/export\s*\{([^}]+)\}/s);
  if (!m) return [];
  return m[1].split(',').map((s) => s.trim().split(/\s+as\s+/).pop().trim()).filter(Boolean);
}

// Fix AlertDialog exports
for (const c of data.components) {
  if (c.exports.length === 0 && c.files?.length) {
    const main = c.files.find((f) => f.endsWith('.tsx'));
    if (main) {
      const names = extractExportBlock(readFile(main));
      c.exports = names.map((name) => ({ name, kind: 'export', file: main }));
    }
  }
}

// --- 1. REPOSITORY_OVERVIEW.md ---
function genRepositoryOverview() {
  return `# Repository Overview

PaalStack React UI is a pnpm monorepo publishing accessible React components, hooks, icons, layouts, and providers built on **Base UI**, **Tailwind CSS v4**, and **TypeScript**. Build tool: **tsup** (ESM + CJS + DTS).

## Package Matrix

| Package | NPM Name | Version | Purpose |
|---------|----------|---------|---------|
| components | \`@paalstack/react-components\` | 1.1.2 | 70+ accessible UI components |
| hooks | \`@paalstack/react-hooks\` | 1.1.1 | 72 React hooks |
| icons | \`@paalstack/react-icons\` | 1.1.0 | 31 react-icons sub-path re-exports |
| layouts | \`@paalstack/react-layouts\` | 1.1.1 | Polymorphic layout & typography |
| providers | \`@paalstack/react-providers\` | 1.1.1 | Theme, toast, i18n providers |
| shared | \`@paalstack/react-shared\` | 1.1.1 | Utilities, types, constants, HTTP/format libs |
| ui | \`@paalstack/react-ui\` | 1.1.2 | All-in-one bundle (components + layouts + providers + shared) |
| config | \`@paalstack/react-config\` | 1.1.0 | Shared ESLint/Prettier configs |
| test-utils | \`@paalstack/react-test-utils\` | 1.1.0 | Testing helpers and mocks |

---

## @paalstack/react-components

**Purpose:** Production UI components styled with Tailwind v4, built primarily on @base-ui/react primitives.

**Entry:** \`dist/index.js\` (ESM), \`dist/index.cjs\` (CJS), \`dist/index.d.ts\`

**Build:** \`tsup\` — bundles all \`src/**/*.{ts,tsx}\` excluding tests/stories.

**Dependencies:** @base-ui/react, class-variance-authority, @tanstack/react-table, cmdk, date-fns, embla-carousel-react, input-otp, react-day-picker, react-hook-form, @hookform/resolvers, zod, recharts, sonner, vaul, react-resizable-panels, react-error-boundary, react-router

**Peer Dependencies:** \`react >=18\`, \`react-dom >=18\`

**Public Exports:** ${data.components.length} component modules — see [EXPORT_INVENTORY.md](./EXPORT_INVENTORY.md)

**Import:**
\`\`\`tsx
import { Button, Dialog, Form } from '@paalstack/react-components';
// or via umbrella package:
import { Button } from '@paalstack/react-ui';
\`\`\`

---

## @paalstack/react-hooks

**Purpose:** Standalone hooks for state, browser APIs, focus management, routing, and async patterns.

**Entry:** \`dist/index.js\`, \`dist/index.cjs\`, \`dist/index.d.ts\`

**Build:** \`tsup\` — \`sideEffects: false\` for tree-shaking.

**Dependencies:** @zag-js/element-size, react-router, zen-observable-ts

**Peer Dependencies:** \`react >=18\`, \`react-dom >=18\`

**Public Exports:** ${data.hooks.length} hooks — see [HOOKS_CATALOG.md](./HOOKS_CATALOG.md)

**Import:**
\`\`\`tsx
import { useDisclosure, useLocalStorage, useMediaQuery } from '@paalstack/react-hooks';
\`\`\`

---

## @paalstack/react-icons

**Purpose:** Tree-shakeable re-exports of [react-icons](https://react-icons.github.io/react-icons/) via sub-path imports.

**Entry:** \`dist/index.js\` (full react-icons barrel) + 31 sub-path entries

**Build:** \`tsup\` with per-library entries

**Dependencies:** react-icons ^5.6.0

**Peer Dependencies:** \`react >=18\`, \`react-dom >=18\`

**Sub-path Exports:** ${Object.keys(ICON_LIBS).join(', ')}

**Import:**
\`\`\`tsx
import { LuSettings, LuUser } from '@paalstack/react-icons/lu';
import { FiPlus } from '@paalstack/react-icons/fi';
\`\`\`

---

## @paalstack/react-layouts

**Purpose:** Polymorphic layout primitives (Box, Flex, Grid, Stack) and typography (Heading, Text).

**Entry:** \`dist/index.js\`, \`dist/index.d.ts\`

**Build:** \`tsup\`

**Dependencies:** None (uses shared via workspace path aliases at build time)

**Peer Dependencies:** \`react >=18\`, \`react-dom >=18\`

**Exports:** ${data.layouts.join(', ')}

---

## @paalstack/react-providers

**Purpose:** Application-level context providers.

**Entry:** \`dist/index.js\` + sub-paths for each provider + \`./styles.css\`

**Build:** \`tsup\`

**Dependencies:** next-themes, sonner, react-router

**Peer Dependencies:** \`react >=18.2.x\`, \`react-dom >=18.2.x\`

**Exports:** ThemeProvider, NextThemeProvider, ToastProvider, FormatIntlProvider, useTheme, useToast, useFormatIntl

**Import:**
\`\`\`tsx
import { ThemeProvider } from '@paalstack/react-ui';
import '@paalstack/react-ui/styles.css';
\`\`\`

---

## @paalstack/react-shared

**Purpose:** Shared utilities, design tokens (colors CVA), types, HTTP client, formatters, logger.

**Entry:** \`dist/index.js\` + \`./constants\`, \`./types\`, \`./utils\`, \`./lib\`

**Build:** \`tsup\`

**Dependencies:** axios, cheerio, clsx, tailwind-merge, date-fns, date-fns-tz, intl-messageformat

**Peer Dependencies:** \`react >=18.2.x\`, \`react-dom >=18.2.x\`, \`tailwindcss >=4.x\`

---

## @paalstack/react-ui

**Purpose:** Single install for components, layouts, providers, and shared utilities with CSS entry points.

**Entry:** \`dist/index.js\`, \`./styles.css\`, \`./styles-scoped.css\`, \`./theme.css\`, \`./lib\`

**Build:** \`tsup\` + PostCSS/Tailwind for CSS artifacts

**Dependencies:** Bundles components, layouts, providers, shared (hooks/icons are separate packages — install alongside)

**Peer Dependencies:** \`react >=18\`, \`react-dom >=18\`, \`tailwindcss >=4\`

**Recommended setup:**
\`\`\`tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Button, Box } from '@paalstack/react-ui';
\`\`\`

---

## @paalstack/react-config

**Purpose:** Monorepo ESLint and Prettier configuration.

**Exports:** \`eslintConfig\`, \`eslintViteConfig\`, \`prettierConfig\`

**No runtime peer dependencies.**

---

## @paalstack/react-test-utils

**Purpose:** Jest/Testing Library helpers, focus utilities, browser mocks, custom render.

**Exports:** Re-exports from @testing-library/react, accessibility helpers, mocks, render wrappers.

---

## Monorepo Scripts

| Script | Description |
|--------|-------------|
| \`pnpm build\` | Build all packages via tsup |
| \`pnpm storybook\` | Dev Storybook on :6006 |
| \`pnpm test\` | Run package tests |
| \`pnpm lint\` | ESLint all packages |
| \`pnpm validate:package-exports\` | Validate export maps |

## Internal Path Aliases (source)

Packages use \`@/components\`, \`@/layouts\`, \`@/shared\`, \`@/providers\`, \`@/hooks\` during development. Published \`@paalstack/react-ui\` bundles these into a single package.

Generated: ${data.generatedAt}
`;
}

// --- 2. EXPORT_INVENTORY.md ---
function genExportInventory() {
  const rows = [];

  for (const c of data.components) {
    for (const e of c.exports) {
      rows.push({
        name: e.name,
        category: categoryForExport(e.name, 'components'),
        source: e.file?.replace(ROOT + '/', '') || `packages/components/src/${c.name}`,
        import: `import { ${e.name} } from '@paalstack/react-ui';`,
      });
    }
  }

  for (const h of data.hooks) {
    const hookName = h.exports.find((e) => e.name.startsWith('use'))?.name || h.hookName;
    for (const e of h.exports) {
      rows.push({
        name: e.name,
        category: categoryForExport(e.name, 'hooks'),
        source: h.file,
        import: `import { ${e.name} } from '@paalstack/react-hooks';`,
      });
    }
  }

  for (const l of data.layouts) {
    rows.push({
      name: l,
      category: 'Component',
      source: `packages/layouts/src/${l}`,
      import: `import { ${l} } from '@paalstack/react-ui';`,
    });
  }

  const providerExports = ['ThemeProvider', 'NextThemeProvider', 'ToastProvider', 'FormatIntlProvider', 'useTheme', 'useToast', 'useFormatIntl'];
  for (const p of providerExports) {
    rows.push({
      name: p,
      category: p.startsWith('use') ? 'Hook' : 'Provider',
      source: `packages/providers/src/${p.replace('use', '').replace('Theme', 'ThemeProvider')}`,
      import: `import { ${p} } from '@paalstack/react-ui';`,
    });
  }

  for (const [code, lib] of Object.entries(ICON_LIBS)) {
    rows.push({
      name: `${lib.prefix}* (icon components)`,
      category: 'Icon',
      source: `packages/icons/src/${code}/index.ts`,
      import: `import { ${lib.prefix}IconName } from '${lib.import}';`,
    });
  }

  const sharedUtils = ['cn', 'assignRef', 'clamp', 'createContext', 'forwardRef', 'Slot', 'debounce', 'objectFilter', 'isDefinedValue', 'filterUndefined', 'jsonParser', 'isPositiveInteger', 'isPositiveFloat', 'isAriaInvalid', 'result', 'randomId', 'range', 'shallowEqual', 'upperFirst', 'lowerFirst', 'getTabbables', 'patchConsoleError'];
  for (const u of sharedUtils) {
    rows.push({
      name: u,
      category: 'Utility',
      source: 'packages/shared/src/utils or packages/shared/src/lib',
      import: `import { ${u} } from '@paalstack/react-ui';`,
    });
  }

  let md = `# Export Inventory

Total documented exports: ${rows.length}+ (icons include thousands of individual icon components via sub-paths).

| Name | Category | Source Path | Import Example |
|------|----------|-------------|----------------|
`;
  for (const r of rows) {
    md += `| \`${r.name}\` | ${r.category} | \`${r.source}\` | \`${r.import}\` |\n`;
  }
  return md;
}

// --- 3. COMPONENT_CATALOG.md ---
function genComponentCatalog() {
  let md = `# Component Catalog

${data.components.length} components in \`@paalstack/react-components\`. All support \`className\` extension via \`cn()\` unless \`unstyled\`.

## Index

${data.components.map((c) => `- [${c.name}](#${c.name.toLowerCase()})`).join('\n')}

---

`;

  for (const c of data.components) {
    const purpose = COMPONENT_PURPOSES[c.name] || `${c.name} UI component.`;
    const mainFile = c.files?.find((f) => f.endsWith('.tsx') && !f.includes('stories')) || c.files?.[0] || '';
    const exports = c.exports.map((e) => e.name).filter((n) => !n.endsWith('Props'));
    const propsTypes = c.propsTypes?.length ? c.propsTypes.join(', ') : exports.find((n) => n.endsWith('Props')) || `${c.name}Props (see source)`;
    const variants = c.variantKeys?.filter((k) => !['default', 'colorVariant'].includes(k)).join(', ') || 'See source / design tokens';
    const related = COMPONENT_RELATED[c.name] || 'Box, Field, Label for form components; Dialog family for overlays';

    md += `## ${c.name}

### Purpose
${purpose}

### Import
\`\`\`tsx
import { ${exports.slice(0, 5).join(', ')}${exports.length > 5 ? ', ...' : ''} } from '@paalstack/react-ui';
\`\`\`

### Props
Primary types: \`${propsTypes}\`. Extends polymorphic \`Box\` props where applicable (\`as\`, \`bg\`, \`textColor\`, \`className\`).

### Default Values
Component-specific — inspect \`${mainFile}\`. Common patterns: \`size="default"\`, \`variant="solid"\` or shadcn-style \`variant="default"\`.

### Variants
${variants || 'N/A'}

### Sizes
Common size scale: \`xs\`, \`sm\`, \`default\`, \`lg\`, \`icon\`, \`icon-sm\`, \`icon-lg\` (where applicable).

### States
\`disabled\`, \`aria-invalid\`, \`data-[state=open|closed]\`, loading (\`isLoading\` on Button), focus-visible rings.

### Accessibility
Built on **Base UI** where marked. Keyboard navigation, ARIA roles, focus management for overlays. Use \`Label\` + \`Field\` for form controls.

### Implementation Stack
${metaFlags(c.meta)}

### Dependencies
${c.meta.baseUI ? 'Base UI primitives, ' : ''}@/layouts (Box), @/shared (cn, constants, forwardRef)

### Related Components
${related}

### Best Practices
- Compose with \`Field\`, \`Label\`, and \`Form\` for validated forms.
- Prefer \`@paalstack/react-icons/*\` for icons.
- Use \`ThemeProvider\` at app root for dark mode tokens.

### Common Mistakes
- Duplicating native HTML controls instead of using \`Native*\` variants when unstyled behavior is needed.
- Omitting \`styles.css\` import when colors look unstyled.
- Nesting interactive elements incorrectly in menu/dialog components.

### Code Example
\`\`\`tsx
import { ${c.name} } from '@paalstack/react-ui';

export function Example() {
  return (
    <${c.name}${c.name === 'Button' ? ' variant="solid" color="primary"' : ''}>
      ${c.name === 'Button' ? 'Click me' : 'Content'}
    </${c.name}>
  );
}
\`\`\`

---

`;
  }
  return md;
}

// --- 4. HOOKS_CATALOG.md ---
function genHooksCatalog() {
  let md = `# Hooks Catalog

${data.hooks.length} hooks in \`@paalstack/react-hooks\`.

| Hook | Purpose |
|------|---------|
${data.hooks.map((h) => {
  const name = h.exports.find((e) => e.name.startsWith('use'))?.name || h.hookName;
  return `| \`${name}\` | ${HOOK_PURPOSES[h.name] || 'See source'} |`;
}).join('\n')}

---

`;

  for (const h of data.hooks) {
    const hookName = h.exports.find((e) => e.name.startsWith('use'))?.name || h.hookName;
    const purpose = HOOK_PURPOSES[h.name] || `Hook: ${hookName}`;
    const content = readFile(h.file);
    const optionsType = h.exports.find((e) => e.name.includes('Options'))?.name || `${hookName.replace('use', 'Use')}Options`;
    const returnType = h.exports.find((e) => e.name.includes('Return'))?.name || `ReturnType<typeof ${hookName}>`;

    md += `## ${hookName}

### Purpose
${purpose}

### Parameters
\`${optionsType}\` — see \`${h.file}\`

Signature: \`${hookName}(${h.params})\`

### Return Value
\`${returnType}\`

### Internal Logic Summary
${content.includes('useCallback') ? 'Uses useCallback/useMemo for stable handlers. ' : ''}${content.includes('useEffect') ? 'Side effects in useEffect with cleanup. ' : ''}${content.includes('localStorage') ? 'Persists to localStorage. ' : ''}${content.includes('useCallbackRef') ? 'Uses useCallbackRef for latest callback refs. ' : ''}

### Usage Example
\`\`\`tsx
import { ${hookName} } from '@paalstack/react-hooks';

function Demo() {
  const result = ${hookName}();
  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
\`\`\`

### When To Use
${purpose}

### When NOT To Use
Avoid when React 19+ built-ins or simpler \`useState\` suffices. Do not use browser hooks during SSR without guards.

### Related Hooks
${h.name.includes('storage') ? 'useLocalStorage, useSessionStorage' : h.name.includes('debounc') ? 'useDebouncedState, useDebouncedValue' : h.name.includes('focus') ? 'useFocusTrap, useFocusReturn, useFocusWithin' : 'See HOOKS_CATALOG index'}

### Performance Notes
${content.includes('useCallback') ? 'Memoized callbacks prevent unnecessary child re-renders.' : 'Lightweight; no special memoization.'}

### Best Practices
Import from \`@paalstack/react-hooks\` (install alongside \`@paalstack/react-ui\`). Pair \`useDisclosure\` with Dialog/Drawer. Use \`useIsomorphicEffect\` for DOM-only effects.

---

`;
  }
  return md;
}

// Continue in part 2...
function genIconsCatalog() {
  let md = `# Icons Catalog

31 icon library groups re-exporting [react-icons](https://react-icons.github.io/react-icons/) v5.

## Import Patterns

\`\`\`tsx
// Tree-shakeable sub-path (recommended)
import { LuSettings, LuChevronDown } from '@paalstack/react-icons/lu';
import { FiPlus, FiTrash2 } from '@paalstack/react-icons/fi';
import { RiDashboardLine } from '@paalstack/react-icons/ri';

// Full barrel (avoid — large bundle)
import { LuSettings } from '@paalstack/react-icons';
\`\`\`

## Icon Props (react-icons)
All icons accept standard SVG props: \`size\`, \`color\`, \`className\`, \`title\`, \`aria-hidden\`, etc.

\`\`\`tsx
<LuSettings size={20} className="text-primary" aria-hidden />
\`\`\`

## Library Groups

| Code | Library | Prefix | Import Path | Best For |
|------|---------|--------|-------------|----------|
${Object.entries(ICON_LIBS).map(([code, lib]) => `| ${code} | ${lib.name} | ${lib.prefix} | \`${lib.import}\` | See categories below |`).join('\n')}

## Categories & Recommended Libraries

### Navigation
LuChevron*, LuArrow*, LuMenu, HiHome, RiDashboardLine, TbLayoutDashboard — **lu**, **hi2**, **ri**, **tb**

### Action
FiPlus, FiEdit, FiTrash2, LuCopy, LuDownload — **fi**, **lu**

### Status
LuCheck, LuX, LuAlertCircle, MdError, MdInfo — **lu**, **md**

### Form
LuSearch, LuEye, LuEyeOff, LuCalendar — **lu**, **fi**

### Social
FaTwitter, FaGithub, SiLinkedin — **fa6**, **si**

### Media
LuPlay, LuPause, LuVolume2, MdMovie — **lu**, **md**

### Misc / Tech
VscCode, DiReact, SiTypescript — **vsc**, **di**, **si**

## Usage in Components

\`\`\`tsx
import { Button } from '@paalstack/react-ui';
import { FiPlus } from '@paalstack/react-icons/fi';

<Button leftIcon={<FiPlus />}>Add item</Button>
\`\`\`

## Naming Convention
Icon components are PascalCase with library prefix: \`LuSettings\`, \`FiPlus\`, \`RiCloseLine\`.
`;
  return md;
}

function genUtilitiesCatalog() {
  return `# Utilities Catalog

Utilities from \`@paalstack/react-shared\` (available via \`@paalstack/react-ui\` and sub-paths \`@paalstack/react-shared/utils\`, \`@paalstack/react-shared/lib\`).

## General Helpers

| Function | Purpose | Parameters | Return | Example |
|----------|---------|------------|--------|---------|
| \`cn(...inputs)\` | Merge Tailwind classes | ClassValue[] | string | \`cn('p-4', className)\` |
| \`objectFilter(obj, fn)\` | Filter object entries | object, predicate | Dict | Filter defined props |
| \`filterUndefined(obj)\` | Remove undefined/null keys | Dict | Dict | Clean props object |
| \`isDefinedValue(v)\` | Not null/undefined check | unknown | boolean | Guard before render |
| \`result(obj, key, default)\` | Deep get with dot path | object, string, T? | T | \`result(data, 'user.name')\` |
| \`debounce(fn, wait, immediate?)\` | Debounce function | fn, ms, bool? | debounced fn | Search input handler |
| \`jsonParser<T>(value)\` | Safe JSON.parse | unknown | T \\| null | Parse localStorage |
| \`getRandomBoxColors(count)\` | Random theme colors | number | BoxColorVariant[] | Storybook demos |
| \`disableStorybookArgTypes(keys)\` | Hide Storybook controls | string[] | Dict | Stories only |

## String

| Function | Purpose | Parameters | Return |
|----------|---------|------------|--------|
| \`upperFirst(s)\` | Capitalize first char | string | string |
| \`lowerFirst(s)\` | Lowercase first char | string | string |
| \`randomId(prefix?)\` | Unique ID string | string? | string |

## Number

| Function | Purpose | Parameters | Return |
|----------|---------|------------|--------|
| \`clamp(value, min, max)\` | Bound number | number, number, number | number |
| \`range(start, end, step?)\` | Number array range | number, number, number? | number[] |
| \`isPositiveInteger(v, startFrom?)\` | Validate positive int | unknown, number? | boolean |
| \`isPositiveFloat(v, startFrom?)\` | Validate positive float | unknown, number? | boolean |

## Validation

| Function | Purpose |
|----------|---------|
| \`isAriaInvalid(value)\` | Checks aria-invalid truthy values |

## Browser / DOM

| Function | Purpose |
|----------|---------|
| \`getTabbables(container)\` | List focusable elements |
| \`assignRef(ref, value)\` | Assign to ref callback/object |
| \`forwardRef\` | Polymorphic forwardRef helper |
| \`Slot\` | Radix-style slot composition |
| \`createContext\` | Typed context factory |
| \`patchConsoleError()\` | Suppress known console noise in tests |

## Storage
Use hooks: \`useLocalStorage\`, \`useSessionStorage\` from \`@paalstack/react-hooks\`.

## API / HTTP (\`@paalstack/react-shared/lib\`)

| Export | Purpose |
|--------|---------|
| \`HttpClient\` | Axios-based HTTP client |
| \`AxiosClient\` | Axios adapter |
| \`HttpError\` | Typed HTTP error |
| \`ErrorHandlerRegistry\` | Pluggable error handlers |
| \`InternalErrorCode\` | Error code enum |

## Formatting (\`@paalstack/react-shared/lib\`)

| Export | Purpose |
|--------|---------|
| \`formatDate\` | Locale date formatting |
| \`formatNumber\` | Number formatting |
| \`formatCurrency\` | Currency formatting |
| \`translate\` | ICU message formatting |
| \`TIME_ZONES\` | Timezone constants |

## Date
date-fns + date-fns-tz used internally in DatePicker/Calendar and format lib.

## React Utilities

| Export | Purpose | Source |
|--------|---------|--------|
| \`forwardRef\` | Polymorphic forwardRef with \`as\` prop | \`utils/forward-ref.ts\` |
| \`Slot\` | Merge props onto child element | \`utils/slot.tsx\` |
| \`createContext\` | Context factory with provider + hook | \`utils/create-context.ts\` |
| \`createContextContainer\` | Context container pattern | \`utils/create-context-container.tsx\` |

## DOM

| Function | Purpose |
|----------|---------|
| \`getTabbables(container)\` | Returns focusable/tabbable elements within container |
| \`isElement(el)\` | Type guard for Element | 
| \`getOwnerDocument(node)\` | Safe document lookup |

## Logger (\`shared/lib/logger\`)

| Export | Purpose |
|--------|---------|
| \`ConsoleLogger\` | Console-based ILogger implementation |
| \`MockLogger\` | Test/no-op logger |
| \`ILogger\` | Logger interface |

## Currency Converter

| Export | Purpose |
|--------|---------|
| \`CurrencyConverter\` | Exchange rate conversion |
| \`CURRENCY_CODES\` | Supported currency constants |

## Format Functions (via FormatIntlProvider or direct import)

| Function | Purpose |
|----------|---------|
| \`formatDate(value, options)\` | Locale-aware date formatting |
| \`formatDateTime(value, options)\` | Date + time formatting |
| \`formatRelativeDate(value, options)\` | Relative time (e.g. "2 hours ago") |
| \`formatNumber(value, options)\` | Locale number formatting |
| \`formatCurrency(value, options)\` | Currency formatting |
| \`translate(message, values, locale)\` | ICU MessageFormat translation |
| \`getLocalCountryBasedFormat(country)\` | Country-specific format defaults |

## Edge Cases
- \`jsonParser\` returns \`null\` on invalid JSON (never throws).
- \`debounce\` uses NodeJS.Timeout — clear on unmount in components via \`useDebouncedValue\` hook instead.
- \`cn()\` requires \`tailwindcss >= 4\` peer for correct merge semantics.
- \`shallowEqual\` used internally for \`useShallowEffect\` dependency comparison.
`;
}

function genTypesCatalog() {
  return `# Types Catalog

## Shared Types (\`packages/shared/src/types\`)

| Name | Definition | Purpose | Usage |
|------|------------|---------|-------|
| \`Dict<T>\` | \`Record<string, T>\` | Generic object map | Metadata, options |
| \`OptionType\` | interface with label, value, key?, disabled? | Select/combobox options | \`Select\`, \`MultiSelect\` |
| \`OptionGroupType\` | label + items[] | Grouped options | \`Select\` groups |
| \`Merge<T,P>\` | P & Omit<T, keyof P> | Type merge utility | Component props |
| \`LiteralUnion<T,U>\` | T \\| (U & { _?: never }) | Autocomplete-friendly unions | Variant props |
| \`Booleanish\` | boolean \\| 'true' \\| 'false' | HTML boolean attrs | ARIA props |
| \`StringOrNumber\` | string \\| number | Flexible IDs/values | Pagination |
| \`EventKeys\` | Keyboard key union | Hotkey/shortcut hooks | \`useHotkeys\` |
| \`TailwindBoxVariants\` | VariantProps<tailwindBoxVariants> | Box color/size props | \`Box\`, layouts |
| \`ComponentWithAs\` | Polymorphic component type | \`as\` prop typing | \`Box\`, \`Button\` |
| \`TailwindStyledComponentProps\` | bg, textColor, borderColor, fontSize | Layout styling props | All layout components |

## Color Constants (\`packages/shared/src/constants/colors.ts\`)

| Name | Purpose |
|------|---------|
| \`COLOR_VARIANTS\` | Semantic colors: primary, secondary, danger, etc. |
| \`TAILWIND_COLOR_VARIANTS\` | Tailwind palette names |
| \`ALL_COLOR_VARIANTS\` | Combined color union |
| \`BOX_COLOR_VARIANTS\` | Box bg/text/border colors |
| \`FONT_SIZE_VARIANTS\` | Typography size tokens |
| \`tailwindBoxVariants\` | CVA for Box styling |

## Component Props (representative)

| Name | Related |
|------|---------|
| \`ButtonProps\` | Button, IconButton |
| \`AlertProps\` | Alert |
| \`UseDisclosureOptions\` / \`UseDisclosureReturn\` | useDisclosure |
| \`ThemeProviderProps\` | ThemeProvider |
| \`DataTableProps\` | DataTable |

## HTTP Types

| Name | Purpose |
|------|---------|
| \`IHttpClient\` | HTTP client interface |
| \`IAxiosClient\` | Axios-specific interface |
| \`ResourceNotFoundException\` | 404 exception class |
| \`InternalServerException\` | 500 exception class |

## Format Types

| Name | Purpose |
|------|---------|
| \`BaseDateType\` | \`string \\| Date \\| number\` input for formatters |
| \`IDateOptions\` | dateFormat, dateTimeFormat, timeZone, locale, fallback |
| \`FormatOptions\` | Partial date/number/currency format config |
| \`CurrencyExchange\` | Currency converter options |
| \`TimeZone\` | Timezone string union from time-zones.ts |

## Provider Types

| Name | Definition | Purpose |
|------|------------|---------|
| \`Theme\` | \`'dark' \\| 'light' \\| 'system'\` | Theme mode |
| \`ThemeContextState\` | theme, setTheme, toggleTheme, isDark, isLight, isSystem | useTheme return |
| \`ThemeProviderProps\` | defaultTheme, storageKey, toasterProps, children | ThemeProvider |
| \`NextThemeProviderProps\` | extends ThemeProviderProps + next-themes options | Next.js apps |
| \`FormatIntlProviderProps\` | locale, currency, date/number formats | i18n provider |
| \`FormatIntlContextState\` | formatDate, formatCurrency, translate, etc. | useFormatIntl return |
| \`ToastProviderProps\` | extends sonner ToasterProps | Toast container |
| \`ToasterProps\` | position, theme, richColors, etc. | Sonner config |

## Component Variant Types

| Name | Related |
|------|---------|
| \`ButtonVariant\` | solid, outline, ghost, soft, link, surface |
| \`AllColorVariant\` | Semantic + Tailwind color names |
| \`FontSizeVariant\` | xs through 9xl |

Inspect \`packages/shared/src/lib/http/types.ts\` and component \`*Props\` interfaces for full definitions.
`;
}

function genDesignSystem() {
  return `# Design System

PaalStack uses **CSS custom properties** + **Tailwind CSS v4** \`@theme\` block. Source: \`packages/ui/src/styles/\`.

## Typography

| Token | Value |
|-------|-------|
| \`--font-sans\` | Inter, ui-sans-serif, system-ui |
| \`--font-serif\` | Roboto Serif, ui-serif, serif |
| \`--font-mono\` | DM Mono, ui-monospace, monospace |

Font sizes via \`FONT_SIZE_VARIANTS\`: xs, 2xs, 3xs, tiny, sm, base, lg, xl, 2xl–9xl.

Components: \`Heading\`, \`Text\`, \`Typography\`.

## Colors

Semantic tokens (light/dark in \`base.css\`):

- **Surface:** background, foreground, card, popover, muted, accent
- **Brand:** primary, secondary, tertiary (+ soft variants)
- **Feedback:** destructive/danger, info, success, warning (+ soft variants)
- **UI:** border, input, ring
- **Charts:** chart-1 … chart-5
- **Sidebar:** sidebar-* tokens for admin layouts

Use Tailwind classes: \`bg-primary\`, \`text-muted-foreground\`, \`border-border\`.

## Spacing

Base unit: \`--spacing: 0.25rem\` (4px). Extended: spacing-84, 88, 108.

Layout: \`Stack\`, \`HStack\`, \`VStack\` with \`gap\`, \`Container\` with max-width.

## Border Radius

| Token | Value |
|-------|-------|
| \`--radius\` | 0.5rem (default) |
| \`--radius-sm\` | radius - 4px |
| \`--radius-md\` | radius - 2px |
| \`--radius-lg\` | radius |
| \`--radius-xl\` | radius + 4px |

Button \`rounded\`: sm, md, full.

## Shadows

\`--shadow-2xs\` through \`--shadow-2xl\` — custom HSL-based shadows per theme.

## Responsive Breakpoints

Standard Tailwind v4 defaults: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px).

Use \`useMediaQuery('(min-width: 768px)')\` for JS breakpoints.

## Dark Mode Strategy

1. **ThemeProvider** — toggles \`.dark\` / \`.light\` on \`<html>\`, persists to localStorage, supports \`system\`.
2. **NextThemeProvider** — wraps \`next-themes\` for Next.js apps.
3. **CSS:** \`@custom-variant dark (&:is(.dark *));\` — dark styles apply inside \`.dark\` ancestor.

\`\`\`tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider } from '@paalstack/react-ui';

<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>
\`\`\`

## Theme Provider Usage

\`ThemeProvider\` includes \`ToastProvider\`. Access via \`useTheme()\`: \`theme\`, \`setTheme\`, \`toggleTheme\`, \`isDark\`.

## Layout Patterns

| Pattern | Components |
|---------|------------|
| Page shell | Container, Box, Flex, Stack |
| Sidebar layout | Box + Flex + sidebar tokens |
| Form layout | Field, Stack, Form |
| Data display | Card, DataTable, SimpleTable |
| Overlay | Dialog, Sheet, Drawer, Popover |
`;
}

function genArchitecture() {
  return `# Architecture

## Package Dependency Graph

\`\`\`mermaid
graph TD
  UI["@paalstack/react-ui"]
  COMP["@paalstack/react-components"]
  LAY["@paalstack/react-layouts"]
  PROV["@paalstack/react-providers"]
  SHARED["@paalstack/react-shared"]
  HOOKS["@paalstack/react-hooks"]
  ICONS["@paalstack/react-icons"]

  UI --> COMP
  UI --> LAY
  UI --> PROV
  UI --> SHARED
  COMP --> SHARED
  COMP --> LAY
  LAY --> SHARED
  PROV --> SHARED
  HOOKS -.optional.-> COMP
  ICONS -.peer usage.-> COMP
\`\`\`

## Component Relationships

- **Layouts as foundation:** \`Box\` wraps most interactive components (Button, Badge).
- **Form stack:** Form → FormField → Field → Input/Select/Checkbox + Label + ErrorMessage.
- **Overlay stack:** Dialog/AlertDialog/Sheet/Drawer share portal, focus trap, scroll lock patterns.
- **Data stack:** Table primitives → DataTable (TanStack) / SimpleTable (lightweight).
- **Menu stack:** DropdownMenu, ContextMenu, Menubar, NavigationMenu share Base UI menu primitives.

## Shared Utilities

| Layer | Location | Used By |
|-------|----------|---------|
| cn, forwardRef, Slot | shared/utils | All components |
| tailwindBoxVariants | shared/constants | Box, layouts |
| createContext | shared/utils | Providers, some components |
| Format/HTTP | shared/lib | Apps, data hooks |

## Provider Architecture

\`\`\`
ThemeProvider
├── ThemeContextProvider (theme state)
└── ToastProvider (sonner)
    └── children

NextThemeProvider → next-themes + ToastProvider
FormatIntlProvider → ICU message formatting context
\`\`\`

## Context Architecture

| Context | Hook | Package |
|---------|------|---------|
| Theme | useTheme | providers |
| Toast | useToast | providers |
| FormatIntl | useFormatIntl | providers |
| Direction | useDirection | components/Direction |
| Form | useFormContext | components/Form (react-hook-form) |

## Theme Architecture

CSS variables in \`:root\` / \`.dark\` → Tailwind \`@theme\` maps to \`--color-*\` → components use semantic utilities (\`bg-primary\`, not raw hex).

Build pipeline: \`theme.css\` + \`base.css\` → PostCSS/Tailwind → \`dist/index.css\`.
`;
}

function genDuplicateAnalysis() {
  return `# Duplicate Analysis

## Overlapping Component Pairs

| Area | Variants | Recommendation |
|------|----------|----------------|
| Checkbox | \`Checkbox\` (Base UI) vs \`NativeCheckbox\` (HTML) | Use Base UI for a11y-rich apps; Native for minimal/custom behavior |
| Radio | \`RadioGroup\` vs \`NativeRadioGroup\` | Same as above |
| Select | \`Select\` (Base UI) vs \`NativeSelect\` (HTML) | Native for mobile/simple; Select for custom styling/search |
| Table | \`Table\` vs \`SimpleTable\` vs \`DataTable\` | Primitives → SimpleTable → DataTable by complexity |
| Overlay | \`Dialog\`, \`Sheet\`, \`Drawer\`, \`AlertDialog\` | Intentional variants — not duplicates |
| Toggle | \`Switch\` vs \`Toggle\` vs \`ToggleGroup\` | Switch=on/off; Toggle=pressed state; Group=toolbar |
| Button | \`Button\` vs \`IconButton\` | IconButton is specialized — keep both |

## Hook Overlap

| Hooks | Overlap | Recommendation |
|-------|---------|----------------|
| useDebouncedState / useDebouncedValue | Both debounce | State vs prop mirroring — use appropriately |
| useSize / useElementSize / useResizeObserver | Element dimensions | useResizeObserver for raw observer; useElementSize for convenience |
| useToggle / useDisclosure | Boolean open state | useDisclosure adds ARIA helpers |
| useHotkeys / useShortcut | Keyboard shortcuts | useHotkeys for multiple; useShortcut for single |

## Utility Overlap

- \`debounce\` (shared) vs \`useDebouncedValue\` (hooks) — prefer hook in components.
- \`cn\` vs manual clsx — always use \`cn\`.

## Unused / Internal

- \`patchConsoleError\` — test/dev utility only.
- \`disableStorybookArgTypes\` — Storybook only.
- \`packages/config\` — dev tooling, not runtime.

## Refactoring Recommendations

1. **Document Native vs Base UI decision tree** in Storybook (done in this KB).
2. **Consolidate size measurement hooks** — document canonical choice (useElementSize).
3. **Export AlertDialog types** — ensure Props types are exported from barrel for TS consumers.
4. **Consider sub-path exports** for \`@paalstack/react-components\` to reduce bundle size (future).
5. **Icons:** always sub-path import — never root barrel in production apps.
`;
}

function genAISkill() {
  return `# AI Skill — PaalStack React UI

Rules for AI agents working in codebases that consume or extend PaalStack React UI.

## Mandatory Search Before Create

1. **Components** — ALWAYS search \`@paalstack/react-ui\` / \`@paalstack/react-components\` before creating any UI component.
2. **Hooks** — ALWAYS search \`@paalstack/react-hooks\` before writing custom hooks for state, DOM, storage, or browser APIs.
3. **Icons** — ALWAYS search \`@paalstack/react-icons/{lib}\` before importing lucide-react, heroicons, or react-icons directly.

## Never Duplicate

- Do NOT recreate Button, Input, Dialog, Table, Form, Select, Checkbox, etc.
- Do NOT write new \`useMediaQuery\`, \`useLocalStorage\`, \`useDisclosure\` if hooks package covers the need.
- Do NOT install standalone icon packages when PaalStack sub-path exists.

## Import Conventions

\`\`\`tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Button, Box, Form, Field, Input } from '@paalstack/react-ui';
import { useDisclosure } from '@paalstack/react-hooks';
import { LuSettings } from '@paalstack/react-icons/lu';
\`\`\`

## Component Selection Guide

| Need | Use |
|------|-----|
| Primary action | Button |
| Icon-only action | IconButton |
| Text input | Input + Field + Label |
| Searchable dropdown | Combobox or Select |
| Multi select | MultiSelect |
| Modal confirm | AlertDialog |
| Modal form | Dialog |
| Mobile panel | Drawer or Sheet |
| Data grid | DataTable |
| Simple list table | SimpleTable |
| Date | DatePicker / DateRangePicker |
| Toast | useToast (via ThemeProvider) |

## Styling Rules

- Use semantic tokens: \`bg-primary\`, \`text-muted-foreground\` — not arbitrary hex.
- Extend with \`className\` + \`cn()\`.
- Support dark mode via ThemeProvider — test both themes.

## Form Rules

- Use \`Form\` + \`react-hook-form\` + \`zod\` + \`zodResolver\`.
- Wrap inputs in \`Field\` for labels/errors.

## Accessibility Rules

- Prefer Base UI components over raw HTML for interactive widgets.
- Pair inputs with \`Label\`.
- Use \`useDisclosure\` ARIA helpers for custom expand/collapse.

## Documentation References

- [COMPONENT_CATALOG.md](./COMPONENT_CATALOG.md)
- [HOOKS_CATALOG.md](./HOOKS_CATALOG.md)
- [EXPORT_INVENTORY.md](./EXPORT_INVENTORY.md)
- [AI_QUICK_REFERENCE.md](./AI_QUICK_REFERENCE.md)
`;
}

function genApplicationGuide() {
  return `# Application Guide

Build common screens using ONLY PaalStack components.

## Setup (every app)

\`\`\`tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Box, Container, Stack } from '@paalstack/react-ui';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
}
\`\`\`

---

## Login Page

**Components:** Container, Card, Heading, Text, Form, Field, Input, Button, Checkbox, Separator

\`\`\`tsx
import { Card, Form, Field, Input, Button, Checkbox, Label, Stack, Heading } from '@paalstack/react-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({ email: z.string().email(), password: z.string().min(8), remember: z.boolean() });

export function LoginPage() {
  const form = useForm({ resolver: zodResolver(schema) });
  return (
    <Container className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md p-6">
        <Heading size="lg">Sign in</Heading>
        <Form form={form} onSubmit={form.handleSubmit(console.log)}>
          <Stack gap={4}>
            <Field name="email" label="Email"><Input type="email" /></Field>
            <Field name="password" label="Password"><Input type="password" /></Field>
            <Label><Checkbox {...form.register('remember')} /> Remember me</Label>
            <Button type="submit" variant="solid" color="primary" className="w-full">Sign in</Button>
          </Stack>
        </Form>
      </Card>
    </Container>
  );
}
\`\`\`

---

## Registration Page

Add: \`DatePicker\` (DOB), \`InputOTP\` (verification), \`Progress\` (steps).

Multi-field validation with Zod \`.refine()\` for password match.

---

## Dashboard

**Components:** Grid, Card, Chart, Heading, Badge, Avatar, Tabs, DataTable (summary)

Layout: sidebar (Box + \`bg-sidebar\`) + main Container + responsive Grid of Card stats + Chart area.

---

## CRUD Table

**Components:** DataTable, Button, IconButton, Dialog, Form, Input, Select, Pagination, DropdownMenu, useToast

Pattern: DataTable with row actions column → Dialog for create/edit form → \`useToast\` for feedback.

---

## Settings Page

**Components:** Tabs, Switch, Select, Field, Input, Separator, Button, Card

Group settings in Tabs: Profile, Notifications, Security. Use Switch for toggles, Select for enums.

---

## Profile Page

**Components:** Avatar, Card, Field, Input, Textarea, FileUpload, Button, Badge

Avatar with FileUpload for image. Form sections in Stack.

---

## Admin Panel

**Components:** NavigationMenu or custom sidebar, DataTable, Breadcrumb, DropdownMenu, AlertDialog, Badge

Use sidebar tokens (\`bg-sidebar\`, \`text-sidebar-foreground\`). AlertDialog for destructive actions.

---

## Multi-Step Form

**Components:** Form, Progress or custom step indicator, Card, Button, ButtonGroup

Use \`useState\` step index or \`useForm\` with partial schema per step. \`Button variant="outline"\` for Back, primary for Next/Submit.

---

## Data Management Screen

**Components:** DataTable, Combobox/MultiSelect (filters), DateRangePicker, Pagination, Export Button

TanStack Table features: sorting, column filters, row selection, bulk actions via DropdownMenu.
`;
}

function genQuickReference() {
  return `# AI Quick Reference

## Most Used Components

Button, Input, Field, Label, Form, Card, Dialog, Select, Checkbox, DataTable, Tabs, Toast (via useToast), Avatar, Badge, DropdownMenu, Popover, Sheet, Skeleton, Spinner

## Most Used Hooks

useDisclosure, useLocalStorage, useMediaQuery, useDebouncedValue, useToggle, useControllable, useId, useCallbackRef, useFocusTrap, useScrollLock, useToast, useTheme

## Most Used Icons (Lucide sub-path)

LuSettings, LuUser, LuSearch, LuPlus, LuTrash2, LuEdit, LuChevronDown, LuMenu, LuX, LuCheck

\`\`\`tsx
import { LuSettings } from '@paalstack/react-icons/lu';
\`\`\`

## Most Used Utilities

\`cn\`, \`forwardRef\`, \`tailwindBoxVariants\`, \`OptionType\`, \`AllColorVariant\`

## Common Import Patterns

\`\`\`tsx
// Full UI
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Button, Box, Form, Field, Input, DataTable } from '@paalstack/react-ui';

// Hooks only
import { useDisclosure, useLocalStorage } from '@paalstack/react-hooks';

// Icons (tree-shaken)
import { FiPlus } from '@paalstack/react-icons/fi';
import { LuSettings } from '@paalstack/react-icons/lu';

// Shared utils
import { cn } from '@paalstack/react-ui';
\`\`\`

## CSS Entry Points

| Import | Use |
|--------|-----|
| \`@paalstack/react-ui/styles.css\` | Full styles |
| \`@paalstack/react-ui/theme.css\` | Tokens only |
| \`@paalstack/react-ui/styles-scoped.css\` | Scoped/prefixed build |
`;
}

function genCursorRule() {
  return `---
description: PaalStack React UI development rules for components, hooks, icons, and styling
globs:
  - "**/*.tsx"
  - "**/*.ts"
alwaysApply: false
---

# PaalStack React UI Rules

## Before Creating Anything

1. Search \`@paalstack/react-ui\` for existing components before creating UI.
2. Search \`@paalstack/react-hooks\` before writing hooks for DOM, storage, media queries, or disclosure patterns.
3. Search \`@paalstack/react-icons/{lib}\` before adding third-party icon packages.

## Imports

\`\`\`tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Button, Box, Form, Field, Input } from '@paalstack/react-ui';
import { useDisclosure } from '@paalstack/react-hooks';
import { LuSettings } from '@paalstack/react-icons/lu';
\`\`\`

## Styling

- Use semantic design tokens: \`bg-primary\`, \`text-muted-foreground\`, \`border-border\`.
- Extend components with \`className\`; merge via \`cn()\`.
- Wrap app in \`ThemeProvider\` for dark mode.

## Forms

- Use \`Form\` + \`react-hook-form\` + \`zod\` + \`Field\` + \`Label\`.
- Display errors with \`ErrorMessage\` or Field error slot.

## Components vs Native Variants

- Prefer \`Checkbox\`, \`RadioGroup\`, \`Select\` (Base UI) for accessibility.
- Use \`NativeCheckbox\`, \`NativeRadio\`, \`NativeSelect\` only when explicitly needed.

## Overlays

- Confirm destructive actions: \`AlertDialog\`
- Forms/detail: \`Dialog\` or \`Sheet\`
- Mobile: \`Drawer\`

## Do Not

- Duplicate Button, Input, Dialog, Table, or common hooks.
- Import entire \`@paalstack/react-icons\` barrel in app code.
- Use raw hex colors when semantic tokens exist.

## Docs

See \`docs/\` in the monorepo: COMPONENT_CATALOG.md, HOOKS_CATALOG.md, AI_SKILL.md, AI_QUICK_REFERENCE.md.
`;
}

// Write all files
ensureDir(DOCS);
ensureDir(RULES);

const files = {
  'REPOSITORY_OVERVIEW.md': genRepositoryOverview(),
  'EXPORT_INVENTORY.md': genExportInventory(),
  'COMPONENT_CATALOG.md': genComponentCatalog(),
  'HOOKS_CATALOG.md': genHooksCatalog(),
  'ICONS_CATALOG.md': genIconsCatalog(),
  'UTILITIES_CATALOG.md': genUtilitiesCatalog(),
  'TYPES_CATALOG.md': genTypesCatalog(),
  'DESIGN_SYSTEM.md': genDesignSystem(),
  'ARCHITECTURE.md': genArchitecture(),
  'DUPLICATE_ANALYSIS.md': genDuplicateAnalysis(),
  'AI_SKILL.md': genAISkill(),
  'APPLICATION_GUIDE.md': genApplicationGuide(),
  'AI_QUICK_REFERENCE.md': genQuickReference(),
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(DOCS, name), content);
  console.log(`Wrote docs/${name} (${content.length} chars)`);
}

fs.writeFileSync(path.join(RULES, 'paalstack-ui.mdc'), genCursorRule());
console.log('Wrote .cursor/rules/paalstack-ui.mdc');
