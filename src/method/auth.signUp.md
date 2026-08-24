---
title: "auth.signUp"
original: "https://core.telegram.org/method/auth.signUp"
section: ref
kind: method
description: "Регистрирует в системе подтверждённый номер телефона."
layout: layout.njk
---

# auth.signUp

Регистрирует в системе подтверждённый номер телефона.

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.signUp#aac7b717 flags:# no_joined_notifications:flags.0?true phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>no_joined_notifications</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, пользователи Telegram, у которых <code>phone_number</code> уже добавлен в контакты, <em>не</em> получат уведомление о регистрации этого пользователя.</td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона в международном формате</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор SMS-сообщения</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новое имя пользователя</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Новая фамилия пользователя</td></tr></tbody></table>

### Результат

[auth.Authorization](/type/auth.Authorization/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>FIRSTNAME_INVALID</td><td>Имя недействительно.</td></tr><tr><td>400</td><td>LASTNAME_INVALID</td><td>Фамилия недействительна.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>Отсутствует phone_code.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>Срок действия указанного вами кода подтверждения истёк.</td></tr><tr><td>400</td><td>PHONE_CODE_INVALID</td><td>Указан недействительный телефонный код.</td></tr><tr><td>400</td><td>PHONE_NUMBER_FLOOD</td><td>Вы запрашивали код слишком много раз.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr><tr><td>400</td><td>PHONE_NUMBER_OCCUPIED</td><td>Этот номер телефона уже используется.</td></tr></tbody></table>
