---
title: "messages.SponsoredMessages (тип)"
original: "https://core.telegram.org/type/messages.SponsoredMessages"
section: ref
kind: type
layout: layout.njk
---

# messages.SponsoredMessages

*Тип из схемы TL.*

> A set of [sponsored messages](https://core.telegram.org/api/sponsored-messages) associated with a channel

## Определение TL

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
messages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;

---functions---

messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/) | A set of sponsored messages associated to a channel |
| [messages.sponsoredMessagesEmpty](/constructor/messages.sponsoredMessagesEmpty/) | No sponsored messages are available. |

## Методы

| Method | Описание |
|---|---|
| [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/) | Get a list of [sponsored messages for a peer, see here »](https://core.telegram.org/api/sponsored-messages) for more info. |
