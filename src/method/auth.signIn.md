---
title: "auth.signIn"
original: "https://core.telegram.org/method/auth.signIn"
section: ref
kind: method
description: "Выполняет вход пользователя с подтверждённым номером телефона."
layout: layout.njk
---

# auth.signIn

Выполняет вход пользователя с подтверждённым номером телефона.

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.signIn#8d52a951 flags:# phone_number:string phone_code_hash:string phone_code:flags.0?string email_verification:flags.1?EmailVerification = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер телефона в международном формате</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор SMS-сообщения, полученный от <a href="/method/auth.sendCode">auth.sendCode</a></td></tr><tr><td><strong>phone_code</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Корректный цифровой код из SMS-сообщения</td></tr><tr><td><strong>email_verification</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/EmailVerification">EmailVerification</a></td><td>Код подтверждения или токен электронной почты</td></tr></tbody></table>

### Результат

[auth.Authorization](/type/auth.Authorization/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>500</td><td>AUTH_RESTART</td><td>Начать процесс авторизации заново.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>Отсутствует phone_code.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>Срок действия указанного вами кода подтверждения истёк.</td></tr><tr><td>400</td><td>PHONE_CODE_INVALID</td><td>Указан недействительный телефонный код.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>Недействительный номер телефона.</td></tr><tr><td>400</td><td>PHONE_NUMBER_UNOCCUPIED</td><td>Этот номер телефона ещё не используется.</td></tr><tr><td>500</td><td>SIGN_IN_FAILED</td><td>Сбой при входе в аккаунт.</td></tr><tr><td>406</td><td>UPDATE_APP_TO_LOGIN</td><td>Обновите клиент, чтобы выполнить вход.</td></tr></tbody></table>

### Связанные страницы

#### [auth.sendCode](/method/auth.sendCode/)

Отправить код подтверждения для входа
