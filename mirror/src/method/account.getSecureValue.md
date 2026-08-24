---
title: "account.getSecureValue"
original: "https://core.telegram.org/method/account.getSecureValue"
section: ref
description: "Get saved Telegram Passport document, for more info see the passport docs »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getSecureValue","url":"/method/account.getSecureValue/"}]
layout: layout.njk
---

# account.getSecureValue

Get saved [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/account.getSecureValue/" class="current_page_link">account.getSecureValue</a>#73665bc2 types:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueType/">SecureValueType</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValue/">SecureValue</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>types</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValueType/">SecureValueType</a>&gt;</td><td>Requested value types</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[SecureValue](/type/SecureValue/)\>

### Only users can use this method

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.

#### [Telegram Passport Encryption Details](https://core.telegram.org/passport/encryption)

How Telegram Passport data is stored and encrypted end-to-end.
