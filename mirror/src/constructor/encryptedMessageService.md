---
title: "encryptedMessageService"
original: "https://core.telegram.org/constructor/encryptedMessageService"
section: ref
description: "Encrypted service message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"encryptedMessageService","url":"/constructor/encryptedMessageService/"}]
layout: layout.njk
---

# encryptedMessageService

Encrypted service message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedMessageService/" class="current_page_link">encryptedMessageService</a>#23734b06 random_id:<a href="/type/long/">long</a> chat_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/EncryptedMessage/">EncryptedMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random message ID, assigned by the author of message. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of encrypted chat</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of sending</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>TL-serialization of the <a href="/type/DecryptedMessage/">DecryptedMessage</a> type, encrypted with the key created at chat initialization</td></tr></tbody></table>

### Type

[EncryptedMessage](/type/EncryptedMessage/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
