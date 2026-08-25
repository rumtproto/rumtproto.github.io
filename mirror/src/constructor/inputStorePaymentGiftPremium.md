---
title: "inputStorePaymentGiftPremium"
original: "https://core.telegram.org/constructor/inputStorePaymentGiftPremium"
section: ref
description: "Info about a gifted Telegram Premium purchase"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputStorePaymentGiftPremium","url":"/constructor/inputStorePaymentGiftPremium/"}]
layout: layout.njk
---

# inputStorePaymentGiftPremium

Info about a gifted Telegram Premium purchase

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputStorePaymentGiftPremium/" class="current_page_link">inputStorePaymentGiftPremium</a>#616f7fe8 user_id:<a href="/type/InputUser/">InputUser</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/InputStorePaymentPurpose/">InputStorePaymentPurpose</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The user to which the Telegram Premium subscription was gifted</td></tr><tr><td><strong>currency</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)

### Related pages

#### [Bot Payments API](/bots/payments/)
