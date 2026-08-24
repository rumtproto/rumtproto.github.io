---
title: "stickerSetFullCovered"
original: "https://core.telegram.org/constructor/stickerSetFullCovered"
section: ref
description: "Stickerset preview with all stickers of the stickerset included."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stickerSetFullCovered","url":"/constructor/stickerSetFullCovered/"}]
layout: layout.njk
---

# stickerSetFullCovered

Stickerset preview with all stickers of the stickerset included.  
Currently used only for [custom emoji stickersets](/api/custom-emoji/), to avoid a further call to [messages.getStickerSet](/method/messages.getStickerSet/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stickerSetFullCovered/" class="current_page_link">stickerSetFullCovered</a>#40d13c0e set:<a href="/type/StickerSet/">StickerSet</a> packs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt; keywords:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt; documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/StickerSetCovered/">StickerSetCovered</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>set</strong></td><td style="text-align: center;"><a href="/type/StickerSet/">StickerSet</a></td><td>Stickerset</td></tr><tr><td><strong>packs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerPack/">StickerPack</a>&gt;</td><td>Emoji information about every sticker in the stickerset</td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StickerKeyword/">StickerKeyword</a>&gt;</td><td>Keywords for some or every sticker in the stickerset.</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>Stickers</td></tr></tbody></table>

### Type

[StickerSetCovered](/type/StickerSetCovered/)

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [messages.getStickerSet](/method/messages.getStickerSet/)

Get info about a stickerset
