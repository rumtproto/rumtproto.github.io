---
title: "account.resetAuthorization"
original: "https://core.telegram.org/method/account.resetAuthorization"
section: ref
kind: method
description: "Завершить активную авторизованную сессию по её хешу"
layout: layout.njk
---

# account.resetAuthorization

Завершить активную [авторизованную сессию](/api/auth/) по её хешу

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.resetAuthorization#df77f3bc hash:long = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш сессии</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>406</td><td>FRESH_RESET_AUTHORISATION_FORBIDDEN</td><td>Нельзя завершить другие сессии, если с момента входа в текущую сессию прошло менее 24 часов.</td></tr><tr><td>400</td><td>HASH_INVALID</td><td>Указанный хеш недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
