---
title: "messages.getAvailableReactions"
original: "https://core.telegram.org/method/messages.getAvailableReactions"
section: ref
description: "Obtain available message reactions »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAvailableReactions","url":"/method/messages.getAvailableReactions/"}]
layout: layout.njk
---

# messages.getAvailableReactions

Obtain available [message reactions »](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.availableReactionsNotModified/">messages.availableReactionsNotModified</a>#9f071957 = <a href="/type/messages.AvailableReactions/">messages.AvailableReactions</a>;
<a href="/constructor/messages.availableReactions/">messages.availableReactions</a>#768e3aad hash:<a href="/type/int/">int</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/AvailableReaction/">AvailableReaction</a>&gt; = <a href="/type/messages.AvailableReactions/">messages.AvailableReactions</a>;
---functions---
<a href="/method/messages.getAvailableReactions/" class="current_page_link">messages.getAvailableReactions</a>#18dea0ac hash:<a href="/type/int/">int</a> = <a href="/type/messages.AvailableReactions/">messages.AvailableReactions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.AvailableReactions](/type/messages.AvailableReactions/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
