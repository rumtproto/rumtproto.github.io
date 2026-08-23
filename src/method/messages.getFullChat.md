---
title: "messages.getFullChat (метод)"
original: "https://core.telegram.org/method/messages.getFullChat"
section: ref
kind: method
layout: layout.njk
---

# messages.getFullChat

*Метод из схемы TL.*

> Get full info about a [basic group](https://core.telegram.org/api/channel#basic-groups).

## Определение TL

```
messages.chatFull#e5d7d19c full_chat:ChatFull chats:Vector<Chat> users:Vector<User> = messages.ChatFull;
---functions---
messages.getFullChat#aeb00b34 chat_id:long = messages.ChatFull;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | [Basic group](https://core.telegram.org/api/channel#basic-groups) ID. |

## Результат

[messages.ChatFull](/type/messages.ChatFull/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
