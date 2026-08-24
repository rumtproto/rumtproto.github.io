---
title: "PeerColor"
original: "https://core.telegram.org/type/PeerColor"
section: ref
description: "Represents a color palette »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerColor","url":"/type/PeerColor/"}]
layout: layout.njk
---

# PeerColor

Represents a [color palette »](/api/colors/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerColor/">peerColor</a>#b54b5acf flags:<a href="/type/%23/">#</a> color:flags.0?<a href="/type/int/">int</a> background_emoji_id:flags.1?<a href="/type/long/">long</a> = <a href="/type/PeerColor/" class="current_page_link">PeerColor</a>;
<a href="/constructor/peerColorCollectible/">peerColorCollectible</a>#b9c0639a flags:<a href="/type/%23/">#</a> collectible_id:<a href="/type/long/">long</a> gift_emoji_id:<a href="/type/long/">long</a> background_emoji_id:<a href="/type/long/">long</a> accent_color:<a href="/type/int/">int</a> colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; dark_accent_color:flags.0?<a href="/type/int/">int</a> dark_colors:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/PeerColor/" class="current_page_link">PeerColor</a>;
<a href="/constructor/inputPeerColorCollectible/">inputPeerColorCollectible</a>#b8ea86a9 collectible_id:<a href="/type/long/">long</a> = <a href="/type/PeerColor/" class="current_page_link">PeerColor</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerColor/">peerColor</a></td><td>Represents a <a href="/api/colors/">color palette »</a>.</td></tr><tr><td><a href="/constructor/peerColorCollectible/">peerColorCollectible</a></td><td>Represents a <a href="/api/colors/">color palette »</a> associated to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>, see <a href="/api/colors/#collectible-gift-palettes">here »</a> for more info.</td></tr><tr><td><a href="/constructor/inputPeerColorCollectible/">inputPeerColorCollectible</a></td><td>Represents a <a href="/api/colors/">color palette »</a> associated to a <a href="/api/gifts/#collectible-gifts">collectible gift »</a>, see <a href="/api/colors/#collectible-gift-palettes">here »</a> for more info.</td></tr></tbody></table>

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
