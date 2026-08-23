---
title: "messages.saveGif (метод)"
original: "https://core.telegram.org/method/messages.saveGif"
section: ref
kind: method
layout: layout.njk
---

# messages.saveGif

*Метод из схемы TL.*

> Add GIF to saved gifs list

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.saveGif#327a30cb id:InputDocument unsave:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputDocument](/type/InputDocument/) | GIF to save |
| unsave | [Bool](/type/Bool/) | Whether to remove GIF from saved gifs list |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | GIF_ID_INVALID | The provided GIF ID is invalid. |
