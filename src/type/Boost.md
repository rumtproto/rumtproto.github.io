---
title: "Boost (тип)"
original: "https://core.telegram.org/type/Boost"
section: ref
kind: type
layout: layout.njk
---

# Boost

*Тип из схемы TL.*

> Info about one or more [boosts](https://core.telegram.org/api/boost) applied by a specific user.

## Определение TL

```
boost#4b3e14d6 flags:# gift:flags.1?true giveaway:flags.2?true unclaimed:flags.3?true id:string user_id:flags.0?long giveaway_msg_id:flags.2?int date:int expires:int used_gift_slug:flags.4?string multiplier:flags.5?int stars:flags.6?long = Boost;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [boost](/constructor/boost/) | Info about one or more [boosts](https://core.telegram.org/api/boost) applied by a specific user. |

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
