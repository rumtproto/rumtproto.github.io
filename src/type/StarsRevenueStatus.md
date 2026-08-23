---
title: "StarsRevenueStatus (тип)"
original: "https://core.telegram.org/type/StarsRevenueStatus"
section: ref
kind: type
layout: layout.njk
---

# StarsRevenueStatus

*Тип из схемы TL.*

> Describes [Telegram Star revenue balances »](https://core.telegram.org/api/stars).

## Определение TL

```
starsRevenueStatus#febe5491 flags:# withdrawal_enabled:flags.0?true current_balance:StarsAmount available_balance:StarsAmount overall_revenue:StarsAmount next_withdrawal_at:flags.1?int = StarsRevenueStatus;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starsRevenueStatus](/constructor/starsRevenueStatus/) | Describes [Telegram Star revenue balances »](https://core.telegram.org/api/stars). |

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
