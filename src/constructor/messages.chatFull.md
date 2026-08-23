---
title: "messages.chatFull (конструктор)"
original: "https://core.telegram.org/constructor/messages.chatFull"
section: ref
kind: constructor
layout: layout.njk
---

# messages.chatFull

*Конструктор из схемы TL.*

> Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [basic group](https://core.telegram.org/api/channel#basic-groups).

## Определение TL

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| full_chat | [ChatFull](/type/ChatFull/) | Full info |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[messages.ChatFull](/type/messages.ChatFull/)

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
