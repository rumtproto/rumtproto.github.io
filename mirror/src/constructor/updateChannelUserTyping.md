---
title: "updateChannelUserTyping"
original: "https://core.telegram.org/constructor/updateChannelUserTyping"
section: ref
description: "A user is typing in a supergroup, channel or message thread"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateChannelUserTyping","url":"/constructor/updateChannelUserTyping/"}]
layout: layout.njk
---

# updateChannelUserTyping

A user is typing in a [supergroup, channel](/api/channel/) or [message thread](/api/threads/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateChannelUserTyping/" class="current_page_link">updateChannelUserTyping</a>#8c88c923 flags:<a href="/type/%23/">#</a> channel_id:<a href="/type/long/">long</a> top_msg_id:flags.0?<a href="/type/int/">int</a> from_id:<a href="/type/Peer/">Peer</a> action:<a href="/type/SendMessageAction/">SendMessageAction</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Channel ID</td></tr><tr><td><strong>top_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/threads/">Thread ID</a></td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>The peer that is typing</td></tr><tr><td><strong>action</strong></td><td style="text-align: center;"><a href="/type/SendMessageAction/">SendMessageAction</a></td><td>Whether the user is typing, sending a media or doing something else</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
