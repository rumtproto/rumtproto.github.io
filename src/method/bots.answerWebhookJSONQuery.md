---
title: "bots.answerWebhookJSONQuery (метод)"
original: "https://core.telegram.org/method/bots.answerWebhookJSONQuery"
section: ref
kind: method
layout: layout.njk
---

# bots.answerWebhookJSONQuery

*Метод из схемы TL.*

> Answers a custom query; for bots only

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.answerWebhookJSONQuery#e6213f4d query_id:long data:DataJSON = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| query_id | [long](/type/long/) | Identifier of a custom query |
| data | [DataJSON](/type/DataJSON/) | JSON-serialized answer to the query |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DATA_JSON_INVALID | The provided JSON data is invalid. |
| 400 | QUERY_ID_INVALID | The query ID is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
