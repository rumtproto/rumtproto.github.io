---
title: "messages.getRecentReactions (метод)"
original: "https://core.telegram.org/method/messages.getRecentReactions"
section: ref
kind: method
layout: layout.njk
---

# messages.getRecentReactions

*Метод из схемы TL.*

> Get recently used [message reactions](https://core.telegram.org/api/reactions)

## Определение TL

```
messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;
---functions---
messages.getRecentReactions#39461db2 limit:int hash:long = messages.Reactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.Reactions](/type/messages.Reactions/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Message reactions](https://core.telegram.org/api/reactions)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
