---
title: "messages.getDefaultTagReactions (метод)"
original: "https://core.telegram.org/method/messages.getDefaultTagReactions"
section: ref
kind: method
layout: layout.njk
---

# messages.getDefaultTagReactions

*Метод из схемы TL.*

> Fetch a default recommended list of [saved message tag reactions](https://core.telegram.org/api/saved-messages#tags).

## Определение TL

```
messages.reactionsNotModified#b06fdbdf = messages.Reactions;
messages.reactions#eafdf716 hash:long reactions:Vector<Reaction> = messages.Reactions;
---functions---
messages.getDefaultTagReactions#bdf93428 hash:long = messages.Reactions;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.Reactions](/type/messages.Reactions/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
