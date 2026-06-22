# AI Skill — PaalStack React UI

Rules for AI agents working in codebases that consume or extend PaalStack React UI.

## Mandatory Search Before Create

1. **Components** — ALWAYS search `@paalstack/react-ui` / `@paalstack/react-components` before creating any UI component.
2. **Hooks** — ALWAYS search `@paalstack/react-hooks` before writing custom hooks for state, DOM, storage, or browser APIs.
3. **Icons** — ALWAYS search `@paalstack/react-icons/{lib}` before importing lucide-react, heroicons, or react-icons directly.

## Never Duplicate

- Do NOT recreate Button, Input, Dialog, Table, Form, Select, Checkbox, etc.
- Do NOT write new `useMediaQuery`, `useLocalStorage`, `useDisclosure` if hooks package covers the need.
- Do NOT install standalone icon packages when PaalStack sub-path exists.

## Import Conventions

```tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider, Button, Box, Form, Field, Input } from '@paalstack/react-ui';
import { useDisclosure } from '@paalstack/react-hooks';
import { LuSettings } from '@paalstack/react-icons/lu';
```

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

- Use semantic tokens: `bg-primary`, `text-muted-foreground` — not arbitrary hex.
- Extend with `className` + `cn()`.
- Support dark mode via ThemeProvider — test both themes.

## Form Rules

- Use `Form` + `react-hook-form` + `zod` + `zodResolver`.
- Wrap inputs in `Field` for labels/errors.

## Accessibility Rules

- Prefer Base UI components over raw HTML for interactive widgets.
- Pair inputs with `Label`.
- Use `useDisclosure` ARIA helpers for custom expand/collapse.

## Documentation References

- [COMPONENT_CATALOG.md](./COMPONENT_CATALOG.md)
- [HOOKS_CATALOG.md](./HOOKS_CATALOG.md)
- [EXPORT_INVENTORY.md](./EXPORT_INVENTORY.md)
- [AI_QUICK_REFERENCE.md](./AI_QUICK_REFERENCE.md)
