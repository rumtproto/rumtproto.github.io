---
title: "channels.deactivateAllUsernames (метод)"
original: "https://core.telegram.org/method/channels.deactivateAllUsernames"
section: ref
kind: method
layout: layout.njk
---

# channels.deactivateAllUsernames

*Метод из схемы TL.*

> Disable all purchased usernames of a supergroup or channel

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.deactivateAllUsernames#a245dd3 channel:InputChannel = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Supergroup or channel |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
