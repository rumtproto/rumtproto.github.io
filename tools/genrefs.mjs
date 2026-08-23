// Generates Eleventy markdown for schema reference pages (/constructor, /method, /type)
// using .extracted/refs.json and the translation map .extracted/translations.json
// (English source string -> Russian translation).
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('src');
const EX = path.resolve('.extracted');

const SECTION_TITLES = {
  Parameters: 'Параметры',
  Result: 'Результат',
  Type: 'Тип',
  Types: 'Типы',
  'Possible values': 'Возможные значения',
  'Constructors': 'Конструкторы',
  Methods: 'Методы',
  'See also': 'См. также',
  Examples: 'Примеры',
};

const KIND_RU = { constructor: 'конструктор', method: 'метод', type: 'тип' };

function mdEscape(s) {
  return String(s ?? '').replace(/\|/g, '\\|');
}

function tr(map, s) {
  if (!s) return s;
  const key = s.trim();
  if (map[key]) return map[key];
  return s; // fallback: keep original English
}

function renderTable(map, rows) {
  if (!rows || !rows.length) return '';
  const header = rows[0];
  const ruHeader = header.map((h) =>
    tr(map, h) === 'Name' ? 'Имя' : tr(map, h) === 'Type' ? 'Тип' : tr(map, h) === 'Description' ? 'Описание' : tr(map, h)
  );
  let out = '| ' + ruHeader.join(' | ') + ' |\n';
  out += '|' + header.map(() => '---').join('|') + '|\n';
  for (const row of rows.slice(1)) {
    const cells = row.map((c, i) => {
      // first column = name (code), middle = type links, last = description (translate)
      if (i === row.length - 1 && row.length >= 3) return tr(map, c);
      return c;
    });
    out += '| ' + cells.map((c) => mdEscape(c).replace(/INTERNAL:/g, '')).join(' | ') + ' |\n';
  }
  return out;
}

async function main() {
  const refs = JSON.parse(await readFile(path.join(EX, 'refs.json'), 'utf8'));
  let map = {};
  try {
    map = JSON.parse(await readFile(path.join(EX, 'translations.json'), 'utf8'));
  } catch {
    console.warn('translations.json not found; using English fallbacks');
  }

  let missing = new Set();
  const trTrack = (s) => {
    const r = tr(map, s);
    if (r === s && s && /[a-zA-Z]/.test(s)) missing.add(s.trim());
    return r;
  };

  for (const kind of ['constructor', 'method', 'type']) {
    await mkdir(path.join(OUT, kind), { recursive: true });
  }

  for (const ref of refs) {
    const name = ref.url.split('/')[2];
    const dir = ref.url.split('/')[1];
    const lines = [];
    lines.push('---');
    lines.push(`title: "${ref.title.replace(/"/g, '\\"')} (${KIND_RU[ref.kind]})"`);
    lines.push(`original: "https://core.telegram.org${ref.url}"`);
    lines.push('section: ref');
    lines.push(`kind: ${ref.kind}`);
    lines.push('layout: layout.njk');
    lines.push('---');
    lines.push('');
    lines.push(`# ${ref.title}`);
    lines.push('');
    lines.push(`*${KIND_RU[ref.kind][0].toUpperCase() + KIND_RU[ref.kind].slice(1)} из схемы TL.*`);
    lines.push('');
    if (ref.intro) {
      lines.push('> ' + trTrack(ref.intro).replace(/\n+/g, '\n> '));
      lines.push('');
    }
    if (ref.tl) {
      lines.push('## Определение TL');
      lines.push('');
      lines.push('```');
      lines.push(ref.tl);
      lines.push('```');
      lines.push('');
    }
    for (const sec of ref.sections || []) {
      const t = SECTION_TITLES[sec.title] || trTrack(sec.title);
      lines.push('## ' + t);
      lines.push('');
      if (sec.text) {
        lines.push(trTrack(sec.text));
        lines.push('');
      }
      for (const table of sec.tables || []) {
        lines.push(renderTable(map, table));
      }
    }
    await writeFile(path.join(OUT, dir, name + '.md'), lines.join('\n'));
  }

  if (missing.size) {
    await writeFile(path.join(EX, 'missing.json'), JSON.stringify([...missing].sort(), null, 1));
    console.log('reference pages written; missing translations:', missing.size);
  } else {
    console.log('reference pages written; no missing translations');
  }
  console.log('total refs:', refs.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
