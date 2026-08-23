---
title: "Help.UserInfo (тип)"
original: "https://core.telegram.org/type/help.UserInfo"
section: ref
kind: type
layout: layout.njk
---

# Help.UserInfo

*Тип из схемы TL.*

> User info

## Определение TL

```
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;

---functions---

help.getUserInfo#38a08d3 user_id:InputUser = help.UserInfo;
help.editUserInfo#66b91b70 user_id:InputUser message:string entities:Vector<MessageEntity> = help.UserInfo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.userInfoEmpty](/constructor/help.userInfoEmpty/) | Internal use |
| [help.userInfo](/constructor/help.userInfo/) | Internal use |

## Методы

| Method | Описание |
|---|---|
| [help.getUserInfo](/method/help.getUserInfo/) | Can only be used by TSF members to obtain internal information. |
| [help.editUserInfo](/method/help.editUserInfo/) | Internal use |
