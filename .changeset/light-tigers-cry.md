---
'@paalstack/react-components': patch
'@paalstack/react-ui': patch
---

feat(components): improve Combobox selectOptionAsValue and Form field layout classes

- Combobox: resolve option labels/values via `selectOptionAsValue` props when options are objects, replacing the inferred `isOptionValue` behavior
- Form: add `formContainerClassName` to `CommonFormFieldItem`, apply it to the outer field wrapper and keep `formItemClassName` on the inner content; only render field description/error wrapper for non-raw field types
