---
title: "updateBotChatBoost (конструктор)"
original: "https://core.telegram.org/constructor/updateBotChatBoost"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotChatBoost

*Конструктор из схемы TL.*

> A [channel/supergroup boost](https://core.telegram.org/api/boost) has changed (bots only)

## Определение TL

```
updateBotChatBoost#904dd49c peer:Peer boost:Boost qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Channel |
| boost | [Boost](/type/Boost/) | New boost information |
| qts | [int](/type/int/) | [QTS](/api/updates/) event sequence identifier |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
