---
title: "inputStorePaymentPremiumGiftCode"
original: "https://core.telegram.org/constructor/inputStorePaymentPremiumGiftCode"
section: ref
description: "Used to gift Telegram Premium subscriptions only to some specific subscribers of a channel/supergroup or to some of our contacts, see here » for more info on giveaways and gifts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStorePaymentPremiumGiftCode","url":"/constructor/inputStorePaymentPremiumGiftCode/"}]
layout: layout.njk
---

# inputStorePaymentPremiumGiftCode

Used to gift [Telegram Premium](/api/premium/) subscriptions only to some specific subscribers of a channel/supergroup or to some of our contacts, see [here »](/api/giveaways/) for more info on giveaways and gifts.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStorePaymentPremiumGiftCode/" class="current_page_link">inputStorePaymentPremiumGiftCode</a>#fb790393 flags:<a href="/type/%23/">#</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; boost_peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> message:flags.1?<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt;</td><td>The users that will receive the <a href="/api/premium/">Telegram Premium</a> subscriptions.</td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, the gifts will be sent on behalf of a channel/supergroup we are an admin of, which will also assign some <a href="/api/boost/">boosts</a> to it. Otherwise, the gift will be sent directly from the currently logged in user, and we will gain some extra <a href="/api/boost/">boost slots</a>. See <a href="/api/giveaways/">here »</a> for more info on giveaways and gifts.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/TextWithEntities/">TextWithEntities</a></td><td>Message attached with the gift</td></tr></tbody></table>

### Type

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Related pages

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Bot Payments API](/bots/payments/)
