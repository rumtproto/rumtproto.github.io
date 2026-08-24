---
title: "account.PasswordInputSettings"
original: "https://core.telegram.org/type/account.PasswordInputSettings"
section: ref
kind: type
description: "Конструктор для установки нового пароля двухфакторной аутентификации по SRP"
layout: layout.njk
---

# account.PasswordInputSettings

Конструктор для установки нового [пароля двухфакторной аутентификации по SRP](/api/srp/)

```
account.passwordInputSettings#c23727c9 flags:# new_algo:flags.0?PasswordKdfAlgo new_password_hash:flags.0?bytes hint:flags.0?string email:flags.1?string new_secure_settings:flags.2?SecureSecretSettings = account.PasswordInputSettings;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.passwordInputSettings">account.passwordInputSettings</a></td><td>Параметры настройки нового пароля</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
