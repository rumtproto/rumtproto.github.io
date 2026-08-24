---
title: "EncryptedChat"
original: "https://core.telegram.org/type/EncryptedChat"
section: ref
description: "Object contains info on an encrypted chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EncryptedChat","url":"/type/EncryptedChat/"}]
layout: layout.njk
---

# EncryptedChat

Object contains info on an encrypted chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedChatEmpty/">encryptedChatEmpty</a>#ab7ec0a0 id:<a href="/type/int/">int</a> = <a href="/type/EncryptedChat/" class="current_page_link">EncryptedChat</a>;
<a href="/constructor/encryptedChatWaiting/">encryptedChatWaiting</a>#66b25953 id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> = <a href="/type/EncryptedChat/" class="current_page_link">EncryptedChat</a>;
<a href="/constructor/encryptedChatRequested/">encryptedChatRequested</a>#48f1d94c flags:<a href="/type/%23/">#</a> folder_id:flags.0?<a href="/type/int/">int</a> id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a:<a href="/type/bytes/">bytes</a> = <a href="/type/EncryptedChat/" class="current_page_link">EncryptedChat</a>;
<a href="/constructor/encryptedChat/">encryptedChat</a>#61f0d4c7 id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a_or_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/EncryptedChat/" class="current_page_link">EncryptedChat</a>;
<a href="/constructor/encryptedChatDiscarded/">encryptedChatDiscarded</a>#1e1c7c45 flags:<a href="/type/%23/">#</a> history_deleted:flags.0?true id:<a href="/type/int/">int</a> = <a href="/type/EncryptedChat/" class="current_page_link">EncryptedChat</a>;

---functions---

<a href="/method/messages.requestEncryption/">messages.requestEncryption</a>#f64daf43 user_id:<a href="/type/InputUser/">InputUser</a> random_id:<a href="/type/int/">int</a> g_a:<a href="/type/bytes/">bytes</a> = <a href="/type/EncryptedChat/" class="current_page_link">EncryptedChat</a>;
<a href="/method/messages.acceptEncryption/">messages.acceptEncryption</a>#3dbc0415 peer:<a href="/type/InputEncryptedChat/">InputEncryptedChat</a> g_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/EncryptedChat/" class="current_page_link">EncryptedChat</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedChatEmpty/">encryptedChatEmpty</a></td><td>Empty constructor.</td></tr><tr><td><a href="/constructor/encryptedChatWaiting/">encryptedChatWaiting</a></td><td>Chat waiting for approval of second participant.</td></tr><tr><td><a href="/constructor/encryptedChatRequested/">encryptedChatRequested</a></td><td>Request to create an encrypted chat.</td></tr><tr><td><a href="/constructor/encryptedChat/">encryptedChat</a></td><td>Encrypted chat</td></tr><tr><td><a href="/constructor/encryptedChatDiscarded/">encryptedChatDiscarded</a></td><td>Discarded or deleted chat.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.requestEncryption/">messages.requestEncryption</a></td><td>Sends a request to start a secret chat to the user.</td></tr><tr><td><a href="/method/messages.acceptEncryption/">messages.acceptEncryption</a></td><td>Confirms creation of a secret chat</td></tr></tbody></table>
