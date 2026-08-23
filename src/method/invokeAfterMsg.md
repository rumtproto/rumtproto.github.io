---
title: "invokeAfterMsg (метод)"
original: "https://core.telegram.org/method/invokeAfterMsg"
section: ref
kind: method
layout: layout.njk
---

# invokeAfterMsg

*Метод из схемы TL.*

> Invokes a query after successful completion of one of the previous queries.

## Определение TL

```
---functions---
invokeAfterMsg#cb9f372d {X:Type} msg_id:long query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| msg_id | [long](/type/long/) | Message identifier on which a current query depends |
| query | !X | The query itself |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method
