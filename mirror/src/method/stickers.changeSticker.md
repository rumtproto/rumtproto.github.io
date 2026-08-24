---
title: "stickers.changeSticker"
original: "https://core.telegram.org/method/stickers.changeSticker"
section: ref
description: "Update the keywords, emojis or mask coordinates of a sticker."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.changeSticker","url":"/method/stickers.changeSticker/"}]
layout: layout.njk
---

# stickers.changeSticker

Update the keywords, emojis or [mask coordinates](/api/stickers/#mask-stickers) of a sticker.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSet/">messages.stickerSet</a>#6e153f16 set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
<a href="/constructor/messages.stickerSetNotModified/">messages.stickerSetNotModified</a>#d3f924eb = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
---functions---
<a href="/method/stickers.changeSticker/" class="current_page_link">stickers.changeSticker</a>#f5537ebc flags:<a href="/type/%23/">#</a> sticker:<a href="/type/InputDocument/">InputDocument</a> emoji:flags.0?<a href="/type/string/">string</a> mask_coords:flags.1?<a href="/type/MaskCoords/">MaskCoords</a> keywords:flags.2?<a href="/type/string/">string</a> = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>The sticker</td></tr><tr><td><strong>emoji</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If set, updates the emoji list associated to the sticker</td></tr><tr><td><strong>mask_coords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/MaskCoords/">MaskCoords</a></td><td>If set, updates the <a href="/api/stickers/#mask-stickers">mask coordinates</a></td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>If set, updates the sticker keywords (separated by commas). Can't be provided for mask stickers.</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>The provided sticker is invalid.</td></tr></tbody></table>

### Related pages

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
