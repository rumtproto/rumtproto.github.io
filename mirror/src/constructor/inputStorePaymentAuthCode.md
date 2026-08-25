---
title: "inputStorePaymentAuthCode"
original: "https://core.telegram.org/constructor/inputStorePaymentAuthCode"
section: ref
description: "Indicates payment for a login code."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStorePaymentAuthCode","url":"/constructor/inputStorePaymentAuthCode/"}]
layout: layout.njk
---

# inputStorePaymentAuthCode

Indicates payment for a login code.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStorePaymentAuthCode/" class="current_page_link">inputStorePaymentAuthCode</a>#9bb2636d flags:<a href="/type/%23/">#</a> restore:flags.0?true phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>restore</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Set this flag to restore a previously made purchase.</td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number.</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><code>phone_code_hash</code> returned by <a href="/method/auth.sendCode/">auth.sendCode</a>.</td></tr><tr><td><strong>premium_days</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Duration in days of the <a href="/api/premium/">Telegram Premium</a> subscription granted by this purchase, as indicated in <a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>.<code>premium_days</code>.</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)

Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a [Telegram Premium](/api/premium/) subscription in order to proceed with the login/signup, see [here »](/api/auth/#paid-auth) for more info.

#### [Bot Payments API](/bots/payments/)
