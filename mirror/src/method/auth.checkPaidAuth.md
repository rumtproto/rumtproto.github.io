---
title: "auth.checkPaidAuth"
original: "https://core.telegram.org/method/auth.checkPaidAuth"
section: ref
description: "Checks the status of a login payment."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.checkPaidAuth","url":"/method/auth.checkPaidAuth/"}]
layout: layout.njk
---

# auth.checkPaidAuth

Checks the status of a [login payment](/api/auth/#paid-auth).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a>#2390fe44 authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
---functions---
<a href="/method/auth.checkPaidAuth/" class="current_page_link">auth.checkPaidAuth</a>#56e59f9c phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> form_id:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The phone code hash obtained from <a href="/method/auth.sendCode/">auth.sendCode</a></td></tr><tr><td><strong>form_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The payment form ID passed to <a href="/method/payments.sendPaymentForm/">payments.sendPaymentForm</a>.</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [payments.sendPaymentForm](/method/payments.sendPaymentForm/)

Send compiled payment form

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
