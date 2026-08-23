---
title: "users.usersSlice (конструктор)"
original: "https://core.telegram.org/constructor/users.usersSlice"
section: ref
kind: constructor
layout: layout.njk
---

# users.usersSlice

*Конструктор из схемы TL.*

> Describes a partial list of users.

## Определение TL

```
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Total number of users (bigger than the users specified in users) |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Subset of users. |

## Тип

[users.Users](/type/users.Users/)
