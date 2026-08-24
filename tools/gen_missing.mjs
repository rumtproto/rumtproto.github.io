// Creates the missing Russian pages so the site matches the mirror page-by-page.
// Missing prose pages become stubs: an h1 (original title) + a "пояснение" note
// linking to the English mirror and the original. No network access.
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('.');
const SRC = path.join(ROOT, 'src');
const BACKUP = path.join(ROOT, 'backup');

function sectionOf(p) {
  if (p.startsWith('/mtproto')) return 'mtproto';
  if (p.startsWith('/techfaq') || p === '/faq') return 'faq';
  return 'api';
}

function h1(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('_') || e.name === 'css' || e.name === 'favicons') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith('.md')) yield p;
  }
}

async function main() {
  const dates = (await readdir(BACKUP)).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
  const backup = path.join(BACKUP, dates[dates.length - 1]);
  const meta = JSON.parse(await readFile(path.join(backup, 'manifest.json'), 'utf8'));
  const manifestByPath = new Map(meta.pages.map((p) => [p.path.replace(/\/+$/, ''), p]));

  // existing Russian pages
  const have = new Set();
  for await (const f of walk(SRC)) {
    let rel = '/' + path.relative(SRC, f).replace(/\\/g, '/').replace(/\.md$/, '');
    if (rel.endsWith('/index')) rel = rel.slice(0, -6);
    have.add(rel);
  }

  let created = 0;
  for (const [p, pg] of manifestByPath) {
    if (p === '' || have.has(p)) continue;
    let html;
    try {
      html = await readFile(path.join(backup, pg.file), 'utf8');
    } catch {
      continue;
    }
    const title = h1(html) || p.split('/').pop() || 'Telegram';
    const section = sectionOf(p);
    const fm = [
      '---',
      `title: "${title.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`,
      `original: "${pg.url}"`,
      `section: ${section}`,
      'layout: layout.njk',
      '---',
      '',
    ].join('\n');
    const body =
      `# ${title}\n\n` +
      `[@note] Перевод этой страницы ещё не готов. Смотрите [английскую версию](https://mirrortproto.github.io${p}/) или [оригинал](${pg.url}).\n`;
    const dest = path.join(SRC, p.replace(/^\//, '') + '.md');
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fm + '\n' + body + '\n');
    created++;
  }
  console.log('created missing pages:', created);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
