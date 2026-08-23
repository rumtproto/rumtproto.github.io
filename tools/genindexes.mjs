// Generates:
// 1. Reference index pages src/{constructor,method,type}/index.md (all items + translated descriptions)
// 2. JSON schema dump pages src/schema/{json,mtproto-json,end-to-end-json}.md
// 3. Programmatic Russian version of the /methods index page (table cells via translation map)
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const SRC = path.resolve('src');
const SOURCE = path.resolve('.source');

const refs = JSON.parse(await readFile(path.join(EX, 'refs.json'), 'utf8'));
let map = {};
try {
  map = JSON.parse(await readFile(path.join(EX, 'translations.json'), 'utf8'));
} catch {
  console.warn('no translations.json yet');
}
const norm = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const normMap = {};
for (const [k, v] of Object.entries(map)) normMap[norm(k)] = v;
const tr = (s) => normMap[norm(s)] || s;

const KIND_RU = { constructor: 'Конструкторы', method: 'Методы', type: 'Типы' };
const KIND_ONE = { constructor: 'конструктор', method: 'метод', type: 'тип' };

// ---- reference index pages ----
for (const kind of ['constructor', 'method', 'type']) {
  const items = refs.filter((r) => r.kind === kind).sort((a, b) => a.title.localeCompare(b.title));
  const lines = [
    '---',
    `title: "${KIND_RU[kind]} — справочник схемы TL"`,
    `original: "https://core.telegram.org/schema"`,
    'section: ref',
    'layout: layout.njk',
    '---',
    '',
    `# ${KIND_RU[kind]} — справочник схемы TL`,
    '',
    `Полный список: каждый ${KIND_ONE[kind]} схемы TL со ссылкой на страницу с определением, параметрами и описанием. Всего: **${items.length}**.`,
    '',
    '| Название | Описание |',
    '|---|---|',
  ];
  for (const r of items) {
    const desc = tr(r.intro || '').replace(/\n+/g, ' ').replace(/\|/g, '\\|');
    lines.push(`| [${r.title}](${r.url}/) | ${desc} |`);
  }
  await mkdir(path.join(SRC, kind), { recursive: true });
  await writeFile(path.join(SRC, kind, 'index.md'), lines.join('\n'));
  console.log(kind, 'index:', items.length);
}

// ---- JSON schema dump pages ----
const dumps = [
  ['schema/json', 'Схема TL в формате JSON (API)', 'Машиночитаемая схема API Telegram: все конструкторы и методы с параметрами в формате JSON. Пролистайте или загрузите для автоматической генерации кода.'],
  ['schema/mtproto-json', 'Схема MTProto в формате JSON', 'Машиночитаемая схема слоя MTProto (обмен ключами, контейнеры, сервисные сообщения) в формате JSON.'],
  ['schema/end-to-end-json', 'Схема секретных чатов (end-to-end) в формате JSON', 'Машиночитаемая схема слоя секретных чатов (end-to-end шифрование) в формате JSON.'],
];
for (const [page, title, desc] of dumps) {
  const name = page.split('/')[1];
  const raw = await readFile(path.join(SOURCE, page.replace(/\//g, '__') + '.raw.html'), 'utf8');
  // the page body is raw JSON text inside the content div
  const m = raw.match(/<div id="dev_page_content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<div class="footer_wrap">/);
  let json = (m ? m[1] : raw).replace(/<[^>]+>/g, '').trim();
  json = json.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const lines = [
    '---',
    `title: "${title}"`,
    `original: "https://core.telegram.org/${page}"`,
    'section: schema',
    'layout: layout.njk',
    '---',
    '',
    `# ${title}`,
    '',
    desc,
    '',
    'Ниже приведено содержимое страницы без изменений (это данные, а не текст — переводу не подлежит).',
    '',
    '```json',
    json,
    '```',
    '',
  ];
  await mkdir(path.join(SRC, 'schema'), { recursive: true });
  await writeFile(path.join(SRC, name + '.md'), lines.join('\n'));
  console.log('json page:', name, json.length);
}

// ---- /methods index page via string substitution ----
const methodsMd = await readFile(path.join(EX, 'prose', 'methods.md'), 'utf8');
function translateCells(md) {
  return md
    .split('\n')
    .map((line) => {
      if (!line.startsWith('|')) return line;
      const cells = line.split('|');
      const out = cells.map((c, i) => {
        if (i === 0 || i === cells.length - 1) return c;
        const t = tr(c.trim());
        return c.replace(c.trim(), t);
      });
      return out.join('|');
    })
    .join('\n');
}
const body = translateCells(methodsMd);
const methodsOut = [
  '---',
  'title: "Методы по категориям"',
  'original: "https://core.telegram.org/methods"',
  'section: schema',
  'layout: layout.njk',
  '---',
  '',
  '# Методы по категориям',
  '',
  '> Категоризированный список всех методов Telegram API. Имена методов сохранены как в оригинале.',
  '',
  body,
  '',
].join('\n');
await writeFile(path.join(SRC, 'methods.md'), methodsOut);
console.log('methods page written', methodsOut.length);
