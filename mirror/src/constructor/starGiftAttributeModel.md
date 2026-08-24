---
title: "starGiftAttributeModel"
original: "https://core.telegram.org/constructor/starGiftAttributeModel"
section: ref
description: "The model of a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starGiftAttributeModel","url":"/constructor/starGiftAttributeModel/"}]
layout: layout.njk
---

# starGiftAttributeModel

The model of a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starGiftAttributeModel/" class="current_page_link">starGiftAttributeModel</a>#565251e2 flags:<a href="/type/%23/">#</a> crafted:flags.0?true name:<a href="/type/string/">string</a> document:<a href="/type/Document/">Document</a> rarity:<a href="/type/StarGiftAttributeRarity/">StarGiftAttributeRarity</a> = <a href="/type/StarGiftAttribute/">StarGiftAttribute</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>crafted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>This model is reserved for <a href="/api/gifts/#crafting-collectible-gifts">crafting »</a>, and should be filtered out from regular upgrade previews.</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Name of the model</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/type/Document/">Document</a></td><td>The <a href="/api/stickers/">sticker</a> representing the upgraded gift</td></tr><tr><td><strong>rarity</strong></td><td style="text-align: center;"><a href="/type/StarGiftAttributeRarity/">StarGiftAttributeRarity</a></td><td>Rarity of this model.</td></tr></tbody></table>

### Type

[StarGiftAttribute](/type/StarGiftAttribute/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
