---
title: "payments.getPaymentReceipt (метод)"
original: "https://core.telegram.org/method/payments.getPaymentReceipt"
section: ref
kind: method
layout: layout.njk
---

# payments.getPaymentReceipt

*Метод из схемы TL.*

> Get payment receipt

## Определение TL

```
payments.paymentReceipt#70c4fe03 flags:# date:int bot_id:long provider_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice info:flags.0?PaymentRequestedInfo shipping:flags.1?ShippingOption tip_amount:flags.3?long currency:string total_amount:long credentials_title:string users:Vector<User> = payments.PaymentReceipt;
payments.paymentReceiptStars#dabbf83a flags:# date:int bot_id:long title:string description:string photo:flags.2?WebDocument invoice:Invoice currency:string total_amount:long transaction_id:string users:Vector<User> = payments.PaymentReceipt;
---functions---
payments.getPaymentReceipt#2478d1cc peer:InputPeer msg_id:int = payments.PaymentReceipt;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer where the payment receipt was sent |
| msg_id | [int](/type/int/) | Message ID of receipt |

## Результат

[payments.PaymentReceipt](/type/payments.PaymentReceipt/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
