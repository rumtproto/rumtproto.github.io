---
title: "messages.getRecentLocations"
original: "https://core.telegram.org/method/messages.getRecentLocations"
section: ref
description: "Get all recent live locations sent to a specific chat: returns up to 1 location message (messageMediaGeoLive) per chat participant."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getRecentLocations","url":"/method/messages.getRecentLocations/"}]
layout: layout.njk
---

# messages.getRecentLocations

Get all recent [live locations](/api/live-location/) sent to a specific chat: returns up to 1 location message ([messageMediaGeoLive](/constructor/messageMediaGeoLive/)) per chat participant.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messages/">messages.messages</a>#1d73e7ea messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.messagesSlice/">messages.messagesSlice</a>#5f206716 flags:<a href="/type/%23/">#</a> inexact:flags.1?true count:<a href="/type/int/">int</a> next_rate:flags.0?<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> search_flood:flags.3?<a href="/type/SearchPostsFlood/">SearchPostsFlood</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.channelMessages/">messages.channelMessages</a>#c776ba4e flags:<a href="/type/%23/">#</a> inexact:flags.1?true pts:<a href="/type/int/">int</a> count:<a href="/type/int/">int</a> offset_id_offset:flags.2?<a href="/type/int/">int</a> messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;
<a href="/constructor/messages.messagesNotModified/">messages.messagesNotModified</a>#74535f21 count:<a href="/type/int/">int</a> = <a href="/type/messages.Messages/">messages.Messages</a>;
---functions---
<a href="/method/messages.getRecentLocations/" class="current_page_link">messages.getRecentLocations</a>#702a40e0 peer:<a href="/type/InputPeer/">InputPeer</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.Messages/">messages.Messages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Target group or private chat.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[messages.Messages](/type/messages.Messages/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Live geolocation](/api/live-location/)

Telegram allows sending the live geolocation of a user in a chat, optionally setting a proximity alert.

#### [messageMediaGeoLive](/constructor/messageMediaGeoLive/)

Indicates a [live geolocation](/api/live-location/)
