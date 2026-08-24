---
title: "account.password"
original: "https://core.telegram.org/constructor/account.password"
section: ref
description: "Configuration for two-factor authorization"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.password","url":"/constructor/account.password/"}]
layout: layout.njk
---

# account.password

Configuration for two-factor authorization

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.password/" class="current_page_link">account.password</a>#957b50fb flags:<a href="/type/%23/">#</a> has_recovery:flags.0?true has_secure_values:flags.1?true has_password:flags.2?true current_algo:flags.2?<a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a> srp_B:flags.2?<a href="/type/bytes/">bytes</a> srp_id:flags.2?<a href="/type/long/">long</a> hint:flags.3?<a href="/type/string/">string</a> email_unconfirmed_pattern:flags.4?<a href="/type/string/">string</a> new_algo:<a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a> new_secure_algo:<a href="/type/SecurePasswordKdfAlgo/">SecurePasswordKdfAlgo</a> secure_random:<a href="/type/bytes/">bytes</a> pending_reset_date:flags.5?<a href="/type/int/">int</a> login_email_pattern:flags.6?<a href="/type/string/">string</a> = <a href="/type/account.Password/">account.Password</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_recovery</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the user has a recovery method configured</td></tr><tr><td><strong>has_secure_values</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether telegram <a href="https://core.telegram.org/passport">passport</a> is enabled</td></tr><tr><td><strong>has_password</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether the user has a password</td></tr><tr><td><strong>current_algo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a></td><td>The <a href="/api/srp/">KDF algorithm for SRP two-factor authentication</a> of the current password</td></tr><tr><td><strong>srp_B</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/bytes/">bytes</a></td><td>Srp B param for <a href="/api/srp/">SRP authorization</a></td></tr><tr><td><strong>srp_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>Srp ID param for <a href="/api/srp/">SRP authorization</a></td></tr><tr><td><strong>hint</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>Text hint for the password</td></tr><tr><td><strong>email_unconfirmed_pattern</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/string/">string</a></td><td>A <a href="/api/srp/#email-verification">password recovery email</a> with the specified <a href="/api/pattern/">pattern</a> is still awaiting verification</td></tr><tr><td><strong>new_algo</strong></td><td style="text-align: center;"><a href="/type/PasswordKdfAlgo/">PasswordKdfAlgo</a></td><td>The <a href="/api/srp/">KDF algorithm for SRP two-factor authentication</a> to use when creating new passwords</td></tr><tr><td><strong>new_secure_algo</strong></td><td style="text-align: center;"><a href="/type/SecurePasswordKdfAlgo/">SecurePasswordKdfAlgo</a></td><td>The KDF algorithm for telegram <a href="https://core.telegram.org/passport">passport</a></td></tr><tr><td><strong>secure_random</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Secure random string</td></tr><tr><td><strong>pending_reset_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/int/">int</a></td><td>The 2FA password will be automatically removed at this date, unless the user cancels the operation</td></tr><tr><td><strong>login_email_pattern</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/string/">string</a></td><td>A verified login email with the specified <a href="/api/pattern/">pattern</a> is configured</td></tr></tbody></table>

### Type

[account.Password](/type/account.Password/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.

#### [Pattern matching](/api/pattern/)

Some methods require the client to verify if the data obtained from an external source matches a certain pattern.
