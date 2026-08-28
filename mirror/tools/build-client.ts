import { mkdir } from "node:fs/promises";
import path from "node:path";
import { build } from "esbuild";

const root = path.resolve(".");
const output = path.join(root, "crawled", "js");
await mkdir(output, { recursive: true });
await build({
  entryPoints: {
    head: path.join(root, "client", "head.ts"),
    main: path.join(root, "client", "main.ts"),
    search: path.join(root, "client", "search.ts"),
  },
  outdir: output,
  bundle: true,
  format: "iife",
  platform: "browser",
  target: ["es2020"],
  minify: true,
  sourcemap: false,
  legalComments: "none",
  charset: "utf8",
  logLevel: "warning",
});
console.log("browser TypeScript bundled to crawled/js/");
