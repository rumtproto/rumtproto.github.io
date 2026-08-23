---
title: "messages.editChatAbout (метод)"
original: "https://core.telegram.org/method/messages.editChatAbout"
section: ref
kind: method
layout: layout.njk
---

# messages.editChatAbout

*Метод из схемы TL.*

> Edit the description of a [group/supergroup/channel](https://core.telegram.org/api/channel).

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.editChatAbout#def60797 peer:InputPeer about:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The [group/supergroup/channel](https://core.telegram.org/api/channel). |
| about | [string](/type/string/) | The new description |

## Результат

[Bool](/type/Bool/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | CHAT_ABOUT_NOT_MODIFIED | About text has not changed. |
| 400 | CHAT_ABOUT_TOO_LONG | Chat about too long. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_ID_INVALID | The provided chat id is invalid. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
