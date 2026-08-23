---
title: "payments.ValidatedRequestedInfo (конструктор)"
original: "https://core.telegram.org/constructor/payments.validatedRequestedInfo"
section: ref
kind: constructor
layout: layout.njk
---

# payments.ValidatedRequestedInfo

*Конструктор из схемы TL.*

> Validated user-provided info

## Определение TL

```
payments.validatedRequestedInfo#d1451883 flags:# id:flags.0?string shipping_options:flags.1?Vector<ShippingOption> = payments.ValidatedRequestedInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | ID |
| shipping_options | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[ShippingOption](/type/ShippingOption/)> | Shipping options |

## Тип

[payments.ValidatedRequestedInfo](/type/payments.ValidatedRequestedInfo/)
