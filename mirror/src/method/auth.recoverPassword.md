---
title: "auth.recoverPassword"
original: "https://core.telegram.org/method/auth.recoverPassword"
section: ref
description: "Reset the 2FA password using the recovery code sent using auth.requestPasswordRecovery."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.recoverPassword","url":"/method/auth.recoverPassword/"}]
layout: layout.njk
---

# auth.recoverPassword

Reset the [2FA password](/api/srp/) using the recovery code sent using [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
---functions---
<a href="/method/auth.recoverPassword/" class="current_page_link">auth.recoverPassword</a>#37096c70 flags:<a href="/type/%23/">#</a> code:<a href="/type/string/">string</a> new_settings:flags.0?<a href="/type/account.PasswordInputSettings/">account.PasswordInputSettings</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Code received via email</td></tr><tr><td><strong>new_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/account.PasswordInputSettings/">account.PasswordInputSettings</a></td><td>New password</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CODE_EMPTY</td><td>The provided code is empty.</td></tr><tr><td>400</td><td>NEW_SETTINGS_INVALID</td><td>The new password settings are invalid.</td></tr></tbody></table>

### Related pages

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/)

Request recovery code of a [2FA password](/api/srp/), only for accounts with a [recovery email configured](/api/srp/#email-verification).
