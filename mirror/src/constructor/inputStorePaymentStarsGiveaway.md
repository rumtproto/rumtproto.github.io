---
title: "inputStorePaymentStarsGiveaway"
original: "https://core.telegram.org/constructor/inputStorePaymentStarsGiveaway"
section: ref
description: "Used to pay for a star giveaway, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStorePaymentStarsGiveaway","url":"/constructor/inputStorePaymentStarsGiveaway/"}]
layout: layout.njk
---

# inputStorePaymentStarsGiveaway

Used to pay for a [star giveaway, see here »](/api/giveaways/#star-giveaways) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStorePaymentStarsGiveaway/" class="current_page_link">inputStorePaymentStarsGiveaway</a>#751f08fa flags:<a href="/type/%23/">#</a> only_new_subscribers:flags.0?true winners_are_visible:flags.3?true stars:<a href="/type/long/">long</a> boost_peer:<a href="/type/InputPeer/">InputPeer</a> additional_peers:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; countries_iso2:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt; prize_description:flags.4?<a href="/type/string/">string</a> random_id:<a href="/type/long/">long</a> until_date:<a href="/type/int/">int</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> users:<a href="/type/int/">int</a> = <a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>only_new_subscribers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, only new subscribers starting from the giveaway creation date will be able to participate to the giveaway.</td></tr><tr><td><strong>winners_are_visible</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, giveaway winners are public and will be listed in a <a href="/constructor/messageMediaGiveawayResults/">messageMediaGiveawayResults</a> message that will be automatically sent to the channel once the giveaway ends.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total number of Telegram Stars being given away (each user will receive <code>stars/users</code> stars).</td></tr><tr><td><strong>boost_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The channel/supergroup starting the giveaway, that the user must join to participate, that will receive the giveaway <a href="/api/boost/">boosts</a>; see <a href="/api/giveaways/">here »</a> for more info on giveaways.</td></tr><tr><td><strong>additional_peers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>Additional channels that the user must join to participate to the giveaway can be specified here.</td></tr><tr><td><strong>countries_iso2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/string/">string</a>&gt;</td><td>The set of users that can participate to the giveaway can be restricted by passing here an explicit whitelist of up to <a href="/api/config/#giveaway-countries-max">giveaway_countries_max</a> countries, specified as two-letter ISO 3166-1 alpha-2 country codes.</td></tr><tr><td><strong>prize_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>Can contain a textual description of additional giveaway prizes.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random ID to avoid resending the giveaway. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The end date of the giveaway, must be at most <a href="/api/config/#giveaway-period-max">giveaway_period_max</a> seconds in the future; see <a href="/api/giveaways/">here »</a> for more info on giveaways.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of winners.</td></tr></tbody></table>

### Type

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Related pages

#### [messageMediaGiveawayResults](/constructor/messageMediaGiveawayResults/)

A [giveaway](/api/giveaways/) with public winners has finished, this constructor contains info about the winners.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Bot Payments API](/bots/payments/)
