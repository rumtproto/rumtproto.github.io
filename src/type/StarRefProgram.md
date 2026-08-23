---
title: "StarRefProgram (тип)"
original: "https://core.telegram.org/type/StarRefProgram"
section: ref
kind: type
layout: layout.njk
---

# StarRefProgram

*Тип из схемы TL.*

> Indo about an [affiliate program offered by a bot](https://core.telegram.org/api/bots/referrals)

## Определение TL

```
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;

---functions---

bots.updateStarRefProgram#778b5ab3 flags:# bot:InputUser commission_permille:int duration_months:flags.0?int = StarRefProgram;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starRefProgram](/constructor/starRefProgram/) | Info about an [affiliate program offered by a bot](https://core.telegram.org/api/bots/referrals) |

## Методы

| Method | Описание |
|---|---|
| [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/) | Create, edit or delete the [affiliate program](https://core.telegram.org/api/bots/referrals) of a bot we own |

## Related pages

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
