---
title: "bots.resetBotCommands (метод)"
original: "https://core.telegram.org/method/bots.resetBotCommands"
section: ref
kind: method
layout: layout.njk
---

# bots.resetBotCommands

*Метод из схемы TL.*

> Clear bot commands for the specified bot scope and language code

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.resetBotCommands#3d8de0f9 scope:BotCommandScope lang_code:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| scope | [BotCommandScope](/type/BotCommandScope/) | Command scope |
| lang_code | [string](/type/string/) | Language code |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | LANG_CODE_INVALID | The specified language code is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
