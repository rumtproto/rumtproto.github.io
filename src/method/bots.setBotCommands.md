---
title: "bots.setBotCommands (метод)"
original: "https://core.telegram.org/method/bots.setBotCommands"
section: ref
kind: method
layout: layout.njk
---

# bots.setBotCommands

*Метод из схемы TL.*

> Set bot command list

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotCommands#517165a scope:BotCommandScope lang_code:string commands:Vector<BotCommand> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| scope | [BotCommandScope](/type/BotCommandScope/) | Command scope |
| lang_code | [string](/type/string/) | Language code |
| commands | [Vector](https://core.telegram.org/type/Vector%20t)<[BotCommand](/type/BotCommand/)> | Bot commands |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_COMMAND_DESCRIPTION_INVALID | The specified command description is invalid. |
| 400 | BOT_COMMAND_INVALID | The specified command is invalid. |
| 400 | LANG_CODE_INVALID | The specified language code is invalid. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
