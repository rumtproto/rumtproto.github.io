---
title: "messages.sendEncryptedService"
original: "https://core.telegram.org/method/messages.sendEncryptedService"
section: ref
description: "Sends a service message to a secret chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendEncryptedService","url":"/method/messages.sendEncryptedService/"}]
layout: layout.njk
---

# messages.sendEncryptedService

Sends a service message to a secret chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.sentEncryptedMessage/">messages.sentEncryptedMessage</a>#560f8935 date:<a href="/type/int/">int</a> = <a href="/type/messages.SentEncryptedMessage/">messages.SentEncryptedMessage</a>;
<a href="/constructor/messages.sentEncryptedFile/">messages.sentEncryptedFile</a>#9493ff32 date:<a href="/type/int/">int</a> file:<a href="/type/EncryptedFile/">EncryptedFile</a> = <a href="/type/messages.SentEncryptedMessage/">messages.SentEncryptedMessage</a>;
---functions---
<a href="/method/messages.sendEncryptedService/" class="current_page_link">messages.sendEncryptedService</a>#32d439a4 peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> random_id:<a href="/type/long/">long</a> data:<a href="/type/bytes/">bytes</a> = <a href="/type/messages.SentEncryptedMessage/">messages.SentEncryptedMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat/">InputEncryptedChat</a></td><td>Secret chat ID</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique client message ID required to prevent message resending. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>TL-serialization of <a href="/type/DecryptedMessage/">DecryptedMessage</a> type, encrypted with a key generated during chat initialization</td></tr></tbody></table>

### Result

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>DATA_INVALID</td><td>Encrypted data invalid.</td></tr><tr><td>400</td><td>DATA_TOO_LONG</td><td>Data too long.</td></tr><tr><td>400</td><td>ENCRYPTION_DECLINED</td><td>The secret chat was declined.</td></tr><tr><td>400</td><td>ENCRYPTION_ID_INVALID</td><td>The provided secret chat ID is invalid.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>A waiting call returned an error.</td></tr><tr><td>403</td><td>USER_DELETED</td><td>You can't send this secret message because the other participant deleted their account.</td></tr><tr><td>403</td><td>USER_IS_BLOCKED</td><td>You were blocked by this user.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
