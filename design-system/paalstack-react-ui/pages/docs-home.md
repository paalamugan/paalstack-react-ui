# Page override: docs home (component gallery)

Overrides `MASTER.md` for this page only. Everything the master says about the
repo binding still applies. What changes here is the pattern, the type stack and
the palette.

## Surface

The gallery does not exist yet. In this repo the docs surface is Storybook MDX
under `stories/overview/` (`getting-started`, `components`, `colors`, `hooks`,
`layouts`, `providers`, `icons`, `charts`, `custom-and-extended-components`).
There is no `/docs` route. paalstack.com is a separate project and carries no
component library page.

That leaves one decision open, and it changes what this page can be:

- Static MDX page in Storybook: search and facets are impossible, it becomes an
  alphabetical index with category headings.
- Next route inside this repo or on paalstack.com: the search block is buildable.

Build the index first. It is useful either way, and it is the part that cannot
wait on the decision.

## Pattern

The master picks "FAQ/Documentation Landing" with a hero search bar, popular
categories, an FAQ accordion and a support CTA. Support is not the job here. A
component gallery is a browse surface, so:

1. Masthead: library name, one sentence on what it is, the install command, two
   links (getting started, props API).
2. Search and facets, only if the interactive surface exists.
3. Gallery grid, one tile per component.
4. Footer strip: tokens, hooks, icons, charts.

Drop the FAQ accordion and the contact CTA. Nothing on this page should promise
support. The prop tables and Storybook already answer "how do I use it".

## Components

Real components from this library, Props API. Do not hand-roll equivalents.

- `InputGroup` with `addonStart={<LuSearch aria-hidden="true" />}` for search.
  `inputProps` carries `data-qa` and the placeholder.
- `MultiSelect` for the category facet, with `maxSelectedBadges={3}` and
  `contentProps={{ className: 'min-w-52' }}` so long labels do not clip.
- `CardRoot` for tiles when a tile needs a flex column (name, one-liner, count
  in a footer row). Plain `Card` collapses children into one content block and
  breaks that layout.
- `Badge variant="info"` for "new" and `variant="warning"` for "beta". No
  hand-rolled status spans.
- `Button` with `isLoading` where the install command has a copy action.
- `Empty` state for a search with no matches, worded as a search miss, not as an
  empty library.

## Type

The master recommends JetBrains Mono and IBM Plex Sans. This repo does not ship
them. Shipped tokens:

- `--font-sans`: Inter. Body copy, headings, UI.
- `--font-serif`: Roboto Serif. Unused on this page.
- `--font-mono`: DM Mono. The install command and code only.

Do not import Google Fonts for this page. Adding a family means changing
`base.css` and the `@theme` mapping, which is its own change.

## Spacing and radius

`--spacing` is 0.25rem and `--radius` is 0.5rem. Use the scale.

The master's section rhythm of 80 to 160px was measured on marketing sites. For
a dense gallery use 48px to 64px between bands, and let the grid gap do the
work.

## Colour

Use the semantic tokens as they are: `bg-background`, `text-foreground`,
`text-muted-foreground`, `border-border`, `bg-card`, `bg-muted`.

Ignore the master's indigo and amber palette on this page. A gallery that shows
the library's colours should not wear a different palette, or every swatch on it
reads as a lie. If the docs site wants its own accent, that is an edit to
`base.css` in its own change.

## Constraints

- `data-qa` on every interactive element.
- `focus-visible:ring-2`, contrast 4.5:1 for text, 3:1 for control boundaries.
  The master's `--color-border` proposal measured 1.33:1 on its own background,
  so do not carry that value over as an input border.
- Icons from `@/icons/lu`. No emoji.
- Both themes tested, tokens only, no raw hex.
- `prefers-reduced-motion` respected. Tile hover stays at 1 to 2px lift, 200ms.
