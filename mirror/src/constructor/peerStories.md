---
title: "peerStories"
original: "https://core.telegram.org/constructor/peerStories"
section: ref
description: "Stories associated to a peer"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"peerStories","url":"/constructor/peerStories/"}]
layout: layout.njk
---

# peerStories

[Stories](/api/stories/) associated to a peer

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerStories/" class="current_page_link">peerStories</a>#9a35e999 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> max_read_id:flags.0?<a href="/type/int/">int</a> stories:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryItem/">StoryItem</a>&gt; = <a href="/type/PeerStories/">PeerStories</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer</td></tr><tr><td><strong>max_read_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If set, contains the ID of the maximum read story</td></tr><tr><td><strong>stories</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/StoryItem/">StoryItem</a>&gt;</td><td>Stories</td></tr></tbody></table>

### Type

[PeerStories](/type/PeerStories/)

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
