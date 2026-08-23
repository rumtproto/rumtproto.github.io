---
title: "updateBotMessageReaction (конструктор)"
original: "https://core.telegram.org/constructor/updateBotMessageReaction"
section: ref
kind: constructor
layout: layout.njk
---

# updateBotMessageReaction

*Конструктор из схемы TL.*

> Bots only: a user has changed their reactions on a message with public reactions.

## Определение TL

```
updateBotMessageReaction#ac21d3ce peer:Peer msg_id:int date:int actor:Peer old_reactions:Vector<Reaction> new_reactions:Vector<Reaction> qts:int = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| peer | [Peer](/type/Peer/) | Peer of the reacted-to message. |
| msg_id | [int](/type/int/) | ID of the reacted-to message. |
| date | [int](/type/int/) | Date of the change. |
| actor | [Peer](/type/Peer/) | The user that (un)reacted to the message. |
| old_reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[Reaction](/type/Reaction/)> | Old reactions |
| new_reactions | [Vector](https://core.telegram.org/type/Vector%20t)<[Reaction](/type/Reaction/)> | New reactions |
| qts | [int](/type/int/) | [QTS](/api/updates/) event sequence identifier |

## Тип

[Update](/type/Update/)

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
