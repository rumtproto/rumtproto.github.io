---
title: "account.passwordInputSettings"
original: "https://core.telegram.org/constructor/account.passwordInputSettings"
section: ref
kind: constructor
description: "Параметры настройки нового пароля"
layout: layout.njk
---

# account.passwordInputSettings

Параметры настройки нового пароля

```
account.passwordInputSettings#c23727c9 flags:# new_algo:flags.0?PasswordKdfAlgo new_password_hash:flags.0?bytes hint:flags.0?string email:flags.1?string new_secure_settings:flags.2?SecureSecretSettings = account.PasswordInputSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>new_algo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PasswordKdfAlgo">PasswordKdfAlgo</a></td><td><a href="/api/srp">Алгоритм SRP</a>, который следует использовать</td></tr><tr><td><strong>new_password_hash</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td><a href="/api/srp">Вычисленный хеш пароля</a></td></tr><tr><td><strong>hint</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Текстовая подсказка для пароля</td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Адрес электронной почты для восстановления пароля</td></tr><tr><td><strong>new_secure_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/SecureSecretSettings">SecureSecretSettings</a></td><td>Настройки Telegram <a href="/passport">passport</a></td></tr></tbody></table>

### Тип

[account.PasswordInputSettings](/type/account.PasswordInputSettings/)

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
