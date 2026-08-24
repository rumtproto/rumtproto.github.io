---
title: "topPeer"
original: "https://core.telegram.org/constructor/topPeer"
section: ref
description: "If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots,…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"topPeer","url":"/constructor/topPeer/"}]
layout: layout.njk
---

# topPeer

Top peer

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/topPeer/" class="current_page_link">topPeer</a>#edcdc05b peer:<a href="/type/Peer/">Peer</a> rating:<a href="/type/double/">double</a> = <a href="/type/TopPeer/">TopPeer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer</td></tr><tr><td><strong>rating</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Rating as computed in <a href="/api/top-rating/">top peer rating »</a></td></tr></tbody></table>

### Type

[TopPeer](/type/TopPeer/)

### Related pages

#### [Top peer rating](/api/top-rating/)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).
