---
title: "payments.starsRevenueStats (конструктор)"
original: "https://core.telegram.org/constructor/payments.starsRevenueStats"
section: ref
kind: constructor
layout: layout.njk
---

# payments.starsRevenueStats

*Конструктор из схемы TL.*

> [Star revenue statistics, see here »](https://core.telegram.org/api/stars) for more info.
> Note that all balances and currency amounts and graph values are in Stars.

## Определение TL

```
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| top_hours_graph | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[StatsGraph](/type/StatsGraph/) | For ad revenue statistics, ad impressions graph |
| revenue_graph | [StatsGraph](/type/StatsGraph/) | Star revenue graph (number of earned stars) |
| status | [StarsRevenueStatus](/type/StarsRevenueStatus/) | Current balance, current withdrawable balance and overall earned Telegram Stars |
| usd_rate | [double](/type/double/) | Current conversion rate of Telegram Stars to USD |

## Тип

[payments.StarsRevenueStats](/type/payments.StarsRevenueStats/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
