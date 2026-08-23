---
title: "payments.getStarGiftUpgradeAttributes (метод)"
original: "https://core.telegram.org/method/payments.getStarGiftUpgradeAttributes"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGiftUpgradeAttributes

*Метод из схемы TL.*

> Obtains the **full** list of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).
> The result may also include [starGiftAttributeModel](/constructor/starGiftAttributeModel/) constructors with the `crafted` flag set: these models are reserved for [crafting »](https://core.telegram.org/api/gifts#crafting-collectible-gifts) and should be filtered out from regular upgrade previews (and vice versa).

## Определение TL

```
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;
---functions---
payments.getStarGiftUpgradeAttributes#6d038b58 gift_id:long = payments.StarGiftUpgradeAttributes;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift_id | [long](/type/long/) | Non-collectible base gift ID, from [starGift](/constructor/starGift/).id |

## Результат

[payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_INVALID | The passed gift is invalid. |

## Related pages

#### [starGift](/constructor/starGift/)

Represents a [star gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

The model of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).
