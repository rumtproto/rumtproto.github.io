---
title: "auth.resendCode"
original: "https://core.telegram.org/method/auth.resendCode"
section: ref
description: "Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see login for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.resendCode","url":"/method/auth.resendCode/"}]
layout: layout.njk
---

# auth.resendCode

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodeSuccess/">auth.sentCodeSuccess</a>#2390fe44 authorization:<a href="/type/auth.Authorization/">auth.Authorization</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
<a href="/constructor/auth.sentCodePaymentRequired/">auth.sentCodePaymentRequired</a>#e0955a3c store_product:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> support_email_address:<a href="/type/string/">string</a> support_email_subject:<a href="/type/string/">string</a> currency:<a href="/type/string/">string</a> amount:<a href="/type/long/">long</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;
---functions---
<a href="/method/auth.resendCode/" class="current_page_link">auth.resendCode</a>#cae47523 flags:<a href="/type/%23/">#</a> phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> reason:flags.0?<a href="/type/string/">string</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The phone code hash obtained from <a href="/method/auth.sendCode/">auth.sendCode</a></td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Official clients only, used if the device integrity verification failed, and no secret could be obtained to invoke <a href="/method/auth.requestFirebaseSms/">auth.requestFirebaseSms</a>: in this case, the device integrity verification failure reason must be passed here.</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INSTALL_MISSING</td><td>Attempting to send a code to the recovery email, but no email is configured.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>400</td><td>PHONE_CODE_HASH_EMPTY</td><td>phone_code_hash is missing.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>406</td><td>SEND_CODE_UNAVAILABLE</td><td>Returned when all available options for this type of number were already used (e.g. flash-call, then SMS, then this error might be returned to trigger a second resend).</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/)

Request an SMS code via Firebase.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
