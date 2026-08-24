---
title: "account.saveSecureValue"
original: "https://core.telegram.org/method/account.saveSecureValue"
section: ref
description: "Securely save Telegram Passport document, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.saveSecureValue","url":"/method/account.saveSecureValue/"}]
layout: layout.njk
---

# account.saveSecureValue

Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureValue/">secureValue</a>#187fa0ca flags:<a href="/type/%23/">#</a> type:<a href="/type/SecureValueType/">SecureValueType</a> data:flags.0?<a href="/type/SecureData/">SecureData</a> front_side:flags.1?<a href="/type/SecureFile/">SecureFile</a> reverse_side:flags.2?<a href="/type/SecureFile/">SecureFile</a> selfie:flags.3?<a href="/type/SecureFile/">SecureFile</a> translation:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt; files:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt; plain_data:flags.5?<a href="/type/SecurePlainData/">SecurePlainData</a> hash:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureValue/">SecureValue</a>;
---functions---
<a href="/method/account.saveSecureValue/" class="current_page_link">account.saveSecureValue</a>#899fe31d value:<a href="/type/InputSecureValue/">InputSecureValue</a> secure_secret_id:<a href="/type/long/">long</a> = <a href="/type/SecureValue/">SecureValue</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/InputSecureValue/">InputSecureValue</a></td><td>Secure value, <a href="https://core.telegram.org/passport/encryption#encryption">for more info see the passport docs »</a></td></tr><tr><td><strong>secure_secret_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Passport secret hash, <a href="https://core.telegram.org/passport/encryption#encryption">for more info see the passport docs »</a></td></tr></tbody></table>

### Result

[SecureValue](/type/SecureValue/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_REQUIRED</td><td>A <a href="/api/srp/">2FA password</a> must be configured to use Telegram Passport.</td></tr><tr><td>400</td><td>SECURE_SECRET_REQUIRED</td><td>A secure secret is required.</td></tr></tbody></table>

### Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Two-factor authentication](/api/srp/)

How to login to a user's account if they have enabled 2FA, how to change password.
