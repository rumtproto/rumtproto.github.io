---
title: "payments.getStarsTransactionsByID (метод)"
original: "https://core.telegram.org/method/payments.getStarsTransactionsByID"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsTransactionsByID

*Метод из схемы TL.*

> Obtain info about [Telegram Star transactions »](https://core.telegram.org/api/stars#balance-and-transaction-history) using specific transaction IDs.

## Определение TL

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
---functions---
payments.getStarsTransactionsByID#2dca16b8 flags:# ton:flags.0?true peer:InputPeer id:Vector<InputStarsTransaction> = payments.StarsStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| ton | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, returns channel/bot ad revenue transactions in nanograms. |
| peer | [InputPeer](/type/InputPeer/) | Channel or bot. |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[InputStarsTransaction](/type/InputStarsTransaction/)> | Transaction IDs. |

## Результат

[payments.StarsStatus](/type/payments.StarsStatus/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | TRANSACTION_ID_INVALID | The specified transaction ID is invalid. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
