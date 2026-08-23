---
title: "requirementToContactPaidMessages (конструктор)"
original: "https://core.telegram.org/constructor/requirementToContactPaidMessages"
section: ref
kind: constructor
layout: layout.njk
---

# requirementToContactPaidMessages

*Конструктор из схемы TL.*

> This user requires us to pay the specified amount of [Telegram Stars](https://core.telegram.org/api/stars) to send them a message, see [here »](https://core.telegram.org/api/paid-messages) for the full flow.

## Определение TL

```
requirementToContactPaidMessages#b4f67e93 stars_amount:long = RequirementToContact;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| stars_amount | [long](/type/long/) | The required amount of [Telegram Stars](https://core.telegram.org/api/stars). |

## Тип

[RequirementToContact](/type/RequirementToContact/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.
