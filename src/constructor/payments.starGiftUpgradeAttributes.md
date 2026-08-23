---
title: "payments.starGiftUpgradeAttributes (конструктор)"
original: "https://core.telegram.org/constructor/payments.starGiftUpgradeAttributes"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starGiftUpgradeAttributes

*Конструктор из схемы TL.*

> List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).

## Определение TL

```
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| attributes | [Vector](https://core.telegram.org/type/Vector%20t)<[StarGiftAttribute](/type/StarGiftAttribute/)> | Full list of possible attributes that may be assigned when gifts of the specified type are turned into [collectible gifts »](https://core.telegram.org/api/gifts#collectible-gifts), including craft-only models marked with [starGiftAttributeModel](/constructor/starGiftAttributeModel/).crafted. |

## Тип

[payments.StarGiftUpgradeAttributes](/type/payments.StarGiftUpgradeAttributes/)

## Related pages

#### [Telegram Gifts](https://core.telegram.org/api/gifts)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.

#### [starGiftAttributeModel](/constructor/starGiftAttributeModel/)

The model of a [collectible gift »](https://core.telegram.org/api/gifts#collectible-gifts).
