---
title: "account.paidMessagesRevenue (конструктор)"
original: "https://core.telegram.org/constructor/account.paidMessagesRevenue"
section: ref
kind: constructor
layout: layout.njk
---

# account.paidMessagesRevenue

*Конструктор из схемы TL.*

> Total number of non-refunded [Telegram Stars](https://core.telegram.org/api/stars) a user has spent on sending us messages either directly or through a channel, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages.

## Определение TL

```
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stars_amount | [long](/type/long/) | Amount in [Stars](https://core.telegram.org/api/stars). |

## Тип

[account.PaidMessagesRevenue](/type/account.PaidMessagesRevenue/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
