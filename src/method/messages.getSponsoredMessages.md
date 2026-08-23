---
title: "messages.getSponsoredMessages (метод)"
original: "https://core.telegram.org/method/messages.getSponsoredMessages"
section: ref
kind: method
layout: layout.njk
---

# messages.getSponsoredMessages

*Метод из схемы TL.*

> Get a list of [sponsored messages for a peer, see here »](https://core.telegram.org/api/sponsored-messages) for more info.

## Определение TL

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
messages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;
---functions---
messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [InputPeer](/type/InputPeer/) | The currently open channel/bot. |
| msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Must be set when fetching [sponsored messages to show on channel videos »](https://core.telegram.org/api/sponsored-messages#getting-sponsored-video-advertisements). |

## Результат

[messages.SponsoredMessages](/type/messages.SponsoredMessages/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |

## Related pages

#### [Sponsored messages](https://core.telegram.org/api/sponsored-messages)

How clients should fetch, display and interact with sponsored messages.
