---
title: "channelAdminLogEventActionParticipantSubExtend"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantSubExtend"
section: ref
description: "A paid subscriber has extended their Telegram Star subscription »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionParticipantSubExtend","url":"/constructor/channelAdminLogEventActionParticipantSubExtend/"}]
layout: layout.njk
---

# channelAdminLogEventActionParticipantSubExtend

A paid subscriber has extended their [Telegram Star subscription »](/api/stars/#star-subscriptions).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionParticipantSubExtend/" class="current_page_link">channelAdminLogEventActionParticipantSubExtend</a>#64642db3 prev_participant:<a href="/type/ChannelParticipant/">ChannelParticipant</a> new_participant:<a href="/type/ChannelParticipant/">ChannelParticipant</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_participant</strong></td><td style="text-align: center;"><a href="/type/ChannelParticipant/">ChannelParticipant</a></td><td>Same as <code>new_participant</code>.</td></tr><tr><td><strong>new_participant</strong></td><td style="text-align: center;"><a href="/type/ChannelParticipant/">ChannelParticipant</a></td><td>The subscriber that extended the subscription.</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
