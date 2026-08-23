---
title: "messages.messageReactionsList (конструктор)"
original: "https://core.telegram.org/constructor/messages.messageReactionsList"
section: ref
kind: constructor
layout: layout.njk
---

# messages.messageReactionsList

*Конструктор из схемы TL.*

> List of peers that reacted to a specific message

## Определение TL

```
messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of reactions matching query |
| reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[MessagePeerReaction](/type/MessagePeerReaction/)> | List of peers that reacted to a specific message |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If set, indicates the next offset to use to load more results by invoking [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/). |

## Тип

[messages.MessageReactionsList](/type/messages.MessageReactionsList/)

## Related pages

#### [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/)

Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction.
