---
title: "bots.canSendMessage (метод)"
original: "https://core.telegram.org/method/bots.canSendMessage"
section: ref
kind: method
layout: layout.njk
---

# bots.canSendMessage

*Метод из схемы TL.*

> Check whether the specified bot can send us messages

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.canSendMessage#1359f4e6 bot:InputUser = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
