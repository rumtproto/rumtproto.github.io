---
title: "SecureValue"
original: "https://core.telegram.org/type/SecureValue"
section: ref
description: "Secure Telegram Passport value"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SecureValue","url":"/type/SecureValue/"}]
layout: layout.njk
---

# SecureValue

Secure Telegram Passport value

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureValue/">secureValue</a>#187fa0ca flags:<a href="/type/%23/">#</a> type:<a href="/type/SecureValueType/">SecureValueType</a> data:flags.0?<a href="/type/SecureData/">SecureData</a> front_side:flags.1?<a href="/type/SecureFile/">SecureFile</a> reverse_side:flags.2?<a href="/type/SecureFile/">SecureFile</a> selfie:flags.3?<a href="/type/SecureFile/">SecureFile</a> translation:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt; files:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt; plain_data:flags.5?<a href="/type/SecurePlainData/">SecurePlainData</a> hash:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureValue/" class="current_page_link">SecureValue</a>;

---functions---

<a href="/method/account.saveSecureValue/">account.saveSecureValue</a>#899fe31d value:<a href="/type/InputSecureValue/">InputSecureValue</a> secure_secret_id:<a href="/type/long/">long</a> = <a href="/type/SecureValue/" class="current_page_link">SecureValue</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/secureValue/">secureValue</a></td><td>Secure value</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.saveSecureValue/">account.saveSecureValue</a></td><td>Securely save <a href="https://core.telegram.org/passport">Telegram Passport</a> document, <a href="https://core.telegram.org/passport/encryption#encryption">for more info see the passport docs »</a></td></tr></tbody></table>
