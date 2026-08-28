import { readdir, utimes } from "node:fs/promises";
import path from "node:path";

async function normalize(dir: string, timestamp: Date): Promise<number> {
  let count = 0;
  const entries = await readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) count += await normalize(file, timestamp);
    else {
      await utimes(file, timestamp, timestamp);
      count++;
    }
  }
  return count;
}

const backupRoot = path.resolve("backup");
const dates = (await readdir(backupRoot))
  .filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name))
  .sort();
const latest = dates.at(-1);
if (!latest) throw new Error("no dated backup found");
const timestamp = new Date(`${latest}T00:00:00.000Z`);
const count = await normalize(path.resolve("docs"), timestamp);
console.log(
  `normalized mtimes for ${count} files to ${timestamp.toISOString()}`,
);
