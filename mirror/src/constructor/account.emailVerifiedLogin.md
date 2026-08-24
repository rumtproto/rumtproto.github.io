---
title: "account.emailVerifiedLogin"
original: "https://core.telegram.org/constructor/account.emailVerifiedLogin"
section: ref
description: "The email was verified correctly, and a login code was just sent to it."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.emailVerifiedLogin","url":"/constructor/account.emailVerifiedLogin/"}]
layout: layout.njk
---

# account.emailVerifiedLogin

The email was verified correctly, and a login code was just sent to it.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.emailVerifiedLogin/" class="current_page_link">account.emailVerifiedLogin</a>#e1bb0d61 email:<a href="/type/string/">string</a> sent_code:<a href="/type/auth.SentCode/">auth.SentCode</a> = <a href="/type/account.EmailVerified/">account.EmailVerified</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The verified email address.</td></tr><tr><td><strong>sent_code</strong></td><td style="text-align: center;"><a href="/type/auth.SentCode/">auth.SentCode</a></td><td>Info about the sent <a href="/api/auth/">login code</a></td></tr></tbody></table>

### Type

[account.EmailVerified](/type/account.EmailVerified/)

### Related pages

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
