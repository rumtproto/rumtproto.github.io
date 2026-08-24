---
title: "help.peerColors"
original: "https://core.telegram.org/constructor/help.peerColors"
section: ref
description: "Contains info about multiple color palettes »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.peerColors","url":"/constructor/help.peerColors/"}]
layout: layout.njk
---

# help.peerColors

Contains info about multiple [color palettes »](/api/colors/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.peerColors/" class="current_page_link">help.peerColors</a>#f8ed08 hash:<a href="/type/int/">int</a> colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/help.PeerColorOption/">help.PeerColorOption</a>&gt; = <a href="/type/help.PeerColors/">help.PeerColors</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/help.PeerColorOption/">help.PeerColorOption</a>&gt;</td><td>Usable <a href="/api/colors/">color palettes</a>.</td></tr></tbody></table>

### Type

[help.PeerColors](/type/help.PeerColors/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
