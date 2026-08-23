---
title: "bots.sendCustomRequest (метод)"
original: "https://core.telegram.org/method/bots.sendCustomRequest"
section: ref
kind: method
layout: layout.njk
---

# bots.sendCustomRequest

*Метод из схемы TL.*

> Sends a custom request; for bots only

## Определение TL

```
dataJSON#7d748d04 data:string = DataJSON;
---functions---
bots.sendCustomRequest#aa2769ed custom_method:string params:DataJSON = DataJSON;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| custom_method | [string](/type/string/) | The method name |
| params | [DataJSON](/type/DataJSON/) | JSON-serialized method parameters |

## Результат

[DataJSON](/type/DataJSON/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DATA_JSON_INVALID | The provided JSON data is invalid. |
| 400 | METHOD_INVALID | The specified method is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
