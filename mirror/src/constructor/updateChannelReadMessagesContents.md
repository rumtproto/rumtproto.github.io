---
title: "updateChannelReadMessagesContents"
original: "https://core.telegram.org/constructor/updateChannelReadMessagesContents"
section: ref
description: "The specified channel/supergroup messages were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelReadMessagesContents","url":"/constructor/updateChannelReadMessagesContents/"}]
layout: layout.njk
---

# updateChannelReadMessagesContents

The specified [channel/supergroup](/api/channel/) messages were read (emitted specifically for messages like voice messages or video, only once the media is watched and marked as read using [channels.readMessageContents](/method/channels.readMessageContents/))

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelReadMessagesContents/" class="current_page_link">updateChannelReadMessagesContents</a>#25f324f7 flags:<a href="/type/%23/">#</a> channel_id:<a href="/type/long/">long</a> top_msg_id:flags.0?<a href="/type/int/">int</a> saved_peer_id:flags.1?<a href="/type/Peer/">Peer</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/channel/">Channel/supergroup</a> ID</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/forum/#forum-topics">Forum topic ID</a>.</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Peer/">Peer</a></td><td>If set, the messages were read within the specified <a href="/api/monoforum/">monoforum topic »</a>.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>IDs of messages that were read</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [channels.readMessageContents](/method/channels.readMessageContents/)

Mark [channel/supergroup](/api/channel/) message contents as read, emitting an [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/).
