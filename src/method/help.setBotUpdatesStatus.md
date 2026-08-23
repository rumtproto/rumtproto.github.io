---
title: "help.setBotUpdatesStatus (метод)"
original: "https://core.telegram.org/method/help.setBotUpdatesStatus"
section: ref
kind: method
layout: layout.njk
---

# help.setBotUpdatesStatus

*Метод из схемы TL.*

> Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.setBotUpdatesStatus#ec22cfcd pending_updates_count:int message:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| pending_updates_count | [int](/type/int/) | Number of pending updates |
| message | [string](/type/string/) | Error message, if present |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
