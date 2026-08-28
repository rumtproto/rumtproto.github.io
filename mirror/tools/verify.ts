// Site self-check: validates generated crawled/ content and rendered docs/.
// Called automatically by npm run build.
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(".");
const CRAWLED = path.join(ROOT, "crawled");
const DOCS = path.join(ROOT, "docs");

let failures = 0;
const fail = (msg: string): void => {
  failures++;
  console.error("FAIL:", msg);
};
const ok = (msg: string): void => console.log("ok  :", msg);

// A link is written percent-encoded ("/type/Vector%20t/"), the file on disk is
// not ("crawled/type/Vector t.md"): compare in the decoded form, per segment, so
// "/type/%23" (the TL "nat" type) resolves too.
const decodePath = (p: string): string =>
  p
    .split("/")
    .map((s) => {
      try {
        return decodeURIComponent(s);
      } catch {
        return s;
      }
    })
    .join("/");

async function walk(dir: string, ext?: string): Promise<string[]> {
  const out: string[] = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (
      e.name.startsWith("_") ||
      e.name === "css" ||
      e.name === "favicons" ||
      e.name === "pagefind"
    )
      continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p, ext)));
    else if (!ext || e.name.endsWith(ext)) out.push(p);
  }
  return out;
}

const exists = (p: string): Promise<boolean> =>
  stat(p)
    .then(() => true)
    .catch(() => false);

// ---- src link graph ------------------------------------------------------
const mdFiles = await walk(CRAWLED, ".md");

// Guard the complete navigation taxonomy and every section landing page.
const navData = JSON.parse(
  await readFile(path.join(CRAWLED, "_data", "nav.json"), "utf8"),
) as {
  sections: Array<{
    key: string;
    title: string;
    items: Array<{ url: string; title: string }>;
  }>;
};
const expectedTopNavigation = [
  ["/api/", "API"],
  ["/bots/", "Bot API"],
  ["/mtproto/", "MTProto"],
  ["/schema/", "Schema"],
  ["/blog/", "Blog"],
  ["/faq/", "FAQ"],
  ["/apps/", "Apps"],
  ["/contests/", "Contests"],
  ["/tdlib/", "Dev Tools"],
  ["/privacy/", "Policies"],
  ["/other/", "Other"],
] as const;
const expectedAdditionalSections: Record<string, number> = {
  apps: 3,
  contests: 29,
  devtools: 22,
  policies: 21,
  other: 14,
};
let sectionBad = 0;
for (const [key, count] of Object.entries(expectedAdditionalSections)) {
  const actual = navData.sections.find((section) => section.key === key)?.items
    .length;
  if (actual !== count) {
    sectionBad++;
    fail(`section ${key} has ${actual ?? 0} pages, expected ${count}`);
  }
}
const expectedSectionLeads: Record<string, string> = {
  api: "/api/",
  bots: "/bots/",
  mtproto: "/mtproto/",
  schema: "/schema/",
  blog: "/blog/",
  faq: "/faq/",
  apps: "/apps/",
  contests: "/contests/",
  devtools: "/tdlib/",
  policies: "/privacy/",
  other: "/other/",
};
for (const [key, lead] of Object.entries(expectedSectionLeads)) {
  const first = navData.sections.find((section) => section.key === key)
    ?.items[0]?.url;
  if (first !== lead) {
    sectionBad++;
    fail(`section ${key} starts with ${first ?? "nothing"}, expected ${lead}`);
  }
}
const contestUrls = new Set(
  navData.sections
    .find((section) => section.key === "contests")
    ?.items.map((item) => item.url) ?? [],
);
const requiredContestUrls = [
  "/contests/",
  "/contest300K/",
  "/blog/bb-contest-extension/",
  "/blog/bb-results/",
  "/blog/blackberry-contest/",
  "/blog/botprize/",
  "/blog/botprize1/",
  "/blog/cryptocontest-ends/",
  "/blog/cryptocontest/",
  "/blog/first-IV-contest/",
  "/blog/instant-view-contest-200K/",
  "/blog/telegram-x/",
  "/blog/winter-contest-ends/",
];
if (
  [...contestUrls].filter((url) => url.startsWith("/blackberry/")).length !==
    16 ||
  requiredContestUrls.some((url) => !contestUrls.has(url))
) {
  sectionBad++;
  fail(
    "Contests does not contain every BlackBerry and historical contest page",
  );
}
if (!sectionBad) ok("all 11 sections have the expected taxonomy and lead page");

// Every link the mirror emits, from both syntaxes: markdown `](/path#frag)` and
// the raw HTML `href="/path#frag"` that survives inside tables and TL-schema
// blocks. The raw-HTML half used to go completely unchecked.
const LINK_RES = [/\]\((\/[^)\s]*)\)/g, /<a\b[^>]*?href="(\/[^"]*)"/g];

// The same two syntaxes, document-relative. These resolve against the URL of the
// page holding them, and on this site that URL is a directory: `href="TL"` on
// /mtproto/TL-formal/ means /mtproto/TL-formal/TL, not the /mtproto/TL it means
// upstream (where the page has no trailing slash). Checking only the absolute
// half is how a batch of such 404s, and the `#/` entry of the type index, stayed
// invisible here for as long as they did. The leading group separates a link
// from an image the same way tools/extract.ts does.
const REL_RES = [/(!\[[^\]]*\]|\])\(([^)\s]+)\)/g, /<a\b[^>]*?href="([^"]+)"/g];
const ABSOLUTE = /^(?:[a-zA-Z][a-zA-Z0-9+.-]*:|\/\/|\/|#)/;
const RELBASE = "https://relative.invalid";

// Links into the page's own headings. They point at no page, so nothing above
// looks at them — and a table of contents made of them is exactly as broken as
// any other dead link if the ids drifted (the FAQ had 21 such).
const SAME_RES = [/\]\((#[^)\s]+)\)/g, /<a\b[^>]*?href="(#[^"]+)"/g];

// Markdown code is text, not markup: `<a href="#target">` in the prose of
// /constructor/pageBlockAnchor/ shows what that block renders as, and no such
// anchor exists (nor should). Fenced blocks and inline spans are masked before
// links are collected. The raw-HTML <pre class="page_scheme"> listings are NOT
// markdown code and stay untouched — their 11 607 schema links are real links.
// A fence closes only on a run of backticks at least as long as the opening one
// (CommonMark): the Bot API samples are ````-fenced precisely because they
// contain ``` lines of their own, and pairing every ``` would unmask half of
// such a block — and with it, links that are only example text.
const stripCode = (md: string): string => {
  const out: string[] = [];
  let fence = 0;
  for (const line of md.split("\n")) {
    const m = /^\s*(`{3,})/.exec(line);
    if (fence) {
      if (m && m[1].length >= fence) fence = 0;
      out.push("");
      continue;
    }
    if (m) {
      fence = m[1].length;
      out.push("");
      continue;
    }
    out.push(line);
  }
  // Inline spans are paired within a line. Across the whole document one stray
  // backtick in prose shifts every pair after it, and the mask then covers the
  // wrong halves — which is how `<a href="#...">`, written as an example of the
  // Bot API's HTML mode, came back out as a link to check.
  return out.map((l) => l.replace(/(`+)[^\n]*?\1/g, "")).join("\n");
};

// Where the page ends up on the site — the base every relative link is measured
// against. `permalink` in the front matter wins (crawled/404.md is served as
// /404.html, not /404/).
const docUrl = (file: string, frontMatter: string): string => {
  const pm = frontMatter.match(/^permalink:\s*(\S+)\s*$/m);
  if (pm) return pm[1];
  const rel =
    "/" + path.relative(CRAWLED, file).replace(/\\/g, "/").replace(/\.md$/, "");
  return rel === "/index" ? "/" : rel.replace(/\/index$/, "") + "/";
};

// The five machine-readable endpoints are data, not prose: whatever looks like a
// link inside them belongs to the document and is deliberately left untouched.
const DATA_PAGES = new Set(
  [
    "/schema/json",
    "/schema/mtproto-json",
    "/schema/end-to-end-json",
    "/api/config.json",
    "/api/errors.json",
  ].map((p) => path.join(CRAWLED, p.slice(1) + ".md")),
);

const links = []; // { file, url, target, anchor, relative, samePage }
let relative = 0;
let samePage = 0;
for (const f of mdFiles) {
  if (DATA_PAGES.has(f)) continue;
  const text = await readFile(f, "utf8");
  const hasFm = text.startsWith("---\n");
  const body = stripCode(
    hasFm ? text.slice(text.indexOf("\n---\n", 3) + 5) : text,
  );
  const file = path.relative(CRAWLED, f);
  for (const re of LINK_RES) {
    for (const m of body.matchAll(re)) {
      const [target, anchor] = m[1].split("#");
      links.push({
        file,
        url: m[1],
        target: decodePath(target).replace(/\/+$/, ""),
        anchor,
      });
    }
  }
  const own = docUrl(f, hasFm ? text.slice(4, text.indexOf("\n---\n", 3)) : "");
  const base = RELBASE + own;
  for (const re of SAME_RES) {
    for (const m of body.matchAll(re)) {
      samePage++;
      links.push({
        file,
        url: m[1],
        target: own.replace(/\/+$/, ""),
        anchor: decodeURIComponent(m[1].slice(1)),
        samePage: true,
      });
    }
  }
  for (const re of REL_RES) {
    for (const m of body.matchAll(re)) {
      const raw = m[2] ?? m[1];
      if (m[2] !== undefined && m[1][0] === "!") continue; // an image, not a link
      if (ABSOLUTE.test(raw)) continue; // collected by LINK_RES above
      let u;
      try {
        u = new URL(raw, base);
      } catch {
        continue;
      }
      if (u.origin !== RELBASE) continue;
      relative++;
      links.push({
        file,
        url: raw,
        target: decodePath(u.pathname).replace(/\/+$/, ""),
        anchor: u.hash.slice(1) || undefined,
        relative: true,
      });
    }
  }
}

let broken = 0;
for (const l of links) {
  if (l.samePage) continue; // the page holding the link is the page it names
  const base = path.join(CRAWLED, l.target);
  if (await exists(base + ".md")) continue;
  if (await exists(path.join(base, "index.md"))) continue;
  broken++;
  if (broken <= 10)
    fail(
      `broken link ${l.url} in ${l.file}${l.relative ? ` (relative, resolves to ${l.target})` : ""}`,
    );
}
const localLinkCount = links.length - samePage;
if (localLinkCount !== 95580)
  fail(`local link inventory changed: ${localLinkCount}, expected 95580`);
if (!broken && localLinkCount === 95580)
  ok(
    `local links: ${localLinkCount} (markdown + raw HTML; ${relative} document-relative), all resolve`,
  );

// ---- built pages ---------------------------------------------------------
const pages = (await walk(DOCS)).filter((f) => f.endsWith(".html"));
const idsByUrl = new Map();
let h1bad = 0;
let metaBad = 0;
let urlBad = 0;
let duplicateIdBad = 0;
let securityBad = 0;
let jsonLdBad = 0;
let pagefindBad = 0;
let emptyParagraphBad = 0;
let mediaParagraphBad = 0;
let navigationBad = 0;
let localMediaBad = 0;
let unnamedLinkBad = 0;
let headingOrderBad = 0;
let imageAltBad = 0;
for (const f of pages) {
  const h = await readFile(f, "utf8");
  const rel = path.relative(DOCS, f);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) {
    h1bad++;
    if (h1bad <= 5) fail(`h1 count != 1 in ${rel}`);
  }
  if (
    !h.includes('class="skip-link"') ||
    !h.includes('rel="canonical"') ||
    !h.includes('<html lang="en">') ||
    !h.includes('http-equiv="Content-Security-Policy"') ||
    !h.includes('name="referrer"') ||
    !/<a class="source-link"[^>]*aria-label="[^"]+"/.test(h) ||
    /<a class="header-anchor"[^>]*aria-hidden="true"/.test(h) ||
    (h.includes('class="crumbs"') && !h.includes('<nav class="crumbs"'))
  ) {
    metaBad++;
    if (metaBad <= 5)
      fail(`missing skip-link/canonical/lang/security metadata in ${rel}`);
  }
  if ((h.match(/data-pagefind-body/g) || []).length !== 1) {
    pagefindBad++;
    if (pagefindBad <= 5) fail(`data-pagefind-body count != 1 in ${rel}`);
  }
  const articleHtml =
    /<article\b[^>]*>([\s\S]*?)<\/article>/i.exec(h)?.[1] ?? "";
  let previousHeadingLevel = 0;
  for (const heading of articleHtml.matchAll(
    /<h[1-6]\b[^>]*\baria-level="([1-6])"[^>]*>/gi,
  )) {
    const level = Number(heading[1]);
    if (
      previousHeadingLevel === 0
        ? level !== 1
        : level > previousHeadingLevel + 1
    ) {
      headingOrderBad++;
      if (headingOrderBad <= 5)
        fail(`invalid semantic heading order in ${rel}`);
    }
    previousHeadingLevel = level;
  }
  if (!previousHeadingLevel) {
    headingOrderBad++;
    if (headingOrderBad <= 5) fail(`missing semantic heading levels in ${rel}`);
  }
  for (const paragraph of articleHtml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)) {
    const inner = (paragraph[1] ?? "")
      .replace(/<a\b[^>]*class="p-anchor"[\s\S]*?<\/a>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<br\s*\/?\s*>/gi, "");
    const meaningfulElement =
      /<(?:img|video|audio|picture|svg|canvas|iframe|table)\b/i.test(inner) ||
      /<a\b[^>]*(?:id|name)="[^"]+"/i.test(inner);
    const text = inner
      .replace(/<[^>]+>/g, "")
      .replace(/(?:&nbsp;|&#160;|&#x0*a0;)/gi, "")
      .trim();
    if (!meaningfulElement && !text) {
      emptyParagraphBad++;
      if (emptyParagraphBad <= 5) fail(`empty paragraph in ${rel}`);
    }
    if (
      meaningfulElement &&
      !text &&
      !/class="img-box img-icon\b/i.test(inner)
    ) {
      mediaParagraphBad++;
      if (mediaParagraphBad <= 5)
        fail(`standalone media incorrectly remains a paragraph in ${rel}`);
    }
  }
  if (/<figure\b[^>]*\bid="p-\d+"/i.test(articleHtml)) {
    mediaParagraphBad++;
    if (mediaParagraphBad <= 5)
      fail(`standalone media incorrectly consumes p-N in ${rel}`);
  }
  for (const image of articleHtml.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt="[^"]*"/i.test(image[1] ?? "")) {
      imageAltBad++;
      if (imageAltBad <= 5) fail(`image without alt attribute in ${rel}`);
    }
  }
  for (const link of articleHtml.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const attrs = link[1] ?? "";
    if (!/\bhref=/i.test(attrs)) continue;
    const inner = link[2] ?? "";
    const ariaLabel = /\baria-label="([^"]+)"/i.exec(attrs)?.[1]?.trim();
    const text = inner
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/gi, "")
      .trim();
    const imageAlt = /<img\b[^>]*\balt="([^"]+)"/i.exec(inner)?.[1]?.trim();
    if (!ariaLabel && !text && !imageAlt) {
      unnamedLinkBad++;
      if (unnamedLinkBad <= 5) fail(`unnamed link in ${rel}`);
    }
  }
  const navGroups = (h.match(/class="nav-group(?:\s|\")/g) || []).length;
  const allSectionTitles = navData.sections.every((group) =>
    h.includes(
      `<span>${group.title.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</span>`,
    ),
  );
  const topNavHtml =
    /<nav class="top-nav"[^>]*>([\s\S]*?)<\/nav>/.exec(h)?.[1] ?? "";
  const topLinks = [
    ...topNavHtml.matchAll(
      /<a href="([^"]+)"[^>]*>[\s\S]*?<span class="nav-label">([^<]+)<\/span>[\s\S]*?<\/a>/g,
    ),
  ].map((match) => [match[1], match[2]]);
  const exactTopNavigation = expectedTopNavigation.every(
    (expected, index) =>
      topLinks[index]?.[0] === expected[0] &&
      topLinks[index]?.[1] === expected[1],
  );
  const activeTopLinks = (topNavHtml.match(/aria-current="section"/g) || [])
    .length;
  const expectedActiveTopLinks = h.includes('data-pagefind-filter="section:')
    ? 1
    : 0;
  if (
    navGroups !== navData.sections.length ||
    !allSectionTitles ||
    topLinks.length !== expectedTopNavigation.length ||
    !exactTopNavigation ||
    activeTopLinks !== expectedActiveTopLinks ||
    !topNavHtml.includes('<details class="section-menu" open>') ||
    h.includes('href="/more/"')
  ) {
    navigationBad++;
    if (navigationBad <= 5)
      fail(
        `inconsistent navigation in ${rel}: ${navGroups}/${navData.sections.length} sidebar groups, ${topLinks.length}/${expectedTopNavigation.length} top links`,
      );
  }
  if (
    /\bdata-tgs=|["']\/media\/tgs\/|["']\/js\/tgs\.js|\b(?:src|poster)="(?:url|PHOTO|VIDEO|SMALL|X+|Y+|Z+)"/i.test(
      h,
    )
  ) {
    localMediaBad++;
    if (localMediaBad <= 5)
      fail(`local or placeholder media remains in ${rel}`);
  }
  if (
    /<[^>]+\son[a-z]+\s*=/i.test(h) ||
    /<(?:a|img|video|source)\b[^>]+(?:href|src)=["']\s*(?:javascript:|data:text\/html)/i.test(
      h,
    ) ||
    (rel !== "search/index.html" &&
      /<(?:object|embed|iframe|form|input|button|textarea)\b/i.test(
        articleHtml,
      ))
  ) {
    securityBad++;
    if (securityBad <= 5) fail(`active unsafe markup in ${rel}`);
  }
  for (const script of h.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    const attrs = script[1] || "";
    if (/\ssrc=/.test(attrs)) continue;
    if (/\stype="application\/ld\+json"/.test(attrs)) {
      try {
        JSON.parse(script[2] || "");
      } catch {
        jsonLdBad++;
        if (jsonLdBad <= 5) fail(`invalid JSON-LD in ${rel}`);
      }
    } else {
      securityBad++;
      if (securityBad <= 5) fail(`inline executable script in ${rel}`);
    }
  }
  // canonical/og:url must be usable as URLs: a raw space or '#' in the path
  // truncates or breaks them (`/type/Vector t/`, `/type/#/`).
  for (const m of h.matchAll(
    /(?:rel="canonical" href|property="og:url" content)="([^"]*)"/g,
  )) {
    if (/[ "<>]/.test(m[1]) || m[1].split("#").length > 1) {
      urlBad++;
      if (urlBad <= 5) fail(`unencoded canonical/og:url "${m[1]}" in ${rel}`);
    }
  }
  const url = "/" + path.relative(DOCS, path.dirname(f)).replace(/\\/g, "/");
  const ids = new Set<string>();
  for (const m of h.matchAll(/\sid="([^"]*)"/g)) {
    const id = m[1] || "";
    if (ids.has(id)) {
      duplicateIdBad++;
      if (duplicateIdBad <= 5) fail(`duplicate id "${id}" in ${rel}`);
    }
    ids.add(id);
  }
  idsByUrl.set(url === "/." ? "/" : url, ids);
}
if (!h1bad) ok(`h1: exactly one on all ${pages.length} pages`);
if (!headingOrderBad) ok("semantic heading levels never skip");
if (!metaBad)
  ok("accessibility, canonical and security metadata present on all pages");
if (!urlBad) ok("canonical/og:url properly encoded on all pages");
if (!pagefindBad) ok("Pagefind indexes article content only");
if (!duplicateIdBad) ok("HTML ids are unique on every page");
if (!securityBad) ok("no inline executable scripts or active unsafe markup");
if (!jsonLdBad) ok("all breadcrumb JSON-LD blocks parse");
if (!emptyParagraphBad)
  ok("empty paragraphs are absent before numbering and indexing");
if (!mediaParagraphBad) ok("standalone media never consumes paragraph numbers");
if (!unnamedLinkBad) ok("all article links have accessible names");
if (!imageAltBad) ok("all article images have alt attributes");
const searchHtml = await readFile(
  path.join(DOCS, "search", "index.html"),
  "utf8",
).catch(() => "");
const searchSections = (
  searchHtml.match(/<input type="checkbox" name="section"/g) || []
).length;
const searchJs = await readFile(
  path.join(DOCS, "js", "search.js"),
  "utf8",
).catch(() => "");
const assetVersions = [
  ...searchHtml.matchAll(
    /(?:href|src)="\/(?:css\/style\.css|js\/(?:head|main|search)\.js)\?v=([0-9a-f]{12})"/g,
  ),
].map((match) => match[1]);
if (
  !searchHtml.includes('id="docs-search"') ||
  !searchHtml.includes('id="docs-search-results"') ||
  !searchHtml.includes('id="docs-search-pagination"') ||
  searchSections !== 11 ||
  !searchJs.includes("/pagefind/pagefind.js") ||
  !searchJs.includes("docs-search-pagination") ||
  !searchJs.includes("section:{any:") ||
  assetVersions.length !== 4 ||
  new Set(assetVersions).size !== 1 ||
  searchHtml.includes("pagefind-filter-dropdown") ||
  searchHtml.includes("pagefind-component-ui") ||
  searchHtml.includes("max-results")
) {
  fail(
    "/search/ does not provide visible filters and unbounded paginated results",
  );
} else {
  ok(
    "/search/ has 11 visible OR filters, pagination and cache-versioned assets",
  );
}
const blogIndexHtml = await readFile(
  path.join(DOCS, "blog", "index.html"),
  "utf8",
).catch(() => "");
if ((blogIndexHtml.match(/class="blog-archive-item"/g) || []).length !== 178) {
  fail("/blog/ is not the complete 178-post archive");
} else {
  ok("/blog/ is the complete 178-post index");
}
const storiesHtml = await readFile(
  path.join(DOCS, "blog", "stories", "index.html"),
  "utf8",
).catch(() => "");
const builtCss = await readFile(
  path.join(DOCS, "css", "style.css"),
  "utf8",
).catch(() => "");
const headerCss = builtCss.slice(
  builtCss.indexOf(".header-inner{"),
  builtCss.indexOf(".brand{"),
);
if (
  !headerCss.includes("display:flex") ||
  !headerCss.includes("flex-wrap:nowrap") ||
  !builtCss.includes("@media (width<=1000px)") ||
  !builtCss.includes("@media (width<=699px)") ||
  (searchHtml.match(/class="nav-short"/g) || []).length !== 11 ||
  !searchHtml.includes('class="brand-short"') ||
  searchHtml.includes('class="nav-icon')
) {
  navigationBad++;
  fail("header CSS no longer guarantees one row and compact mobile navigation");
}
if (!navigationBad)
  ok(
    `all ${pages.length} pages show the same ${navData.sections.length} sections in one-row top and sidebar navigation`,
  );
if (
  !storiesHtml.includes('class="img-box img-tgsticker"') ||
  !storiesHtml.includes(
    'src="https://telegram.org/file/400780400899/2/Mm0RBKjlAiw.40307.png/8daecf88911311259d"',
  ) ||
  !builtCss.includes("float:right") ||
  builtCss.includes("margin:-41px 0 0 -180px")
) {
  localMediaBad++;
  fail("/blog/stories/ does not retain its aligned remote fallback");
}
if (
  (await exists(path.join(DOCS, "media"))) ||
  (await exists(path.join(DOCS, "js", "tgs.js")))
) {
  localMediaBad++;
  fail("generated site contains mirrored media or its TGS runtime");
}
if (!localMediaBad)
  ok("no media files are mirrored; Stories uses Telegram's remote fallback");

// ---- anchors -------------------------------------------------------------
// A link that points at a heading which no longer exists is exactly as broken as
// a link to a missing page, and far easier to introduce unnoticed.
let anchorBad = 0;
let anchorChecked = 0;
let anchorSame = 0;
for (const l of links) {
  if (!l.anchor) continue;
  const ids = idsByUrl.get(l.target || "/");
  if (!ids) continue; // page-level breakage is reported above
  anchorChecked++;
  if (l.samePage) anchorSame++;
  if (!ids.has(l.anchor)) {
    anchorBad++;
    if (anchorBad <= 10) fail(`dead anchor ${l.url} in ${l.file}`);
  }
}
if (anchorChecked !== 14699)
  fail(`anchor inventory changed: ${anchorChecked}, expected 14699`);
if (!anchorBad && anchorChecked === 14699)
  ok(
    `anchors: ${anchorChecked} in-site fragments (${anchorSame} into the page's own headings), all resolve`,
  );

const backups = path.join(ROOT, "backup");
const dates = (await readdir(backups).catch(() => []))
  .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
  .sort();
const latest = dates.at(-1);
if (!latest) throw new Error("no dated backup found");
const manifestMeta = JSON.parse(
  await readFile(path.join(backups, latest, "manifest.json"), "utf8"),
) as {
  page_count: number;
  pages: Array<{
    file: string;
    path: string;
    bytes: number;
    sha256: string;
  }>;
};
let integrityBad = 0;
for (const entry of manifestMeta.pages) {
  const content = await readFile(path.join(backups, latest, entry.file));
  const digest = createHash("sha256").update(content).digest("hex");
  if (content.byteLength !== entry.bytes || digest !== entry.sha256) {
    integrityBad++;
    if (integrityBad <= 5) fail(`backup integrity mismatch: ${entry.file}`);
  }
}
if (manifestMeta.page_count !== manifestMeta.pages.length)
  fail("backup manifest page_count differs from pages length");
else if (!integrityBad)
  ok(
    `backup integrity: ${manifestMeta.pages.length} files match size and sha256`,
  );
const backupPage = (url: string): Promise<string> =>
  readFile(
    path.join(
      backups,
      latest,
      "pages",
      url.slice(1).replace(/\//g, "__") + ".html",
    ),
    "utf8",
  );
const unentity = (s: string): string =>
  s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
const preText = (html: string): string => {
  const m = html.match(/<pre[^>]*>[\s\S]*?<\/pre>/);
  return m ? unentity(m[0].replace(/<[^>]+>/g, "")).trim() : "";
};

const contentDiv = (html: string): string => {
  const opening = /<div\b[^>]*\bid="dev_page_content"[^>]*>/i.exec(html);
  if (!opening || opening.index === undefined) return "";
  const tags = /<\/?div\b[^>]*>/gi;
  tags.lastIndex = opening.index;
  let depth = 0;
  for (const match of html.matchAll(tags)) {
    depth += /^<\/div/i.test(match[0]) ? -1 : 1;
    if (depth === 0)
      return html.slice(opening.index, (match.index ?? 0) + match[0].length);
  }
  return "";
};

// Blog media is intentionally remote, but every upstream-relative URL must be
// externalized. Turndown also has no native video rule: compare exact tag counts
// so legacy smartphone demos cannot silently disappear again.
let blogMediaBad = 0;
let blogImages = 0;
let blogVideos = 0;
let blogSources = 0;
for (const entry of manifestMeta.pages.filter((page) =>
  page.path.startsWith("/blog/"),
)) {
  const upstream = contentDiv(
    await readFile(path.join(backups, latest, entry.file), "utf8"),
  ).replace(/<!--[\s\S]*?-->/g, "");
  const rendered = await readFile(
    path.join(DOCS, entry.path.slice(1), "index.html"),
    "utf8",
  ).catch(() => "");
  const expectedImages = (upstream.match(/<img\b/gi) || []).length;
  const expectedVideos = (upstream.match(/<video\b/gi) || []).length;
  const expectedSources = (
    upstream
      .replace(/<picture\b[\s\S]*?<\/picture>/gi, "")
      .match(/<source\b/gi) || []
  ).length;
  const actualImages = (rendered.match(/<img\b/gi) || []).length;
  const actualVideos = (rendered.match(/<video\b/gi) || []).length;
  const actualSources = (rendered.match(/<source\b/gi) || []).length;
  blogImages += actualImages;
  blogVideos += actualVideos;
  blogSources += actualSources;
  if (
    expectedImages !== actualImages ||
    expectedVideos !== actualVideos ||
    expectedSources !== actualSources
  ) {
    blogMediaBad++;
    if (blogMediaBad <= 5)
      fail(
        `${entry.path}/ media differs from backup: images ${actualImages}/${expectedImages}, videos ${actualVideos}/${expectedVideos}, sources ${actualSources}/${expectedSources}`,
      );
  }
  if (
    /\b(?:src|poster|srcset)="(?:\/\/(?:telegram\.org|core\.telegram\.org)|\/(?:file|img|resources)\/)/i.test(
      rendered,
    )
  ) {
    blogMediaBad++;
    if (blogMediaBad <= 5)
      fail(`${entry.path}/ keeps an upstream-relative media URL`);
  }
}
if (!blogMediaBad)
  ok(
    `blog media matches backup (${blogImages} images, ${blogVideos} videos, ${blogSources} sources; all URLs usable)`,
  );

// ---- the pages this mirror exists for ------------------------------------
// On /schema and /schema/end-to-end the TL-schema is a sibling of the content
// div upstream, so it is trivially lost: those two pages would then say "below
// you will find the schema" and show nothing at all. Compare the rendered
// listing against the backup character for character rather than trusting a
// length heuristic.
for (const url of ["/schema", "/schema/end-to-end", "/schema/mtproto"]) {
  const built = preText(
    await readFile(path.join(DOCS, url.slice(1), "index.html"), "utf8").catch(
      () => "",
    ),
  );
  const want = preText(await backupPage(url).catch(() => ""));
  if (!want) fail(`${url}: no TL-schema in the backup — check the crawl`);
  else if (built === want)
    ok(
      `${url}/ reproduces its TL-schema verbatim (${want.split("\n").length} lines)`,
    );
  else
    fail(
      `${url}/ TL-schema differs from the backup (${built.split("\n").length} vs ${want.split("\n").length} lines)`,
    );
}

// TL identifiers in a schema listing are links upstream; a plain text block
// would silently drop ~12 000 of them across the two schema pages.
for (const [url, min] of [
  ["/schema", 11000],
  ["/schema/end-to-end", 400],
] as const) {
  const h = await readFile(
    path.join(DOCS, url.slice(1), "index.html"),
    "utf8",
  ).catch(() => "");
  const block = (h.match(/<pre class="page_scheme">[\s\S]*?<\/pre>/) || [
    "",
  ])[0];
  const n = (block.match(/<a\b/g) || []).length;
  if (n >= min) ok(`${url}/ keeps its ${n} schema links`);
  else fail(`${url}/ lost its schema links (${n}, expected >= ${min})`);
}

// Every schema listing states the layer it belongs to, exactly as the original
// labels the layer selector floating above the same block.
let schemePages = 0;
let layerMissing = 0;
for (const f of pages) {
  const h = await readFile(f, "utf8");
  if (!h.includes('<pre class="page_scheme">')) continue;
  schemePages++;
  if (!/<p class="page_layer">Layer \d+<\/p>/.test(h)) {
    layerMissing++;
    if (layerMissing <= 5)
      fail(`no layer label above the schema in ${path.relative(DOCS, f)}`);
  }
}
if (!layerMissing)
  ok(
    `layer label present on all ${schemePages} pages showing a schema listing`,
  );

// ---- machine-readable endpoints ------------------------------------------
// Reproduced verbatim, only re-indented: parsing the page back must give the
// exact same document as the backup, and it must no longer be a single line.
for (const url of [
  "/schema/json",
  "/schema/mtproto-json",
  "/schema/end-to-end-json",
  "/api/config.json",
  "/api/errors.json",
]) {
  const h = await readFile(
    path.join(DOCS, url.slice(1), "index.html"),
    "utf8",
  ).catch(() => "");
  const m = h.match(/<code class="language-json">([\s\S]*?)<\/code>/);
  if (!m) {
    fail(`${url}/ has no JSON block`);
    continue;
  }
  const shown = unentity(m[1]);
  const lines = shown.split("\n").length;
  let same = false;
  try {
    same =
      JSON.stringify(JSON.parse(await backupPage(url))) ===
      JSON.stringify(JSON.parse(shown));
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    fail(`${url}/ does not parse as JSON: ${message}`);
    continue;
  }
  if (!same) fail(`${url}/ does not match the backup document`);
  else if (lines < 100) fail(`${url}/ is not beautified (${lines} lines)`);
  else ok(`${url}/ matches the backup, beautified to ${lines} lines`);
}

// ---- sitemap & robots ----------------------------------------------------
const sitemap = await readFile(path.join(DOCS, "sitemap.xml"), "utf8").catch(
  () => "",
);
const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
if (locs.length >= pages.length - 1) ok(`sitemap.xml: ${locs.length} urls`);
else fail(`sitemap.xml missing or too small (${locs.length})`);
const badLoc = locs.filter((u) => /[ "<>]/.test(u) || u.split("#").length > 1);
if (!badLoc.length) ok("sitemap.xml: every <loc> is a well-formed URL");
else
  fail(`sitemap.xml has ${badLoc.length} malformed <loc>, e.g. ${badLoc[0]}`);
const robots = await readFile(path.join(DOCS, "robots.txt"), "utf8").catch(
  () => "",
);
if (robots.includes("Sitemap:")) ok("robots.txt references sitemap");
else fail("robots.txt missing or without Sitemap");
const pagefindEntry = await readFile(
  path.join(DOCS, "pagefind", "pagefind-entry.json"),
  "utf8",
).catch(() => "");
try {
  const entry = JSON.parse(pagefindEntry) as {
    languages?: Record<string, { page_count?: number }>;
  };
  const indexed = Object.values(entry.languages || {}).reduce(
    (sum, language) => sum + (language.page_count || 0),
    0,
  );
  if (indexed === pages.length)
    ok(`Pagefind index contains all ${indexed} pages`);
  else fail(`Pagefind index contains ${indexed} of ${pages.length} pages`);
} catch {
  fail("Pagefind index metadata is missing or invalid");
}

console.log(
  failures ? `\n${failures} problem(s) found` : "\nAll checks passed",
);
process.exit(failures ? 1 : 0);
