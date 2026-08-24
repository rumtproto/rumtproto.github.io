---
title: "decryptedMessageActionAcceptKey"
original: "https://core.telegram.org/constructor/decryptedMessageActionAcceptKey"
section: ref
description: "Perfect Forward Secrecy in secret chats."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageActionAcceptKey","url":"/constructor/decryptedMessageActionAcceptKey/"}]
layout: layout.njk
---

# decryptedMessageActionAcceptKey

Accept new key

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===20===
<a href="/constructor/decryptedMessageActionAcceptKey/" class="current_page_link">decryptedMessageActionAcceptKey</a>#6fe1735b exchange_id:<a href="/type/long/">long</a> g_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>exchange_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Exchange ID</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>B parameter, see <a href="/api/end-to-end/pfs/">rekeying process</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Key fingerprint, see <a href="/api/end-to-end/pfs/">rekeying process</a></td></tr></tbody></table>

### Type

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Related pages

#### [Perfect Forward Secrecy](/api/end-to-end/pfs/)

Perfect Forward Secrecy in secret chats.
