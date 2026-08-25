---
title: "messageActionGiftStars"
original: "https://core.telegram.org/constructor/messageActionGiftStars"
section: ref
description: "You gifted or were gifted some Telegram Stars."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGiftStars","url":"/constructor/messageActionGiftStars/"}]
layout: layout.njk
---

# messageActionGiftStars

You gifted or were gifted some [Telegram Stars](/api/stars/).

This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](/api/stickers/#stickersets):

-   If `stars <= 1000`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">"
-   If `stars < 2500`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">"
-   Otherwise, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/34E283A3.png" width="20" height="20" alt="4️⃣">"

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGiftStars/" class="current_page_link">messageActionGiftStars</a>#45d5b021 flags:<a href="/type/%23/">#</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> stars:<a href="/type/long/">long</a> crypto_currency:flags.0?<a href="/type/string/">string</a> crypto_amount:flags.0?<a href="/type/long/">long</a> transaction_id:flags.1?<a href="/type/string/">string</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the gift in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Amount of gifted stars</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If the gift was bought using a cryptocurrency, the cryptocurrency name.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>If the gift was bought using a cryptocurrency, price of the gift in the smallest units of a cryptocurrency.</td></tr><tr><td><strong>transaction_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Identifier of the transaction, only visible to the receiver of the gift.</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Bot Payments API](/bots/payments/)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Stickers to show when receiving a gifted Telegram Premium subscription

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
