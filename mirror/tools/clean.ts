import { rm } from "node:fs/promises";
import path from "node:path";

for (const directory of ["docs", "crawled"]) {
  await rm(path.resolve(directory), { recursive: true, force: true });
}
