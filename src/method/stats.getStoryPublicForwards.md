---
title: "stats.getStoryPublicForwards (метод)"
original: "https://core.telegram.org/method/stats.getStoryPublicForwards"
section: ref
kind: method
layout: layout.njk
---

# stats.getStoryPublicForwards

*Метод из схемы TL.*

> Obtain forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels.

## Определение TL

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;
---functions---
stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | Peer where the story was originally posted |
| id | [int](/type/int/) | [Story](https://core.telegram.org/api/stories) ID |
| offset | [string](/type/string/) | Offset for pagination, from [stats.PublicForwards](/constructor/stats.publicForwards/).next_offset. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[stats.PublicForwards](/type/stats.PublicForwards/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Telegram Stories](https://core.telegram.org/api/stories)

Telegram users and channels can easily post and view stories through the API.

#### [stats.publicForwards](/constructor/stats.publicForwards/)

Contains info about the forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
