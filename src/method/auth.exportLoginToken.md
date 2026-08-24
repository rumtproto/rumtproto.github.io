---
title: "auth.exportLoginToken"
original: "https://core.telegram.org/method/auth.exportLoginToken"
section: ref
kind: method
description: "Сгенерировать токен входа для входа по QR-коду."
layout: layout.njk
---

# auth.exportLoginToken

Сгенерировать токен входа для [входа по QR-коду](/api/qr-login/).  
Сгенерированный токен входа следует закодировать в base64url и показать в QR-коде в виде `tg://login?token=base64encodedtoken` — [глубокой ссылки »](/api/links/#qr-code-login-links).

Подробнее см. [вход по QR-коду](/api/qr-login/).

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;
---functions---
auth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш идентификатора приложения (см. <a href="/myapp">Настройка приложения</a>)</td></tr><tr><td><strong>except_ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Список идентификаторов уже вошедших пользователей — чтобы не выполнить вход дважды под одним и тем же пользователем</td></tr></tbody></table>

### Результат

[auth.LoginToken](/type/auth.LoginToken/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>Недействительный API ID.</td></tr><tr><td>400</td><td>API_ID_PUBLISHED_FLOOD</td><td>Этот API id был где-то опубликован, использовать его больше нельзя.</td></tr><tr><td>500</td><td>AUTH_RESTART</td><td>Начать процесс авторизации заново.</td></tr></tbody></table>

### Связанные страницы

#### [Вход по QR-коду](/api/qr-login/)

Вход по QR-коду

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
