---
title: "myBoost (конструктор)"
original: "https://core.telegram.org/constructor/myBoost"
section: ref
kind: constructor
layout: layout.njk
---

# myBoost

*Конструктор из схемы TL.*

> Contains information about a single [boost slot »](https://core.telegram.org/api/boost).

## Определение TL

```
myBoost#c448415c flags:# slot:int peer:flags.0?Peer date:int expires:int cooldown_until_date:flags.1?int = MyBoost;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| slot | [int](/type/int/) | [Boost slot ID »](https://core.telegram.org/api/boost) |
| peer | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[Peer](/type/Peer/) | If set, indicates this slot is currently occupied, i.e. we are [boosting](https://core.telegram.org/api/boost) this peer. Note that we can assign multiple boost slots to the same peer. |
| date | [int](/type/int/) | When (unixtime) we started boosting the peer, 0 otherwise. |
| expires | [int](/type/int/) | Indicates the (unixtime) expiration date of the boost in peer (0 if peer is not set). |
| cooldown_until_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | If peer is set, indicates the (unixtime) date after which this boost can be reassigned to another channel. |

## Тип

[MyBoost](/type/MyBoost/)

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
