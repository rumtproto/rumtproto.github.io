---
title: "messages.searchGlobal"
original: "https://core.telegram.org/method/messages.searchGlobal"
section: ref
description: "Search for messages and peers globally"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.searchGlobal","url":"/method/messages.searchGlobal/"}]
layout: layout.njk
---

# messages.searchGlobal

Search for messages and peers globally

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messages/">messages.messages</a>#1d73e7ea messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.messagesSlice/">messages.messagesSlice</a>#5f206716 flags:<a href="/type/%23/">#</a> inexact:flags.1?true count:<a href="/type/int/">int</a> next_rate:flags.0?<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> search_flood:flags.3?<a href="/type/SearchPostsFlood/">SearchPostsFlood</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.channelMessages/">messages.channelMessages</a>#c776ba4e flags:<a href="/type/%23/">#</a> inexact:flags.1?true pts:<a href="/type/int/">int</a> count:<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.messagesNotModified/">messages.messagesNotModified</a>#74535f21 count:<a href="/type/int/">int</a> = <a href="/type/messages.Messages/">messages.Messages</a>;
---functions---
<a href="/method/messages.searchGlobal/" class="current_page_link">messages.searchGlobal</a>#4bc6589a flags:<a href="/type/%23/">#</a> broadcasts_only:flags.1?true groups_only:flags.2?true users_only:flags.3?true folder_id:flags.0?<a href="/type/int/">int</a> q:<a href="/type/string/">string</a> filter:<a href="/type/MessagesFilter/">MessagesFilter</a> min_date:<a href="/type/int/">int</a> max_date:<a href="/type/int/">int</a> offset_rate:<a href="/type/int/">int</a> offset_peer:<a href="/type/InputPeer/">InputPeer</a> offset_id:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> = <a href="/type/messages.Messages/">messages.Messages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>broadcasts_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>If set, only returns results from channels (used in the <a href="/api/search/#global-search">global channel search tab »</a>).</td></tr><tr><td><strong>groups_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Whether to search only in groups</td></tr><tr><td><strong>users_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether to search only in private chats</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Query</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/MessagesFilter/">MessagesFilter</a></td><td>Global search filter</td></tr><tr><td><strong>min_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If a positive value was specified, the method will return only messages with date bigger than min_date</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>If a positive value was transferred, the method will return only messages with date smaller than max_date</td></tr><tr><td><strong>offset_rate</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Initially 0, then set to the <a href="/constructor/messages.messagesSlice/"><code>next_rate</code> parameter of messages.messagesSlice</a>, or if that is absent, the <code>date</code> of the last returned message.</td></tr><tr><td><strong>offset_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FOLDER_ID_INVALID</td><td>Invalid folder ID.</td></tr><tr><td>400</td><td>INPUT_FILTER_INVALID</td><td>The specified filter is invalid.</td></tr><tr><td>400</td><td>SEARCH_QUERY_EMPTY</td><td>The search query is empty.</td></tr></tbody></table>

### Related pages

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [messages.messagesSlice](/constructor/messages.messagesSlice/)

Incomplete list of messages and auxiliary data.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
