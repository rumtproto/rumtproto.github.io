---
title: "auth.checkPassword"
original: "https://core.telegram.org/method/auth.checkPassword"
section: ref
description: "Try logging to an account protected by a 2FA password."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.checkPassword","url":"/method/auth.checkPassword/"}]
layout: layout.njk
---

# auth.checkPassword

Try logging to an account protected by a [2FA password](/api/srp/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
---functions---
<a href="/method/auth.checkPassword/" class="current_page_link">auth.checkPassword</a>#d18b4d16 password:<a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP/">InputCheckPasswordSRP</a></td><td>The account's password (see <a href="/api/srp/">SRP</a>)</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>500</td><td>AUTH_KEY_UNSYNCHRONIZED</td><td>Internal error, please repeat the method call.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>The provided password hash is invalid.</td></tr><tr><td>400</td><td>SRP_ID_INVALID</td><td>Invalid SRP ID provided.</td></tr><tr><td>400</td><td>SRP_PASSWORD_CHANGED</td><td>Password has changed.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
