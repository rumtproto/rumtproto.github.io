---
title: "premium.boostsList (конструктор)"
original: "https://core.telegram.org/constructor/premium.boostsList"
section: ref
kind: constructor
layout: layout.njk
---

# premium.boostsList

*Конструктор из схемы TL.*

> List of [boosts](https://core.telegram.org/api/boost) that were applied to a peer by multiple users.

## Определение TL

```
premium.boostsList#86f8613c flags:# count:int boosts:Vector<Boost> next_offset:flags.0?string users:Vector<User> = premium.BoostsList;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| count | [int](/type/int/) | Total number of results |
| boosts | [Vector](https://core.telegram.org/type/Vector%20t)<[Boost](/type/Boost/)> | [Boosts](https://core.telegram.org/api/boost) |
| next_offset | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[string](/type/string/) | Offset that can be used for [pagination](https://core.telegram.org/api/offsets). |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[premium.BoostsList](/type/premium.BoostsList/)

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Pagination in the API](https://core.telegram.org/api/offsets)

How to fetch results from large lists of objects.
