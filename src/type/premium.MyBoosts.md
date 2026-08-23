---
title: "Premium.MyBoosts (тип)"
original: "https://core.telegram.org/type/premium.MyBoosts"
section: ref
kind: type
layout: layout.njk
---

# Premium.MyBoosts

*Тип из схемы TL.*

> A list of peers we are currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left.

## Определение TL

```
premium.myBoosts#9ae228e2 my_boosts:Vector<MyBoost> chats:Vector<Chat> users:Vector<User> = premium.MyBoosts;

---functions---

premium.getMyBoosts#be77b4a = premium.MyBoosts;
premium.applyBoost#6b7da746 flags:# slots:flags.0?Vector<int> peer:InputPeer = premium.MyBoosts;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [premium.myBoosts](/constructor/premium.myBoosts/) | A list of peers we are currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left. |

## Методы

| Method | Описание |
|---|---|
| [premium.getMyBoosts](/method/premium.getMyBoosts/) | Obtain which peers are we currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left. |
| [premium.applyBoost](/method/premium.applyBoost/) | Apply one or more [boosts »](https://core.telegram.org/api/boost) to a peer. |

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
