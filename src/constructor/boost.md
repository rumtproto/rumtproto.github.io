---
title: "boost (конструктор)"
original: "https://core.telegram.org/constructor/boost"
section: ref
kind: constructor
layout: layout.njk
---

# boost

*Конструктор из схемы TL.*

> Info about one or more [boosts](https://core.telegram.org/api/boost) applied by a specific user.

## Определение TL

```
boost#4b3e14d6 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int stars:flags.6?long = Boost;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| gift | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether this boost was applied because the channel/supergroup [directly gifted a subscription to the user](https://core.telegram.org/api/giveaways). |
| giveaway | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this boost was applied because the user was chosen in a [giveaway started by the channel/supergroup](https://core.telegram.org/api/giveaways). |
| unclaimed | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | If set, the user hasn't yet invoked [payments.applyGiftCode](/method/payments.applyGiftCode/) to claim a subscription gifted [directly or in a giveaway by the channel](https://core.telegram.org/api/giveaways). |
| id | [string](/type/string/) | Unique ID for this set of boosts. |
| user_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | ID of the user that applied the boost. |
| giveaway_msg_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[int](/type/int/) | The message ID of the [giveaway](https://core.telegram.org/api/giveaways) |
| date | [int](/type/int/) | When was the boost applied |
| expires | [int](/type/int/) | When does the boost expire |
| used_gift_slug | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[string](/type/string/) | The created Telegram Premium gift code, only set if either gift or giveaway are set AND it is either a gift code for the currently logged in user or if it was already claimed. |
| multiplier | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[int](/type/int/) | If set, this boost counts as multiplier boosts, otherwise it counts as a single boost. |
| stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[long](/type/long/) | Number of Telegram Stars distributed among the winners of the giveaway. |

## Тип

[Boost](/type/Boost/)

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.

#### [payments.applyGiftCode](/method/payments.applyGiftCode/)

Apply a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways)

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
