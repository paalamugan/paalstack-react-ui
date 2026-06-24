---
'@paalstack/react-components': patch
'@paalstack/react-ui': patch
---

fix: reorder animation classes for consistency across components

- Adjusted the order of animation classes in multiple components including Accordion, AlertDialog, Combobox, ContextMenu, Dialog, Drawer, DropdownMenu, HoverCard, NavigationMenu, Popover, Select, and Tooltip for improved consistency in behavior.
- Ensured that the `data-open` classes precede the `data-closed` classes to maintain a uniform animation experience.
