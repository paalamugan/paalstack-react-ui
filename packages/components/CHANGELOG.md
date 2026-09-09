# @paalstack/react-components

## 1.5.2

### Patch Changes

- [`16beda1`](https://github.com/paalamugan/paalstack-react-ui/commit/16beda19a4c9b0832b5c59793f64480f7cc5533f) Thanks [@paalamugan](https://github.com/paalamugan)! - feat(components): add DataTable action shortcuts and Dialog element props
  - DataTable: support optional `shortcut` in action items, render icons on the left and shortcut hints on the right
  - Dialog: expose `dialogTitleProps`, `dialogDescriptionProps`, and `dialogTriggerProps` for customization

## 1.5.1

### Patch Changes

- [`3e7a4ea`](https://github.com/paalamugan/paalstack-react-ui/commit/3e7a4eaac1c8cd7b2bc30a97485f560b63b5f6c9) Thanks [@paalamugan](https://github.com/paalamugan)! - feat(components): improve Combobox selectOptionAsValue and Form field layout classes
  - Combobox: resolve option labels/values via `selectOptionAsValue` props when options are objects, replacing the inferred `isOptionValue` behavior
  - Form: add `formContainerClassName` to `CommonFormFieldItem`, apply it to the outer field wrapper and keep `formItemClassName` on the inner content; only render field description/error wrapper for non-raw field types

## 1.5.0

### Minor Changes

- [`99062d0`](https://github.com/paalamugan/paalstack-react-ui/commit/99062d09e5aae2bd6257c24a69018a98a95590a6) Thanks [@paalamugan](https://github.com/paalamugan)! - Add `DataTableColumnHeaderToggle` — a one-click sortable column header (no dropdown). Clicking the header button directly toggles the sort direction; the icon updates on every click (CaretSort → ArrowUp → ArrowDown). Ideal for server-side sorting where the sort state is forwarded to the API via `onSortingChange`.

## 1.4.1

### Patch Changes

- fix(MultiSelect): show selected badges when collapsed

  The `maxSelectedBadges` collapse mapped selected values to labels and then
  looked them up again by label, so the visible badges rendered empty (only
  the "+N selected" overflow badge showed). Keep the values and look up the
  label only for display, so the first N badges render alongside the
  overflow badge.

## 1.4.0

### Minor Changes

- feat(MultiSelect): collapse selected badges beyond a threshold

  Add a `maxSelectedBadges` prop (default 3). When more than that many
  options are selected, the trigger renders only the first N badges plus a
  compact "+N selected" summary badge instead of overflowing with every
  selection. Keeps the trigger from sprawling when many options are picked
  (e.g. a status filter with 9+ states selected).

## 1.3.1

### Patch Changes

- [`13d7bc3`](https://github.com/paalamugan/paalstack-react-ui/commit/13d7bc3d6cffcb8b44f5dfa7802bce4a923ed42a) Thanks [@paalamugan](https://github.com/paalamugan)! - fix(components): make CommandItem check icon opt-in and tidy DataTable/Typography styles
  - CommandItem: add `showCheckIcon` prop (default false) and only render the check icon when enabled
  - DataTable: suppress hover background on the empty-results row
  - DataTableFacetedFilter: replace arbitrary `w-[200px]` with `w-50`
  - DataTableRowActions: add configurable `ariaLabel` for the trigger button and screen-reader text; replace `w-[160px]` with `w-40`
  - TypographyP: remove `not-first:mt-6` top margin

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

## 1.2.0

### Minor Changes

- [`67df612`](https://github.com/paalamugan/paalstack-react-ui/commit/67df612e1b60258117229bbe4c7c9c65103b551d) Thanks [@paalamugan](https://github.com/paalamugan)! - minor update

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
