---
title: "starsRevenueStatus (конструктор)"
original: "https://core.telegram.org/constructor/starsRevenueStatus"
section: ref
kind: constructor
layout: layout.njk
---

# starsRevenueStatus

*Конструктор из схемы TL.*

> Describes [Telegram Star revenue balances »](https://core.telegram.org/api/stars).

## Определение TL

```
starsRevenueStatus#febe5491 flags:# withdrawal_enabled:flags.0?true current_balance:StarsAmount available_balance:StarsAmount overall_revenue:StarsAmount next_withdrawal_at:flags.1?int = StarsRevenueStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| withdrawal_enabled | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, the user may [withdraw](https://core.telegram.org/api/stars#withdrawing-revenue) up to available_balance stars. |
| current_balance | [StarsAmount](/type/StarsAmount/) | Amount of not-yet-withdrawn Telegram Stars. |
| available_balance | [StarsAmount](/type/StarsAmount/) | Amount of withdrawable Telegram Stars. |
| overall_revenue | [StarsAmount](/type/StarsAmount/) | Total amount of earned Telegram Stars. |
| next_withdrawal_at | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Unixtime indicating when will withdrawal be available to the user. If not set, withdrawal can be started now. |

## Тип

[StarsRevenueStatus](/type/StarsRevenueStatus/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
