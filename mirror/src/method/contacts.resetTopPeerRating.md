---
title: "contacts.resetTopPeerRating"
original: "https://core.telegram.org/method/contacts.resetTopPeerRating"
section: ref
description: "If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots,…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.resetTopPeerRating","url":"/method/contacts.resetTopPeerRating/"}]
layout: layout.njk
---

# contacts.resetTopPeerRating

Reset [rating](/api/top-rating/) of top peer

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/contacts.resetTopPeerRating/" class="current_page_link">contacts.resetTopPeerRating</a>#1ae373ac category:<a href="/type/TopPeerCategory/">TopPeerCategory</a> peer:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>category</strong></td><td style="text-align: center;"><a href="/type/TopPeerCategory/">TopPeerCategory</a></td><td>Top peer category</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Peer whose rating should be reset</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Top peer rating](/api/top-rating/)

If enabled, the rating of top peers indicates the relevance of a frequently used peer in a certain category (frequently messaged users, frequently used bots, inline bots, frequently visited channels and so on).
