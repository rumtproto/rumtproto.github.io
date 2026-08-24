---
title: "auth.resendCode"
original: "https://core.telegram.org/method/auth.resendCode"
section: ref
kind: method
description: "Повторно отправить код входа другим способом; тип кода определяется значением, возвращённым предыдущим вызовом auth.sendCode/auth.resendCode: подробнее см. вход."
layout: layout.njk
---

# auth.resendCode

Повторно отправить код входа другим способом; тип кода определяется значением, возвращённым предыдущим вызовом auth.sendCode/auth.resendCode: подробнее см. [вход](/api/auth/).

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
auth.resendCode#cae47523 flags:# phone_number:string phone_code_hash:string reason:flags.0?string = auth.SentCode;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш телефонного кода, полученный от <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>reason</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Только для официальных клиентов: используется, если проверка целостности устройства не удалась и не удалось получить секрет для вызова <a href="/method/auth.requestFirebaseSms">auth.requestFirebaseSms</a>: в этом случае здесь необходимо передать причину сбоя проверки целостности устройства.</td></tr></tbody></table>

### Результат

[auth.SentCode](/type/auth.SentCode/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>EMAIL_INSTALL_MISSING</td><td>Попытка отправить код на почту для восстановления, но почта не настроена.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>Отсутствует phone_code.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>Срок действия указанного вами кода подтверждения истёк.</td></tr><tr><td>400</td><td>PHONE_CODE_HASH_EMPTY</td><td>Отсутствует phone_code_hash.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr><tr><td>406</td><td>SEND_CODE_UNAVAILABLE</td><td>Возвращается, когда все доступные для этого типа номера способы уже были использованы (например, сначала flash-звонок, затем SMS, после чего может быть возвращена эта ошибка при попытке отправить код повторно ещё раз).</td></tr></tbody></table>

### Связанные страницы

#### [auth.sendCode](/method/auth.sendCode/)

Отправить код подтверждения для входа

#### [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/)

Запросить SMS с кодом через Firebase.

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
