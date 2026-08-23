---
title: "starRefProgram (конструктор)"
original: "https://core.telegram.org/constructor/starRefProgram"
section: ref
kind: constructor
layout: layout.njk
---

# starRefProgram

*Конструктор из схемы TL.*

> Info about an [affiliate program offered by a bot](https://core.telegram.org/api/bots/referrals)

## Определение TL

```
starRefProgram#dd0c66f2 flags:# bot_id:long commission_permille:int duration_months:flags.0?int end_date:flags.1?int daily_revenue_per_user:flags.2?StarsAmount = StarRefProgram;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| bot_id | [long](/type/long/) | ID of the bot that offers the program |
| commission_permille | [int](/type/int/) | An affiliate gets a commission of [starRefProgram](/constructor/starRefProgram/).commission_permille‰ [Telegram Stars](https://core.telegram.org/api/stars) for every mini app transaction made by users they refer |
| duration_months | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | An affiliate gets a commission for every mini app transaction made by users they refer, for duration_months months after a referral link is imported, starting the bot for the first time |
| end_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Point in time (Unix timestamp) when the affiliate program will be closed (optional, if not set the affiliate program isn't scheduled to be closed) |
| daily_revenue_per_user | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[StarsAmount](/type/StarsAmount/) | The amount of daily revenue per user in Telegram Stars of the bot that created the affiliate program. To obtain the approximated revenue per referred user, multiply this value by commission_permille and divide by 1000. |

## Тип

[StarRefProgram](/type/StarRefProgram/)

## Related pages

#### [starRefProgram](/constructor/starRefProgram/)

Info about an [affiliate program offered by a bot](https://core.telegram.org/api/bots/referrals)

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
