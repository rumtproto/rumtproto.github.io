---
title: "channels.getAdminLog"
original: "https://core.telegram.org/method/channels.getAdminLog"
section: ref
description: "Get the admin log of a channel/supergroup"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getAdminLog","url":"/method/channels.getAdminLog/"}]
layout: layout.njk
---

# channels.getAdminLog

Get the admin log of a [channel/supergroup](/api/channel/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channels.adminLogResults/">channels.adminLogResults</a>#ed8af74d events:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChannelAdminLogEvent/">ChannelAdminLogEvent</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/channels.AdminLogResults/">channels.AdminLogResults</a>;
---functions---
<a href="/method/channels.getAdminLog/" class="current_page_link">channels.getAdminLog</a>#33ddf480 flags:<a href="/type/%23/">#</a> channel:<a href="/type/InputChannel/">InputChannel</a> q:<a href="/type/string/">string</a> events_filter:flags.0?<a href="/type/ChannelAdminLogEventsFilter/">ChannelAdminLogEventsFilter</a> admins:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt; max_id:<a href="/type/long/">long</a> min_id:<a href="/type/long/">long</a> limit:<a href="/type/int/">int</a> = <a href="/type/channels.AdminLogResults/">channels.AdminLogResults</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel/">InputChannel</a></td><td>Channel</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Search query, can be empty</td></tr><tr><td><strong>events_filter</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/ChannelAdminLogEventsFilter/">ChannelAdminLogEventsFilter</a></td><td>Event filter</td></tr><tr><td><strong>admins</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputUser/">InputUser</a>&gt;</td><td>Only show events from these admins</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Maximum ID of message to return (see <a href="/api/offsets/">pagination</a>)</td></tr><tr><td><strong>min_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Minimum ID of message to return (see <a href="/api/offsets/">pagination</a>)</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a></td></tr></tbody></table>

### Result

[channels.AdminLogResults](/type/channels.AdminLogResults/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
