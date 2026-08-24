---
title: "emailVerifyPurposeLoginSetup"
original: "https://core.telegram.org/constructor/emailVerifyPurposeLoginSetup"
section: ref
description: "Email verification purpose: setup login email"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"emailVerifyPurposeLoginSetup","url":"/constructor/emailVerifyPurposeLoginSetup/"}]
layout: layout.njk
---

# emailVerifyPurposeLoginSetup

Email verification purpose: setup login email

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/emailVerifyPurposeLoginSetup/" class="current_page_link">emailVerifyPurposeLoginSetup</a>#4345be73 phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> = <a href="/type/EmailVerifyPurpose/">EmailVerifyPurpose</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone code hash as specified by the <a href="/api/auth/#email-verification">documentation</a></td></tr></tbody></table>

### Type

[EmailVerifyPurpose](/type/EmailVerifyPurpose/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
