---
title: "account.changeAuthorizationSettings"
original: "https://core.telegram.org/method/account.changeAuthorizationSettings"
section: ref
kind: method
description: "Изменить настройки, связанные с сессией."
layout: layout.njk
---

# account.changeAuthorizationSettings

Изменить настройки, связанные с сессией.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.changeAuthorizationSettings#40f48462 flags:# confirmed:flags.3?true hash:long encrypted_requests_disabled:flags.0?Bool call_requests_disabled:flags.1?Bool = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>confirmed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если установлено, <a href="/api/auth#confirming-login">подтверждает только что созданную сессию входа »</a>.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Идентификатор сессии из конструктора <a href="/constructor/authorization">authorization</a>, который можно получить с помощью <a href="/method/account.getAuthorizations">account.getAuthorizations</a></td></tr><tr><td><strong>encrypted_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>Включить или отключить приём зашифрованных чатов: если флаг не установлен, прежняя настройка не меняется</td></tr><tr><td><strong>call_requests_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Bool">Bool</a></td><td>Включить или отключить приём звонков: если флаг не установлен, прежняя настройка не меняется</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>HASH_INVALID</td><td>Указанный хеш недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.

#### [authorization](/constructor/authorization/)

Активная сессия

#### [account.getAuthorizations](/method/account.getAuthorizations/)

Получить список активных сессий
