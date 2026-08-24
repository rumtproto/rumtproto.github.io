---
title: "auth.sentCodeTypeEmailCode"
original: "https://core.telegram.org/constructor/auth.sentCodeTypeEmailCode"
section: ref
kind: constructor
description: "Код был отправлен на ранее заданный адрес электронной почты для входа »"
layout: layout.njk
---

# auth.sentCodeTypeEmailCode

Код был отправлен на [ранее заданный адрес электронной почты для входа »](/api/auth/#email-verification)

```
auth.sentCodeTypeEmailCode#f450f59b flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:string length:int reset_available_period:flags.3?int reset_pending_date:flags.4?int = auth.SentCodeType;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>apple_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешена ли авторизация через Apple ID</td></tr><tr><td><strong>google_signin_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Разрешена ли авторизация через Google ID</td></tr><tr><td><strong>email_pattern</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/pattern">Шаблон</a> адреса электронной почты</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина отправленного кода подтверждения</td></tr><tr><td><strong>reset_available_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Клиенты должны подождать указанное число секунд, прежде чем позволить пользователю вызвать <a href="/method/auth.resetLoginEmail">auth.resetLoginEmail</a> (для пользователей <a href="/api/premium">Premium</a> будет 0).</td></tr><tr><td><strong>reset_pending_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Сброс адреса электронной почты уже был запрошен и произойдёт в указанную дату.</td></tr></tbody></table>

### Тип

[auth.SentCodeType](/type/auth.SentCodeType/)

### Связанные страницы

#### [Сопоставление с шаблоном](/api/pattern/)

Некоторые методы требуют, чтобы клиент проверил, соответствуют ли данные, полученные из внешнего источника, определённому шаблону.

#### [auth.resetLoginEmail](/method/auth.resetLoginEmail/)

Сбросить [почту для входа »](/api/auth/#email-verification).

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
