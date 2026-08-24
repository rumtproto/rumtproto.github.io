---
title: "auth.resetLoginEmail"
original: "https://core.telegram.org/method/auth.resetLoginEmail"
section: ref
description: "How to register a user's phone to start using the API."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.resetLoginEmail","url":"/method/auth.resetLoginEmail/"}]
layout: layout.njk
---

# auth.resetLoginEmail

Reset the [login email »](/api/auth/#email-verification).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a>#2390fe44 authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
---functions---
<a href="/method/auth.resetLoginEmail/" class="current_page_link">auth.resetLoginEmail</a>#7e960193 phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number of the account</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone code hash, obtained as described in the <a href="/api/auth/">documentation »</a></td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INSTALL_MISSING</td><td>Attempting to send a code to the recovery email, but no email is configured.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>400</td><td>TASK_ALREADY_EXISTS</td><td>An email reset was already requested.</td></tr></tbody></table>

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
