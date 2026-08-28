import { createHash } from "node:crypto";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { gzipSync, gunzipSync } from "node:zlib";
import { decode, encode } from "cbor-x";

const PAGEFIND_MAGIC = Buffer.from("pagefind_dcd");
const SUPPORTED_PAGEFIND_VERSION = "1.5.2";
const pagefindPackage = JSON.parse(
  await readFile(
    path.resolve("node_modules", "pagefind", "package.json"),
    "utf8",
  ),
) as { version?: string };
if (pagefindPackage.version !== SUPPORTED_PAGEFIND_VERSION) {
  throw new Error(
    `Pagefind metadata format is version-specific: expected ${SUPPORTED_PAGEFIND_VERSION}, got ${pagefindPackage.version ?? "unknown"}`,
  );
}

const root = path.resolve("docs", "pagefind");
const entryPath = path.join(root, "pagefind-entry.json");
const entry = JSON.parse(await readFile(entryPath, "utf8")) as {
  languages: Record<string, { hash: string; wasm: string; page_count: number }>;
};

function unpack(
  file: Uint8Array,
  label: string,
): { raw: Buffer; value: unknown } {
  const raw = gunzipSync(file);
  if (!raw.subarray(0, PAGEFIND_MAGIC.length).equals(PAGEFIND_MAGIC)) {
    throw new Error(`unsupported Pagefind payload header: ${label}`);
  }
  return {
    raw,
    value: decode(raw.subarray(PAGEFIND_MAGIC.length)),
  };
}

function packed(payload: unknown): Buffer {
  const encoded = Buffer.from(encode(payload));
  return gzipSync(Buffer.concat([PAGEFIND_MAGIC, encoded]), { level: 9 });
}

function replaceAllSameLength(
  buffer: Uint8Array,
  from: string,
  to: string,
): Buffer {
  const oldValue = Buffer.from(from);
  const newValue = Buffer.from(to);
  if (oldValue.length !== newValue.length)
    throw new Error(`unequal replacement lengths: ${from}, ${to}`);
  const result = Buffer.from(buffer);
  let offset = 0;
  let replacements = 0;
  while ((offset = result.indexOf(oldValue, offset)) !== -1) {
    newValue.copy(result, offset);
    offset += newValue.length;
    replacements++;
  }
  if (!replacements)
    throw new Error(`Pagefind metadata does not reference ${from}`);
  return result;
}

const stableFilterFiles = new Set<string>();
for (const [language, metadata] of Object.entries(entry.languages)) {
  const oldMetaPath = path.join(root, `pagefind.${metadata.hash}.pf_meta`);
  const unpackedMetadata = unpack(await readFile(oldMetaPath), oldMetaPath);
  let metaRaw: Uint8Array = unpackedMetadata.raw;
  const decoded = unpackedMetadata.value as [
    string,
    unknown,
    unknown,
    Array<[string, string]>,
    unknown,
    unknown,
  ];
  if (!Array.isArray(decoded) || !Array.isArray(decoded[3])) {
    throw new Error(`unsupported Pagefind metadata structure: ${oldMetaPath}`);
  }
  if (decoded[3].length !== 1) {
    throw new Error(
      `canonicalizer expects exactly one Pagefind filter, got ${decoded[3].length}`,
    );
  }

  for (const [, oldFilterHash] of decoded[3]) {
    const filterPath = path.join(root, "filter", `${oldFilterHash}.pf_filter`);
    const filter = unpack(await readFile(filterPath), filterPath).value as [
      string,
      Array<[string, unknown]>,
    ];
    if (!Array.isArray(filter) || !Array.isArray(filter[1])) {
      throw new Error(`unsupported Pagefind filter structure: ${filterPath}`);
    }
    filter[1].sort((a, b) => a[0].localeCompare(b[0]));
    const stableFilterHash = `${language}_${"0".repeat(oldFilterHash.length - language.length - 1)}`;
    const stableFilterFile = `${stableFilterHash}.pf_filter`;
    stableFilterFiles.add(stableFilterFile);
    const stableFilterPath = path.join(root, "filter", stableFilterFile);
    await writeFile(stableFilterPath, packed(filter));
    const writtenFilter = unpack(
      await readFile(stableFilterPath),
      stableFilterPath,
    ).value as [string, Array<[string, unknown]>];
    const values = writtenFilter[1].map(([value]) => value);
    if (values.some((value, index) => index > 0 && values[index - 1] > value)) {
      throw new Error(
        `Pagefind filter did not remain sorted: ${stableFilterPath}`,
      );
    }
    metaRaw = replaceAllSameLength(metaRaw, oldFilterHash, stableFilterHash);
  }

  const stableMetaHash = `${language}_${"0".repeat(metadata.hash.length - language.length - 1)}`;
  const stableMetaPath = path.join(root, `pagefind.${stableMetaHash}.pf_meta`);
  await writeFile(stableMetaPath, gzipSync(metaRaw, { level: 9 }));
  const writtenMetadata = unpack(await readFile(stableMetaPath), stableMetaPath)
    .value as [unknown, unknown, unknown, Array<[string, string]>];
  if (!writtenMetadata[3]?.every(([, hash]) => hash.includes("_000"))) {
    throw new Error(`Pagefind metadata still references unstable filters`);
  }
  metadata.hash = stableMetaHash;
}

for (const file of await readdir(root)) {
  if (
    file.endsWith(".pf_meta") &&
    !Object.values(entry.languages).some(
      ({ hash }) => file === `pagefind.${hash}.pf_meta`,
    )
  ) {
    await rm(path.join(root, file));
  }
}
for (const file of await readdir(path.join(root, "filter"))) {
  if (file.endsWith(".pf_filter") && !stableFilterFiles.has(file))
    await rm(path.join(root, "filter", file));
}
await writeFile(entryPath, JSON.stringify(entry));

const digest = createHash("sha256");
for (const metadata of Object.values(entry.languages)) {
  digest.update(
    await readFile(path.join(root, `pagefind.${metadata.hash}.pf_meta`)),
  );
}
console.log(
  `canonical Pagefind metadata: ${digest.digest("hex").slice(0, 16)}`,
);
