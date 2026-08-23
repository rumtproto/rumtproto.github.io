---
title: "payments.getStarsSubscriptions (метод)"
original: "https://core.telegram.org/method/payments.getStarsSubscriptions"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsSubscriptions

*Метод из схемы TL.*

> Obtain a list of active, expired or cancelled [Telegram Star subscriptions »](https://core.telegram.org/api/invites#paid-invite-links).

## Определение TL

```
payments.starsStatus#6c9ce8ed flags:# balance:StarsAmount subscriptions:flags.1?Vector<StarsSubscription> subscriptions_next_offset:flags.2?string subscriptions_missing_balance:flags.4?long history:flags.3?Vector<StarsTransaction> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.StarsStatus;
---functions---
payments.getStarsSubscriptions#32512c5 flags:# missing_balance:flags.0?true peer:InputPeer offset:string = payments.StarsStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| missing_balance | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to return only subscriptions expired due to an excessively low Telegram Star balance. |
| peer | [InputPeer](/type/InputPeer/) | Always pass [inputPeerSelf](/constructor/inputPeerSelf/). |
| offset | [string](/type/string/) | Offset for pagination, taken from [payments.starsStatus](/constructor/payments.starsStatus/).subscriptions_next_offset. |

## Результат

[payments.StarsStatus](/type/payments.StarsStatus/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [payments.starsStatus](/constructor/payments.starsStatus/)

Info about the current [Telegram Star subscriptions, balance and transaction history »](https://core.telegram.org/api/stars#balance-and-transaction-history).

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
