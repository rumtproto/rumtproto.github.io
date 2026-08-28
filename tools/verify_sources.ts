import { existsSync, globSync, readFileSync } from 'node:fs';

const forbidden = [];
for (const root of ['client', 'tools', 'mirror/client', 'mirror/tools']) {
  if (!existsSync(root)) continue;
  for (const file of globSync('**/*.{js,mjs,cjs,py}', { cwd: root })) forbidden.push(`${root}/${file}`);
}
if (existsSync('eleventy.config.mjs')) forbidden.push('eleventy.config.mjs');
if (!existsSync('eleventy.config.ts')) throw new Error('Missing TypeScript Eleventy configuration.');
if (forbidden.length) throw new Error(`Non-TypeScript scripts found:\n${forbidden.map((file) => `  ${file}`).join('\n')}`);

const ignored = new Set(readFileSync('.gitignore', 'utf8').split(/\r?\n/).filter(Boolean));
for (const generated of ['.build/', 'build/', 'docs/', 'mirror/crawled/']) {
  if (!ignored.has(generated)) throw new Error(`Generated path is not ignored: ${generated}`);
}

console.log('[sources] scripts are TypeScript; compiled and generated trees are ignored');
