---
'@paalstack/react-components': patch
'@paalstack/react-layouts': patch
'@paalstack/react-ui': patch
---

fix(components): make CommandItem check icon opt-in and tidy DataTable/Typography styles

- CommandItem: add `showCheckIcon` prop (default false) and only render the check icon when enabled
- DataTable: suppress hover background on the empty-results row
- DataTableFacetedFilter: replace arbitrary `w-[200px]` with `w-50`
- DataTableRowActions: add configurable `ariaLabel` for the trigger button and screen-reader text; replace `w-[160px]` with `w-40`
- TypographyP: remove `not-first:mt-6` top margin
