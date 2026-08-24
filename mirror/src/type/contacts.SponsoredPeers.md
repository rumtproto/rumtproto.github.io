---
title: "contacts.SponsoredPeers"
original: "https://core.telegram.org/type/contacts.SponsoredPeers"
section: ref
description: "A list of sponsored peers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.SponsoredPeers","url":"/type/contacts.SponsoredPeers/"}]
layout: layout.njk
---

# contacts.SponsoredPeers

A list of sponsored peers.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.sponsoredPeersEmpty/">contacts.sponsoredPeersEmpty</a>#ea32b4b1 = <a href="/type/contacts.SponsoredPeers/" class="current_page_link">contacts.SponsoredPeers</a>;
<a href="/constructor/contacts.sponsoredPeers/">contacts.sponsoredPeers</a>#eb032884 peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SponsoredPeer/">SponsoredPeer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.SponsoredPeers/" class="current_page_link">contacts.SponsoredPeers</a>;

---functions---

<a href="/method/contacts.getSponsoredPeers/">contacts.getSponsoredPeers</a>#b6c8c393 q:<a href="/type/string/">string</a> = <a href="/type/contacts.SponsoredPeers/" class="current_page_link">contacts.SponsoredPeers</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/contacts.sponsoredPeersEmpty/">contacts.sponsoredPeersEmpty</a></td><td>There are no sponsored peers for this query.</td></tr><tr><td><a href="/constructor/contacts.sponsoredPeers/">contacts.sponsoredPeers</a></td><td>Sponsored peers.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/contacts.getSponsoredPeers/">contacts.getSponsoredPeers</a></td><td>Obtain a list of sponsored peer search results for a given query</td></tr></tbody></table>
