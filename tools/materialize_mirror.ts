import { execFileSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const mirror = path.join(root, 'mirror');
const compiled = path.join(root, '.build', 'mirror', 'tools');
const required = ['backup', 'site', 'client'].map((name) => path.join(mirror, name));
for (const input of required) {
  if (!existsSync(input)) throw new Error(`Missing vendored mirror source: ${path.relative(root, input)}. Run npm run sync:mirror.`);
}

rmSync(path.join(mirror, 'crawled'), { recursive: true, force: true });
for (const script of ['extract.js', 'gennav.js', 'genrefindexes.js', 'build-client.js']) {
  const file = path.join(compiled, script);
  if (!existsSync(file)) throw new Error(`Missing compiled mirror tool: ${path.relative(root, file)}. Run npm run compile.`);
  execFileSync(process.execPath, [file], { cwd: mirror, stdio: 'inherit' });
}

console.log('[materialize] mirror/crawled generated from vendored backup and TypeScript sources');
