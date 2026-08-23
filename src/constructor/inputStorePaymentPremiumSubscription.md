---
title: "inputStorePaymentPremiumSubscription (конструктор)"
original: "https://core.telegram.org/constructor/inputStorePaymentPremiumSubscription"
section: ref
kind: constructor
layout: layout.njk
---

# inputStorePaymentPremiumSubscription

*Конструктор из схемы TL.*

> Info about a Telegram Premium purchase

## Определение TL

```
inputStorePaymentPremiumSubscription#a6751e66 flags:# restore:flags.0?true upgrade:flags.1?true = InputStorePaymentPurpose;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| restore | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Pass true if this is a restore of a Telegram Premium purchase; only for the App Store |
| upgrade | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Pass true if this is an upgrade from a monthly subscription to a yearly subscription; only for App Store |

## Тип

[InputStorePaymentPurpose](/type/InputStorePaymentPurpose/)
