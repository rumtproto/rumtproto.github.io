---
title: "users.Users"
original: "https://core.telegram.org/type/users.Users"
section: ref
kind: type
description: "Описывает список пользователей (или ботов)."
layout: layout.njk
---

# users.Users

Описывает список пользователей (или ботов).

```
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;

---functions---

bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/users.users">users.users</a></td><td>Описывает список пользователей (или ботов).</td></tr><tr><td><a href="/constructor/users.usersSlice">users.usersSlice</a></td><td>Описывает частичный список пользователей.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/bots.getBotRecommendations">bots.getBotRecommendations</a></td><td>Получить список ботов схожей тематики, отобранных по сходству их аудитории подписчиков; подробнее см. <a href="/api/recommend">здесь »</a>.</td></tr></tbody></table>
