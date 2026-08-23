---
title: "messages.searchStickerSets (метод)"
original: "https://core.telegram.org/method/messages.searchStickerSets"
section: ref
kind: method
layout: layout.njk
---

# messages.searchStickerSets

*Метод из схемы TL.*

> Search for stickersets

## Определение TL

```
messages.foundStickerSetsNotModified#d54b65d = messages.FoundStickerSets;
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;
---functions---
messages.searchStickerSets#35705b8a flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| exclude_featured | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Exclude featured stickersets from results |
| q | [string](/type/string/) | Query string |
| hash | [long](/type/long/) | [Hash used for caching, for more info click here](https://core.telegram.org/api/offsets#hash-generation). |

## Результат

[messages.FoundStickerSets](/type/messages.FoundStickerSets/)

## Only users can use this method

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
