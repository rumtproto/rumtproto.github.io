---
title: "authorization"
original: "https://core.telegram.org/constructor/authorization"
section: ref
kind: constructor
description: "Активная сессия"
layout: layout.njk
---

# authorization

Активная сессия

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>current</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли это текущей сессией</td></tr><tr><td><strong>official_app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Принадлежит ли сеанс официальному приложению</td></tr><tr><td><strong>password_pending</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Ожидает ли сеанс всё ещё ввода пароля двухфакторной аутентификации</td></tr><tr><td><strong>encrypted_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Будет ли эта сессия принимать секретные чаты</td></tr><tr><td><strong>call_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Будет ли эта сессия принимать звонки</td></tr><tr><td><strong>unconfirmed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Является ли сессия <a href="/api/auth#confirming-login">неподтверждённой, подробнее см. здесь »</a>.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Идентификатор</td></tr><tr><td><strong>device_model</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Модель устройства</td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Платформа</td></tr><tr><td><strong>system_version</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Версия системы</td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/obtaining_api_id">API ID</a></td></tr><tr><td><strong>app_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название приложения</td></tr><tr><td><strong>app_version</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Версия приложения</td></tr><tr><td><strong>date_created</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда была создана сессия</td></tr><tr><td><strong>date_active</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда сессия была активна в последний раз</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Последний известный IP-адрес</td></tr><tr><td><strong>country</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Страна, определённая по IP</td></tr><tr><td><strong>region</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Регион, определённый по IP</td></tr></tbody></table>

### Тип

[Authorization](/type/Authorization/)

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.

#### [Создание своего приложения Telegram](/api/obtaining_api_id/)

Как получить идентификатор приложения и создать новое приложение Telegram.
