---
title: "messages.savedGifs"
original: "https://core.telegram.org/constructor/messages.savedGifs"
section: ref
description: "How to fetch results from large lists of objects."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.savedGifs","url":"/constructor/messages.savedGifs/"}]
layout: layout.njk
---

# messages.savedGifs

Saved gifs

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedGifs/" class="current_page_link">messages.savedGifs</a>#84a02a0d hash:<a href="/type/long/">long</a> gifs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt; = <a href="/type/messages.SavedGifs/">messages.SavedGifs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>gifs</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Document/">Document</a>&gt;</td><td>List of saved gifs</td></tr></tbody></table>

### Type

[messages.SavedGifs](/type/messages.SavedGifs/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
