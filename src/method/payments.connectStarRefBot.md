---
title: "payments.connectStarRefBot (метод)"
original: "https://core.telegram.org/method/payments.connectStarRefBot"
section: ref
kind: method
layout: layout.njk
---

# payments.connectStarRefBot

*Метод из схемы TL.*

> Join a bot's [affiliate program, becoming an affiliate »](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)

## Определение TL

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
---functions---
payments.connectStarRefBot#7ed5348a peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The peer that will become the affiliate: star commissions will be transferred to this peer's star balance. |
| bot | [InputUser](/type/InputUser/) | The bot that offers the affiliate program |

## Результат

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

## Only users can use this method

## Related pages

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
