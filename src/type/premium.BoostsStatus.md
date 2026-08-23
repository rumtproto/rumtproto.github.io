---
title: "Premium.BoostsStatus (тип)"
original: "https://core.telegram.org/type/premium.BoostsStatus"
section: ref
kind: type
layout: layout.njk
---

# Premium.BoostsStatus

*Тип из схемы TL.*

> Contains info about the current [boost status](https://core.telegram.org/api/boost) of a peer.

## Определение TL

```
premium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;

---functions---

premium.getBoostsStatus#42f1f61 peer:InputPeer = premium.BoostsStatus;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [premium.boostsStatus](/constructor/premium.boostsStatus/) | Contains info about the current [boost status](https://core.telegram.org/api/boost) of a peer. |

## Методы

| Method | Описание |
|---|---|
| [premium.getBoostsStatus](/method/premium.getBoostsStatus/) | Gets the current [number of boosts](https://core.telegram.org/api/boost) of a channel/supergroup. |

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
