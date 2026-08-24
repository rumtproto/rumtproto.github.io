---
title: "messages.reorderStickerSets"
original: "https://core.telegram.org/method/messages.reorderStickerSets"
section: ref
description: "Reorder installed stickersets"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reorderStickerSets","url":"/method/messages.reorderStickerSets/"}]
layout: layout.njk
---

# messages.reorderStickerSets

Reorder installed stickersets

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.reorderStickerSets/" class="current_page_link">messages.reorderStickerSets</a>#78337739 flags:<a href="/type/%23/">#</a> masks:flags.0?true emojis:flags.1?true order:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>masks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Reorder mask stickersets</td></tr><tr><td><strong>emojis</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Reorder <a href="/api/custom-emoji/">custom emoji stickersets</a></td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>New stickerset order by stickerset IDs</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
