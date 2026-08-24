---
title: "messages.peerDialogs"
original: "https://core.telegram.org/constructor/messages.peerDialogs"
section: ref
description: "Dialog info of multiple peers"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.peerDialogs","url":"/constructor/messages.peerDialogs/"}]
layout: layout.njk
---

# messages.peerDialogs

Dialog info of multiple peers

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.peerDialogs/" class="current_page_link">messages.peerDialogs</a>#3371c354 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; state:<a href="/type/updates.State/">updates.State</a> = <a href="/type/messages.PeerDialogs/">messages.PeerDialogs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dialogs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt;</td><td>Dialog info</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>Messages mentioned in dialog info</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users</td></tr><tr><td><strong>state</strong></td><td style="text-align: center;"><a href="/type/updates.State/">updates.State</a></td><td>Current <a href="/api/updates/">update state of dialog</a></td></tr></tbody></table>

### Type

[messages.PeerDialogs](/type/messages.PeerDialogs/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
