---
title: "messages.sendMultiMedia"
original: "https://core.telegram.org/method/messages.sendMultiMedia"
section: ref
description: "Send an album or grouped media"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendMultiMedia","url":"/method/messages.sendMultiMedia/"}]
layout: layout.njk
---

# messages.sendMultiMedia

Send an [album or grouped media](/api/files/#albums-grouped-media)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/messages.sendMultiMedia/" class="current_page_link">messages.sendMultiMedia</a>#1bf89d74 flags:<a href="/type/%23/">#</a> silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:<a href="/type/InputPeer/">InputPeer</a> reply_to:flags.0?<a href="/type/InputReplyTo/">InputReplyTo</a> multi_media:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSingleMedia/">InputSingleMedia</a>&gt; schedule_date:flags.10?<a href="/type/int/">int</a> send_as:flags.13?<a href="/type/InputPeer/">InputPeer</a> quick_reply_shortcut:flags.17?<a href="/type/InputQuickReplyShortcut/">InputQuickReplyShortcut</a> effect:flags.18?<a href="/type/long/">long</a> allow_paid_stars:flags.21?<a href="/type/long/">long</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether to send the album silently (no notification triggered)</td></tr><tr><td><strong>background</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>Send in background?</td></tr><tr><td><strong>clear_draft</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether to clear <a href="/api/drafts/">drafts</a></td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/constructor/true/">true</a></td><td>Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">content protection</a> enabled</td></tr><tr><td><strong>update_stickersets_order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/constructor/true/">true</a></td><td>Whether to move used stickersets to top, <a href="/api/stickers/#recent-stickersets">see here for more info on this flag »</a></td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>allow_paid_floodskip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>Bots only: if set, allows sending up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The destination chat</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputReplyTo/">InputReplyTo</a></td><td>If set, indicates that the message should be sent in reply to the specified message or story.</td></tr><tr><td><strong>multi_media</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/InputSingleMedia/">InputSingleMedia</a>&gt;</td><td>The medias to send: note that they must be separately uploaded using <a href="/method/messages.uploadMedia/">messages.uploadMedia</a> first, using raw <code>inputMediaUploaded*</code> constructors is not supported.</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>Scheduled message date for scheduled messages</td></tr><tr><td><strong>send_as</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/InputPeer/">InputPeer</a></td><td>Send this message as the specified peer</td></tr><tr><td><strong>quick_reply_shortcut</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/InputQuickReplyShortcut/">InputQuickReplyShortcut</a></td><td>Add the message to the specified <a href="/api/business/#quick-reply-shortcuts">quick reply shortcut »</a>, instead.</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/long/">long</a></td><td>Specifies a <a href="/api/effects/">message effect »</a> to use for the message.</td></tr><tr><td><strong>allow_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/type/long/">long</a></td><td>For <a href="/api/paid-messages/">paid messages »</a>, specifies the amount of <a href="/api/stars/">Telegram Stars</a> the user has agreed to pay in order to send the message.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>ALLOW_PAYMENT_REQUIRED_%d</td><td>This peer charges %d <a href="/api/stars/">Telegram Stars</a> per message, but the <code>allow_paid_stars</code> was not set or its value is smaller than %d.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Messages can't be set to the specified peer through the current <a href="/api/business/#connected-bots">business connection</a>.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_FORWARDS_RESTRICTED</td><td>You can't forward messages from a protected chat.</td></tr><tr><td>403</td><td>CHAT_SEND_MEDIA_FORBIDDEN</td><td>You can't send media in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_PHOTOS_FORBIDDEN</td><td>You can't send photos in this chat.</td></tr><tr><td>403</td><td>CHAT_SEND_VIDEOS_FORBIDDEN</td><td>You can't send videos in this chat.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>EFFECT_ID_INVALID</td><td>The specified effect ID is invalid.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>A specified <a href="/api/entities/#entity-length">entity offset or length</a> is invalid, see <a href="/api/entities/#entity-length">here&nbsp;»</a> for info on how to properly compute the entity offset/length.</td></tr><tr><td>400</td><td>FILE_REFERENCE_%d_EMPTY</td><td>The file reference of the media file at offset %d in the multi_media array is invalid.</td></tr><tr><td>400</td><td>FILE_REFERENCE_%d_EXPIRED</td><td>The file reference of the media file at index %d in the passed media array expired, it <a href="/api/file-references/">must be refreshed as specified in the documentation</a>. .</td></tr><tr><td>400</td><td>FILE_REFERENCE_%d_INVALID</td><td>The <a href="/api/file-references/">file reference</a> of the media file at index %d in the passed media array is invalid.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>The caption is too long.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>The provided media object is invalid.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Media invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>MULTI_MEDIA_TOO_LONG</td><td>Too many media files for album.</td></tr><tr><td>406</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>403</td><td>PRIVACY_PREMIUM_REQUIRED</td><td>You need a <a href="/api/premium/">Telegram Premium subscription</a> to send a message to this user.</td></tr><tr><td>400</td><td>QUICK_REPLIES_BOT_NOT_ALLOWED</td><td><a href="/api/business/#quick-reply-shortcuts">Quick replies</a> cannot be used by bots.</td></tr><tr><td>400</td><td>QUICK_REPLIES_TOO_MUCH</td><td>A maximum of <a href="/api/config/#quick-replies-limit">appConfig.<code>quick_replies_limit</code></a> shortcuts may be created, the limit was reached.</td></tr><tr><td>500</td><td>RANDOM_ID_DUPLICATE</td><td>You provided a random ID that was already used.</td></tr><tr><td>400</td><td>RANDOM_ID_EMPTY</td><td>Random ID empty.</td></tr><tr><td>400</td><td>REPLY_MESSAGES_TOO_MUCH</td><td>Each shortcut can contain a maximum of <a href="/api/config/#quick-reply-messages-limit">appConfig.<code>quick_reply_messages_limit</code></a> messages, the limit was reached.</td></tr><tr><td>400</td><td>REPLY_TO_INVALID</td><td>The specified <code>reply_to</code> field is invalid.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_TOO_LATE</td><td>You can't schedule a message this far in the future.</td></tr><tr><td>400</td><td>SCHEDULE_TOO_MUCH</td><td>There are too many scheduled messages.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>You can't send messages as the specified peer.</td></tr><tr><td>420</td><td>SLOWMODE_WAIT_%d</td><td>Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat.</td></tr><tr><td>400</td><td>TOPIC_CLOSED</td><td>This topic was closed, you can't send messages to it anymore.</td></tr><tr><td>400</td><td>TOPIC_DELETED</td><td>The specified topic was deleted.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>400</td><td>USER_IS_BLOCKED</td><td>You were blocked by this user.</td></tr></tbody></table>

### Related pages

#### [Message drafts](/api/drafts/)

How to handle message drafts

#### [Stickers and masks](/api/stickers/)

Telegram clients support displaying static and animated stickers.

#### [Bots FAQ](/bots/faq/)

#### [messages.uploadMedia](/method/messages.uploadMedia/)

Upload a file and associate it to a chat (without actually sending it to the chat)

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the business connection ID in the `business_connection_id` parameter.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [File references](/api/file-references/)

How to handle file references.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
