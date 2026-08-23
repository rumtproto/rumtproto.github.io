---
title: "channels.reorderUsernames (метод)"
original: "https://core.telegram.org/method/channels.reorderUsernames"
section: ref
kind: method
layout: layout.njk
---

# channels.reorderUsernames

*Метод из схемы TL.*

> Reorder active usernames

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.reorderUsernames#b45ced1d channel:InputChannel order:Vector<string> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | The supergroup or channel |
| order | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | The new order for active usernames. All active usernames must be specified. |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
