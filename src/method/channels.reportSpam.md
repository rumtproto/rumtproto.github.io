---
title: "channels.reportSpam (метод)"
original: "https://core.telegram.org/method/channels.reportSpam"
section: ref
kind: method
layout: layout.njk
---

# channels.reportSpam

*Метод из схемы TL.*

> Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.reportSpam#f44a8315 channel:InputChannel participant:InputPeer id:Vector<int> = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Supergroup |
| participant | [InputPeer](/type/InputPeer/) | Participant whose messages should be reported |
| id | [Vector](https://core.telegram.org/type/Vector%20t)<[int](/type/int/)> | IDs of spam messages |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
