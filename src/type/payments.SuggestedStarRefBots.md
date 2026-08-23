---
title: "Payments.SuggestedStarRefBots (тип)"
original: "https://core.telegram.org/type/payments.SuggestedStarRefBots"
section: ref
kind: type
layout: layout.njk
---

# Payments.SuggestedStarRefBots

*Тип из схемы TL.*

> A list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals)

## Определение TL

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;

---functions---

payments.getSuggestedStarRefBots#d6b48f7 flags:# order_by_revenue:flags.0?true order_by_date:flags.1?true peer:InputPeer offset:string limit:int = payments.SuggestedStarRefBots;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.suggestedStarRefBots](/constructor/payments.suggestedStarRefBots/) | A list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals) |

## Методы

| Method | Описание |
|---|---|
| [payments.getSuggestedStarRefBots](/method/payments.getSuggestedStarRefBots/) | Obtain a list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals) order_by_revenue and order_by_date are mutually exclusive: if neither is set, results are sorted by profitability. |

## Related pages

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
