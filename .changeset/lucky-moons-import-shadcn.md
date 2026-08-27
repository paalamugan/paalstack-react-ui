---
'@paalstack/react-components': minor
'@paalstack/react-ui': minor
---

Add Sidebar plus 6 new shadcn components: Attachment, Bubble, Marker, Message, MessageScroller, and Questionnaire. This brings paalstack-react-ui to full coverage of the current shadcn/ui component list.

- **Sidebar**: complete port of shadcn's sidebar (25 sub-components incl. SidebarProvider, SidebarMenuButton, SidebarRail, useSidebar) with mobile Sheet behavior, ⌘B/Ctrl+B toggle, and cookie persistence.
- **Attachment**: file attachment cards with idle/uploading/processing/error/done states, horizontal/vertical orientations, and an AttachmentGroup scroller.
- **Bubble / Message**: chat primitives — bubbles in 7 variants with reaction slot, and message layout with avatar/header/footer alignment.
- **MessageScroller**: auto-scrolling chat viewport (Provider/Viewport/Content/Item/Button + hooks) built on @shadcn/react primitives.
- **Questionnaire**: multi-step questionnaires with single/multiple choice, freeform input, skip support, keyboard shortcuts, and progress display.
- **ui styles**: added scroll-fade, shimmer, scrollbar-none/thin/gutter-stable, and wrap-break-word utilities to the global stylesheet so all new components render correctly out of the box.