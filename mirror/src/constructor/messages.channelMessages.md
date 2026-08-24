---
title: "messages.channelMessages"
original: "https://core.telegram.org/constructor/messages.channelMessages"
section: ref
description: "How to subscribe to updates and handle them properly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.channelMessages","url":"/constructor/messages.channelMessages/"}]
layout: layout.njk
---

# messages.channelMessages

Channel messages

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.channelMessages/" class="current_page_link">messages.channelMessages</a>#c776ba4e flags:<a href="/type/%23/">#</a> inexact:flags.1?true pts:<a href="/type/int/">int</a> count:<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>inexact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, returned results may be inexact</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/updates/">Event count after generation</a></td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results were found server-side (may not be all included here)</td></tr><tr><td><strong>offset_id_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Indicates the absolute position of <code>messages[0]</code> within the total result set with count <code>count</code>.<br>This is useful, for example, if the result was fetched using <code>offset_id</code>, and we need to display a <code>progress/total</code> counter (like <code>photo 134 of 200</code>, for all media in a chat, we could simply use <code>photo ${offset_id_offset} of ${count}</code>.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>Found messages</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt;</td><td><a href="/api/forum/#forum-topics">Forum topic</a> information</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users</td></tr></tbody></table>

### Type

[messages.Messages](/type/messages.Messages/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
