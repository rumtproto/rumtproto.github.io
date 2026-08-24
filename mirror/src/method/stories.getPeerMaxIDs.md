---
title: "stories.getPeerMaxIDs"
original: "https://core.telegram.org/method/stories.getPeerMaxIDs"
section: ref
description: "Get compact active story summaries » for a set of peers."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.getPeerMaxIDs","url":"/method/stories.getPeerMaxIDs/"}]
layout: layout.njk
---

# stories.getPeerMaxIDs

Get compact [active story summaries »](/api/stories/#recent-story-summaries) for a set of peers.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/stories.getPeerMaxIDs/" class="current_page_link">stories.getPeerMaxIDs</a>#78499170 id:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt; = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RecentStory/">RecentStory</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputPeer/">InputPeer</a>&gt;</td><td>Peers whose <a href="/api/stories/#recent-story-summaries">active story summaries »</a> should be fetched.</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[RecentStory](/type/RecentStory/)\>

### Only users can use this method

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
