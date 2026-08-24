---
title: "statsGroupTopAdmin"
original: "https://core.telegram.org/constructor/statsGroupTopAdmin"
section: ref
description: "Information about an active admin in a supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"statsGroupTopAdmin","url":"/constructor/statsGroupTopAdmin/"}]
layout: layout.njk
---

# statsGroupTopAdmin

Information about an active admin in a supergroup

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/statsGroupTopAdmin/" class="current_page_link">statsGroupTopAdmin</a>#d7584c87 user_id:<a href="/type/long/">long</a> deleted:<a href="/type/int/">int</a> kicked:<a href="/type/int/">int</a> banned:<a href="/type/int/">int</a> = <a href="/type/StatsGroupTopAdmin/">StatsGroupTopAdmin</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>User ID</td></tr><tr><td><strong>deleted</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of deleted messages for <a href="/api/stats/">statistics</a> period in consideration</td></tr><tr><td><strong>kicked</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of kicked users for <a href="/api/stats/">statistics</a> period in consideration</td></tr><tr><td><strong>banned</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of banned users for <a href="/api/stats/">statistics</a> period in consideration</td></tr></tbody></table>

### Type

[StatsGroupTopAdmin](/type/StatsGroupTopAdmin/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.
