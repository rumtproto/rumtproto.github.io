---
title: "upload.fileCdnRedirect"
original: "https://core.telegram.org/constructor/upload.fileCdnRedirect"
section: ref
description: "The file must be downloaded from a CDN DC."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"upload.fileCdnRedirect","url":"/constructor/upload.fileCdnRedirect/"}]
layout: layout.njk
---

# upload.fileCdnRedirect

The file must be downloaded from a [CDN DC](/cdn/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/upload.fileCdnRedirect/" class="current_page_link">upload.fileCdnRedirect</a>#f18cda44 dc_id:<a href="/type/int/">int</a> file_token:<a href="/type/bytes/">bytes</a> encryption_key:<a href="/type/bytes/">bytes</a> encryption_iv:<a href="/type/bytes/">bytes</a> file_hashes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FileHash/">FileHash</a>&gt; = <a href="/type/upload.File/">upload.File</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/cdn/">CDN DC</a> ID</td></tr><tr><td><strong>file_token</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>File token (see <a href="/cdn/">CDN files</a>)</td></tr><tr><td><strong>encryption_key</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Encryption key (see <a href="/cdn/">CDN files</a>)</td></tr><tr><td><strong>encryption_iv</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Encryption IV (see <a href="/cdn/">CDN files</a>)</td></tr><tr><td><strong>file_hashes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/FileHash/">FileHash</a>&gt;</td><td>File hashes (see <a href="/cdn/">CDN files</a>)</td></tr></tbody></table>

### Type

[upload.File](/type/upload.File/)

### Related pages

#### [Encrypted CDNs for Speed and Security](/cdn/)

How client apps download popular public files from secondary CDN data centers.
