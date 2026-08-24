---
title: "decryptedMessageService"
original: "https://core.telegram.org/constructor/decryptedMessageService"
section: ref
description: "Contents of an encrypted service message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageService","url":"/constructor/decryptedMessageService/"}]
layout: layout.njk
---

# decryptedMessageService

Contents of an encrypted service message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessageService/" class="current_page_link">decryptedMessageService</a>#aa48327d random_id:<a href="/type/long/">long</a> random_bytes:<a href="/type/bytes/">bytes</a> action:<a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;

===17===
<a href="/constructor/decryptedMessageService/" class="current_page_link">decryptedMessageService</a>#73164160 random_id:<a href="/type/long/">long</a> action:<a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random message ID, assigned by the message author.<br>Must be equal to the ID passed to the sending method. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>random_bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Random bytes, removed in Layer 17.</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a></td><td>Action relevant to the service message</td></tr></tbody></table>

### Type

[DecryptedMessage](/type/DecryptedMessage/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
