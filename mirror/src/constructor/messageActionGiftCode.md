---
title: "messageActionGiftCode"
original: "https://core.telegram.org/constructor/messageActionGiftCode"
section: ref
description: "Contains a Telegram Premium giftcode link."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionGiftCode","url":"/constructor/messageActionGiftCode/"}]
layout: layout.njk
---

# messageActionGiftCode

Contains a [Telegram Premium giftcode link](/api/links/#premium-giftcode-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionGiftCode/" class="current_page_link">messageActionGiftCode</a>#31c48347 flags:<a href="/type/%23/">#</a> via_giveaway:flags.0?true unclaimed:flags.5?true boost_peer:flags.1?<a href="/type/Peer/">Peer</a> days:<a href="/type/int/">int</a> slug:<a href="/type/string/">string</a> currency:flags.2?<a href="/type/string/">string</a> amount:flags.2?<a href="/type/long/">long</a> crypto_currency:flags.3?<a href="/type/string/">string</a> crypto_amount:flags.3?<a href="/type/long/">long</a> message:flags.4?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>via_giveaway</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, this gift code was received from a <a href="/api/giveaways/">giveaway »</a> started by a channel/supergroup we're subscribed to.</td></tr><tr><td><strong>unclaimed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If set, the link was not <a href="/api/links/#premium-giftcode-links">redeemed</a> yet.</td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Peer/">Peer</a></td><td>Identifier of the channel/supergroup that created the gift code <a href="/api/giveaways/">either directly or through a giveaway</a>: if we import this giftcode link, we will also automatically <a href="/api/boost/">boost</a> this channel/supergroup.</td></tr><tr><td><strong>days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration of the gifted Telegram Premium subscription, in days.</td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Slug of the <a href="/api/links/#premium-giftcode-links">Telegram Premium giftcode link</a></td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>crypto_currency</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>If set, the gift was made using the specified cryptocurrency.</td></tr><tr><td><strong>crypto_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/long/">long</a></td><td>If <code>crypto_currency</code> is set, contains the paid amount, in the smallest units of the cryptocurrency.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Message attached with the gift</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Bot Payments API](/bots/payments/)
