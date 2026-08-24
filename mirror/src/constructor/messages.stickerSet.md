---
title: "messages.stickerSet"
original: "https://core.telegram.org/constructor/messages.stickerSet"
section: ref
description: "Stickerset and stickers inside it"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.stickerSet","url":"/constructor/messages.stickerSet/"}]
layout: layout.njk
---

# messages.stickerSet

Stickerset and stickers inside it

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.stickerSet/" class="current_page_link">messages.stickerSet</a>#6e153f16 set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.StickerSet/">messages.StickerSet</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>set</strong></td><td style="text-align: center;"><a href="/type/StickerSet/">StickerSet</a></td><td>The stickerset</td></tr><tr><td><strong>packs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt;</td><td>Emoji info for stickers</td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt;</td><td>Keywords for some or every sticker in the stickerset.</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Stickers in stickerset</td></tr></tbody></table>

### Type

[messages.StickerSet](/type/messages.StickerSet/)
