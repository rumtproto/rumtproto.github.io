---
title: "payments.getBankCardData"
original: "https://core.telegram.org/method/payments.getBankCardData"
section: ref
description: "Get info about a credit card"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"payments.getBankCardData","url":"/method/payments.getBankCardData/"}]
layout: layout.njk
---

# payments.getBankCardData

Get info about a credit card

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/payments.bankCardData/">payments.bankCardData</a>#3e24e573 title:<a href="/type/string/">string</a> open_urls:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BankCardOpenUrl/">BankCardOpenUrl</a>&gt; = <a href="/type/payments.BankCardData/">payments.BankCardData</a>;
---functions---
<a href="/method/payments.getBankCardData/" class="current_page_link">payments.getBankCardData</a>#2e79d779 number:<a href="/type/string/">string</a> = <a href="/type/payments.BankCardData/">payments.BankCardData</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Credit card number</td></tr></tbody></table>

### Result

[payments.BankCardData](/type/payments.BankCardData/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BANK_CARD_NUMBER_INVALID</td><td>The specified card number is invalid.</td></tr></tbody></table>
