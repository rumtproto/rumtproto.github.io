---
title: "upload.webFile"
original: "https://core.telegram.org/constructor/upload.webFile"
section: ref
description: "Represents a chunk of an HTTP webfile downloaded through telegram's secure MTProto servers"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"upload.webFile","url":"/constructor/upload.webFile/"}]
layout: layout.njk
---

# upload.webFile

Represents a chunk of an [HTTP webfile](/api/files/) downloaded through telegram's secure MTProto servers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/upload.webFile/" class="current_page_link">upload.webFile</a>#21e753bc size:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> file_type:<a href="/type/storage.FileType/">storage.FileType</a> mtime:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/upload.WebFile/">upload.WebFile</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>File size</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Mime type</td></tr><tr><td><strong>file_type</strong></td><td style="text-align: center;"><a href="/type/storage.FileType/">storage.FileType</a></td><td>File type</td></tr><tr><td><strong>mtime</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Modified time</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Data</td></tr></tbody></table>

### Type

[upload.WebFile](/type/upload.WebFile/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
