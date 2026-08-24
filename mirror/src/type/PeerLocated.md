---
title: "PeerLocated"
original: "https://core.telegram.org/type/PeerLocated"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerLocated","url":"/type/PeerLocated/"}]
layout: layout.njk
---

# PeerLocated

Geolocated peer

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerLocated/">peerLocated</a>#ca461b5d peer:<a href="/type/Peer/">Peer</a> expires:<a href="/type/int/">int</a> distance:<a href="/type/int/">int</a> = <a href="/type/PeerLocated/" class="current_page_link">PeerLocated</a>;
<a href="/constructor/peerSelfLocated/">peerSelfLocated</a>#f8ec284b expires:<a href="/type/int/">int</a> = <a href="/type/PeerLocated/" class="current_page_link">PeerLocated</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerLocated/">peerLocated</a></td><td>Peer geolocated nearby</td></tr><tr><td><a href="/constructor/peerSelfLocated/">peerSelfLocated</a></td><td>Current peer</td></tr></tbody></table>
