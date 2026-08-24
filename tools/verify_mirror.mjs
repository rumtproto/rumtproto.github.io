// Cross-checks the locally computed paragraph inventory against the live English
// mirror. Confirms that our [@t:N] numbering really is the mirror's numbering.
//
// Usage: node tools/verify_mirror.mjs [--all] [--concurrency 6]
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const EN = path.join(ROOT, '.extracted', 'en');
const MIRROR = 'https://mirrortproto.github.io';
const args = process.argv.slice(2);
const all = args.includes('--all');
const CONC = args.includes('--concurrency') ? +args[args.indexOf('--concurrency') + 1] : 6;

async function walk(dir, ext, base = dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext, base)));
    else if (e.name.endsWith(ext)) out.push(path.relative(base, p).replace(/\.json$/, ''));
  }
  return out;
}

let pages = await walk(EN, '.json');
if (!all) pages = pages.filter((p) => !/^(constructor|method|type)\//.test(p));

const results = [];
let i = 0;
async function worker() {
  for (;;) {
    const idx = i++;
    if (idx >= pages.length) return;
    const rel = pages[idx];
    const meta = JSON.parse(await readFile(path.join(EN, rel + '.json'), 'utf8'));
    const url = `${MIRROR}/${rel}/`;
    let mirror = null;
    let err = null;
    for (let attempt = 0; attempt < 3 && mirror === null; attempt++) {
      try {
        const res = await fetch(url, { headers: { 'user-agent': 'rumtproto-audit' } });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const html = await res.text();
        const a = html.indexOf('<article');
        const b = html.indexOf('</article>');
        // image-only paragraphs render as <figure id="p-N">, so count ids, not <p>
        mirror = new Set(html.slice(a, b).match(/id="p-\d+"/g) || []).size;
      } catch (e) {
        err = String(e.message || e);
        await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
      }
    }
    results.push({ rel, ours: meta.paragraphs, mirror, err: mirror === null ? err : null });
    if (results.length % 25 === 0) process.stderr.write(`  ${results.length}/${pages.length}\r`);
  }
}
await Promise.all(Array.from({ length: CONC }, worker));

results.sort((a, b) => a.rel.localeCompare(b.rel));
const bad = results.filter((r) => r.mirror !== null && r.mirror !== r.ours);
const failed = results.filter((r) => r.mirror === null);
await writeFile(path.join(ROOT, '.extracted', 'mirror_check.json'), JSON.stringify(results, null, 1));

console.log(`checked: ${results.length}   match: ${results.length - bad.length - failed.length}   mismatch: ${bad.length}   unreachable: ${failed.length}`);
for (const r of bad.slice(0, 40)) console.log(`  ${r.rel}: ours=${r.ours} mirror=${r.mirror}`);
for (const r of failed.slice(0, 10)) console.log(`  unreachable ${r.rel}: ${r.err}`);
process.exit(bad.length ? 1 : 0);
