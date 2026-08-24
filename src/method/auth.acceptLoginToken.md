---
title: "auth.acceptLoginToken"
original: "https://core.telegram.org/method/auth.acceptLoginToken"
section: ref
kind: method
description: "Принять токен входа по QR-коду, выполнив вход в приложении, которое его сгенерировало."
layout: layout.njk
---

# auth.acceptLoginToken

Принять токен входа по QR-коду, выполнив вход в приложении, которое его сгенерировало.

Возвращает информацию о новой сессии.

Подробнее см. [вход по QR-коду](/api/qr-login/).

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;
---functions---
auth.acceptLoginToken#e894ad4d token:bytes = Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Токен входа, встроенный в QR-код; подробнее см. <a href="/api/qr-login">вход по QR-коду</a>.</td></tr></tbody></table>

### Результат

[Authorization](/type/Authorization/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AUTH_TOKEN_ALREADY_ACCEPTED</td><td>Указанный токен авторизации уже был принят.</td></tr><tr><td>400</td><td>AUTH_TOKEN_EXCEPTION</td><td>При импорте токена авторизации произошла ошибка.</td></tr><tr><td>400</td><td>AUTH_TOKEN_EXPIRED</td><td>Срок действия токена авторизации истёк.</td></tr><tr><td>400</td><td>AUTH_TOKEN_INVALIDX</td><td>Указанный токен авторизации недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по QR-коду](/api/qr-login/)

Вход по QR-коду
