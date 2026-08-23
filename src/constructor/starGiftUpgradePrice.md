---
title: "starGiftUpgradePrice (конструктор)"
original: "https://core.telegram.org/constructor/starGiftUpgradePrice"
section: ref
kind: constructor
layout: layout.njk
---

# starGiftUpgradePrice

*Конструктор из схемы TL.*

> Indicates the price for a [gift upgrade »](https://core.telegram.org/api/gifts#collectible-gifts) starting from a specific point in time.

## Определение TL

```
starGiftUpgradePrice#99ea331d date:int upgrade_stars:long = StarGiftUpgradePrice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| date | [int](/type/int/) | UNIX timestamp indicating when the price will be in effect. |
| upgrade_stars | [long](/type/long/) | Upgrade price. |

## Тип

[StarGiftUpgradePrice](/type/StarGiftUpgradePrice/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
