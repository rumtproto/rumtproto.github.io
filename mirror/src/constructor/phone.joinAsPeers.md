---
title: "phone.joinAsPeers"
original: "https://core.telegram.org/constructor/phone.joinAsPeers"
section: ref
description: "Contains the peers that may be used to join a video chat/livestream, see joining on behalf of owned channels »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.joinAsPeers","url":"/constructor/phone.joinAsPeers/"}]
layout: layout.njk
---

# phone.joinAsPeers

Contains the peers that may be used to join a video chat/livestream, see [joining on behalf of owned channels »](/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.joinAsPeers/" class="current_page_link">phone.joinAsPeers</a>#afe5623f peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.JoinAsPeers/">phone.JoinAsPeers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;</td><td>Peers</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in the peers vector</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the peers vector</td></tr></tbody></table>

### Type

[phone.JoinAsPeers](/type/phone.JoinAsPeers/)

### Related pages

#### [Group calls](/api/group-calls/)

How to start, join and manage group calls and video chats.
