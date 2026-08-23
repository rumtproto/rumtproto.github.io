---
title: "payments.suggestedStarRefBots (конструктор)"
original: "https://core.telegram.org/constructor/payments.suggestedStarRefBots"
section: ref
kind: constructor
layout: layout.njk
---

# payments.suggestedStarRefBots

*Конструктор из схемы TL.*

> A list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals)

## Определение TL

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of results (for pagination) |
| suggested_bots | [Vector](https://core.telegram.org/type/Vector%20t)<[StarRefProgram](/type/StarRefProgram/)> | Suggested affiliate programs (full or partial list to be fetched using pagination) |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Peers mentioned in suggested_bots |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Next offset for [pagination](https://core.telegram.org/api/offsets) |

## Тип

[payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/)

## Related pages

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
