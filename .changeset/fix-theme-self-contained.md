---
'@paalstack/react-ui': patch
---

Fix `theme.css` font + shadow definitions to be self-contained.

The previous `@theme` block defined `--font-sans: var(--custom-font-sans)`,
`--font-mono: var(--custom-font-mono)`, `--font-serif: var(--custom-font-serif)`,
and the shadow scale via `--custom-shadow-*`. None of those `--custom-*`
variables were defined in `theme.css` itself — they lived in the
sibling `base.css` file. This meant consumers who imported `theme.css`
without `base.css` (the documented standalone import path) ended up
with `var(--custom-font-sans)` resolving to nothing, and Tailwind's
`font-sans` utility silently falling back to defaults.

Now `theme.css` is self-contained:

- `--font-sans` forwards to `var(--font-ibm-plex-sans, ui-sans-serif, system-ui, sans-serif)`.
  This honors the `next/font` wire-up convention (the shadhil-crm default)
  and falls back to a system stack if the consumer doesn't define
  `--font-ibm-plex-sans`. The library no longer assumes Inter is the
  default — that's a project choice.
- `--font-mono` and `--font-serif` get sensible default stacks instead
  of dangling `var()` references.
- The shadow scale gets Tailwind v4's default values inline instead
  of forwarding to `--custom-shadow-*`. Consumers can still override
  any shadow token in their own tokens.css.

The `--primary-soft`, `--secondary-soft`, etc. tokens that the library
adds beyond the shadcn contract still require the consumer to provide
values. Those are library extensions (shadcn doesn't define them) and
are not affected by this change. Consumers using `theme.css` standalone
should provide values for any `*-soft` token they reference in their
own components.
