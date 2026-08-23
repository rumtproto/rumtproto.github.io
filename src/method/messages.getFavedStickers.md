---
title: "messages.getFavedStickers (метод)"
original: "https://core.telegram.org/method/messages.getFavedStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getFavedStickers

*Метод из схемы TL.*

> Get faved stickers

## Определение TL

```
messages.favedStickersNotModified#9e8fa6d3 = messages.FavedStickers;
messages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;
---functions---
messages.getFavedStickers#4f1aaa9 hash:long = messages.FavedStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.FavedStickers](/type/messages.FavedStickers/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
