---
title: "stories.getPeerStories"
original: "https://core.telegram.org/method/stories.getPeerStories"
section: ref
description: "Fetch the full active story list of a specific peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getPeerStories","url":"/method/stories.getPeerStories/"}]
layout: layout.njk
---

# stories.getPeerStories

Fetch the full active [story list](/api/stories/#watching-stories) of a specific peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.peerStories/">stories.peerStories</a>#cae68768 stories:<a href="/type/PeerStories/">PeerStories</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.PeerStories/">stories.PeerStories</a>;
---functions---
<a href="/method/stories.getPeerStories/" class="current_page_link">stories.getPeerStories</a>#2c4ada50 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/stories.PeerStories/">stories.PeerStories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer whose stories should be fetched</td></tr></tbody></table>

### Result

[stories.PeerStories](/type/stories.PeerStories/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
