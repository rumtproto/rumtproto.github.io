import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";

async function files(dir: string): Promise<string[]> {
  const result: string[] = [];
  for (const entry of (await readdir(dir, { withFileTypes: true })).sort(
    (a, b) => a.name.localeCompare(b.name),
  )) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...(await files(file)));
    else result.push(file);
  }
  return result;
}

async function snapshot(): Promise<Map<string, string>> {
  const result = new Map<string, string>();
  for (const directory of ["crawled", "docs"]) {
    for (const file of await files(directory)) {
      const relative = file.replaceAll(path.sep, "/");
      result.set(
        relative,
        createHash("sha256")
          .update(await readFile(file))
          .digest("hex"),
      );
    }
  }
  return result;
}

async function build(): Promise<void> {
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await new Promise<void>((resolve, reject) => {
    const child = spawn(command, ["run", "build"], {
      stdio: "inherit",
      env: process.env,
    });
    child.once("error", reject);
    child.once("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`build exited with ${code}`)),
    );
  });
}

await build();
const first = await snapshot();
await build();
const second = await snapshot();
const paths = [...new Set([...first.keys(), ...second.keys()])].sort();
const changed = paths.filter((file) => first.get(file) !== second.get(file));
if (changed.length) {
  console.error(`reproducibility failure: ${changed.length} file(s) differ`);
  for (const file of changed.slice(0, 30)) console.error(`  ${file}`);
  process.exit(1);
}
console.log(
  `reproducible build: ${paths.length} generated files are byte-identical`,
);
