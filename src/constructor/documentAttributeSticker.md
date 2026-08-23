---
title: "documentAttributeSticker (конструктор)"
original: "https://core.telegram.org/constructor/documentAttributeSticker"
section: ref
kind: constructor
layout: layout.njk
---

# documentAttributeSticker

*Конструктор из схемы TL.*

> Defines a sticker
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===23===
> documentAttributeSticker#fb0a5727 = DocumentAttribute;
> ===45===
> documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute;
> ```
> #### API schema

## Определение TL

```
documentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| mask | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this is a mask sticker |
| alt | [string](/type/string/) | Alternative emoji representation of sticker |
| stickerset | [InputStickerSet](/type/InputStickerSet/) | Associated stickerset |
| mask_coords | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[MaskCoords](/type/MaskCoords/) | Mask coordinates (if this is a mask sticker, attached to a photo) |

## Тип

[DocumentAttribute](/type/DocumentAttribute/)
