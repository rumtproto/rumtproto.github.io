---
title: "messages.MessageReactionsList (тип)"
original: "https://core.telegram.org/type/messages.MessageReactionsList"
section: ref
kind: type
layout: layout.njk
---

# messages.MessageReactionsList

*Тип из схемы TL.*

> List of peers that reacted to a specific message

## Определение TL

```
messages.messageReactionsList#31bd492d flags:# count:int reactions:Vector<MessagePeerReaction> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = messages.MessageReactionsList;

---functions---

messages.getMessageReactionsList#461b3f48 flags:# peer:InputPeer id:int reaction:flags.0?Reaction offset:flags.1?string limit:int = messages.MessageReactionsList;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.messageReactionsList](/constructor/messages.messageReactionsList/) | List of peers that reacted to a specific message |

## Методы

| Method | Описание |
|---|---|
| [messages.getMessageReactionsList](/method/messages.getMessageReactionsList/) | Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction. |
