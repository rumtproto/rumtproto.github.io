---
title: "channelAdminLogEventActionParticipantJoinByRequest"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantJoinByRequest"
section: ref
description: "A new member was accepted to the chat by an admin"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionParticipantJoinByRequest","url":"/constructor/channelAdminLogEventActionParticipantJoinByRequest/"}]
layout: layout.njk
---

# channelAdminLogEventActionParticipantJoinByRequest

A new member was accepted to the chat by an admin

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionParticipantJoinByRequest/" class="current_page_link">channelAdminLogEventActionParticipantJoinByRequest</a>#afb6144a invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> approved_by:<a href="/type/long/">long</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatInvite/">ExportedChatInvite</a></td><td>The invite link that was used to join the chat</td></tr><tr><td><strong>approved_by</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>ID of the admin that approved the invite</td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)
