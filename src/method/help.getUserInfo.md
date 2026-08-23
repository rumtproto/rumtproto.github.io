---
title: "help.getUserInfo (метод)"
original: "https://core.telegram.org/method/help.getUserInfo"
section: ref
kind: method
layout: layout.njk
---

# help.getUserInfo

*Метод из схемы TL.*

> Can only be used by TSF members to obtain internal information.

## Определение TL

```
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;
---functions---
help.getUserInfo#38a08d3 user_id:InputUser = help.UserInfo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| user_id | [InputUser](/type/InputUser/) | User ID |

## Результат

[help.UserInfo](/type/help.UserInfo/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | USER_INVALID | Invalid user provided. |
