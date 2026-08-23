---
title: "invokeAfterMsgs (метод)"
original: "https://core.telegram.org/method/invokeAfterMsgs"
section: ref
kind: method
layout: layout.njk
---

# invokeAfterMsgs

*Метод из схемы TL.*

> Invokes a query after a successful completion of previous queries

## Определение TL

```
---functions---
invokeAfterMsgs#3dc4b4f0 {X:Type} msg_ids:Vector<long> query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| msg_ids | [Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | List of messages on which a current query depends |
| query | !X | The query itself |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method
