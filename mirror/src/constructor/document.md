---
title: "document"
original: "https://core.telegram.org/constructor/document"
section: ref
description: "How to handle file references."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"document","url":"/constructor/document/"}]
layout: layout.njk
---

# document

Document

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/document/" class="current_page_link">document</a>#8fd4c4d8 flags:<a href="/type/%23/">#</a> id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> file_reference:<a href="/type/bytes/">bytes</a> date:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/long/">long</a> thumbs:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt; video_thumbs:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt; dc_id:<a href="/type/int/">int</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/Document/">Document</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Document ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Check sum, dependent on document ID</td></tr><tr><td><strong>file_reference</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><a href="/api/file-references/">File reference</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Creation date</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>MIME type</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Size</td></tr><tr><td><strong>thumbs</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PhotoSize/">PhotoSize</a>&gt;</td><td>Thumbnails</td></tr><tr><td><strong>video_thumbs</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/VideoSize/">VideoSize</a>&gt;</td><td>Video thumbnails</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>DC ID</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt;</td><td>Attributes</td></tr></tbody></table>

### Type

[Document](/type/Document/)

### Related pages

#### [File references](/api/file-references/)

How to handle file references.
