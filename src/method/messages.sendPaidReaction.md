---
title: "messages.sendPaidReaction (метод)"
original: "https://core.telegram.org/method/messages.sendPaidReaction"
section: ref
kind: method
layout: layout.njk
---

# messages.sendPaidReaction

*Метод из схемы TL.*

> Sends one or more [paid Telegram Star reactions »](https://core.telegram.org/api/reactions#paid-reactions), transferring [Telegram Stars »](https://core.telegram.org/api/stars) to a channel's balance.

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
messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | The channel |
| msg_id | [int](/type/int/) | The message to react to |
| count | [int](/type/int/) | The number of [stars](https://core.telegram.org/api/stars) to send (each will increment the reaction counter by one). |
| random_id | [long](/type/long/) | Unique client message ID required to prevent message resending. Note: this argument must be composed of a 64-bit integer where the lower 32 bits are random, and the higher 32 bits are equal to the current unixtime, i.e. `uint64_t random_id = (time() << 32). See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| private | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PaidReactionPrivacy](/type/PaidReactionPrivacy/) | Each post with star reactions has a leaderboard with the top senders, but users can opt out of appearing there if they prefer more privacy. Not populating this field will use the default reaction privacy, stored on the server and synced to clients using [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/) (see [here](https://core.telegram.org/api/reactions#paid-reaction-privacy) for more info). |

## Результат

[Updates](/type/Updates/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BALANCE_TOO_LOW | The transaction cannot be completed because the current [Telegram Stars balance](https://core.telegram.org/api/stars) is too low. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | RANDOM_ID_EMPTY | Random ID empty. |
| 400 | RANDOM_ID_EXPIRED | The specified random_id was expired (most likely it didn't follow the required `uint64_t random_id = (time() << 32) |
| 400 | REACTIONS_COUNT_INVALID | The specified number of reactions is invalid. |
| 400 | SEND_AS_PEER_INVALID | You can't send messages as the specified peer. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/)

Contains the current [default paid reaction privacy, see here »](https://core.telegram.org/api/reactions#paid-reactions) for more info.

Clients should invoke [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) on startup to fetch the current default reaction privacy because this update is only sent to currently online sessions and cannot be fetched using getDifference on client startup.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
