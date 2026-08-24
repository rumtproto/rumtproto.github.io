---
title: "contacts.getSponsoredPeers"
original: "https://core.telegram.org/method/contacts.getSponsoredPeers"
section: ref
description: "Obtain a list of sponsored peer search results for a given query"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.getSponsoredPeers","url":"/method/contacts.getSponsoredPeers/"}]
layout: layout.njk
---

# contacts.getSponsoredPeers

Obtain a list of sponsored peer search results for a given query

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.sponsoredPeersEmpty/">contacts.sponsoredPeersEmpty</a>#ea32b4b1 = <a href="/type/contacts.SponsoredPeers/">contacts.SponsoredPeers</a>;
<a href="/constructor/contacts.sponsoredPeers/">contacts.sponsoredPeers</a>#eb032884 peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredPeer/">SponsoredPeer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.SponsoredPeers/">contacts.SponsoredPeers</a>;
---functions---
<a href="/method/contacts.getSponsoredPeers/" class="current_page_link">contacts.getSponsoredPeers</a>#b6c8c393 q:<a href="/type/string/">string</a> = <a href="/type/contacts.SponsoredPeers/">contacts.SponsoredPeers</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The query</td></tr></tbody></table>

### Result

[contacts.SponsoredPeers](/type/contacts.SponsoredPeers/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>The search query is empty.</td></tr></tbody></table>
