---
title: "updateDeleteMessages"
original: "https://core.telegram.org/constructor/updateDeleteMessages"
section: ref
description: "How to subscribe to updates and handle them properly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDeleteMessages","url":"/constructor/updateDeleteMessages/"}]
layout: layout.njk
---

# updateDeleteMessages

Messages were deleted.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDeleteMessages/" class="current_page_link">updateDeleteMessages</a>#a20db0e5 messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>List of identifiers of deleted messages</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New quality of actions in a message box</td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of generated <a href="/api/updates/">events</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
