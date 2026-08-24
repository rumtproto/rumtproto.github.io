---
title: "auth.authorizationSignUpRequired"
original: "https://core.telegram.org/constructor/auth.authorizationSignUpRequired"
section: ref
description: "An account with this phone number doesn't exist on telegram: the user has to enter basic information and sign up"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.authorizationSignUpRequired","url":"/constructor/auth.authorizationSignUpRequired/"}]
layout: layout.njk
---

# auth.authorizationSignUpRequired

An account with this phone number doesn't exist on telegram: the user has to [enter basic information and sign up](/api/auth/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorizationSignUpRequired/" class="current_page_link">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>terms_of_service</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a></td><td>Telegram's terms of service: the user must read and accept the terms of service before signing up to telegram</td></tr></tbody></table>

### Type

[auth.Authorization](/type/auth.Authorization/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
