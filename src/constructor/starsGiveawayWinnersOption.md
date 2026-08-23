---
title: "starsGiveawayWinnersOption (конструктор)"
original: "https://core.telegram.org/constructor/starsGiveawayWinnersOption"
section: ref
kind: constructor
layout: layout.njk
---

# starsGiveawayWinnersOption

*Конструктор из схемы TL.*

> Allowed options for the number of giveaway winners.

## Определение TL

```
starsGiveawayWinnersOption#54236209 flags:# default:flags.0?true users:int per_user_stars:long = StarsGiveawayWinnersOption;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| default | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If set, this option must be pre-selected by default in the option list. |
| users | [int](/type/int/) | The number of users that will be randomly chosen as winners. |
| per_user_stars | [long](/type/long/) | The number of [Telegram Stars](https://core.telegram.org/api/stars) each winner will receive. |

## Тип

[StarsGiveawayWinnersOption](/type/StarsGiveawayWinnersOption/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.
