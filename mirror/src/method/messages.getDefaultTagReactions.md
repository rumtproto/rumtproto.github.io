---
title: "messages.getDefaultTagReactions"
original: "https://core.telegram.org/method/messages.getDefaultTagReactions"
section: ref
description: "Fetch a default recommended list of saved message tag reactions."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDefaultTagReactions","url":"/method/messages.getDefaultTagReactions/"}]
layout: layout.njk
---

# messages.getDefaultTagReactions

Fetch a default recommended list of [saved message tag reactions](/api/saved-messages/#tags).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.reactionsNotModified/">messages.reactionsNotModified</a>#b06fdbdf = <a href="/type/messages.Reactions/">messages.Reactions</a>;
<a href="/constructor/messages.reactions/">messages.reactions</a>#eafdf716 hash:<a href="/type/long/">long</a> reactions:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Reaction/">Reaction</a>&gt; = <a href="/type/messages.Reactions/">messages.Reactions</a>;
---functions---
<a href="/method/messages.getDefaultTagReactions/" class="current_page_link">messages.getDefaultTagReactions</a>#bdf93428 hash:<a href="/type/long/">long</a> = <a href="/type/messages.Reactions/">messages.Reactions</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.Reactions](/type/messages.Reactions/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
