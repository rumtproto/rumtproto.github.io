---
title: "channelAdminLogEventActionEditTopic"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionEditTopic"
section: ref
description: "ChannelAdminLogEventAction"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionEditTopic","url":"/constructor/channelAdminLogEventActionEditTopic/"}]
layout: layout.njk
---

# channelAdminLogEventActionEditTopic

A [forum topic](/api/forum/#forum-topics) was edited

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionEditTopic/" class="current_page_link">channelAdminLogEventActionEditTopic</a>#f06fe208 prev_topic:<a href="/type/ForumTopic/">ForumTopic</a> new_topic:<a href="/type/ForumTopic/">ForumTopic</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_topic</strong></td><td style="text-align: center;"><a href="/type/ForumTopic/">ForumTopic</a></td><td>Previous topic information</td></tr><tr><td><strong>new_topic</strong></td><td style="text-align: center;"><a href="/type/ForumTopic/">ForumTopic</a></td><td>New topic information</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
