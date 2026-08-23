---
title: "messages.setDefaultHistoryTTL (метод)"
original: "https://core.telegram.org/method/messages.setDefaultHistoryTTL"
section: ref
kind: method
layout: layout.njk
---

# messages.setDefaultHistoryTTL

*Метод из схемы TL.*

> Changes the default value of the Time-To-Live setting, applied to all new chats.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setDefaultHistoryTTL#9eb51445 period:int = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| period | [int](/type/int/) | The new default Time-To-Live of all messages sent in new chats, in seconds. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | TTL_PERIOD_INVALID | The specified TTL period is invalid. |
