---
title: "channels.getLeftChannels (метод)"
original: "https://core.telegram.org/method/channels.getLeftChannels"
section: ref
kind: method
layout: layout.njk
---

# channels.getLeftChannels

*Метод из схемы TL.*

> Get a list of [channels/supergroups](https://core.telegram.org/api/channel) we left, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout).

## Определение TL

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getLeftChannels#8341ecc0 offset:int = messages.Chats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| offset | [int](/type/int/) | Offset for [pagination](https://core.telegram.org/api/offsets) |

## Результат

[messages.Chats](/type/messages.Chats/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TAKEOUT_INVALID | The specified takeout ID is invalid. |
| 403 | TAKEOUT_REQUIRED | A [takeout](https://core.telegram.org/api/takeout) session needs to be initialized first, [see here » for more info](https://core.telegram.org/api/takeout). |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.

#### [Takeout API](https://core.telegram.org/api/takeout)

Telegram's API allows users to export all of their information through the takeout API.
