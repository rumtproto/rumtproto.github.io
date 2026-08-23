---
title: "labeledPrice (конструктор)"
original: "https://core.telegram.org/constructor/labeledPrice"
section: ref
kind: constructor
layout: layout.njk
---

# labeledPrice

*Конструктор из схемы TL.*

> This object represents a portion of the price for goods or services.

## Определение TL

```
labeledPrice#cb296bf8 label:string amount:long = LabeledPrice;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| label | [string](/type/string/) | Portion label |
| amount | [long](/type/long/) | Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |

## Тип

[LabeledPrice](/type/LabeledPrice/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)
