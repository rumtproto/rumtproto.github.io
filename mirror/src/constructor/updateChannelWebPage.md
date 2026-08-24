---
title: "updateChannelWebPage"
original: "https://core.telegram.org/constructor/updateChannelWebPage"
section: ref
description: "A webpage preview of a link in a channel/supergroup message was generated"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelWebPage","url":"/constructor/updateChannelWebPage/"}]
layout: layout.njk
---

# updateChannelWebPage

A webpage preview of a link in a [channel/supergroup](/api/channel/) message was generated

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelWebPage/" class="current_page_link">updateChannelWebPage</a>#2f2ba99f channel_id:<a href="/type/long/">long</a> webpage:<a href="/type/WebPage/">WebPage</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/channel/">Channel/supergroup</a> ID</td></tr><tr><td><strong>webpage</strong></td><td style="text-align: center;"><a href="/type/WebPage/">WebPage</a></td><td>Generated webpage preview</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
