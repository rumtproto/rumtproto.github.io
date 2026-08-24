---
title: "auth.finishPasskeyLogin"
original: "https://core.telegram.org/method/auth.finishPasskeyLogin"
section: ref
kind: method
description: "Завершить вход по ключу доступа через неавторизованное подключение; подробнее см. здесь »."
layout: layout.njk
---

# auth.finishPasskeyLogin

Завершить вход по ключу доступа через неавторизованное подключение; подробнее см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

Обязан отправляться в родной DC пользователя, определяемый по `user_handle` (`dcId:userId`) из ответа passkey; полное описание процедуры см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>credential</strong></td><td style="text-align: center;"><a href="/type/InputPasskeyCredential">InputPasskeyCredential</a></td><td>Результат подтверждения ключа доступа.</td></tr><tr><td><strong>from_dc_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Идентификатор DC, использованный для исходного запроса <a href="/method/auth.initPasskeyLogin">auth.initPasskeyLogin</a>; задаётся, только если DC пользователя отличается от DC, использованного для исходного запроса <a href="/method/auth.initPasskeyLogin">auth.initPasskeyLogin</a>.</td></tr><tr><td><strong>from_auth_key_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор авторизационного ключа для соединения с <code>from_dc_id</code> (при включённом PFS используйте идентификатор постоянного авторизационного ключа); задаётся, только если DC пользователя отличается от DC, использованного для первоначального вызова <a href="/method/auth.initPasskeyLogin">auth.initPasskeyLogin</a>.</td></tr></tbody></table>

### Результат

[auth.Authorization](/type/auth.Authorization/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>500</td><td>AUTH_RESTART</td><td>Начать процесс авторизации заново.</td></tr><tr><td>400</td><td>CREDENTIAL_INVALID</td><td>Указанные платёжные реквизиты недействительны.</td></tr><tr><td>400</td><td>PASSKEY_ORIGIN_MISMATCH</td><td>Сторонние клиенты пока не поддерживают passkey, даже при смене origin.</td></tr></tbody></table>

### Связанные страницы

#### [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/)

Начать вход по ключу доступа через неавторизованное подключение; подробнее см. [здесь »](/api/passkeys/#logging-in-with-a-passkey).

#### [Вход по passkey](/api/passkeys/)

Мгновенный вход в Telegram с помощью passkey — по PIN-коду или биометрии вместо SMS-кода.
