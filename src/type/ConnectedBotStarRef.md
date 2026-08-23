---
title: "ConnectedBotStarRef (тип)"
original: "https://core.telegram.org/type/ConnectedBotStarRef"
section: ref
kind: type
layout: layout.njk
---

# ConnectedBotStarRef

*Тип из схемы TL.*

> Info about an [active affiliate program we have with a Mini App](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate)

## Определение TL

```
connectedBotStarRef#19a13f71 flags:# revoked:flags.1?true url:string date:int bot_id:long commission_permille:int duration_months:flags.0?int participants:long revenue:long = ConnectedBotStarRef;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [connectedBotStarRef](/constructor/connectedBotStarRef/) | Info about an [active affiliate program we have with a Mini App](https://core.telegram.org/api/bots/referrals#becoming-an-affiliate) |

## Related pages

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
