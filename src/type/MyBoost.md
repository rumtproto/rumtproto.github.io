---
title: "MyBoost (тип)"
original: "https://core.telegram.org/type/MyBoost"
section: ref
kind: type
layout: layout.njk
---

# MyBoost

*Тип из схемы TL.*

> Contains information about a single [boost slot »](https://core.telegram.org/api/boost).

## Определение TL

```
myBoost#c448415c flags:# slot:int peer:flags.0?Peer date:int expires:int cooldown_until_date:flags.1?int = MyBoost;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [myBoost](/constructor/myBoost/) | Contains information about a single [boost slot »](https://core.telegram.org/api/boost). |

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
