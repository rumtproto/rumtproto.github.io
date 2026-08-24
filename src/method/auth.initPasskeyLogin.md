---
title: "auth.initPasskeyLogin"
original: "https://core.telegram.org/method/auth.initPasskeyLogin"
section: ref
kind: method
description: "Начать вход по ключу доступа через неавторизованное подключение; подробнее см. здесь »."
layout: layout.njk
---

# auth.initPasskeyLogin

Начать вход по ключу доступа через неавторизованное подключение; подробнее см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

```
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;
---functions---
auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш идентификатора приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr></tbody></table>

### Результат

[auth.PasskeyLoginOptions](/type/auth.PasskeyLoginOptions/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>Недействительный API ID.</td></tr><tr><td>500</td><td>AUTH_RESTART</td><td>Начать процесс авторизации заново.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
