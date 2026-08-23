---
title: "messages.readSavedHistory (метод)"
original: "https://core.telegram.org/method/messages.readSavedHistory"
section: ref
kind: method
layout: layout.njk
---

# messages.readSavedHistory

*Метод из схемы TL.*

> Mark messages as read in a [monoforum topic »](https://core.telegram.org/api/monoforum).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.readSavedHistory#ba4a3b5b parent_peer:InputPeer peer:InputPeer max_id:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| parent_peer | [InputPeer](/type/InputPeer/) | ID of the monoforum group. |
| peer | [InputPeer](/type/InputPeer/) | ID of the topic. |
| max_id | [int](/type/int/) | If a positive value is passed, only messages with identifiers less than or equal to the given one will be read. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | PARENT_PEER_INVALID | The specified parent_peer is invalid. |

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
