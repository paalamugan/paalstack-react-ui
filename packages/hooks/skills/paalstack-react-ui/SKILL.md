---
name: paalstack-react-ui
description: "Use @paalstack/react-ui in projects: APIs, setup, build."
version: 0.1.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [PaalStack, React, UI, Component-Library, shadcn, Tailwind]
---

# PaalStack React UI — package knowledge + build procedures

Knowledge for any agent working in a project that consumes `@paalstack/react-ui`
or in the `paalstack-react-ui` monorepo itself. Load this BEFORE writing code
that imports the library, adding components to it, or building/publishing it.

## When to Use

- Working in any project that installs `@paalstack/react-ui` — check imports,
  available components, props API, and setup requirements here first.
- Adding components or stories to the `paalstack-react-ui` monorepo.
- Building or releasing the packages (batched build, changesets).
- Debugging why a component renders unstyled (missing utilities) or why a
  build hangs.
- Don't use for: generic React/Tailwind questions unrelated to this library.

## Files in this skill

- `references/component-inventory.md` — full component list with props-API
  signatures for every component. Consult before writing UI code.
- `scripts/build-batched.sh` — memory-safe batched build (copy of the
  monorepo's canonical script; set `PAALSTACK_REACT_UI_DIR` if running
  outside the monorepo).

## Package map

| Package | npm name | What it is |
|---|---|---|
| packages/ui | `@paalstack/react-ui` | The all-in-one consumer bundle (components + layouts + providers + hooks + icons + styles). **Install this one.** |
| packages/components | `@paalstack/react-components` | Components only (no styles). ui re-exports it. |
| packages/layouts | — | Box, Stack, Text, Heading, Typography primitives |
| packages/providers | — | ThemeProvider, NextThemeProvider, ToastProvider (sonner) |
| packages/shared | — | `cn`, `Slot`, constants, types |
| packages/hooks | — | 50+ hooks (useMediaQuery, useControllable, ...) |
| packages/icons | — | react-icons re-exports (`@/icons/lu` = lucide via react-icons) |

Stack: React 18+, Base UI primitives (`@base-ui/react/*`), Tailwind CSS v4,
class-variance-authority. shadcn/ui parity: every shadcn component has an
equivalent here, plus 20+ extras (ButtonGroup, DatePicker, FileUpload,
MultiSelect, NumberInput, ...).

## Install & setup in a consumer project

```bash
pnpm add @paalstack/react-ui
```

```tsx
// styles (pick ONE):
import '@paalstack/react-ui/styles.css';        // global utilities
// import '@paalstack/react-ui/styles-scoped.css'; // utilities scoped under .app
```

```tsx
import { ThemeProvider, Button, Dialog } from '@paalstack/react-ui';

export default function Root({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>; // includes ToastProvider
}
```

## THE two-API convention (critical)

Every component exposes BOTH:

1. **Props API** (user's strong preference — use by default): one top-level
   component with declarative props.
2. **Composition API**: Root/Trigger/Content-style sub-components for full
   control.

```tsx
// Props API — default choice
<Dialog trigger={<Button>Open</Button>} header={{ title: 'Confirm' }}
        footer={{ primaryAction: <Button>OK</Button> }}>
  Body content
</Dialog>

// Composition API — when you need custom structure
<DialogRoot open={open} onOpenChange={setOpen}>
  <DialogTrigger render={<Button>Open</Button>} />
  <DialogContent>...</DialogContent>
</DialogRoot>
```

Data-driven components take declarative props instead of children:
Accordion/Tabs/Carousel/Combobox/ToggleGroup take `items`; Select/MultiSelect/
CheckboxGroup/RadioGroup take `options`; Menubar takes `menus`;
NavigationMenu takes `items`; Form takes `fields`; ContextMenu/DropdownMenu
take `entries`; Questionnaire takes `questions`; MessageScroller has
`MessageScrollerChat` taking `messages`.

## Component conventions (when editing the library)

- `cn` from `@/shared/lib`; `Slot` from `@/shared/utils`
- Icons: `import { LuX as XIcon } from '@/icons/lu'` (react-icons/lu naming)
- Every element gets `data-slot="..."` AND `data-qa="..."` attributes
- Base UI primitives use the `render` prop (NOT Radix `asChild`)
- JSDoc `@example` blocks for BOTH APIs on every component
- File layout: `src/<Name>/<Name>.tsx` + `index.ts` (+ `<Name>.stories.tsx`)
- Barrel: add `export * from './<Name>';` to packages/components/src/index.ts
  (alphabetical order)

## Build — CRITICAL: never run monolithic pnpm build

`pnpm build` in packages/components (~200 entries + DTS) spikes ~2GB memory
and hangs the machine. Use the batched build:

```bash
cd <repo-root>
bash packages/components/build-batched.sh            # full batched build
bash packages/components/build-batched.sh --resume   # resume interrupted run
# or: pnpm --filter @paalstack/react-components build:batched
```

- 199 entries → 7 batches of 30, one fresh tsup process per batch, then one
  DTS pass. Resumable via stamps in node_modules/.cache/tsup-batches.
- Takes ~25 min total. Run it in the background (terminal background=true);
  never poll in a tight loop.
- Batch logs: /tmp/tsup-batch-N.log; DTS log: /tmp/tsup-dts.log.
- packages/ui builds fine normally (4 source files + CSS) but its DTS pass
  takes ~20 min because it type-checks the whole component graph.

Type-check only (no bundle): `npx tsc --noEmit -p packages/components/tsconfig.json`
(~10 min — background it too).

## Adding a component to the library

1. Fetch the shadcn source:
   `https://ui.shadcn.com/r/styles/new-york-v4/<name>.json` (files[].content).
   New components may exist on the docs site before the registry JSON — check
   both https://ui.shadcn.com/docs/components and the raw GitHub repo
   (apps/v4/registry/bases/radix/ui/<name>.tsx).
2. Port to paalstack conventions (see above). Keep shadcn's visual classes;
   swap Radix→Base UI, lucide→`@/icons/lu`, add data-qa.
3. Export from packages/components/src/index.ts (alphabetical).
4. Verify: tsc --noEmit (background), eslint --fix, prettier --write.
5. Add Storybook stories: `<Name>/<Name>.stories.tsx`,
   `title: 'Components/<Name>'`, `tags: ['autodocs']`, render functions.
6. If it uses custom Tailwind utilities (shimmer, scroll-fade, scrollbar-*),
   add them to packages/ui/src/styles/utilities.css — otherwise they silently
   render broken in consumer projects.
7. If it introduces a new npm dependency, add it to BOTH packages/components/
   package.json AND packages/ui/package.json (ui bundles the components).
8. Add a changeset (minor for new components) covering BOTH packages.

## Releasing

Changesets configured (changelog-github). Merge to main → changesets action
opens a version PR → merge it to publish. `prepublishOnly` runs the batched
build.

## Pitfalls

- Monolithic build hangs — batched script only (see above).
- `tsc --noEmit` is slow (~10 min): background it; avoid tight polling.
- Custom utilities used by components MUST exist in ui's utilities.css or
  consumers get silently broken rendering.
- New runtime deps used by components must be declared in ui/package.json
  too — ui bundles the component graph.
- Storybook stories: `title: 'Components/<Name>'`, `tags: ['autodocs']`,
  import siblings via relative paths, icons via `@/icons/lu`.
- The `Direction` component vs FileUpload's direction type: FileUpload's type
  is `FileUploadDirection` (renamed to avoid a barrel collision with the
  `Direction` component).