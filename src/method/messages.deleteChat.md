---
title: "messages.deleteChat (метод)"
original: "https://core.telegram.org/method/messages.deleteChat"
section: ref
kind: method
layout: layout.njk
---

# messages.deleteChat

*Метод из схемы TL.*

> Delete a [chat](https://core.telegram.org/api/channel)

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.deleteChat#5bd0ee50 chat_id:long = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | Chat ID |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
