---
title: "Payments.ConnectedStarRefBots (тип)"
original: "https://core.telegram.org/type/payments.ConnectedStarRefBots"
section: ref
kind: type
layout: layout.njk
---

# Payments.ConnectedStarRefBots

*Тип из схемы TL.*

> Active [affiliations](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)

## Определение TL

```
payments.connectedStarRefBots#98d5ea1d count:int connected_bots:Vector<ConnectedBotStarRef> users:Vector<User> = payments.ConnectedStarRefBots;

---functions---

payments.getConnectedStarRefBots#5869a553 flags:# peer:InputPeer offset_date:flags.2?int offset_link:flags.2?string limit:int = payments.ConnectedStarRefBots;
payments.getConnectedStarRefBot#b7d998f0 peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
payments.connectStarRefBot#7ed5348a peer:InputPeer bot:InputUser = payments.ConnectedStarRefBots;
payments.editConnectedStarRefBot#e4fca4a3 flags:# revoked:flags.0?true peer:InputPeer link:string = payments.ConnectedStarRefBots;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.connectedStarRefBots](/constructor/payments.connectedStarRefBots/) | Active [affiliations](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |

## Методы

| Method | Описание |
|---|---|
| [payments.getConnectedStarRefBots](/method/payments.getConnectedStarRefBots/) | Fetch all affiliations we have created for a certain peer |
| [payments.getConnectedStarRefBot](/method/payments.getConnectedStarRefBot/) | Fetch info about a specific [bot affiliation »](https://core.telegram.org/api/bots/referrals) |
| [payments.connectStarRefBot](/method/payments.connectStarRefBot/) | Join a bot's [affiliate program, becoming an affiliate »](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |
| [payments.editConnectedStarRefBot](/method/payments.editConnectedStarRefBot/) | Leave a bot's [affiliate program »](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |

## Related pages

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
