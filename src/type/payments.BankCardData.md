---
title: "payments.BankCardData (тип)"
original: "https://core.telegram.org/type/payments.BankCardData"
section: ref
kind: type
layout: layout.njk
---

# payments.BankCardData

*Тип из схемы TL.*

> Credit card info, provided by the card's bank(s)

## Определение TL

```
payments.bankCardData#3e24e573 title:string open_urls:Vector<BankCardOpenUrl> = payments.BankCardData;

---functions---

payments.getBankCardData#2e79d779 number:string = payments.BankCardData;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.bankCardData](/constructor/payments.bankCardData/) | Credit card info, provided by the card's bank(s) |

## Методы

| Method | Описание |
|---|---|
| [payments.getBankCardData](/method/payments.getBankCardData/) | Get info about a credit card |
