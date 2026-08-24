---
title: "updateChannelAvailableMessages"
original: "https://core.telegram.org/constructor/updateChannelAvailableMessages"
section: ref
description: "The history of a channel/supergroup was hidden."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelAvailableMessages","url":"/constructor/updateChannelAvailableMessages/"}]
layout: layout.njk
---

# updateChannelAvailableMessages

The history of a [channel/supergroup](/api/channel/) was hidden.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelAvailableMessages/" class="current_page_link">updateChannelAvailableMessages</a>#b23fc698 channel_id:<a href="/type/long/">long</a> available_min_id:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel/supergroup ID</td></tr><tr><td><strong>available_min_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Identifier of a maximum unavailable message in a channel due to hidden history.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
