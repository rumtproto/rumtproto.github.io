---
title: "payments.starsStatus (конструктор)"
original: "https://core.telegram.org/constructor/payments.starsStatus"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starsStatus

*Конструктор из схемы TL.*

> Info about the current [Telegram Star subscriptions, balance and transaction history »](https://core.telegram.org/api/stars#balance-and-transaction-history).

## Определение TL

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| balance | [StarsAmount](/type/StarsAmount/) | Current Telegram Star balance. |
| subscriptions | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Vector](https://core.telegram.org/type/Vector%20t)<[StarsSubscription](/type/StarsSubscription/)> | Info about current Telegram Star subscriptions, only returned when invoking [payments.getStarsTransactions](/method/payments.getStarsTransactions/) and [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/). |
| subscriptions_next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[string](/type/string/) | Offset for pagination of subscriptions: only usable and returned when invoking [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/). |
| subscriptions_missing_balance | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[long](/type/long/) | The number of Telegram Stars the user should buy to be able to extend expired subscriptions soon (i.e. the current balance is not enough to extend all expired subscriptions). |
| history | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[StarsTransaction](/type/StarsTransaction/)> | List of Telegram Star transactions (partial if next_offset is set). |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset to use to fetch more transactions from the transaction history using [payments.getStarsTransactions](/method/payments.getStarsTransactions/). |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in history. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned in history. |

## Тип

[payments.StarsStatus](/type/payments.StarsStatus/)

## Related pages

#### [payments.getStarsTransactions](/method/payments.getStarsTransactions/)

Fetch [Telegram Stars transactions](https://core.telegram.org/api/stars#balance-and-transaction-history).

The `inbound` and `outbound` flags are mutually exclusive: if none of the two are set, both incoming and outgoing transactions are fetched.

#### [payments.getStarsSubscriptions](/method/payments.getStarsSubscriptions/)

Obtain a list of active, expired or cancelled [Telegram Star subscriptions »](https://core.telegram.org/api/invites#paid-invite-links).

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
