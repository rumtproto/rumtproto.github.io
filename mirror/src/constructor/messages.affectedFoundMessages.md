---
title: "messages.affectedFoundMessages"
original: "https://core.telegram.org/constructor/messages.affectedFoundMessages"
section: ref
description: "Messages found and affected by changes"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.affectedFoundMessages","url":"/constructor/messages.affectedFoundMessages/"}]
layout: layout.njk
---

# messages.affectedFoundMessages

Messages found and affected by changes

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedFoundMessages/" class="current_page_link">messages.affectedFoundMessages</a>#ef8d3e6c pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> offset:<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/messages.AffectedFoundMessages/">messages.AffectedFoundMessages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If bigger than zero, the request must be repeated to remove more messages</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Affected message IDs</td></tr></tbody></table>

### Type

[messages.AffectedFoundMessages](/type/messages.AffectedFoundMessages/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
