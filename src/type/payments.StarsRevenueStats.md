---
title: "payments.StarsRevenueStats (тип)"
original: "https://core.telegram.org/type/payments.StarsRevenueStats"
section: ref
kind: type
layout: layout.njk
---

# payments.StarsRevenueStats

*Тип из схемы TL.*

> [Star revenue statistics, see here »](https://core.telegram.org/api/stars) for more info.
> Note that all balances and currency amounts and graph values are in Stars.

## Определение TL

```
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;

---functions---

payments.getStarsRevenueStats#d91ffad6 flags:# dark:flags.0?true ton:flags.1?true peer:InputPeer = payments.StarsRevenueStats;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starsRevenueStats](/constructor/payments.starsRevenueStats/) | [Star revenue statistics, see here »](https://core.telegram.org/api/stars) for more info. Note that all balances and currency amounts and graph values are in Stars. |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarsRevenueStats](/method/payments.getStarsRevenueStats/) | Get [Telegram Star revenue statistics »](https://core.telegram.org/api/stars). |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
