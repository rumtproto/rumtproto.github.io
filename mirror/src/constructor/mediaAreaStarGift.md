---
title: "mediaAreaStarGift"
original: "https://core.telegram.org/constructor/mediaAreaStarGift"
section: ref
description: "Represents a collectible gift »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"mediaAreaStarGift","url":"/constructor/mediaAreaStarGift/"}]
layout: layout.njk
---

# mediaAreaStarGift

Represents a [collectible gift »](/api/gifts/#collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/mediaAreaStarGift/" class="current_page_link">mediaAreaStarGift</a>#5787686d coordinates:<a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a> slug:<a href="/type/string/">string</a> = <a href="/type/MediaArea/">MediaArea</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates/">MediaAreaCoordinates</a></td><td>Coordinates of the media area.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><code>slug</code> from <a href="/constructor/starGiftUnique/">starGiftUnique</a>.<code>slug</code>, that can be resolved as <a href="/api/gifts/#sharing-and-getting-info-about-a-collectible-gift">specified here »</a>.</td></tr></tbody></table>

### Type

[MediaArea](/type/MediaArea/)

### Related pages

#### [starGiftUnique](/constructor/starGiftUnique/)

Represents a [collectible star gift, see here »](/api/gifts/#collectible-gifts) for more info.

The sticker that represents the gift is contained in a [starGiftAttributeModel](/constructor/starGiftAttributeModel/) object in `attributes`.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
