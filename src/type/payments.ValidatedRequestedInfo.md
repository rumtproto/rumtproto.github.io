---
title: "Payments.ValidatedRequestedInfo (тип)"
original: "https://core.telegram.org/type/payments.ValidatedRequestedInfo"
section: ref
kind: type
layout: layout.njk
---

# Payments.ValidatedRequestedInfo

*Тип из схемы TL.*

> Validated requested info

## Определение TL

```
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;

---functions---

payments.validateRequestedInfo#b6c8f12b flags:# save:flags.0?true invoice:InputInvoice info:PaymentRequestedInfo = payments.ValidatedRequestedInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.validatedRequestedInfo](/constructor/payments.validatedRequestedInfo/) | Validated user-provided info |

## Методы

| Method | Описание |
|---|---|
| [payments.validateRequestedInfo](/method/payments.validateRequestedInfo/) | Submit requested order information for validation |
