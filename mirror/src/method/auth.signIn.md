---
title: "auth.signIn"
original: "https://core.telegram.org/method/auth.signIn"
section: ref
description: "Signs in a user with a validated phone number."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.signIn","url":"/method/auth.signIn/"}]
layout: layout.njk
---

# auth.signIn

Signs in a user with a validated phone number.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
---functions---
<a href="/method/auth.signIn/" class="current_page_link">auth.signIn</a>#8d52a951 flags:<a href="/type/%23/">#</a> phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> phone_code:flags.0?<a href="/type/string/">string</a> email_verification:flags.1?<a href="/type/EmailVerification/">EmailVerification</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number in the international format</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>SMS-message ID, obtained from <a href="/method/auth.sendCode/">auth.sendCode</a></td></tr><tr><td><strong>phone_code</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Valid numerical code from the SMS-message</td></tr><tr><td><strong>email_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/EmailVerification/">EmailVerification</a></td><td>Email verification code or token</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>500</td><td>AUTH_RESTART</td><td>Restart the authorization process.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>400</td><td>PHONE_CODE_INVALID</td><td>The provided phone code is invalid.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>400</td><td>PHONE_NUMBER_UNOCCUPIED</td><td>The phone number is not yet being used.</td></tr><tr><td>500</td><td>SIGN_IN_FAILED</td><td>Failure while signing in.</td></tr><tr><td>406</td><td>UPDATE_APP_TO_LOGIN</td><td>Please update your client to login.</td></tr></tbody></table>

### Related pages

#### [auth.sendCode](/method/auth.sendCode/)

Send the verification code for login
