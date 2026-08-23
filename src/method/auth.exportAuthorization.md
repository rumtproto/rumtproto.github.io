---
title: "auth.exportAuthorization (метод)"
original: "https://core.telegram.org/method/auth.exportAuthorization"
section: ref
kind: method
layout: layout.njk
---

# auth.exportAuthorization

*Метод из схемы TL.*

> Returns data for copying authorization to another data-center.

## Определение TL

```
auth.exportedAuthorization#b434e2b8 id:long bytes:bytes = auth.ExportedAuthorization;
---functions---
auth.exportAuthorization#e5bfffcd dc_id:int = auth.ExportedAuthorization;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| dc_id | [int](/type/int/) | Number of a target data-center |

## Результат

[auth.ExportedAuthorization](/type/auth.ExportedAuthorization/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | DC_ID_INVALID | The provided DC ID is invalid. |
