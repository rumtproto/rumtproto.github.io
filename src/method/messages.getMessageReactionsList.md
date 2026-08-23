---
title: "messages.getMessageReactionsList (метод)"
original: "https://core.telegram.org/method/messages.getMessageReactionsList"
section: ref
kind: method
layout: layout.njk
---

# messages.getMessageReactionsList

*Метод из схемы TL.*

> Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction.

## Определение TL

```
messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;
---functions---
messages.getMessageReactionsList#461b3f48 flags:# peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = messages.MessageReactionsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | Peer |
| id | [int](/type/int/) | Message ID |
| reaction | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Reaction](/type/Reaction/) | Get only reactions of this type |
| offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Offset for pagination (taken from the next_offset field of the returned [messages.MessageReactionsList](/type/messages.MessageReactionsList/)); empty in the first request. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[messages.MessageReactionsList](/type/messages.MessageReactionsList/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | BROADCAST_FORBIDDEN | Channel poll voters and reactions cannot be fetched to prevent deanonymization. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |

## Related pages

#### [messages.MessageReactionsList](/type/messages.MessageReactionsList/)

List of peers that reacted to a specific message

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
