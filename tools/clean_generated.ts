import { rmSync } from 'node:fs';

for (const target of ['build', 'docs', 'mirror/crawled']) {
  rmSync(target, { recursive: true, force: true });
}
if (process.argv.includes('--compiled')) rmSync('.build', { recursive: true, force: true });

console.log(`[clean] removed generated build, docs and mirror/crawled${process.argv.includes('--compiled') ? ', plus .build' : ''}`);
