#!/usr/bin/env node
/**
 * Extracts export inventory, component metadata, hook metadata from source.
 * Output: scripts/.kb-extract.json
 */
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

function readFile(p) {
  try {
    return fs.readFileSync(p, 'utf8');
  } catch {
    return '';
  }
}

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((d) => {
    const fp = path.join(dir, d);
    return fs.statSync(fp).isDirectory() && !d.startsWith('.');
  });
}

function resolveFile(base, rel) {
  const candidates = [
    path.join(base, rel),
    path.join(base, rel + '.ts'),
    path.join(base, rel + '.tsx'),
    path.join(base, rel, 'index.ts'),
    path.join(base, rel, 'index.tsx'),
  ];
  return candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile());
}

function extractExportsFromContent(content, filePath) {
  const items = [];
  const add = (name, kind = 'export') => {
    if (name && !items.some((i) => i.name === name)) items.push({ name, kind, file: filePath });
  };

  for (const line of content.split('\n')) {
    const reAll = line.match(/^export\s+\*\s+from\s+['"]([^'"]+)['"]/);
    if (reAll) continue;
    const reNs = line.match(/^export\s+\*\s+as\s+(\w+)\s+from/);
    if (reNs) add(reNs[1], 'namespace');
    const reNamed = line.match(/^export\s+(?:type\s+)?\{([^}]+)\}/);
    if (reNamed) {
      reNamed[1].split(',').forEach((part) => {
        const n = part.trim().split(/\s+as\s+/).pop()?.trim();
        if (n) add(n);
      });
    }
  }

  const patterns = [
    /export\s+(?:type\s+)?(?:function|const)\s+(\w+)/g,
    /export\s+(?:type\s+)?interface\s+(\w+)/g,
    /export\s+(?:type\s+)?enum\s+(\w+)/g,
    /export\s+type\s+(\w+)\s*=/g,
  ];
  for (const p of patterns) {
    let m;
    while ((m = p.exec(content))) add(m[1]);
  }

  const meta = {
    cva: /\bcva\s*\(/.test(content),
    tailwindVariants: /tailwind-variants|tv\s*\(/.test(content),
    baseUI: /@base-ui\/react/.test(content),
    radix: /@radix-ui/.test(content),
    headless: /@headlessui/.test(content),
    portal: /\bPortal\b|createPortal/.test(content),
    context: /createContext|useContext/.test(content),
  };

  return { items, meta };
}

function walkExports(entryFile, visited = new Set()) {
  const abs = path.resolve(entryFile);
  if (visited.has(abs)) return [];
  visited.add(abs);
  const content = readFile(abs);
  const base = path.dirname(abs);
  const all = [];

  for (const line of content.split('\n')) {
    const m = line.match(/^export\s+\*\s+from\s+['"]([^'"]+)['"]/);
    if (m) {
      const resolved = resolveFile(base, m[1].replace(/^\.\//, ''));
      if (resolved) all.push(...walkExports(resolved, visited).items ?? walkExports(resolved, visited));
    }
  }

  const { items, meta } = extractExportsFromContent(content, abs);
  return { items: [...all, ...items], meta };
}

function analyzeComponent(dirName) {
  const dir = path.join(ROOT, 'packages/components/src', dirName);
  const index = resolveFile(dir, 'index');
  const mainTsx = fs
    .readdirSync(dir)
    .find((f) => f.endsWith('.tsx') && !f.includes('.stories.') && !f.includes('.test.'));

  const files = new Set();
  if (index) files.add(index);
  if (mainTsx) files.add(path.join(dir, mainTsx));

  // sub-exports from index
  if (index) {
    const idxContent = readFile(index);
    for (const line of idxContent.split('\n')) {
      const m = line.match(/^export\s+\*\s+from\s+['"]\.\/([^'"]+)['"]/);
      if (m) {
        const f = resolveFile(dir, m[1]);
        if (f) files.add(f);
      }
      const m2 = line.match(/from\s+['"]\.\/([^'"]+)['"]/);
      if (m2 && line.includes('export')) {
        const f = resolveFile(dir, m2[1]);
        if (f) files.add(f);
      }
    }
  }

  let merged = { items: [], meta: {} };
  for (const f of files) {
    const content = readFile(f);
    const { items, meta } = extractExportsFromContent(content, f);
    merged.items.push(...items);
    merged.meta = { ...merged.meta, ...meta, ...Object.fromEntries(Object.entries(meta).filter(([, v]) => v)) };
  }

  // props / variants from content
  const allContent = [...files].map(readFile).join('\n');
  const variantMatch = allContent.match(/variants\s*:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
  const variantKeys = variantMatch
    ? [...variantMatch[1].matchAll(/(\w+)\s*:/g)].map((m) => m[1]).filter((k) => !['defaultVariants', 'compoundVariants'].includes(k))
    : [];

  const propsInterfaces = [...allContent.matchAll(/export\s+(?:type\s+)?interface\s+(\w+Props\w*)/g)].map((m) => m[1]);
  const typeProps = [...allContent.matchAll(/export\s+type\s+(\w+Props\w*)/g)].map((m) => m[1]);

  return {
    name: dirName,
    exports: [...new Map(merged.items.map((i) => [i.name, i])).values()],
    meta: merged.meta,
    variantKeys: [...new Set(variantKeys)],
    propsTypes: [...new Set([...propsInterfaces, ...typeProps])],
    files: [...files].map((f) => path.relative(ROOT, f)),
  };
}

function analyzeHook(dirName) {
  const dir = path.join(ROOT, 'packages/hooks/src', dirName);
  const files = fs
    .readdirSync(dir)
    .filter(
      (f) =>
        (f.endsWith('.ts') || f.endsWith('.tsx')) &&
        !f.includes('.test.') &&
        !f.includes('.stories.') &&
        f !== 'index.ts',
    );
  const main = files.find((f) => f.startsWith('use-') && f.endsWith('.ts')) || files.find((f) => f.startsWith('use-')) || files[0];
  const fp = path.join(dir, main);
  const content = readFile(fp);
  const { items } = extractExportsFromContent(content, fp);

  const hookName = items.find((i) => i.name.startsWith('use'))?.name || dirName.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^use/, 'use');

  const paramsMatch = content.match(new RegExp(`(?:export\\s+(?:const|function)\\s+)?${hookName}\\s*(?:<[^>]*>)?\\s*\\(([^)]*)\\)`));
  const returnMatch = content.match(new RegExp(`function\\s+${hookName}[^{]*\\{[\\s\\S]*?return\\s+(\\{[\\s\\S]*?\\}|[^;\\n]+)`));

  return {
    name: dirName,
    hookName,
    exports: items,
    params: paramsMatch?.[1]?.trim() || 'See source',
    file: path.relative(ROOT, fp),
    hasReturnObject: returnMatch?.[1]?.startsWith('{') ?? false,
  };
}

// Run extraction
const components = listDirs(path.join(ROOT, 'packages/components/src')).filter((d) => d !== 'components');
const hooks = listDirs(path.join(ROOT, 'packages/hooks/src'));
const layouts = listDirs(path.join(ROOT, 'packages/layouts/src'));
const iconLibs = listDirs(path.join(ROOT, 'packages/icons/src')).filter((d) => d !== 'components');

const componentData = components.map(analyzeComponent);
const hookData = hooks.map(analyzeHook);

const out = {
  generatedAt: new Date().toISOString(),
  components: componentData,
  hooks: hookData,
  layouts: layouts,
  iconLibs,
  componentCount: componentData.length,
  hookCount: hookData.length,
};

fs.mkdirSync(path.join(ROOT, 'scripts'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'scripts/.kb-extract.json'), JSON.stringify(out, null, 2));
console.log(`Extracted ${componentData.length} components, ${hookData.length} hooks, ${iconLibs.length} icon libs`);
