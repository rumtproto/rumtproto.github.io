---
title: "account.getPaidMessagesRevenue (метод)"
original: "https://core.telegram.org/method/account.getPaidMessagesRevenue"
section: ref
kind: method
layout: layout.njk
---

# account.getPaidMessagesRevenue

*Метод из схемы TL.*

> Get the number of stars we have received from the specified user thanks to [paid messages »](https://core.telegram.org/api/paid-messages); the received amount will be equal to the sent amount multiplied by [stars\_paid\_message\_commission\_permille](https://core.telegram.org/api/config#stars-paid-message-commission-permille) divided by 1000.

## Определение TL

```
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;
---functions---
account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| parent_peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputPeer](/type/InputPeer/) | If set, can contain the ID of a [monoforum (channel direct messages)](https://core.telegram.org/api/monoforum) to obtain the number of stars the user has spent to send us direct messages via the channel. |
| user_id | [InputUser](/type/InputUser/) | The user that paid to send us messages. |

## Результат

[account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PARENT_PEER_INVALID | The specified parent_peer is invalid. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |

## Related pages

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
