---
title: "account.EmailVerified"
original: "https://core.telegram.org/type/account.EmailVerified"
section: ref
description: "Email verification status"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.EmailVerified","url":"/type/account.EmailVerified/"}]
layout: layout.njk
---

# account.EmailVerified

Email verification status

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.emailVerified/">account.emailVerified</a>#2b96cd1b email:<a href="/type/string/">string</a> = <a href="/type/account.EmailVerified/" class="current_page_link">account.EmailVerified</a>;
<a href="/constructor/account.emailVerifiedLogin/">account.emailVerifiedLogin</a>#e1bb0d61 email:<a href="/type/string/">string</a> sent_code:<a href="/type/auth.SentCode/">auth.SentCode</a> = <a href="/type/account.EmailVerified/" class="current_page_link">account.EmailVerified</a>;

---functions---

<a href="/method/account.verifyEmail/">account.verifyEmail</a>#32da4cf purpose:<a href="/type/EmailVerifyPurpose/">EmailVerifyPurpose</a> verification:<a href="/type/EmailVerification/">EmailVerification</a> = <a href="/type/account.EmailVerified/" class="current_page_link">account.EmailVerified</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.emailVerified/">account.emailVerified</a></td><td>The email was verified correctly.</td></tr><tr><td><a href="/constructor/account.emailVerifiedLogin/">account.emailVerifiedLogin</a></td><td>The email was verified correctly, and a login code was just sent to it.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.verifyEmail/">account.verifyEmail</a></td><td>Verify an email address.</td></tr></tbody></table>
