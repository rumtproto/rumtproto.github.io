// Creates a dated backup of the mirrored pages into backup/<date>/pages/.
//
//   * the documentation sections of core.telegram.org (Telegram API, MTProto
//     protocol, Schema) — crawled transitively from their seeds;
//   * every page listed in tools/extra-pages.json — the Bot API, the blog, the
//     FAQs and the rest that the documentation links to. Those are fetched as
//     LEAVES: their own links are not followed, or one blog post would drag in
//     most of telegram.org.
//
// Usage: npm run backup -- [date]     (date defaults to today, YYYY-MM-DD)
//
// Re-running against an existing backup is the way to *extend* it: a page whose
// file is already there is kept byte for byte and only the missing ones are
// fetched, so a backup can grow without its snapshot date becoming a lie.
//
// The backup is the ONLY source for the site build: tools/extract.ts reads
// exclusively from backup/<date>/ and never touches the network.
import { mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { createHash } from "node:crypto";
import { setDefaultResultOrder } from "node:dns";
import path from "node:path";

// telegram.org answers from geo-located edges, and the two address families of
// this machine reach different ones: over IPv4 /tos redirects to the German
// /tos/de, over IPv6 to the English /tos/eu. Node prefers IPv4 where curl
// prefers IPv6, which is the whole difference between a mirror in English and a
// mirror in German. Ask for IPv6 first; without it, Happy Eyeballs still falls
// back to IPv4 and fetchDocument() below catches what comes back.
setDefaultResultOrder("ipv6first");

const BASE = "https://core.telegram.org";
const ROOT = path.resolve(".");
// Both hosts the mirror holds pages from. A redirect that leaves them means the
// target is not a document of ours (a login form, an app store).
const MIRRORED_HOSTS = new Set(["core.telegram.org", "telegram.org"]);

const date = process.argv[2] || new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date))
  throw new Error(`invalid backup date: ${date}`);
const BACKUP = path.join(ROOT, "backup", date);
const PAGES = path.join(BACKUP, "pages");

// Sections included in the mirror.
const SEEDS = ["/api", "/mtproto", "/schema"];
const ALLOW_PREFIXES = [
  "/api",
  "/mtproto",
  "/schema",
  "/constructor/",
  "/method/",
  "/type/",
];
const ALLOW_EXACT = ["/methods", "/constructors", "/types", "/mtproto_v1"];

const SKIP_PREFIXES = ["/css/", "/js/", "/img/", "/file/", "/fonts/"];

type FetchResult = { html: string; finalUrl: string; translation?: string };
const errorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);
const isErrno = (
  error: unknown,
  code: string,
): error is NodeJS.ErrnoException =>
  error instanceof Error && "code" in error && error.code === code;
type Redirect = { url: string; path: string; to: string };
type ManifestPage = {
  url: string;
  path: string;
  file: string;
  bytes: number;
  sha256: string;
  site?: string;
  group?: string;
  final_url?: string;
};
type PreviousManifest = {
  not_mirrored?: Record<string, string>;
  pages?: ManifestPage[];
  redirects?: Redirect[];
  translated?: Record<string, string>;
};
type ExtraPages = {
  groups: Record<string, string[]>;
  not_mirrored: Record<string, string>;
  language_codes?: string[];
};

function isAllowed(p: string): boolean {
  if (SKIP_PREFIXES.some((s) => p.startsWith(s))) return false;
  if (ALLOW_EXACT.includes(p)) return true;
  return ALLOW_PREFIXES.some((s) =>
    s.endsWith("/") ? p.startsWith(s) : p === s || p.startsWith(s + "/"),
  );
}

function normalize(href: string): string | null {
  if (!href) return null;
  let url;
  try {
    url = new URL(href, BASE);
  } catch {
    return null;
  }
  if (url.host !== "core.telegram.org") return null;
  let p = decodeURIComponent(url.pathname);
  if (p === "/" || p === "") return null;
  if (/\.(png|jpe?g|gif|svg|ico|css|js|webp|mp4|pdf|xml)$/i.test(p))
    return null;
  return p;
}

function extractLinks(html: string): Set<string> {
  const out = new Set<string>();
  const re = /<a\s[^>]*href\s*=\s*"([^"]*)"/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const p = normalize(m[1]);
    if (p && isAllowed(p)) out.add(p);
  }
  return out;
}

// One file per page, named after the path. The two hosts do not share a path,
// which is what lets the mirror serve both from one tree — and lets one flat
// directory of files stand for both.
function safeName(p: string): string {
  return p.replace(/^\/+/, "").replace(/\//g, "__") + ".html";
}

// telegram.org negotiates by address: /privacy answers /privacy/de to a German
// one. Asking for English fixes most of it, and what is left is retried with
// ?setln=en — the site's own language switch. Telling a *translation* from a
// *jurisdiction* matters, because /tos legitimately answers /tos/eu in English
// and re-asking there would hand back the German text: the page lists its own
// language codes in the switcher (setln=de, setln=fa …), so a final segment
// that appears in that list — and only that — is a translation.
// The English text may still live under another path (/privacy → /privacy/eu);
// that URL is recorded as the page's original.
const langCodes = (html: string): Set<string> =>
  new Set([...html.matchAll(/setln=([a-z-]{2,5})\b/g)].map((m) => m[1]));

// Not every translation shows in the URL: /tos/eu-dsa keeps its path and simply
// answers in German. This mirror is an English one, so the text itself gets a
// look. The closed word classes of the two languages do not overlap and a page
// of documentation uses them by the hundred, which is all the precision this
// needs — a hit only costs one more request through the language switch.
const EN_WORDS = /\b(the|and|of|to|for|with|that|this|are|from|your)\b/gi;
const DE_WORDS =
  /\b(und|der|die|das|für|von|nicht|oder|mit|sich|auch|Sie|wir|werden)\b/g;
function looksEnglish(html: string): boolean {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  return (
    (text.match(EN_WORDS) || []).length >= (text.match(DE_WORDS) || []).length
  );
}

async function fetchUrl(url: string, tries = 3): Promise<FetchResult> {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (documentation backup)",
          Accept: "text/html,application/json",
          "Accept-Language": "en-US,en;q=0.9",
        },
        redirect: "follow",
        signal: AbortSignal.timeout(30_000),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return { html: await res.text(), finalUrl: res.url || url };
    } catch (e) {
      if (i === tries - 1) throw e;
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
  throw new Error(`failed to fetch after ${tries} attempts: ${url}`);
}

// The path has to be encoded before it becomes a URL. `/type/#` — the TL "nat"
// type — is a real page of the original, but pasted into a URL its `#` starts a
// fragment: the request went to `/type/`, the original answered "Page not
// found", and that answer sat in the backup as the page for `#`, with every
// schema listing linking to it.
const pageUrl = (origin: string, pagePath: string): string =>
  origin + pagePath.split("/").map(encodeURIComponent).join("/");

async function fetchPage(pagePath: string): Promise<string> {
  return (await fetchUrl(pageUrl(BASE, pagePath))).html;
}

// Neither host answers an unknown path with 404: telegram.org serves its front
// page with 200. So a mistyped link upstream (`t.me/username` written without a
// scheme, a `#3-3-5-paid-posts` fragment used as a path) looks exactly like a
// page and would be mirrored as one — the same home page under six nonsense
// addresses. Asking each host for a path that cannot exist yields the title of
// that stand-in, and any answer wearing it is not a document.
const titleOf = (html: string): string =>
  ((html.match(/<title>([^<]*)</) || [])[1] || "").trim();
const catchAllTitles = new Map<string, string>();
async function catchAllTitle(origin: string): Promise<string> {
  if (!catchAllTitles.has(origin)) {
    const probe = `${origin}/zz-mirror-probe-${Math.random().toString(36).slice(2, 10)}`;
    const got = await fetchUrl(probe, 1).catch(() => null);
    catchAllTitles.set(origin, got ? titleOf(got.html) : "");
  }
  return catchAllTitles.get(origin) ?? "";
}

// Fetch a linked page in English. The plain URL is tried first; if it lands on
// a translation — or on a redirect loop, which is what /privacy does over the
// wrong edge — the site's own language switch (?setln=en) is tried next. The
// first English answer wins; if neither is English the last answer is kept and
// flagged, so a translated page is visible in the manifest rather than silently
// mirrored as if it were the original.
async function fetchDocument(u: string): Promise<FetchResult> {
  const attempts = [u, u + (u.includes("?") ? "&" : "?") + "setln=en"];
  let fallback = null;
  let lastErr = null;
  for (const a of attempts) {
    let got;
    try {
      got = await fetchUrl(a, 2);
    } catch (e) {
      lastErr = e;
      continue;
    }
    const landed = decodeURIComponent(new URL(got.finalUrl).pathname);
    const seg = landed.slice(landed.lastIndexOf("/") + 1);
    const byUrl = seg !== "en" && langCodes(got.html).has(seg);
    if (!byUrl && looksEnglish(got.html)) return got;
    fallback = { ...got, translation: byUrl ? seg : "non-English text" };
  }
  if (fallback) return fallback;
  throw lastErr || new Error("no response");
}

async function main(): Promise<void> {
  await mkdir(PAGES, { recursive: true });
  const seen = new Set<string>();
  const titles = new Map<string, string>(); // file -> its <title>, for the stub audit below
  const fileOwner = new Map<string, string>(); // file name -> host
  const queue: string[] = [...SEEDS];
  const manifest: ManifestPage[] = [];
  let fetched = 0;
  let cached = 0;

  // ---- the documentation sections, crawled transitively ----
  while (queue.length) {
    const p = queue.shift();
    if (!p || seen.has(p)) continue;
    seen.add(p);
    const file = safeName(p);
    const full = path.join(PAGES, file);
    let html;
    try {
      const existing = await readFile(full, "utf8");
      if (existing.length > 200) {
        html = existing;
        cached++;
      } else throw new Error("too small");
    } catch {
      html = await fetchPage(p);
      await writeFile(full, html);
      fetched++;
      await new Promise((r) => setTimeout(r, 120));
    }
    fileOwner.set(file, "core.telegram.org");
    titles.set("pages/" + file, titleOf(html));
    manifest.push({
      url: BASE + p,
      path: p,
      file: "pages/" + file,
      bytes: Buffer.byteLength(html),
      sha256: createHash("sha256").update(html).digest("hex"),
    });
    if ((fetched + cached) % 100 === 0)
      console.log(
        "progress:",
        fetched + cached,
        "pages (fetched",
        fetched,
        "cached",
        cached + ")",
      );
    for (const q of extractLinks(html)) if (!seen.has(q)) queue.push(q);
  }
  console.log("documentation sections:", manifest.length, "pages");

  // ---- the linked pages outside them, fetched as leaves ----
  const extra = JSON.parse(
    await readFile(path.join(ROOT, "tools", "extra-pages.json"), "utf8"),
  ) as ExtraPages;
  // What an earlier run already learned about these URLs. A page that turned
  // out to be a redirect or no page at all leaves no file behind, so without
  // this it would be re-fetched on every single run — and the list only grows.
  const prev: PreviousManifest = await readFile(
    path.join(BACKUP, "manifest.json"),
    "utf8",
  )
    .then((value) => JSON.parse(value) as PreviousManifest)
    .catch(() => ({}));
  const knownRedirect = new Map<string, Redirect>(
    (prev.redirects ?? []).map((r) => [r.url, r]),
  );
  const knownSkip = { ...(prev.not_mirrored || {}) };
  const redirects: Redirect[] = [];
  const skipped = { ...extra.not_mirrored };
  const translated = { ...(prev.translated || {}) };
  const seenKeys = new Set<string>(); // host+path of every extra page already looked at
  const wanted = new Map<string, string>(); // path -> section group
  for (const [group, urls] of Object.entries(extra.groups)) {
    for (const u of urls) wanted.set(new URL(u).pathname, group);
  }
  // The language switcher of telegram.org is part of every page it serves, so
  // its links are harvested along with the content. This mirror is an English
  // one: a path that ends in one of the site's own language codes is that
  // page's translation and is not taken, and a URL the original answers with a
  // translation of a page already held (/tos/WebAppData → /tos/de) is recorded
  // as an alias of that page rather than copied.
  const LANGS = new Set(extra.language_codes || []);
  const stripLang = (p: string): string => {
    const seg = p.slice(p.lastIndexOf("/") + 1);
    return LANGS.has(seg) && seg !== "en" ? p.slice(0, p.lastIndexOf("/")) : p;
  };
  const isTranslationPath = (p: string): boolean => stripLang(p) !== p;

  for (const [group, urls] of Object.entries(extra.groups)) {
    for (const u of urls) {
      const asked = new URL(u);
      const p = decodeURIComponent(asked.pathname);
      const host = asked.hostname;
      // Host and path together identify a page: telegram.org/api is not
      // core.telegram.org/api. The original answers the first with a redirect
      // to the second — and skipping it because "that path is already taken"
      // is how that link stayed off-site with nothing recorded about it.
      const key = host + p;
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);
      if (host === "core.telegram.org") {
        if (seen.has(p)) continue; // already held by the section crawl
        seen.add(p);
      }
      const known = knownRedirect.get(u);
      if (known) {
        redirects.push(known);
        continue;
      }
      if (knownSkip[u]) {
        skipped[u] = knownSkip[u];
        continue;
      }
      if (isTranslationPath(p)) {
        skipped[u] = `перевод страницы ${stripLang(p)} — зеркало английское`;
        continue;
      }
      // One flat directory of files for two hosts. Their paths do not overlap
      // — except where the original itself redirects one onto the other — so a
      // name already taken by the other host gets the host as a prefix instead
      // of overwriting a page that is not its own.
      let file = safeName(p);
      if (fileOwner.has(file) && fileOwner.get(file) !== host)
        file = host + "__" + file;
      fileOwner.set(file, host);
      const full = path.join(PAGES, file);
      let html;
      let finalUrl = u;
      try {
        const existing = await readFile(full, "utf8");
        if (existing.length > 200) {
          html = existing;
          cached++;
        } else throw new Error("too small");
      } catch {
        // A page harvested from the links of another page may simply be gone:
        // the original links to /bots/samples/hellobot and answers 404. That is
        // a fact about this URL, not a failure of the crawl — it is recorded
        // with the reason and the run goes on. (The documentation sections
        // above still fail hard: a 404 there means the crawl itself is wrong.)
        let got;
        try {
          got = await fetchDocument(u);
        } catch (e) {
          skipped[u] = `не скачалось: ${errorMessage(e)}`;
          continue;
        }
        if (got.translation) translated[u] = got.translation;
        finalUrl = got.finalUrl;
        const fin = new URL(finalUrl);
        const finPath = decodeURIComponent(fin.pathname);
        // Where the redirect landed decides what this URL is.
        if (!MIRRORED_HOSTS.has(fin.hostname)) {
          skipped[u] = `302 → ${finalUrl} — вне зеркалируемых хостов`;
          continue;
        }
        if (finPath === "/" || finPath === "") {
          skipped[u] = `302 → ${finalUrl} — страница удалена из оригинала`;
          continue;
        }
        const landedOn = wanted.has(finPath) ? finPath : stripLang(finPath);
        if (finPath !== p && (wanted.has(landedOn) || seen.has(landedOn))) {
          // an alias of another page the mirror holds: no file of its own
          redirects.push({ url: u, path: p, to: landedOn });
          continue;
        }
        if (got.translation) {
          skipped[u] =
            `оригинал отдаёт только перевод (${got.translation}) — зеркало английское`;
          continue;
        }
        const stand = await catchAllTitle(asked.origin);
        if (stand && titleOf(got.html) === stand) {
          skipped[u] =
            `оригинал отдаёт по этому адресу свою заглушку «${stand}» — страницы нет`;
          continue;
        }
        html = got.html;
        await writeFile(full, html);
        fetched++;
        await new Promise((r) => setTimeout(r, 150));
      }
      titles.set("pages/" + file, titleOf(html));
      const entry: ManifestPage = {
        url: asked.origin + p,
        path: p,
        file: "pages/" + file,
        bytes: Buffer.byteLength(html),
        sha256: createHash("sha256").update(html).digest("hex"),
        site: asked.origin,
        group,
      };
      if (finalUrl !== u && finalUrl !== asked.origin + p)
        entry.final_url = finalUrl;
      manifest.push(entry);
    }
  }

  // A backup only ever grows. Extending it must not quietly drop a page an
  // earlier run had — that is how /faq and /techfaq, added by hand before this
  // list existed, would have vanished from the mirror.
  try {
    const prev = JSON.parse(
      await readFile(path.join(BACKUP, "manifest.json"), "utf8"),
    ) as PreviousManifest;
    const now = new Set(manifest.map((m) => m.path));
    // Dropping a page is allowed, but only on the record: it has to be named in
    // not_mirrored (with the reason) or have become a redirect alias.
    const excused = new Set([
      ...Object.keys(skipped).map((u) =>
        decodeURIComponent(new URL(u).pathname).replace(/\/+$/, ""),
      ),
      ...redirects.map((r) => r.path),
    ]);
    const gone = (prev.pages ?? [])
      .map((p) => p.path)
      .filter((p) => !now.has(p) && !excused.has(p));
    if (gone.length) {
      console.error(
        "FAIL: pages present in the previous manifest and missing now:",
      );
      for (const p of gone) console.error("  " + p);
      process.exit(1);
    }
  } catch (e) {
    if (!isErrno(e, "ENOENT")) throw e;
  }

  // The stub check above only sees pages as they are fetched, and a backup is
  // mostly pages fetched long ago. Every entry is measured against the stub of
  // its host, cached ones included: that is how /webapps ("Page not found",
  // taken before the check existed) and /type/# (whose `#` was never encoded,
  // so the request went to /type/ and came back as the same "not found" page)
  // stayed in the mirror as if they were documents.
  const stubPages = [];
  for (const entry of manifest) {
    const host = new URL(entry.url).hostname;
    const stub = await catchAllTitle("https://" + host);
    if (stub && titles.get(entry.file) === stub) stubPages.push(entry);
  }
  if (stubPages.length) {
    const fromSections = stubPages.filter((e) => !e.group);
    for (const e of stubPages.filter((e) => e.group)) {
      skipped[e.url] =
        `оригинал отдаёт по этому адресу свою заглушку «${await catchAllTitle("https://" + new URL(e.url).hostname)}» — страницы нет`;
      manifest.splice(manifest.indexOf(e), 1);
      await rm(path.join(BACKUP, e.file), { force: true });
      console.log("dropped stub page:", e.url);
    }
    if (fromSections.length) {
      console.error(
        'FAIL: the documentation crawl stored the "not found" page of the original:',
      );
      for (const e of fromSections)
        console.error("  " + e.url + " → " + e.file);
      console.error(
        "Delete those files and re-run: a section page that answers with a stub is a bug in the crawl, not a fact about the page.",
      );
      process.exit(1);
    }
  }

  // An alias is only worth recording while it points at a page the mirror
  // actually holds. One recorded by an earlier run can go stale — /tos/de was
  // dropped as a translation and the alias to it was carried forward — and a
  // link following it would land nowhere.
  const paths = new Set(manifest.map((m) => m.path));
  for (const r of redirects) if (!paths.has(r.to)) r.to = stripLang(r.to);
  const staleAliases = redirects.filter((r) => !paths.has(r.to));
  for (const r of staleAliases)
    skipped[r.url] = `302 → ${r.to}, которой нет в зеркале`;
  const liveRedirects = redirects.filter((r) => paths.has(r.to));

  manifest.sort((a, b) => a.path.localeCompare(b.path));
  const meta = {
    site: BASE,
    sections: [
      "Telegram API (/api)",
      "MTProto Protocol (/mtproto)",
      "Schema (/schema)",
      "Bot API (/bots)",
      "Blog (/blog)",
      "FAQ (/faq, /techfaq, …)",
      "Contests",
      "Apps & Clients",
      "Developer Tools",
      "Policies",
      "Other",
    ],
    date,
    generated_at: new Date().toISOString(),
    page_count: manifest.length,
    // Upstream 302s these onto a page the mirror does hold; links to them are
    // rewritten to that page instead of leaving the site.
    redirects: liveRedirects,
    // Linked URLs that are deliberately not pages of the mirror, with why.
    not_mirrored: skipped,
    // Pages the original would only serve translated, with the language it gave.
    translated,
    pages: manifest,
  };
  await writeFile(
    path.join(BACKUP, "manifest.json"),
    JSON.stringify(meta, null, 1),
  );
  await writeFile(
    path.join(BACKUP, "urls.txt"),
    manifest.map((m) => m.path).join("\n") + "\n",
  );
  console.log(
    "DONE. total:",
    manifest.length,
    "fetched:",
    fetched,
    "cached:",
    cached,
    "-> backup/" + date,
  );
  console.log(
    "redirect aliases:",
    liveRedirects.length,
    "| not mirrored:",
    Object.keys(skipped).length,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
