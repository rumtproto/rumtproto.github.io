---
title: "stories.PeerStories"
original: "https://core.telegram.org/type/stories.PeerStories"
section: ref
description: "Active story list of a specific peer."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"stories.PeerStories","url":"/type/stories.PeerStories/"}]
layout: layout.njk
---

# stories.PeerStories

[Active story list](/api/stories/#watching-stories) of a specific peer.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/stories.peerStories/">stories.peerStories</a>#cae68768 stories:<a href="/type/PeerStories/">PeerStories</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/stories.PeerStories/" class="current_page_link">stories.PeerStories</a>;

---functions---

<a href="/method/stories.getPeerStories/">stories.getPeerStories</a>#2c4ada50 peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/stories.PeerStories/" class="current_page_link">stories.PeerStories</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stories.peerStories/">stories.peerStories</a></td><td><a href="/api/stories/#watching-stories">Active story list</a> of a specific peer.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stories.getPeerStories/">stories.getPeerStories</a></td><td>Fetch the full active <a href="/api/stories/#watching-stories">story list</a> of a specific peer.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
