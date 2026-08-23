---
title: "bots.getBotMenuButton (метод)"
original: "https://core.telegram.org/method/bots.getBotMenuButton"
section: ref
kind: method
layout: layout.njk
---

# bots.getBotMenuButton

*Метод из схемы TL.*

> Gets the menu button action for a given user or for all users, previously set using [bots.setBotMenuButton](/method/bots.setBotMenuButton/); users can see this information in the [botInfo](/constructor/botInfo/) constructor.

## Определение TL

```
botMenuButtonDefault#7533a588 = BotMenuButton;
botMenuButtonCommands#4258c205 = BotMenuButton;
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;
---functions---
bots.getBotMenuButton#9c60eb28 user_id:InputUser = BotMenuButton;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | User ID or empty for the default menu button. |

## Результат

[BotMenuButton](/type/BotMenuButton/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |

## Related pages

#### [bots.setBotMenuButton](/method/bots.setBotMenuButton/)

Sets the [menu button action »](https://core.telegram.org/api/bots/menu) for a given user or for all users

#### [botInfo](/constructor/botInfo/)

Info about bots (available bot commands, etc)
