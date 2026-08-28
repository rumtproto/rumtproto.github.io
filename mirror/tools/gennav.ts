// Generates crawled/_data/nav.json and site.json by scanning generated pages.
import { mkdir, readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(".");
const CRAWLED = path.join(ROOT, "crawled");

type FrontMatter = Record<string, string>;
type Page = { url: string; title: string; section: string; date: string };
type NavItem = Pick<Page, "url" | "title"> &
  Partial<Pick<Page, "section" | "date">>;

function parseFm(text: string): FrontMatter {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match?.[1]) return {};
  const fm: FrontMatter = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv?.[1] && kv[2] !== undefined) fm[kv[1]] = kv[2].replace(/^"|"$/g, "");
  }
  return fm;
}

async function* walk(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name === "css") continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(file);
    else if (entry.name.endsWith(".md")) yield file;
  }
}

const pages: Page[] = [];
for await (const file of walk(CRAWLED)) {
  const fm = parseFm(await readFile(file, "utf8"));
  if (!fm.title) continue;
  const rel =
    "/" + path.relative(CRAWLED, file).replace(/\.md$/, "").replace(/\\/g, "/");
  const url =
    rel === "/index"
      ? "/"
      : rel.endsWith("/index")
        ? rel.slice(0, -5)
        : rel + "/";
  pages.push({
    url,
    title: fm.title,
    section: fm.section || "other",
    date: fm.date || "",
  });
}

const byUrl = new Map(pages.map((page) => [page.url, page]));
const pick = (urls: string[]): Page[] =>
  urls.flatMap((url) => {
    const page = byUrl.get(url);
    return page ? [page] : [];
  });

const mtprotoCore = [
  "/mtproto/",
  "/mtproto/description/",
  "/mtproto/auth_key/",
  "/mtproto/samples-auth_key/",
  "/mtproto/security_guidelines/",
  "/mtproto/serialize/",
  "/mtproto/service_messages/",
  "/mtproto/service_messages_about_messages/",
  "/mtproto/transports/",
  "/mtproto/mtproto-transports/",
  "/mtproto/TL/",
  "/mtproto_v1/",
];
const mtprotoItems = pick(mtprotoCore);
for (const page of pages
  .filter(
    (item) =>
      item.url.startsWith("/mtproto/") && !mtprotoCore.includes(item.url),
  )
  .sort((a, b) => a.url.localeCompare(b.url))) {
  mtprotoItems.push(page);
}

const apiItems = pages
  .filter((page) => page.section === "api")
  .sort((a, b) =>
    a.url === "/api/" ? -1 : b.url === "/api/" ? 1 : a.url.localeCompare(b.url),
  );

const schemaCore = [
  "/schema/",
  "/schema/mtproto/",
  "/schema/end-to-end/",
  "/methods/",
  "/schema/json/",
  "/schema/mtproto-json/",
  "/schema/end-to-end-json/",
];
const schemaItems: NavItem[] = pick(schemaCore);
schemaItems.push(
  { url: "/constructor/", title: "Constructors (index)" },
  { url: "/method/", title: "Methods (index)" },
  { url: "/type/", title: "Types (index)" },
);

const botsItems = pages
  .filter((page) => page.section === "bots")
  .sort((a, b) =>
    a.url === "/bots/"
      ? -1
      : b.url === "/bots/"
        ? 1
        : a.url.localeCompare(b.url),
  );

const allBlogItems = pages
  .filter((page) => page.section === "blog")
  .sort((a, b) => b.date.localeCompare(a.date) || a.url.localeCompare(b.url));
const blogArchive = allBlogItems.find((page) => page.url === "/blog/");
const latestBlogPosts = allBlogItems
  .filter((page) => page.url !== "/blog/")
  .slice(0, 12)
  .map((page) => ({
    ...page,
    title: page.date ? `${page.title} (${page.date.slice(0, 7)})` : page.title,
  }));
const blogItems = [
  ...(blogArchive ? [{ ...blogArchive, title: "Blog index" }] : []),
  ...latestBlogPosts,
];

const faqLead = ["/faq/", "/techfaq/", "/techfaq/mtproto_v1/"];
const faqItems = [
  ...pick(faqLead),
  ...pages
    .filter((page) => page.section === "faq" && !faqLead.includes(page.url))
    .sort((a, b) => a.url.localeCompare(b.url)),
];
const sectionItems = (section: string, lead?: string): Page[] =>
  pages
    .filter((page) => page.section === section)
    .sort((a, b) =>
      lead && a.url === lead
        ? -1
        : lead && b.url === lead
          ? 1
          : a.url.localeCompare(b.url),
    );
const appsItems = sectionItems("apps", "/apps/");
const contestItems = sectionItems("contests", "/contests/");
const devtoolsItems = sectionItems("devtools", "/tdlib/");
const policyItems = sectionItems("policies", "/privacy/");
const otherItems = sectionItems("other", "/other/");

const sections = [
  { key: "api", title: "Telegram API", items: apiItems },
  { key: "bots", title: "Bot API", items: botsItems },
  { key: "mtproto", title: "MTProto Protocol", items: mtprotoItems },
  { key: "schema", title: "Schema", items: schemaItems },
  { key: "blog", title: "Blog", items: blogItems },
  { key: "faq", title: "FAQ", items: faqItems },
  { key: "apps", title: "Apps & Clients", items: appsItems },
  { key: "contests", title: "Contests", items: contestItems },
  { key: "devtools", title: "Developer Tools", items: devtoolsItems },
  { key: "policies", title: "Policies", items: policyItems },
  { key: "other", title: "Other", items: otherItems },
];

const dataDir = path.join(CRAWLED, "_data");
await mkdir(dataDir, { recursive: true });
await writeFile(
  path.join(dataDir, "nav.json"),
  JSON.stringify({ sections }, null, 1) + "\n",
);

const backupMeta = JSON.parse(
  await readFile(path.join(ROOT, "backup", "latest", "manifest.json"), "utf8"),
) as { date?: string };
if (!backupMeta.date || !/^\d{4}-\d{2}-\d{2}$/.test(backupMeta.date))
  throw new Error("backup/latest/manifest.json has no valid date");
await writeFile(
  path.join(dataDir, "site.json"),
  JSON.stringify({ backup_date: backupMeta.date }, null, 1) + "\n",
);

console.log(
  "nav: API",
  apiItems.length,
  "| Bot API",
  botsItems.length,
  "| MTProto",
  mtprotoItems.length,
  "| Schema",
  schemaItems.length,
  "| Blog",
  blogItems.length,
  "| FAQ",
  faqItems.length,
  "| Apps",
  appsItems.length,
  "| Contests",
  contestItems.length,
  "| Developer Tools",
  devtoolsItems.length,
  "| Policies",
  policyItems.length,
  "| Other",
  otherItems.length,
  "| backup",
  backupMeta.date,
);
