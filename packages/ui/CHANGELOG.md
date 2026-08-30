# @paalstack/react-ui

## 1.4.0

### Minor Changes

- [`852d6e9`](https://github.com/paalamugan/paalstack-react-ui/commit/852d6e9aa3c978a5922dfd4dcd2638973add7055) Thanks [@paalamugan](https://github.com/paalamugan)! - Add `./all.css` as a new export — the complete library CSS setup
  consolidated into a single drop-in import.

  `all.css` is equivalent to importing the four library files in order:

  ```css
  @import '@paalstack/react-ui/base.css'; /* tokens + house rules */
  @import '@paalstack/react-ui/theme.css'; /* @custom-variant dark + data-state variants + @theme inline mapping */
  @import '@paalstack/react-ui/utilities.css'; /* custom Tailwind utilities */
  @import '@paalstack/react-ui/toast.css'; /* sonner toast rules */
  ```

  A new consumer can now get the complete setup with a single import:

  ```css
  /* globals.css */
  @import '@paalstack/react-ui/all.css';
  @import './brand.css'; /* per-project overrides */
  @import './fonts.css'; /* brand font wire-up */
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

- [`852d6e9`](https://github.com/paalamugan/paalstack-react-ui/commit/852d6e9aa3c978a5922dfd4dcd2638973add7055) Thanks [@paalamugan](https://github.com/paalamugan)! - Ship `./base.css` as a public export and make it the canonical import
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
  @import '@paalstack/react-ui/base.css'; /* shadcn defaults */
  @import './brand.css'; /* per-project overrides */
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

### Patch Changes

- [`852d6e9`](https://github.com/paalamugan/paalstack-react-ui/commit/852d6e9aa3c978a5922dfd4dcd2638973add7055) Thanks [@paalamugan](https://github.com/paalamugan)! - Add missing `data-starting-style` and `data-ending-style` custom variants
  to `theme.css`.

  Base UI's animation lifecycle sets `data-starting-style` on popups
  during their enter transition and `data-ending-style` during the exit
  transition. The library's Sheet, Accordion, and NavigationMenu
  components use Tailwind variants like `data-starting-style:opacity-0`
  and `data-ending-style:opacity-0` to drive their open/close animations
  and directional slide transitions.

  Previously, these custom variants were NOT defined in the library's
  `theme.css`. Tailwind v4 silently dropped the classes at build time,
  leaving those components un-animated. The components still worked
  (correct positioning, click behavior, focus management) — they just
  didn't fade or slide when opening/closing.

  Now `data-starting-style` and `data-ending-style` are registered
  alongside the existing `data-open` / `data-closed` variants. Also
  added `data-side` for Sheet's directional variants (this one turned
  out to be redundant with Tailwind's built-in `data-attr` syntax, but
  is harmless).

  This is a follow-up to the earlier `fix-theme-self-contained.md`
  changeset (font + shadow indirection fixes).

- [`852d6e9`](https://github.com/paalamugan/paalstack-react-ui/commit/852d6e9aa3c978a5922dfd4dcd2638973add7055) Thanks [@paalamugan](https://github.com/paalamugan)! - Make `theme.css` truly self-contained for consumer use.

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

- [`852d6e9`](https://github.com/paalamugan/paalstack-react-ui/commit/852d6e9aa3c978a5922dfd4dcd2638973add7055) Thanks [@paalamugan](https://github.com/paalamugan)! - Fix `theme.css` font + shadow definitions to be self-contained.

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

- [`e28adde`](https://github.com/paalamugan/paalstack-react-ui/commit/e28addeba514a4de9395430883dc0fb5e606ff9e) Thanks [@paalamugan](https://github.com/paalamugan)! - Sync the bundled agent skill across all three per-package copies.

  The monorepo source (`skills/paalstack-react-ui/`) is the single source of
  truth for the skill that ships inside every npm tarball. The three
  per-package copies (`packages/{ui,hooks,icons}/skills/paalstack-react-ui/`)
  had drifted out of sync with the source — components.mdx claimed "61+
  components built on Radix UI primitives" when the library actually
  ships 76 components on Base UI; hooks counts were "50+" when the
  real number is 73; the CSS exports table was missing the 5 new subpaths
  added in this release (`base.css`, `utilities.css`, `toast.css`,
  `fonts.css`, `all.css`); the batched-build section didn't mention
  `packages/ui/build-batched.sh`.

  This changeset ships:
  - All three per-package skill copies are now in sync with the source
    (SKILL.md + references/component-inventory.md for hooks/icons; those
    plus README.md + scripts/build-batched.sh for ui).
  - The skill documents the refined shadow scale, all 76 components with
    import + props-API examples, all 73 hooks with usage patterns, and
    all 31 icon packs.
  - New repo-level script `scripts/sync-skills.mjs` + `pnpm skills:sync`
    to copy the source to all per-package targets, and `pnpm lint:skills`
    to verify drift-free (wired into CI in `.github/workflows/ci.yml`).

  Consumers who upgrade `@paalstack/react-ui`, `@paalstack/react-hooks`, or
  `@paalstack/react-icons` and run `npx paalstack-skill --force` will see
  the corrected content.

## 1.3.1

### Patch Changes

- [`0a73a94`](https://github.com/paalamugan/paalstack-react-ui/commit/0a73a94e0f94aa2df7ececc22233087cb5c705bb) Thanks [@paalamugan](https://github.com/paalamugan)! - Fix `ThemeProvider` to be SSR-safe.

  The previous implementation read `localStorage` inside a `useState` initializer, which runs during the server render pass. In Next 16 (and any other SSR setup), `localStorage` is undefined on the server and this crashed with `Cannot read properties of undefined (reading 'getItem')`. Consumers had to wrap the provider in a mount gate.

  The new implementation initializes `theme` to `defaultTheme` (consistent on server and first client render, no hydration mismatch) and reads the persisted value from `localStorage` inside a `useEffect` on client mount. localStorage access is also wrapped in try/catch so private-browsing / sandboxed iframes / strict cookie policies no longer break the provider — in those cases the in-memory theme still works, persistence is best-effort.

  This is the long-term fix tracked in shadhil-crm's `next.config.ts`. With this in place, web can opt back into per-page static rendering.

## 1.3.0

### Minor Changes

- [`5910fef`](https://github.com/paalamugan/paalstack-react-ui/commit/5910fef5e1dce6ffae93598831b9e84b43bc4642) Thanks [@paalamugan](https://github.com/paalamugan)! - Add Sidebar plus 6 new shadcn components: Attachment, Bubble, Marker, Message, MessageScroller, and Questionnaire. This brings paalstack-react-ui to full coverage of the current shadcn/ui component list.
  - **Sidebar**: complete port of shadcn's sidebar (25 sub-components incl. SidebarProvider, SidebarMenuButton, SidebarRail, useSidebar) with mobile Sheet behavior, ⌘B/Ctrl+B toggle, and cookie persistence.
  - **Attachment**: file attachment cards with idle/uploading/processing/error/done states, horizontal/vertical orientations, and an AttachmentGroup scroller.
  - **Bubble / Message**: chat primitives — bubbles in 7 variants with reaction slot, and message layout with avatar/header/footer alignment.
  - **MessageScroller**: auto-scrolling chat viewport (Provider/Viewport/Content/Item/Button + hooks) built on @shadcn/react primitives.
  - **Questionnaire**: multi-step questionnaires with single/multiple choice, freeform input, skip support, keyboard shortcuts, and progress display.
  - **ui styles**: added scroll-fade, shimmer, scrollbar-none/thin/gutter-stable, and wrap-break-word utilities to the global stylesheet so all new components render correctly out of the box.

## 1.2.3

### Patch Changes

- [`0c00a54`](https://github.com/paalamugan/paalstack-react-ui/commit/0c00a5427fa873074ef37a9ab7ae0b4c29d9af10) - fix: update DataTablePagination to handle page size and current page more effectively

## 1.2.2

### Patch Changes

- [`a119ee6`](https://github.com/paalamugan/paalstack-react-ui/commit/a119ee6f259fc231160fc26d875619685a1831df) Thanks [@paalamugan](https://github.com/paalamugan)! - feat: enhance IconButton component with new props and stories
  - Added new props to the IconButton component, including `variant` and `color`, to support various visual styles and color options.
  - Updated the IconButton stories to demonstrate the new props, including examples for each variant and color combination.
  - Removed deprecated `outline` prop documentation and adjusted the component's logic to accommodate the new structure.

## 1.2.1

### Patch Changes

- [`e8771cd`](https://github.com/paalamugan/paalstack-react-ui/commit/e8771cd654ba04ae47a4ee7b4bc5e4bfd67441a2) Thanks [@paalamugan](https://github.com/paalamugan)! - fix: reorder animation classes for consistency across components
  - Adjusted the order of animation classes in multiple components including Accordion, AlertDialog, Combobox, ContextMenu, Dialog, Drawer, DropdownMenu, HoverCard, NavigationMenu, Popover, Select, and Tooltip for improved consistency in behavior.
  - Ensured that the `data-open` classes precede the `data-closed` classes to maintain a uniform animation experience.

- [`be6e165`](https://github.com/paalamugan/paalstack-react-ui/commit/be6e1656f6184eac4de2ea5696f37134db9569a1) Thanks [@paalamugan](https://github.com/paalamugan)! - minor update of styles

## 1.2.0

### Minor Changes

- [`89f4c36`](https://github.com/paalamugan/paalstack-react-ui/commit/89f4c36fc7032aa9116ca374a0c0f08fdb841e89) Thanks [@paalamugan](https://github.com/paalamugan)! - minor update

## 1.1.2

### Patch Changes

- [`fa243c4`](https://github.com/paalamugan/paalstack-react-ui/commit/fa243c4d4ef4978acf4f121231e329352980aaf0) Thanks [@paalamugan](https://github.com/paalamugan)! - feat: enhance Switch component with size and color variants
  - Added new size options: 'lg' and 'xl' to the Switch component.
  - Introduced color variants for the Switch component, allowing for multiple color options.
  - Updated stories to demonstrate new size and color functionalities.

## 1.1.1

### Patch Changes

- [`9e6b2b2`](https://github.com/paalamugan/paalstack-react-ui/commit/9e6b2b2c347c4c131b025c96314203f152177d64) Thanks [@paalamugan](https://github.com/paalamugan)! - docs: update README notes to include direct npm links for @paalstack/react-ui

## 1.1.0

### Minor Changes

- [`6515217`](https://github.com/paalamugan/paalstack-react-ui/commit/651521767e96a7f7afccc109c92bb681dc48c5c6) Thanks [@paalamugan](https://github.com/paalamugan)! - chore: add keywords and publish configuration to package.json files across multiple packages

## 1.0.1

### Patch Changes

- [`d4245ee`](https://github.com/paalamugan/paalstack-react-ui/commit/d4245eeadd1e9ad3cda89686d1db63e83871caf3) Thanks [@paalamugan](https://github.com/paalamugan)! - chore: update author names in package.json files, enhance descriptions in several packages, and add README files for new packages
