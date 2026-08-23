---
title: "stats.getMessagePublicForwards (метод)"
original: "https://core.telegram.org/method/stats.getMessagePublicForwards"
section: ref
kind: method
layout: layout.njk
---

# stats.getMessagePublicForwards

*Метод из схемы TL.*

> Obtains a list of messages, indicating to which other public channels was a channel message forwarded.  
> Will return a list of [messages](/constructor/message/) with `peer_id` equal to the public channel to which this message was forwarded.

## Определение TL

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;
---functions---
stats.getMessagePublicForwards#5f150144 channel:InputChannel msg_id:int offset:string limit:int = stats.PublicForwards;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Source channel |
| msg_id | [int](/type/int/) | Source message ID |
| offset | [string](/type/string/) | Offset for [pagination](https://core.telegram.org/api/offsets), empty string on first call, then use the next_offset field of the returned constructor (if present, otherwise no more results are available). |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[stats.PublicForwards](/type/stats.PublicForwards/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [message](/constructor/message/)

A message
