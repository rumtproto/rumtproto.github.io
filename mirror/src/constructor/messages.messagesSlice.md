---
title: "messages.messagesSlice"
original: "https://core.telegram.org/constructor/messages.messagesSlice"
section: ref
description: "Incomplete list of messages and auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.messagesSlice","url":"/constructor/messages.messagesSlice/"}]
layout: layout.njk
---

# messages.messagesSlice

Incomplete list of messages and auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messagesSlice/" class="current_page_link">messages.messagesSlice</a>#5f206716 flags:<a href="/type/%23/">#</a> inexact:flags.1?true count:<a href="/type/int/">int</a> next_rate:flags.0?<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> search_flood:flags.3?<a href="/type/SearchPostsFlood/">SearchPostsFlood</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>inexact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, indicates that the results may be inexact</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of messages in the list</td></tr><tr><td><strong>next_rate</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Rate to use in the <code>offset_rate</code> parameter in the next call to <a href="/method/messages.searchGlobal/">messages.searchGlobal</a></td></tr><tr><td><strong>offset_id_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>Indicates the absolute position of <code>messages[0]</code> within the total result set with count <code>count</code>.<br>This is useful, for example, if the result was fetched using <code>offset_id</code>, and we need to display a <code>progress/total</code> counter (like <code>photo 134 of 200</code>, for all media in a chat, we could simply use <code>photo ${offset_id_offset} of ${count}</code>).</td></tr><tr><td><strong>search_flood</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/SearchPostsFlood/">SearchPostsFlood</a></td><td><a href="/api/search/#posts-tab">For global post searches »</a>, the remaining amount of free searches, here <code>query_is_free</code> is related to the current call only, not to the next paginated call, and all subsequent pagination calls will always be free.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>List of messages</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt;</td><td><a href="/api/forum/#forum-topics">Forum topics</a> the returned messages belong to.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>List of chats mentioned in messages</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>List of users mentioned in messages and chats</td></tr></tbody></table>

### Type

[messages.Messages](/type/messages.Messages/)

### Related pages

#### [messages.searchGlobal](/method/messages.searchGlobal/)

Search for messages and peers globally

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
