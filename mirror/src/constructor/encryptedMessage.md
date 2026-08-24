---
title: "encryptedMessage"
original: "https://core.telegram.org/constructor/encryptedMessage"
section: ref
description: "How to subscribe to updates and handle them properly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"encryptedMessage","url":"/constructor/encryptedMessage/"}]
layout: layout.njk
---

# encryptedMessage

Encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedMessage/" class="current_page_link">encryptedMessage</a>#ed18c118 random_id:<a href="/type/long/">long</a> chat_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> file:<a href="/type/EncryptedFile/">EncryptedFile</a> = <a href="/type/EncryptedMessage/">EncryptedMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random message ID, assigned by the author of message. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of encrypted chat</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of sending</td></tr><tr><td><strong>bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>TL-serialization of <a href="/type/DecryptedMessage/">DecryptedMessage</a> type, encrypted with the key created at chat initialization</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/EncryptedFile/">EncryptedFile</a></td><td>Attached encrypted file</td></tr></tbody></table>

### Type

[EncryptedMessage](/type/EncryptedMessage/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
