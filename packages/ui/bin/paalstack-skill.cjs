#!/usr/bin/env node
/**
 * paalstack-skill — install the @paalstack agent skill into your AI agent's skills directory.
 *
 * Usage:
 *   npx paalstack-skill                 # auto-detect agent dirs, install for all found
 *   npx paalstack-skill --list          # show detected agent skill directories
 *   npx paalstack-skill --dir <target>  # install into a custom directory
 *   npx paalstack-skill --all           # install into every detected agent dir
 *   npx paalstack-skill --force         # overwrite an existing skill copy
 *
 * Supported targets (auto-detected when they exist):
 *   ~/.hermes/skills/paalstack-react-ui/          (Hermes Agent)
 *   ~/.claude/skills/paalstack-react-ui/          (Claude Code)
 *   .claude/skills/paalstack-react-ui/            (Claude Code, project-scoped)
 *   .cursor/skills/paalstack-react-ui/            (Cursor, project-scoped)
 *   .agent/skills/paalstack-react-ui/             (generic, project-scoped)
 *
 * No postinstall scripts — nothing runs automatically. You run this once per
 * machine (global agent dirs) or per project (project-scoped dirs).
 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('-')));

if (flags.has('-h') || flags.has('--help')) {
  console.log(`paalstack-skill — install the @paalstack agent skill for your AI coding agent

Usage:
  npx paalstack-skill [options]

Options:
  --hermes    Install into ~/.hermes/skills/ (Hermes Agent)
  --claude    Install into ~/.claude/skills/ (Claude Code, user-scoped)
  --project   Install into ./.claude/skills/ + ./.cursor/skills/ (project-scoped)
  --all       Install into every detected location
  --force     Overwrite existing skill copies
  --list      Show detected agent skill directories and exit
  -h, --help  Show this help

Examples:
  npx paalstack-skill                # install into all detected agents
  npx paalstack-skill --hermes       # Hermes only
  npx paalstack-skill --project      # current project only (Claude Code + Cursor)
`);
  process.exit(0);
}

// Resolve the skill source inside the installed package(s).
function findSkillSource() {
  const candidates = [];
  // Preferred: the ui package (present if user installed @paalstack/react-ui)
  try {
    candidates.push(path.dirname(require.resolve('@paalstack/react-ui/package.json')));
  } catch {}
  // Fallbacks: components / hooks / icons packages
  for (const name of ['@paalstack/react-components', '@paalstack/react-hooks', '@paalstack/react-icons']) {
    try {
      candidates.push(path.dirname(require.resolve(`${name}/package.json`)));
    } catch {}
  }
  // This package itself (when run via npx from the registry tarball)
  candidates.push(__dirname, path.join(__dirname, '..'));

  for (const dir of candidates) {
    const skillDir = path.join(dir, 'skills', 'paalstack-react-ui');
    if (fs.existsSync(path.join(skillDir, 'SKILL.md'))) return skillDir;
    // Also support skills/ at the package root one level up
    const alt = path.join(path.dirname(dir), 'skills', 'paalstack-react-ui');
    if (fs.existsSync(path.join(alt, 'SKILL.md'))) return alt;
  }
  return null;
}

const HERMES_DIR = path.join(os.homedir(), '.hermes', 'skills', 'devops');
const CLAUDE_DIR = path.join(os.homedir(), '.claude', 'skills');
const PROJECT_TARGETS = [
  path.join(process.cwd(), '.claude', 'skills'),
  path.join(process.cwd(), '.cursor', 'skills'),
];

function targets() {
  if (flags.has('--hermes')) return [{ name: 'Hermes Agent', dir: HERMES_DIR }];
  if (flags.has('--claude')) return [{ name: 'Claude Code (user)', dir: CLAUDE_DIR }];
  if (flags.has('--project')) return PROJECT_TARGETS.map((d) => ({ name: d, dir: d }));
  if (flags.has('--all') || args.length === 0) {
    const found = [{ name: 'Hermes Agent', dir: HERMES_DIR }, { name: 'Claude Code (user)', dir: CLAUDE_DIR }];
    // Auto-detect project-scoped dirs only if they already exist
    for (const d of PROJECT_TARGETS) {
      if (fs.existsSync(d)) found.push({ name: d, dir: d });
    }
    return found;
  }
  // Unknown positional — treat as custom directory
  const custom = args.find((a) => !a.startsWith('-'));
  if (custom) return [{ name: custom, dir: path.resolve(custom) }];
  return [];
}

function copySkill(src, destDir, force) {
  const dest = path.join(destDir, 'paalstack-react-ui');
  if (fs.existsSync(dest) && !force) {
    console.log(`  skip (exists — use --force to overwrite): ${dest}`);
    return false;
  }
  fs.mkdirSync(destDir, { recursive: true });
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
  console.log(`  installed: ${dest}`);
  return true;
}

if (flags.has('--list')) {
  console.log('Detected agent skill directories:');
  console.log(`  Hermes Agent:        ${HERMES_DIR} ${fs.existsSync(path.dirname(HERMES_DIR)) ? '(exists)' : '(not found)'}`);
  console.log(`  Claude Code (user):  ${CLAUDE_DIR} ${fs.existsSync(path.dirname(CLAUDE_DIR)) ? '(exists)' : '(not found)'}`);
  for (const d of PROJECT_TARGETS) {
    console.log(`  ${d} ${fs.existsSync(d) ? '(exists)' : '(not found)'}`);
  }
  process.exit(0);
}

const src = findSkillSource();
if (!src) {
  console.error(`error: could not locate the paalstack skill files.
  Expected a skills/paalstack-react-ui/SKILL.md inside an installed @paalstack/* package.
  Fix: install the library first — pnpm add @paalstack/react-ui
  Then re-run: npx paalstack-skill`);
  process.exit(1);
}

console.log(`Installing paalstack-react-ui skill from:\n  ${src}\n`);
let installed = 0;
for (const t of targets()) {
  console.log(`[${t.name}]`);
  if (copySkill(src, t.dir, flags.has('--force'))) installed++;
}

if (installed === 0) {
  console.log('\nNothing installed. Use --force to overwrite existing copies.');
} else {
  console.log(`\nDone — ${installed} agent(s) updated. Agents pick up the skill on their next session.`);
}