---
title: "messages.foundStickers (конструктор)"
original: "https://core.telegram.org/constructor/messages.foundStickers"
section: ref
kind: constructor
layout: layout.njk
---

# messages.foundStickers

*Конструктор из схемы TL.*

> Found stickers

## Определение TL

```
messages.foundStickers#82c9e290 flags:# next_offset:flags.0?int hash:long stickers:Vector<Document> = messages.FoundStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Offset for [pagination](https://core.telegram.org/api/offsets) |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation) |
| stickers | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | Found stickers |

## Тип

[messages.FoundStickers](/type/messages.FoundStickers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
