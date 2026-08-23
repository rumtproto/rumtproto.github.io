---
title: "payments.getBankCardData (метод)"
original: "https://core.telegram.org/method/payments.getBankCardData"
section: ref
kind: method
layout: layout.njk
---

# payments.getBankCardData

*Метод из схемы TL.*

> Get info about a credit card

## Определение TL

```
payments.bankCardData#3e24e573 title:string open_urls:Vector<BankCardOpenUrl> = payments.BankCardData;
---functions---
payments.getBankCardData#2e79d779 number:string = payments.BankCardData;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| number | [string](/type/string/) | Credit card number |

## Результат

[payments.BankCardData](/type/payments.BankCardData/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BANK_CARD_NUMBER_INVALID | The specified card number is invalid. |
