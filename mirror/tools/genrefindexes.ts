// Generates alphabetical TL reference indexes in the disposable crawled/ tree.
import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

const CRAWLED = path.resolve("crawled");
type FrontMatter = Record<string, string>;
type Kind = "constructor" | "method" | "type";
type KindConfig = readonly [Kind, string, string];

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

const KINDS: readonly KindConfig[] = [
  ["constructor", "Constructors", "https://core.telegram.org/schema"],
  ["method", "Methods", "https://core.telegram.org/schema"],
  ["type", "Types", "https://core.telegram.org/schema"],
];
const linkPath = (kind: Kind, name: string): string =>
  `/${kind}/${encodeURIComponent(name)}/`;
const label = (fm: FrontMatter, name: string): string =>
  fm.title && fm.title !== "Page not found" ? fm.title : name;

for (const [kind, title, original] of KINDS) {
  const dir = path.join(CRAWLED, kind);
  const files = (await readdir(dir))
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .sort((a, b) => a.localeCompare(b));
  const lines = [
    "---",
    `title: "${title} — TL schema reference"`,
    `original: "${original}"`,
    "section: schema",
    "generated: true",
    "layout: layout.njk",
    "---",
    "",
    `# ${title}`,
    "",
    `All ${kind}s of the TL schema (${files.length}). Names link to pages with the full definition, parameters and description.`,
    "",
  ];
  for (const file of files) {
    const fm = parseFm(await readFile(path.join(dir, file), "utf8"));
    const name = file.replace(/\.md$/, "");
    lines.push(`- [${label(fm, name)}](${linkPath(kind, name)})`);
  }
  await writeFile(path.join(dir, "index.md"), lines.join("\n") + "\n");
  console.log(kind, "index:", files.length);
}
