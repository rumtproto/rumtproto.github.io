---
title: "messages.getRecentReactions"
original: "https://core.telegram.org/method/messages.getRecentReactions"
section: ref
description: "Get recently used message reactions"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getRecentReactions","url":"/method/messages.getRecentReactions/"}]
layout: layout.njk
---

# messages.getRecentReactions

Get recently used [message reactions](/api/reactions/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.reactionsNotModified/">messages.reactionsNotModified</a>#b06fdbdf = <a href="/type/messages.Reactions/">messages.Reactions</a>;
<a href="/constructor/messages.reactions/">messages.reactions</a>#eafdf716 hash:<a href="/type/long/">long</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt; = <a href="/type/messages.Reactions/">messages.Reactions</a>;
---functions---
<a href="/method/messages.getRecentReactions/" class="current_page_link">messages.getRecentReactions</a>#39461db2 limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.Reactions/">messages.Reactions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.Reactions](/type/messages.Reactions/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
