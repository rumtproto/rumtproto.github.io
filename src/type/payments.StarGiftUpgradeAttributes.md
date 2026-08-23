---
title: "Payments.StarGiftUpgradeAttributes (тип)"
original: "https://core.telegram.org/type/payments.StarGiftUpgradeAttributes"
section: ref
kind: type
layout: layout.njk
---

# Payments.StarGiftUpgradeAttributes

*Тип из схемы TL.*

> List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;

---functions---

payments.getStarGiftUpgradeAttributes#6d038b58 gift_id:long = payments.StarGiftUpgradeAttributes;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) | List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/) | Obtains the full list of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts). The result may also include [starGiftAttributeModel](/constructor/starGiftAttributeModel/) constructors with the crafted flag set: these models are reserved for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts) and should be filtered out from regular upgrade previews (and vice versa). |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
