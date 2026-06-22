# Duplicate Analysis

## Overlapping Component Pairs

| Area | Variants | Recommendation |
|------|----------|----------------|
| Checkbox | `Checkbox` (Base UI) vs `NativeCheckbox` (HTML) | Use Base UI for a11y-rich apps; Native for minimal/custom behavior |
| Radio | `RadioGroup` vs `NativeRadioGroup` | Same as above |
| Select | `Select` (Base UI) vs `NativeSelect` (HTML) | Native for mobile/simple; Select for custom styling/search |
| Table | `Table` vs `SimpleTable` vs `DataTable` | Primitives → SimpleTable → DataTable by complexity |
| Overlay | `Dialog`, `Sheet`, `Drawer`, `AlertDialog` | Intentional variants — not duplicates |
| Toggle | `Switch` vs `Toggle` vs `ToggleGroup` | Switch=on/off; Toggle=pressed state; Group=toolbar |
| Button | `Button` vs `IconButton` | IconButton is specialized — keep both |

## Hook Overlap

| Hooks | Overlap | Recommendation |
|-------|---------|----------------|
| useDebouncedState / useDebouncedValue | Both debounce | State vs prop mirroring — use appropriately |
| useSize / useElementSize / useResizeObserver | Element dimensions | useResizeObserver for raw observer; useElementSize for convenience |
| useToggle / useDisclosure | Boolean open state | useDisclosure adds ARIA helpers |
| useHotkeys / useShortcut | Keyboard shortcuts | useHotkeys for multiple; useShortcut for single |

## Utility Overlap

- `debounce` (shared) vs `useDebouncedValue` (hooks) — prefer hook in components.
- `cn` vs manual clsx — always use `cn`.

## Unused / Internal

- `patchConsoleError` — test/dev utility only.
- `disableStorybookArgTypes` — Storybook only.
- `packages/config` — dev tooling, not runtime.

## Refactoring Recommendations

1. **Document Native vs Base UI decision tree** in Storybook (done in this KB).
2. **Consolidate size measurement hooks** — document canonical choice (useElementSize).
3. **Export AlertDialog types** — ensure Props types are exported from barrel for TS consumers.
4. **Consider sub-path exports** for `@paalstack/react-components` to reduce bundle size (future).
5. **Icons:** always sub-path import — never root barrel in production apps.
