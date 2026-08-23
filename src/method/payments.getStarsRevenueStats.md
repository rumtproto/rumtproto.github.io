---
title: "payments.getStarsRevenueStats (метод)"
original: "https://core.telegram.org/method/payments.getStarsRevenueStats"
section: ref
kind: method
layout: layout.njk
---

# payments.getStarsRevenueStats

*Метод из схемы TL.*

> Get [Telegram Star revenue statistics »](https://core.telegram.org/api/stars).

## Определение TL

```
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;
---functions---
payments.getStarsRevenueStats#d91ffad6 flags:# dark:flags.0?true ton:flags.1?true peer:InputPeer = payments.StarsRevenueStats;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| dark | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to enable dark theme for graph colors |
| ton | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | If set, fetches channel/bot ad revenue statistics in TON. |
| peer | [InputPeer](/type/InputPeer/) | Get statistics for the specified bot, channel or ourselves ([inputPeerSelf](/constructor/inputPeerSelf/)). |

## Результат

[payments.StarsRevenueStats](/type/payments.StarsRevenueStats/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |

## Related pages

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
