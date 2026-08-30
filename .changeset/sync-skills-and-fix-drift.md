---
'@paalstack/react-ui': patch
'@paalstack/react-hooks': patch
'@paalstack/react-icons': patch
---

Sync the bundled agent skill across all three per-package copies.

The monorepo source (`skills/paalstack-react-ui/`) is the single source of
truth for the skill that ships inside every npm tarball. The three
per-package copies (`packages/{ui,hooks,icons}/skills/paalstack-react-ui/`)
had drifted out of sync with the source — components.mdx claimed "61+
components built on Radix UI primitives" when the library actually
ships 76 components on Base UI; hooks counts were "50+" when the
real number is 73; the CSS exports table was missing the 5 new subpaths
added in this release (`base.css`, `utilities.css`, `toast.css`,
`fonts.css`, `all.css`); the batched-build section didn't mention
`packages/ui/build-batched.sh`.

This changeset ships:

- All three per-package skill copies are now in sync with the source
  (SKILL.md + references/component-inventory.md for hooks/icons; those
  plus README.md + scripts/build-batched.sh for ui).
- The skill documents the refined shadow scale, all 76 components with
  import + props-API examples, all 73 hooks with usage patterns, and
  all 31 icon packs.
- New repo-level script `scripts/sync-skills.mjs` + `pnpm skills:sync`
  to copy the source to all per-package targets, and `pnpm lint:skills`
  to verify drift-free (wired into CI in `.github/workflows/ci.yml`).

Consumers who upgrade `@paalstack/react-ui`, `@paalstack/react-hooks`, or
`@paalstack/react-icons` and run `npx paalstack-skill --force` will see
the corrected content.