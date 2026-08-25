---
title: "labeledPrice"
original: "https://core.telegram.org/constructor/labeledPrice"
section: ref
description: "This object represents a portion of the price for goods or services."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"labeledPrice","url":"/constructor/labeledPrice/"}]
layout: layout.njk
---

# labeledPrice

This object represents a portion of the price for goods or services.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/labeledPrice/" class="current_page_link">labeledPrice</a>#cb296bf8 label:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/LabeledPrice/">LabeledPrice</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>label</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Portion label</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the exp parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

### Type

[LabeledPrice](/type/LabeledPrice/)

### Related pages

#### [Bot Payments API](/bots/payments/)
