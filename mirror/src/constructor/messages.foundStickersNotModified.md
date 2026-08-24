---
title: "messages.foundStickersNotModified"
original: "https://core.telegram.org/constructor/messages.foundStickersNotModified"
section: ref
description: "No new stickers were found for the specified query"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.foundStickersNotModified","url":"/constructor/messages.foundStickersNotModified/"}]
layout: layout.njk
---

# messages.foundStickersNotModified

No new stickers were found for the specified query

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.foundStickersNotModified/" class="current_page_link">messages.foundStickersNotModified</a>#6010c534 flags:<a href="/type/%23/">#</a> next_offset:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.FoundStickers/">messages.FoundStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Offset for <a href="/api/offsets/">pagination</a></td></tr></tbody></table>

### Type

[messages.FoundStickers](/type/messages.FoundStickers/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
