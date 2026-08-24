---
title: "auth.passwordRecovery"
original: "https://core.telegram.org/constructor/auth.passwordRecovery"
section: ref
description: "Recovery info of a 2FA password, only for accounts with a recovery email configured."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.passwordRecovery","url":"/constructor/auth.passwordRecovery/"}]
layout: layout.njk
---

# auth.passwordRecovery

Recovery info of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](/api/srp/#email-verification).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.passwordRecovery/" class="current_page_link">auth.passwordRecovery</a>#137948a5 email_pattern:<a href="/type/string/">string</a> = <a href="/type/auth.PasswordRecovery/">auth.PasswordRecovery</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>email_pattern</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The email to which the recovery code was sent must match this <a href="/api/pattern/">pattern</a>.</td></tr></tbody></table>

### Type

[auth.PasswordRecovery](/type/auth.PasswordRecovery/)

### Related pages

#### [Pattern matching](/api/pattern/)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
