---
title: "InputSecureValue"
original: "https://core.telegram.org/type/InputSecureValue"
section: ref
description: "Secure value, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputSecureValue","url":"/type/InputSecureValue/"}]
layout: layout.njk
---

# InputSecureValue

Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputSecureValue/">inputSecureValue</a>#db21d0a7 flags:<a href="/type/%23/">#</a> type:<a href="/type/SecureValueType/">SecureValueType</a> data:flags.0?<a href="/type/SecureData/">SecureData</a> front_side:flags.1?<a href="/type/InputSecureFile/">InputSecureFile</a> reverse_side:flags.2?<a href="/type/InputSecureFile/">InputSecureFile</a> selfie:flags.3?<a href="/type/InputSecureFile/">InputSecureFile</a> translation:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSecureFile/">InputSecureFile</a>&gt; files:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSecureFile/">InputSecureFile</a>&gt; plain_data:flags.5?<a href="/type/SecurePlainData/">SecurePlainData</a> = <a href="/type/InputSecureValue/" class="current_page_link">InputSecureValue</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputSecureValue/">inputSecureValue</a></td><td>Secure value, <a href="https://core.telegram.org/passport/encryption#encryption">for more info see the passport docs »</a></td></tr></tbody></table>

### Related pages

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
