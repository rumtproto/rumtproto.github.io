---
title: "payments.canPurchaseStore (метод)"
original: "https://core.telegram.org/method/payments.canPurchaseStore"
section: ref
kind: method
layout: layout.njk
---

# payments.canPurchaseStore

*Метод из схемы TL.*

> Checks whether a purchase is possible. Must be called before in-store purchase, official apps only.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
payments.canPurchaseStore#4fdc5ea7 purpose:InputStorePaymentPurpose = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| purpose | [InputStorePaymentPurpose](/type/InputStorePaymentPurpose/) | Payment purpose. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## This method can be invoked over an unauthenticated connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | INPUT_PURPOSE_INVALID | The specified payment purpose is invalid. |
| 406 | PREMIUM_CURRENTLY_UNAVAILABLE | You cannot currently purchase a Premium subscription. |
