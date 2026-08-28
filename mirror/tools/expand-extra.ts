#!/usr/bin/env node
// Adds to tools/extra-pages.json every page of the two mirrored hosts that the
// built site links to and does not hold yet — one round of closing the mirror
// over its own links.
//
//   node tools/extlinks.ts        # what the built site links to right now
//   node tools/expand-extra.ts    # queue the missing pages for the next crawl
//   npm run backup -- <date>       # fetch only those (the backup is extended)
//   npm run regenerate             # rebuild the site from the backup
//
// Nothing is invented here: the candidates come from external-links.json, the
// pages already held and the URLs already ruled out come from the backup
// manifest. Running it twice with no new links changes nothing.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const EXTRA = path.join(ROOT, "tools", "extra-pages.json");
const REPORT = path.join(ROOT, "external-links.json");

type Report = {
  groups: Record<string, { items: Array<{ url: string; refs: number }> }>;
};
type Manifest = {
  not_mirrored?: Record<string, string>;
  pages: Array<{ path: string; url: string }>;
  redirects?: Array<{ url: string }>;
};
type Extra = {
  groups: Record<string, string[]>;
  not_mirrored?: Record<string, string>;
  not_mirrored_prefixes?: Record<string, string>;
  language_codes?: string[];
};

const MIRRORED_HOSTS = new Set(["core.telegram.org", "telegram.org"]);
// Served by the original as files, not as documents. A JSON endpoint is a
// document here — /api/errors.json and /bots/payments/currencies.json are
// mirrored — so it is the one extension that stays.
const ASSET_DIRS = /^\/(file|img|static|js|css|fonts|_)\//;
const FILE_EXT =
  /\.(png|jpe?g|gif|svg|ico|webp|mp4|webm|zip|tgz|tar|pdf|xml|txt|css|js)$/i;

const BACKUP = path.join(ROOT, "backup", "latest");

// Which menu the page joins. The Bot FAQ is a FAQ before it is a Bot API page:
// the mirror keeps every FAQ of both hosts in one section.
const groupFor = (host: string, pagePath: string): string => {
  if (
    /(^|\/)(faq|techfaq)([_/]|$)/.test(pagePath) ||
    /faq_[a-z]+$/.test(pagePath)
  )
    return "FAQ";
  if (
    pagePath.startsWith("/blackberry") ||
    pagePath === "/contest300K" ||
    /contest|botprize/i.test(pagePath) ||
    pagePath === "/blog/bb-results" ||
    pagePath === "/blog/telegram-x"
  )
    return "Contests";
  if (pagePath === "/blog" || pagePath.startsWith("/blog/")) return "Blog";
  if (
    host === "core.telegram.org" &&
    (pagePath === "/bots" || pagePath.startsWith("/bots/"))
  )
    return "Bot API";
  if (
    host === "telegram.org" &&
    (pagePath === "/source" ||
      pagePath === "/android" ||
      pagePath === "/apps" ||
      pagePath === "/evolution" ||
      pagePath === "/dl" ||
      pagePath.startsWith("/dl/"))
  )
    return "Apps & Clients";
  if (
    host === "core.telegram.org" &&
    /^(?:\/(?:animated_stickers|import-stickers|themes|webapps)|\/(?:gateway|passport|stickers|tdlib|widgets)(?:\/|$))/.test(
      pagePath,
    )
  )
    return "Developer Tools";
  if (
    host === "telegram.org" &&
    (/^\/(?:apple_privacy|moderation|privacy(?:-tpa)?|verify)$/.test(
      pagePath,
    ) ||
      pagePath === "/tos" ||
      pagePath.startsWith("/tos/"))
  )
    return "Policies";
  return "Other";
};

const report = JSON.parse(fs.readFileSync(REPORT, "utf8")) as Report;
const extra = JSON.parse(fs.readFileSync(EXTRA, "utf8")) as Extra;
const manifest = JSON.parse(
  fs.readFileSync(path.join(BACKUP, "manifest.json"), "utf8"),
) as Manifest;

// Held per host: telegram.org/api is not core.telegram.org/api, and it is the
// original that decides — it answers the first with a redirect to the second,
// which the crawler records as an alias.
const held = new Set(
  manifest.pages.map((p) => new URL(p.url).hostname + p.path),
);
const ruledOut = new Set([
  ...Object.keys(manifest.not_mirrored || {}),
  ...Object.keys(extra.not_mirrored || {}),
  ...(manifest.redirects || []).map((r) => r.url),
]);
const queued = new Set(Object.values(extra.groups).flat());
// Whole subtrees the mirror does not take: /tdlib/docs/ is a Doxygen dump of
// the C++ API, hundreds of generated files with markup of their own.
const ruledOutPrefixes = Object.keys(extra.not_mirrored_prefixes || {});
// telegram.org carries its language switcher on every page, so its links come
// along with the content. A path ending in one of the site's own language codes
// is a translation of a page already held — not a page of an English mirror.
const LANGS = new Set(extra.language_codes || []);

const candidates = new Map<string, number>(); // url -> refs
for (const g of Object.values(report.groups)) {
  for (const item of g.items) {
    let u;
    try {
      u = new URL(item.url);
    } catch {
      continue;
    }
    if (!MIRRORED_HOSTS.has(u.hostname) || u.search) continue;
    const p = decodeURIComponent(u.pathname).replace(/\/+$/, "");
    if (!p || p === "/") continue; // the home pages are not mirrored sections
    if (ASSET_DIRS.test(p) || FILE_EXT.test(p)) continue;
    const url = u.origin + p;
    if (
      held.has(u.hostname + p) ||
      ruledOut.has(url) ||
      ruledOut.has(item.url) ||
      queued.has(url)
    )
      continue;
    if (ruledOutPrefixes.some((pre) => url.startsWith(pre))) continue;
    const seg = p.slice(p.lastIndexOf("/") + 1);
    if (LANGS.has(seg) && seg !== "en") continue;
    candidates.set(url, Math.max(candidates.get(url) || 0, item.refs));
  }
}

const added: Record<string, string[]> = {
  "Bot API": [],
  Blog: [],
  FAQ: [],
  Contests: [],
  "Apps & Clients": [],
  "Developer Tools": [],
  Policies: [],
  Other: [],
};
for (const url of candidates.keys()) {
  const u = new URL(url);
  added[groupFor(u.hostname, decodeURIComponent(u.pathname))].push(url);
}
for (const [group, urls] of Object.entries(added)) {
  if (!urls.length) continue;
  extra.groups[group] = [
    ...new Set([...(extra.groups[group] || []), ...urls]),
  ].sort();
}

fs.writeFileSync(EXTRA, JSON.stringify(extra, null, 1) + "\n");

const total = Object.values(added).reduce((s, a) => s + a.length, 0);
console.log(`queued ${total} new page(s) for the next crawl:`);
for (const [group, urls] of Object.entries(added)) {
  if (!urls.length) continue;
  console.log(`  ${group}: ${urls.length}`);
  for (const u of urls.slice(0, 5).sort()) console.log(`    ${u}`);
  if (urls.length > 5) console.log(`    … ${urls.length - 5} more`);
}
console.log(
  "extra-pages.json now lists",
  Object.values(extra.groups).reduce((s, a) => s + a.length, 0),
  "pages",
);
