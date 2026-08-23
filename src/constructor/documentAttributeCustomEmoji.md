---
title: "documentAttributeCustomEmoji (конструктор)"
original: "https://core.telegram.org/constructor/documentAttributeCustomEmoji"
section: ref
kind: constructor
layout: layout.njk
---

# documentAttributeCustomEmoji

*Конструктор из схемы TL.*

> Info about a custom emoji

## Определение TL

```
documentAttributeCustomEmoji#fd149899 flags:# free:flags.0?true text_color:flags.1?true alt:string stickerset:InputStickerSet = DocumentAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| free | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether this custom emoji can be sent by non-Premium users |
| text_color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the color of this TGS custom emoji should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context. |
| alt | [string](/type/string/) | The actual emoji |
| stickerset | [InputStickerSet](/type/InputStickerSet/) | The emoji stickerset to which this emoji belongs. |

## Тип

[DocumentAttribute](/type/DocumentAttribute/)
