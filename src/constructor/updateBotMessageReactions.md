---
title: "updateBotMessageReactions (конструктор)"
original: "https://core.telegram.org/constructor/updateBotMessageReactions"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotMessageReactions

*Конструктор из схемы TL.*

> Bots only: the number of reactions on a message with anonymous reactions has changed.

## Определение TL

```
updateBotMessageReactions#9cb7759 peer:Peer msg_id:int date:int reactions:Vector<ReactionCount> qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer of the reacted-to message. |
| msg_id | [int](/type/int/) | ID of the reacted-to message. |
| date | [int](/type/int/) | Date of the change. |
| reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[ReactionCount](/type/ReactionCount/)> | New reaction counters. |
| qts | [int](/type/int/) | [QTS](/api/updates/) event sequence identifier |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
