---
title: "auth.requestFirebaseSms"
original: "https://core.telegram.org/method/auth.requestFirebaseSms"
section: ref
kind: method
description: "Запросить SMS с кодом через Firebase."
layout: layout.njk
---

# auth.requestFirebaseSms

Запросить SMS с кодом через Firebase.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.requestFirebaseSms#8e39261e flags:# phone_number:string phone_code_hash:string safety_net_token:flags.0?string play_integrity_token:flags.2?string ios_push_secret:flags.1?string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода, возвращённый методом <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>safety_net_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>На Android — объект JWS, полученный так, как описано в <a href="/api/auth">документации по авторизации »</a></td></tr><tr><td><strong>play_integrity_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>На Android — объект, полученный так, как описано в <a href="/api/auth">документации по авторизации »</a></td></tr><tr><td><strong>ios_push_secret</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Секретный токен, полученный через apple push notification</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>Отсутствует phone_code.</td></tr><tr><td>400</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr></tbody></table>

### Связанные страницы

#### [auth.sendCode](/method/auth.sendCode/)

Отправить код подтверждения для входа

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
