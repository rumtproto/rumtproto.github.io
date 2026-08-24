---
title: "channelParticipantsMentions"
original: "https://core.telegram.org/constructor/channelParticipantsMentions"
section: ref
description: "This filter is used when looking for supergroup members to mention."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelParticipantsMentions","url":"/constructor/channelParticipantsMentions/"}]
layout: layout.njk
---

# channelParticipantsMentions

This filter is used when looking for supergroup members to mention.  
This filter will automatically remove anonymous admins, and return even non-participant users that replied to a specific [thread](/api/threads/) through the [comment section](/api/threads/#channel-comments) of a channel.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelParticipantsMentions/" class="current_page_link">channelParticipantsMentions</a>#e04b5ceb flags:<a href="/type/%23/">#</a> q:flags.0?<a href="/type/string/">string</a> top_msg_id:flags.1?<a href="/type/int/">int</a> = <a href="/type/ChannelParticipantsFilter/">ChannelParticipantsFilter</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Filter by user name or username</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Look only for users that posted in this <a href="/api/threads/">thread</a></td></tr></tbody></table>

### Type

[ChannelParticipantsFilter](/type/ChannelParticipantsFilter/)

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.
