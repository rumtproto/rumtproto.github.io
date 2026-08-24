---
title: "account.PasswordSettings"
original: "https://core.telegram.org/type/account.PasswordSettings"
section: ref
kind: type
description: "Личные сведения, связанные с информацией о пароле (почта для восстановления, данные Telegram Passport и так далее)"
layout: layout.njk
---

# account.PasswordSettings

Личные сведения, связанные с информацией о пароле (почта для восстановления, данные Telegram [Passport](https://core.telegram.org/passport) и так далее)

```
account.passwordSettings#9a5c33e5 flags:# email:flags.0?string secure_settings:flags.1?SecureSecretSettings = account.PasswordSettings;

---functions---

account.getPasswordSettings#9cd4eaf9 password:InputCheckPasswordSRP = account.PasswordSettings;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/account.passwordSettings">account.passwordSettings</a></td><td>Личные сведения, связанные с информацией о пароле (почта для восстановления, данные Telegram <a href="/passport">Passport</a> и так далее)</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/account.getPasswordSettings">account.getPasswordSettings</a></td><td>Получить личные данные, связанные с настройками пароля (резервный адрес электронной почты, данные telegram <a href="/passport">passport</a> &amp; т. д.)</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Passport: руководство](https://core.telegram.org/passport)

Telegram Passport — единый способ авторизации для сервисов, которым нужна идентификация личности.
