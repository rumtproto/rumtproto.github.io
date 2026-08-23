---
title: "message (конструктор)"
original: "https://core.telegram.org/constructor/message"
section: ref
kind: constructor
layout: layout.njk
---

# message

*Конструктор из схемы TL.*

> A message

## Определение TL

```
message#3ae56482 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| out | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Is this an outgoing message |
| mentioned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether we were [mentioned](https://core.telegram.org/api/mentions) in this message |
| media_unread | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether there are unread media attachments in this message, see [here »](https://core.telegram.org/api/views#read-message-contents) for more info on how to clear this flag. |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether this is a silent message (no notification triggered) |
| post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Whether this is a channel post |
| from_scheduled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[true](/constructor/true/) | Whether this is a [scheduled message](https://core.telegram.org/api/scheduled-messages) |
| legacy | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | This is a legacy message: it has to be refetched with the new layer |
| edit_hide | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[true](/constructor/true/) | Whether the message should be shown as not modified to the user, even if an edit date is present |
| pinned | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[true](/constructor/true/) | Whether this message is [pinned](https://core.telegram.org/api/pin) |
| noforwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).26?[true](/constructor/true/) | Whether this message is [protected](https://telegram.org/blog/content-protection-delete-by-date-and-more) and thus cannot be forwarded; clients should also prevent users from saving attached media (i.e. videos should only be streamed, photos should be kept in RAM, et cetera). |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).27?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| flags2 | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| offline | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, the message was sent because of a scheduled action by the message sender, for example, as away, or a greeting service message. |
| video_processing_pending | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | The video contained in the message is currently being processed by the server (i.e. to generate alternative qualities, that will be contained in the final [messageMediaDocument](/constructor/messageMediaDocument/).alt_document), and will be sent once the video is processed, which will happen approximately at the specified date (i.e. messages with this flag set should be treated similarly to [scheduled messages](https://core.telegram.org/api/scheduled-messages), but instead of the scheduled date, date contains the estimated conversion date). See [here »](https://core.telegram.org/api/files/#video-qualities) for more info. |
| paid_suggested_post_stars | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Set if this is a [suggested channel post »](https://core.telegram.org/api/suggested-posts) that was paid using [Telegram Stars](https://core.telegram.org/api/stars). |
| paid_suggested_post_ton | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Set if this is a [suggested channel post »](https://core.telegram.org/api/suggested-posts) that was paid using Grams. |
| id | [int](/type/int/) | ID of the message |
| from_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[Peer](/type/Peer/) | ID of the sender of the message |
| from_boosts_applied | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).29?[int](/type/int/) | Supergroups only, contains the number of [boosts](https://core.telegram.org/api/boost) this user has given the current supergroup, and should be shown in the UI in the header of the message. Only present for incoming messages from non-anonymous supergroup members that have boosted the supergroup. Note that this counter should be locally overridden for non-anonymous outgoing messages, according to the current value of [channelFull](/constructor/channelFull/).boosts_applied, to ensure the value is correct even for messages sent by the current user before a supergroup was boosted (or after a boost has expired or the number of boosts has changed); do not update this value for incoming messages from other users, even if their boosts have changed. |
| from_rank | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[string](/type/string/) | Only in [supergroups »](https://core.telegram.org/api/channel#supergroups) (never basic groups, where this information is contained [elsewhere »](https://core.telegram.org/api/rank)), contains the sender's [tag »](https://core.telegram.org/api/rank). |
| peer_id | [Peer](/type/Peer/) | Peer ID, the chat where this message was sent |
| saved_peer_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[Peer](/type/Peer/) | Messages from a [saved messages dialog »](https://core.telegram.org/api/saved-messages) will have peer=[inputPeerSelf](/constructor/inputPeerSelf/) and the saved_peer_id flag set to the ID of the saved dialog. Messages from a [monoforum »](https://core.telegram.org/api/monoforum) will have peer=ID of the monoforum and the saved_peer_id flag set to the ID of a topic. |
| fwd_from | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[MessageFwdHeader](/type/MessageFwdHeader/) | Info about forwarded messages |
| via_bot_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[long](/type/long/) | ID of the inline bot that generated the message |
| via_business_bot_id | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | Whether the message was sent by the [business bot](https://core.telegram.org/api/bots/connected-business-bots) specified in via_bot_id on behalf of the user. |
| guestchat_via_from | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[Peer](/type/Peer/) | If the message was posted by a [guest bot »](https://core.telegram.org/api/bots/guest-mode#guest-messages), the peer on whose behalf the bot sent the message. |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[MessageReplyHeader](/type/MessageReplyHeader/) | Reply information |
| date | [int](/type/int/) | Date of the message |
| message | [string](/type/string/) | The message |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[MessageMedia](/type/MessageMedia/) | Media attachment |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[ReplyMarkup](/type/ReplyMarkup/) | Reply markup (bot/inline keyboards) |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | Message [entities](https://core.telegram.org/api/entities) for styled text |
| views | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | View count for channel posts |
| forwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Forward counter |
| replies | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[MessageReplies](/type/MessageReplies/) | Info about [post comments (for channels) or message replies (for groups)](https://core.telegram.org/api/threads) |
| edit_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](/type/int/) | Last edit date of this message |
| post_author | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[string](/type/string/) | Name of the author of this message for channel posts (with signatures enabled) |
| grouped_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[long](/type/long/) | Multiple media messages sent using [messages.sendMultiMedia](/method/messages.sendMultiMedia/) with the same grouped ID indicate an [album or media group](https://core.telegram.org/api/files/#albums-grouped-media) |
| reactions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[MessageReactions](/type/MessageReactions/) | Reactions to this message |
| restriction_reason | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[Vector](https://core.telegram.org/type/Vector%20t)<[RestrictionReason](/type/RestrictionReason/)> | Contains the reason why access to this message must be restricted. |
| ttl_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[int](/type/int/) | Time To Live of the message, once message.date+message.ttl_period === time(), the message will be deleted on the server, and must be deleted locally as well. |
| quick_reply_shortcut_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).30?[int](/type/int/) | If set, this message is a [quick reply shortcut message »](https://core.telegram.org/api/business#quick-reply-shortcuts) (note that quick reply shortcut messages sent to a private chat will not have this field set). |
| effect | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[long](/type/long/) | A [message effect that should be played as specified here »](https://core.telegram.org/api/effects). |
| factcheck | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[FactCheck](/type/FactCheck/) | Represents a [fact-check »](https://core.telegram.org/api/factcheck). |
| report_delivery_until_date | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | Used for [Telegram Gateway verification messages](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): if set and the current unixtime is bigger than the specified unixtime, invoke [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/) passing the ID and the peer of this message as soon as it is received by the client (optionally batching requests for the same peer). |
| paid_message_stars | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[long](/type/long/) | The amount of stars the sender has paid to send the message, see [here »](https://core.telegram.org/api/paid-messages) for more info. |
| suggested_post | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[SuggestedPost](/type/SuggestedPost/) | Used to [suggest a post to a channel, see here »](https://core.telegram.org/api/suggested-posts) for more info on the full flow. |
| schedule_repeat_period | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Once sent, this message will be automatically re-scheduled to be re-sent again this many seconds in the future, see [here »](https://core.telegram.org/api/scheduled-messages#repeating-scheduled-messages) for more info on repeating scheduled messages. |
| summary_from_language | [flags2](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](/type/string/) | If set, clients should offer a [summarization button »](https://core.telegram.org/api/ai#summarize-messages) for this message; contains the two-letter ISO 639-1 language code of the inferred language of the current message. |

## Тип

[Message](/type/Message/)

## Related pages

#### [Mentions and replies](https://core.telegram.org/api/mentions)

Telegram allows mentioning other users in case of urgent duckling matters, and quickly navigating to those mentions in order to read them as swiftly as possible.

#### [Views and read metrics](https://core.telegram.org/api/views)

Clients should report read state, message views and music listens using a specific set of methods.

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages

#### [Pinned messages](https://core.telegram.org/api/pin)

Telegram allows pinning multiple messages on top of a specific chat.

#### [messageMediaDocument](/constructor/messageMediaDocument/)

Document (video, audio, voice, sticker, any media type except photo)

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [channelFull](/constructor/channelFull/)

Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups).

When updating the [local peer database »](https://core.telegram.org/api/peers), all fields from the newly received constructor take priority over the old constructor cached locally (including by removing fields that aren't set in the new constructor).

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Group participant tags](https://core.telegram.org/api/rank)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [Guest mode for bots](https://core.telegram.org/api/bots/guest-mode)

Guest bots can be queried by username from **any** non-secret private chat, group and supergroup (except for groups/supergroups with [content protection »](https://core.telegram.org/api/content-protection#for-groups-and-channels) enabled), posting their results directly into the chat, even if they're not a member.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Message threads](https://core.telegram.org/api/threads)

Telegram allows commenting on a channel post or on a generic supergroup message, thanks to message threads.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Send an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media)

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.

#### [Fact checks](https://core.telegram.org/api/factcheck)

Telegram clients support displaying fact-checks added to messages by independent fact-checkers.

#### [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/)

Used for [Telegram Gateway verification messages »](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): indicate to the server that one or more [message](/constructor/message/)s were received by the client, if requested by the [message](/constructor/message/).**report\_delivery\_until\_date** flag or the equivalent flag in [push notifications](https://core.telegram.org/api/push-updates).

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [AI features](https://core.telegram.org/api/ai)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.
