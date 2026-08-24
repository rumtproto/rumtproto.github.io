---
title: "auth.importBotAuthorization"
original: "https://core.telegram.org/method/auth.importBotAuthorization"
section: ref
kind: method
description: "Вход как бот"
layout: layout.njk
---

# auth.importBotAuthorization

Вход как бот

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importBotAuthorization#67a3ff2c flags:int api_id:int api_hash:string bot_auth_token:string = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:flags] Зарезервировано для будущего использования</td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш идентификатора приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>bot_auth_token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен бота (см. <a href="/bots">боты</a>)</td></tr></tbody></table>

### Результат

[auth.Authorization](/type/auth.Authorization/)

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ACCESS_TOKEN_EXPIRED</td><td>Срок действия токена доступа истёк.</td></tr><tr><td>400</td><td>ACCESS_TOKEN_INVALID</td><td>Недействительный токен доступа.</td></tr><tr><td>400</td><td>API_ID_INVALID</td><td>Недействительный API ID.</td></tr><tr><td>400</td><td>API_ID_PUBLISHED_FLOOD</td><td>Этот API id был где-то опубликован, использовать его больше нельзя.</td></tr></tbody></table>

### Связанные страницы

#### [Боты: введение для разработчиков](https://core.telegram.org/bots)

Боты — небольшие приложения, работающие полностью внутри приложения Telegram.
