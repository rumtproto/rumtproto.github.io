---
title: "bots.toggleUsername (метод)"
original: "https://core.telegram.org/method/bots.toggleUsername"
section: ref
kind: method
layout: layout.njk
---

# bots.toggleUsername

*Метод из схемы TL.*

> Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a bot we own.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.toggleUsername#53ca973 bot:InputUser username:string active:Bool = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot |
| username | [string](/type/string/) | Username |
| active | [Bool](/type/Bool/) | Whether to activate or deactivate it |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | USERNAME_NOT_MODIFIED | The username was not modified. |
