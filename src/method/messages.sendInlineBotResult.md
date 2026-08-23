---
title: "messages.sendInlineBotResult (метод)"
original: "https://core.telegram.org/method/messages.sendInlineBotResult"
section: ref
kind: method
layout: layout.njk
---

# messages.sendInlineBotResult

*Метод из схемы TL.*

> Send a result obtained using [messages.getInlineBotResults](/method/messages.getInlineBotResults/).

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
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether to send the message silently (no notification will be triggered on the other client) |
| background | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether to send the message in background |
| clear_draft | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether to clear the [draft](https://core.telegram.org/api/drafts) |
| hide_via | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether to hide the via @botname in the resulting message (only for bot usernames encountered in the [config](/constructor/config/)) |
| peer | [InputPeer](/type/InputPeer/) | Destination |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputReplyTo](/type/InputReplyTo/) | If set, indicates that the message should be sent in reply to the specified message or story. |
| random_id | [long](/type/long/) | Random ID to avoid resending the same query. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| query_id | [long](/type/long/) | Query ID from [messages.getInlineBotResults](/method/messages.getInlineBotResults/) |
| id | [string](/type/string/) | Result ID from [messages.getInlineBotResults](/method/messages.getInlineBotResults/) |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Scheduled message date for scheduled messages |
| send_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](/type/InputPeer/) | Send this message as the specified peer |
| quick_reply_shortcut | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[InputQuickReplyShortcut](/type/InputQuickReplyShortcut/) | Add the message to the specified [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts), instead. |
| allow_paid_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[long](/type/long/) | For [paid messages »](https://core.telegram.org/api/paid-messages), specifies the amount of [Telegram Stars](https://core.telegram.org/api/stars) the user has agreed to pay in order to send the message. |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | ALLOW_PAYMENT_REQUIRED_%d | This peer charges %d [Telegram Stars](https://core.telegram.org/api/stars) per message, but the allow_paid_stars was not set or its value is smaller than %d. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 403 | CHAT_GUEST_SEND_FORBIDDEN | You join the discussion group before commenting, see [here »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) for more info. |
| 400 | CHAT_RESTRICTED | You can't send messages in this chat, you were restricted. |
| 403 | CHAT_SEND_AUDIOS_FORBIDDEN | You can't send audio messages in this chat. |
| 403 | CHAT_SEND_GAME_FORBIDDEN | You can't send a game to this chat. |
| 403 | CHAT_SEND_GIFS_FORBIDDEN | You can't send gifs in this chat. |
| 403 | CHAT_SEND_INLINE_FORBIDDEN | You can't send inline messages in this group. |
| 403 | CHAT_SEND_MEDIA_FORBIDDEN | You can't send media in this chat. |
| 403 | CHAT_SEND_PHOTOS_FORBIDDEN | You can't send photos in this chat. |
| 403 | CHAT_SEND_PLAIN_FORBIDDEN | You can't send non-media (text) messages in this chat. |
| 403 | CHAT_SEND_STICKERS_FORBIDDEN | You can't send stickers in this chat. |
| 403 | CHAT_SEND_VOICES_FORBIDDEN | You can't send voice recordings in this chat. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | ENTITY_BOUNDS_INVALID | A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here »](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length. |
| 400 | INLINE_RESULT_EXPIRED | The inline query expired. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MEDIA_EMPTY | The provided media object is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 403 | PRIVACY_PREMIUM_REQUIRED | You need a [Telegram Premium subscription](https://core.telegram.org/api/premium) to send a message to this user. |
| 400 | QUERY_ID_EMPTY | The query ID is empty. |
| 400 | QUICK_REPLIES_TOO_MUCH | A maximum of [appConfig.quick_replies_limit](https://core.telegram.org/api/config#quick-replies-limit) shortcuts may be created, the limit was reached. |
| 500 | RANDOM_ID_DUPLICATE | You provided a random ID that was already used. |
| 400 | REPLY_MESSAGES_TOO_MUCH | Each shortcut can contain a maximum of [appConfig.quick_reply_messages_limit](https://core.telegram.org/api/config#quick-reply-messages-limit) messages, the limit was reached. |
| 400 | RESULT_ID_EMPTY | Result ID empty. |
| 400 | RESULT_ID_INVALID | One of the specified result IDs is invalid. |
| 400 | SCHEDULE_DATE_TOO_LATE | You can't schedule a message this far in the future. |
| 400 | SCHEDULE_TOO_MUCH | There are too many scheduled messages. |
| 400 | SEND_AS_PEER_INVALID | You can't send messages as the specified peer. |
| 500 | SEND_MEDIA_INVALID | The specified media is invalid. |
| 420 | SLOWMODE_WAIT_%d | Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. |
| 400 | TOPIC_DELETED | The specified topic was deleted. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |
| 400 | VOICE_MESSAGES_FORBIDDEN | This user's privacy settings forbid you from sending voice messages. |
| 400 | WEBPAGE_CURL_FAILED | Failure while fetching the webpage with cURL. |
| 400 | WEBPAGE_MEDIA_EMPTY | Webpage media empty. |
| 400 | YOU_BLOCKED_USER | You blocked this user. |

## Related pages

#### [Message drafts](https://core.telegram.org/api/drafts)

How to handle message drafts

#### [config](/constructor/config/)

Current configuration

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [messages.getInlineBotResults](/method/messages.getInlineBotResults/)

Query an inline bot

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
