---
title: "channels.searchPosts"
original: "https://core.telegram.org/method/channels.searchPosts"
section: ref
description: "Globally search for posts from public channels » (_including_ those we aren't a member of) containing either a specific hashtag, _or_ a full text query."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.searchPosts","url":"/method/channels.searchPosts/"}]
layout: layout.njk
---

# channels.searchPosts

Globally search for posts from public [channels »](/api/channel/) (_including_ those we aren't a member of) containing either a specific hashtag, _or_ a full text query.

Exactly one of `query` and `hashtag` must be set.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messages/">messages.messages</a>#1d73e7ea messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.messagesSlice/">messages.messagesSlice</a>#5f206716 flags:<a href="/type/%23/">#</a> inexact:flags.1?true count:<a href="/type/int/">int</a> next_rate:flags.0?<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> search_flood:flags.3?<a href="/type/SearchPostsFlood/">SearchPostsFlood</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.channelMessages/">messages.channelMessages</a>#c776ba4e flags:<a href="/type/%23/">#</a> inexact:flags.1?true pts:<a href="/type/int/">int</a> count:<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.messagesNotModified/">messages.messagesNotModified</a>#74535f21 count:<a href="/type/int/">int</a> = <a href="/type/messages.Messages/">messages.Messages</a>;
---functions---
<a href="/method/channels.searchPosts/" class="current_page_link">channels.searchPosts</a>#f2c4f24d flags:<a href="/type/%23/">#</a> hashtag:flags.0?<a href="/type/string/">string</a> query:flags.1?<a href="/type/string/">string</a> offset_rate:<a href="/type/int/">int</a> offset_peer:<a href="/type/InputPeer/">InputPeer</a> offset_id:<a href="/type/int/">int</a> limit:<a href="/type/int/">int</a> allow_paid_stars:flags.2?<a href="/type/long/">long</a> = <a href="/type/messages.Messages/">messages.Messages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>hashtag</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>The hashtag to search, without the <code>#</code> character.</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>The full text query: each user has a limited amount of free full text search slots, after which payment is required, see <a href="/api/search/#posts-tab">here »</a> for more info on the full flow.</td></tr><tr><td><strong>offset_rate</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Initially 0, then set to the <a href="/constructor/messages.messagesSlice/"><code>next_rate</code> parameter of messages.messagesSlice</a>, or if that is absent, the <code>date</code> of the last returned message.</td></tr><tr><td><strong>offset_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/long/">long</a></td><td>For full text post searches (<code>query</code>), allows payment of the specified amount of Stars for the search, see <a href="/api/search/#posts-tab">here »</a> for more info on the full flow.</td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>420</td><td>FROZEN_METHOD_INVALID</td><td>The current account is <a href="/api/auth/#frozen-accounts">frozen</a>, and thus cannot execute the specified action.</td></tr><tr><td>400</td><td>OFFSET_PEER_ID_INVALID</td><td>The provided offset peer is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.

#### [messages.messagesSlice](/constructor/messages.messagesSlice/)

Incomplete list of messages and auxiliary data.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [User Authorization](/api/auth/)

How to register a user's phone to start using the API.
