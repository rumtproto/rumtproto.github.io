---
title: "messages.favedStickers (конструктор)"
original: "https://core.telegram.org/constructor/messages.favedStickers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.favedStickers

*Конструктор из схемы TL.*

> Favorited stickers

## Определение TL

```
messages.favedStickers#2cb51097 hash:long packs:Vector<StickerPack> stickers:Vector<Document> = messages.FavedStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| packs | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerPack](/type/StickerPack/)> | Emojis associated to stickers |
| stickers | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Favorited stickers |

## Тип

[messages.FavedStickers](/type/messages.FavedStickers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
