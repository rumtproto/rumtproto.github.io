---
title: "invoice"
original: "https://core.telegram.org/constructor/invoice"
section: ref
description: "Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"invoice","url":"/constructor/invoice/"}]
layout: layout.njk
---

# invoice

Invoice

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/invoice/" class="current_page_link">invoice</a>#49ee584 flags:<a href="/type/%23/">#</a> test:flags.0?true name_requested:flags.1?true phone_requested:flags.2?true email_requested:flags.3?true shipping_address_requested:flags.4?true flexible:flags.5?true phone_to_provider:flags.6?true email_to_provider:flags.7?true recurring:flags.9?true currency:<a href="/type/string/">string</a> prices:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/LabeledPrice/">LabeledPrice</a>&gt; max_tip_amount:flags.8?<a href="/type/long/">long</a> suggested_tip_amounts:flags.8?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; terms_url:flags.10?<a href="/type/string/">string</a> subscription_period:flags.11?<a href="/type/int/">int</a> = <a href="/type/Invoice/">Invoice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>test</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Test invoice</td></tr><tr><td><strong>name_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Set this flag if you require the user's full name to complete the order</td></tr><tr><td><strong>phone_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Set this flag if you require the user's phone number to complete the order</td></tr><tr><td><strong>email_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Set this flag if you require the user's email address to complete the order</td></tr><tr><td><strong>shipping_address_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Set this flag if you require the user's shipping address to complete the order</td></tr><tr><td><strong>flexible</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Set this flag if the final price depends on the shipping method</td></tr><tr><td><strong>phone_to_provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Set this flag if user's phone number should be sent to provider</td></tr><tr><td><strong>email_to_provider</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Set this flag if user's email address should be sent to provider</td></tr><tr><td><strong>recurring</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Whether this is a recurring payment</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code, or <code>XTR</code> for <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>prices</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/LabeledPrice/">LabeledPrice</a>&gt;</td><td>Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)</td></tr><tr><td><strong>max_tip_amount</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/long/">long</a></td><td>The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td><strong>suggested_tip_amounts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt;</td><td>A vector of suggested amounts of tips in the <em>smallest units</em> of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed <code>max_tip_amount</code>.</td></tr><tr><td><strong>terms_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/string/">string</a></td><td>Terms of service URL</td></tr><tr><td><strong>subscription_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/int/">int</a></td><td>The number of seconds between consecutive Telegram Star debiting for <a href="/api/subscriptions/#bot-subscriptions">bot subscription</a> invoices</td></tr></tbody></table>

### Type

[Invoice](/type/Invoice/)

### Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Star subscriptions](/api/subscriptions/)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.
