/**
 * Tests for the paalstack-skill CLI.
 *
 * We spawn the CLI as a child process with a fake $HOME and a fake cwd so we
 * never touch the developer's real ~/.hermes or ~/.claude directories.
 *
 * Coverage:
 *   1. --force alone must install to every detected dir (regression: previously
 *      exited "Nothing installed" because targets() only branched on --all /
 *      --hermes / --claude / --project, never on --force).
 *   2. --hermes --force must scope to Hermes only.
 *   3. --all --force must install both.
 *   4. --project --force must scope to project dirs only.
 */
'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const CLI = path.join(__dirname, 'paalstack-skill.cjs');

function makeTempDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function exists(p) {
  return fs.existsSync(p);
}

function runCli(env, cwd, args) {
  return execFileSync('node', [CLI, ...args], {
    cwd,
    env: { ...process.env, ...env },
    encoding: 'utf8',
  });
}

describe('paalstack-skill CLI', () => {
  let home;
  let project;

  beforeEach(() => {
    home = makeTempDir('paalstack-skill-home-');
    project = makeTempDir('paalstack-skill-proj-');
    // The CLI auto-detects user-scope dirs by fs.existsSync on their parent.
    fs.mkdirSync(path.join(home, '.hermes', 'skills'), { recursive: true });
    fs.mkdirSync(path.join(home, '.claude', 'skills'), { recursive: true });
    fs.mkdirSync(path.join(project, '.claude', 'skills'), { recursive: true });
    fs.mkdirSync(path.join(project, '.cursor', 'skills'), { recursive: true });
  });

  afterEach(() => {
    fs.rmSync(home, { recursive: true, force: true });
    fs.rmSync(project, { recursive: true, force: true });
  });

  test('--force alone installs to every detected dir (regression: bug from issue)', () => {
    const out = runCli({ HOME: home }, project, ['--force']);
    expect(out).toMatch(/Done — \d+ agent\(s\) updated/);
    expect(out).not.toMatch(/Nothing installed/);
    expect(exists(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'SKILL.md'))).toBe(true);
    expect(exists(path.join(home, '.claude', 'skills', 'paalstack-react-ui', 'SKILL.md'))).toBe(true);
  });

  test('--hermes --force scopes to Hermes only', () => {
    const out = runCli({ HOME: home }, project, ['--hermes', '--force']);
    expect(exists(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'SKILL.md'))).toBe(true);
    expect(exists(path.join(home, '.claude', 'skills', 'paalstack-react-ui', 'SKILL.md'))).toBe(false);
    expect(out).toMatch(/Done — 1 agent\(s\) updated/);
  });

  test('--all --force installs both user-scope agents', () => {
    // --all also auto-includes cwd-detected project dirs if they exist; we
    // only assert the user-scope installs here and that --all was honored
    // (output reports >= 2 agents updated).
    const out = runCli({ HOME: home }, project, ['--all', '--force']);
    expect(exists(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'SKILL.md'))).toBe(true);
    expect(exists(path.join(home, '.claude', 'skills', 'paalstack-react-ui', 'SKILL.md'))).toBe(true);
    expect(out).toMatch(/Done — [2-9]\d* agent\(s\) updated/);
  });

  test('--project --force scopes to project dirs only', () => {
    const out = runCli({ HOME: home }, project, ['--project', '--force']);
    expect(exists(path.join(project, '.claude', 'skills', 'paalstack-react-ui', 'SKILL.md'))).toBe(true);
    expect(exists(path.join(project, '.cursor', 'skills', 'paalstack-react-ui', 'SKILL.md'))).toBe(true);
    expect(exists(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'SKILL.md'))).toBe(false);
  });

  test('--force overwrites an existing install', () => {
    runCli({ HOME: home }, project, ['--hermes']);
    const before = fs.statSync(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'SKILL.md'));
    // Force a different mtime by rewriting the file.
    fs.writeFileSync(
      path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'STALE.txt'),
      'stale',
    );
    runCli({ HOME: home }, project, ['--hermes', '--force']);
    expect(exists(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'STALE.txt'))).toBe(false);
    const after = fs.statSync(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'SKILL.md'));
    expect(after.mtimeMs).toBeGreaterThanOrEqual(before.mtimeMs);
  });

  test('without --force, an existing install is skipped', () => {
    runCli({ HOME: home }, project, ['--hermes']);
    fs.writeFileSync(
      path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'KEEP.txt'),
      'keep me',
    );
    const out = runCli({ HOME: home }, project, ['--hermes']);
    expect(out).toMatch(/skip \(exists/);
    expect(exists(path.join(home, '.hermes', 'skills', 'devops', 'paalstack-react-ui', 'KEEP.txt'))).toBe(true);
  });
});