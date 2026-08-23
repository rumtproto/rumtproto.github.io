---
title: "starsSubscriptionPricing (конструктор)"
original: "https://core.telegram.org/constructor/starsSubscriptionPricing"
section: ref
kind: constructor
layout: layout.njk
---

# starsSubscriptionPricing

*Конструктор из схемы TL.*

> Pricing of a [Telegram Star subscription »](https://core.telegram.org/api/invites#paid-invite-links).

## Определение TL

```
starsSubscriptionPricing#5416d58 period:int amount:long = StarsSubscriptionPricing;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| period | [int](/type/int/) | The user should pay amount stars every period seconds to gain and maintain access to the channel. Currently the only allowed subscription period is 30*24*60*60, i.e. the user will be debited amount stars every month. |
| amount | [long](/type/long/) | Price of the subscription in Telegram Stars. |

## Тип

[StarsSubscriptionPricing](/type/StarsSubscriptionPricing/)

## Related pages

#### [Invite links](https://core.telegram.org/api/invites)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
