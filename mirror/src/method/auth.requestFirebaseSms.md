---
title: "auth.requestFirebaseSms"
original: "https://core.telegram.org/method/auth.requestFirebaseSms"
section: ref
description: "Request an SMS code via Firebase."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.requestFirebaseSms","url":"/method/auth.requestFirebaseSms/"}]
layout: layout.njk
---

# auth.requestFirebaseSms

Request an SMS code via Firebase.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/auth.requestFirebaseSms/" class="current_page_link">auth.requestFirebaseSms</a>#8e39261e flags:<a href="/type/%23/">#</a> phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> safety_net_token:flags.0?<a href="/type/string/">string</a> play_integrity_token:flags.2?<a href="/type/string/">string</a> ios_push_secret:flags.1?<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone code hash returned by <a href="/method/auth.sendCode/">auth.sendCode</a></td></tr><tr><td><strong>safety_net_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>On Android, a JWS object obtained as described in the <a href="/api/auth/">auth documentation »</a></td></tr><tr><td><strong>play_integrity_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>On Android, an object obtained as described in the <a href="/api/auth/">auth documentation »</a></td></tr><tr><td><strong>ios_push_secret</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Secret token received via an apple push notification</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
