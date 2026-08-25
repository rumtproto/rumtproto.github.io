---
title: "message"
original: "https://core.telegram.org/constructor/message"
section: ref
description: "Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"message","url":"/constructor/message/"}]
layout: layout.njk
---

# message

A message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/message/" class="current_page_link">message</a>#3ae56482 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:<a href="/type/%23/">#</a> offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:<a href="/type/int/">int</a> from_id:flags.8?<a href="/type/Peer/">Peer</a> from_boosts_applied:flags.29?<a href="/type/int/">int</a> from_rank:flags2.12?<a href="/type/string/">string</a> peer_id:<a href="/type/Peer/">Peer</a> saved_peer_id:flags.28?<a href="/type/Peer/">Peer</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> via_business_bot_id:flags2.0?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> date:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> reply_markup:flags.6?<a href="/type/ReplyMarkup/">ReplyMarkup</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; views:flags.10?<a href="/type/int/">int</a> forwards:flags.10?<a href="/type/int/">int</a> replies:flags.23?<a href="/type/MessageReplies/">MessageReplies</a> edit_date:flags.15?<a href="/type/int/">int</a> post_author:flags.16?<a href="/type/string/">string</a> grouped_id:flags.17?<a href="/type/long/">long</a> reactions:flags.20?<a href="/type/MessageReactions/">MessageReactions</a> restriction_reason:flags.22?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> quick_reply_shortcut_id:flags.30?<a href="/type/int/">int</a> effect:flags2.2?<a href="/type/long/">long</a> factcheck:flags2.3?<a href="/type/FactCheck/">FactCheck</a> report_delivery_until_date:flags2.5?<a href="/type/int/">int</a> paid_message_stars:flags2.6?<a href="/type/long/">long</a> suggested_post:flags2.7?<a href="/type/SuggestedPost/">SuggestedPost</a> schedule_repeat_period:flags2.10?<a href="/type/int/">int</a> summary_from_language:flags2.11?<a href="/type/string/">string</a> = <a href="/type/Message/">Message</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Is this an outgoing message</td></tr><tr><td><strong>mentioned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether we were <a href="/api/mentions/">mentioned</a> in this message</td></tr><tr><td><strong>media_unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether there are unread media attachments in this message, see <a href="/api/views/#read-message-contents">here »</a> for more info on how to clear this flag.</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td>Whether this is a silent message (no notification triggered)</td></tr><tr><td><strong>post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/constructor/true/">true</a></td><td>Whether this is a channel post</td></tr><tr><td><strong>from_scheduled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/constructor/true/">true</a></td><td>Whether this is a <a href="/api/scheduled-messages/">scheduled message</a></td></tr><tr><td><strong>legacy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>This is a legacy message: it has to be refetched with the new layer</td></tr><tr><td><strong>edit_hide</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.21?<a href="/constructor/true/">true</a></td><td>Whether the message should be shown as not modified to the user, even if an edit date is present</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.24?<a href="/constructor/true/">true</a></td><td>Whether this message is <a href="/api/pin/">pinned</a></td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.26?<a href="/constructor/true/">true</a></td><td>Whether this message is <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">protected</a> and thus cannot be forwarded; clients should also prevent users from saving attached media (i.e. videos should only be streamed, photos should be kept in RAM, et cetera).</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.27?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>flags2</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>offline</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.1?<a href="/constructor/true/">true</a></td><td>If set, the message was sent because of a scheduled action by the message sender, for example, as away, or a greeting service message.</td></tr><tr><td><strong>video_processing_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.4?<a href="/constructor/true/">true</a></td><td>The video contained in the message is currently being processed by the server (i.e. to generate alternative qualities, that will be contained in the final <a href="/constructor/messageMediaDocument/">messageMediaDocument</a>.<code>alt_document</code>), and will be sent once the video is processed, which will happen approximately at the specified <code>date</code> (i.e. messages with this flag set should be treated similarly to <a href="/api/scheduled-messages/">scheduled messages</a>, but instead of the scheduled date, <code>date</code> contains the estimated conversion date).<br>See <a href="/api/files/#video-qualities">here »</a> for more info.</td></tr><tr><td><strong>paid_suggested_post_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.8?<a href="/constructor/true/">true</a></td><td>Set if this is a <a href="/api/suggested-posts/">suggested channel post »</a> that was paid using <a href="/api/stars/">Telegram Stars</a>.</td></tr><tr><td><strong>paid_suggested_post_ton</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.9?<a href="/constructor/true/">true</a></td><td>Set if this is a <a href="/api/suggested-posts/">suggested channel post »</a> that was paid using Grams.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the message</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/Peer/">Peer</a></td><td>ID of the sender of the message</td></tr><tr><td><strong>from_boosts_applied</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.29?<a href="/type/int/">int</a></td><td>Supergroups only, contains the number of <a href="/api/boost/">boosts</a> this user has given the current supergroup, and should be shown in the UI in the header of the message.<br>Only present for incoming messages from non-anonymous supergroup members that have boosted the supergroup.<br>Note that this counter should be locally overridden for non-anonymous <em>outgoing</em> messages, according to the current value of <a href="/constructor/channelFull/">channelFull</a>.<code>boosts_applied</code>, to ensure the value is correct even for messages sent by the current user before a supergroup was boosted (or after a boost has expired or the number of boosts has changed); do not update this value for incoming messages from other users, even if their boosts have changed.</td></tr><tr><td><strong>from_rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.12?<a href="/type/string/">string</a></td><td>Only in <a href="/api/channel/#supergroups">supergroups »</a> (never basic groups, where this information is contained <a href="/api/rank/">elsewhere »</a>), contains the sender's <a href="/api/rank/">tag »</a>.</td></tr><tr><td><strong>peer_id</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Peer ID, the chat where this message was sent</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.28?<a href="/type/Peer/">Peer</a></td><td>Messages from a <a href="/api/saved-messages/">saved messages dialog »</a> will have <code>peer</code>=<a href="/constructor/inputPeerSelf/">inputPeerSelf</a> and the <code>saved_peer_id</code> flag set to the ID of the saved dialog.<br>Messages from a <a href="/api/monoforum/">monoforum »</a> will have <code>peer</code>=ID of the monoforum and the <code>saved_peer_id</code> flag set to the ID of a topic.</td></tr><tr><td><strong>fwd_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a></td><td>Info about forwarded messages</td></tr><tr><td><strong>via_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/long/">long</a></td><td>ID of the inline bot that generated the message</td></tr><tr><td><strong>via_business_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.0?<a href="/type/long/">long</a></td><td>Whether the message was sent by the <a href="/api/bots/connected-business-bots/">business bot</a> specified in <code>via_bot_id</code> on behalf of the user.</td></tr><tr><td><strong>guestchat_via_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.19?<a href="/type/Peer/">Peer</a></td><td>If the message was posted by a <a href="/api/bots/guest-mode/#guest-messages">guest bot »</a>, the peer on whose behalf the bot sent the message.</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a></td><td>Reply information</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of the message</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The message</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/MessageMedia/">MessageMedia</a></td><td>Media attachment</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Reply markup (bot/inline keyboards)</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td>Message <a href="/api/entities/">entities</a> for styled text</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>View count for channel posts</td></tr><tr><td><strong>forwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>Forward counter</td></tr><tr><td><strong>replies</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.23?<a href="/type/MessageReplies/">MessageReplies</a></td><td>Info about <a href="/api/threads/">post comments (for channels) or message replies (for groups)</a></td></tr><tr><td><strong>edit_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/int/">int</a></td><td>Last edit date of this message</td></tr><tr><td><strong>post_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/type/string/">string</a></td><td>Name of the author of this message for channel posts (with signatures enabled)</td></tr><tr><td><strong>grouped_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/long/">long</a></td><td>Multiple media messages sent using <a href="/method/messages.sendMultiMedia/">messages.sendMultiMedia</a> with the same grouped ID indicate an <a href="/api/files/#albums-grouped-media">album or media group</a></td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.20?<a href="/type/MessageReactions/">MessageReactions</a></td><td>Reactions to this message</td></tr><tr><td><strong>restriction_reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.22?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RestrictionReason/">RestrictionReason</a>&gt;</td><td>Contains the reason why access to this message must be restricted.</td></tr><tr><td><strong>ttl_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.25?<a href="/type/int/">int</a></td><td>Time To Live of the message, once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well.</td></tr><tr><td><strong>quick_reply_shortcut_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.30?<a href="/type/int/">int</a></td><td>If set, this message is a <a href="/api/business/#quick-reply-shortcuts">quick reply shortcut message »</a> (note that quick reply shortcut messages <em>sent</em> to a private chat will <em>not</em> have this field set).</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.2?<a href="/type/long/">long</a></td><td>A <a href="/api/effects/">message effect that should be played as specified here »</a>.</td></tr><tr><td><strong>factcheck</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.3?<a href="/type/FactCheck/">FactCheck</a></td><td>Represents a <a href="/api/factcheck/">fact-check »</a>.</td></tr><tr><td><strong>report_delivery_until_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.5?<a href="/type/int/">int</a></td><td>Used for <a href="/blog/star-messages-gateway-2-0-and-more/#save-even-more-on-user-verification">Telegram Gateway verification messages</a>: if set and the current unixtime is bigger than the specified unixtime, invoke <a href="/method/messages.reportMessagesDelivery/">messages.reportMessagesDelivery</a> passing the ID and the peer of this message as soon as it is received by the client (optionally batching requests for the same peer).</td></tr><tr><td><strong>paid_message_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.6?<a href="/type/long/">long</a></td><td>The amount of stars the <strong>sender</strong> has paid to send the message, see <a href="/api/paid-messages/">here »</a> for more info.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.7?<a href="/type/SuggestedPost/">SuggestedPost</a></td><td>Used to <a href="/api/suggested-posts/">suggest a post to a channel, see here »</a> for more info on the full flow.</td></tr><tr><td><strong>schedule_repeat_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.10?<a href="/type/int/">int</a></td><td>Once sent, this message will be automatically re-scheduled to be re-sent again this many seconds in the future, see <a href="/api/scheduled-messages/#repeating-scheduled-messages">here »</a> for more info on repeating scheduled messages.</td></tr><tr><td><strong>summary_from_language</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags2</a>.11?<a href="/type/string/">string</a></td><td>If set, clients should offer a <a href="/api/ai/#summarize-messages">summarization button »</a> for this message; contains the two-letter ISO 639-1 language code of the inferred language of the current message.</td></tr></tbody></table>

### Type

[Message](/type/Message/)

### Related pages

#### [Mentions and replies](/api/mentions/)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [Views and read metrics](/api/views/)

Clients should report read state, message views and music listens using a specific set of methods.

#### [Scheduled messages](/api/scheduled-messages/)

Telegram allows scheduling messages

#### [Pinned messages](/api/pin/)

Telegram allows pinning multiple messages on top of a specific chat.

#### [messageMediaDocument](/constructor/messageMediaDocument/)

Document (video, audio, voice, sticker, any media type except photo)

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups) or [gigagroup](/api/channel/#gigagroups).

When updating the [local peer database »](/api/peers/), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Guest mode for bots](/api/bots/guest-mode/)

Guest bots can be queried by username from **any** non-secret private chat, group and supergroup (except for groups/supergroups with [content protection »](/api/content-protection/#for-groups-and-channels) enabled), posting their results directly into the chat, even if they're not a member.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Message threads](/api/threads/)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Send an [album or grouped media](/api/files/#albums-grouped-media)

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.

#### [Fact checks](/api/factcheck/)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.

#### [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/)

Used for [Telegram Gateway verification messages »](/blog/star-messages-gateway-2-0-and-more/#save-even-more-on-user-verification): indicate to the server that one or more [message](/constructor/message/)s were received by the client, if requested by the [message](/constructor/message/).**report\_delivery\_until\_date** flag or the equivalent flag in [push notifications](/api/push-updates/).

#### [Paid messages](/api/paid-messages/)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
