---
title: "payments.StarGiftUpgradePreview (тип)"
original: "https://core.telegram.org/type/payments.StarGiftUpgradePreview"
section: ref
kind: type
layout: layout.njk
---

# payments.StarGiftUpgradePreview

*Тип из схемы TL.*

> A preview of the possible attributes (chosen randomly) a [gift »](https://core.telegram.org/api/gifts) can receive after upgrading it to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info.

## Определение TL

```
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;

---functions---

payments.getStarGiftUpgradePreview#9c9abcb1 gift_id:long = payments.StarGiftUpgradePreview;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) | A preview of the possible attributes (chosen randomly) a [gift »](https://core.telegram.org/api/gifts) can receive after upgrading it to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info. |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGiftUpgradePreview](/method/payments.getStarGiftUpgradePreview/) | Obtain a preview of the possible attributes (chosen randomly) a [gift »](https://core.telegram.org/api/gifts) can receive after upgrading it to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts), see [here »](https://core.telegram.org/api/gifts#collectible-gifts) for more info. |

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
