---
title: "invokeWithoutUpdates (метод)"
original: "https://core.telegram.org/method/invokeWithoutUpdates"
section: ref
kind: method
layout: layout.njk
---

# invokeWithoutUpdates

*Метод из схемы TL.*

> Invoke a request without subscribing the used connection for [updates](/api/updates/) (this is enabled by default for [file queries](/api/files/)).

## Определение TL

```
---functions---
invokeWithoutUpdates#bf9459b7 {X:Type} query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| query | !X | The query |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method

## Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
