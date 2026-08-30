# @paalstack/react-hooks

## 1.1.2

### Patch Changes

- [`e28adde`](https://github.com/paalamugan/paalstack-react-ui/commit/e28addeba514a4de9395430883dc0fb5e606ff9e) Thanks [@paalamugan](https://github.com/paalamugan)! - Sync the bundled agent skill across all three per-package copies.

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

## 1.1.1

### Patch Changes

- [`92bbcc8`](https://github.com/paalamugan/paalstack-react-ui/commit/92bbcc8d27aa77a42a8390697c8d266aac7a52d2) Thanks [@paalamugan](https://github.com/paalamugan)! - feat: enhance FileUpload utility functions with documentation and configuration updates

## 1.1.0

### Minor Changes

- [`6515217`](https://github.com/paalamugan/paalstack-react-ui/commit/651521767e96a7f7afccc109c92bb681dc48c5c6) Thanks [@paalamugan](https://github.com/paalamugan)! - chore: add keywords and publish configuration to package.json files across multiple packages

## 1.0.2

### Patch Changes

- [`e74ade6`](https://github.com/paalamugan/paalstack-react-ui/commit/e74ade603d5fd753c3a7b3584b5158bbbca55757) Thanks [@paalamugan](https://github.com/paalamugan)! - docs: update Hooks documentation link in README

## 1.0.1

### Patch Changes

- [`d4245ee`](https://github.com/paalamugan/paalstack-react-ui/commit/d4245eeadd1e9ad3cda89686d1db63e83871caf3) Thanks [@paalamugan](https://github.com/paalamugan)! - chore: update author names in package.json files, enhance descriptions in several packages, and add README files for new packages
