// Prints the full site structure (all pages grouped by section) as markdown,
// for embedding into README.md. Run after npm run generate.
// Usage: npm run print-structure
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const CRAWLED = path.resolve("crawled");

type FrontMatter = Record<string, string>;
function parseFm(text: string): FrontMatter {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm: FrontMatter = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, "");
  }
  return fm;
}

async function* walk(dir: string): AsyncGenerator<string> {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith("_") || e.name === "css") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith(".md")) yield p;
  }
}

type Page = { section: string; title: string; url: string };
const pages: Page[] = [];
for await (const f of walk(CRAWLED)) {
  const fm = parseFm(await readFile(f, "utf8"));
  if (!fm.title) continue;
  const rel =
    "/" + path.relative(CRAWLED, f).replace(/\.md$/, "").replace(/\\/g, "/");
  // Directory indexes already end in "/" — printing `${url}/` would double it.
  const url =
    rel === "/index"
      ? "/"
      : rel.endsWith("/index")
        ? rel.slice(0, -6) + "/"
        : rel + "/";
  pages.push({ url, title: fm.title, section: fm.section || "other" });
}
pages.sort((a, b) => a.url.localeCompare(b.url));

const groups = {
  mtproto: pages.filter((p) => p.url.startsWith("/mtproto")),
  api: pages.filter((p) => p.section === "api"),
  bots: pages.filter((p) => p.section === "bots"),
  schema: pages.filter(
    (p) =>
      p.section === "schema" ||
      p.url.startsWith("/schema") ||
      ["/methods/", "/constructors/", "/types/"].includes(p.url),
  ),
  ref: pages.filter((p) => p.section === "ref"),
  blog: pages.filter((p) => p.section === "blog"),
  faq: pages.filter((p) => p.section === "faq"),
  apps: pages.filter((p) => p.section === "apps"),
  contests: pages.filter((p) => p.section === "contests"),
  devtools: pages.filter((p) => p.section === "devtools"),
  policies: pages.filter((p) => p.section === "policies"),
  other: pages.filter((p) => p.section === "other"),
  site: pages.filter((p) => p.section === "site"),
};

const list = (title: string, items: Page[]): void => {
  console.log(`- **${title}** — ${items.length} pages:`);
  for (const p of items) console.log(`  - \`${p.url}\` — ${p.title}`);
};

list("MTProto Protocol", groups.mtproto);
list("Telegram API", groups.api);
list("Bot API", groups.bots);
list("Schema (overview & indexes)", groups.schema);
const c = groups.ref.filter((p) => p.url.startsWith("/constructor")).length;
const m = groups.ref.filter((p) => p.url.startsWith("/method")).length;
const t = groups.ref.filter((p) => p.url.startsWith("/type")).length;
console.log(
  `- **Schema reference** — ${groups.ref.length} pages: ${c} constructors (\`/constructor/<name>/\`), ${m} methods (\`/method/<name>/\`), ${t} types (\`/type/<name>/\`).`,
);
list("FAQ", groups.faq);
list("Blog", groups.blog);
list("Apps & Clients", groups.apps);
list("Contests", groups.contests);
list("Developer Tools", groups.devtools);
list("Policies", groups.policies);
list("Other", groups.other);
list("Pages of the mirror itself", groups.site);
