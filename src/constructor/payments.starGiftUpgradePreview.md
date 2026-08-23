---
title: "payments.starGiftUpgradePreview (конструктор)"
original: "https://core.telegram.org/constructor/payments.starGiftUpgradePreview"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starGiftUpgradePreview

*Конструктор из схемы TL.*

> A preview of the possible attributes (chosen randomly) a [gift »](https://core.telegram.org/api/gifts) can receive after upgrading it to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

## Определение TL

```
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| sample_attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAttribute](/type/StarGiftAttribute/)> | Possible gift attributes |
| prices | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftUpgradePrice](/type/StarGiftUpgradePrice/)> | Contains a similar list of upgrade prices and timestamps, not as granular as in next_prices (i.e. prices are approximately 1 month apart), to be used mainly to scale the price graph, and to show a more general future overview of the upgrade price. |
| next_prices | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftUpgradePrice](/type/StarGiftUpgradePrice/)> | Contains the current upgrade price and a list of future prices, each associated to a UNIX timestamp that indicates when the price comes in effect (the current price is valid only until the next one comes into effect, and so on for all prices in the list). |

## Тип

[payments.StarGiftUpgradePreview](/type/payments.StarGiftUpgradePreview/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
