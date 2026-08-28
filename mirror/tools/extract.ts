// Builds the disposable Eleventy input tree in crawled/ from the immutable backup
// and the hand-written shell in site/. NO network access is performed.
//
// Usage: node .build/tools/extract.js
import { cp, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import TurndownService from "turndown";
import * as prettier from "prettier";
import { sanitizeUpstreamHtml } from "./html-sanitizer.js";

const ROOT = path.resolve(".");
const CRAWLED = path.join(ROOT, "crawled");
const SITE = path.join(ROOT, "site");

const BACKUP = path.join(ROOT, "backup", "latest");

// Returns { html, end } for the div introduced by `marker`, where `end` is the
// offset just past its closing tag (needed to look at what follows the div).
function extractDiv(
  html: string,
  marker: string,
): { html: string; end: number } | null {
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const tagStart = html.lastIndexOf("<div", start);
  let i = html.indexOf(">", start) + 1;
  let depth = 1;
  const re = /<div\b[^>]*>|<\/div>/g;
  re.lastIndex = i;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[0].startsWith("</div")) depth--;
    else depth++;
    if (depth === 0)
      return { html: html.slice(tagStart, m.index + 6), end: m.index + 6 };
  }
  return null;
}

// The layer selector itself cannot be mirrored — the older layers it links to
// were never crawled — but the layer it names is content, not chrome: it is the
// only thing on the page that says *which* version of the TL-schema is shown.
// The dropdown is dropped by stripNoise(); this keeps its label.
function layerLabel(html: string): string {
  const m = html.match(
    /dev_layer_select[\s\S]*?<a class="dropdown-toggle"[^>]*>([^<]*)<b class="caret">/,
  );
  return m ? decode(m[1]).trim() : "";
}

// Some upstream pages place real article content after the div selected above:
// the two schema listings are siblings of #dev_page_content, /widgets has its
// widget list there, /moderation has reporting instructions after .tl_page, and
// one malformed legacy blog post closes #dev_page_content after its first
// image. Keep everything up to the first known piece of page chrome. Unmatched
// closing tags left by slicing are harmless: the sanitizer's parser discards
// them while retaining the content that follows.
function trailingArticleContent(html: string, contentEnd: number): string {
  const chrome = [
    '<div class="tl_main_share',
    '<div class="tl_main_recent_news_wrap',
    '<div class="footer_wrap',
  ];
  const stops = chrome
    .map((marker) => html.indexOf(marker, contentEnd))
    .filter((offset) => offset !== -1);
  const stop = stops.length ? Math.min(...stops) : html.length;
  return html.slice(contentEnd, stop);
}

function extractH1(html: string): string | null {
  const m =
    html.match(/<h1 id="dev_page_title"[^>]*>([\s\S]*?)<\/h1>/) ||
    html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return decode(m[1].replace(/<[^>]+>/g, "")).trim();
}

const MONTHS = new Map(
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((month, index) => [month, index + 1]),
);

function extractPublishedDate(html: string): string | undefined {
  const metadata = html.match(
    /article:published_time"\s+content="(\d{4}-\d{2}-\d{2})/,
  )?.[1];
  if (metadata) return metadata;
  const footer = html.match(
    /<p[^>]*>([\s\S]{0,200}?The Telegram Team[\s\S]{0,50}?)<\/p>/i,
  )?.[1];
  const visible = decode((footer ?? "").replace(/<[^>]+>/g, " ")).match(
    /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})/i,
  );
  if (!visible) return undefined;
  const canonicalMonth =
    visible[1].slice(0, 1).toUpperCase() + visible[1].slice(1).toLowerCase();
  const month = MONTHS.get(canonicalMonth);
  if (!month) return undefined;
  return `${visible[3]}-${String(month).padStart(2, "0")}-${visible[2].padStart(2, "0")}`;
}

// The original pages carry their own heading anchors
// (<h3><a class="anchor" id="…">). Telegram deletes punctuation where our
// slugger replaces it with "-", so ~3% of the ids differ ("messages.report" is
// `messagesreport` there and `messages-report` here). Links written against the
// original ids used to be downgraded to off-site links; this map lets them be
// resolved to the local heading instead.
// core.telegram.org names the target with `id`, telegram.org (the FAQ page, the
// one mirrored page from that host) with the older `name` — and it also encodes
// apostrophes into the id as their entity number, so nothing but this map can
// reconnect `#q-who-can-see-me-39online-39` to the heading it belongs to.
// Reading only `id` left all 21 anchors of the FAQ table of contents dead.
function originalAnchors(html: string): Map<string, string> {
  const map = new Map<string, string>();
  const re = /<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const id = m[2].match(/<a class="anchor"[^>]*\s(?:id|name)="([^"]*)"/);
    if (!id) continue;
    const text = decode(m[2].replace(/<[^>]+>/g, "")).trim();
    if (text) {
      map.set(id[1], slugify(cleanInline(text)));
      continue;
    }
    // /moderation puts its named anchor in an empty h2 immediately before a
    // styled wrapper whose first child is the visible h2. Reconnect that legacy
    // id to the heading generated from the visible text.
    const following = html
      .slice(re.lastIndex, re.lastIndex + 500)
      .match(/^[\s\S]*?<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/);
    if (following) {
      const followingText = decode(following[1].replace(/<[^>]+>/g, "")).trim();
      if (followingText) map.set(id[1], slugify(cleanInline(followingText)));
    }
  }
  return map;
}

type Crumb = { title: string; url: string };

function extractCrumbs(html: string): Crumb[] {
  const m = html.match(/<div class="dev_page_bread_crumbs">([\s\S]*?)<\/div>/);
  if (!m) return [];
  const crumbs: Crumb[] = [];
  const re = /<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
  let c;
  while ((c = re.exec(m[1])) !== null) {
    crumbs.push({
      url: c[1],
      title: decode(c[2].replace(/<[^>]+>/g, "")).trim(),
    });
  }
  return crumbs;
}

// Percent-escapes have to be undone before a path can be looked up in the
// closure (which holds decoded paths such as "/type/Vector t" and "/type/#")
// and redone before the path is emitted. Both run per segment: decodeURI would
// leave the reserved "%23" of the TL "#" type alone, and a whole-path
// encodeURIComponent would swallow the separators. A malformed escape in the
// source is left exactly as it was.
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
const encodePath = (p: string): string =>
  p.split("/").map(encodeURIComponent).join("/");

function decode(s: string): string {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&#x([0-9a-f]+);/gi, (_match, value: string) =>
      String.fromCodePoint(Number.parseInt(value, 16)),
    )
    .replace(/&#(\d+);/g, (_match, value: string) =>
      String.fromCodePoint(Number.parseInt(value, 10)),
    )
    .replace(/&amp;/g, "&");
}

// ---- raw JSON endpoints --------------------------------------------------
// The original serves these as one endless line, which no browser can display
// usefully. Prettier's `json` parser prints from the concrete syntax tree, so
// (unlike JSON.parse + JSON.stringify) it neither reorders integer-like keys —
// JS would sort "400", "401" … ahead of every string key in errors.json — nor
// renormalises number literals such as 1e-3. printWidth 1 forbids the "collapse
// short objects onto one line" heuristic, giving the fully expanded layout a
// reader expects.
async function beautifyJson(src: string): Promise<string> {
  return (
    await prettier.format(src, { parser: "json", printWidth: 1, tabWidth: 2 })
  ).trim();
}

function stripNoise(html: string): string {
  // Layer selector dropdown: a control over layers that were never crawled.
  // The remaining upstream HTML crosses a parser-based allowlist below.
  let h = html;
  // Layer selector dropdown: a control over layers that were never crawled.
  // Its label survives separately — see layerLabel().
  h = h.replace(
    /<div class="clearfix">[\s\S]*?dev_layer_select[\s\S]*?<\/ul>\s*<\/li>\s*<\/ul>\s*<\/div>/g,
    "",
  );
  // heading anchor icons (we generate our own anchors)
  h = h.replace(/<a class="anchor"[\s\S]*?<\/a>/g, "");
  return sanitizeUpstreamHtml(h);
}

// ---- turndown ----
const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
// Turndown decodes entities in text nodes, so `Vector&lt;int&gt;` from the source
// would land in the markdown as a bare `Vector<int>`, and markdown-it (HTML
// enabled) parses `<int>` back into an element — silently swallowing the type
// name that the original page displayed. Re-escape `<`: markdown-it passes the
// entity through untouched, so the reader sees the literal text again.
// Turndown routes only non-code text nodes through escape(), and the raw-HTML
// rules below use `replacement`, so code blocks and kept markup are unaffected.
const escapeMarkdown = td.escape.bind(td);
td.escape = (s) => escapeMarkdown(s).replace(/</g, "&lt;");
// A fence has to be longer than the longest backtick run inside the block, or
// the block ends where its own content says so. The Bot API page is made of
// such samples — its "MarkdownV2 style" section shows ```python fences as
// example text — and a three-backtick fence closed there, spilling raw
// <pre>/<blockquote> examples into the document as live markup: 170 headings
// downstream lost their anchors and the page grew four <h1>s.
const fenceFor = (text: string): string => {
  const longest = (text.match(/`+/g) || []).reduce(
    (n, r) => Math.max(n, r.length),
    0,
  );
  return "`".repeat(Math.max(3, longest + 1));
};
td.addRule("preCode", {
  filter: (node) => node.nodeName === "PRE",
  replacement: (_c, node) => {
    const text = (node.textContent ?? "").replace(/\n+$/, "");
    const fence = fenceFor(text);
    return "\n\n" + fence + "\n" + text + "\n" + fence + "\n\n";
  },
});
// TL-schema listings (<pre class="page_scheme">) are the one code block on the
// original site whose identifiers are hyperlinks — every type, constructor and
// method in the line links to its own reference page. A fenced block keeps the
// text but throws all of that away, so these are emitted as raw HTML instead:
// markdown-it passes an HTML block through untouched and rewriteLinks() below
// then localises the hrefs exactly as it does for the rest of the page.
const escText = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s: string): string => escText(s).replace(/"/g, "&quot;");

function schemeHtml(node: Node): string {
  let out = "";
  for (const child of node.childNodes) {
    if (child.nodeType === 3) {
      out += escText(child.nodeValue ?? "");
    } else if (child.nodeName === "A") {
      // The source markup is `<a  href="/type/int" >int</a>` — normalised here;
      // `current_page_link` (the entry describing the page you are on) is kept
      // because the original renders it as plain, non-clickable text.
      const link = child as Element;
      const href = link.getAttribute("href") || "";
      const current = /(^|\s)current_page_link(\s|$)/.test(
        link.getAttribute("class") || "",
      );
      out +=
        `<a href="${escAttr(href)}"${current ? ' class="current_page_link"' : ""}>` +
        schemeHtml(child) +
        "</a>";
    } else {
      out += schemeHtml(child);
    }
  }
  return out;
}

// Registered after preCode on purpose: Turndown checks the most recently added
// rule first, so this one wins for <pre class="page_scheme">.
td.addRule("pageScheme", {
  filter: (node) =>
    node.nodeName === "PRE" &&
    /(^|\s)page_scheme(\s|$)/.test(node.getAttribute("class") || ""),
  replacement: (_c, node) => {
    const code = node.querySelector("code") || node;
    return (
      '\n\n<pre class="page_scheme"><code>' +
      schemeHtml(code).replace(/^\n+|\s+$/g, "") +
      "</code></pre>\n\n"
    );
  },
});
// keep <img> as raw HTML so width/height/class/style (floats) survive
td.addRule("imgRaw", {
  filter: "img",
  replacement: (_c, node) => (node as Element).outerHTML,
});
// A video outside the modern blog_video_player_wrap used to disappear because
// Turndown has no video rule. Legacy posts use 29 smartphone players and one
// Nexus demo; preserve the media itself even if an unknown wrapper appears.
td.addRule("videoRaw", {
  filter: "video",
  replacement: (_c, node) => "\n\n" + (node as Element).outerHTML + "\n\n",
});
// Browsers cannot render Telegram's TGS source without fetching it from script,
// which the upstream blocks cross-origin. Keep no media in the mirror: preserve
// the original left-side wrapper and use Telegram's remote PNG fallback.
td.addRule("tgsFallback", {
  filter: "picture",
  replacement: (_c, node) => {
    const picture = node as Element;
    const image = picture.querySelector("img");
    if (!image) return "";
    if (!image.hasAttribute("alt"))
      image.setAttribute("alt", "Telegram illustration");
    const classes = new Set(
      `${picture.getAttribute("class") || ""} ${image.getAttribute("class") || ""}`
        .split(/\s+/)
        .filter(Boolean),
    );
    if (classes.size) image.setAttribute("class", [...classes].join(" "));
    return `\n\n<div class="blog_side_image_wrap">${image.outerHTML}</div>\n\n`;
  },
});
// keep image/caption wrappers as raw HTML so their classes survive
td.addRule("rawMediaDivs", {
  filter: (node) =>
    node.nodeName === "DIV" &&
    /(?:blog_(?:image_wrap|video_player_wrap|2images_wrap|3images_wrap|medium_image_wrap)|smartphone_video_player_wrap|smarphone_device_nexus)/.test(
      node.getAttribute("class") || "",
    ),
  replacement: (_c, node) => "\n\n" + (node as Element).outerHTML + "\n\n",
});
td.keep(["table"]);

// The section a page belongs to. Pages of the crawled documentation are placed
// by their path; the pages listed in tools/extra-pages.json carry their group
// in the manifest, so the grouping is stated once, as data, and not guessed
// twice. Anything unplaced lands in "other" rather than silently joining the
// API — the section a page is filed under is the menu the reader gets.
const GROUP_SECTION: Record<string, string> = {
  "Bot API": "bots",
  Blog: "blog",
  FAQ: "faq",
  Contests: "contests",
  "Apps & Clients": "apps",
  "Developer Tools": "devtools",
  Policies: "policies",
  Other: "other",
};

const CONTEST_BLOG_PATHS = new Set([
  "/blog/bb-results",
  "/blog/botprize",
  "/blog/botprize1",
  "/blog/telegram-x",
]);

function sectionOf(p: string, group?: string): string {
  if (
    p === "/blackberry" ||
    p.startsWith("/blackberry/") ||
    p === "/contest300K" ||
    (p.startsWith("/blog/") && p.toLowerCase().includes("contest")) ||
    CONTEST_BLOG_PATHS.has(p)
  )
    return "contests";
  if (group && GROUP_SECTION[group]) return GROUP_SECTION[group];
  if (p === "/methods" || p === "/constructors" || p === "/types")
    return "schema";
  if (
    p.startsWith("/constructor") ||
    p.startsWith("/method") ||
    p.startsWith("/type")
  )
    return "ref";
  if (p.startsWith("/mtproto")) return "mtproto";
  if (p.startsWith("/schema")) return "schema";
  if (p.startsWith("/techfaq")) return "faq";
  if (p === "/faq" || p.startsWith("/faq/")) return "faq";
  if (p === "/api" || p.startsWith("/api/")) return "api";
  return "other";
}

function fmEscape(s: unknown): string {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// Same slug algorithm as eleventy.config.ts (markdown-it-anchor)
const slugify = (s: string): string =>
  s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");

const cleanInline = (s: string): string =>
  s
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/`/g, "")
    .replace(/\*\*/g, "");

// Walks a markdown body, skipping fenced code. A fence closes only on a run of
// backticks at least as long as the one that opened it (CommonMark), which is
// what lets a ````-fenced sample contain a ``` line of its own — the Bot API
// documents exactly that. Counting every ``` as a toggle would flip the state
// in the middle of such a block and hide, or invent, everything after it.
function eachTextLine(md: string, fn: (line: string) => boolean | void): void {
  let fence = 0;
  for (const line of md.split("\n")) {
    const t = line.trim();
    const m = /^(`{3,})/.exec(t);
    if (fence) {
      if (m && m[1].length >= fence) fence = 0;
      continue;
    }
    if (m) {
      fence = m[1].length;
      continue;
    }
    if (fn(t) === false) return;
  }
}

// heading slugs of a markdown body (fences ignored)
function headingSlugs(md: string): Set<string> {
  const slugs = new Set<string>();
  eachTextLine(md, (t) => {
    const m = t.match(/^#{1,6}\s+(.+)$/);
    if (m) slugs.add(slugify(cleanInline(m[1])));
  });
  return slugs;
}

// First meaningful paragraph of the ORIGINAL page, used for <meta description>/OG.
// No text of our own is added — only the original wording.
function deriveDescription(md: string): string {
  let found = "";
  eachTextLine(md, (t) => {
    if (
      !t ||
      t === "---" ||
      /^#/.test(t) ||
      t.startsWith("|") ||
      t.startsWith(">") ||
      t.startsWith("-") ||
      t.startsWith("![") ||
      t.startsWith("[<") ||
      t.startsWith("<")
    )
      return;
    let text = cleanInline(t);
    if (text.length < 25) return;
    if (text.length > 180) {
      text = text.slice(0, 180);
      text = text.slice(0, text.lastIndexOf(" ")) + "…";
    }
    found = text;
    return false;
  });
  return found;
}

// The five machine-readable endpoints are served as bare JSON: no <h1>, no
// breadcrumbs, nothing a mirror could extract. The titles below are the wording
// the original site itself uses when it links to them, and the trails follow the
// breadcrumbs of the article each endpoint belongs to.
const JSON_NOTE =
  "The original serves this document as a single line of JSON. It is reproduced " +
  "here verbatim — only the indentation was added, so that it can be read in a browser.";
const crumb = (title: string, url: string): Crumb => ({ title, url });
const API = crumb("API", "/api/");
const JSON_DOCS: Record<string, { title: string; crumbs: Crumb[] }> = {
  "/schema/json": {
    title: "TL-Schema in JSON",
    crumbs: [
      API,
      crumb("Schema", "/schema/"),
      crumb("TL-Schema in JSON", "/schema/json/"),
    ],
  },
  "/schema/mtproto-json": {
    title: "MTProto TL-Schema in JSON",
    crumbs: [
      crumb("Mobile Protocol", "/mtproto/"),
      crumb("Current MTProto TL-schema", "/schema/mtproto/"),
      crumb("MTProto TL-Schema in JSON", "/schema/mtproto-json/"),
    ],
  },
  "/schema/end-to-end-json": {
    title: "End-to-end TL-Schema in JSON",
    crumbs: [
      API,
      crumb("Secret chats", "/api/end-to-end/"),
      crumb("Current end-to-end TL-schema", "/schema/end-to-end/"),
      crumb("End-to-end TL-Schema in JSON", "/schema/end-to-end-json/"),
    ],
  },
  "/api/config.json": {
    title: "config.json",
    crumbs: [
      API,
      crumb("Client configuration", "/api/config/"),
      crumb("config.json", "/api/config.json/"),
    ],
  },
  "/api/errors.json": {
    title: "errors.json",
    crumbs: [
      API,
      crumb("Error handling", "/api/errors/"),
      crumb("errors.json", "/api/errors.json/"),
    ],
  },
};

type ManifestPage = {
  file: string;
  final_url?: string;
  group?: string;
  path: string;
  site?: string;
  url: string;
};
type BackupManifest = {
  pages: ManifestPage[];
  redirects?: Array<{ path: string; to: string; url: string }>;
};
type ExtraPages = { groups: Record<string, string[]> };
type PageRecord = {
  pg: ManifestPage;
  normPath: string;
  rel: string;
  body: string;
  title: string;
  crumbs: Crumb[];
  rawCrumbs: Crumb[];
  origin: string;
  isJson: boolean;
  published?: string;
};

function buildBlogArchive(records: PageRecord[]): string {
  const posts = records
    .filter((record) => record.normPath.startsWith("/blog/"))
    .sort(
      (left, right) =>
        (right.published ?? "").localeCompare(left.published ?? "") ||
        left.normPath.localeCompare(right.normPath),
    );
  const output = [
    "# Telegram Blog",
    "",
    "Complete archive of Telegram announcements in this snapshot, ordered newest first where the original provides a publication date.",
  ];
  let year = "";
  for (const post of posts) {
    const published = post.published ?? "";
    const postYear = published ? published.slice(0, 4) : "undated";
    if (postYear !== year) {
      if (year) output.push("</ol>");
      year = postYear;
      output.push(
        "",
        `<h2 id="year-${year}">${year === "undated" ? "Date unavailable" : year}</h2>`,
        '<ol class="blog-archive-list">',
      );
    }
    const description = deriveDescription(post.body);
    output.push(
      '<li class="blog-archive-item">',
      `<div><h3><a href="${encodePath(post.normPath)}/">${escText(post.title)}</a></h3>`,
      published
        ? `<time datetime="${published}">${published}</time>`
        : '<span class="blog-date-missing">Publication date unavailable</span>',
      description
        ? `<div class="blog-archive-description">${escText(description)}</div>`
        : "",
      "</div></li>",
    );
  }
  if (year) output.push("</ol>");
  return output.join("\n");
}

async function main(): Promise<void> {
  const meta = JSON.parse(
    await readFile(path.join(BACKUP, "manifest.json"), "utf8"),
  ) as BackupManifest;
  console.log("backup:", BACKUP, "pages:", meta.pages.length);

  // Group ownership lives in extra-pages.json. Reading it here lets a newer
  // navigation taxonomy classify an immutable older backup without rewriting
  // that backup's historical manifest.
  const extraPages = JSON.parse(
    await readFile(path.join(ROOT, "tools", "extra-pages.json"), "utf8"),
  ) as ExtraPages;
  const sourceKey = (raw: string): string => {
    const url = new URL(raw);
    return `${url.hostname.replace(/^www\./, "").toLowerCase()}${url.pathname.replace(/\/+$/, "")}`;
  };
  const groupBySource = new Map<string, string>();
  for (const [group, urls] of Object.entries(extraPages.groups))
    for (const url of urls) groupBySource.set(sourceKey(url), group);

  // The mirror spans two hosts — core.telegram.org and, for the user FAQ,
  // telegram.org — and both address pages by the same kind of path. A closure
  // of bare paths cannot tell telegram.org/faq (mirrored) from a hypothetical
  // core.telegram.org/faq, so it is keyed by host; a link is localized only
  // when *that* host really serves *that* path in the backup.
  //
  // It is filled from the pages actually extracted, not from the backup: a
  // backup entry the extractor cannot turn into a page (core.telegram.org/tdlib/docs
  // is a Doxygen tree, not an article) would otherwise stay a valid link target
  // and every link to it would land on a page that was never written.
  const hostKey = (host: string): string =>
    host.replace(/^www\./, "").toLowerCase();
  const closureByHost = new Map<string, Set<string>>();
  const addToClosure = (url: string, pagePath: string): void => {
    const host = hostKey(new URL(url).hostname);
    const closure = closureByHost.get(host) ?? new Set<string>();
    closure.add(pagePath.replace(/\/+$/, ""));
    closureByHost.set(host, closure);
  };

  const inClosure = (host: string, url: string): boolean =>
    (closureByHost.get(hostKey(host)) ?? new Set<string>()).has(
      decodePath(url.split("#")[0] ?? "").replace(/\/+$/, ""),
    );
  const localUrl = (url: string): string =>
    encodePath(decodePath(url.split("#")[0] ?? "").replace(/\/+$/, "") + "/");

  // crawled/ is disposable: recreate it atomically from authored files plus backup.
  await rm(CRAWLED, { recursive: true, force: true });
  await mkdir(CRAWLED, { recursive: true });
  await cp(SITE, CRAWLED, { recursive: true, force: true });
  console.log("crawled/ recreated from site/");

  // ---- pass 1: convert everything to markdown ----
  const records: PageRecord[] = [];
  const anchorsByPath = new Map<string, Map<string, string>>();
  const notExtracted: string[] = [];
  for (const pg of meta.pages) {
    const html = await readFile(path.join(BACKUP, pg.file), "utf8");
    const normPath = pg.path.replace(/\/+$/, "");
    const rel = normPath.replace(/^\/+/, "");
    let body = "";
    let title = "";
    let crumbs: Crumb[] = [];
    let rawCrumbs: Crumb[] = [];
    const origin = pg.site || "https://core.telegram.org";
    const trimmed = html.trimStart();
    const isJson = trimmed.startsWith("{") || trimmed.startsWith("[");
    if (isJson) {
      const doc = JSON_DOCS[normPath];
      title = doc?.title ?? rel.split("/").pop() ?? "document";
      crumbs = doc ? doc.crumbs : [];
      body =
        "# " +
        title +
        "\n\n" +
        JSON_NOTE +
        "\n\n```json\n" +
        (await beautifyJson(html.trim())) +
        "\n```";
    } else {
      const found =
        extractDiv(html, '<div id="dev_page_content">') ||
        extractDiv(html, '<div class="tl_page">');
      if (!found) {
        const m = html.match(
          /<div class="dev_page_wrap">([\s\S]*?)<div class="footer_wrap">/,
        );
        if (!m) {
          notExtracted.push(pg.url);
          continue;
        }
        let raw = m[1].replace(
          /<div class="dev_page_head[\s\S]*?<\/div>\s*<\/div>/,
          "",
        );
        raw = raw.replace(/<[^>]+>/g, "");
        body = "```\n" + decode(raw).trim() + "\n```";
      } else {
        const content = stripNoise(
          found.html + trailingArticleContent(html, found.end),
        );
        // Invalid nested upstream anchors are normalized by the HTML parser into
        // a meaningful inner link plus a redundant empty Markdown link. Empty
        // links have no accessible name, so discard only that generated wrapper.
        body = td
          .turndown(content)
          .replace(/\[\]\((?:\\.|[^)])*\)/g, "")
          .trim();
        const layer = layerLabel(html);
        if (layer) {
          body = body.replace(
            /(^|\n)(<pre class="page_scheme">)/,
            `$1<p class="page_layer">${layer}</p>\n\n$2`,
          );
        }
      }
      // A page without an <h1> still has a <title>: the blog index is "Telegram
      // News" there and "blog" if the last path segment is all one takes.
      const docTitle = decode(
        ((html.match(/<title>([^<]*)</) || [])[1] || "").trim(),
      );
      title = extractH1(html) || docTitle || rel.split("/").pop() || "Telegram";
      rawCrumbs = extractCrumbs(html);
      anchorsByPath.set(normPath, originalAnchors(html));
    }
    const published = extractPublishedDate(html);
    records.push({
      pg,
      normPath,
      rel,
      body,
      title,
      crumbs,
      rawCrumbs,
      origin,
      isJson,
      published,
    });
  }

  // Only now, with every page that could be extracted in hand, does the closure
  // exist — and the breadcrumbs, which are links like any other, are resolved
  // against it. A breadcrumb belongs to the page that carries it, so it uses
  // that page's own host, and falls back to that host too, not to
  // core.telegram.org, which does not serve telegram.org's paths.
  for (const r of records) addToClosure(r.pg.url, r.normPath);
  for (const r of records) {
    if (r.isJson) continue;
    r.crumbs = r.rawCrumbs.map((c) => ({
      title: c.title,
      url: /^https?:\/\//i.test(c.url)
        ? c.url
        : inClosure(new URL(r.origin).hostname, c.url)
          ? localUrl(c.url)
          : r.origin + c.url,
    }));
    if (r.normPath.startsWith("/blog/") && !r.crumbs.length) {
      r.crumbs = [crumb("Blog", "/blog/")];
    }
  }
  const blogIndex = records.find((record) => record.normPath === "/blog");
  if (blogIndex) blogIndex.body = buildBlogArchive(records);

  if (notExtracted.length) {
    console.log(
      "pages in the backup with no extractable article (left out of the mirror):",
      notExtracted.length,
    );
    for (const u of notExtracted) console.log("  " + u);
  }

  const slugsByPath = new Map(
    records.map((r) => [r.normPath, headingSlugs(r.body)]),
  );

  // ---- link rewriting with anchor validation ----
  // `null` = unresolvable (the link must stay/become an off-site link),
  // `''`   = the link carried an empty `#`, which simply drops away.
  // Last resort for an anchor none of the exact rules claim. Three habits of the
  // original account for nearly all of them, and all three are spelling, not
  // meaning: the fragment is written in the case of the method
  // (`#sendMessage` for the heading that slugs to `sendmessage`); the older
  // slugger left the *entity digits* of an apostrophe in the id
  // (`bot&#39;s` → `bot-39s`, where the heading now slugs to `bot-s`); and the
  // punctuation between words differs. Comparing the letters and digits alone —
  // with that `39` removed — reunites them. A form claimed by two different
  // headings is left alone: a guess between two sections is worse than no jump.
  const looseKey = (s: string): string =>
    s
      .toLowerCase()
      .replace(/39/g, "")
      .replace(/[^a-z0-9]+/g, "");
  const looseByPath = new Map<string, Map<string, string | null>>();
  const looseIndex = (targetPath: string): Map<string, string | null> => {
    const existing = looseByPath.get(targetPath);
    if (existing) return existing;
    const index = new Map<string, string | null>();
    for (const slug of slugsByPath.get(targetPath) || []) {
      const k = looseKey(slug);
      index.set(k, index.has(k) ? null : slug); // null marks an ambiguous key
    }
    looseByPath.set(targetPath, index);
    return index;
  };

  const resolveAnchor = (targetPath: string, anchor: string): string | null => {
    const targetSlugs = slugsByPath.get(targetPath) ?? new Set<string>();
    const a = anchor.slice(1);
    if (!a) return "";
    if (targetSlugs.has(a)) return a;
    if (a.startsWith("q-") && targetSlugs.has(a.slice(2))) return a.slice(2); // original FAQ anchors
    const mapped = anchorsByPath.get(targetPath)?.get(a);
    if (mapped && targetSlugs.has(mapped)) return mapped;
    const index = looseIndex(targetPath);
    const key = looseKey(a);
    const loose = index.get(key);
    if (loose) return loose;
    // The original truncates its ids at 60 characters, so a link written
    // against a long heading arrives cut in half
    // ("#how-can-i-make-sure-that-webhook-requests-are-coming-from-telegr").
    // A prefix that long can only belong to one heading — and if it somehow
    // belongs to two, no jump is made.
    if (key.length >= 24) {
      let hit: string | null = null;
      for (const [k, slug] of index) {
        if (!slug || !k.startsWith(key)) continue;
        if (hit) return null;
        hit = slug;
      }
      if (hit) return hit;
    }
    return null;
  };

  // Resolve host + path to a local URL, or to null when the target is outside
  // the mirrored closure. Percent-escapes matter: the closure holds decoded
  // paths ("/type/Vector t") while links carry encoded ones
  // ("/type/Vector%20t"), and the emitted URL has to be encoded again.
  //
  // A query string names a *version* of the page rather than another page:
  // "?layer=225" is the "Switch »" of the layer selector and the "Layer N"
  // headings of /api/layers. Upstream it only sets the stel_dev_layer cookie
  // and 302s back to the same path, so the path is what the link is after —
  // it is localized and the parameter dropped. Any other query cannot be
  // reproduced by a static mirror, so such a link stays off-site.
  const LAYER_QUERY = /^\?layer=\d+$/i;
  // Upstream answers some of the linked URLs with another page the mirror does
  // hold (/widgets/login → /bots/telegram-login, /dl → /apps). Following that
  // redirect here is better than either leaving the link off-site or making a
  // second copy of one page under two paths.
  const aliases = new Map<string, string>();
  for (const r of meta.redirects || [])
    aliases.set(hostKey(new URL(r.url).hostname) + r.path, r.to);

  const stats = {
    anchorsDropped: new Map<string, number>(),
    layerLocalized: 0,
    aliased: 0,
  };
  const target = (
    host: string,
    pagePath: string,
    anchor = "",
    query = "",
  ): string | null => {
    const paths = closureByHost.get(hostKey(host || ""));
    if (!paths) return null;
    if (query && !LAYER_QUERY.test(query)) return null;
    let decoded = decodePath(pagePath || "/").replace(/\/+$/, "");
    const alias = aliases.get(hostKey(host) + decoded);
    if (!paths.has(decoded) && alias) {
      decoded = alias;
      stats.aliased++;
      anchor = ""; // the fragment belonged to the page that redirected away
    }
    if (!paths.has(decoded)) return null;
    // An anchor naming nothing in the mirror is dropped instead of sending the
    // reader off-site: these fragments (#test-phone-numbers,
    // #q-how-are-voice-calls-authenticated) no longer exist upstream either —
    // the original renamed those sections — so the page, not the host, is what
    // the link is really after, and the page is right here.
    const a = anchor ? resolveAnchor(decoded, anchor) : "";
    if (a === null) {
      const key = decoded + anchor;
      stats.anchorsDropped.set(key, (stats.anchorsDropped.get(key) || 0) + 1);
    }
    if (query) stats.layerLocalized++;
    return encodePath(decoded + "/") + (a ? "#" + a : "");
  };

  // Anything already absolute, scheme-qualified or a bare fragment is somebody
  // else's job — the replacements above have handled it by the time the
  // document-relative rules below run.
  const ABSOLUTE = /^(?:[a-zA-Z][a-zA-Z0-9+.-]*:|\/\/|\/|#)/;

  // Document-relative links — `TL`, `transports#websocket`, `?layer=98` — are
  // resolved against the URL of the page that carries them, and that URL is not
  // the same shape here as upstream: the original serves /mtproto/TL-formal,
  // the mirror serves the directory /mtproto/TL-formal/. Copied verbatim,
  // href="TL" therefore means /mtproto/TL (right) upstream and
  // /mtproto/TL-formal/TL (a 404) here. Resolving against the *original* URL and
  // emitting an absolute path makes the link immune to the URL shape.
  // The layer query of such a link ("?layer=225" — the bare "Switch »" href) is
  // handled by target(): the mirror holds one layer, so the parameter goes and
  // the link stays inside the mirror.
  const RELBASE = "https://relative.invalid";
  const relTarget = (
    raw: string,
    ownPath: string,
    origin: string,
    host: string,
  ): string | null => {
    let u: URL;
    try {
      u = new URL(raw, RELBASE + ownPath);
    } catch {
      return null;
    }
    if (u.origin !== RELBASE) return null;
    const local = target(host, u.pathname, u.hash, u.search);
    return local === null ? origin + u.pathname + u.search + u.hash : local;
  };

  const rewriteLinks = (
    md: string,
    ownPath: string,
    origin: string,
  ): string => {
    const host = new URL(origin).hostname;
    const externalizeSrcset = (value: string): string =>
      value
        // Telegram currently emits `url, 1200w`; the comma incorrectly splits
        // the descriptor into a second candidate. Normalize it to valid srcset.
        .replace(/,\s+(\d+(?:\.\d+)?[wx])(?=\s*(?:,|$))/gi, " $1")
        .replace(/(^|,\s*)\/\//g, "$1https://")
        .replace(/(^|,\s*)\/(?!\/)/g, `$1${origin}/`);
    return (
      md
        .replace(
          /\bsrcset="([^"]*)"/gi,
          (_match, value: string) => `srcset="${externalizeSrcset(value)}"`,
        )
        .replace(/<img([^>]*?)src="\/\//g, '<img$1src="https://')
        .replace(/<img([^>]*?)src="\/(?!\/)/g, `<img$1src="${origin}/`)
        .replace(/(<a[^>]*?)href="\/file\//g, `$1href="${origin}/file/`)
        .replace(/(<a[^>]*?)href="\/img\//g, `$1href="${origin}/img/`)
        .replace(/(<a[^>]*?)href="\/\//g, '$1href="https://')
        .replace(
          /(<(?:source|video|img)[^>]*?)src="\/(?!\/)/g,
          `$1src="${origin}/`,
        )
        .replace(/(<video[^>]*?)poster="\/(?!\/)/g, `$1poster="${origin}/`)
        .replace(/!\[([^\]]*)\]\(\/(?!\/)/g, `![$1](${origin}/`)
        .replace(/!\[([^\]]*)\]\(\/\//g, "![$1](https://")
        // Turndown escapes markdown punctuation, and it does so inside link
        // destinations too: telegram.org's DSA report links to
        // `/privacy\#8-3-law-enforcement-authorities`. A backslash there is not
        // part of the URL, and while it stays the fragment is invisible to every
        // rule below — the link left the mirror for a page the mirror holds.
        .replace(/\]\(([^)\s]+)\)/g, (m0, dest) =>
          dest.includes("\\#") ? `](${dest.replace(/\\#/g, "#")})` : m0,
        )
        // A protocol-relative markdown link is an absolute URL, not a path:
        // telegram.org/faq writes the cross-host ones as `//core.telegram.org/api`.
        // Left to the site-relative rule below, it was glued to the origin of the
        // page carrying it and produced https://telegram.org//core.telegram.org/api
        // — a 200 that serves the telegram.org home page instead of the API docs.
        // The raw-HTML form of the same thing is normalised a few lines above.
        .replace(/\]\(\/\/([^)\s]+)\)/g, "](https://$1)")
        // Order matters from here on. A site-relative link belongs to the host of
        // the page carrying it, so it is resolved first; an absolute link carries
        // its own host and is resolved after. The other way round, a link the
        // absolute rule had just localized ("/techfaq/") was picked up again by
        // the site-relative rule and re-resolved against the *carrying* page's
        // host, which turned core.telegram.org/techfaq on the telegram.org FAQ
        // into https://telegram.org/techfaq/ — a page that host does not serve.
        //
        // Hrefs kept as raw HTML — tables and the TL-schema blocks. Site-relative
        // ones used to stay extension-less (a redirect per link on GitHub Pages)
        // and, for the ~200 pointing outside the mirror, they 404'd.
        // A raw href is already attribute-escaped in the source HTML, so the
        // off-site fallback is passed through verbatim; a local URL comes out of
        // encodePath() and carries nothing that would need escaping.
        .replace(
          /(<a\b[^>]*?)href="(\/(?!\/)[^"?#]*)(\?[^"#]*)?(#[^"]*)?"/g,
          (m0, head, p, q, anchor) => {
            const local = target(host, p, anchor, q);
            return `${head}href="${local === null ? origin + p + (q || "") + (anchor || "") : local}"`;
          },
        )
        // Absolute ones left the mirror even when the target is part of it. Both
        // schemes count: the older pages still write http://core.telegram.org/techfaq,
        // which is the very same page as its https twin.
        .replace(
          /(<a\b[^>]*?)href="https?:\/\/([^/"?#]+)([^"?#]*)(\?[^"#]*)?(#[^"]*)?"/gi,
          (m0, head, h, p, q, anchor) => {
            const local = target(h, p, anchor, q);
            return local === null ? m0 : `${head}href="${local}"`;
          },
        )
        // Same-page anchors. One naming a section the page no longer has — the
        // original dropped "Web Apps" from /bots/features and kept linking to it
        // — points at the top of the page instead of staying a fragment that
        // resolves nowhere; the section it wanted is gone upstream as well.
        .replace(/\]\((#[^)\s]+)\)/g, (m0, anchor) => {
          const a = resolveAnchor(ownPath, anchor);
          if (a === null)
            stats.anchorsDropped.set(
              ownPath + anchor,
              (stats.anchorsDropped.get(ownPath + anchor) || 0) + 1,
            );
          return `](${a ? "#" + a : "#"})`;
        })
        // cross-page relative links
        .replace(
          /\]\((?!https?:|#|\/\/)(\/[^)\s?#]*)(\?[^)\s#]*)?(#[^)\s]*)?\)/g,
          (m0, p, q, anchor) => {
            const local = target(host, p, anchor, q);
            return `](${local === null ? origin + p + (q || "") + (anchor || "") : local})`;
          },
        )
        // absolute links to a mirrored host: local when that host serves the path
        .replace(
          /\]\(https?:\/\/([^)\s/?#]+)([^)\s?#]*)(\?[^)\s#]*)?(#[^)\s]*)?\)/gi,
          (m0, h, p, q, anchor) => {
            const local = target(h, p, anchor, q);
            return local === null ? m0 : `](${local})`;
          },
        )
        // document-relative hrefs kept as raw HTML (tables, TL-schema blocks)
        .replace(/(<a\b[^>]*?)href="([^"]+)"/g, (m0, head, raw) => {
          if (ABSOLUTE.test(raw)) return m0;
          const local = relTarget(raw, ownPath, origin, host);
          return local === null ? m0 : `${head}href="${escAttr(local)}"`;
        })
        // document-relative markdown links. The leading group tells a link from an
        // image: `![alt](src)` is matched by its whole prefix, so the `]` branch
        // cannot claim it, and image sources are left to the rules above.
        .replace(/(!\[[^\]]*\]|\])\(([^)\s]+)\)/g, (m0, lead, raw) => {
          if (lead[0] === "!" || ABSOLUTE.test(raw)) return m0;
          const local = relTarget(raw, ownPath, origin, host);
          return local === null ? m0 : `](${local})`;
        })
    );
  };

  // ---- pass 2: write files ----
  let written = 0;
  for (const r of records) {
    // A JSON document is data, not prose: rewriting "links" inside it would
    // corrupt the very bytes the page exists to reproduce.
    let body = r.isJson ? r.body : rewriteLinks(r.body, r.normPath, r.origin);
    // A page whose original numbers its sections with <h1> — telegram.org's
    // Mini App Terms has seven — would arrive as seven top-level headings and
    // no page title at all. Push every heading one level down; the title then
    // takes the one h1 below, and the outline reads like a document again.
    let h1s = 0;
    eachTextLine(body, (t) => {
      if (/^#\s/.test(t)) h1s++;
    });
    if (h1s > 1) {
      const out: string[] = [];
      let fence = 0;
      for (const line of body.split("\n")) {
        const t = line.trim();
        const f = /^(`{3,})/.exec(t);
        if (fence) {
          if (f && f[1].length >= fence) fence = 0;
        } else if (f) {
          fence = f[1].length;
        } else {
          out.push(line.replace(/^(#{1,5})(\s)/, "#$1$2"));
          continue;
        }
        out.push(line);
      }
      body = out.join("\n");
    }
    // the original <h1> lives outside the content div: restore it so every
    // page has exactly one h1 (a11y/SEO); ignore '#' lines inside code fences
    let hasH1 = false;
    eachTextLine(body, (t) => {
      if (/^#\s/.test(t)) {
        hasH1 = true;
        return false;
      }
    });
    if (!hasH1) body = `# ${r.title}\n\n` + body;
    // table header cells get scope for screen readers
    if (!r.isJson) body = body.replace(/<th(\s|>)/g, '<th scope="col"$1');
    const description = deriveDescription(body);
    const fm = [
      "---",
      `title: "${fmEscape(r.title)}"`,
      // final_url is set when the original answers the mirrored URL with
      // another document — telegram.org/tos serves /tos/eu. Pointing at what
      // was actually copied beats pointing at a URL that answers differently.
      `original: "${r.pg.final_url || r.pg.url}"`,
      `section: ${sectionOf(
        r.normPath,
        groupBySource.get(sourceKey(r.pg.url)) ?? r.pg.group,
      )}`,
      // Blog posts carry their publication date upstream; without it the menu
      // could only sort a decade of announcements alphabetically.
      ...(r.published ? [`date: ${r.published}`] : []),
      ...(description ? [`description: "${fmEscape(description)}"`] : []),
      `crumbs: ${JSON.stringify(r.crumbs)}`,
      "layout: layout.njk",
      "---",
      "",
    ].join("\n");
    const dest = path.join(CRAWLED, r.rel + ".md");
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, fm + "\n" + body + "\n");
    written++;
  }
  console.log("pages written to crawled/:", written);
  console.log("layer-switch links localized:", stats.layerLocalized);
  console.log(
    "links following an upstream redirect to a mirrored page:",
    stats.aliased,
  );
  // Anchors the original itself has renamed away: the link now lands on the
  // mirrored page without a fragment instead of leaving the site. Listed so a
  // regression in anchor mapping cannot hide behind a silent drop.
  const dropped = [...stats.anchorsDropped].sort((a, b) => b[1] - a[1]);
  console.log(
    "links whose anchor no longer exists (kept local, fragment dropped):",
    dropped.length,
  );
  for (const [where, n] of dropped) console.log(`  ${n}x ${where}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
