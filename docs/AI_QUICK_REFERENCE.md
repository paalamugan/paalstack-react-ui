# AI Quick Reference

## Most Used Components

Button, Input, Field, Label, Form, Card, Dialog, Select, Checkbox, DataTable, Tabs, Toast (via useToast), Avatar, Badge, DropdownMenu, Popover, Sheet, Skeleton, Spinner

## Most Used Hooks

useDisclosure, useLocalStorage, useMediaQuery, useDebouncedValue, useToggle, useControllable, useId, useCallbackRef, useFocusTrap, useScrollLock, useToast, useTheme

## Most Used Icons (Lucide sub-path)

LuSettings, LuUser, LuSearch, LuPlus, LuTrash2, LuEdit, LuChevronDown, LuMenu, LuX, LuCheck

```tsx
import { LuSettings } from '@paalstack/react-icons/lu';
```

## Most Used Utilities

`cn`, `forwardRef`, `tailwindBoxVariants`, `OptionType`, `AllColorVariant`

## Common Import Patterns

```tsx
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
```

## CSS Entry Points

| Import | Use |
|--------|-----|
| `@paalstack/react-ui/styles.css` | Full styles |
| `@paalstack/react-ui/theme.css` | Tokens only |
| `@paalstack/react-ui/styles-scoped.css` | Scoped/prefixed build |
