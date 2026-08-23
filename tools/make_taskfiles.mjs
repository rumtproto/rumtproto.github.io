// Creates per-task instruction files under .extracted/tasks/ for translation subagents.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const EX = path.resolve('.extracted');
const ROOT = path.resolve('.');

const PROSE_RULES = `
Ты переводишь техническую документацию Telegram (core.telegram.org) с английского на русский язык.

ПРАВИЛА ПЕРЕВОДА:
1. Переведи ВЕСЬ текст каждого указанного файла на русский язык. Ничего не пропускай, не сокращай и не суммируй.
2. Сохрани структуру Markdown ТОЧНО: заголовки (уровни #), списки, таблицы, цитаты, блоки кода.
3. Блоки кода (внутри \`\`\`), идентификаторы, имена параметров, названия типов, TL-схемы, URL и HTTP-методы НЕ переводи — оставляй как есть.
4. Термины (например: auth_key, msg_key, message key, salt, nonce, session, RPC, container, ack, layer, constructor, method, bot, channel, peer, update, gap, salt, init connection, Perfect Forward Secrecy и т.п.) НЕ переводи — оставляй в оригинальном написании. При ПЕРВОМ упоминании важного термина в пределах данного фрагмента добавляй сразу после него краткое пояснение на русском в скобках, например: "auth_key (авторизационный ключ — долговременный общий ключ клиента и сервера)".
5. Ссылки вида [текст](/path) или [текст](/path#anchor) сохраняй как есть (пути не меняй); текст ссылки переведи. Ссылки на внешние сайты (http/https) не меняй вовсе.
6. Заголовки переводи, но если заголовок состоит из термина — оставь термин и добавь пояснение, например: "## Time synchronization (синхронизация времени)".
7. Числа, формулы, таблицы с кодами ошибок и подобные данные не изменяй; описательные ячейки таблиц переводи.
8. Пиши естественным техническим русским языком, сохраняя тон документации.

ВЫВОД:
- Для каждого фрагмента прочитай исходный файл (поле "src") и запиши ПОЛНЫЙ перевод в файл из поля "dst" (создай его). Файл должен содержать ТОЛЬКО перевод фрагмента, без комментариев о переводе.
- Затем создай файл глоссария из поля "glossary": JSON-массив объектов {"term": "...", "meaning": "..."} для ключевых терминов, которые ты пояснил (10-30 записей; если терминов нет — пустой массив).
- В конце ответь одной строкой: DONE <количество обработанных фрагментов>.
`.trim();

const BATCH_RULES = `
Ты переводишь короткие описания из технической документации Telegram (TL-схема: конструкторы, методы, типы) с английского на русский.

ПРАВИЛА:
1. Прочитай JSON-файл из поля "src": это массив строк на английском.
2. Создай файл из поля "dst": JSON-ОБЪЕКТ, где каждый ключ — исходная строка ТОЧНО как в массиве (без изменений), а значение — её перевод на русский.
3. Переводи описательный текст; термины и идентификаторы (имена типов, методов, полей, коды, параметры) оставляй без перевода. Если строка целиком является идентификатором/кодом/формулой — скопируй её как есть.
4. Если после термина нужно пояснение, добавь его кратко в скобках. Перевод должен быть кратким и точным.
5. В результирующем объекте ДОЛЖНЫ быть ВСЕ строки из входного массива, ключи должны совпадать побайтово. Результат — корректный JSON в кодировке UTF-8.
6. Проверь свой файл (например: прочитай его и убедись, что это валидный JSON с нужным числом ключей).
7. В конце ответь одной строкой: DONE <число ключей>.
`.trim();

async function main() {
  await mkdir(path.join(EX, 'tasks'), { recursive: true });
  const tasks = JSON.parse(await readFile(path.join(EX, 'tasks.json'), 'utf8'));
  for (const t of tasks) {
    if (t.type === 'prose') {
      const obj = {
        task: 'translate-prose',
        instructions: PROSE_RULES,
        chunks: t.files.map((f) => ({
          src: path.join(EX, f.chunk),
          dst: path.join(ROOT, '.translated', f.chunk.replace('chunks/', 'chunks/')),
          page: f.name,
        })),
        glossary: path.join(EX, 'glossary', t.id + '.json'),
      };
      await writeFile(path.join(EX, 'tasks', t.id + '.json'), JSON.stringify(obj, null, 1));
    } else {
      const obj = {
        task: 'translate-batch',
        instructions: BATCH_RULES,
        src: path.join(EX, t.file),
        dst: path.join(EX, 'batch-out', t.id.replace('ref-', '') + '.json'),
        expected: t.count,
      };
      await writeFile(path.join(EX, 'tasks', t.id + '.json'), JSON.stringify(obj, null, 1));
    }
  }
  console.log('task files written:', tasks.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
