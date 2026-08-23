---
title: "messages.getStickers (метод)"
original: "https://core.telegram.org/method/messages.getStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getStickers

*Метод из схемы TL.*

> Get stickers by emoji

## Определение TL

```
messages.stickersNotModified#f1749a22 = messages.Stickers;
messages.stickers#30a6ec7e hash:long stickers:Vector<Document> = messages.Stickers;
---functions---
messages.getStickers#d5a5d3a1 emoticon:string hash:long = messages.Stickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| emoticon | [string](/type/string/) | The emoji |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.Stickers](/type/messages.Stickers/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | EMOTICON_EMPTY | The emoji is empty. |

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
