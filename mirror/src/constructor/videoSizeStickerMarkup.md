---
title: "videoSizeStickerMarkup"
original: "https://core.telegram.org/constructor/videoSizeStickerMarkup"
section: ref
description: "An animated profile picture based on a sticker."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"videoSizeStickerMarkup","url":"/constructor/videoSizeStickerMarkup/"}]
layout: layout.njk
---

# videoSizeStickerMarkup

An [animated profile picture](/api/files/#animated-profile-pictures) based on a [sticker](/api/stickers/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/videoSizeStickerMarkup/" class="current_page_link">videoSizeStickerMarkup</a>#da082fe stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> sticker_id:<a href="/type/long/">long</a> background_colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/VideoSize/">VideoSize</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>Stickerset</td></tr><tr><td><strong>sticker_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Sticker ID</td></tr><tr><td><strong>background_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>1, 2, 3 or 4 RBG-24 colors used to generate a solid (1), gradient (2) or freeform gradient (3, 4) background, similar to how <a href="/api/wallpapers/#fill-types">fill wallpapers</a> are generated. The rotation angle for gradient backgrounds is 0.</td></tr></tbody></table>

### Type

[VideoSize](/type/VideoSize/)

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
