---
title: "stickerPack"
original: "https://core.telegram.org/constructor/stickerPack"
section: ref
description: "A stickerpack is a group of stickers associated to the same emoji."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stickerPack","url":"/constructor/stickerPack/"}]
layout: layout.njk
---

# stickerPack

A stickerpack is a group of stickers associated to the same emoji.  
It is **not** a sticker pack the way it is usually intended, you may be looking for a [StickerSet](/type/StickerSet/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stickerPack/" class="current_page_link">stickerPack</a>#12b299d4 emoticon:<a href="/type/string/">string</a> documents:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/StickerPack/">StickerPack</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Emoji</td></tr><tr><td><strong>documents</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>Stickers</td></tr></tbody></table>

### Type

[StickerPack](/type/StickerPack/)

### Related pages

#### [StickerSet](/type/StickerSet/)

Represents a stickerset (stickerpack)
