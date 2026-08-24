---
title: "auth.checkPassword"
original: "https://core.telegram.org/method/auth.checkPassword"
section: ref
kind: method
description: "Попытаться войти в аккаунт, защищённый паролем двухфакторной аутентификации."
layout: layout.njk
---

# auth.checkPassword

Попытаться войти в аккаунт, защищённый [паролем двухфакторной аутентификации](/api/srp/).

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>password</strong></td><td style="text-align: center;"><a href="/type/InputCheckPasswordSRP">InputCheckPasswordSRP</a></td><td>Пароль аккаунта (см. <a href="/api/srp">SRP</a>)</td></tr></tbody></table>

### Результат

[auth.Authorization](/type/auth.Authorization/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>500</td><td>AUTH_KEY_UNSYNCHRONIZED</td><td>Внутренняя ошибка, повторите вызов метода.</td></tr><tr><td>400</td><td>PASSWORD_HASH_INVALID</td><td>Указанный хеш пароля недействителен.</td></tr><tr><td>400</td><td>SRP_ID_INVALID</td><td>Указан недействительный SRP ID.</td></tr><tr><td>400</td><td>SRP_PASSWORD_CHANGED</td><td>Пароль изменился.</td></tr></tbody></table>

### Связанные страницы

#### [Двухфакторная аутентификация](/api/srp/)

Как войти в аккаунт пользователя, если включена двухфакторная аутентификация, и как сменить пароль.
