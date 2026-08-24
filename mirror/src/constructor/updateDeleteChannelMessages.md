---
title: "updateDeleteChannelMessages"
original: "https://core.telegram.org/constructor/updateDeleteChannelMessages"
section: ref
description: "Some messages in a supergroup/channel were deleted"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDeleteChannelMessages","url":"/constructor/updateDeleteChannelMessages/"}]
layout: layout.njk
---

# updateDeleteChannelMessages

Some messages in a [supergroup/channel](/api/channel/) were deleted

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDeleteChannelMessages/" class="current_page_link">updateDeleteChannelMessages</a>#c32d5b12 channel_id:<a href="/type/long/">long</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel ID</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of messages that were deleted</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
