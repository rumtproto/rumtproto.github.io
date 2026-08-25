---
title: "premiumSubscriptionOption"
original: "https://core.telegram.org/constructor/premiumSubscriptionOption"
section: ref
description: "Describes a Telegram Premium subscription option"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"premiumSubscriptionOption","url":"/constructor/premiumSubscriptionOption/"}]
layout: layout.njk
---

# premiumSubscriptionOption

Describes a Telegram Premium subscription option

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/premiumSubscriptionOption/" class="current_page_link">premiumSubscriptionOption</a>#5f2d1df2 flags:<a href="/type/%23/">#</a> current:flags.1?true can_purchase_upgrade:flags.2?true transaction:flags.3?<a href="/type/string/">string</a> months:<a href="/type/int/">int</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> bot_url:<a href="/type/string/">string</a> store_product:flags.0?<a href="/type/string/">string</a> = <a href="/type/PremiumSubscriptionOption/">PremiumSubscriptionOption</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>current</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether this subscription option is currently in use.</td></tr><tr><td><strong>can_purchase_upgrade</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether this subscription option can be used to upgrade the existing Telegram Premium subscription. When upgrading Telegram Premium subscriptions bought through stores, make sure that the store transaction ID is equal to <code>transaction</code>, to avoid upgrading someone else's account, if the client is currently logged into multiple accounts.</td></tr><tr><td><strong>transaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Identifier of the last in-store transaction for the currently used subscription on the current account.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration of subscription in months</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>bot_url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/links/">Deep link</a> used to initiate payment</td></tr><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Store product ID, only for official apps</td></tr></tbody></table>

### Type

[PremiumSubscriptionOption](/type/PremiumSubscriptionOption/)

### Related pages

#### [Bot Payments API](/bots/payments/)

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
