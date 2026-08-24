---
title: "channels.createChannel"
original: "https://core.telegram.org/method/channels.createChannel"
section: ref
description: "Create a supergroup/channel."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.createChannel","url":"/method/channels.createChannel/"}]
layout: layout.njk
---

# channels.createChannel

Create a [supergroup/channel](/api/channel/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/channels.createChannel/" class="current_page_link">channels.createChannel</a>#91006707 flags:<a href="/type/%23/">#</a> broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true forum:flags.5?true title:<a href="/type/string/">string</a> about:<a href="/type/string/">string</a> geo_point:flags.2?<a href="/type/InputGeoPoint/">InputGeoPoint</a> address:flags.2?<a href="/type/string/">string</a> ttl_period:flags.4?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether to create a <a href="/api/channel/">channel</a></td></tr><tr><td><strong>megagroup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether to create a <a href="/api/channel/">supergroup</a></td></tr><tr><td><strong>for_import</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether the supergroup is being created to import messages from a foreign chat service using <a href="/method/messages.initHistoryImport/">messages.initHistoryImport</a></td></tr><tr><td><strong>forum</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether to create a <a href="/api/forum/">forum</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Channel title</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Channel description</td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputGeoPoint/">InputGeoPoint</a></td><td>Geogroup location, see <a href="/api/nearby/">here »</a> for more info on geogroups.</td></tr><tr><td><strong>address</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>Geogroup address, see <a href="/api/nearby/">here »</a> for more info on geogroups.</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Time-to-live of all messages that will be sent in the supergroup: once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use <a href="/method/messages.setDefaultHistoryTTL/">messages.setDefaultHistoryTTL</a> to edit this value later.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ADDRESS_INVALID</td><td>The specified geopoint address is invalid.</td></tr><tr><td>400</td><td>CHANNELS_ADMIN_LOCATED_TOO_MUCH</td><td>The user has reached the limit of public geogroups.</td></tr><tr><td>400</td><td>CHANNELS_TOO_MUCH</td><td>You have joined too many channels/supergroups.</td></tr><tr><td>400</td><td>CHAT_ABOUT_TOO_LONG</td><td>Chat about too long.</td></tr><tr><td>500</td><td>CHAT_INVALID</td><td>Invalid chat.</td></tr><tr><td>400</td><td>CHAT_TITLE_EMPTY</td><td>No chat title provided.</td></tr><tr><td>400</td><td>TTL_PERIOD_INVALID</td><td>The specified TTL period is invalid.</td></tr><tr><td>406</td><td>USER_RESTRICTED</td><td>You're spamreported, you can't create channels or chats.</td></tr></tbody></table>

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [messages.initHistoryImport](/method/messages.initHistoryImport/)

Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](/api/import/).

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Nearby users&chats](/api/nearby/)

How to work with geolocation-based features like geochats and the nearby users feature.

#### [messages.setDefaultHistoryTTL](/method/messages.setDefaultHistoryTTL/)

Changes the default value of the Time-To-Live setting, applied to all new chats.
