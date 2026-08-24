---
title: "stickers.removeStickerFromSet"
original: "https://core.telegram.org/method/stickers.removeStickerFromSet"
section: ref
description: "Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.removeStickerFromSet","url":"/method/stickers.removeStickerFromSet/"}]
layout: layout.njk
---

# stickers.removeStickerFromSet

Remove a sticker from the set where it belongs. The sticker set must have been created by the current user/bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSet/">messages.stickerSet</a>#6e153f16 set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
<a href="/constructor/messages.stickerSetNotModified/">messages.stickerSetNotModified</a>#d3f924eb = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
---functions---
<a href="/method/stickers.removeStickerFromSet/" class="current_page_link">stickers.removeStickerFromSet</a>#f7760f51 sticker:<a href="/type/InputDocument/">InputDocument</a> = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>The sticker to remove</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>The provided sticker is invalid.</td></tr></tbody></table>
