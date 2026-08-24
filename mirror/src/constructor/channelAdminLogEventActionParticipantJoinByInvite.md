---
title: "channelAdminLogEventActionParticipantJoinByInvite"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantJoinByInvite"
section: ref
description: "A user joined the supergroup/channel using a specific invite link"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventActionParticipantJoinByInvite","url":"/constructor/channelAdminLogEventActionParticipantJoinByInvite/"}]
layout: layout.njk
---

# channelAdminLogEventActionParticipantJoinByInvite

A user joined the [supergroup/channel](/api/channel/) using a specific invite link

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventActionParticipantJoinByInvite/" class="current_page_link">channelAdminLogEventActionParticipantJoinByInvite</a>#fe9fc158 flags:<a href="/type/%23/">#</a> via_chatlist:flags.0?true invite:<a href="/type/ExportedChatInvite/">ExportedChatInvite</a> = <a href="/type/ChannelAdminLogEventAction/">ChannelAdminLogEventAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>via_chatlist</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>The participant joined by importing a <a href="/api/links/#chat-folder-links">chat folder deep link »</a>.</td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/type/ExportedChatInvite/">ExportedChatInvite</a></td><td>The invite link used to join the <a href="/api/channel/">supergroup/channel</a></td></tr></tbody></table>

### Type

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
