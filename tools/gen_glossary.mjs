// Merges per-task glossary JSON files into a single site glossary page src/glossary.md
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const G = path.join(EX, 'glossary');
const SRC = path.resolve('src');

const entries = new Map();
let files = [];
try {
  files = (await readdir(G)).filter((f) => f.endsWith('.json'));
} catch {}
for (const f of files) {
  try {
    const arr = JSON.parse(await readFile(path.join(G, f), 'utf8'));
    for (const e of arr) {
      if (!e || !e.term || !e.meaning) continue;
      const key = e.term.trim().toLowerCase();
      if (!entries.has(key) || entries.get(key).meaning.length < e.meaning.length) {
        entries.set(key, { term: e.term.trim(), meaning: e.meaning.trim() });
      }
    }
  } catch (err) {
    console.warn('bad glossary file', f, String(err));
  }
}

const list = [...entries.values()].sort((a, b) => a.term.localeCompare(b.term, 'ru'));
const lines = [
  '---',
  'title: "Глоссарий терминов"',
  'original: "https://core.telegram.org/mtproto"',
  'section: other',
  'layout: layout.njk',
  '---',
  '',
  '# Глоссарий терминов',
  '',
  'Термины в переводе сохранены в оригинальном написании; ниже собраны пояснения их значений на русском языке.',
  '',
  '| Термин | Значение |',
  '|---|---|',
];
for (const e of list) {
  lines.push(`| **${e.term.replace(/\|/g, '\\|')}** | ${e.meaning.replace(/\n+/g, ' ').replace(/\|/g, '\\|')} |`);
}
await writeFile(path.join(SRC, 'glossary.md'), lines.join('\n') + '\n');
console.log('glossary entries:', list.length);
