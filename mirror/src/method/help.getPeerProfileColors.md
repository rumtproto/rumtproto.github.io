---
title: "help.getPeerProfileColors"
original: "https://core.telegram.org/method/help.getPeerProfileColors"
section: ref
description: "Get the set of accent color palettes » that can be used in profile page backgrounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getPeerProfileColors","url":"/method/help.getPeerProfileColors/"}]
layout: layout.njk
---

# help.getPeerProfileColors

Get the set of [accent color palettes »](/api/colors/) that can be used in profile page backgrounds.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.peerColorsNotModified/">help.peerColorsNotModified</a>#2ba1f5ce = <a href="/type/help.PeerColors/">help.PeerColors</a>;
<a href="/constructor/help.peerColors/">help.peerColors</a>#f8ed08 hash:<a href="/type/int/">int</a> colors:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/help.PeerColorOption/">help.PeerColorOption</a>&gt; = <a href="/type/help.PeerColors/">help.PeerColors</a>;
---functions---
<a href="/method/help.getPeerProfileColors/" class="current_page_link">help.getPeerProfileColors</a>#abcfa9fd hash:<a href="/type/int/">int</a> = <a href="/type/help.PeerColors/">help.PeerColors</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[help.PeerColors](/type/help.PeerColors/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
