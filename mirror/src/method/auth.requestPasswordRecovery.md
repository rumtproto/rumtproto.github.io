---
title: "auth.requestPasswordRecovery"
original: "https://core.telegram.org/method/auth.requestPasswordRecovery"
section: ref
description: "Request recovery code of a 2FA password, only for accounts with a recovery email configured."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.requestPasswordRecovery","url":"/method/auth.requestPasswordRecovery/"}]
layout: layout.njk
---

# auth.requestPasswordRecovery

Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](/api/srp/#email-verification).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.passwordRecovery/">auth.passwordRecovery</a>#137948a5 email_pattern:<a href="/type/string/">string</a> = <a href="/type/auth.PasswordRecovery/">auth.PasswordRecovery</a>;
---functions---
<a href="/method/auth.requestPasswordRecovery/" class="current_page_link">auth.requestPasswordRecovery</a>#d897bc66 = <a href="/type/auth.PasswordRecovery/">auth.PasswordRecovery</a>;</code></pre>

### Parameters

This constructor does not require any parameters.

### Result

[auth.PasswordRecovery](/type/auth.PasswordRecovery/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_EMPTY</td><td>The provided password is empty.</td></tr><tr><td>400</td><td>PASSWORD_RECOVERY_NA</td><td>No email was set, can't recover password via email.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
