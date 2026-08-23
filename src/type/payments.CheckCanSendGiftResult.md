---
title: "payments.CheckCanSendGiftResult (тип)"
original: "https://core.telegram.org/type/payments.CheckCanSendGiftResult"
section: ref
kind: type
layout: layout.njk
---

# payments.CheckCanSendGiftResult

*Тип из схемы TL.*

> Specifies if a gift can or cannot be sent.

## Определение TL

```
payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;

---functions---

payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.checkCanSendGiftResultOk](/constructor/payments.checkCanSendGiftResultOk/) | The specified gift can be sent. |
| [payments.checkCanSendGiftResultFail](/constructor/payments.checkCanSendGiftResultFail/) | The specified gift cannot be sent yet for the specified reason. |

## Методы

| Method | Описание |
|---|---|
| [payments.checkCanSendGift](/method/payments.checkCanSendGift/) | Check if the specified [gift »](https://core.telegram.org/api/gifts) can be sent. |
