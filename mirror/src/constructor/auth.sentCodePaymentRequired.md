---
title: "auth.sentCodePaymentRequired"
original: "https://core.telegram.org/constructor/auth.sentCodePaymentRequired"
section: ref
description: "Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a Telegram…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodePaymentRequired","url":"/constructor/auth.sentCodePaymentRequired/"}]
layout: layout.njk
---

# auth.sentCodePaymentRequired

Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a [Telegram Premium](/api/premium/) subscription in order to proceed with the login/signup, see [here »](/api/auth/#paid-auth) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCodePaymentRequired/" class="current_page_link">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>store_product</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>For official apps, tore identifier of the Telegram Premium subscription.</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone code hash, to be stored and later re-used with <a href="/method/auth.signIn/">auth.signIn</a></td></tr><tr><td><strong>support_email_address</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>An email address that can be contacted for more information about this request.</td></tr><tr><td><strong>support_email_subject</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The mandatory subject for the email.</td></tr><tr><td><strong>premium_days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration in days of the <a href="/api/premium/">Telegram Premium</a> subscription granted by this purchase.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="https://core.telegram.org/bots/payments#supported-currencies">currency</a> code.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Total price in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="https://core.telegram.org/bots/payments/currencies.json">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[auth.SentCode](/type/auth.SentCode/)

### Related pages

#### [auth.signIn](/method/auth.signIn/)

Signs in a user with a validated phone number.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Bot Payments API](https://core.telegram.org/bots/payments)

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
