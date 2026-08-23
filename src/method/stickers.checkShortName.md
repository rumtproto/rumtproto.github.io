---
title: "stickers.checkShortName (метод)"
original: "https://core.telegram.org/method/stickers.checkShortName"
section: ref
kind: method
layout: layout.njk
---

# stickers.checkShortName

*Метод из схемы TL.*

> Check whether the given short name is available

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
stickers.checkShortName#284b3639 short_name:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| short_name | [string](/type/string/) | Short name |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | SHORT_NAME_INVALID | The specified short name is invalid. |
| 400 | SHORT_NAME_OCCUPIED | The specified short name is already in use. |
