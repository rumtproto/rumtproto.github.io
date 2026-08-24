---
title: "auth.LoggedOut"
original: "https://core.telegram.org/type/auth.LoggedOut"
section: ref
kind: type
description: "Токен будущей авторизации », который будет использоваться при последующих авторизациях"
layout: layout.njk
---

# auth.LoggedOut

[Токен будущей авторизации »](/api/auth/#future-auth-tokens), который будет использоваться при последующих авторизациях

```
auth.loggedOut#c3a2835f flags:# future_auth_token:flags.0?bytes = auth.LoggedOut;

---functions---

auth.logOut#3e72ba19 = auth.LoggedOut;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/auth.loggedOut">auth.loggedOut</a></td><td><a href="/api/auth#future-auth-tokens">Токен будущей авторизации »</a>, который следует использовать при последующих авторизациях</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/auth.logOut">auth.logOut</a></td><td>Выполняет выход пользователя.</td></tr></tbody></table>

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
