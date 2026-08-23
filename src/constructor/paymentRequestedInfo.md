---
title: "paymentRequestedInfo (конструктор)"
original: "https://core.telegram.org/constructor/paymentRequestedInfo"
section: ref
kind: constructor
layout: layout.njk
---

# paymentRequestedInfo

*Конструктор из схемы TL.*

> Order info provided by the user

## Определение TL

```
paymentRequestedInfo#909c3f94 flags:# name:flags.0?string phone:flags.1?string email:flags.2?string shipping_address:flags.3?PostAddress = PaymentRequestedInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | User's full name |
| phone | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[string](/type/string/) | User's phone number |
| email | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | User's email address |
| shipping_address | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[PostAddress](/type/PostAddress/) | User's shipping address |

## Тип

[PaymentRequestedInfo](/type/PaymentRequestedInfo/)
