---
title: "encryptedChatRequested"
original: "https://core.telegram.org/constructor/encryptedChatRequested"
section: ref
description: "Request to create an encrypted chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"encryptedChatRequested","url":"/constructor/encryptedChatRequested/"}]
layout: layout.njk
---

# encryptedChatRequested

Request to create an encrypted chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedChatRequested/" class="current_page_link">encryptedChatRequested</a>#48f1d94c flags:<a href="/type/%23/">#</a> folder_id:flags.0?<a href="/type/int/">int</a> id:<a href="/type/int/">int</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_id:<a href="/type/long/">long</a> participant_id:<a href="/type/long/">long</a> g_a:<a href="/type/bytes/">bytes</a> = <a href="/type/EncryptedChat/">EncryptedChat</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chat ID</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Check sum depending on user ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chat creation date</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Chat creator ID</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of second chat participant</td></tr><tr><td><strong>g_a</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td><code>A = g ^ a mod p</code>, see <a href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Wikipedia</a></td></tr></tbody></table>

### Type

[EncryptedChat](/type/EncryptedChat/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
