---
title: "premium.myBoosts (конструктор)"
original: "https://core.telegram.org/constructor/premium.myBoosts"
section: ref
kind: constructor
layout: layout.njk
---

# premium.myBoosts

*Конструктор из схемы TL.*

> A list of peers we are currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left.

## Определение TL

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| my_boosts | [Vector](https://core.telegram.org/type/Vector%20t)<[MyBoost](/type/MyBoost/)> | Info about boosted peers and remaining boost slots. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Referenced chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Referenced users |

## Тип

[premium.MyBoosts](/type/premium.MyBoosts/)

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
