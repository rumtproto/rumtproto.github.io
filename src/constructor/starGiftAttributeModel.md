---
title: "starGiftAttributeModel (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAttributeModel"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAttributeModel

*Конструктор из схемы TL.*

> The model of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| crafted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | This model is reserved for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts), and should be filtered out from regular upgrade previews. |
| name | [string](/type/string/) | Name of the model |
| document | [Document](/type/Document/) | The [sticker](https://core.telegram.org/api/stickers) representing the upgraded gift |
| rarity | [StarGiftAttributeRarity](/type/StarGiftAttributeRarity/) | Rarity of this model. |

## Тип

[StarGiftAttribute](/type/StarGiftAttribute/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.
