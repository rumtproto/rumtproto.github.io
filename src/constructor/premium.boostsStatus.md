---
title: "premium.boostsStatus (конструктор)"
original: "https://core.telegram.org/constructor/premium.boostsStatus"
section: ref
kind: constructor
layout: layout.njk
---

# premium.boostsStatus

*Конструктор из схемы TL.*

> Contains info about the current [boost status](https://core.telegram.org/api/boost) of a peer.

## Определение TL

```
premium.boostsStatus#4959427a flags:# my_boost:flags.2?true level:int current_level_boosts:int boosts:int gift_boosts:flags.4?int next_level_boosts:flags.0?int premium_audience:flags.1?StatsPercentValue boost_url:string prepaid_giveaways:flags.3?Vector<PrepaidGiveaway> my_boost_slots:flags.2?Vector<int> = premium.BoostsStatus;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| my_boost | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether we're currently boosting this channel/supergroup, my_boost_slots will also be set. |
| level | [int](/type/int/) | The current boost level of the channel/supergroup. |
| current_level_boosts | [int](/type/int/) | The number of boosts acquired so far in the current level. |
| boosts | [int](/type/int/) | Total number of boosts acquired so far. |
| gift_boosts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[int](/type/int/) | The number of boosts acquired from created Telegram Premium [gift codes](https://core.telegram.org/api/giveaways) and [giveaways](https://core.telegram.org/api/giveaways); only returned to channel/supergroup admins. |
| next_level_boosts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[int](/type/int/) | Total number of boosts needed to reach the next level; if absent, the next level isn't available. |
| premium_audience | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[StatsPercentValue](/type/StatsPercentValue/) | Only returned to channel/supergroup admins: contains the approximated number of Premium users subscribed to the channel/supergroup, related to the total number of subscribers. |
| boost_url | [string](/type/string/) | [Boost deep link »](https://core.telegram.org/api/links#boost-links) that can be used to boost the chat. |
| prepaid_giveaways | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[PrepaidGiveaway](/type/PrepaidGiveaway/)> | A list of prepaid [giveaways](https://core.telegram.org/api/giveaways) available for the chat; only returned to channel/supergroup admins. |
| my_boost_slots | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | Indicates which of our [boost slots](https://core.telegram.org/api/boost) we've assigned to this peer (populated if my_boost is set). |

## Тип

[premium.BoostsStatus](/type/premium.BoostsStatus/)

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
