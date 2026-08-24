---
title: "channels.SendAsPeers"
original: "https://core.telegram.org/type/channels.SendAsPeers"
section: ref
description: "A list of peers that can be used to send messages in a specific group"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channels.SendAsPeers","url":"/type/channels.SendAsPeers/"}]
layout: layout.njk
---

# channels.SendAsPeers

A list of peers that can be used to send messages in a specific group

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.sendAsPeers/">channels.sendAsPeers</a>#f496b0c6 peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SendAsPeer/">SendAsPeer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.SendAsPeers/" class="current_page_link">channels.SendAsPeers</a>;

---functions---

<a href="/method/channels.getSendAs/">channels.getSendAs</a>#e785a43f flags:<a href="/type/%23/">#</a> for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/channels.SendAsPeers/" class="current_page_link">channels.SendAsPeers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.sendAsPeers/">channels.sendAsPeers</a></td><td>A list of peers that can be used to send messages in a specific group</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.getSendAs/">channels.getSendAs</a></td><td>Obtains a list of peers that can be displayed as the sender in a specific context. With <code>for_live_stories</code>, returns peers that may author <a href="/api/group-calls/#in-call-messages">live story in-call messages »</a>.</td></tr></tbody></table>
