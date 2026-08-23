---
title: "StarsGiveawayOption (тип)"
original: "https://core.telegram.org/type/StarsGiveawayOption"
section: ref
kind: type
layout: layout.njk
---

# StarsGiveawayOption

*Тип из схемы TL.*

> Contains info about a [Telegram Star giveaway](https://core.telegram.org/api/giveaways#star-giveaways) option.

## Определение TL

```
starsGiveawayOption#94ce852a flags:# extended:flags.0?true default:flags.1?true stars:long yearly_boosts:int store_product:flags.2?string currency:string amount:long winners:Vector<StarsGiveawayWinnersOption> = StarsGiveawayOption;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [starsGiveawayOption](/constructor/starsGiveawayOption/) | Contains info about a [Telegram Star giveaway](https://core.telegram.org/api/giveaways#star-giveaways) option. |

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
