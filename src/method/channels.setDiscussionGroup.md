---
title: "channels.setDiscussionGroup (метод)"
original: "https://core.telegram.org/method/channels.setDiscussionGroup"
section: ref
kind: method
layout: layout.njk
---

# channels.setDiscussionGroup

*Метод из схемы TL.*

> Associate a group to a channel as [discussion group](https://core.telegram.org/api/discussion) for that channel

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.setDiscussionGroup#40582bb2 broadcast:InputChannel group:InputChannel = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| broadcast | [InputChannel](/type/InputChannel/) | Channel |
| group | [InputChannel](/type/InputChannel/) | [Discussion group](https://core.telegram.org/api/discussion) to associate to the channel |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BROADCAST_ID_INVALID | Broadcast ID invalid. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | LINK_NOT_MODIFIED | Discussion link not modified. |
| 400 | MEGAGROUP_ID_INVALID | Invalid supergroup ID. |
| 400 | MEGAGROUP_PREHISTORY_HIDDEN | Group with hidden history for new members can't be set as discussion groups. |

## Related pages

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.
