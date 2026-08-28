#!/usr/bin/env node
// Инвентаризация внешних ссылок собранного сайта: какие страницы, на которые
// ссылается зеркало, находятся вне зеркала — и на каких его страницах эти
// ссылки стоят.
//
// Считается только тело статьи: служебная обвязка (шапка, меню, «Original: …»
// в .source-note, футер «A mirror of core.telegram.org») ссылается на оригинал
// на каждой из ~3200 страниц и к содержанию отношения не имеет.
//
//   node tools/extlinks.ts            → external-links.md + external-links.json
//   node tools/extlinks.ts --out DIR  → то же самое в другом каталоге
import fs from "node:fs";
import path from "node:path";

type LinkHit = { frag: string; text: string };
type Target = {
  host: string;
  malformed?: boolean;
  mirroredAs?: string | null;
  pages: Map<string, LinkHit[]>;
  path: string;
  query: string;
  refs: number;
  schemes: Set<string>;
  url: string;
  why?: string[];
};
type Group = { title: string; items: Target[] };

const ROOT = "docs";
const argv = process.argv.slice(2);
const outDir = (() => {
  const i = argv.indexOf("--out");
  return i >= 0 && argv[i + 1] ? argv[i + 1] : ".";
})();

// ---- страницы зеркала ----
const files: string[] = [];
(function walk(dir: string): void {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "pagefind") continue; // индекс поиска, не страницы
      walk(p);
    } else if (e.name.endsWith(".html")) files.push(p);
  }
})(ROOT);

const urlOf = (file: string): string => {
  let u = "/" + path.relative(ROOT, file).replace(/\\/g, "/");
  if (u.endsWith("/index.html")) u = u.slice(0, -"/index.html".length) + "/";
  return u === "/index.html" ? "/" : u;
};
// Путь зеркала → хост оригинала, с которого страница снята (ссылка «Original»
// внизу страницы). Хост важен: /api зеркало держит с core.telegram.org, и
// ссылка на telegram.org/api ведёт не туда — оригинал отдаёт по этому адресу
// свою главную. Сверка одних путей записала бы такую ссылку в «аномалии».
const mirrored = new Map<string, string | null>();
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const note = html.indexOf('<div class="source-note">');
  const src =
    note < 0 ? null : /href="(https?:\/\/[^"]+)"/.exec(html.slice(note));
  mirrored.set(
    urlOf(f).replace(/\/$/, ""),
    src ? new URL(src[1]).hostname.replace(/^www\./, "") : null,
  );
}

// ---- сбор ссылок ----
const A_RE = /<a\b([^>]*?)>([\s\S]*?)<\/a>/gi;
const HREF_RE = /\bhref\s*=\s*"([^"]*)"/i;
const unTag = (s: string): string =>
  s
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** ключ цели = host + path (+ query); фрагмент хранится отдельно */
const targets = new Map<string, Target>();

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const page = urlOf(file);
  const from = html.indexOf('<main class="content"');
  if (from < 0) continue;
  const to = html.indexOf('<div class="source-note">');
  const body = html.slice(from, to > from ? to : html.length);

  let m;
  while ((m = A_RE.exec(body))) {
    const href = (HREF_RE.exec(m[1]) || [])[1];
    if (!href) continue;
    const raw = href.trim().replace(/&amp;/g, "&");
    if (!/^https?:\/\//i.test(raw)) continue; // внутренние проверяет tools/verify.ts
    let u;
    try {
      u = new URL(raw);
    } catch {
      continue;
    }
    const pathname = decodeURIComponent(u.pathname).replace(/\/+$/, "");
    const key = u.hostname + pathname + (u.search || "");
    if (!targets.has(key)) {
      targets.set(key, {
        url: key,
        host: u.hostname,
        path: pathname || "/",
        query: u.search || "",
        schemes: new Set(),
        refs: 0,
        pages: new Map(), // страница зеркала → [{ frag, text }]
      });
    }
    const target = targets.get(key);
    if (!target) throw new Error(`failed to register link target: ${key}`);
    target.schemes.add(u.protocol.replace(":", ""));
    target.refs++;
    const hits = target.pages.get(page) ?? [];
    hits.push({ frag: u.hash || "", text: unTag(m[2]) });
    target.pages.set(page, hits);
  }
}

// ---- классификация ----
const TG_HOSTS = new Set([
  "core.telegram.org",
  "telegram.org",
  "www.telegram.org",
]);
const isAsset = (t: Target): boolean =>
  /^\/(file|img|cdn|static|js|css|favicon)(\/|$)/.test(t.path) ||
  t.path === "/apps" ||
  /\.(png|jpe?g|gif|svg|zip|tgz|tar|mp4|webm|json|txt|pdf|ico)$/i.test(t.path);

const groups: Record<string, Group> = {
  core: { title: "core.telegram.org — страницы вне зеркала", items: [] },
  tgorg: { title: "telegram.org — страницы вне зеркала", items: [] },
  layer: {
    title: "Версии страниц зеркала (`?layer=N`) — намеренно наружу",
    items: [],
  },
  asset: { title: "Файлы и медиа оригинала (не страницы)", items: [] },
  third: { title: "Сторонние сайты", items: [] },
  anomaly: {
    title: "АНОМАЛИИ: ссылка уходит наружу, хотя страница в зеркале есть",
    items: [],
  },
};

for (const t of targets.values()) {
  // цель, которую зеркало умеет отдать само (сравнение по пути — хосты
  // core.telegram.org и telegram.org делят одно пространство путей зеркала)
  // The mirror's own home page is not a copy of either upstream home page — it
  // is a page of this project — so a link to core.telegram.org/ or
  // telegram.org/ leaves the site by design and is no anomaly.
  t.mirroredAs =
    TG_HOSTS.has(t.host) &&
    !t.query &&
    t.path !== "/" &&
    mirrored.get(t.path) === t.host
      ? t.path + "/"
      : null;

  if (!TG_HOSTS.has(t.host)) groups.third.items.push(t);
  else if (t.mirroredAs) groups.anomaly.items.push(t);
  else if (t.query.includes("layer=")) groups.layer.items.push(t);
  else if (isAsset(t)) groups.asset.items.push(t);
  else if (t.host === "core.telegram.org") groups.core.items.push(t);
  else groups.tgorg.items.push(t);
}
// протокол-относительная ссылка оригинала, склеенная с чужим origin:
// https://telegram.org//core.telegram.org/api → цель на самом деле в зеркале
for (const t of [...groups.tgorg.items]) {
  const m = /^\/\/(core\.telegram\.org|telegram\.org)(\/.*)?$/.exec(t.path);
  if (!m) continue;
  const p = (m[2] || "").replace(/\/+$/, "");
  if (!mirrored.has(p)) continue;
  t.mirroredAs = p + "/";
  t.malformed = true;
  groups.tgorg.items.splice(groups.tgorg.items.indexOf(t), 1);
  groups.anomaly.items.push(t);
}

// ---- почему аномалия осталась внешней ----
// Якоря целевой страницы читаем прямо из собранного HTML: ссылка, чей `#…` в
// зеркале не существует, оставлена внешней намеренно (см. resolveAnchor в
// tools/extract.ts) — это не дефект локализации.
const idsCache = new Map<string, Set<string>>();
const idsOf = (sitePath: string): Set<string> => {
  const cached = idsCache.get(sitePath);
  if (cached) return cached;
  const file = path.join(ROOT, sitePath.replace(/^\//, ""), "index.html");
  const ids = new Set<string>();
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, "utf8");
    for (const m of html.matchAll(/\bid="([^"]+)"/g)) ids.add(m[1]);
  }
  idsCache.set(sitePath, ids);
  return ids;
};

for (const t of groups.anomaly.items) {
  if (!t.mirroredAs) continue;
  const why: string[] = [];
  const frags = new Set<string>();
  for (const hits of t.pages.values())
    for (const h of hits) if (h.frag) frags.add(h.frag.slice(1));
  const ids = idsOf(t.mirroredAs);
  const dead = [...frags].filter(
    (f) => !ids.has(f) && !ids.has(f.replace(/^q-/, "")),
  );
  const plain =
    t.refs -
    [...t.pages.values()]
      .flat()
      .filter((h) => h.frag && dead.includes(h.frag.slice(1))).length;

  if (t.malformed)
    why.push(
      "ДЕФЕКТ: `//host/path` из оригинала склеена с origin страницы (правило cross-page relative links в `tools/extract.ts` исключает `http(s):` и `#`, но не `//`)",
    );
  if (t.schemes.has("http"))
    why.push(
      "ДЕФЕКТ: локализация матчит только `https://core.telegram.org`, схема `http:` не переписывается",
    );
  if (t.host !== "core.telegram.org" && !t.malformed)
    why.push(
      "ДЕФЕКТ: по абсолютному URL локализуются только ссылки на `core.telegram.org`, а эта страница зазеркалена с `telegram.org`",
    );
  if (dead.length)
    why.push(
      `BY DESIGN: якоря ${dead.map((f) => "`#" + f + "`").join(" ")} в зеркале не существуют (оригинал их переименовал) → ссылка оставлена внешней`,
    );
  if (t.mirroredAs === "/")
    why.push(
      "СПОРНО: корень зеркала — собственная страница проекта, а не копия главной core.telegram.org",
    );
  if (!why.length && plain > 0) why.push("ДЕФЕКТ: причина не установлена");
  t.why = why;
}

const byRefs = (a: Target, b: Target): number =>
  b.refs - a.refs || a.url.localeCompare(b.url);
for (const g of Object.values(groups)) g.items.sort(byRefs);

// ---- вывод ----
const scheme = (t: Target): string =>
  t.schemes.has("http")
    ? t.schemes.size > 1
      ? "http+https"
      : "http"
    : "https";
const fullUrl = (t: Target): string =>
  `${t.schemes.has("https") ? "https" : "http"}://${t.url}`;

const entry = (t: Target): string => {
  const out: string[] = [];
  out.push(`#### ${fullUrl(t)}`);
  const flags: string[] = [];
  if (t.schemes.has("http")) flags.push("**схема `http:`**");
  if (t.mirroredAs) flags.push(`есть в зеркале: \`${t.mirroredAs}\``);
  if (t.malformed)
    flags.push(
      "**битый URL** (протокол-относительная ссылка склеена с origin страницы)",
    );
  out.push(
    `${t.refs} ссылок · ${t.pages.size} страниц${flags.length ? " · " + flags.join(" · ") : ""}`,
  );
  out.push("");
  if (t.why) for (const w of t.why) out.push(`> ${w}`);
  if (t.why && t.why.length) out.push("");
  for (const [page, hits] of [...t.pages].sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]),
  )) {
    const frags = [...new Set(hits.map((h) => h.frag).filter(Boolean))];
    const texts = [...new Set(hits.map((h) => h.text).filter(Boolean))].slice(
      0,
      4,
    );
    const detail = [
      frags.length ? frags.map((f) => `\`${f}\``).join(" ") : "",
      texts.length ? "«" + texts.join("», «") + "»" : "",
    ]
      .filter(Boolean)
      .join(" — ");
    out.push(
      `- \`${page}\`${hits.length > 1 ? ` ×${hits.length}` : ""}${detail ? " — " + detail : ""}`,
    );
  }
  out.push("");
  return out.join("\n");
};

const total = [...targets.values()].reduce((s, t) => s + t.refs, 0);
const md: string[] = [];
md.push("# Внешние ссылки зеркала\n");
md.push(
  `Сгенерировано \`tools/extlinks.ts\` по каталогу \`${ROOT}/\`: ${files.length} страниц, ` +
    `${targets.size} уникальных внешних адресов, ${total} ссылок.\n`,
);
md.push(
  "Учитывается только тело статьи. Служебная обвязка (ссылка «Original: …» внизу каждой страницы, " +
    "футер «A mirror of core.telegram.org», меню) не считается: она ведёт на оригинал по построению.\n",
);
md.push(
  "Внутренние ссылки здесь не разбираются — их полностью проверяет `npm run check` (`tools/verify.ts`).\n",
);
md.push("## Сводка\n");
md.push("| Категория | Адресов | Ссылок |");
md.push("|---|---:|---:|");
for (const g of Object.values(groups)) {
  md.push(
    `| ${g.title} | ${g.items.length} | ${g.items.reduce((s, t) => s + t.refs, 0)} |`,
  );
}
md.push("");

for (const [key, g] of Object.entries(groups)) {
  md.push(`## ${g.title}\n`);
  if (!g.items.length) {
    md.push("_нет_\n");
    continue;
  }
  if (key === "third") {
    const hosts = new Map<string, Target[]>();
    for (const t of g.items) {
      const items = hosts.get(t.host) ?? [];
      items.push(t);
      hosts.set(t.host, items);
    }
    for (const [host, items] of [...hosts].sort(
      (a, b) =>
        b[1].reduce((s, t) => s + t.refs, 0) -
        a[1].reduce((s, t) => s + t.refs, 0),
    )) {
      md.push(
        `### ${host} — ${items.length} адресов, ${items.reduce((s, t) => s + t.refs, 0)} ссылок\n`,
      );
      for (const t of items.sort(byRefs)) md.push(entry(t));
    }
    continue;
  }
  for (const t of g.items) md.push(entry(t));
}

const json = {
  generated_from: ROOT,
  pages_scanned: files.length,
  distinct_urls: targets.size,
  total_links: total,
  groups: Object.fromEntries(
    Object.entries(groups).map(([k, g]) => [
      k,
      {
        title: g.title,
        urls: g.items.length,
        refs: g.items.reduce((s, t) => s + t.refs, 0),
        items: g.items.map((t) => ({
          url: fullUrl(t),
          scheme: scheme(t),
          refs: t.refs,
          pages: t.pages.size,
          mirrored_as: t.mirroredAs,
          malformed: !!t.malformed,
          ...(t.why ? { why: t.why } : {}),
          occurrences: [...t.pages].map(([page, hits]) => ({
            page,
            count: hits.length,
            fragments: [...new Set(hits.map((h) => h.frag).filter(Boolean))],
            texts: [...new Set(hits.map((h) => h.text).filter(Boolean))],
          })),
        })),
      },
    ]),
  ),
};

fs.mkdirSync(outDir, { recursive: true });
const mdPath = path.join(outDir, "external-links.md");
const jsonPath = path.join(outDir, "external-links.json");
fs.writeFileSync(mdPath, md.join("\n"));
fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
console.log(
  `${mdPath}   ${targets.size} адресов / ${total} ссылок на ${files.length} страницах`,
);
console.log(`${jsonPath}`);
for (const g of Object.values(groups)) {
  console.log(
    `  ${String(g.items.length).padStart(4)} адресов, ${String(g.items.reduce((s, t) => s + t.refs, 0)).padStart(4)} ссылок — ${g.title}`,
  );
}
