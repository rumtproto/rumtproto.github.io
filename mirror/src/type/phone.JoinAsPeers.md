---
title: "phone.JoinAsPeers"
original: "https://core.telegram.org/type/phone.JoinAsPeers"
section: ref
description: "A list of peers that can be used to join a group call, presenting yourself as a specific user/channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.JoinAsPeers","url":"/type/phone.JoinAsPeers/"}]
layout: layout.njk
---

# phone.JoinAsPeers

A list of peers that can be used to join a group call, presenting yourself as a specific user/channel.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/phone.joinAsPeers/">phone.joinAsPeers</a>#afe5623f peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/phone.JoinAsPeers/" class="current_page_link">phone.JoinAsPeers</a>;

---functions---

<a href="/method/phone.getGroupCallJoinAs/">phone.getGroupCallJoinAs</a>#ef7c213a peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/phone.JoinAsPeers/" class="current_page_link">phone.JoinAsPeers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.joinAsPeers/">phone.joinAsPeers</a></td><td>Contains the peers that may be used to join a video chat/livestream, see <a href="/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels">joining on behalf of owned channels »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallJoinAs/">phone.getGroupCallJoinAs</a></td><td>Get a list of peers that can be used to join a <a href="/api/group-calls/#joining-a-group-call-on-behalf-of-owned-channels">video chat or livestream »</a>, presenting yourself as a specific user/channel.<br><br>This method cannot be used for live stories or conference calls. To comment or react in a live story as another peer, use <a href="/method/channels.getSendAs/">channels.getSendAs</a> with <code>for_live_stories</code> set and pass one of the returned peers to <a href="/method/phone.sendGroupCallMessage/">phone.sendGroupCallMessage</a>.<code>send_as</code>.</td></tr></tbody></table>
