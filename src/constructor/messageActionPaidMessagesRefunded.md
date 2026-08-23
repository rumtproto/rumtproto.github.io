---
title: "messageActionPaidMessagesRefunded (конструктор)"
original: "https://core.telegram.org/constructor/messageActionPaidMessagesRefunded"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionPaidMessagesRefunded

*Конструктор из схемы TL.*

> Sent from peer A to B, indicates that A refunded all [stars](https://core.telegram.org/api/stars) B previously paid to send messages to A, see [here »](https://core.telegram.org/api/paid-messages) for more info on paid messages.

## Определение TL

```
messageActionPaidMessagesRefunded#ac1f1fcd count:int stars:long = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Number of paid messages affected by the refund. |
| stars | [long](/type/long/) | Number of refunded stars. |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
