// Generates the alphabetical index pages of the schema reference:
//   src/constructor/index.md, src/method/index.md, src/type/index.md
//
// Each entry shows the (translated) one-line description of the target page, so
// the index doubles as a searchable overview. Run AFTER tools/genrefs.mjs.
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve('src');

function parseFm(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return { fm: {}, body: text };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, '').replace(/\\"/g, '"');
  }
  return { fm, body: text.slice(m[0].length).replace(/^\n+/, '') };
}

/** First prose line of a reference page — its short description. */
function shortDescription(body) {
  const lines = body.split('\n');
  let i = 0;
  while (i < lines.length && !/^#\s/.test(lines[i])) i++;
  i++;
  for (; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t) continue;
    if (/^(```|~~~)/.test(t) || /^#{2,6}\s/.test(t) || /^</.test(t)) return '';
    return t
      .replace(/\[@(?:term:[^\]]*|note|t:\d+)\]\s*/g, '')
      .replace(/\|/g, '\\|')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return '';
}

const KINDS = [
  {
    kind: 'constructor',
    title: 'Конструкторы',
    lead: (n) =>
      `Все конструкторы схемы TL (${n}). Имена ведут на страницы с полным определением, параметрами и описанием.`,
    description: (n) => `Алфавитный указатель всех ${n} конструкторов схемы TL Telegram с кратким описанием каждого.`,
  },
  {
    kind: 'method',
    title: 'Методы',
    lead: (n) =>
      `Все методы схемы TL (${n}). Имена ведут на страницы с полным определением, параметрами, результатом и возможными ошибками.`,
    description: (n) => `Алфавитный указатель всех ${n} методов схемы TL Telegram с кратким описанием каждого.`,
  },
  {
    kind: 'type',
    title: 'Типы',
    lead: (n) =>
      `Все типы схемы TL (${n}). Имена ведут на страницы со списком конструкторов и методов, возвращающих этот тип.`,
    description: (n) => `Алфавитный указатель всех ${n} типов схемы TL Telegram с кратким описанием каждого.`,
  },
];

for (const { kind, title, lead, description } of KINDS) {
  const dir = path.join(SRC, kind);
  const files = (await readdir(dir))
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .sort((a, b) => a.localeCompare(b, 'en'));

  const rows = [];
  for (const f of files) {
    const { fm, body } = parseFm(await readFile(path.join(dir, f), 'utf8'));
    const name = f.replace(/\.md$/, '');
    rows.push({ name: fm.title || name, url: encodeURIComponent(name) + '/', desc: shortDescription(body) });
  }

  const lines = [
    '---',
    `title: "${title} — справочник схемы TL"`,
    'original: "https://core.telegram.org/schema"',
    'section: ref',
    `description: "${description(rows.length)}"`,
    'layout: layout.njk',
    '---',
    '',
    `# ${title}`,
    '',
    lead(rows.length),
    '',
    '| Название | Описание |',
    '|---|---|',
  ];
  for (const r of rows) lines.push(`| [${r.name}](/${kind}/${r.url}) | ${r.desc} |`);
  await writeFile(path.join(dir, 'index.md'), lines.join('\n') + '\n');
  console.log(`${kind} index: ${rows.length} entries`);
}
