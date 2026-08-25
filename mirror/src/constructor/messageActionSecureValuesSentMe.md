---
title: "messageActionSecureValuesSentMe"
original: "https://core.telegram.org/constructor/messageActionSecureValuesSentMe"
section: ref
description: "Secure telegram passport values were received"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageActionSecureValuesSentMe","url":"/constructor/messageActionSecureValuesSentMe/"}]
layout: layout.njk
---

# messageActionSecureValuesSentMe

Secure [telegram passport](/passport/) values were received

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageActionSecureValuesSentMe/" class="current_page_link">messageActionSecureValuesSentMe</a>#1b287353 values:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValue/">SecureValue</a>&gt; credentials:<a href="/type/SecureCredentialsEncrypted/">SecureCredentialsEncrypted</a> = <a href="/type/MessageAction/">MessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>values</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureValue/">SecureValue</a>&gt;</td><td>Vector with information about documents and other Telegram Passport elements that were shared with the bot</td></tr><tr><td><strong>credentials</strong></td><td style="text-align: center;"><a href="/type/SecureCredentialsEncrypted/">SecureCredentialsEncrypted</a></td><td>Encrypted credentials required to decrypt the data</td></tr></tbody></table>

### Type

[MessageAction](/type/MessageAction/)

### Related pages

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.
