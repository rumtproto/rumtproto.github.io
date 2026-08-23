---
title: "prepaidStarsGiveaway (конструктор)"
original: "https://core.telegram.org/constructor/prepaidStarsGiveaway"
section: ref
kind: constructor
layout: layout.njk
---

# prepaidStarsGiveaway

*Конструктор из схемы TL.*

> Contains info about a [prepaid Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways).

## Определение TL

```
prepaidStarsGiveaway#9a9d77e0 id:long stars:long quantity:int boosts:int date:int = PrepaidGiveaway;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Prepaid giveaway ID. |
| stars | [long](/type/long/) | Number of given away [Telegram Stars »](https://core.telegram.org/api/stars) |
| quantity | [int](/type/int/) | Number of giveaway winners |
| boosts | [int](/type/int/) | Number of boosts the channel will gain by launching the giveaway. |
| date | [int](/type/int/) | When was the giveaway paid for |

## Тип

[PrepaidGiveaway](/type/PrepaidGiveaway/)

## Related pages

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
