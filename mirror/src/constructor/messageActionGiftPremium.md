---
title: "messageActionGiftPremium"
original: "https://core.telegram.org/constructor/messageActionGiftPremium"
section: ref
description: "Info about a gifted Telegram Premium subscription"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGiftPremium","url":"/constructor/messageActionGiftPremium/"}]
layout: layout.njk
---

# messageActionGiftPremium

Info about a gifted Telegram Premium subscription

This service message should be displayed below the appropriate sticker from the [inputStickerSetPremiumGifts »](/constructor/inputStickerSetPremiumGifts/) [stickerset »](/api/stickers/#stickersets):

-   If `months == 1`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/31E283A3.png" width="20" height="20" alt="1️⃣">"
-   If `months == 3`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/32E283A3.png" width="20" height="20" alt="2️⃣">"
-   If `months == 6`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/33E283A3.png" width="20" height="20" alt="3️⃣">"
-   If `months == 12`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/34E283A3.png" width="20" height="20" alt="4️⃣">"
-   If `months == 24`, choose the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/35E283A3.png" width="20" height="20" alt="5️⃣">"
-   Otherwise, fallback to the sticker with emoji equal to "<img class="emoji" src="https://telegram.org/img/emoji/40/31E283A3.png" width="20" height="20" alt="1️⃣">"

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGiftPremium/" class="current_page_link">messageActionGiftPremium</a>#48e91302 flags:<a href="/type/%23/">#</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> days:<a href="/type/int/">int</a> crypto_currency:flags.0?<a href="/type/string/">string</a> crypto_amount:flags.0?<a href="/type/long/">long</a> message:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the gift in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration of the gifted Telegram Premium subscription, in days.</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>If the gift was bought using a cryptocurrency, the cryptocurrency name.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>If the gift was bought using a cryptocurrency, price of the gift in the smallest units of a cryptocurrency.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Message attached with the gift</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [inputStickerSetPremiumGifts](/constructor/inputStickerSetPremiumGifts/)

Stickers to show when receiving a gifted Telegram Premium subscription

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.
