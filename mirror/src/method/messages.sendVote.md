---
title: "messages.sendVote"
original: "https://core.telegram.org/method/messages.sendVote"
section: ref
description: "Starting from layer 159, the vote will be sent from the peer specified using messages.saveDefaultSendAs."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendVote","url":"/method/messages.sendVote/"}]
layout: layout.njk
---

# messages.sendVote

Vote in a [poll](/constructor/poll/)

Starting from layer 159, the vote will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Before voting, clients should check that the user is actually allowed to vote: voting is not possible if the poll is closed, if it is [subscriber-only »](/api/poll/#subscriber-only-polls) and the user is not an eligible subscriber, or if it is [country-restricted »](/api/poll/#country-restricted-polls) and the user's [`phone_country_iso2` »](/api/config/#phone-country-iso2) is not in the poll's allowed country list. See [vote restrictions »](/api/poll/#vote-restrictions) for the full list of conditions.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/messages.sendVote/" class="current_page_link">messages.sendVote</a>#10ea6184 peer:<a href="/type/InputPeer/">InputPeer</a> msg_id:<a href="/type/int/">int</a> options:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt; = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The chat where the poll was sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>The message ID of the poll</td></tr><tr><td><strong>options</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/bytes/">bytes</a>&gt;</td><td>The options that were chosen</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MESSAGE_POLL_CLOSED</td><td>Poll closed.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>OPTIONS_TOO_MUCH</td><td>Too many options provided.</td></tr><tr><td>400</td><td>OPTION_INVALID</td><td>Invalid option selected.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>406</td><td>POLL_COUNTRY_RESTRICTED</td><td>Users from the current user's country cannot vote in this <a href="/api/poll/#country-restricted-polls">country-restricted poll&nbsp;»</a>.</td></tr><tr><td>406</td><td>POLL_MEMBER_RESTRICTED</td><td>Only channel subscribers can vote in this poll.</td></tr><tr><td>400</td><td>REVOTE_NOT_ALLOWED</td><td>You cannot change your vote.</td></tr></tbody></table>

### Related pages

#### [poll](/constructor/poll/)

Poll

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Change the default peer that should be used when sending messages, reactions, poll votes to a specific group

#### [Polls and quizzes](/api/poll/)

Telegram allows sending polls and quizzes, that can be voted on by thousands, if not millions of users in chats and channels.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
