---
title: "auth.signUp"
original: "https://core.telegram.org/method/auth.signUp"
section: ref
description: "Registers a validated phone number in the system."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.signUp","url":"/method/auth.signUp/"}]
layout: layout.njk
---

# auth.signUp

Registers a validated phone number in the system.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/auth.authorization/">auth.authorization</a>#2ea2c0d4 flags:<a href="/type/%23/">#</a> setup_password_required:flags.1?true otherwise_relogin_days:flags.1?<a href="/type/int/">int</a> tmp_sessions:flags.0?<a href="/type/int/">int</a> future_auth_token:flags.2?<a href="/type/bytes/">bytes</a> user:<a href="/type/User/">User</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
<a href="/constructor/auth.authorizationSignUpRequired/">auth.authorizationSignUpRequired</a>#44747e9a flags:<a href="/type/%23/">#</a> terms_of_service:flags.0?<a href="/type/help.TermsOfService/">help.TermsOfService</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;
---functions---
<a href="/method/auth.signUp/" class="current_page_link">auth.signUp</a>#aac7b717 flags:<a href="/type/%23/">#</a> no_joined_notifications:flags.0?true phone_number:<a href="/type/string/">string</a> phone_code_hash:<a href="/type/string/">string</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> = <a href="/type/auth.Authorization/">auth.Authorization</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>no_joined_notifications</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, users on Telegram that have already added <code>phone_number</code> to their contacts will <em>not</em> receive signup notifications about this user.</td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Phone number in the international format</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>SMS-message ID</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>New user first name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>New user last name</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FIRSTNAME_INVALID</td><td>The first name is invalid.</td></tr><tr><td>400</td><td>LASTNAME_INVALID</td><td>The last name is invalid.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>400</td><td>PHONE_CODE_INVALID</td><td>The provided phone code is invalid.</td></tr><tr><td>400</td><td>PHONE_NUMBER_FLOOD</td><td>You asked for the code too many times.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>400</td><td>PHONE_NUMBER_OCCUPIED</td><td>The phone number is already in use.</td></tr></tbody></table>
