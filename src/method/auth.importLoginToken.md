---
title: "auth.importLoginToken"
original: "https://core.telegram.org/method/auth.importLoginToken"
section: ref
kind: method
description: "Вход с использованием перенаправленного токена входа, который формируется при несовпадении DC во время входа по QR-коду."
layout: layout.njk
---

# auth.importLoginToken

Вход с использованием перенаправленного токена входа, который формируется при несовпадении DC во время [входа по QR-коду](/api/qr-login/).

Подробнее см. [вход по QR-коду](/api/qr-login/).

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;
---functions---
auth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен входа</td></tr></tbody></table>

### Результат

[auth.LoginToken](/type/auth.LoginToken/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AUTH_TOKEN_ALREADY_ACCEPTED</td><td>Указанный токен авторизации уже был принят.</td></tr><tr><td>400</td><td>AUTH_TOKEN_EXPIRED</td><td>Срок действия токена авторизации истёк.</td></tr><tr><td>400</td><td>AUTH_TOKEN_INVALID</td><td>Указанный токен авторизации недействителен.</td></tr><tr><td>400</td><td>AUTH_TOKEN_INVALIDX</td><td>Указанный токен авторизации недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по QR-коду](/api/qr-login/)

Вход по QR-коду
