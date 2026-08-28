// @ts-nocheck
// Names of TL schema entities, taken from the mirror's own page inventory.
//
// A constructor, method or type name is an identifier, not prose: it appears as
// the H1 of its reference page, in tables and inside links. Translating one
// would silently rename an API entity across the site, so such a segment must
// never receive a translation — not globally, and not per page.

import { globSync } from 'node:fs';
import path from 'node:path';

let cache = null;

export function schemaNames(root = 'mirror/crawled') {
  if (cache) return cache;
  cache = new Set();
  for (const rel of globSync('{type,method,constructor}/*.md', { cwd: root })) {
    const name = path.basename(rel, '.md');
    if (name === 'index') continue;
    cache.add(name);
  }
  return cache;
}

/** True when a segment is exactly the name of a schema entity. */
export function isSchemaName(text, root = 'mirror/crawled') {
  return schemaNames(root).has(String(text).trim());
}
