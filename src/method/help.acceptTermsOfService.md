---
title: "help.acceptTermsOfService (метод)"
original: "https://core.telegram.org/method/help.acceptTermsOfService"
section: ref
kind: method
layout: layout.njk
---

# help.acceptTermsOfService

*Метод из схемы TL.*

> Accept the new terms of service

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
help.acceptTermsOfService#ee72f79a id:DataJSON = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [DataJSON](/type/DataJSON/) | ID of terms of service |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DATA_JSON_INVALID | The provided JSON data is invalid. |
