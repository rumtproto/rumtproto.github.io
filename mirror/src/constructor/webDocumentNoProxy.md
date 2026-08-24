---
title: "webDocumentNoProxy"
original: "https://core.telegram.org/constructor/webDocumentNoProxy"
section: ref
description: "Remote document that can be downloaded without proxying through telegram"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webDocumentNoProxy","url":"/constructor/webDocumentNoProxy/"}]
layout: layout.njk
---

# webDocumentNoProxy

Remote document that can be downloaded without [proxying through telegram](/api/files/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/webDocumentNoProxy/" class="current_page_link">webDocumentNoProxy</a>#f9c8bcc6 url:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/WebDocument/">WebDocument</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Document URL</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>File size</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>MIME type</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt;</td><td>Attributes for media types</td></tr></tbody></table>

### Type

[WebDocument](/type/WebDocument/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
