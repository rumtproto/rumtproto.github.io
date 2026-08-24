---
title: "inputEncryptedChat"
original: "https://core.telegram.org/constructor/inputEncryptedChat"
section: ref
description: "Chat waiting for approval of second participant."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputEncryptedChat","url":"/constructor/inputEncryptedChat/"}]
layout: layout.njk
---

# inputEncryptedChat

An [e2e encrypted chat](/api/end-to-end/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputEncryptedChat/" class="current_page_link">inputEncryptedChat</a>#f141b5e1 chat_id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputEncryptedChat/">InputEncryptedChat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chat ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash from <a href="/constructor/encryptedChat/">encryptedChat</a>, <a href="/constructor/encryptedChatWaiting/">encryptedChatWaiting</a> or <a href="/constructor/encryptedChatRequested/">encryptedChatRequested</a></td></tr></tbody></table>

### Type

[InputEncryptedChat](/type/InputEncryptedChat/)

### Related pages

#### [encryptedChat](/constructor/encryptedChat/)

Encrypted chat

#### [encryptedChatWaiting](/constructor/encryptedChatWaiting/)

Chat waiting for approval of second participant.

#### [encryptedChatRequested](/constructor/encryptedChatRequested/)

Request to create an encrypted chat.

#### [End-to-End Encryption, Secret Chats](/api/end-to-end/)

New feature for end-to-end-encrypted messaging.
