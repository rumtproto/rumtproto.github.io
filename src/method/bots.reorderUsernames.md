---
title: "bots.reorderUsernames (метод)"
original: "https://core.telegram.org/method/bots.reorderUsernames"
section: ref
kind: method
layout: layout.njk
---

# bots.reorderUsernames

*Метод из схемы TL.*

> Reorder usernames associated to a bot we own.

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.reorderUsernames#9709b1c2 bot:InputUser order:Vector<string> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| bot | [InputUser](/type/InputUser/) | The bot |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | The new order for active usernames. All active usernames must be specified. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | USERNAME_NOT_MODIFIED | The username was not modified. |
