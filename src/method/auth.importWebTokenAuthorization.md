---
title: "auth.importWebTokenAuthorization"
original: "https://core.telegram.org/method/auth.importWebTokenAuthorization"
section: ref
kind: method
description: "Вход путём импорта токена авторизации"
layout: layout.njk
---

# auth.importWebTokenAuthorization

Вход путём импорта токена авторизации

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/obtaining_api_id">API ID</a></td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/obtaining_api_id">Хеш API</a></td></tr><tr><td><strong>web_auth_token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен авторизации</td></tr></tbody></table>

### Результат

[auth.Authorization](/type/auth.Authorization/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>Недействительный API ID.</td></tr><tr><td>400</td><td>WEBAUTH_TOKEN_EXPIRED</td><td>Срок действия указанного токена авторизации истёк.</td></tr></tbody></table>

### Связанные страницы

#### [Создание своего приложения Telegram](/api/obtaining_api_id/)

Как получить идентификатор приложения и создать новое приложение Telegram.
