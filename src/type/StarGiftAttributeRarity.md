---
title: "StarGiftAttributeRarity (тип)"
original: "https://core.telegram.org/type/StarGiftAttributeRarity"
section: ref
kind: type
layout: layout.njk
---

# StarGiftAttributeRarity

*Тип из схемы TL.*

> Rarity of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts) attribute, either as an exact permille value or as one of the named rarity tiers (uncommon, rare, epic, legendary).

## Определение TL

```
starGiftAttributeRarity#36437737 permille:int = StarGiftAttributeRarity;
starGiftAttributeRarityUncommon#dbce6389 = StarGiftAttributeRarity;
starGiftAttributeRarityRare#f08d516b = StarGiftAttributeRarity;
starGiftAttributeRarityEpic#78fbf3a8 = StarGiftAttributeRarity;
starGiftAttributeRarityLegendary#cef7e7a8 = StarGiftAttributeRarity;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starGiftAttributeRarity](/constructor/starGiftAttributeRarity/) | Exact rarity value for a collectible gift attribute. |
| [starGiftAttributeRarityUncommon](/constructor/starGiftAttributeRarityUncommon/) | Represents uncommon collectible gift attribute rarity. |
| [starGiftAttributeRarityRare](/constructor/starGiftAttributeRarityRare/) | Represents rare collectible gift attribute rarity. |
| [starGiftAttributeRarityEpic](/constructor/starGiftAttributeRarityEpic/) | Represents epic collectible gift attribute rarity. |
| [starGiftAttributeRarityLegendary](/constructor/starGiftAttributeRarityLegendary/) | Represents legendary collectible gift attribute rarity. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
