---
title: "updateChatUserTyping"
original: "https://core.telegram.org/constructor/updateChatUserTyping"
section: ref
description: "The user is preparing a message in a group; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds,…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChatUserTyping","url":"/constructor/updateChatUserTyping/"}]
layout: layout.njk
---

# updateChatUserTyping

The user is preparing a message in a group; typing, recording, uploading, etc. This update is valid for 6 seconds. If no further updates of this kind are received after 6 seconds, it should be considered that the user stopped doing whatever they were doing

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChatUserTyping/" class="current_page_link">updateChatUserTyping</a>#83487af0 chat_id:<a href="/type/long/">long</a> from_id:<a href="/type/Peer/">Peer</a> action:<a href="/type/SendMessageAction/">SendMessageAction</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Group id</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer that started typing (can be the chat itself, in case of anonymous admins).</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction/">SendMessageAction</a></td><td>Type of action</td></tr></tbody></table>

### Type

[Update](/type/Update/)
