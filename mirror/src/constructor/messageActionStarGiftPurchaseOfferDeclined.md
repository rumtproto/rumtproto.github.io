---
title: "messageActionStarGiftPurchaseOfferDeclined"
original: "https://core.telegram.org/constructor/messageActionStarGiftPurchaseOfferDeclined"
section: ref
description: "A collectible gift purchase offer » was declined, or the offer expired, see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionStarGiftPurchaseOfferDeclined","url":"/constructor/messageActionStarGiftPurchaseOfferDeclined/"}]
layout: layout.njk
---

# messageActionStarGiftPurchaseOfferDeclined

A [collectible gift purchase offer »](/api/gifts/#collectible-gift-purchase-offers) was declined, or the offer expired, see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionStarGiftPurchaseOfferDeclined/" class="current_page_link">messageActionStarGiftPurchaseOfferDeclined</a>#73ada76b flags:<a href="/type/%23/">#</a> expired:flags.0?true gift:<a href="/type/StarGift/">StarGift</a> price:<a href="/type/StarsAmount/">StarsAmount</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the owner didn't act before the <a href="/constructor/messageActionStarGiftPurchaseOffer/">messageActionStarGiftPurchaseOffer</a>.<code>expires_at</code> deadline and the offer expired automatically; otherwise, the owner explicitly declined the offer.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift/">StarGift</a></td><td>The collectible gift the declined or expired offer was about.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Offered price that is refunded automatically to the buyer.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/)

Contains an offer to purchase a [collectible gift »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
