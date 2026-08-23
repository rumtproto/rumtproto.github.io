---
title: "invokeWithTakeout (метод)"
original: "https://core.telegram.org/method/invokeWithTakeout"
section: ref
kind: method
layout: layout.njk
---

# invokeWithTakeout

*Метод из схемы TL.*

> Invoke a method within a [takeout session, see here » for more info](https://core.telegram.org/api/takeout).

## Определение TL

```
---functions---
invokeWithTakeout#aca9fd2e {X:Type} takeout_id:long query:!X = X;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| takeout_id | [long](/type/long/) | [Takeout session ID »](https://core.telegram.org/api/takeout) |
| query | !X | Query |

## Результат

Returns the type returned by the invoked method.

## Both users and bots can use this method

## Related pages

#### [Takeout API](https://core.telegram.org/api/takeout)

Telegram's API allows users to export all of their information through the takeout API.
