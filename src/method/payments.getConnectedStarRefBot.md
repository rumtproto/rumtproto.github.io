---
title: "payments.getConnectedStarRefBot (метод)"
original: "https://core.telegram.org/method/payments.getConnectedStarRefBot"
section: ref
kind: method
layout: layout.njk
---

# payments.getConnectedStarRefBot

*Метод из схемы TL.*

> Fetch info about a specific [bot affiliation »](https://core.telegram.org/api/bots/referrals)

## Определение TL

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;
---functions---
payments.getConnectedStarRefBot#b7d998f0 peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [InputPeer](/type/InputPeer/) | The affiliated peer |
| bot | [InputUser](/type/InputUser/) | The bot that offers the affiliate program |

## Результат

[payments.ConnectedStarRefBots](/type/payments.ConnectedStarRefBots/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
