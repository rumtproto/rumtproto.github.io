---
title: "messages.editChatAdmin (метод)"
original: "https://core.telegram.org/method/messages.editChatAdmin"
section: ref
kind: method
layout: layout.njk
---

# messages.editChatAdmin

*Метод из схемы TL.*

> Make a user admin in a [basic group](https://core.telegram.org/api/channel#basic-groups).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.editChatAdmin#a85bd1c2 chat_id:long user_id:InputUser is_admin:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| chat_id | [long](/type/long/) | The ID of the group |
| user_id | [InputUser](/type/InputUser/) | The user to make admin |
| is_admin | [Bool](/type/Bool/) | Whether to make them admin |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
| 400 | USER_NOT_PARTICIPANT | You're not a member of this supergroup/channel. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
