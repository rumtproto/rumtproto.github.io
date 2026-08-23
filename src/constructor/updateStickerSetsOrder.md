---
title: "updateStickerSetsOrder (конструктор)"
original: "https://core.telegram.org/constructor/updateStickerSetsOrder"
section: ref
kind: constructor
layout: layout.njk
---

# updateStickerSetsOrder

*Конструктор из схемы TL.*

> The order of stickersets was changed

## Определение TL

```
updateStickerSetsOrder#bb2d201 flags:# masks:flags.0?true emojis:flags.1?true order:Vector<long> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| masks | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the updated stickers are mask stickers |
| emojis | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the updated stickers are custom emoji stickers |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | New sticker order by sticker ID |

## Тип

[Update](/type/Update/)
