---
title: "auth.sentCode"
original: "https://core.telegram.org/constructor/auth.sentCode"
section: ref
description: "Contains info about a sent verification code."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCode","url":"/constructor/auth.sentCode/"}]
layout: layout.njk
---

# auth.sentCode

Contains info about a sent verification code.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCode/" class="current_page_link">auth.sentCode</a>#5e002502 flags:<a href="/type/%23/">#</a> type:<a href="/type/auth.SentCodeType/">auth.SentCodeType</a> phone_code_hash:<a href="/type/string/">string</a> next_type:flags.1?<a href="/type/auth.CodeType/">auth.CodeType</a> timeout:flags.2?<a href="/type/int/">int</a> = <a href="/type/auth.SentCode/">auth.SentCode</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/auth.SentCodeType/">auth.SentCodeType</a></td><td>Phone code type</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone code hash, to be stored and later re-used with <a href="/method/auth.signIn/">auth.signIn</a></td></tr><tr><td><strong>next_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/auth.CodeType/">auth.CodeType</a></td><td>Phone code type that will be sent next, if the phone code is not received within <code>timeout</code> seconds: to send it use <a href="/method/auth.resendCode/">auth.resendCode</a></td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Timeout for reception of the phone code</td></tr></tbody></table>

### Type

[auth.SentCode](/type/auth.SentCode/)

### Related pages

#### [auth.signIn](/method/auth.signIn/)

Signs in a user with a validated phone number.

#### [auth.resendCode](/method/auth.resendCode/)

Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](/api/auth/) for more info.
