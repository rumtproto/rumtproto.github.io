---
title: "messages.getSavedGifs"
original: "https://core.telegram.org/method/messages.getSavedGifs"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSavedGifs","url":"/method/messages.getSavedGifs/"}]
layout: layout.njk
---

# messages.getSavedGifs

Get saved GIFs.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedGifsNotModified/">messages.savedGifsNotModified</a>#e8025ca2 = <a href="/type/messages.SavedGifs/">messages.SavedGifs</a>;
<a href="/constructor/messages.savedGifs/">messages.savedGifs</a>#84a02a0d hash:<a href="/type/long/">long</a> gifs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.SavedGifs/">messages.SavedGifs</a>;
---functions---
<a href="/method/messages.getSavedGifs/" class="current_page_link">messages.getSavedGifs</a>#5cf09635 hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedGifs/">messages.SavedGifs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.SavedGifs](/type/messages.SavedGifs/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
