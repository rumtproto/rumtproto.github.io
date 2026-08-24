---
title: "decryptedMessageActionRequestKey"
original: "https://core.telegram.org/constructor/decryptedMessageActionRequestKey"
section: ref
description: "Request rekeying, see rekeying process"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageActionRequestKey","url":"/constructor/decryptedMessageActionRequestKey/"}]
layout: layout.njk
---

# decryptedMessageActionRequestKey

Request rekeying, see [rekeying process](/api/end-to-end/pfs/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===20===
<a href="/constructor/decryptedMessageActionRequestKey/" class="current_page_link">decryptedMessageActionRequestKey</a>#f3c9611b exchange_id:<a href="/type/long/">long</a> g_a:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>exchange_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Exchange ID</td></tr><tr><td><strong>g_a</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>g_a, see <a href="/api/end-to-end/pfs/">rekeying process</a></td></tr></tbody></table>

### Type

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Related pages

#### [Perfect Forward Secrecy](/api/end-to-end/pfs/)

Perfect Forward Secrecy in secret chats.
