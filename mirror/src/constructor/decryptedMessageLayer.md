---
title: "decryptedMessageLayer"
original: "https://core.telegram.org/constructor/decryptedMessageLayer"
section: ref
description: "Sets the layer number for the contents of an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageLayer","url":"/constructor/decryptedMessageLayer/"}]
layout: layout.njk
---

# decryptedMessageLayer

Sets the layer number for the contents of an encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===17===
<a href="/constructor/decryptedMessageLayer/" class="current_page_link">decryptedMessageLayer</a>#1be31789 random_bytes:<a href="/type/bytes/">bytes</a> layer:<a href="/type/int/">int</a> in_seq_no:<a href="/type/int/">int</a> out_seq_no:<a href="/type/int/">int</a> message:<a href="/type/DecryptedMessage/">DecryptedMessage</a> = <a href="/type/DecryptedMessageLayer/">DecryptedMessageLayer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Set of random bytes to prevent content recognition in short encrypted messages.<br>Clients are required to check that there are at least 15 random bytes included in each message. Messages with less than 15 random bytes must be ignored.<br>Parameter moved here from <a href="/constructor/decryptedMessage/">decryptedMessage</a> in Layer 17.</td></tr><tr><td><strong>layer</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Layer number. Mimimal value - <strong>17</strong> (the layer in which the constructor was added).</td></tr><tr><td><strong>in_seq_no</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>2x the number of messages in the sender's inbox (including deleted and service messages), incremented by 1 if current user was not the chat creator<br>Parameter added in Layer 17.</td></tr><tr><td><strong>out_seq_no</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>2x the number of messages in the recipient's inbox (including deleted and service messages), incremented by 1 if current user was the chat creator<br>Parameter added in Layer 17.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/DecryptedMessage/">DecryptedMessage</a></td><td>The content of message itself</td></tr></tbody></table>

### Type

[DecryptedMessageLayer](/type/DecryptedMessageLayer/)

### Related pages

#### [decryptedMessage](/constructor/decryptedMessage/)

Contents of an encrypted message.
