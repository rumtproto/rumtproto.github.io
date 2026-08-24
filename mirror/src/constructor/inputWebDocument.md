---
title: "inputWebDocument"
original: "https://core.telegram.org/constructor/inputWebDocument"
section: ref
description: "How to transfer large data batches correctly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputWebDocument","url":"/constructor/inputWebDocument/"}]
layout: layout.njk
---

# inputWebDocument

The document

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputWebDocument/" class="current_page_link">inputWebDocument</a>#9bed434d url:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/InputWebDocument/">InputWebDocument</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Remote document URL to be downloaded using the appropriate <a href="/api/files/">method</a></td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Remote file size</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Mime type</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt;</td><td>Attributes for media types</td></tr></tbody></table>

### Type

[InputWebDocument](/type/InputWebDocument/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
