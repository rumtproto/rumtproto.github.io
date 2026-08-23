---
title: "users.UserFull (тип)"
original: "https://core.telegram.org/type/users.UserFull"
section: ref
kind: type
layout: layout.njk
---

# users.UserFull

*Тип из схемы TL.*

> Full user information, with attached context peers for reactions

## Определение TL

```
users.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;

---functions---

users.getFullUser#b60f5918 id:InputUser = users.UserFull;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [users.userFull](/constructor/users.userFull/) | Full user information |

## Методы

| Method | Описание |
|---|---|
| [users.getFullUser](/method/users.getFullUser/) | Returns extended user info by ID. |
