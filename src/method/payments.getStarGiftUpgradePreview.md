---
title: "payments.getStarGiftUpgradePreview (метод)"
original: "https://core.telegram.org/method/payments.getStarGiftUpgradePreview"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarGiftUpgradePreview

*Метод из схемы TL.*

> Obtain a preview of the possible attributes (chosen randomly) a [gift »](https://core.telegram.org/api/gifts) can receive after upgrading it to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

## Определение TL

```
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;
---functions---
payments.getStarGiftUpgradePreview#9c9abcb1 gift_id:long = payments.StarGiftUpgradePreview;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| gift_id | [long](/type/long/) | The gift to upgrade. |

## Результат

[payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STARGIFT_INVALID | The passed gift is invalid. |
| 400 | STARGIFT_UPGRADE_UNAVAILABLE | A received gift can only be upgraded to a collectible gift if the [messageActionStarGift](/constructor/messageActionStarGift/)/[savedStarGift](/constructor/savedStarGift/).can_upgrade flag is set. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [messageActionStarGift](/constructor/messageActionStarGift/)

You received a [gift, see here »](https://core.telegram.org/api/gifts) for more info.

#### [savedStarGift](/constructor/savedStarGift/)

Represents a [gift](https://core.telegram.org/api/gifts) owned by a peer.
