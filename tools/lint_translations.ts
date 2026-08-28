// @ts-nocheck
// Quality gate for the translation memory itself.
//
// The build already guarantees that a translated page keeps the mirror's block
// structure. It cannot, on its own, guarantee that a *sentence* was translated
// well — and a memory assembled at scale accumulates a recognisable set of
// mechanical defects: a link that lost its target, an emphasis marker that was
// dropped, a space that drifted in front of a comma, a fragment that was never
// translated at all.
//
// Each rule below describes one such defect exactly, so a report line is always
// actionable and never a matter of taste. Anything that is a judgement call
// (word choice, register) is deliberately out of scope here.

import { globSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const I18N = 'i18n';
const CYRILLIC = /[\u0400-\u04FF]/;

const read = (file) => JSON.parse(readFileSync(file, 'utf8'));

/** Every ordered link destination, in both Markdown and HTML spelling. */
function links(text) {
  const out = [];
  for (const m of text.matchAll(/\]\(([^)]*)\)/g)) out.push(m[1].split(/\s+"/)[0]);
  for (const m of text.matchAll(/<a\s[^>]*href="([^"]*)"/gi)) out.push(m[1]);
  return out;
}
const count = (text, re) => (text.match(re) || []).length;
const tags = (text) => (text.match(/<\/?([a-z][a-z0-9]*)\b/gi) || []).map((t) => t.toLowerCase()).sort();
const entities = (text) => (text.match(/&[a-z]+;|&#\d+;/gi) || []).sort();
const codeRuns = (text) => (text.match(/`[^`]*`/g) || []);
const htmlCode = (text) => (text.match(/<code>[\s\S]*?<\/code>/gi) || []);

// Words whose ё the corpus must not lose: the site writes ё everywhere else, so
// a bare е in these stems is an inconsistency a reader notices immediately.
const YO = [
  [/\bучетн/g, 'учётн'], [/\bеще\b/g, 'ещё'], [/\bеё\b/g, null],
  [/\bнее\b/g, 'неё'], [/\bсчет(?=[а-я]|\b)/g, 'счёт'], [/\bзачеркн/g, 'зачёркн'],
  [/\bподробнее\b/g, null], [/\bвсе же\b/g, null],
];

// Fingerprints of the two failure modes found during the full corpus audit:
// random grammatical Russian nouns substituted without regard to meaning, and
// English words mechanically rewritten in Cyrillic. These checks intentionally
// use a narrow reviewed vocabulary so ordinary technical Russian is not flagged.
const SALAD_WORDS = new Set('информация возможность обновление уведомление пользователь использование преимущество безопасность приватность интерфейс функция система организация действие результат проверка состояние изменение доступность дополнительно настройка параметр выполнение взаимодействие содержимое предложение сообщение публикация поддержка решение внимание устройство время операция аудитория текст сообщество разработка подписка управление приложение'.split(' '));
const PHONETIC_GARBAGE = new Set('аниматед баккгроундс десигн симилар ордер мултипле савед мену опен спекс мекханикс пермиссионс хоризонс ултимате унсенд форвардинг венуе схеет аццоунтс спеед тиместамп анноунце суггестион бровсер гифтс аниматионс соунд йоин техт листен коминг фрее субмит буилдинг тйпес нигхт виевер цаптионс шидгетс'.split(' '));
const TRANSLATABLE_LINK_LABELS = new Set([
  'Next page »', 'Back to main menu', 'Viewing Media', 'Sending Messages', 'Sending Media',
  'Sending Voice Messages', 'Choosing Emoji', 'Editing Message List', 'Group Chat Info page',
  'Getting started', 'message content', 'formatted text', 'text entities', 'profile photo',
  'Rich Messages', 'Web Login', 'Shared Media', 'Channel Stats', 'Recent Actions',
  'People Nearby', 'Live Location', 'Business Mode', 'Gift Marketplace', 'Source Code',
  'Passport Manual', 'passport manual', 'passport docs', 'HTML5 games', 'HTML5 mini apps',
  'HTML5 Mini Apps', 'AI composer »', 'Telegram Support Initiative',
]);
const russianWords = (text) => (String(text).toLowerCase().match(/[а-яё]+/g) || []);

const RULES = [
  {
    id: 'word-salad',
    what: 'a translation looks like placeholder noun salad rather than a sentence',
    targetOnly: true,
    check: (_en, ru) => {
      const words = russianWords(ru);
      const salad = words.filter((word) => SALAD_WORDS.has(word));
      if (words.length >= 4 && salad.length / words.length >= 0.55) {
        return `${salad.length}/${words.length} words match the placeholder vocabulary`;
      }
      if (/клиента сервера пользователя бота|параметр определяет значение настройки|\bтекст текст\b/i.test(ru)) {
        return 'known placeholder phrase';
      }
      return null;
    },
  },
  {
    id: 'phonetic-garbage',
    what: 'an English word was mechanically respelled in Cyrillic',
    targetOnly: true,
    check: (_en, ru) => {
      const match = russianWords(ru).find((word) => PHONETIC_GARBAGE.has(word));
      return match ? `suspicious transliteration «${match}»` : null;
    },
  },
  {
    id: 'foreign-script',
    what: 'Arabic-script prose survived in a Russian translation',
    targetOnly: true,
    check: (_en, ru) => {
      const match = /\p{Script=Arabic}+/u.exec(String(ru));
      return match ? `untranslated Arabic-script text «${match[0]}»` : null;
    },
  },
  {
    id: 'mixed-alphabet',
    what: 'a word accidentally combines Cyrillic and Latin letters',
    targetOnly: true,
    check: (_en, ru) => {
      const prose = String(ru).replace(/`[^`]*`|https?:\/\/\S+|<[^>]+>/g, ' ');
      const match = /[А-Яа-яЁё][A-Za-z]|[A-Za-z][А-Яа-яЁё]/.exec(prose);
      return match ? `mixed-alphabet token near «${match[0]}»` : null;
    },
  },
  {
    id: 'russian-quotes',
    what: 'a Russian opening quotation mark has an English closing mark',
    targetOnly: true,
    check: (_en, ru) => /«[^»\n]*”/.test(ru) ? '«…» quotation closes with ”' : null,
  },
  {
    id: 'link-targets',
    what: 'a link destination was changed, dropped or invented',
    // Russian word order legitimately moves a link inside the sentence, so the
    // *multiset* of destinations is compared, not their order. Losing, gaining
    // or retargeting one is never legitimate.
    check: (en, ru) => {
      const validMarkdownLinks = (text) => (text.match(/!?\[[^\]\n]+\]\([^)]*\)/g) || []).length;
      const sourceShapes = validMarkdownLinks(en); const targetShapes = validMarkdownLinks(ru);
      if (targetShapes < sourceShapes) return `valid Markdown links: ${sourceShapes} → ${targetShapes}`;
      const a = links(en).sort(); const b = links(ru).sort();
      if (a.join('\u0000') === b.join('\u0000')) return null;
      const missing = a.filter((href, i) => b.indexOf(href) === -1 || a.indexOf(href) !== i && b.filter((x) => x === href).length < a.filter((x) => x === href).length);
      const added = b.filter((href) => !a.includes(href));
      if (missing.length) return `link dropped or retargeted: ${[...new Set(missing)].slice(0, 2).join(', ')}`;
      if (added.length) return `link invented: ${[...new Set(added)].slice(0, 2).join(', ')}`;
      return `${a.length} link(s) in source, ${b.length} in translation`;
    },
  },
  {
    id: 'untranslated-link-label',
    what: 'a known user-facing English link label was left untranslated',
    check: (en, ru) => {
      const normalize = (label) => label.replace(/<[^>]+>|[*_`]/g, '').trim();
      const sourceLinks = [
        ...[...en.matchAll(/\[([^\]]+)\]\(([^)]*)\)/g)].map((match) => [normalize(match[1]), match[2]]),
        ...[...en.matchAll(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)].map((match) => [normalize(match[2]), match[1]]),
      ];
      const targetLinks = [
        ...[...ru.matchAll(/\[([^\]]+)\]\(([^)]*)\)/g)].map((match) => [normalize(match[1]), match[2]]),
        ...[...ru.matchAll(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)].map((match) => [normalize(match[2]), match[1]]),
      ];
      for (const [label, href] of sourceLinks) {
        if (TRANSLATABLE_LINK_LABELS.has(label) && targetLinks.some(([other, destination]) => other === label && destination === href)) {
          return `unchanged link label «${label}»`;
        }
      }
      return null;
    },
  },
  {
    id: 'emphasis',
    what: 'bold/italic markers do not pair up as in the source',
    check: (en, ru) => {
      const bold = [count(en, /\*\*/g), count(ru, /\*\*/g)];
      if (bold[0] !== bold[1]) return `** markers: ${bold[0]} → ${bold[1]}`;
      // An odd raw count can be an escaped literal `**` inside a code example.
      // It is not a defect when the source has exactly the same marker shape.
      if (bold[0] % 2 === 0 && bold[1] % 2 !== 0) return 'unbalanced ** markers';
      return null;
    },
  },
  {
    id: 'inline-code',
    what: 'inline code from the source is missing or was altered in the translation',
    // A translator may legitimately *add* a code run when glossing a term
    // (`inline query` — …). Losing or rewriting one is always a defect: it is an
    // identifier the reader will type.
    // An illustrative run made only of words and digits (`Monday 00:00-Monday
    // 01:00`) is prose in a code font and may be translated; a run carrying an
    // identifier, an operator or a call is something the reader will type.
    check: (en, ru) => {
      const literal = (run) => {
        const value = run.replace(/^`|`$/g, '');
        // Weekday ranges are human-readable examples in a code font, not input
        // tokens. Translating their labels and typographic dash is legitimate.
        if (/^(?:(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s+\d\d:\d\d)(?:-(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s+\d\d:\d\d)?$/.test(value)) return false;
        return /[_(){}\[\]<>=+*\/\\|$#@;:!?%^~&]|\b[a-z]+[A-Z]/.test(value);
      };
      for (const run of new Set(codeRuns(en))) if (literal(run) && !ru.includes(run)) return `lost inline code ${run}`;
      for (const run of new Set(htmlCode(en))) if (literal(run) && !ru.includes(run)) return `lost <code> run ${run}`;
      return null;
    },
  },
  {
    id: 'tags',
    what: 'an HTML tag was lost, or a literal "<" became one',
    // Adding <code> or <em> while glossing a term is legitimate. Losing a tag
    // the source had is not — and neither is turning `&lt;path>` into `<path>`,
    // which makes the browser swallow the text as an unknown element.
    check: (en, ru) => {
      const source = tags(en); const target = tags(ru);
      const spare = [...target];
      for (const tag of source) {
        const at = spare.indexOf(tag);
        if (at === -1) return `lost ${tag}>`;
        spare.splice(at, 1);
      }
      const ALLOWED = new Set(['<code', '</code', '<em', '</em', '<strong', '</strong', '<br', '<a', '</a', '<span', '</span']);
      const invented = spare.find((tag) => !ALLOWED.has(tag));
      return invented ? `literal "<" parsed as a tag: ${invented}>` : null;
    },
  },
  {
    id: 'escaping',
    what: 'a literal "<" was left raw where the source escapes it',
    // Rewording `key length &lt; 256` as "длина ключа меньше 256" is correct
    // translation, not a defect. What matters is a raw "<" reaching the browser.
    check: (en, ru) => {
      const outside = ru.replace(/`[^`]*`/g, ' ');
      const known = new Set((en.match(/<\/?([a-zA-Z][a-zA-Z0-9]*)/g) || []).map((t) => t.replace(/[<\/]/g, '').toLowerCase()));
      for (const tag of ['a', 'code', 'em', 'strong', 'br', 'span', 'b', 'i', 'mark', 'img', 'sub', 'sup']) known.add(tag);
      for (const m of outside.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)/g)) if (!known.has(m[2].toLowerCase())) return `raw "<${m[2]}"`;
      return /<(?![a-zA-Z/!])/.test(outside) ? 'raw "<" outside a tag' : null;
    },
  },
  {
    id: 'brackets',
    what: 'brackets or parentheses are unbalanced',
    // Upstream itself writes list markers as `1)` and `**a**)`, and sometimes
    // simply forgets a parenthesis. Only an imbalance *introduced* by the
    // translation is a defect — closing one upstream left open is an improvement.
    check: (en, ru) => {
      for (const [open, close] of [['[', ']'], ['(', ')']]) {
        const skew = (s) => count(s, new RegExp(`\\${open}`, 'g')) - count(s, new RegExp(`\\${close}`, 'g'));
        if (skew(ru) !== skew(en) && skew(ru) !== 0) return `"${open}${close}" balance ${skew(en)} → ${skew(ru)}`;
      }
      return null;
    },
  },
  {
    id: 'spacing',
    what: 'a space drifted in front of punctuation or doubled inside the sentence',
    check: (en, ru) => {
      // Only report what the source did not already contain.
      const bad = [
        [/\s+[,;:!?](?=\s|$)/, 'space before punctuation'],
        [/\(\s/, 'space after "("'],
        [/\s\)/, 'space before ")"'],
        [/[^\s\\]\s{2,}[^\s]/, 'double space inside the sentence'],
        [/\s+\.(?=\s|$)/, 'space before "."'],
      ];
      for (const [re, label] of bad) {
        if (re.test(ru) && !re.test(en)) return label;
      }
      return null;
    },
  },
  {
    id: 'edges',
    what: 'leading or trailing whitespace differs from the source',
    check: (en, ru) => {
      const lead = (s) => (/^\s*/.exec(s) || [''])[0];
      const tail = (s) => (/\s*$/.exec(s) || [''])[0];
      if (lead(en) !== lead(ru)) return 'leading whitespace differs';
      if (tail(en) !== tail(ru)) return 'trailing whitespace differs';
      return null;
    },
  },
  {
    id: 'line-breaks',
    what: 'a hard line break was lost, added, or its two-space marker drifted',
    check: (en, ru) => {
      const a = count(en, /\n/g); const b = count(ru, /\n/g);
      if (a !== b) return `${a} newline(s) → ${b}`;
      // A Markdown hard break is exactly two trailing spaces. Three is invisible
      // in the source and produces a stray space in the rendered sentence.
      const shape = (s) => (s.match(/[ \t]*\n/g) || []).map((m) => m.length - 1).join(',');
      const x = shape(en); const y = shape(ru);
      return x === y ? null : `line-break padding: [${x}] → [${y}]`;
    },
  },
  {
    id: 'untranslated',
    what: 'the value carries no Russian at all although the source is prose',
    check: (en, ru) => {
      if (CYRILLIC.test(ru)) return null;
      // A few source segments are code examples rather than prose. The
      // translation pass wraps them in code spans and removes Markdown escaping,
      // but intentionally leaves the payload byte-for-byte equivalent.
      const codeEquivalent = (s) => s.replace(/`/g, '').replace(/\\_/g, '_').replace(/[ \t]+$/gm, '').trim();
      if (codeEquivalent(en) === codeEquivalent(ru)) return null;
      // Identifiers, code and link labels are not prose: a segment made only of
      // them is correctly identical in both languages.
      const prose = en
        .replace(/`[^`]*`/g, ' ')
        .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/<a\s[^>]*>[\s\S]*?<\/a>/gi, ' ')
        .replace(/<code>[\s\S]*?<\/code>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z]+;/g, ' ')
        .replace(/\b[A-Za-z_][\w.]*[._][\w.]*\b/g, ' ')
        .replace(/\b[a-z]+[A-Z]\w*\b/g, ' ');
      const words = prose.match(/\b[A-Za-z]{3,}\b/g) || [];
      return words.length >= 3 ? 'no Cyrillic in the translation' : null;
    },
  },
  {
    id: 'doubled-word',
    what: 'the same Russian word occurs twice in a row',
    check: (en, ru) => {
      const m = /\b([А-Яа-яЁё]{3,})\s+\1\b/i.exec(ru);
      return m ? `"${m[1]} ${m[1]}"` : null;
    },
  },
  {
    id: 'yo',
    what: 'ё was lost in a word the rest of the site spells with ё',
    check: (en, ru) => {
      for (const [re, fix] of YO) {
        if (fix && re.test(ru)) return `${(ru.match(re) || [])[0]} → ${fix}…`;
      }
      return null;
    },
  },
  {
    id: 'latin-leftover',
    what: 'an English function word survived inside a Russian sentence',
    check: (en, ru) => {
      if (!CYRILLIC.test(ru)) return null;
      const stripped = ru
        .replace(/`[^`]*`/g, ' ')
        .replace(/<code>[\s\S]*?<\/code>/gi, ' ')
        .replace(/<em>[A-Za-z_][\w.]*<\/em>/gi, ' ')
        .replace(/\*\*[A-Za-z_][A-Za-z0-9_.\\]*\*\*/g, ' ')
        .replace(/\b[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)+\b/g, ' ')
        .replace(/(?<!\\)_[A-Za-z@][A-Za-z0-9_.@\\]*(?<!\\)_/g, ' ')
        .replace(/«[A-Za-z_][A-Za-z0-9_]*»/g, ' ')
        // Exact product, UI, publication and artwork names intentionally retain
        // English function words. Removing only these known names keeps mixed
        // machine output visible to the rule.
        .replace(/(?:Telegram for Android|telegram for android|Both users and bots can use this method|Only bots can use this method|Log in with Telegram|Telegram Bot API for PHP|Telegram Bot API helper for Golang|Telegram\.BotAPI for NET|Sign in With Google|Sign in with Apple|Telegram Cloud Storage for Bots and Mini Apps|Know Your Meme|If This Then That|Dungeons and Dragons|Certificate Signing Request)/g, ' ')
        .replace(/\[[^\]]+\]\(https:\/\/t\.me\/addstickers\/[^)]*\)/g, ' ')
        .replace(/\[[^\]]+\]\(https:\/\/github\.com\/[^)]*\)/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\]\([^)]*\)/g, ' ').replace(/https?:\/\/\S+/g, ' ');
      const m = /(?:^|[\s(«"'])(and|the|with|from|your|you|this|that|will|can|are|for|about|more|other|when|which|their|they|been|have|has|field|parameter|methods?|item|format|specify|changes|represented|stream|partial|reply|specific|creation|managed|request|links|empty|ephemeral|delete|different)(?=[\s.,;:!?)»"']|$)/i.exec(stripped);
      return m ? `English word "${m[1]}"` : null;
    },
  },
  {
    id: 'placeholders',
    what: 'a printf-style placeholder was altered',
    check: (en, ru) => {
      const a = (en.match(/%[sd%]|%\d+\$[sd]/g) || []).sort().join(',');
      const b = (ru.match(/%[sd%]|%\d+\$[sd]/g) || []).sort().join(',');
      return a === b ? null : `placeholders: [${a}] → [${b}]`;
    },
  },
  {
    id: 'digits',
    what: 'a significant number from the source is missing from the translation',
    // Small numbers are routinely and correctly spelled out in Russian ("more
    // than 3 lines" → "длиннее трёх строк"), so only values that a reader would
    // copy — limits, sizes, versions, years — are required to survive.
    check: (en, ru) => {
      // Russian uses a non-breaking/ordinary space for digit grouping and a
      // comma for decimals. Canonicalize both locales before comparison while
      // retaining the distinction between 1,000 and 1.5.
      const significant = (s) => {
        // Russian commonly spells the K suffix as «тыс.».
        const expanded = s.replace(/(\d+(?:[.,]\d+)?)\s*тыс\.?/gi, '$1K');
        return (expanded.match(/\d{1,3}(?:[\u00A0\u202F '.,]\d{3})+(?:[.,]\d+)?(?:[Kk](?![A-Za-z]))?|(?<![\d.,])\d+[.,]\d+(?![.,]\d)(?:[Kk](?![A-Za-z]))?|\d+(?:[Kk](?![A-Za-z]))?/g) || [])
        // Separators encode either grouping or the locale-specific decimal mark.
        // For a presence check, the stable information is the digit sequence.
        // The conventional K suffix contributes three zeroes ($200K = $200000).
        .map((raw) => ({ raw, value: raw.replace(/\D/g, '') + (/[Kk]$/.test(raw) ? '000' : '') }))
        .filter(({ raw, value }) => /[.,]/.test(raw) || value.length >= 3)
        .map(({ value }) => value)
        .sort();
      };
      const a = significant(en); const b = new Set(significant(ru));
      for (const n of a) if (!b.has(n)) return `number ${n} is missing`;
      return null;
    },
  },
];

const files = [
  path.join(I18N, 'segments.json'),
  ...globSync('*.json', { cwd: path.join(I18N, 'pages') }).map((n) => path.join(I18N, 'pages', n)),
];

const findings = [];
let pairs = 0;
for (const file of files) {
  const map = read(file);
  for (const [en, ru] of Object.entries(map)) {
    if (typeof ru !== 'string') continue;
    pairs += 1;
    for (const rule of RULES) {
      let detail = null;
      try { detail = rule.check(en, ru); } catch { detail = null; }
      if (detail) findings.push({ rule: rule.id, file: path.relative('.', file), en, ru, detail });
    }
  }
}

// Auxiliary stores have no English-keyed pair shape, but their strings are also
// visible in navigation, breadcrumbs, metadata and translator notes. Run every
// target-only semantic check over them recursively so placeholder prose cannot
// hide outside segments.json.
function stringLeaves(value, prefix = '') {
  if (typeof value === 'string') return [[prefix, value]];
  if (Array.isArray(value)) return value.flatMap((item, index) => stringLeaves(item, `${prefix}/${index}`));
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([key, item]) => stringLeaves(item, `${prefix}/${key}`));
  return [];
}
for (const name of ['media.json', 'nav.json', 'frontmatter.json', 'terms.json', 'crumbs.json', 'annotations.json']) {
  const file = path.join(I18N, name);
  for (const [location, ru] of stringLeaves(read(file))) {
    pairs += 1;
    for (const rule of RULES.filter((entry) => entry.targetOnly)) {
      let detail = null;
      try { detail = rule.check(location, ru); } catch { detail = null; }
      if (detail) findings.push({ rule: rule.id, file: path.relative('.', file), en: location, ru, detail });
    }
  }
}

const byRule = new Map();
for (const f of findings) byRule.set(f.rule, (byRule.get(f.rule) || 0) + 1);

writeFileSync(path.join(I18N, 'lint-report.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  pairs,
  total: findings.length,
  byRule: Object.fromEntries([...byRule].sort((a, b) => b[1] - a[1])),
  findings,
}, null, 1) + '\n');

console.log(`[lint] ${pairs} translation pair(s) checked`);
for (const [rule, n] of [...byRule].sort((a, b) => b[1] - a[1])) {
  const meta = RULES.find((r) => r.id === rule);
  console.log(`  ${String(n).padStart(6)}  ${rule.padEnd(16)} ${meta.what}`);
}
console.log(`[lint] ${findings.length} finding(s); full report in i18n/lint-report.json`);
if (process.argv.includes('--strict') && findings.length) process.exit(1);
