---
title: "premium.getMyBoosts (метод)"
original: "https://core.telegram.org/method/premium.getMyBoosts"
section: ref
kind: method
layout: layout.njk
---

# premium.getMyBoosts

*Метод из схемы TL.*

> Obtain which peers are we currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left.

## Определение TL

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;
---functions---
premium.getMyBoosts#be77b4a = premium.MyBoosts;
```

## Параметры

This constructor does not require any parameters.

## Результат

[premium.MyBoosts](/type/premium.MyBoosts/)

## Only users can use this method

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
