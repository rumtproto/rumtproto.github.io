---
title: "invokeWithMessagesRange (метод)"
original: "https://core.telegram.org/method/invokeWithMessagesRange"
section: ref
kind: method
layout: layout.njk
---

# invokeWithMessagesRange

*Метод из схемы TL.*

> Invoke with the given message range

## Определение TL

```
---functions---
invokeWithMessagesRange#365275f2 {X:Type} range:MessageRange query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| range | [MessageRange](/type/MessageRange/) | Message range |
| query | !X | Query |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method
