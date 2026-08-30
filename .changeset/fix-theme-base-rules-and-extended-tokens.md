---
'@paalstack/react-ui': patch
---

Make `theme.css` truly self-contained for consumer use.

Three follow-up fixes on top of the earlier `fix-theme-self-contained` and
`fix-data-starting-ending-variants` changesets:

**1. Move two component-level rules from `base.css` to `theme.css`.**
The `button:not(:disabled), [role='button']:not(:disabled) { cursor: pointer }`
and the `:-webkit-autofill` input/textarea/select background fix were both
in `base.css`. Consumers who imported only `theme.css` (the documented
standalone import path) never got these rules. Now they're in `theme.css` so
no second-file import is required. The `@apply` was replaced with raw CSS
to keep `theme.css` free of `@tailwindcss` PostCSS-plugin assumptions that
the standalone import path can't satisfy.

**2. Add self-contained defaults for `--info`, `--warning`, `--success`,
`--danger`, and their `*-foreground` and `*-soft` variants.** The library
already mapped these to `--color-info`, `--color-warning`, etc. in its
`@theme` block, but the actual `--info: oklch(...)` values lived in
`base.css` (or weren't defined at all). A consumer importing only
`theme.css` got `var(--info)` resolving to nothing. Now `theme.css` ships
its own `:root` and `.dark` defaults using OKLCH values that match
Tailwind's `*-500` (light) and `*-400/900` (dark) palette. Consumers can
override per-project by redeclaring the same variables in their own
tokens.css (last `:root` wins, same as the rest of the cascade).

**3. Document the new `--color-info/--warning/--success/--danger`
convention in the header comment** so consumers know the class names
(`bg-info`, `text-warning`, `border-success`, `ring-danger`, plus the
`-soft` variants) are stable.
