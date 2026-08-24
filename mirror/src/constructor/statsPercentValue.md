---
title: "statsPercentValue"
original: "https://core.telegram.org/constructor/statsPercentValue"
section: ref
description: "Channel statistics percentage."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"statsPercentValue","url":"/constructor/statsPercentValue/"}]
layout: layout.njk
---

# statsPercentValue

[Channel statistics percentage](/api/stats/).  
Compute the percentage simply by doing `part * total / 100`

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/statsPercentValue/" class="current_page_link">statsPercentValue</a>#cbce2fe0 part:<a href="/type/double/">double</a> total:<a href="/type/double/">double</a> = <a href="/type/StatsPercentValue/">StatsPercentValue</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>part</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Partial value</td></tr><tr><td><strong>total</strong></td><td style="text-align: center;"><a href="/type/double/">double</a></td><td>Total value</td></tr></tbody></table>

### Type

[StatsPercentValue](/type/StatsPercentValue/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
