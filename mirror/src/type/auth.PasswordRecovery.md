---
title: "auth.PasswordRecovery"
original: "https://core.telegram.org/type/auth.PasswordRecovery"
section: ref
description: "Recovery info of a 2FA password, only for accounts with a recovery email configured."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.PasswordRecovery","url":"/type/auth.PasswordRecovery/"}]
layout: layout.njk
---

# auth.PasswordRecovery

Recovery info of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](/api/srp/#email-verification).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.passwordRecovery/">auth.passwordRecovery</a>#137948a5 email_pattern:<a href="/type/string/">string</a> = <a href="/type/auth.PasswordRecovery/" class="current_page_link">auth.PasswordRecovery</a>;

---functions---

<a href="/method/auth.requestPasswordRecovery/">auth.requestPasswordRecovery</a>#d897bc66 = <a href="/type/auth.PasswordRecovery/" class="current_page_link">auth.PasswordRecovery</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.passwordRecovery/">auth.passwordRecovery</a></td><td>Recovery info of a <a href="/api/srp/">2FA password</a>, only for accounts with a <a href="/api/srp/#email-verification">recovery email configured</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.requestPasswordRecovery/">auth.requestPasswordRecovery</a></td><td>Request recovery code of a <a href="/api/srp/">2FA password</a>, only for accounts with a <a href="/api/srp/#email-verification">recovery email configured</a>.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
