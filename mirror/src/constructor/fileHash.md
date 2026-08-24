---
title: "FileHash"
original: "https://core.telegram.org/constructor/fileHash"
section: ref
description: "SHA256 Hash of an uploaded file, to be checked for validity after download"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"FileHash","url":"/constructor/fileHash/"}]
layout: layout.njk
---

# FileHash

SHA256 Hash of an uploaded file, to be checked for validity after download

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/fileHash/" class="current_page_link">fileHash</a>#f39b035c offset:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/bytes/">bytes</a> = <a href="/type/FileHash/">FileHash</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Offset from where to start computing SHA-256 hash</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Length</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>SHA-256 Hash of file chunk, to be checked for validity after download</td></tr></tbody></table>

### Type

[FileHash](/type/FileHash/)
