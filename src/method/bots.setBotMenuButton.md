---
title: "bots.setBotMenuButton (метод)"
original: "https://core.telegram.org/method/bots.setBotMenuButton"
section: ref
kind: method
layout: layout.njk
---

# bots.setBotMenuButton

*Метод из схемы TL.*

> Sets the [menu button action »](https://core.telegram.org/api/bots/menu) for a given user or for all users

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotMenuButton#4504d54f user_id:InputUser button:BotMenuButton = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | User ID |
| button | [BotMenuButton](/type/BotMenuButton/) | Bot menu button action |

## Результат

[Bool](/type/Bool/)

## Only bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BUTTON_INVALID | The specified button is invalid. |
| 400 | BUTTON_TEXT_INVALID | The specified button text is invalid. |
| 400 | BUTTON_URL_INVALID | Button URL invalid. |
| 400 | USER_BOT_REQUIRED | This method can only be called by a bot. |

## Related pages

#### [Bot menu button](https://core.telegram.org/api/bots/menu)

Bots can choose the behavior of the menu button shown next to the text input field.
