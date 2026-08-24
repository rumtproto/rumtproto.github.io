---
title: "messages.createForumTopic"
original: "https://core.telegram.org/method/messages.createForumTopic"
section: ref
description: "Telegram allows creating forums with multiple distinct topics."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.createForumTopic","url":"/method/messages.createForumTopic/"}]
layout: layout.njk
---

# messages.createForumTopic

Create a [forum topic](/api/forum/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/messages.createForumTopic/" class="current_page_link">messages.createForumTopic</a>#2f98c3d5 flags:<a href="/type/%23/">#</a> title_missing:flags.4?true peer:<a href="/type/InputPeer/">InputPeer</a> title:<a href="/type/string/">string</a> icon_color:flags.0?<a href="/type/int/">int</a> icon_emoji_id:flags.3?<a href="/type/long/">long</a> random_id:<a href="/type/long/">long</a> send_as:flags.2?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>title_missing</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, the topic has no user-defined title, can only be set for the per-user topics of <a href="/api/forum/#bot-forums">bot forums</a>; if this field is set, the topic title likely needs to be changed by the bot.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The supergroup, private chat (for forum-enabled bots) or forum bot (for users) where to create the topic.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Topic title (maximum UTF-8 length: 128)</td></tr><tr><td><strong>icon_color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of <code>0x6FB9F0</code>, <code>0xFFD67E</code>, <code>0xCB86DB</code>, <code>0x8EEE98</code>, <code>0xFF93B2</code>, or <code>0xFB6F5F</code>.</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/long/">long</a></td><td>ID of the <a href="/api/custom-emoji/">custom emoji</a> used as topic icon. <a href="/api/premium/">Telegram Premium</a> users can use any custom emoji, other users can only use the custom emojis contained in the <a href="/constructor/inputStickerSetEmojiDefaultTopicIcons/">inputStickerSetEmojiDefaultTopicIcons</a> emoji pack.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique client message ID to prevent duplicate sending of the same event. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InputPeer/">InputPeer</a></td><td>Create the topic as the specified peer</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>BOT_FORUM_CREATE_FORBIDDEN</td><td>Since the bot's user.bot_forum_can_manage_topics flag is <strong>not</strong> set, the user cannot create or modify bot forum topics.</td></tr><tr><td>400</td><td>CHANNEL_FORUM_MISSING</td><td>This supergroup is not a forum.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [inputStickerSetEmojiDefaultTopicIcons](/constructor/inputStickerSetEmojiDefaultTopicIcons/)

Default [custom emoji](/api/custom-emoji/) stickerset for [forum topic icons](/api/forum/#forum-topics)

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
