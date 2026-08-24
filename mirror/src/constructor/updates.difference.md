---
title: "updates.difference"
original: "https://core.telegram.org/constructor/updates.difference"
section: ref
description: "Full list of occurred events."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.difference","url":"/constructor/updates.difference/"}]
layout: layout.njk
---

# updates.difference

Full list of occurred events.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.difference/" class="current_page_link">updates.difference</a>#f49ca0 new_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; new_encrypted_messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EncryptedMessage/">EncryptedMessage</a>&gt; other_updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/updates.Difference/">updates.Difference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>new_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>List of new messages</td></tr><tr><td><strong>new_encrypted_messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/EncryptedMessage/">EncryptedMessage</a>&gt;</td><td>List of new encrypted secret chat messages</td></tr><tr><td><strong>other_updates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt;</td><td>List of updates</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>List of chats mentioned in events</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>List of users mentioned in events</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/updates.State/">updates.State</a></td><td>Current state</td></tr></tbody></table>

### Type

[updates.Difference](/type/updates.Difference/)
