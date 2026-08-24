---
title: "messageActionStarGiftPurchaseOffer"
original: "https://core.telegram.org/constructor/messageActionStarGiftPurchaseOffer"
section: ref
description: "Contains an offer to purchase a collectible gift », see here » for the full flow."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionStarGiftPurchaseOffer","url":"/constructor/messageActionStarGiftPurchaseOffer/"}]
layout: layout.njk
---

# messageActionStarGiftPurchaseOffer

Contains an offer to purchase a [collectible gift »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionStarGiftPurchaseOffer/" class="current_page_link">messageActionStarGiftPurchaseOffer</a>#774278d4 flags:<a href="/type/%23/">#</a> accepted:flags.0?true declined:flags.1?true gift:<a href="/type/StarGift/">StarGift</a> price:<a href="/type/StarsAmount/">StarsAmount</a> expires_at:<a href="/type/int/">int</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>accepted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the gift owner accepted this offer.</td></tr><tr><td><strong>declined</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the gift owner declined this offer.</td></tr><tr><td><strong>gift</strong></td><td style="text-align: center;"><a href="/type/StarGift/">StarGift</a></td><td>The collectible gift the offer is about.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/type/StarsAmount/">StarsAmount</a></td><td>Offered price.</td></tr><tr><td><strong>expires_at</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Offer expiration date (UNIX timestamp): if the owner doesn't act before this date, the offer will expire and the buyer will be refunded automatically.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
