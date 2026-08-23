---
title: "payments.getSuggestedStarRefBots (метод)"
original: "https://core.telegram.org/method/payments.getSuggestedStarRefBots"
section: ref
kind: method
layout: layout.njk
---

# payments.getSuggestedStarRefBots

*Метод из схемы TL.*

> Obtain a list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals)
> `order_by_revenue` and `order_by_date` are mutually exclusive: if neither is set, results are sorted by profitability.

## Определение TL

```
payments.suggestedStarRefBots#b4d5d859 flags:# count:int suggested_bots:Vector<StarRefProgram> users:Vector<User> next_offset:flags.0?string = payments.SuggestedStarRefBots;
---functions---
payments.getSuggestedStarRefBots#d6b48f7 flags:# order_by_revenue:flags.0?true order_by_date:flags.1?true peer:InputPeer offset:string limit:int = payments.SuggestedStarRefBots;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| order_by_revenue | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, orders results by the expected revenue |
| order_by_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, orders results by the creation date of the affiliate program |
| peer | [InputPeer](/type/InputPeer/) | The peer that will become the affiliate: star commissions will be transferred to this peer's star balance. |
| offset | [string](/type/string/) | Offset for pagination, taken from [payments.suggestedStarRefBots](/constructor/payments.suggestedStarRefBots/).next_offset, initially empty. |
| limit | [int](/type/int/) | Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) |

## Результат

[payments.SuggestedStarRefBots](/type/payments.SuggestedStarRefBots/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [payments.suggestedStarRefBots](/constructor/payments.suggestedStarRefBots/)

A list of suggested [mini apps](https://core.telegram.org/api/bots/webapps) with available [affiliate programs](https://core.telegram.org/api/bots/referrals)

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](https://core.telegram.org/api/bots/webapps)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Affiliate programs](https://core.telegram.org/api/bots/referrals)

Developers can open affiliate programs for their mini app – allowing content creators, other mini app developers and any Telegram user to promote it and earn commissions on purchases made by people they referred.
