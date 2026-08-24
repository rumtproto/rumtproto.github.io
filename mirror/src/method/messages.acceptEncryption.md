---
title: "messages.acceptEncryption"
original: "https://core.telegram.org/method/messages.acceptEncryption"
section: ref
description: "Confirms creation of a secret chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.acceptEncryption","url":"/method/messages.acceptEncryption/"}]
layout: layout.njk
---

# messages.acceptEncryption

Confirms creation of a secret chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedChatEmpty/">encryptedChatEmpty</a>#ab7ec0a0 id:<a href="/type/int/">int</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;
<a href="/constructor/encryptedChatWaiting/">encryptedChatWaiting</a>#66b25953 id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;
<a href="/constructor/encryptedChatRequested/">encryptedChatRequested</a>#48f1d94c flags:<a href="/type/%23/">#</a> folder_id:flags.0?<a href="/type/int/">int</a> id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a:<a href="/type/bytes/">bytes</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;
<a href="/constructor/encryptedChat/">encryptedChat</a>#61f0d4c7 id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a_or_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;
<a href="/constructor/encryptedChatDiscarded/">encryptedChatDiscarded</a>#1e1c7c45 flags:<a href="/type/%23/">#</a> history_deleted:flags.0?true id:<a href="/type/int/">int</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;
---functions---
<a href="/method/messages.acceptEncryption/" class="current_page_link">messages.acceptEncryption</a>#3dbc0415 peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> g_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat/">InputEncryptedChat</a></td><td>Secret chat ID</td></tr><tr><td><strong>g_b</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><code>B = g ^ b mod p</code>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>64-bit fingerprint of the received key</td></tr></tbody></table>

### Result

[EncryptedChat](/type/EncryptedChat/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_ACCEPTED</td><td>Secret chat already accepted.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_DECLINED</td><td>The secret chat was already declined.</td></tr></tbody></table>
