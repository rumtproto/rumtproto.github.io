---
title: "messages.foundStickers"
original: "https://core.telegram.org/constructor/messages.foundStickers"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.foundStickers","url":"/constructor/messages.foundStickers/"}]
layout: layout.njk
---

# messages.foundStickers

Found stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.foundStickers/" class="current_page_link">messages.foundStickers</a>#82c9e290 flags:<a href="/type/%23/">#</a> next_offset:flags.0?<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> stickers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.FoundStickers/">messages.FoundStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Offset for <a href="/api/offsets/">pagination</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>stickers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Found stickers</td></tr></tbody></table>

### Type

[messages.FoundStickers](/type/messages.FoundStickers/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
