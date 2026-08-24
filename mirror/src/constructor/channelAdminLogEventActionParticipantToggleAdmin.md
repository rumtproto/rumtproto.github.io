---
title: "channelAdminLogEventActionParticipantToggleAdmin"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantToggleAdmin"
section: ref
description: "The admin rights of a user were changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionParticipantToggleAdmin","url":"/constructor/channelAdminLogEventActionParticipantToggleAdmin/"}]
layout: layout.njk
---

# channelAdminLogEventActionParticipantToggleAdmin

The admin [rights](/api/rights/) of a user were changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionParticipantToggleAdmin/" class="current_page_link">channelAdminLogEventActionParticipantToggleAdmin</a>#d5676710 prev_participant:<a href="/type/ChannelParticipant/">ChannelParticipant</a> new_participant:<a href="/type/ChannelParticipant/">ChannelParticipant</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>prev_participant</strong></td><td style="text-align: center;"><a href="/type/ChannelParticipant/">ChannelParticipant</a></td><td>Previous admin rights</td></tr><tr><td><strong>new_participant</strong></td><td style="text-align: center;"><a href="/type/ChannelParticipant/">ChannelParticipant</a></td><td>New admin rights</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Admin, banned, default rights](/api/rights/)

How to handle admin permissions, granular bans and global permissions in channels, groups and supergroups.
