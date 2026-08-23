---
title: "messages.foundStickerSets (конструктор)"
original: "https://core.telegram.org/constructor/messages.foundStickerSets"
section: ref
kind: constructor
layout: layout.njk
---

# messages.foundStickerSets

*Конструктор из схемы TL.*

> Found stickersets

## Определение TL

```
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| sets | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerSetCovered](/type/StickerSetCovered/)> | Found stickersets |

## Тип

[messages.FoundStickerSets](/type/messages.FoundStickerSets/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
