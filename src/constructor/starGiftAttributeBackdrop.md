---
title: "starGiftAttributeBackdrop (конструктор)"
original: "https://core.telegram.org/constructor/starGiftAttributeBackdrop"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftAttributeBackdrop

*Конструктор из схемы TL.*

> The backdrop of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| name | [string](/type/string/) | Name of the backdrop |
| backdrop_id | [int](/type/int/) | Unique ID of the backdrop |
| center_color | [int](/type/int/) | Color of the center of the backdrop in RGB24 format. |
| edge_color | [int](/type/int/) | Color of the edges of the backdrop in RGB24 format. |
| pattern_color | [int](/type/int/) | Color of the [starGiftAttributePattern](/constructor/starGiftAttributePattern/) applied on the backdrop in RGB24 format. |
| text_color | [int](/type/int/) | Color of the text on the backdrop in RGB24 format. |
| rarity | [StarGiftAttributeRarity](/type/StarGiftAttributeRarity/) | Rarity of this backdrop. |

## Тип

[StarGiftAttribute](/type/StarGiftAttribute/)

## Related pages

#### [starGiftAttributePattern](/constructor/starGiftAttributePattern/)

A [sticker](https://core.telegram.org/api/stickers) applied on the backdrop of a [collectible gift »](https://core.telegram.org/api/gifts) using a repeating pattern.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
