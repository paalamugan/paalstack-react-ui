---
'@paalstack/react-ui': minor
---

Ship `./base.css` as a public export and make it the canonical import
for the shadcn-default token contract.

The library previously exposed only `styles.css` (a 13k-line compiled
blob that bundles Inter font faces, hundreds of `--color-red-50..900`
utilities, and the complete shadcn default palette) and `theme.css`
(the `@theme` block that maps `--X` to `--color-X`).

This release adds `./base.css` as a third option — a clean, **shadcn-only
defaults file** that:

- Defines every `--X` variable in both `:root` (light) and `.dark`
  with shadcn's verbatim HSL values for the standard tokens.
- Adds the extended semantic tokens (`--info`, `--warning`, `--success`,
  `--danger` + their `-foreground` and `-soft` variants) in OKLCH.
  These match Tailwind's `*-500` (light) and `*-400/900` (dark) palette
  for visual consistency with the rest of the design system.
- Ships the two `@layer base` rules that the library previously kept in
  `theme.css`: the `button:not(:disabled)` cursor-pointer fix and the
  `:-webkit-autofill` input/textarea/select background override. These
  were breaking when consumers imported only `theme.css`.
- No Inter font faces, no `--color-red-50..900` utility values, no
  `--custom-*` indirection — just the tokens the shadcn contract
  requires, in a cascade-friendly format.

**Recommended consumer setup** (the shadcn convention):

```css
/* globals.css */
@import '@paalstack/react-ui/base.css';   /* shadcn defaults */
@import './brand.css';                    /* per-project overrides */
@import 'tailwindcss';

@source '../../node_modules/@paalstack/react-ui';

@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  /* ...the rest of the shadcn theme block */
}
```

The library's `theme.css` and `styles.css` remain exported for
backward compatibility but are no longer the recommended path. Most
consumers should be able to delete the `styles.css` import (which was
adding 13k lines of unused Inter + `--color-red-*` utilities to their
bundle) and switch to `base.css` + their own `@theme inline` block.

**Build changes:**
- `packages/ui/tsup.config.ts` now copies `src/styles/base.css` to
  `dist/base.css` on build (alongside the existing `theme.css` copy).
- `packages/ui/package.json` adds `"./base.css": "./dist/base.css"` to
  the `exports` field.

**Breaking changes:** None. `theme.css` and `styles.css` exports
unchanged; new export is purely additive.
