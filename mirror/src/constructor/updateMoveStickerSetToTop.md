---
title: "updateMoveStickerSetToTop"
original: "https://core.telegram.org/constructor/updateMoveStickerSetToTop"
section: ref
description: "A stickerset was just moved to top, see here for more info »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateMoveStickerSetToTop","url":"/constructor/updateMoveStickerSetToTop/"}]
layout: layout.njk
---

# updateMoveStickerSetToTop

A stickerset was just moved to top, [see here for more info »](/api/stickers/#recent-stickersets)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateMoveStickerSetToTop/" class="current_page_link">updateMoveStickerSetToTop</a>#86fccf85 flags:<a href="/type/%23/">#</a> masks:flags.0?true emojis:flags.1?true stickerset:<a href="/type/long/">long</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>This update is referring to a <a href="/api/stickers/#mask-stickers">mask stickerset</a></td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>This update is referring to a <a href="/api/custom-emoji/">custom emoji stickerset</a></td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/stickers/">Stickerset</a> ID</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
