---
title: "prepaidGiveaway (конструктор)"
original: "https://core.telegram.org/constructor/prepaidGiveaway"
section: ref
kind: constructor
layout: layout.njk
---

# prepaidGiveaway

*Конструктор из схемы TL.*

> Contains info about a [prepaid giveaway »](https://core.telegram.org/api/giveaways).

## Определение TL

```
prepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [long](/type/long/) | Prepaid giveaway ID. |
| months | [int](/type/int/) | Duration in months of each gifted [Telegram Premium](https://core.telegram.org/api/premium) subscription. |
| quantity | [int](/type/int/) | Number of given away [Telegram Premium](https://core.telegram.org/api/premium) subscriptions. |
| date | [int](/type/int/) | Payment date. |

## Тип

[PrepaidGiveaway](/type/PrepaidGiveaway/)

## Related pages

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
