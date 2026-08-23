---
title: "messages.allStickers (конструктор)"
original: "https://core.telegram.org/constructor/messages.allStickers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.allStickers

*Конструктор из схемы TL.*

> Info about all installed stickers

## Определение TL

```
messages.allStickers#cdbbcebb hash:long sets:Vector<StickerSet> = messages.AllStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| sets | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerSet](/type/StickerSet/)> | All stickersets |

## Тип

[messages.AllStickers](/type/messages.AllStickers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
