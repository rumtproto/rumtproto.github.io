---
title: "stickers.changeSticker (метод)"
original: "https://core.telegram.org/method/stickers.changeSticker"
section: ref
kind: method
layout: layout.njk
---

# stickers.changeSticker

*Метод из схемы TL.*

> Update the keywords, emojis or [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) of a sticker.

## Определение TL

```
messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;
messages.stickerSetNotModified#d3f924eb = messages.StickerSet;
---functions---
stickers.changeSticker#f5537ebc flags:# sticker:InputDocument emoji:flags.0?string mask_coords:flags.1?MaskCoords keywords:flags.2?string = messages.StickerSet;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| sticker | [InputDocument](/type/InputDocument/) | The sticker |
| emoji | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | If set, updates the emoji list associated to the sticker |
| mask_coords | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[MaskCoords](/type/MaskCoords/) | If set, updates the [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) |
| keywords | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | If set, updates the sticker keywords (separated by commas). Can't be provided for mask stickers. |

## Результат

[messages.StickerSet](/type/messages.StickerSet/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKER_INVALID | The provided sticker is invalid. |

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
