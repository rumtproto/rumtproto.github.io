---
title: "stories.peerStories"
original: "https://core.telegram.org/constructor/stories.peerStories"
section: ref
description: "Active story list of a specific peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.peerStories","url":"/constructor/stories.peerStories/"}]
layout: layout.njk
---

# stories.peerStories

[Active story list](/api/stories/#watching-stories) of a specific peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.peerStories/" class="current_page_link">stories.peerStories</a>#cae68768 stories:<a href="/type/PeerStories/">PeerStories</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.PeerStories/">stories.PeerStories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/type/PeerStories/">PeerStories</a></td><td>Stories</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[stories.PeerStories](/type/stories.PeerStories/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
