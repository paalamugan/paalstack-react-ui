---
'@paalstack/react-components': minor
'@paalstack/react-ui': minor
---

feat(components): make Combobox selectOptionAsValue default and add controlled DataTable state

- Combobox: default `selectOptionAsValue` to true, add `maxSelectedChips` overflow chip, resolve chip labels from options
- DataTable: support controlled `rowSelection`, `columnVisibility`, and `columnFilters` with change callbacks
- DataTable: fix popup open selector and row action icon spacing, conditionally render toolbar filters
- add `lodash-es` dependency for deep equality checks
