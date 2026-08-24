---
title: "account.sendConfirmPhoneCode"
original: "https://core.telegram.org/method/account.sendConfirmPhoneCode"
section: ref
description: "Send confirmation code to cancel account deletion, for more info click here »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.sendConfirmPhoneCode","url":"/method/account.sendConfirmPhoneCode/"}]
layout: layout.njk
---

# account.sendConfirmPhoneCode

Send confirmation code to cancel account deletion, for more info [click here »](/api/account-deletion/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a>#2390fe44 authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
---functions---
<a href="/method/account.sendConfirmPhoneCode/" class="current_page_link">account.sendConfirmPhoneCode</a>#1b3faa88 hash:<a href="/type/string/">string</a> settings:<a href="/type/CodeSettings/">CodeSettings</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The hash from the service notification, for more info <a href="/api/account-deletion/">click here »</a></td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings/">CodeSettings</a></td><td>Phone code settings</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>HASH_INVALID</td><td>The provided hash is invalid.</td></tr></tbody></table>

### Related pages

#### [Account deletion](/api/account-deletion/)

How to reset an account if the 2FA password was forgotten.
