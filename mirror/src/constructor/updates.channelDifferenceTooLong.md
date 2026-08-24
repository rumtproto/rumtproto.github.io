---
title: "updates.channelDifferenceTooLong"
original: "https://core.telegram.org/constructor/updates.channelDifferenceTooLong"
section: ref
description: "The passed pts is too old: one or more updates starting from the specified PTS were deleted from the message box of this channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.channelDifferenceTooLong","url":"/constructor/updates.channelDifferenceTooLong/"}]
layout: layout.njk
---

# updates.channelDifferenceTooLong

The passed `pts` is too old: one or more updates starting from the specified PTS were deleted from the message box of this channel.

For supergroups/channels, this usually happens for updates older than `latestPts - 100000` (though do not rely on this value, it's a server-side implementation detail that may change, and should not be used by clients in any way).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updates.channelDifferenceTooLong/" class="current_page_link">updates.channelDifferenceTooLong</a>#a4bcc6fe flags:<a href="/type/%23/">#</a> final:flags.0?true timeout:flags.1?<a href="/type/int/">int</a> dialog:<a href="/type/Dialog/">Dialog</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/updates.ChannelDifference/">updates.ChannelDifference</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>final</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether there are more updates that must be fetched (always set)</td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>Clients are supposed to refetch the channel difference after timeout seconds have elapsed</td></tr><tr><td><strong>dialog</strong></td><td style="text-align: center;"><a href="/type/Dialog/">Dialog</a></td><td>Dialog containing the latest <a href="/api/updates/">PTS</a> that can be used to reset the channel state</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>The latest messages (not starting from the passed <code>pts</code>, just the latest messages).</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats from messages</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users from messages</td></tr></tbody></table>

### Type

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
