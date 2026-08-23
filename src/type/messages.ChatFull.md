---
title: "messages.ChatFull (тип)"
original: "https://core.telegram.org/type/messages.ChatFull"
section: ref
kind: type
layout: layout.njk
---

# messages.ChatFull

*Тип из схемы TL.*

> Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [basic group](https://core.telegram.org/api/channel#basic-groups).

## Определение TL

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;

---functions---

messages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;

channels.getFullChannel#8736a09 channel:InputChannel = messages.ChatFull;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.chatFull](/constructor/messages.chatFull/) | Full info about a [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [basic group](https://core.telegram.org/api/channel#basic-groups). |

## Методы

| Method | Описание |
|---|---|
| [messages.getFullChat](/method/messages.getFullChat/) | Get full info about a [basic group](https://core.telegram.org/api/channel#basic-groups). |
| [channels.getFullChannel](/method/channels.getFullChannel/) | Get full info about a [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [channel](https://core.telegram.org/api/channel#channels) |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
