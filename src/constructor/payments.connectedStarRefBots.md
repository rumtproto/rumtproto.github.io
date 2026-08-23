---
title: "payments.connectedStarRefBots (конструктор)"
original: "https://core.telegram.org/constructor/payments.connectedStarRefBots"
section: ref
kind: constructor
layout: layout.njk
---

# payments.connectedStarRefBots

*Конструктор из схемы TL.*

> Active [affiliations](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)

## Определение TL

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of active affiliations |
| connected_bots | [Vector](https://core.telegram.org/type/Vector%20t)<[ConnectedBotStarRef](/type/ConnectedBotStarRef/)> | The affiliations |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Peers mentioned in connected_bots |

## Тип

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

## Related pages

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
