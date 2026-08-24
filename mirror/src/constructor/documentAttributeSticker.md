---
title: "documentAttributeSticker"
original: "https://core.telegram.org/constructor/documentAttributeSticker"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"documentAttributeSticker","url":"/constructor/documentAttributeSticker/"}]
layout: layout.njk
---

# documentAttributeSticker

Defines a sticker

#### [End-to-end schema](/schema/end-to-end/)

```
===23===
documentAttributeSticker#fb0a5727 = DocumentAttribute;

===45===
documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute;
```

#### API schema

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/documentAttributeSticker/" class="current_page_link">documentAttributeSticker</a>#6319d612 flags:<a href="/type/%23/">#</a> mask:flags.1?true alt:<a href="/type/string/">string</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> mask_coords:flags.0?<a href="/type/MaskCoords/">MaskCoords</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>mask</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this is a mask sticker</td></tr><tr><td><strong>alt</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Alternative emoji representation of sticker</td></tr><tr><td><strong>stickerset</strong></td><td style="text-align: center;"><a href="/type/InputStickerSet/">InputStickerSet</a></td><td>Associated stickerset</td></tr><tr><td><strong>mask_coords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/MaskCoords/">MaskCoords</a></td><td>Mask coordinates (if this is a mask sticker, attached to a photo)</td></tr></tbody></table>

### Type

[DocumentAttribute](/type/DocumentAttribute/)
