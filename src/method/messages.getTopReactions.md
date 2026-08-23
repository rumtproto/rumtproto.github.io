---
title: "messages.getTopReactions (метод)"
original: "https://core.telegram.org/method/messages.getTopReactions"
section: ref
kind: method
layout: layout.njk
---

# messages.getTopReactions

*Метод из схемы TL.*

> Got popular [message reactions](https://core.telegram.org/api/reactions)

## Определение TL

```
messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;
---functions---
messages.getTopReactions#bb8125ba limit:int hash:long = messages.Reactions;
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
