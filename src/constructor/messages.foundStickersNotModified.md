---
title: "messages.foundStickersNotModified (конструктор)"
original: "https://core.telegram.org/constructor/messages.foundStickersNotModified"
section: ref
kind: constructor
layout: layout.njk
---

# messages.foundStickersNotModified

*Конструктор из схемы TL.*

> No new stickers were found for the specified query

## Определение TL

```
messages.foundStickersNotModified#6010c534 flags:# next_offset:flags.0?int = messages.FoundStickers;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Offset for [pagination](https://core.telegram.org/api/offsets) |

## Тип

[messages.FoundStickers](/type/messages.FoundStickers/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
