---
title: "messages.sendInlineBotResult"
original: "https://core.telegram.org/method/messages.sendInlineBotResult"
section: ref
description: "Send a result obtained using messages.getInlineBotResults."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendInlineBotResult","url":"/method/messages.sendInlineBotResult/"}]
layout: layout.njk
---

# messages.sendInlineBotResult

Send a result obtained using [messages.getInlineBotResults](/method/messages.getInlineBotResults/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/messages.sendInlineBotResult/" class="current_page_link">messages.sendInlineBotResult</a>#c0cf7646 flags:<a href="/type/%23/">#</a> silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:<a href="/type/InputPeer/">InputPeer</a> reply_to:flags.0?<a href="/type/InputReplyTo/">InputReplyTo</a> random_id:<a href="/type/long/">long</a> query_id:<a href="/type/long/">long</a> id:<a href="/type/string/">string</a> schedule_date:flags.10?<a href="/type/int/">int</a> send_as:flags.13?<a href="/type/InputPeer/">InputPeer</a> quick_reply_shortcut:flags.17?<a href="/type/InputQuickReplyShortcut/">InputQuickReplyShortcut</a> allow_paid_stars:flags.21?<a href="/type/long/">long</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether to send the message silently (no notification will be triggered on the other client)</td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Whether to send the message in background</td></tr><tr><td><strong>clear_draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether to clear the <a href="/api/drafts/">draft</a></td></tr><tr><td><strong>hide_via</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>Whether to hide the <code>via @botname</code> in the resulting message (only for bot usernames encountered in the <a href="/constructor/config/">config</a>)</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Destination</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo/">InputReplyTo</a></td><td>If set, indicates that the message should be sent in reply to the specified message or story.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random ID to avoid resending the same query. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query ID from <a href="/method/messages.getInlineBotResults/">messages.getInlineBotResults</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Result ID from <a href="/method/messages.getInlineBotResults/">messages.getInlineBotResults</a></td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>Scheduled message date for scheduled messages</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/InputPeer/">InputPeer</a></td><td>Send this message as the specified peer</td></tr><tr><td><strong>quick_reply_shortcut</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/InputQuickReplyShortcut/">InputQuickReplyShortcut</a></td><td>Add the message to the specified <a href="/api/business/#quick-reply-shortcuts">quick reply shortcut »</a>, instead.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/type/long/">long</a></td><td>For <a href="/api/paid-messages/">paid messages »</a>, specifies the amount of <a href="/api/stars/">Telegram Stars</a> the user has agreed to pay in order to send the message.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>ALLOW_PAYMENT_REQUIRED_%d</td><td>This peer charges %d <a href="/api/stars/">Telegram Stars</a> per message, but the <code>allow_paid_stars</code> was not set or its value is smaller than %d.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_GUEST_SEND_FORBIDDEN</td><td>You join the discussion group before commenting, see <a href="/api/discussion/#requiring-users-to-join-the-group">here&nbsp;»</a> for more info.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>You can't send messages in this chat, you were restricted.</td></tr><tr><td>403</td><td>CHAT_SEND_AUDIOS_FORBIDDEN</td><td>You can't send audio messages in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_GAME_FORBIDDEN</td><td>You can't send a game to this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_GIFS_FORBIDDEN</td><td>You can't send gifs in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_INLINE_FORBIDDEN</td><td>You can't send inline messages in this group.</td></tr><tr><td>403</td><td>CHAT_SEND_MEDIA_FORBIDDEN</td><td>You can't send media in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_PHOTOS_FORBIDDEN</td><td>You can't send photos in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_PLAIN_FORBIDDEN</td><td>You can't send non-media (text) messages in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_STICKERS_FORBIDDEN</td><td>You can't send stickers in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_VOICES_FORBIDDEN</td><td>You can't send voice recordings in this chat.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>A specified <a href="/api/entities/#entity-length">entity offset or length</a> is invalid, see <a href="/api/entities/#entity-length">here&nbsp;»</a> for info on how to properly compute the entity offset/length.</td></tr><tr><td>400</td><td>INLINE_RESULT_EXPIRED</td><td>The inline query expired.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>The provided media object is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>403</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>You need a <a href="/api/premium/">Telegram Premium subscription</a> to send a message to this user.</td></tr><tr><td>400</td><td>QUERY_ID_EMPTY</td><td>The query ID is empty.</td></tr><tr><td>400</td><td>QUICK_REPLIES_TOO_MUCH</td><td>A maximum of <a href="/api/config/#quick-replies-limit">appConfig.<code>quick_replies_limit</code></a> shortcuts may be created, the limit was reached.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>You provided a random ID that was already used.</td></tr><tr><td>400</td><td>REPLY_MESSAGES_TOO_MUCH</td><td>Each shortcut can contain a maximum of <a href="/api/config/#quick-reply-messages-limit">appConfig.<code>quick_reply_messages_limit</code></a> messages, the limit was reached.</td></tr><tr><td>400</td><td>RESULT_ID_EMPTY</td><td>Result ID empty.</td></tr><tr><td>400</td><td>RESULT_ID_INVALID</td><td>One of the specified result IDs is invalid.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_TOO_LATE</td><td>You can't schedule a message this far in the future.</td></tr><tr><td>400</td><td>SCHEDULE_TOO_MUCH</td><td>There are too many scheduled messages.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>You can't send messages as the specified peer.</td></tr><tr><td>500</td><td>SEND_MEDIA_INVALID</td><td>The specified media is invalid.</td></tr><tr><td>420</td><td>SLOWMODE_WAIT_%d</td><td>Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat.</td></tr><tr><td>400</td><td>TOPIC_DELETED</td><td>The specified topic was deleted.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>400</td><td>VOICE_MESSAGES_FORBIDDEN</td><td>This user's privacy settings forbid you from sending voice messages.</td></tr><tr><td>400</td><td>WEBPAGE_CURL_FAILED</td><td>Failure while fetching the webpage with cURL.</td></tr><tr><td>400</td><td>WEBPAGE_MEDIA_EMPTY</td><td>Webpage media empty.</td></tr><tr><td>400</td><td>YOU_BLOCKED_USER</td><td>You blocked this user.</td></tr></tbody></table>

### Related pages

#### [Message drafts](/api/drafts/)

How to handle message drafts

#### [config](/constructor/config/)

Current configuration

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [messages.getInlineBotResults](/method/messages.getInlineBotResults/)

Query an inline bot

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Discussion groups](/api/discussion/)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
