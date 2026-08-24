---
title: "updateStickerSetsOrder"
original: "https://core.telegram.org/constructor/updateStickerSetsOrder"
section: ref
description: "The order of stickersets was changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateStickerSetsOrder","url":"/constructor/updateStickerSetsOrder/"}]
layout: layout.njk
---

# updateStickerSetsOrder

The order of stickersets was changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateStickerSetsOrder/" class="current_page_link">updateStickerSetsOrder</a>#bb2d201 flags:<a href="/type/%23/">#</a> masks:flags.0?true emojis:flags.1?true order:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the updated stickers are mask stickers</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether the updated stickers are custom emoji stickers</td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>New sticker order by sticker ID</td></tr></tbody></table>

### Type

[Update](/type/Update/)
