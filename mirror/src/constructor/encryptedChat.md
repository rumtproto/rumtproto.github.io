---
title: "encryptedChat"
original: "https://core.telegram.org/constructor/encryptedChat"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"encryptedChat","url":"/constructor/encryptedChat/"}]
layout: layout.njk
---

# encryptedChat

Encrypted chat

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedChat/" class="current_page_link">encryptedChat</a>#61f0d4c7 id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a_or_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chat ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Check sum dependent on the user ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date chat was created</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Chat creator ID</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the second chat participant</td></tr><tr><td><strong>g_a_or_b</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><code>B = g ^ b mod p</code>, if the currently authorized user is the chat's creator,<br>or <code>A = g ^ a mod p</code> otherwise<br>See <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a> for more info</td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>64-bit fingerprint of received key</td></tr></tbody></table>

### Type

[EncryptedChat](/type/EncryptedChat/)
