---
title: "secureValue"
original: "https://core.telegram.org/constructor/secureValue"
section: ref
description: "Telegram Passport, a unified authorization method for services that require personal identification."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"secureValue","url":"/constructor/secureValue/"}]
layout: layout.njk
---

# secureValue

Secure value

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/secureValue/" class="current_page_link">secureValue</a>#187fa0ca flags:<a href="/type/%23/">#</a> type:<a href="/type/SecureValueType/">SecureValueType</a> data:flags.0?<a href="/type/SecureData/">SecureData</a> front_side:flags.1?<a href="/type/SecureFile/">SecureFile</a> reverse_side:flags.2?<a href="/type/SecureFile/">SecureFile</a> selfie:flags.3?<a href="/type/SecureFile/">SecureFile</a> translation:flags.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt; files:flags.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt; plain_data:flags.5?<a href="/type/SecurePlainData/">SecurePlainData</a> hash:<a href="/type/bytes/">bytes</a> = <a href="/type/SecureValue/">SecureValue</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/SecureValueType/">SecureValueType</a></td><td>Secure <a href="/passport/">passport</a> value type</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/SecureData/">SecureData</a></td><td>Encrypted <a href="/passport/">Telegram Passport</a> element data</td></tr><tr><td><strong>front_side</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/SecureFile/">SecureFile</a></td><td>Encrypted <a href="/passport/">passport</a> file with the front side of the document</td></tr><tr><td><strong>reverse_side</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/SecureFile/">SecureFile</a></td><td>Encrypted <a href="/passport/">passport</a> file with the reverse side of the document</td></tr><tr><td><strong>selfie</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/SecureFile/">SecureFile</a></td><td>Encrypted <a href="/passport/">passport</a> file with a selfie of the user holding the document</td></tr><tr><td><strong>translation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt;</td><td>Array of encrypted <a href="/passport/">passport</a> files with translated versions of the provided documents</td></tr><tr><td><strong>files</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SecureFile/">SecureFile</a>&gt;</td><td>Array of encrypted <a href="/passport/">passport</a> files with photos the of the documents</td></tr><tr><td><strong>plain_data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/SecurePlainData/">SecurePlainData</a></td><td>Plaintext verified <a href="/passport/">passport</a> data</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Data hash</td></tr></tbody></table>

### Type

[SecureValue](/type/SecureValue/)

### Related pages

#### [Telegram Passport Manual](/passport/)

Telegram Passport, a unified authorization method for services that require personal identification.
