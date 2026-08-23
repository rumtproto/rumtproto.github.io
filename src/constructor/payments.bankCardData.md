---
title: "payments.bankCardData (конструктор)"
original: "https://core.telegram.org/constructor/payments.bankCardData"
section: ref
kind: constructor
layout: layout.njk
---

# payments.bankCardData

*Конструктор из схемы TL.*

> Credit card info, provided by the card's bank(s)

## Определение TL

```
payments.bankCardData#3e24e573 title:string open_urls:Vector<BankCardOpenUrl> = payments.BankCardData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| title | [string](/type/string/) | Credit card title |
| open_urls | [Vector](https://core.telegram.org/type/Vector%20t)<[BankCardOpenUrl](/type/BankCardOpenUrl/)> | Info URL(s) provided by the card's bank(s) |

## Тип

[payments.BankCardData](/type/payments.BankCardData/)
