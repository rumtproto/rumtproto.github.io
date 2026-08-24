---
title: "account.passwordSettings"
original: "https://core.telegram.org/constructor/account.passwordSettings"
section: ref
kind: constructor
description: "Личные сведения, связанные с информацией о пароле (почта для восстановления, данные Telegram Passport и так далее)"
layout: layout.njk
---

# account.passwordSettings

Личные сведения, связанные с информацией о пароле (почта для восстановления, данные Telegram [Passport](https://core.telegram.org/passport) и так далее)

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>email</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td><a href="/api/srp#email-verification">Почта для восстановления пароля двухфакторной аутентификации</a></td></tr><tr><td><strong>secure_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/SecureSecretSettings">SecureSecretSettings</a></td><td>Настройки Telegram <a href="/passport">passport</a></td></tr></tbody></table>

### Тип

[account.PasswordSettings](/type/account.PasswordSettings/)

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
