---
title: "payments.getStarsTransactions (метод)"
original: "https://core.telegram.org/method/payments.getStarsTransactions"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsTransactions

*Метод из схемы TL.*

> Fetch [Telegram Stars transactions](https://core.telegram.org/api/stars#balance-and-transaction-history).
> The `inbound` and `outbound` flags are mutually exclusive: if none of the two are set, both incoming and outgoing transactions are fetched.

## Определение TL

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
---functions---
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inbound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, fetches only incoming transactions. |
| outbound | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, fetches only outgoing transactions. |
| ascending | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Return transactions in ascending order by date (instead of descending order by date). |
| ton | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | If set, returns the channel/ad revenue transactions in nanograms, instead. |
| subscription_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[string](/type/string/) | If set, fetches only transactions for the specified [Telegram Star subscription »](https://core.telegram.org/api/stars#star-subscriptions). |
| peer | [InputPeer](/type/InputPeer/) | Fetch the transaction history of the peer ([inputPeerSelf](/constructor/inputPeerSelf/) or a bot we own). |
| offset | [string](/type/string/) | [Offset for pagination, obtained from the returned next_offset, initially an empty string »](https://core.telegram.org/api/offsets). |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[payments.StarsStatus](/type/payments.StarsStatus/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | SUBSCRIPTION_ID_INVALID | The specified subscription_id is invalid. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
