---
title: "auth.sentCodeTypeSetUpEmailRequired"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeSetUpEmailRequired"
section: ref
description: "The user should add and verify an email address in order to login as described here »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.sentCodeTypeSetUpEmailRequired","url":"/constructor/auth.sentCodeTypeSetUpEmailRequired/"}]
layout: layout.njk
---

# auth.sentCodeTypeSetUpEmailRequired

The user should add and verify an email address in order to login as described [here »](/api/auth/#email-verification).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.sentCodeTypeSetUpEmailRequired/" class="current_page_link">auth.sentCodeTypeSetUpEmailRequired</a>#a5491dea flags:<a href="/type/%23/">#</a> apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = <a href="/type/auth.SentCodeType/">auth.SentCodeType</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>apple_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether authorization through Apple ID is allowed</td></tr><tr><td><strong>google_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether authorization through Google ID is allowed</td></tr></tbody></table>

### Type

[auth.SentCodeType](/type/auth.SentCodeType/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
