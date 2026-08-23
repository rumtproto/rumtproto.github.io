---
title: "messages.getFeaturedEmojiStickers (метод)"
original: "https://core.telegram.org/method/messages.getFeaturedEmojiStickers"
section: ref
kind: method
layout: layout.njk
---

# messages.getFeaturedEmojiStickers

*Метод из схемы TL.*

> Gets featured custom emoji stickersets.

## Определение TL

```
messages.featuredStickersNotModified#c6dc0c66 count:int = messages.FeaturedStickers;
messages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;
---functions---
messages.getFeaturedEmojiStickers#ecf6736 hash:long = messages.FeaturedStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.FeaturedStickers](/type/messages.FeaturedStickers/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
