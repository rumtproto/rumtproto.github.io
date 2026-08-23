---
title: "account.PaidMessagesRevenue (тип)"
original: "https://core.telegram.org/type/account.PaidMessagesRevenue"
section: ref
kind: type
layout: layout.njk
---

# account.PaidMessagesRevenue

*Тип из схемы TL.*

> Total number of non-refunded [Telegram Stars](https://core.telegram.org/api/stars) a user has spent on sending us messages either directly or through a channel, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages.

## Определение TL

```
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;

---functions---

account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [account.paidMessagesRevenue](/constructor/account.paidMessagesRevenue/) | Total number of non-refunded [Telegram Stars](https://core.telegram.org/api/stars) a user has spent on sending us messages either directly or through a channel, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages. |

## Методы

| Method | Описание |
|---|---|
| [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/) | Get the number of stars we have received from the specified user thanks to [paid messages »](https://core.telegram.org/api/paid-messages); the received amount will be equal to the sent amount multiplied by [stars_paid_message_commission_permille](https://core.telegram.org/api/config#stars-paid-message-commission-permille) divided by 1000. |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
