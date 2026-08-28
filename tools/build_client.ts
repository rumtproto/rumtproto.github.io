import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';

mkdirSync('build/js', { recursive: true });
await build({
  entryPoints: ['client/translation.ts'],
  outfile: 'build/js/translation.js',
  bundle: true,
  minify: true,
  platform: 'browser',
  target: ['es2020'],
});

console.log('[client] bundled client/translation.ts to build/js/translation.js');
