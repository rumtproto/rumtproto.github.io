---
title: "updateEditChannelMessage"
original: "https://core.telegram.org/constructor/updateEditChannelMessage"
section: ref
description: "A message was edited in a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateEditChannelMessage","url":"/constructor/updateEditChannelMessage/"}]
layout: layout.njk
---

# updateEditChannelMessage

A message was edited in a [channel/supergroup](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateEditChannelMessage/" class="current_page_link">updateEditChannelMessage</a>#1b3f4df7 message:<a href="/type/Message/">Message</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message/">Message</a></td><td>The new message</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>pts_count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Number of events that were generated</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
