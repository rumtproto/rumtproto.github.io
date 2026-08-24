---
title: "messages.getArchivedStickers"
original: "https://core.telegram.org/method/messages.getArchivedStickers"
section: ref
description: "Get all archived stickers"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getArchivedStickers","url":"/method/messages.getArchivedStickers/"}]
layout: layout.njk
---

# messages.getArchivedStickers

Get all archived stickers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.archivedStickers/">messages.archivedStickers</a>#4fcba9c8 count:<a href="/type/int/">int</a> sets:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerSetCovered/">StickerSetCovered</a>&gt; = <a href="/type/messages.ArchivedStickers/">messages.ArchivedStickers</a>;
---functions---
<a href="/method/messages.getArchivedStickers/" class="current_page_link">messages.getArchivedStickers</a>#57f17692 flags:<a href="/type/%23/">#</a> masks:flags.0?true emojis:flags.1?true offset_id:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.ArchivedStickers/">messages.ArchivedStickers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Get <a href="/api/stickers/#mask-stickers">mask stickers</a></td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Get <a href="/api/custom-emoji/">custom emoji stickers</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[messages.ArchivedStickers](/type/messages.ArchivedStickers/)

### Only users can use this method

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
