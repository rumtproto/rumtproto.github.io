import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const checks: Array<{ name: string; pass: boolean }> = [];
const check = (name: string, pass: boolean): void => {
  checks.push({ name, pass });
};
const text = async (file: string): Promise<string> =>
  readFile(path.join(root, file), "utf8");

async function ownedJavaScript(dir: string): Promise<string[]> {
  const result: string[] = [];
  for (const entry of await readdir(path.join(root, dir), {
    withFileTypes: true,
  })) {
    const relative = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...(await ownedJavaScript(relative)));
    else if (/\.(?:js|mjs|cjs)$/.test(entry.name)) result.push(relative);
  }
  return result;
}

const gitignore = await text(".gitignore");
const packageJson = JSON.parse(await text("package.json")) as {
  private?: boolean;
  license?: string;
  engines?: { node?: string };
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};
const tsconfig = JSON.parse(await text("tsconfig.json")) as {
  compilerOptions?: Record<string, unknown>;
};
const workflow = await text(".github/workflows/pages.yml");
const dependabot = await text(".github/dependabot.yml");
const layout = await text("site/_includes/layout.njk");
const extractor = await text("tools/extract.ts");
const sanitizer = await text("tools/html-sanitizer.ts");
const crawler = await text("tools/crawl.ts");
const readme = await text("README.md");
const license = await text("LICENSE.md");
const versions = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

check(
  "generated trees are ignored",
  [".build/", "crawled/", "docs/"].every((item) => gitignore.includes(item)),
);
check(
  "media files remain external",
  !(await readdir(path.join(root, "site"))).includes("media") &&
    !layout.includes("/js/tgs.js") &&
    !extractor.includes("/media/"),
);
check(
  "all owned JavaScript sources are TypeScript",
  (await Promise.all(["client", "tools", "site"].map(ownedJavaScript))).flat()
    .length === 0,
);
check(
  "TypeScript strict mode is fully enabled",
  tsconfig.compilerOptions?.strict === true &&
    tsconfig.compilerOptions?.noImplicitAny !== false &&
    tsconfig.compilerOptions?.strictNullChecks !== false &&
    tsconfig.compilerOptions?.useUnknownInCatchVariables !== false,
);
check(
  "dependency versions are exact",
  Object.values(versions).every((version) => /^\d+\.\d+\.\d+/.test(version)),
);
check(
  "package governance metadata is present",
  packageJson.private === true &&
    packageJson.license === "MIT" &&
    packageJson.engines?.node === ">=20",
);
check(
  "lockfile is committed",
  (await text("package-lock.json")).includes('"lockfileVersion"'),
);
check(
  "CI covers pull requests and main",
  workflow.includes("pull_request:") && workflow.includes("branches: [main]"),
);
check(
  "Pages uses artifact deployment",
  workflow.includes("upload-pages-artifact") &&
    workflow.includes("deploy-pages"),
);
const actionReferences = [
  ...workflow.matchAll(/uses:\s*[^@\s]+@([^\s#]+)/g),
].map((match) => match[1]);
check(
  "GitHub Actions are pinned by commit SHA",
  actionReferences.length > 0 &&
    actionReferences.every((reference) => /^[0-9a-f]{40}$/.test(reference)),
);
check("CI enforces reproducibility", workflow.includes("npm run reproducible"));
check(
  "CI audits dependencies",
  workflow.includes("npm audit --audit-level=high"),
);
check(
  "CSP is enabled",
  layout.includes('http-equiv="Content-Security-Policy"'),
);
check(
  "search indexes article content only",
  layout.includes("data-pagefind-body"),
);
check("browser code is external", !/<script>(?:.|\n)*?<\/script>/.test(layout));
check(
  "upstream HTML uses a parser-based allowlist sanitizer",
  extractor.includes("sanitizeUpstreamHtml") &&
    sanitizer.includes('from "sanitize-html"') &&
    sanitizer.includes("allowedTags") &&
    sanitizer.includes("allowedAttributes"),
);
check(
  "network requests have timeouts",
  crawler.includes("AbortSignal.timeout"),
);
check(
  "backup path input is validated",
  crawler.includes("invalid backup date"),
);
check("content rights are separated", license.includes("Excluded material"));
check(
  "Dependabot covers npm and Actions",
  dependabot.includes("package-ecosystem: npm") &&
    dependabot.includes("package-ecosystem: github-actions"),
);
check(
  "local generation is documented",
  readme.includes("npm run generate") &&
    readme.includes("npm run reproducible"),
);
check(
  "quality gates are wired",
  ["check", "build", "reproducible", "format:check", "typecheck", "test"].every(
    (script) => packageJson.scripts?.[script],
  ),
);

const passed = checks.filter(({ pass }) => pass).length;
const score = (passed / checks.length) * 10;
for (const item of checks)
  console.log(`${item.pass ? "ok  " : "FAIL"}: ${item.name}`);
console.log(
  `\nQuality score: ${score.toFixed(1)}/10 (${passed}/${checks.length} objective gates)`,
);
if (score < 9.5) process.exit(1);
