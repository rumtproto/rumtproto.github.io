---
title: "account.PasswordInputSettings"
original: "https://core.telegram.org/type/account.PasswordInputSettings"
section: ref
description: "Constructor for setting up a new 2FA SRP password"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.PasswordInputSettings","url":"/type/account.PasswordInputSettings/"}]
layout: layout.njk
---

# account.PasswordInputSettings

Constructor for setting up a new [2FA SRP password](/api/srp/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.passwordInputSettings/">account.passwordInputSettings</a>#c23727c9 flags:<a href="/type/%23/">#</a> new_algo:flags.0?<a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a> new_password_hash:flags.0?<a href="/type/bytes/">bytes</a> hint:flags.0?<a href="/type/string/">string</a> email:flags.1?<a href="/type/string/">string</a> new_secure_settings:flags.2?<a href="/type/SecureSecretSettings/">SecureSecretSettings</a> = <a href="/type/account.PasswordInputSettings/" class="current_page_link">account.PasswordInputSettings</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.passwordInputSettings/">account.passwordInputSettings</a></td><td>Settings for setting up a new password</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
