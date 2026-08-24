---
title: "channels.sendAsPeers"
original: "https://core.telegram.org/constructor/channels.sendAsPeers"
section: ref
description: "A list of peers that can be used to send messages in a specific group"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.sendAsPeers","url":"/constructor/channels.sendAsPeers/"}]
layout: layout.njk
---

# channels.sendAsPeers

A list of peers that can be used to send messages in a specific group

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.sendAsPeers/" class="current_page_link">channels.sendAsPeers</a>#f496b0c6 peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SendAsPeer/">SendAsPeer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.SendAsPeers/">channels.SendAsPeers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SendAsPeer/">SendAsPeer</a>&gt;</td><td>Peers that can be used to send messages to the group</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[channels.SendAsPeers](/type/channels.SendAsPeers/)
