---
title: "payments.savedInfo (конструктор)"
original: "https://core.telegram.org/constructor/payments.savedInfo"
section: ref
kind: constructor
layout: layout.njk
---

# payments.savedInfo

*Конструктор из схемы TL.*

> Saved server-side order information

## Определение TL

```
payments.savedInfo#fb8fe43c flags:# has_saved_credentials:flags.1?true saved_info:flags.0?PaymentRequestedInfo = payments.SavedInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_saved_credentials | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the user has some saved payment credentials |
| saved_info | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[PaymentRequestedInfo](/type/PaymentRequestedInfo/) | Saved server-side order information |

## Тип

[payments.SavedInfo](/type/payments.SavedInfo/)
