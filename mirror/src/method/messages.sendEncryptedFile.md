---
title: "messages.sendEncryptedFile"
original: "https://core.telegram.org/method/messages.sendEncryptedFile"
section: ref
description: "Sends a message with a file attachment to a secret chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendEncryptedFile","url":"/method/messages.sendEncryptedFile/"}]
layout: layout.njk
---

# messages.sendEncryptedFile

Sends a message with a file attachment to a secret chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.sentEncryptedMessage/">messages.sentEncryptedMessage</a>#560f8935 date:<a href="/type/int/">int</a> = <a href="/type/messages.SentEncryptedMessage/">messages.SentEncryptedMessage</a>;
<a href="/constructor/messages.sentEncryptedFile/">messages.sentEncryptedFile</a>#9493ff32 date:<a href="/type/int/">int</a> file:<a href="/type/EncryptedFile/">EncryptedFile</a> = <a href="/type/messages.SentEncryptedMessage/">messages.SentEncryptedMessage</a>;
---functions---
<a href="/method/messages.sendEncryptedFile/" class="current_page_link">messages.sendEncryptedFile</a>#5559481d flags:<a href="/type/%23/">#</a> silent:flags.0?true peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> random_id:<a href="/type/long/">long</a> data:<a href="/type/bytes/">bytes</a> file:<a href="/type/InputEncryptedFile/">InputEncryptedFile</a> = <a href="/type/messages.SentEncryptedMessage/">messages.SentEncryptedMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to send the file without triggering a notification</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat/">InputEncryptedChat</a></td><td>Secret chat ID</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique client message ID necessary to prevent message resending. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>TL-serialization of <a href="/type/DecryptedMessage/">DecryptedMessage</a> type, encrypted with a key generated during chat initialization</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedFile/">InputEncryptedFile</a></td><td>File attachment for the secret chat</td></tr></tbody></table>

### Result

[messages.SentEncryptedMessage](/type/messages.SentEncryptedMessage/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>DATA_TOO_LONG</td><td>Data too long.</td></tr><tr><td>400</td><td>ENCRYPTION_DECLINED</td><td>The secret chat was declined.</td></tr><tr><td>400</td><td>FILE_EMTPY</td><td>An empty file was provided.</td></tr><tr><td>400</td><td>MD5_CHECKSUM_INVALID</td><td>The MD5 checksums do not match.</td></tr><tr><td>400</td><td>MSG_WAIT_FAILED</td><td>A waiting call returned an error.</td></tr></tbody></table>

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [DecryptedMessage](/type/DecryptedMessage/)

Object describes the contents of an encrypted message.
