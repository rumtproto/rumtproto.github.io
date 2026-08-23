// Builds redo-*.json task files for chunks that are still missing or untranslated
// (no Cyrillic content). Grouped into tasks of <= ~45KB.
import { mkdir, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const TR = path.resolve('.translated/chunks');
const TASKS = path.join(EX, 'tasks');
const MAX = 45 * 1024;

const RULES = `
Ты переводишь техническую документацию Telegram (core.telegram.org) с английского на русский язык.

ПРАВИЛА ПЕРЕВОДА:
1. Переведи ВЕСЬ текст каждого указанного файла на русский язык. Ничего не пропускай, не сокращай и не суммируй.
2. Сохрани структуру Markdown ТОЧНО: заголовки (уровни #), списки, таблицы, цитаты, блоки кода.
3. Блоки кода (внутри \`\`\`), идентификаторы, имена параметров, названия типов, TL-схемы, URL и HTTP-методы НЕ переводи — оставляй как есть.
4. Термины (например: auth_key, msg_key, message key, salt, nonce, session, RPC, container, ack, layer, constructor, method, bot, channel, peer, update, gap, Perfect Forward Secrecy и т.п.) НЕ переводи — оставляй в оригинальном написании. При ПЕРВОМ упоминании важного термина в пределах данного фрагмента добавляй сразу после него краткое пояснение на русском в скобках, например: "auth_key (авторизационный ключ — долговременный общий ключ клиента и сервера)".
5. Ссылки вида [текст](/path) или [текст](/path#anchor) сохраняй как есть (пути не меняй); текст ссылки переведи. Ссылки на внешние сайты (http/https) не меняй вовсе.
6. Заголовки переводи, но если заголовок состоит из термина — оставь термин и добавь пояснение, например: "## Time synchronization (синхронизация времени)".
7. Числа, формулы, таблицы с кодами ошибок и подобные данные не изменяй; описательные ячейки таблиц переводи.
8. Пиши естественным техническим русским языком, сохраняя тон документации.

ВЫВОД:
- Для каждого фрагмента прочитай исходный файл (поле "src") и запиши ПОЛНЫЙ перевод в файл из поля "dst" (перезапиши его, если он существует). Файл должен содержать ТОЛЬКО перевод фрагмента, без комментариев о переводе.
- Затем создай файл глоссария из поля "glossary": JSON-массив объектов {"term": "...", "meaning": "..."} для ключевых терминов, которые ты пояснил (5-30 записей; если терминов нет — пустой массив).
- В конце ответь одной строкой: DONE <количество обработанных фрагментов>.
`.trim();

const hasCyr = (s) => /[а-яА-ЯёЁ]/.test(s);

async function main() {
  const manifest = JSON.parse(await readFile(path.join(EX, 'chunk-manifest.json'), 'utf8'));
  const missing = [];
  for (const c of manifest) {
    if (c.name === 'methods') continue;
    const id = c.parts === 1 ? c.name : `${c.name}.part${String(c.part).padStart(2, '0')}`;
    const dst = path.join(TR, id + '.md');
    let ok = false;
    try {
      const s = await readFile(dst, 'utf8');
      ok = s.length > 200 && hasCyr(s);
    } catch {}
    if (!ok) missing.push({ ...c, chunkId: id });
  }
  // remove old redo task files
  for (const f of await readdir(TASKS)) if (f.startsWith('redo-')) await rm(path.join(TASKS, f));

  const tasks = [];
  let cur = { files: [], chars: 0 };
  for (const c of missing) {
    c.chars = (await readFile(path.join(EX, c.chunk), 'utf8')).length;
    if (cur.chars + c.chars > MAX && cur.files.length) {
      tasks.push(cur);
      cur = { files: [], chars: 0 };
    }
    cur.files.push(c);
    cur.chars += c.chars;
  }
  if (cur.files.length) tasks.push(cur);

  for (let i = 0; i < tasks.length; i++) {
    const id = `redo-${String(i + 1).padStart(2, '0')}`;
    const obj = {
      task: 'translate-prose-redo',
      instructions: RULES,
      chunks: tasks[i].files.map((f) => ({
        src: path.join(EX, f.chunk),
        dst: path.join(TR, f.chunkId + '.md'),
        page: f.name,
      })),
      glossary: path.join(EX, 'glossary', id + '.json'),
    };
    await writeFile(path.join(TASKS, id + '.json'), JSON.stringify(obj, null, 1));
  }
  console.log('missing chunks:', missing.length, '-> redo tasks:', tasks.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
