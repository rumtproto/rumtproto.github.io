---
title: "users.Users (тип)"
original: "https://core.telegram.org/type/users.Users"
section: ref
kind: type
layout: layout.njk
---

# users.Users

*Тип из схемы TL.*

> Describes a list of users (or bots).

## Определение TL

```
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;

---functions---

bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [users.users](/constructor/users.users/) | Describes a list of users (or bots). |
| [users.usersSlice](/constructor/users.usersSlice/) | Describes a partial list of users. |

## Методы

| Method | Описание |
|---|---|
| [bots.getBotRecommendations](/method/bots.getBotRecommendations/) | Obtain a list of similarly themed bots, selected based on similarities in their subscriber bases, see [here »](https://core.telegram.org/api/recommend) for more info. |
