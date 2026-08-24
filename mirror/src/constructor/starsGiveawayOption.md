---
title: "starsGiveawayOption"
original: "https://core.telegram.org/constructor/starsGiveawayOption"
section: ref
description: "Contains info about a Telegram Star giveaway option."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"starsGiveawayOption","url":"/constructor/starsGiveawayOption/"}]
layout: layout.njk
---

# starsGiveawayOption

Contains info about a [Telegram Star giveaway](/api/giveaways/#star-giveaways) option.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/starsGiveawayOption/" class="current_page_link">starsGiveawayOption</a>#94ce852a flags:<a href="/type/%23/">#</a> extended:flags.0?true default:flags.1?true stars:<a href="/type/long/">long</a> yearly_boosts:<a href="/type/int/">int</a> store_product:flags.2?<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> winners:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsGiveawayWinnersOption/">StarsGiveawayWinnersOption</a>&gt; = <a href="/type/StarsGiveawayOption/">StarsGiveawayOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>extended</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, this option must only be shown in the full list of giveaway options (i.e. they must be added to the list only when the user clicks on the expand button).</td></tr><tr><td><strong>default</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, this option must be pre-selected by default in the option list.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The number of Telegram Stars that will be distributed among winners</td></tr><tr><td><strong>yearly_boosts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of times the chat will be boosted for one year if the <a href="/constructor/inputStorePaymentStarsGiveaway/">inputStorePaymentStarsGiveaway</a>.<code>boost_peer</code> flag is populated</td></tr><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Identifier of the store product associated with the option, official apps only.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>winners</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StarsGiveawayWinnersOption/">StarsGiveawayWinnersOption</a>&gt;</td><td>Allowed options for the number of giveaway winners.</td></tr></tbody></table>

### Type

[StarsGiveawayOption](/type/StarsGiveawayOption/)

### Related pages

#### [inputStorePaymentStarsGiveaway](/constructor/inputStorePaymentStarsGiveaway/)

Used to pay for a [star giveaway, see here »](/api/giveaways/#star-giveaways) for more info.

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
