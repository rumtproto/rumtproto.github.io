---
title: "channels.updateUsername (метод)"
original: "https://core.telegram.org/method/channels.updateUsername"
section: ref
kind: method
layout: layout.njk
---

# channels.updateUsername

*Метод из схемы TL.*

> Change or remove the username of a supergroup/channel

## Определение TL

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
channels.updateUsername#3514b3de channel:InputChannel username:string = Bool;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| channel | [InputChannel](/type/InputChannel/) | Channel |
| username | [string](/type/string/) | New username, pass an empty string to remove the username |

## Результат

[Bool](/type/Bool/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNELS_ADMIN_PUBLIC_TOO_MUCH | You're admin of too many public channels, make some channels private to change the username of this channel. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_NOT_MODIFIED | No changes were made to chat information because the new information you passed is identical to the current information. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | USERNAME_INVALID | The provided username is not valid. |
| 400 | USERNAME_NOT_MODIFIED | The username was not modified. |
| 400 | USERNAME_OCCUPIED | The provided username is already occupied. |
| 400 | USERNAME_PURCHASE_AVAILABLE | The specified username can be purchased on [https://fragment.com](https://fragment.com). |
