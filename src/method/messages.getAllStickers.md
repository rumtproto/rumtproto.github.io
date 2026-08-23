---
title: "messages.getAllStickers (метод)"
original: "https://core.telegram.org/method/messages.getAllStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getAllStickers

*Метод из схемы TL.*

> Get all installed stickers

## Определение TL

```
messages.allStickersNotModified#e86602c3 = messages.AllStickers;
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;
---functions---
messages.getAllStickers#b8a0a1a8 hash:long = messages.AllStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.AllStickers](/type/messages.AllStickers/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
