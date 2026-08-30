---
'@paalstack/react-ui': patch
---

Fix `paalstack-skill --force` silently installing nothing.

The CLI's `targets()` function only returned a target list when a target
flag (`--hermes`, `--claude`, `--project`, `--all`) was passed — `--force`
alone matched no branch and fell through to an empty array, printing
"Nothing installed." even though the user clearly meant "overwrite
everywhere."

A bare `--force` now installs into every detected dir (Hermes + Claude
Code user-scope, plus any auto-detected project-scope dirs). The other
target-scope flags are unchanged. Adds `packages/ui/bin/paalstack-skill.test.cjs`
to lock the behavior in.