---
title: "messages.featuredStickers (конструктор)"
original: "https://core.telegram.org/constructor/messages.featuredStickers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.featuredStickers

*Конструктор из схемы TL.*

> Featured stickersets

## Определение TL

```
messages.featuredStickers#be382906 flags:# premium:flags.0?true hash:long count:int sets:Vector<StickerSetCovered> unread:Vector<long> = messages.FeaturedStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| premium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this is a premium stickerset |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| count | [int](/type/int/) | Total number of featured stickers |
| sets | [Vector](https://core.telegram.org/type/Vector%20t)<[StickerSetCovered](/type/StickerSetCovered/)> | Featured stickersets |
| unread | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | IDs of new featured stickersets |

## Тип

[messages.FeaturedStickers](/type/messages.FeaturedStickers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
