---
title: "users.userFull (конструктор)"
original: "https://core.telegram.org/constructor/users.userFull"
section: ref
kind: constructor
layout: layout.njk
---

# users.userFull

*Конструктор из схемы TL.*

> Full user information

## Определение TL

```
users.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| full_user | [UserFull](/type/UserFull/) | Full user information |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Mentioned chats |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Mentioned users |

## Тип

[users.UserFull](/type/users.UserFull/)
