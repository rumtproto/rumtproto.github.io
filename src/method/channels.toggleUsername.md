---
title: "channels.toggleUsername (метод)"
original: "https://core.telegram.org/method/channels.toggleUsername"
section: ref
kind: method
layout: layout.njk
---

# channels.toggleUsername

*Метод из схемы TL.*

> Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a [supergroup or channel](https://core.telegram.org/api/channel) we own.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.toggleUsername#50f24105 channel:InputChannel username:string active:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | [Supergroup or channel](https://core.telegram.org/api/channel) |
| username | [string](/type/string/) | Username |
| active | [Bool](/type/Bool/) | Whether to activate or deactivate the username |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 400 | USERNAMES_ACTIVE_TOO_MUCH | The maximum number of active usernames was reached. |
| 400 | USERNAME_INVALID | The provided username is not valid. |
| 400 | USERNAME_NOT_MODIFIED | The username was not modified. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
