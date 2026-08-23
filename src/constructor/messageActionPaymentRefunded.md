---
title: "messageActionPaymentRefunded (конструктор)"
original: "https://core.telegram.org/constructor/messageActionPaymentRefunded"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionPaymentRefunded

*Конструктор из схемы TL.*

> Describes a payment refund (service message received by both users and bots).

## Определение TL

```
messageActionPaymentRefunded#41b3e202 flags:# peer:Peer currency:string total_amount:long payload:flags.0?bytes charge:PaymentCharge = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| peer | [Peer](/type/Peer/) | Identifier of the peer that returned the funds. |
| currency | [string](/type/string/) | Currency, XTR for Telegram Stars. |
| total_amount | [long](/type/long/) | Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). |
| payload | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[bytes](/type/bytes/) | Bot specified invoice payload (only received by bots). |
| charge | [PaymentCharge](/type/PaymentCharge/) | Provider payment identifier |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Bot Payments API](https://core.telegram.org/bots/payments)
