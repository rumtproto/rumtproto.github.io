---
title: "messages.forwardMessages (метод)"
original: "https://core.telegram.org/method/messages.forwardMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.forwardMessages

*Метод из схемы TL.*

> Forwards messages by their IDs.

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether to send messages silently (no notification will be triggered on the destination clients) |
| background | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether to send the message in background |
| with_my_score | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | When forwarding games, whether to include your score in the game |
| drop_author | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether to forward messages without quoting the original author |
| drop_media_captions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether to strip captions from media |
| noforwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Only for bots, disallows further re-forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/content-protection-delete-by-date-and-more) enabled |
| allow_paid_floodskip | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | Bots only: if set, allows sending up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance. |
| from_peer | [InputPeer](/type/InputPeer/) | Source of messages |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of messages |
| random_id | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Random ID to prevent resending of messages. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| to_peer | [InputPeer](/type/InputPeer/) | Destination peer |
| top_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[int](/type/int/) | Destination [forum topic](https://core.telegram.org/api/forum#forum-topics) |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[InputReplyTo](/type/InputReplyTo/) | Can only contain an [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/), to forward messages to a [monoforum topic](https://core.telegram.org/api/monoforum) (mutually exclusive with top_msg_id). |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Scheduled message date for scheduled messages |
| schedule_repeat_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[int](/type/int/) | Once sent, this message will be automatically re-scheduled to be re-sent again this many seconds in the future, see [here »](https://core.telegram.org/api/scheduled-messages#repeating-scheduled-messages) for more info on repeating scheduled messages. |
| send_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](/type/InputPeer/) | Forward the messages as the specified peer |
| quick_reply_shortcut | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[InputQuickReplyShortcut](/type/InputQuickReplyShortcut/) | Add the messages to the specified [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts), instead. |
| effect | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[long](/type/long/) | Specifies a [message effect »](https://core.telegram.org/api/effects) to use for the message. |
| video_timestamp | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).20?[int](/type/int/) | Start playing the video at the specified timestamp (seconds). |
| allow_paid_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[long](/type/long/) | For [paid messages »](https://core.telegram.org/api/paid-messages), specifies the amount of [Telegram Stars](https://core.telegram.org/api/stars) the user has agreed to pay in order to send the message. |
| suggested_post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).23?[SuggestedPost](/type/SuggestedPost/) | Used to [suggest a post to a channel, see here »](https://core.telegram.org/api/suggested-posts) for more info on the full flow. |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | ALLOW_PAYMENT_REQUIRED | This peer only accepts [paid messages »](https://core.telegram.org/api/paid-messages): this error is only emitted for older layers without paid messages support, so the client must be updated in order to use paid messages. . |
| 403 | ALLOW_PAYMENT_REQUIRED_%d | This peer charges %d [Telegram Stars](https://core.telegram.org/api/stars) per message, but the allow_paid_stars was not set or its value is smaller than %d. |
| 400 | BROADCAST_PUBLIC_VOTERS_FORBIDDEN | You can't forward polls with public voters. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 406 | CHAT_FORWARDS_RESTRICTED | You can't forward messages from a protected chat. |
| 403 | CHAT_GUEST_SEND_FORBIDDEN | You join the discussion group before commenting, see [here »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) for more info. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | CHAT_RESTRICTED | You can't send messages in this chat, you were restricted. |
| 403 | CHAT_SEND_AUDIOS_FORBIDDEN | You can't send audio messages in this chat. |
| 403 | CHAT_SEND_DOCS_FORBIDDEN | You can't send documents in this chat. |
| 403 | CHAT_SEND_GAME_FORBIDDEN | You can't send a game to this chat. |
| 403 | CHAT_SEND_GIFS_FORBIDDEN | You can't send gifs in this chat. |
| 403 | CHAT_SEND_INLINE_FORBIDDEN | You can't send inline messages in this group. |
| 403 | CHAT_SEND_MEDIA_FORBIDDEN | You can't send media in this chat. |
| 403 | CHAT_SEND_PHOTOS_FORBIDDEN | You can't send photos in this chat. |
| 403 | CHAT_SEND_PLAIN_FORBIDDEN | You can't send non-media (text) messages in this chat. |
| 403 | CHAT_SEND_POLL_FORBIDDEN | You can't send polls in this chat. |
| 403 | CHAT_SEND_STICKERS_FORBIDDEN | You can't send stickers in this chat. |
| 403 | CHAT_SEND_VIDEOS_FORBIDDEN | You can't send videos in this chat. |
| 403 | CHAT_SEND_VOICES_FORBIDDEN | You can't send voice recordings in this chat. |
| 403 | CHAT_SEND_WEBPAGE_FORBIDDEN | You can't send webpage previews to this chat. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | GROUPED_MEDIA_INVALID | Invalid grouped media. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MEDIA_EMPTY | The provided media object is invalid. |
| 400 | MEDIA_FILE_INVALID | The specified media file is invalid. |
| 400 | MESSAGE_IDS_EMPTY | No message ids were provided. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 406 | PAYMENT_UNSUPPORTED | A detailed description of the error will be received separately as described [here »](https://core.telegram.org/api/errors/#406-not-acceptable). |
| 406 | PEER_ID_INVALID | The provided peer id is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 406 | PRIVACY_PREMIUM_REQUIRED | You need a [Telegram Premium subscription](https://core.telegram.org/api/premium) to send a message to this user. |
| 400 | QUICK_REPLIES_BOT_NOT_ALLOWED | [Quick replies](https://core.telegram.org/api/business#quick-reply-shortcuts) cannot be used by bots. |
| 400 | QUICK_REPLIES_TOO_MUCH | A maximum of [appConfig.quick_replies_limit](https://core.telegram.org/api/config#quick-replies-limit) shortcuts may be created, the limit was reached. |
| 400 | QUIZ_ANSWER_MISSING | You can forward a quiz while hiding the original author only after choosing an option in the quiz. |
| 500 | RANDOM_ID_DUPLICATE | You provided a random ID that was already used. |
| 400 | RANDOM_ID_INVALID | A provided random ID is invalid. |
| 400 | REPLY_MESSAGES_TOO_MUCH | Each shortcut can contain a maximum of [appConfig.quick_reply_messages_limit](https://core.telegram.org/api/config#quick-reply-messages-limit) messages, the limit was reached. |
| 400 | REPLY_TO_MONOFORUM_PEER_INVALID | The specified inputReplyToMonoForum.monoforum_peer_id is invalid. |
| 400 | SCHEDULE_BOT_NOT_ALLOWED | Bots cannot schedule messages. |
| 400 | SCHEDULE_DATE_TOO_LATE | You can't schedule a message this far in the future. |
| 400 | SCHEDULE_TOO_MUCH | There are too many scheduled messages. |
| 400 | SEND_AS_PEER_INVALID | You can't send messages as the specified peer. |
| 400 | SLOWMODE_MULTI_MSGS_DISABLED | Slowmode is enabled, you cannot forward multiple messages to this group. |
| 420 | SLOWMODE_WAIT_%d | Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. |
| 400 | SUGGESTED_POST_PEER_INVALID | You cannot send suggested posts to non-[monoforum](https://core.telegram.org/api/monoforum) peers. |
| 406 | TOPIC_CLOSED | This topic was closed, you can't send messages to it anymore. |
| 406 | TOPIC_DELETED | The specified topic was deleted. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |
| 400 | USER_BOT_TO_BOT_DISABLED | Bot-to-bot messaging is disabled because one of the two bots hasn't enabled the Bot to Bot setting in @BotFather. |
| 403 | USER_IS_BLOCKED | You were blocked by this user. |
| 400 | USER_IS_BOT | Bots can't send messages to other bots. |
| 403 | VOICE_MESSAGES_FORBIDDEN | This user's privacy settings forbid you from sending voice messages. |
| 400 | YOU_BLOCKED_USER | You blocked this user. |

## Related pages

#### [Bots FAQ](https://core.telegram.org/bots/faq)

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Forum topics](https://core.telegram.org/api/forum)

Telegram allows creating forums with multiple distinct topics.

#### [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/)

Used to send messages to a [monoforum topic](https://core.telegram.org/api/monoforum).

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Error handling](/api/errors/)

How to handle API return errors correctly.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
