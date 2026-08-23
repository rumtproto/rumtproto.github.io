---
title: "starGiftAttributePattern (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAttributePattern"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAttributePattern

*Конструктор из схемы TL.*

> A [sticker](https://core.telegram.org/api/stickers) applied on the backdrop of a [collectible gift »](https://core.telegram.org/api/gifts) using a repeating pattern.

## Определение TL

```
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| name | [string](/type/string/) | Name of the symbol |
| document | [Document](/type/Document/) | The symbol |
| rarity | [StarGiftAttributeRarity](/type/StarGiftAttributeRarity/) | Rarity of this pattern. |

## Тип

[StarGiftAttribute](/type/StarGiftAttribute/)

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
