---
title: "account.getPasswordSettings"
original: "https://core.telegram.org/method/account.getPasswordSettings"
section: ref
description: "Get private info associated to the password info (recovery email, telegram passport info & so on)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getPasswordSettings","url":"/method/account.getPasswordSettings/"}]
layout: layout.njk
---

# account.getPasswordSettings

Get private info associated to the password info (recovery email, telegram [passport](/passport/) info & so on)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passwordSettings/">account.passwordSettings</a>#9a5c33e5 flags:<a href="/type/%23/">#</a> email:flags.0?<a href="/type/string/">string</a> secure_settings:flags.1?<a href="/type/SecureSecretSettings/">SecureSecretSettings</a> = <a href="/type/account.PasswordSettings/">account.PasswordSettings</a>;
---functions---
<a href="/method/account.getPasswordSettings/" class="current_page_link">account.getPasswordSettings</a>#9cd4eaf9 password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/account.PasswordSettings/">account.PasswordSettings</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a></td><td>The password (see <a href="/api/srp/">SRP</a>)</td></tr></tbody></table>

### Result

[account.PasswordSettings](/type/account.PasswordSettings/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.
