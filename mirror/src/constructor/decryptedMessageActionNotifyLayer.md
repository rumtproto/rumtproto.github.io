---
title: "decryptedMessageActionNotifyLayer"
original: "https://core.telegram.org/constructor/decryptedMessageActionNotifyLayer"
section: ref
description: "A notification stating the API layer that is used by the client. You should use your current layer and take notice of the layer used on the other side of a conversation when…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageActionNotifyLayer","url":"/constructor/decryptedMessageActionNotifyLayer/"}]
layout: layout.njk
---

# decryptedMessageActionNotifyLayer

A notification stating the API layer that is used by the client. You should use your current layer and take notice of the layer used on the other side of a conversation when sending messages.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===17===
<a href="/constructor/decryptedMessageActionNotifyLayer/" class="current_page_link">decryptedMessageActionNotifyLayer</a>#f3048883 layer:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>layer</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Layer number, must be <strong>17</strong> or higher (this constructor was introduced in Layer 17.</td></tr></tbody></table>

### Type

[DecryptedMessageAction](/type/DecryptedMessageAction/)
