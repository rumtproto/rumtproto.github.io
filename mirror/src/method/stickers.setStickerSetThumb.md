---
title: "stickers.setStickerSetThumb"
original: "https://core.telegram.org/method/stickers.setStickerSetThumb"
section: ref
description: "Telegram allows including animated and static custom emojis inside of messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.setStickerSetThumb","url":"/method/stickers.setStickerSetThumb/"}]
layout: layout.njk
---

# stickers.setStickerSetThumb

Set stickerset thumbnail

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSet/">messages.stickerSet</a>#6e153f16 set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
<a href="/constructor/messages.stickerSetNotModified/">messages.stickerSetNotModified</a>#d3f924eb = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
---functions---
<a href="/method/stickers.setStickerSetThumb/" class="current_page_link">stickers.setStickerSetThumb</a>#a76a5392 flags:<a href="/type/%23/">#</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> thumb:flags.0?<a href="/type/InputDocument/">InputDocument</a> thumb_document_id:flags.1?<a href="/type/long/">long</a> = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>Stickerset</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputDocument/">InputDocument</a></td><td>Thumbnail (only for normal stickersets, not custom emoji stickersets).</td></tr><tr><td><strong>thumb_document_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/long/">long</a></td><td>Only for <a href="/api/custom-emoji/">custom emoji stickersets</a>, ID of a custom emoji present in the set to use as thumbnail; pass 0 to fallback to the first custom emoji of the set.</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKERSET_INVALID</td><td>The provided sticker set is invalid.</td></tr><tr><td>400</td><td>STICKER_THUMB_PNG_NOPNG</td><td>Incorrect stickerset thumb file provided, PNG / WEBP expected.</td></tr><tr><td>400</td><td>STICKER_THUMB_TGS_NOTGS</td><td>Incorrect stickerset TGS thumb file provided.</td></tr></tbody></table>

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.
