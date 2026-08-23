---
title: "bots.getBotCommands (метод)"
original: "https://core.telegram.org/method/bots.getBotCommands"
section: ref
kind: method
layout: layout.njk
---

# bots.getBotCommands

*Метод из схемы TL.*

> Obtain a list of bot commands for the specified bot scope and language code

## Определение TL

```
---functions---
bots.getBotCommands#e34c0dd6 scope:BotCommandScope lang_code:string = Vector<BotCommand>;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| scope | [BotCommandScope](/type/BotCommandScope/) | Command scope |
| lang_code | [string](/type/string/) | Language code |

## Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[BotCommand](/type/BotCommand/)\>

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |
