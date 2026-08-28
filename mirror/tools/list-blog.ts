#!/usr/bin/env node
// Walks the blog archive of telegram.org and writes every post it lists into
// tools/extra-pages.json (group "Blog"), so the mirror holds the blog whole
// rather than only the posts other pages happen to link to.
//
//   node tools/list-blog.ts        # discover posts, extend the list
//   npm run backup -- <date>        # fetch the new ones
//
// The paginated archive pages are not mirrored: they are a *view* of the blog.
// tools/extract.ts rebuilds /blog/ as one complete year-grouped archive, while
// the sidebar keeps only the archive link and the twelve newest posts.
import fs from "node:fs";
import path from "node:path";
import { setDefaultResultOrder } from "node:dns";

setDefaultResultOrder("ipv6first"); // same reason as in tools/crawl.ts

const ROOT = path.resolve(".");
const EXTRA = path.join(ROOT, "tools", "extra-pages.json");
const INDEX = "https://telegram.org/blog";
const STEP = 20;

const fetchPage = async (url: string): Promise<string> => {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (documentation backup)",
          Accept: "text/html",
          "Accept-Language": "en-US,en;q=0.9",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(30_000),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.text();
    } catch (e) {
      if (i === 2) throw e;
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
  throw new Error(`failed to fetch after 3 attempts: ${url}`);
};

type ExtraPages = {
  groups: { Blog: string[] } & Record<string, string[]>;
  language_codes?: string[];
  not_mirrored?: Record<string, string>;
};

const posts = new Set<string>();
let offset = 0;
// An offset past the end does not 404 — the archive simply serves its first
// page again. Two stops guard against that: the "next" link has to be there,
// and the page has to bring at least one post that was not seen before.
for (;;) {
  const url = offset ? `${INDEX}?offset=${offset}` : INDEX;
  const html = await fetchPage(url);
  const found = [
    ...new Set(
      [...html.matchAll(/href="(\/blog\/[A-Za-z0-9._-]+)"/g)].map((m) => m[1]),
    ),
  ];
  const fresh = found.filter((p) => !posts.has(p));
  for (const p of found) posts.add(p);
  const hasNext = html.includes(`offset=${offset + STEP}"`);
  console.log(
    `${url} → ${found.length} posts (${fresh.length} new), total ${posts.size}`,
  );
  if (!hasNext || !fresh.length) break;
  offset += STEP;
  await new Promise((r) => setTimeout(r, 150));
}

const extra = JSON.parse(fs.readFileSync(EXTRA, "utf8")) as ExtraPages;
const ruledOut = new Set<string>(Object.keys(extra.not_mirrored ?? {}));
const langs = new Set<string>(extra.language_codes ?? []);
const before = new Set<string>(extra.groups.Blog ?? []);
const urls = [...posts]
  .map((p) => "https://telegram.org" + p)
  .filter((u) => !ruledOut.has(u))
  .filter((u) => {
    const seg = new URL(u).pathname.split("/").pop() ?? "";
    return !(langs.has(seg) && seg !== "en");
  });

extra.groups.Blog = [...new Set([...before, ...urls])].sort();
fs.writeFileSync(EXTRA, JSON.stringify(extra, null, 1) + "\n");

const added = extra.groups.Blog.filter((u) => !before.has(u));
console.log(
  `\narchive: ${posts.size} posts listed, ${added.length} new to the mirror`,
);
console.log(
  `extra-pages.json Blog: ${before.size} → ${extra.groups.Blog.length}`,
);
