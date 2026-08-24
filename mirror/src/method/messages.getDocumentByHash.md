---
title: "messages.getDocumentByHash"
original: "https://core.telegram.org/method/messages.getDocumentByHash"
section: ref
description: "Get a document by its SHA256 hash, mainly used for gifs"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDocumentByHash","url":"/method/messages.getDocumentByHash/"}]
layout: layout.njk
---

# messages.getDocumentByHash

Get a document by its SHA256 hash, mainly used for gifs

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentEmpty/">documentEmpty</a>#36f8c871 id:<a href="/type/long/">long</a> = <a href="/type/Document/">Document</a>;
<a href="/constructor/document/">document</a>#8fd4c4d8 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/long/">long</a> thumbs:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; video_thumbs:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt; dc_id:<a href="/type/int/">int</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/Document/">Document</a>;
---functions---
<a href="/method/messages.getDocumentByHash/" class="current_page_link">messages.getDocumentByHash</a>#b1f2061f sha256:<a href="/type/bytes/">bytes</a> size:<a href="/type/long/">long</a> mime_type:<a href="/type/string/">string</a> = <a href="/type/Document/">Document</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>sha256</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>SHA256 of file</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Size of the file in bytes</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Mime type</td></tr></tbody></table>

### Result

[Document](/type/Document/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SHA256_HASH_INVALID</td><td>The provided SHA256 hash is invalid.</td></tr></tbody></table>
