---
title: "auth.recoverPassword"
original: "https://core.telegram.org/method/auth.recoverPassword"
section: ref
kind: method
description: "Сбросить пароль двухфакторной аутентификации с помощью кода восстановления, отправленного методом auth.requestPasswordRecovery."
layout: layout.njk
---

# auth.recoverPassword

Сбросить [пароль двухфакторной аутентификации](/api/srp/) с помощью кода восстановления, отправленного методом [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/).

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.recoverPassword#37096c70 flags:# code:string new_settings:flags.0?account.PasswordInputSettings = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Код, полученный по электронной почте</td></tr><tr><td><strong>new_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/account.PasswordInputSettings">account.PasswordInputSettings</a></td><td>Новый пароль</td></tr></tbody></table>

### Результат

[auth.Authorization](/type/auth.Authorization/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CODE_EMPTY</td><td>Указанный код пуст.</td></tr><tr><td>400</td><td>NEW_SETTINGS_INVALID</td><td>Новые настройки пароля недействительны.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [auth.requestPasswordRecovery](/method/auth.requestPasswordRecovery/)

Запросить код восстановления [пароля двухфакторной аутентификации](/api/srp/); доступно только для аккаунтов с [настроенной почтой для восстановления](/api/srp/#email-verification).
