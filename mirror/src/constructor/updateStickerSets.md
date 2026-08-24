---
title: "updateStickerSets"
original: "https://core.telegram.org/constructor/updateStickerSets"
section: ref
description: "Installed stickersets have changed, the client should refetch them as described in the docs."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateStickerSets","url":"/constructor/updateStickerSets/"}]
layout: layout.njk
---

# updateStickerSets

Installed stickersets have changed, the client should refetch them as [described in the docs](/api/stickers/#installing-stickersets).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateStickerSets/" class="current_page_link">updateStickerSets</a>#31c24808 flags:<a href="/type/%23/">#</a> masks:flags.0?true emojis:flags.1?true = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether mask stickersets have changed</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the list of installed <a href="/api/custom-emoji/">custom emoji stickersets</a> has changed</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
