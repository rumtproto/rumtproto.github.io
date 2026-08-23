---
title: "shippingOption (конструктор)"
original: "https://core.telegram.org/constructor/shippingOption"
section: ref
kind: constructor
layout: layout.njk
---

# shippingOption

*Конструктор из схемы TL.*

> Shipping option

## Определение TL

```
shippingOption#b6213cdf id:string title:string prices:Vector<LabeledPrice> = ShippingOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [string](/type/string/) | Option ID |
| title | [string](/type/string/) | Title |
| prices | [Vector](https://core.telegram.org/type/Vector%20t)<[LabeledPrice](/type/LabeledPrice/)> | List of price portions |

## Тип

[ShippingOption](/type/ShippingOption/)
