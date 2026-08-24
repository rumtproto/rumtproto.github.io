---
title: "stickers.changeStickerPosition"
original: "https://core.telegram.org/method/stickers.changeStickerPosition"
section: ref
description: "Changes the absolute position of a sticker in the set to which it belongs. The sticker set must have been created by the current user/bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.changeStickerPosition","url":"/method/stickers.changeStickerPosition/"}]
layout: layout.njk
---

# stickers.changeStickerPosition

Changes the absolute position of a sticker in the set to which it belongs. The sticker set must have been created by the current user/bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSet/">messages.stickerSet</a>#6e153f16 set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
<a href="/constructor/messages.stickerSetNotModified/">messages.stickerSetNotModified</a>#d3f924eb = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;
---functions---
<a href="/method/stickers.changeStickerPosition/" class="current_page_link">stickers.changeStickerPosition</a>#ffb6d4ca sticker:<a href="/type/InputDocument/">InputDocument</a> position:<a href="/type/int/">int</a> = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>sticker</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>The sticker</td></tr><tr><td><strong>position</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The new position of the sticker, zero-based</td></tr></tbody></table>

### Result

[messages.StickerSet](/type/messages.StickerSet/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>STICKER_INVALID</td><td>The provided sticker is invalid.</td></tr></tbody></table>
