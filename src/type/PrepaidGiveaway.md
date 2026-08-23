---
title: "PrepaidGiveaway (тип)"
original: "https://core.telegram.org/type/PrepaidGiveaway"
section: ref
kind: type
layout: layout.njk
---

# PrepaidGiveaway

*Тип из схемы TL.*

> Contains info about a [prepaid giveaway »](https://core.telegram.org/api/giveaways).

## Определение TL

```
prepaidGiveaway#b2539d54 id:long months:int quantity:int date:int = PrepaidGiveaway;
prepaidStarsGiveaway#9a9d77e0 id:long stars:long quantity:int boosts:int date:int = PrepaidGiveaway;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [prepaidGiveaway](/constructor/prepaidGiveaway/) | Contains info about a [prepaid giveaway »](https://core.telegram.org/api/giveaways). |
| [prepaidStarsGiveaway](/constructor/prepaidStarsGiveaway/) | Contains info about a [prepaid Telegram Star giveaway »](https://core.telegram.org/api/giveaways#star-giveaways). |

## Related pages

#### [Giveaways and gifts](https://core.telegram.org/api/giveaways)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
