---
title: "inputStickerSetItem"
original: "https://core.telegram.org/constructor/inputStickerSetItem"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStickerSetItem","url":"/constructor/inputStickerSetItem/"}]
layout: layout.njk
---

# inputStickerSetItem

Sticker in a stickerset

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStickerSetItem/" class="current_page_link">inputStickerSetItem</a>#32da9e9c flags:<a href="/type/%23/">#</a> document:<a href="/type/InputDocument/">InputDocument</a> emoji:<a href="/type/string/">string</a> mask_coords:flags.0?<a href="/type/MaskCoords/">MaskCoords</a> keywords:flags.1?<a href="/type/string/">string</a> = <a href="/type/InputStickerSetItem/">InputStickerSetItem</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/InputDocument/">InputDocument</a></td><td>The sticker</td></tr><tr><td><strong>emoji</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Associated emoji</td></tr><tr><td><strong>mask_coords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/MaskCoords/">MaskCoords</a></td><td>Coordinates for mask sticker</td></tr><tr><td><strong>keywords</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Set of keywords, separated by commas (can't be provided for mask stickers)</td></tr></tbody></table>

### Type

[InputStickerSetItem](/type/InputStickerSetItem/)
