---
'@paalstack/react-ui': patch
---

Add missing `data-starting-style` and `data-ending-style` custom variants
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
