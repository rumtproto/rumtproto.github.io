---
title: "messageActionBoostApply (конструктор)"
original: "https://core.telegram.org/constructor/messageActionBoostApply"
section: ref
kind: constructor
layout: layout.njk
---

# messageActionBoostApply

*Конструктор из схемы TL.*

> Some [boosts »](https://core.telegram.org/api/boost) were applied to the channel or supergroup.

## Определение TL

```
messageActionBoostApply#cc02aa6d boosts:int = MessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| boosts | [int](/type/int/) | Number of applied [boosts](https://core.telegram.org/api/boost). |

## Тип

[MessageAction](/type/MessageAction/)

## Related pages

#### [Channel and supergroup boosts](https://core.telegram.org/api/boost)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.
