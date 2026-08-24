---
title: "users.UserFull"
original: "https://core.telegram.org/type/users.UserFull"
section: ref
kind: type
description: "Полная информация о пользователе с прилагаемыми контекстными пирами для реакций"
layout: layout.njk
---

# users.UserFull

Полная информация о пользователе с прилагаемыми контекстными пирами для реакций

```
users.userFull#3b6d152e full_user:UserFull chats:Vector<Chat> users:Vector<User> = users.UserFull;

---functions---

users.getFullUser#b60f5918 id:InputUser = users.UserFull;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/users.userFull">users.userFull</a></td><td>Полная информация о пользователе</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/users.getFullUser">users.getFullUser</a></td><td>Возвращает расширенную информацию о пользователе по идентификатору.</td></tr></tbody></table>
