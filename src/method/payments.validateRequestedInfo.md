---
title: "payments.validateRequestedInfo (метод)"
original: "https://core.telegram.org/method/payments.validateRequestedInfo"
section: ref
kind: method
layout: layout.njk
---

# payments.validateRequestedInfo

*Метод из схемы TL.*

> Submit requested order information for validation

## Определение TL

```
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;
---functions---
payments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| save | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Save order information to re-use it for future orders |
| invoice | [InputInvoice](/type/InputInvoice/) | Invoice |
| info | [PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Requested order information |

## Результат

[payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
