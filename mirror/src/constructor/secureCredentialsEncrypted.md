---
title: "secureCredentialsEncrypted"
original: "https://core.telegram.org/constructor/secureCredentialsEncrypted"
section: ref
description: "Encrypted credentials required to decrypt telegram passport data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureCredentialsEncrypted","url":"/constructor/secureCredentialsEncrypted/"}]
layout: layout.njk
---

# secureCredentialsEncrypted

Encrypted credentials required to decrypt [telegram passport](https://core.telegram.org/passport) data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureCredentialsEncrypted/" class="current_page_link">secureCredentialsEncrypted</a>#33f0ea47 data:<a href="/type/bytes/">bytes</a> hash:<a href="/type/bytes/">bytes</a> secret:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureCredentialsEncrypted/">SecureCredentialsEncrypted</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication, as described in <a href="https://core.telegram.org/passport#decrypting-data">decrypting data »</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Data hash for data authentication as described in <a href="https://core.telegram.org/passport#decrypting-data">decrypting data »</a></td></tr><tr><td><strong>secret</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Secret, encrypted with the bot's public RSA key, required for data decryption as described in <a href="https://core.telegram.org/passport#decrypting-data">decrypting data »</a></td></tr></tbody></table>

### Type

[SecureCredentialsEncrypted](/type/SecureCredentialsEncrypted/)

### Related pages

#### [Telegram Passport Manual](https://core.telegram.org/passport)

Telegram Passport, a unified authorization method for services that require personal identification.
