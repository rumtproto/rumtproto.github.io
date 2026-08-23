---
title: "messages.faveSticker (метод)"
original: "https://core.telegram.org/method/messages.faveSticker"
section: ref
kind: method
layout: layout.njk
---

# messages.faveSticker

*Метод из схемы TL.*

> Mark or unmark a sticker as favorite

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.faveSticker#b9ffc55b id:InputDocument unfave:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputDocument](/type/InputDocument/) | Sticker in question |
| unfave | [Bool](/type/Bool/) | Whether to add or remove a sticker from favorites |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | STICKER_ID_INVALID | The provided sticker ID is invalid. |
