---
'@paalstack/react-ui': minor
---

Add `./all.css` as a new export — the complete library CSS setup
consolidated into a single drop-in import.

`all.css` is equivalent to importing the four library files in order:

```css
@import '@paalstack/react-ui/base.css';       /* tokens + house rules */
@import '@paalstack/react-ui/theme.css';      /* @custom-variant dark + data-state variants + @theme inline mapping */
@import '@paalstack/react-ui/utilities.css'; /* custom Tailwind utilities */
@import '@paalstack/react-ui/toast.css';     /* sonner toast rules */
```

A new consumer can now get the complete setup with a single import:

```css
/* globals.css */
@import '@paalstack/react-ui/all.css';
@import './brand.css';            /* per-project overrides */
@import './fonts.css';            /* brand font wire-up */
@import 'tailwindcss';

@source '../../node_modules/@paalstack/react-ui';

/* (No @custom-variant dark, no @theme inline needed — library owns them) */
```

**What's in `all.css` (vs. just base.css + utilities + toast):**

By including `theme.css` in `all.css`, consumers no longer need to
write the 45-line shadcn theme block (`@theme inline { --color-X:
var(--X) ... }`) in their globals.css. The library's theme.css now
ships:

- `@custom-variant dark (&:is(.dark *))` — dark mode trigger
- The 5 Base UI data-state variants (`data-open`, `data-closed`,
  `data-starting-style`, `data-ending-style`, `data-side`)
- `@theme inline` block — maps semantic tokens to Tailwind utility
  classes (`bg-primary`, `text-foreground`, `border-border`, `ring-ring`,
  plus `bg-info`, `bg-warning`, `bg-success`, `bg-destructive`, etc.)
- `@font-*`, `@radius-*`, `@shadow-*`, `@spacing-*`, `@breakpoint-*`
  design tokens

`@theme inline` (not `@theme`) keeps `bg-primary/50` alpha syntax
working — `var(--primary)` is referenced at runtime so Tailwind can
synthesize alpha via `color-mix()`.

**Migration from a manual `@theme inline` block:**

If your consumer previously declared the shadcn theme block in
`globals.css`, you can DELETE most of it. The library's theme.css
already declares all the standard shadcn mappings. Only keep
consumer-local additions (e.g. project-specific tokens that aren't
part of the shadcn contract).

The `@custom-variant dark` declaration is now owned by the library —
remove the duplicate from your consumer's globals.css.

**Backward compatibility:**

The individual `base.css`, `utilities.css`, `toast.css`, `theme.css`,
`fonts.css`, `styles.css`, and `styles-scoped.css` exports are all
preserved for backward compatibility — `all.css` is purely additive.
Consumers currently importing any combination of those files
individually continue to work unchanged.

**Build changes:**

- `packages/ui/src/styles/all.css` is a new source file that
  `@import`s the four component files (PostCSS resolves the imports
  during the consumer's Tailwind compilation pass).
- `packages/ui/src/styles/theme.css` switches `@theme` → `@theme inline`
  so `bg-primary/50` keeps working in consumers that use alpha syntax.
- `packages/ui/tsup.config.ts` copies `src/styles/all.css` to
  `dist/all.css` on build.
- `packages/ui/package.json` adds `"./all.css": "./dist/all.css"` to
  the `exports` field.

**Breaking changes:** None.