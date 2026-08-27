# @paalstack/react-ui — Agent Skill

An AI-agent skill that teaches any coding agent how to use this library correctly. It ships **inside the npm packages** — install the library, run one command, and every project gets the full component knowledge.

## What's in here

```
skills/paalstack-react-ui/
├── SKILL.md                          # Main skill: package map, APIs, setup, build, pitfalls
├── references/
│   └── component-inventory.md        # Every component + its props API signatures
└── scripts/
    └── build-batched.sh              # Memory-safe batched build (resumable)
```

## Why

`@paalstack/react-ui` has conventions an agent can't guess from imports alone:

- Every component exposes **two APIs** — a props-style single component (`<Dialog trigger={} header={} footer={} />`) and a composition API (`DialogRoot`/`DialogTrigger`/`DialogContent`). Agents should default to the props API.
- The components package **must not be built monolithically** (`pnpm build` hangs on ~200 entries). The batched build script is the only safe path.
- Components using custom Tailwind utilities (shimmer, scroll-fade, scrollbar-*) break silently in consumers unless those utilities ship in the ui package's stylesheet.

Without the skill, an agent discovers these by breaking things. With it, it starts correct.

## Install

### From npm (recommended)

The skill ships in every `@paalstack/react-ui` tarball under `skills/`. After installing the library:

```bash
pnpm add @paalstack/react-ui

# One command — installs the skill into every detected agent (Hermes, Claude Code, Cursor):
npx paalstack-skill
```

Useful flags:

```bash
npx paalstack-skill --list      # show detected agent skill directories
npx paalstack-skill --hermes    # Hermes Agent only (~/.hermes/skills/devops/)
npx paalstack-skill --claude    # Claude Code user scope (~/.claude/skills/)
npx paalstack-skill --project   # current project only (.claude/skills/ + .cursor/skills/)
npx paalstack-skill --force     # overwrite existing copies
```

The installer is idempotent and safe to re-run after upgrading the library.

> **Why a manual command?** npm/pnpm block postinstall scripts that write
> outside the project directory (supply-chain protection), and agent
> frameworks don't scan `node_modules` for skills. The one-command installer
> is the closest zero-friction equivalent that works everywhere.

### Without the installer

The skill files are readable directly from the package:

```bash
cat node_modules/@paalstack/react-ui/skills/paalstack-react-ui/SKILL.md
# or via the package exports:
node -e "console.log(require.resolve('@paalstack/react-ui/agent-skill'))"
```

Point your agent at that path manually, or copy it:

```bash
# Hermes Agent
cp -r node_modules/@paalstack/react-ui/skills/paalstack-react-ui ~/.hermes/skills/devops/

# Claude Code (user scope)
cp -r node_modules/@paalstack/react-ui/skills/paalstack-react-ui ~/.claude/skills/

# Project-scoped (committed, shared with the team)
cp -r node_modules/@paalstack/react-ui/skills/paalstack-react-ui .claude/skills/
```

### From the repo (development)

```bash
cp -r skills/paalstack-react-ui ~/.hermes/skills/devops/
```

## Keeping it current

The skill is versioned **with the library** — each npm release carries the skill documenting that exact version. After upgrading `@paalstack/react-ui`, re-run `npx paalstack-skill --force` to refresh your agent's copy.

When contributing to the library, update the skill in the same PR as component changes:

1. The monorepo copy (`skills/paalstack-react-ui/` here) — source of truth
2. It gets packed into the next release automatically (see `files` in package.json)