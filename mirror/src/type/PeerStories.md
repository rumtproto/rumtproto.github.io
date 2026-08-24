---
title: "PeerStories"
original: "https://core.telegram.org/type/PeerStories"
section: ref
description: "Stories associated to a peer"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerStories","url":"/type/PeerStories/"}]
layout: layout.njk
---

# PeerStories

[Stories](/api/stories/) associated to a peer

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerStories/">peerStories</a>#9a35e999 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> max_read_id:flags.0?<a href="/type/int/">int</a> stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryItem/">StoryItem</a>&gt; = <a href="/type/PeerStories/" class="current_page_link">PeerStories</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerStories/">peerStories</a></td><td><a href="/api/stories/">Stories</a> associated to a peer</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
