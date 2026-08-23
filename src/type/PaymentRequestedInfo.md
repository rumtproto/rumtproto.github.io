---
title: "PaymentRequestedInfo (тип)"
original: "https://core.telegram.org/type/PaymentRequestedInfo"
section: ref
kind: type
layout: layout.njk
---

# PaymentRequestedInfo

*Тип из схемы TL.*

> Requested payment info

## Определение TL

```
paymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [paymentRequestedInfo](/constructor/paymentRequestedInfo/) | Order info provided by the user |
