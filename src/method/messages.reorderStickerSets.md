---
title: "messages.reorderStickerSets (метод)"
original: "https://core.telegram.org/method/messages.reorderStickerSets"
section: ref
kind: method
layout: layout.njk
---

# messages.reorderStickerSets

*Метод из схемы TL.*

> Reorder installed stickersets

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reorderStickerSets#78337739 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| masks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Reorder mask stickersets |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Reorder [custom emoji stickersets](https://core.telegram.org/api/custom-emoji) |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | New stickerset order by stickerset IDs |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Related pages

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.
