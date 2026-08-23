---
title: "users.getFullUser (метод)"
original: "https://core.telegram.org/method/users.getFullUser"
section: ref
kind: method
layout: layout.njk
---

# users.getFullUser

*Метод из схемы TL.*

> Returns extended user info by ID.

## Определение TL

```
users.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;
---functions---
users.getFullUser#b60f5918 id:InputUser = users.UserFull;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| id | [InputUser](/type/InputUser/) | User ID |

## Результат

[users.UserFull](/type/users.UserFull/)

## Both users and bots can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 400 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | USERNAME_OCCUPIED | The provided username is already occupied. |
| 400 | USER_ID_INVALID | The provided user ID is invalid. |
