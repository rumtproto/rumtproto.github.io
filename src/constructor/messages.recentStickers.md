---
title: "messages.recentStickers (конструктор)"
original: "https://core.telegram.org/constructor/messages.recentStickers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.recentStickers

*Конструктор из схемы TL.*

> Recently used stickers

## Определение TL

```
messages.recentStickers#88d37c56 hash:long packs:Vector<StickerPack> stickers:Vector<Document> dates:Vector<int> = messages.RecentStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| packs | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerPack](/type/StickerPack/)> | Emojis associated to stickers |
| stickers | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Recent stickers |
| dates | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | When was each sticker last used |

## Тип

[messages.RecentStickers](/type/messages.RecentStickers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
