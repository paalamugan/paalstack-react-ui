# Design System

PaalStack uses **CSS custom properties** + **Tailwind CSS v4** `@theme` block. Source: `packages/ui/src/styles/`.

## Typography

| Token | Value |
|-------|-------|
| `--font-sans` | Inter, ui-sans-serif, system-ui |
| `--font-serif` | Roboto Serif, ui-serif, serif |
| `--font-mono` | DM Mono, ui-monospace, monospace |

Font sizes via `FONT_SIZE_VARIANTS`: xs, 2xs, 3xs, tiny, sm, base, lg, xl, 2xl–9xl.

Components: `Heading`, `Text`, `Typography`.

## Colors

Semantic tokens (light/dark in `base.css`):

- **Surface:** background, foreground, card, popover, muted, accent
- **Brand:** primary, secondary, tertiary (+ soft variants)
- **Feedback:** destructive/danger, info, success, warning (+ soft variants)
- **UI:** border, input, ring
- **Charts:** chart-1 … chart-5
- **Sidebar:** sidebar-* tokens for admin layouts

Use Tailwind classes: `bg-primary`, `text-muted-foreground`, `border-border`.

## Spacing

Base unit: `--spacing: 0.25rem` (4px). Extended: spacing-84, 88, 108.

Layout: `Stack`, `HStack`, `VStack` with `gap`, `Container` with max-width.

## Border Radius

| Token | Value |
|-------|-------|
| `--radius` | 0.5rem (default) |
| `--radius-sm` | radius - 4px |
| `--radius-md` | radius - 2px |
| `--radius-lg` | radius |
| `--radius-xl` | radius + 4px |

Button `rounded`: sm, md, full.

## Shadows

`--shadow-2xs` through `--shadow-2xl` — custom HSL-based shadows per theme.

## Responsive Breakpoints

Standard Tailwind v4 defaults: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px).

Use `useMediaQuery('(min-width: 768px)')` for JS breakpoints.

## Dark Mode Strategy

1. **ThemeProvider** — toggles `.dark` / `.light` on `<html>`, persists to localStorage, supports `system`.
2. **NextThemeProvider** — wraps `next-themes` for Next.js apps.
3. **CSS:** `@custom-variant dark (&:is(.dark *));` — dark styles apply inside `.dark` ancestor.

```tsx
import '@paalstack/react-ui/styles.css';
import { ThemeProvider } from '@paalstack/react-ui';

<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>
```

## Theme Provider Usage

`ThemeProvider` includes `ToastProvider`. Access via `useTheme()`: `theme`, `setTheme`, `toggleTheme`, `isDark`.

## Layout Patterns

| Pattern | Components |
|---------|------------|
| Page shell | Container, Box, Flex, Stack |
| Sidebar layout | Box + Flex + sidebar tokens |
| Form layout | Field, Stack, Form |
| Data display | Card, DataTable, SimpleTable |
| Overlay | Dialog, Sheet, Drawer, Popover |
