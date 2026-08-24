---
title: "Upload.WebFile"
original: "https://core.telegram.org/type/upload.WebFile"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Upload.WebFile","url":"/type/upload.WebFile/"}]
layout: layout.njk
---

# Upload.WebFile

Remote file

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/upload.webFile/">upload.webFile</a>#21e753bc size:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> file_type:<a href="/type/storage.FileType/">storage.FileType</a> mtime:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/upload.WebFile/" class="current_page_link">upload.WebFile</a>;

---functions---

<a href="/method/upload.getWebFile/">upload.getWebFile</a>#24e6818d location:<a href="/type/InputWebFileLocation/">InputWebFileLocation</a> offset:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/upload.WebFile/" class="current_page_link">upload.WebFile</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/upload.webFile/">upload.webFile</a></td><td>Represents a chunk of an <a href="/api/files/">HTTP webfile</a> downloaded through telegram's secure MTProto servers</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/upload.getWebFile/">upload.getWebFile</a></td><td>Returns content of a web file, by proxying the request through telegram, see the <a href="/api/files/#downloading-webfiles">webfile docs for more info</a>.<br><br><strong>Note</strong>: the query must be sent to the DC specified in the <code>webfile_dc_id</code> <a href="/api/config/#mtproto-configuration">MTProto configuration field</a>.</td></tr></tbody></table>
