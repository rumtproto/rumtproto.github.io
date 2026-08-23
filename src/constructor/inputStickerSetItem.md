---
title: "inputStickerSetItem (конструктор)"
original: "https://core.telegram.org/constructor/inputStickerSetItem"
section: ref
kind: constructor
layout: layout.njk
---

# inputStickerSetItem

*Конструктор из схемы TL.*

> Sticker in a stickerset

## Определение TL

```
inputStickerSetItem#32da9e9c flags:# document:InputDocument emoji:string mask_coords:flags.0?MaskCoords keywords:flags.1?string = InputStickerSetItem;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| document | [InputDocument](/type/InputDocument/) | The sticker |
| emoji | [string](/type/string/) | Associated emoji |
| mask_coords | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[MaskCoords](/type/MaskCoords/) | Coordinates for mask sticker |
| keywords | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | Set of keywords, separated by commas (can't be provided for mask stickers) |

## Тип

[InputStickerSetItem](/type/InputStickerSetItem/)
