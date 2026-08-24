---
title: "account.SentEmailCode"
original: "https://core.telegram.org/type/account.SentEmailCode"
section: ref
description: "The email code that was sent"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.SentEmailCode","url":"/type/account.SentEmailCode/"}]
layout: layout.njk
---

# account.SentEmailCode

The email code that was sent

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.sentEmailCode/">account.sentEmailCode</a>#811f854f email_pattern:<a href="/type/string/">string</a> length:<a href="/type/int/">int</a> = <a href="/type/account.SentEmailCode/" class="current_page_link">account.SentEmailCode</a>;

---functions---

<a href="/method/account.sendVerifyEmailCode/">account.sendVerifyEmailCode</a>#98e037bb purpose:<a href="/type/EmailVerifyPurpose/">EmailVerifyPurpose</a> email:<a href="/type/string/">string</a> = <a href="/type/account.SentEmailCode/" class="current_page_link">account.SentEmailCode</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.sentEmailCode/">account.sentEmailCode</a></td><td>The sent email code</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.sendVerifyEmailCode/">account.sendVerifyEmailCode</a></td><td>Send an email verification code.</td></tr></tbody></table>
