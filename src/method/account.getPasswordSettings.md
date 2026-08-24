---
title: "account.getPasswordSettings"
original: "https://core.telegram.org/method/account.getPasswordSettings"
section: ref
kind: method
description: "Получить личные данные, связанные с настройками пароля (резервный адрес электронной почты, данные telegram passport и т. д.)"
layout: layout.njk
---

# account.getPasswordSettings

Получить личные данные, связанные с настройками пароля (резервный адрес электронной почты, данные telegram [passport](https://core.telegram.org/passport) и т. д.)

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;
---functions---
account.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>Пароль (см. <a href="/api/srp">SRP</a>)</td></tr></tbody></table>

### Результат

[account.PasswordSettings](/type/account.PasswordSettings/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
