---
title: "upload.File"
original: "https://core.telegram.org/type/upload.File"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"upload.File","url":"/type/upload.File/"}]
layout: layout.njk
---

# upload.File

Contains info on file.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/upload.file/">upload.file</a>#96a18d5 type:<a href="/type/storage.FileType/">storage.FileType</a> mtime:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/upload.File/" class="current_page_link">upload.File</a>;
<a href="/constructor/upload.fileCdnRedirect/">upload.fileCdnRedirect</a>#f18cda44 dc_id:<a href="/type/int/">int</a> file_token:<a href="/type/bytes/">bytes</a> encryption_key:<a href="/type/bytes/">bytes</a> encryption_iv:<a href="/type/bytes/">bytes</a> file_hashes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FileHash/">FileHash</a>&gt; = <a href="/type/upload.File/" class="current_page_link">upload.File</a>;

---functions---

<a href="/method/upload.getFile/">upload.getFile</a>#be5335be flags:<a href="/type/%23/">#</a> precise:flags.0?true cdn_supported:flags.1?true location:<a href="/type/InputFileLocation/">InputFileLocation</a> offset:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/upload.File/" class="current_page_link">upload.File</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/upload.file/">upload.file</a></td><td>File content.</td></tr><tr><td><a href="/constructor/upload.fileCdnRedirect/">upload.fileCdnRedirect</a></td><td>The file must be downloaded from a <a href="/cdn/">CDN DC</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/upload.getFile/">upload.getFile</a></td><td>Returns content of a whole file or its part.</td></tr></tbody></table>
