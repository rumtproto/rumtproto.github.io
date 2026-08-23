---
title: "messages.sendReaction (метод)"
original: "https://core.telegram.org/method/messages.sendReaction"
section: ref
kind: method
layout: layout.njk
---

# messages.sendReaction

*Метод из схемы TL.*

> React to message.
> Starting from layer 159, the reaction will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

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
messages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| big | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether a bigger and longer reaction should be shown |
| add_to_recent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to add this reaction to the [recent reactions list »](https://core.telegram.org/api/reactions#recent-reactions). |
| peer | [InputPeer](/type/InputPeer/) | Peer |
| msg_id | [int](/type/int/) | Message ID to react to |
| reaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Vector](https://core.telegram.org/type/Vector%20t)<[Reaction](/type/Reaction/)> | A list of reactions (doesn't accept [reactionPaid](/constructor/reactionPaid/) constructors, use [messages.sendPaidReaction](/method/messages.sendPaidReaction/) to send paid reactions, instead). |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | CUSTOM_REACTIONS_TOO_MANY | Too many custom reactions were specified. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MESSAGE_NOT_MODIFIED | The provided message data is identical to the previous message data, the message wasn't modified. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 400 | REACTIONS_TOO_MANY | The message already has exactly reactions_uniq_max reaction emojis, you can't react with a new emoji, see [the docs for more info »](https://core.telegram.org/api/config#client-configuration). |
| 400 | REACTION_EMPTY | Empty reaction provided. |
| 400 | REACTION_INVALID | The specified reaction is invalid. |
| 403 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |

## Related pages

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [reactionPaid](/constructor/reactionPaid/)

Represents a [paid Telegram Star reaction »](https://core.telegram.org/api/reactions#paid-reactions).

#### [messages.sendPaidReaction](/method/messages.sendPaidReaction/)

Sends one or more [paid Telegram Star reactions »](https://core.telegram.org/api/reactions#paid-reactions), transferring [Telegram Stars »](https://core.telegram.org/api/stars) to a channel's balance.

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Change the default peer that should be used when sending messages, reactions, poll votes to a specific group

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
